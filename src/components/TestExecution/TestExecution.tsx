import React from 'react';
import {Button, Checkbox, Divider, FormControlLabel, FormGroup, Grid, Radio, RadioGroup} from "@material-ui/core";
import {makeStyles} from "@material-ui/core/styles";
import {useParams} from "react-router-dom";
import {QuestionType, Survey} from "../../entity/entities";

interface Props {
    tests: Survey[];
    onComplete: () => void;
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

export default function TestExecution(props: Props) {
    const classes = useStyles();
    let {id} = useParams();
    const test: Survey = props.tests.find(test => test.id == id) as Survey;

    const answers: Map<number, number[]> = new Map<number, number[]>();

    const onSelectAnswer = (questionIndex: number, choiceIndex: number) => {
        if (test.questions[questionIndex].type === QuestionType.checkbox) {
            if (answers.get(questionIndex)) {
                answers.get(questionIndex)?.includes(choiceIndex) ?
                    (() => answers.get(questionIndex)?.splice(answers.get(questionIndex)?.indexOf(choiceIndex) as number, 1))()
                    :
                    (() => answers.get(questionIndex)?.push(choiceIndex))();
            } else {
                answers.set(questionIndex, [choiceIndex])
            }
        } else {
            answers.set(questionIndex, [choiceIndex])
        }
    };

    const compareArrays = (arr1: number[], arr2: number[]) => {
        if (arr1.length != arr2.length)
            return false;
        else {
            return arr1.every(el => arr2.includes(el));
        }
    };

    const onSubmitHandler = () => {
        let message = '';
        message = test.questions.map((question, index) =>
            `\n${question.title}
            ${compareArrays(question.correctAnswerIndexes, (answers.has(index) ? answers.get(index) : []) as number[]) ?
                'Correctly' : 'Mistake'}`).join('\n');

        alert(message);
    };

    return (
        <div className={classes.root}>
            <h2><b>{test.title}</b></h2>
            <br/>
            {test.questions.map((question, qIndex) =>
                <Grid xs container direction="column" spacing={2}>
                    <br/>
                    <h3>{question.title}</h3>
                    {
                        question.type === QuestionType.radio ?
                            <RadioGroup>
                                {
                                    question.choices.map((choice, index) => <FormControlLabel value={choice}
                                                                                              control={<Radio
                                                                                                  onClick={() => onSelectAnswer(qIndex, index)}/>}
                                                                                              label={choice}/>)
                                }
                            </RadioGroup>
                            :
                            <FormGroup>
                                {
                                    question.choices.map((choice, index) => <FormControlLabel value={choice}
                                                                                              control={<Checkbox
                                                                                                  onClick={() => onSelectAnswer(qIndex, index)}/>}
                                                                                              label={choice}
                                    />)
                                }
                            </FormGroup>
                    }
                    <Divider/>
                </Grid>)}
            <br/>
            <Button onClick={onSubmitHandler}>Submit</Button>
        </div>
    );
}
