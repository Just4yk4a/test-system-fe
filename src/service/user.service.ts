import axios from "axios";
import {User} from "../entity/entities";

class UserService {
    logIn = (mail: string, pass: string) => {
        return axios.post('/auth/login', null, {params: {mail: mail, pass: pass}});
    };

    createUser = (user: User) => {
        return axios.post('/users/create', user);
    };

    getTeachers = () => {
        return axios.get('/users/teachers');
    };

    addTeacher = (teacher: User) => {
        return axios.post('/users/teachers', teacher);
    };

    getStudents = () => {
        return axios.get('/users/students');
    };

    addStudent = (student: User) => {
        return axios.post('/users/students', student);
    };

    deleteUser = (id: number) => {
        return axios.delete('/users/' + id);
    };
}

export const userService = new UserService();
