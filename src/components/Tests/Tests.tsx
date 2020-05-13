import React from 'react';
import {IconButton} from "@material-ui/core";
import {makeStyles} from "@material-ui/core/styles";
import {AddBox} from "@material-ui/icons";
import TestsList from "../TestsList/TestsList";
import {Link, useRouteMatch} from "react-router-dom";
import {Survey} from "../../entity/entities";

interface Props {
    tests: Survey[]
    canEdit: boolean;
}

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1
    },
    demo: {
        backgroundColor: theme.palette.background.paper,
    },
    title: {
        margin: theme.spacing(4, 0, 2),
    },
}));

export default function Tests(props: Props) {
    let match = useRouteMatch();
    const classes = useStyles();

    return (
        <div className={classes.root}>
            {props.canEdit && <IconButton edge="end" aria-label="add">
                <Link to={`${match.url}/create`}><AddBox/></Link>
            </IconButton>}
            <TestsList tests={props.tests} canEdit={props.canEdit}/>
        </div>
    );
}
