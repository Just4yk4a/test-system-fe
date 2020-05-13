import axios from "axios";

class TestService {
    getTests = () => {
        return axios.get('/tests');
    };

    createTest = (test: any) => {
        return axios.post('/tests', test);
    }
}

export const testService = new TestService();
