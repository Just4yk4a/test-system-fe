export class Role {
    id: number = 0;
    name: string = '';
}

export class User {
    id: number | null = null;
    login: string = '';
    password: string | null = null;
    firstName: string = '';
    secondName: string = '';
    mail: string = '';
    role: Role | null = null;
}

export class TestVO {
    id: number | null = null;
    name: string = '';
    json: string = '';
}

export class Question {
    title: string = '';
    type: QuestionType = QuestionType.radio;
    choices: string[] = [];
    correctAnswerIndexes: number[] = [];
}

export class Survey {
    id: number | null = null;
    title: string = '';
    questions: Question[] = [];
}

export class Class {
    id: number | null = null;
}

export class Answer {
    id: number | null = null;
}

export enum QuestionType {
    radio, checkbox
}
