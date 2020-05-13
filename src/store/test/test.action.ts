import Test = jest.Test;

export enum TestActionTypes {
    GET_TESTS_REQUEST = 'GET_TESTS_REQUEST',
    SET_TESTS = 'SET_TESTS',
    GET_TEST_REQUEST = 'GET_TEST_REQUEST',
    SET_TEST = 'SET_TEST',
    SAVE_TEST_REQUEST = 'CREATE_TEST_REQUEST',
    CLEAR_TEST = 'CLEAR_TEST',
    DELETE_TEST_REQUEST = 'DELETE_TEST_REQUEST',
}

export const getTestsRequest = () => ({type: TestActionTypes.GET_TESTS_REQUEST, payload: null});
export const saveTestRequest = (test: Test) => ({type: TestActionTypes.SAVE_TEST_REQUEST, payload: test});
