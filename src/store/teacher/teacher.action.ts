import {User} from "../../entity/entities";

export enum TeacherActionTypes {
    GET_TEACHERS_REQUEST = 'GET_TEACHERS_REQUEST',
    SET_TEACHERS = 'SET_TEACHERS',
    GET_TEACHER_REQUEST = 'GET_TEACHER_REQUEST',
    SET_TEACHER = 'SET_TEACHER',
    CREATE_TEACHER_REQUEST = 'CREATE_TEACHER_REQUEST',
    CLEAR_TEACHERS = 'CLEAR_TEACHERS'
}

export const getTeachersRequest = () => ({type: TeacherActionTypes.GET_TEACHERS_REQUEST, payload: null});
export const saveTeacherRequest = (teacher: User) => ({type: TeacherActionTypes.CREATE_TEACHER_REQUEST, payload: teacher});
