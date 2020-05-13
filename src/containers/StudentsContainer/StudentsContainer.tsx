import React, {useEffect} from 'react';
import StudentsTable from "../../components/StudentsTable/StudentsTable";
import {useDispatch, useSelector} from "react-redux";
import {saveTeacherRequest} from "../../store/teacher/teacher.action";
import {User} from "../../entity/entities";
import {getStudentsRequest, saveStudentRequest} from "../../store/student/student.action";
import {getStudentsState} from "../../selector/student.selector";
import {deleteUserRequest} from "../../store/user/user.action";
import TeachersTable from "../../components/TeachersTable/TeachersTable";


function StudentsContainer() {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getStudentsRequest());
    }, []);

    const students = useSelector(getStudentsState);

    const onSaveHandler = (student: User) => {
        dispatch(saveStudentRequest(student));
    };

    const onDeleteHandler = (userId: number) => {
        dispatch(deleteUserRequest(userId));
    };

    return (
        <StudentsTable students={students} onSave={onSaveHandler} onDelete={onDeleteHandler}/>
    );
}

export default StudentsContainer;
