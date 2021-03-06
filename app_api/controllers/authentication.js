const passport = require('passport');
const User = require('mongoose').model('User');
const winston = require('../config/winston');
const { ErrorHandler } = require('../models/error')

const register = (req, res, next) => {

  winston.info('Function=register');
  winston.info('req.body.username='+req.body.username);
  if (!req.body.username || !req.body.password) {
    const err = new ErrorHandler(400, "All fields required");
    return next(err);    
  }

  const user = new User();
  user.username = req.body.username; 
  user.role = req.body.role; 
  user.setPassword(req.body.password);
  winston.info('username='+user.username+' role='+user.role);

  user.save((err) => {
    if (err) {
      const error = new ErrorHandler(400, "Username exists.");
      next(error);
    } else {
      const token = user.generateJwt(), id = user._id, username = user.username, role = user.role;
      winston.info('Saved User into database: id='+id+' username='+username+' role='+role);      
      res.status(200).json({id, username, role, token});
    }
  })
};

const login = (req, res, next) => {
  winston.info('Function=login');
  winston.info('req.body.username='+req.body.username);  
  if (!req.body.username || !req.body.password) {    
    const err = new ErrorHandler(400, "All fields required");
    return next(err); 
  }
  //use local strategy to fetch the user 
  passport.authenticate('local', (err, user, info) => {    
    if (err) {      
      const error = new ErrorHandler(404, err);
      return next(error);           
    }
    if (user) {      
      const token = user.generateJwt();
      const id = user._id;
      const username = user.username;
      const role = user.role;
      winston.info('Found User: id='+id+' username='+username+' role='+role);  
      res.status(200).json({id: user._id, username: user.username, role: user.role, token: token});
    } else {      
      res.status(401).json(info);
    }
  })(req, res, next);  
};

module.exports = {
  register,
  login
};