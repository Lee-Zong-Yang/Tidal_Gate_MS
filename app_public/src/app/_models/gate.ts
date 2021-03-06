import { QuestionBase } from './questionType';

export class Gate {
    _id: string;
    profilePhoto: string;
    timestamp: number;       
    questions: QuestionBase[];

    constructor(options: {
        _id?: string,
        profilePhoto?: string,
        timestamp?: number,
        questions?: QuestionBase[],
    } = {}) {
        this._id = options._id;
        this.profilePhoto = options.profilePhoto;
        this.timestamp = options.timestamp;        
        this.questions = options.questions;
    }
}