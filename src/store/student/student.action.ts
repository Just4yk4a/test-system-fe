import {User} from "../../entity/entities";

export enum StudentActionTypes {
    GET_STUDENTS_REQUEST = 'GET_STUDENTS_REQUEST',
    SET_STUDENTS = 'SET_STUDENTS',
    GET_STUDENT_REQUEST = 'GET_STUDENT_REQUEST',
    SET_STUDENT = 'SET_STUDENT',
    SAVE_STUDENT_REQUEST = 'CREATE_STUDENT_REQUEST',
    CLEAR_STUDENT = 'CLEAR_STUDENT'
}

export const getStudentsRequest = () => ({type: StudentActionTypes.GET_STUDENTS_REQUEST, payload: null});
export const saveStudentRequest = (student: User) => ({type: StudentActionTypes.SAVE_STUDENT_REQUEST, payload: student});
