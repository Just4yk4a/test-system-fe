import axios from "axios";

class TestService {
    getTests = () => {
        return axios.get('/tests');
    };

    createTest = (test: any) => {
        return axios.post('/tests', test);
    };

    deleteTest = (id: number) => {
        return axios.delete('/tests/' + id);
    };
}

export const testService = new TestService();
