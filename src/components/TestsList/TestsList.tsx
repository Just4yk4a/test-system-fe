import React from 'react';
import {IconButton, List, ListItem, ListItemSecondaryAction, ListItemText} from "@material-ui/core";
import DeleteIcon from '@material-ui/icons/Delete';
import {makeStyles} from "@material-ui/core/styles";
import {Edit, PlayArrow} from "@material-ui/icons";
import {Survey} from "../../entity/entities";

interface Props {
    tests: Survey[];
    canEdit: boolean;
    onDelete: (id: number) => void;
}

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
        backgroundColor: theme.palette.background.paper
    },
    demo: {
        backgroundColor: theme.palette.background.paper,
    },
    title: {
        margin: theme.spacing(4, 0, 2),
    },
}));

export default function TestsList(props: Props) {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <List>
                {
                    props.tests.map(item =>
                        <ListItem>
                            <ListItemText
                                primary={item.title}
                            />
                            <ListItemSecondaryAction>
                                {
                                    props.canEdit ?
                                    <>
                                        <IconButton edge="end" aria-label="edit">
                                            <Edit/>
                                        </IconButton>
                                        < IconButton edge="end" aria-label="delete"
                                                     onClick={() => props.onDelete(item.id as number)}>
                                            <DeleteIcon/>
                                        </IconButton>
                                    </>
                                        :
                                        < IconButton edge="end" aria-label="delete">
                                            <PlayArrow/>
                                        </IconButton>
                                }
                            </ListItemSecondaryAction>
                        </ListItem>
                    )}
            </List>
        </div>
    );
}
