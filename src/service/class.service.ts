import axios from "axios";

class ClassService {
    getClasses = () => {
        return axios.get('/classes');
    };

    saveClass = (newClass: any) => {
        return axios.post('/classes', newClass);
    }
}

export const classService = new ClassService();
