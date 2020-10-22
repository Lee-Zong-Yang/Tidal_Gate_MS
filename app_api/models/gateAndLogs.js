const mongoose = require('mongoose');
const {
  baseQuestionSchema,
  textQuestionSchema,
  dropDownQuestionSchema,
  dateQuestionSchema,
  categoryLabelSchema,
  refGateQuestionSchema,
  checkboxQuestionSchema,
  rtxQuestionSchema, 
  uniqueTextFieldSchema,
  fullTextBoxSchema } = require('./form');

//Gate
const gateSchema = new mongoose.Schema({
  schemaOf: String,
  id: String,
  profilePhoto: String,
  timestamp: Number,
  gateInfo: baseQuestionSchema,
  gateName: uniqueTextFieldSchema,
  gateID: uniqueTextFieldSchema,
  mitigationScheme: textQuestionSchema,
  longitude: textQuestionSchema,
  lattitude: textQuestionSchema,
  gateType: textQuestionSchema,
  noOfBays: textQuestionSchema,
  SCADACommisionYear: textQuestionSchema,
  SCADACommisionMonth: textQuestionSchema,
  powerSourceType: textQuestionSchema,
  actuatorsNSensors: textQuestionSchema,
  actuatorBrand: textQuestionSchema,
  actuatorModel: textQuestionSchema,
  actuatorPower: textQuestionSchema,
  sensorBrand: textQuestionSchema,
  sensorController: textQuestionSchema,
  sensorHead: textQuestionSchema,
  SCADAComponents: textQuestionSchema,
  PLC: textQuestionSchema,
  HMIBrand: textQuestionSchema,
  HMIType: textQuestionSchema,
  HMIModel: textQuestionSchema,
  RTUEmbedded: textQuestionSchema,
  modemBrand: textQuestionSchema,
  modemCommunication: textQuestionSchema,
  modemConnectivity: textQuestionSchema,
  modemPhoneNo: textQuestionSchema,
  noOfModemAntennas: textQuestionSchema,
  UPSBrandNModel: textQuestionSchema,
  UPSBatteryType: textQuestionSchema,
  UPSBatteryCapacity: textQuestionSchema,
  controlSettings: textQuestionSchema,
  sensorLvl4: textQuestionSchema,
  sensorLvl20: textQuestionSchema,
  sensorLvlOffset: textQuestionSchema,
  gateDangerLvl: textQuestionSchema,
  gateAlertLvl: textQuestionSchema,
  gateControlSetpoint: textQuestionSchema,
  SMSSettings: textQuestionSchema,
  SMSLastSettings: textQuestionSchema,
  SMSName1: textQuestionSchema,
  no1: textQuestionSchema,
  SMSName2: textQuestionSchema,
  no2: textQuestionSchema,
  SMSName3: textQuestionSchema,
  no3: textQuestionSchema,
  SMSName4: textQuestionSchema,
  no4: textQuestionSchema,
  SMSName5: textQuestionSchema,
  no5: textQuestionSchema,
  SMSName6: textQuestionSchema,
  no6: textQuestionSchema,
  SMSName7: textQuestionSchema,
  no7: textQuestionSchema,
  SMSName8: textQuestionSchema,
  no8: textQuestionSchema,
  SMSName9: textQuestionSchema,
  no9: textQuestionSchema,
  SMSName10: textQuestionSchema,
  no10: textQuestionSchema,
  operatorName: textQuestionSchema,
  operatorPhone: textQuestionSchema,
  solarPowerSupply: textQuestionSchema,
  actuatorSolarChargeController: textQuestionSchema,
  actuatorSolarUsage: textQuestionSchema,
  actuatorSolarNoOfBatteries: textQuestionSchema,
  actuatorSolarBatteryCapacity: textQuestionSchema,
  actuatorInverterModel: textQuestionSchema,
  actuatorInverterOutput: textQuestionSchema,
  SCADASolarChargeController: textQuestionSchema,
  SCADASolarNoOfBatteries: textQuestionSchema,
  SCADASolarBatteryCapacity: textQuestionSchema,
  SCADAInverterModel: textQuestionSchema,
  SCADAInverterOutput: textQuestionSchema,
  lastUpdateLogLabel: textQuestionSchema,
  lastUpdateLog: fullTextBoxSchema
});

//Counter
const CounterSchema = new mongoose.Schema({
  _id: String,
  seq: { Number, default: 0 }
});
const counter = mongoose.model('Counter', CounterSchema);

//Inspection Log
const inspectionLogSchema = new mongoose.Schema({  
  schemaOf: String,
  id: Number,
  timestamp: { type: Number, default: new Date() },
  namaPenjaga: textQuestionSchema,
  noRujukan: textQuestionSchema,
  lokasiPintuAir: refGateQuestionSchema,
  jenisGearbox: textQuestionSchema,
  tarikh: dateQuestionSchema,
  strukturPintu: categoryLabelSchema,
  huluPintuAir: dropDownQuestionSchema,
  hilirPintuAir: dropDownQuestionSchema,
  pentasOperasi: dropDownQuestionSchema,
  railPentasOperasi: dropDownQuestionSchema,
  tangga: dropDownQuestionSchema,
  tempatDudukPintu: dropDownQuestionSchema,
  railPintuAir: dropDownQuestionSchema,
  cadanganSP: textQuestionSchema,
  badanPintuAir: categoryLabelSchema,
  framePintuAir: dropDownQuestionSchema,
  batuSeimbang: dropDownQuestionSchema,
  blokBearing: dropDownQuestionSchema,
  sistemPelincir: dropDownQuestionSchema,
  sealGetah: dropDownQuestionSchema,
  cadanganBPA: textQuestionSchema,
  mekanismaP: categoryLabelSchema,
  tangkiHidrolik: dropDownQuestionSchema,
  minyak: dropDownQuestionSchema,
  sistemPaip: dropDownQuestionSchema,
  hos: dropDownQuestionSchema,
  enjinDiesel: dropDownQuestionSchema,
  motoHidrolik: dropDownQuestionSchema,
  pamHidrolik: dropDownQuestionSchema,
  penyukatT: dropDownQuestionSchema,
  valvePengankut: dropDownQuestionSchema,
  valveMenurun: dropDownQuestionSchema,
  penyedutTekanan: dropDownQuestionSchema,
  cadanganMknmPgkt: textQuestionSchema,
  umum: categoryLabelSchema,
  spindle: dropDownQuestionSchema,
  wire: dropDownQuestionSchema,
  clip: dropDownQuestionSchema,
  tumbuckle: dropDownQuestionSchema,
  cat: dropDownQuestionSchema,
  cadanganUmum: textQuestionSchema,
  railPL: categoryLabelSchema,
  kalisAir: dropDownQuestionSchema,
  kekuatan: dropDownQuestionSchema,
  karat: dropDownQuestionSchema,
  catPaint: dropDownQuestionSchema,
  cadanganRPLLabel: textQuestionSchema,
  fungsiAirPintu: categoryLabelSchema,
  pelinciranL: dropDownQuestionSchema,
  haus: dropDownQuestionSchema,
  kP: dropDownQuestionSchema,
  pDPGG: dropDownQuestionSchema,
  wireAngkut: dropDownQuestionSchema,
  cadanganRPLText: textQuestionSchema,
  miscellaneous: categoryLabelSchema,
  accessRoad: dropDownQuestionSchema,
  stickGauge: dropDownQuestionSchema,
  others: textQuestionSchema,
  aITS: dropDownQuestionSchema,
  TSASIR: categoryLabelSchema,
  testedBy: textQuestionSchema,
  witnessedBy: textQuestionSchema,
  reviewedBy: textQuestionSchema,
  approvedBy: textQuestionSchema
});
// increment the counter before save
inspectionLogSchema.pre('save', function (next) {
  var doc = this;
  counter.findByIdAndUpdate({ _id: 'inspectionLog' }, { $inc: { seq: 1 } }, { new: true, upsert: true}, function (error, counter) {
    if (error)
      return next(error);
    doc.id = counter.seq;
    next();
  });
});

//Maintenance Log
const maintenanceLogSchema = new mongoose.Schema({
  schemaOf: String,
  id: Number,
  timestamp: { type: Number, default: new Date() },
  gateInfo: categoryLabelSchema,
  gateName: dropDownQuestionSchema,
  date: dateQuestionSchema,
  powerSupply415: categoryLabelSchema,
  redBlueTest: textQuestionSchema,
  redYellowTest: textQuestionSchema,
  yellowBlueTest: textQuestionSchema,
  rCCBReclose: dropDownQuestionSchema,
  rCCBFunc: dropDownQuestionSchema,
  powerSupply240: categoryLabelSchema,
  redNeutral: textQuestionSchema,
  yellowNeutral: textQuestionSchema,
  blueNeutral: textQuestionSchema,
  powerSupply24: textQuestionSchema,
  pwrSupply5: textQuestionSchema,
  solarPwrLbl: categoryLabelSchema,
  solarPwrTest: dropDownQuestionSchema,
  solarPwrTestVal: textQuestionSchema,
  solarPwrAmpTest: dropDownQuestionSchema,
  solarPwrAmpTestVal: textQuestionSchema,
  secondPwr: categoryLabelSchema,
  uPSBack: dropDownQuestionSchema,
  pwrResume: dropDownQuestionSchema,
  uPSBackTime: dropDownQuestionSchema,
  durationBack: textQuestionSchema,
  gateOper: categoryLabelSchema,
  actuatorOpen: dropDownQuestionSchema,
  actuatorClose: dropDownQuestionSchema,
  gateManual: dropDownQuestionSchema,
  gateAuto: dropDownQuestionSchema,
  emergency: dropDownQuestionSchema,
  waterLvl: categoryLabelSchema,
  upWaterLvl: textQuestionSchema,
  downWaterLvl: textQuestionSchema,
  veriUpRead: dropDownQuestionSchema,
  veriDownRead: dropDownQuestionSchema,
  touch: categoryLabelSchema,
  userLog: dropDownQuestionSchema,
  btnVeri: dropDownQuestionSchema,
  gateInfoVeri: dropDownQuestionSchema,
  sysEmerAlert: categoryLabelSchema,
  locEmerAlert: dropDownQuestionSchema,
  emerSMSAlert: dropDownQuestionSchema,
  gateInfoReq: dropDownQuestionSchema,
  gateInfoReqText: textQuestionSchema,
  actuatorFunc: categoryLabelSchema,
  actuatorLocRem: dropDownQuestionSchema,
  gateLoc: dropDownQuestionSchema,
  rep9VBattery: dropDownQuestionSchema,
  no9VBattery: textQuestionSchema,
  floodSurv: categoryLabelSchema,
  PTZCam: dropDownQuestionSchema,
  PTZCamFunc: dropDownQuestionSchema,
  rainGauge: categoryLabelSchema,
  rainGaugeFunc: dropDownQuestionSchema,
  ctrlPan: categoryLabelSchema,
  ctrlPanClean: dropDownQuestionSchema,
  ctrlPanMain: dropDownQuestionSchema,
  ctrlPanComp: dropDownQuestionSchema,
  summary: categoryLabelSchema,
  actionTakenCB: checkboxQuestionSchema,
  actionTakenRTX: rtxQuestionSchema,
  actionNeedCB: checkboxQuestionSchema,
  actionNeedRTX: rtxQuestionSchema,
  complete: dropDownQuestionSchema,
  testedBy: textQuestionSchema,
  witnessedBy: textQuestionSchema,
  reviewBy: textQuestionSchema,
  approveBy: textQuestionSchema
});
// increment the counter before save
maintenanceLogSchema.pre('save', function (next) {
  var doc = this;
  counter.findOneAndUpdate({ _id: 'maintenanceLog'}, {$inc: { seq: 1} }, { new: true, upsert: true}, function (error, counter) {
    if (error) { return next(error); }
    doc.id = counter.seq;
    next();
  });
});

module.exports = {
  gateSchema,
  inspectionLogSchema,
  maintenanceLogSchema
}

