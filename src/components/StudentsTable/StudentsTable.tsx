import React, {useState} from 'react'
import MaterialTable from 'material-table'

import AddBox from '@material-ui/icons/AddBox'
import Edit from '@material-ui/icons/Edit'
import {User} from "../../entity/entities";
import {UserEditor} from "../UserManager/UserManager";

interface Props {
    students: User[]
    onSave: (user: User) => void;
    onDelete: (userId: number) => void;
}

export default function StudentsTable(props: Props) {

    const [isModalOpen, modalToggle] = useState(false);
    const [selectedStudent, setSelectedStudent] = useState<User | null>(null);

    const [columns, setColumns] = React.useState([
        {title: 'Name', field: 'firstName'},
        {title: 'Surname', field: 'secondName'},
        {title: 'Email', field: 'mail'}
    ]);

    const saveStudentHandler = (student: User) => {
        props.onSave(student)
    };

    const closeUserModal = () => {
        setSelectedStudent(null);
        modalToggle(false)
    };


    return (
        <div>
            <UserEditor isOpen={isModalOpen}
                        title={'Teacher editor'}
                        user={selectedStudent}
                        onClose={closeUserModal}
                        onSave={saveStudentHandler}/>
            <MaterialTable
                title="Students"
                columns={columns}
                data={props.students}
                actions={[
                    {
                        icon: () => <Edit/>,
                        tooltip: 'Edit student',
                        onClick: (event, rowData) => {
                            setSelectedStudent(rowData as User)
                            modalToggle(true)
                        }
                    },
                    {
                        icon: () => <AddBox/>,
                        tooltip: 'Add Teacher',
                        isFreeAction: true,
                        onClick: (event) => modalToggle(true)
                    }
                ]}
                editable={{
                    onRowDelete: oldData =>
                        new Promise(resolve => {
                            setTimeout(() => {
                                resolve();
                                props.onDelete(oldData.id as number);
                            }, 600)
                        })
                }}
            />
        </div>
    )
}
