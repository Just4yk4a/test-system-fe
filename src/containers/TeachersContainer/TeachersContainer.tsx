import React, {useEffect} from 'react';
import TeachersTable from "../../components/TeachersTable/TeachersTable";
import {User} from "../../entity/entities";
import {useDispatch, useSelector} from "react-redux";
import {getTeachersRequest, saveTeacherRequest} from "../../store/teacher/teacher.action";
import {getTeachersState} from "../../selector/teacher.selector";
import {deleteUserRequest} from "../../store/user/user.action";


function TeachersContainer() {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getTeachersRequest());
    }, []);

    const teachers = useSelector(getTeachersState);

    const onSaveHandler = (teacher: User) => {
        dispatch(saveTeacherRequest(teacher));
    };

    const onDeleteHandler = (userId: number) => {
        dispatch(deleteUserRequest(userId));
    };

    return (
        <TeachersTable teachers={teachers} onSave={onSaveHandler} onDelete={onDeleteHandler}/>
    );
}

export default TeachersContainer;
