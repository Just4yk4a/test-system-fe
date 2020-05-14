import axios from "axios";

class AnswerService {
    getAnswers = () => {
        return axios.get('/answers');
    };

    saveAnswer = (answer: any) => {
        return axios.post('/answers', answer);
    }
}

export const answerService = new AnswerService();
