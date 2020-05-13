import React from 'react'
import {useDispatch, useSelector} from 'react-redux'
import ListItem from '@material-ui/core/ListItem'
import ListItemIcon from '@material-ui/core/ListItemIcon'
import {Group, Person} from '@material-ui/icons'
import ListItemText from '@material-ui/core/ListItemText'
import List from '@material-ui/core/List'
import {getUserState} from "../../selector/user.selector";
import {useHistory} from "react-router";

interface MenuItem {
    value: string;
    url: string;
}

export default function MenuContainer() {
    const user: any = useSelector(getUserState);
    const dispatch = useDispatch();
    const history = useHistory();
    let map: MenuItem[] = [];

    if (user) {
        switch (user.role.name) {
            case 'admin': {
                map = [{value: 'Teachers', url: '/home/teachers'},
                    // {value: 'Classes', url: '/home/classes'},
                    {value: 'Students', url: '/home/students'},
                    {value: 'Tests', url: '/home/tests'},
                    {value: 'Exercises', url: '/home/exercises'}];
                break
            }
            case 'teacher': {
                map = [
                    // {value: 'Classes', url: '/home/classes'},
                    {value: 'Students', url: '/home/students'},
                    {value: 'Tests', url: '/home/tests'}];
                break
            }
            case 'student': {
                map = [{value: 'Tests', url: '/home/tests'},
                    {value: 'Exercises', url: '/home/exercises'}];
                break
            }
            default:
                map = []
        }
    }

    const onClickHandler = (item: MenuItem) => {
        history.push(item.url);
    };

    return (<List>
        {map.map((item: MenuItem, index: number) => (
            <ListItem button key={item.url} onClick={() => onClickHandler(item)}>
                <ListItemIcon>{index % 2 === 0 ? <Person/> : <Group/>}</ListItemIcon>
                <ListItemText primary={item.value}/>
            </ListItem>
        ))}
    </List>)
}
