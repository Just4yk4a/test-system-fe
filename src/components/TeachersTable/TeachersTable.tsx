import React, {useState} from 'react'
import MaterialTable from 'material-table'
import {User} from "../../entity/entities";
import {AddBox} from "@material-ui/icons";
import Edit from '@material-ui/icons/Edit'
import {UserEditor} from "../UserManager/UserManager";

interface Props {
    teachers: User[];
    onSave:(user: User) => void;
    onDelete:(userId: number) => void;
}

export default function TeachersTable(props: Props) {
    const [isModalOpen, modalToggle] = useState(false);
    const [selectedTeacher, setSelectedTeacher] = useState<User | null>(null);
    const [columns, setColumns] = React.useState([
        {title: 'Name', field: 'firstName'},
        {title: 'Surname', field: 'secondName'},
        {title: 'Email', field: 'mail'}
    ]);

    const saveTeacherHandler = (teacher: User) => {
        props.onSave(teacher);
    };

    const closeUserModal = () => {
        setSelectedTeacher(null);
        modalToggle(false);
    };

    const editTeacherHandler = (teacher: User) => {
        setSelectedTeacher(teacher);
        modalToggle(true);
    };

    return (
        <div>
            <UserEditor isOpen={isModalOpen}
                        title={'Teacher editor'}
                        user={selectedTeacher}
                        onClose={closeUserModal}
                        onSave={saveTeacherHandler}/>
            <MaterialTable
                title="Teachers"
                columns={columns}
                data={props.teachers}
                actions={[
                    {
                        icon: () => <Edit/>,
                        tooltip: 'Edit teacher',
                        onClick: (event, rowData) => {
                            console.log(rowData);
                            editTeacherHandler(rowData as User)
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
