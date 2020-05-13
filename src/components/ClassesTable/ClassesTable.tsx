import React, {useState} from 'react'
import MaterialTable from 'material-table'
import {useDispatch} from 'react-redux'
import {AddBox, List} from '@material-ui/icons'

interface Props {
  classes: any
}

export default function ClassesTable(props: Props) {

    const [isModalOpen, modalToggle] = useState(false);
    const [columns, setColumns] = React.useState([
        {title: 'Name', field: 'name'}
    ]);

    const saveClassHandler = (classData: any) => {

    };

    const closeClassesModal = () => {
        modalToggle(false)
    };


    return (
        <div>
            <MaterialTable
                title="Classes"
                columns={columns}
                data={props.classes}
                actions={[
                    {
                        icon: () => <List/>,
                        tooltip: 'Students list',
                        onClick: (event, rowData) => {

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
                                resolve()

                            }, 600)
                        })
                }}
            />
        </div>
    )
}
