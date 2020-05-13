import React, {useState} from 'react';
import {makeStyles} from "@material-ui/core/styles";
import {
    Button,
    Checkbox,
    Divider,
    FormControlLabel,
    Grid,
    IconButton,
    Radio,
    Switch,
    TextField
} from "@material-ui/core";
import {AddBox, Remove} from "@material-ui/icons";
import {Question, QuestionType, Survey} from "../../entity/entities";

interface Props {
    onSave: (survey: Survey) => void;
}

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
        '& .MuiTextField-root': {
            margin: theme.spacing(1),
            width: 200,
        },
    },
}));

export default function TestCreate(props: Props) {
    const classes = useStyles();

    const [title, setTitle] = useState<string>('');
    const [questions, setQuestions] = React.useState<Question[]>([]);

    const toggleChecked = (questionIndex: number) => {
        const newQuestions = [...questions];
        const question = newQuestions[questionIndex];
        question.type = question.type === QuestionType.checkbox ? QuestionType.radio : QuestionType.checkbox;
        setQuestions(newQuestions);
    };

    const addQuestionHandler = () => {
        const question = new Question();
        question.title = 'Question title';
        question.type = QuestionType.radio;
        question.choices = ['First choice'];

        setQuestions([...questions, question]);
    };

    const addChoice = (questionIndex: number, choiceIndex: number) => {
        const newQuestions = [...questions];
        const question = newQuestions[questionIndex];
        question.choices.splice(choiceIndex, 0, question.choices[choiceIndex]);
        newQuestions.splice(questionIndex, 1, question)
        setQuestions(newQuestions);
    };

    const removeChoice = (questionIndex: number, choiceIndex: number) => {
        const newQuestions = [...questions];
        const question = newQuestions[questionIndex];
        question.choices.splice(choiceIndex, 1);
        newQuestions.splice(questionIndex, 1, question)
        setQuestions(newQuestions);
    };

    const onChangeChoice = (event: any, questionIndex: number, choiceIndex: number) => {
        const newQuestions = [...questions];
        const question = newQuestions[questionIndex];
        question.choices.splice(choiceIndex, 1, event.target.value);
        questions.splice(questionIndex, 1, question)
        setQuestions(newQuestions);
    };

    const onSaveHndler = () => {

    };

    return (
        <div className={classes.root}>
            <h1>Создание тестов: </h1>
            <Grid container spacing={3}>
                <Grid item xs={12}>
                    <TextField id="standard-basic" label="Survey title"/>
                </Grid>

                <Grid item xs={12}>
                    {
                        questions.map((question, qIndex) =>
                            <Grid item xs container direction="column" spacing={2}>
                                <div>
                                    <TextField id="standard-basic" label="Question tittle"/>
                                </div>
                                <FormControlLabel
                                    control={<Switch checked={question.type === QuestionType.checkbox}
                                                     onChange={() => toggleChecked(qIndex)}/>}
                                    label="Multiple answers"
                                />
                                {
                                    question.choices.map((choice, index) =>
                                        <div>
                                            {
                                                question.type === QuestionType.checkbox ?
                                                    <Checkbox
                                                        checked={false}
                                                        onChange={() => {}}
                                                        color="default"
                                                        inputProps={{ 'aria-label': 'secondary checkbox' }}
                                                    /> :
                                                    <Radio
                                                        checked={false}
                                                        onChange={() => {}}
                                                        value="d"
                                                        color="default"
                                                        inputProps={{ 'aria-label': 'D' }}
                                                    />
                                            }
                                            <TextField id={`choise-${index}`}
                                                       label={'Choice'}
                                                       value={choice}
                                                       onChange={(event) => onChangeChoice(event, qIndex, index)}/>
                                            <IconButton aria-label="add" onClick={() => addChoice(qIndex, index)}>
                                                <AddBox/>
                                            </IconButton>
                                            {question.choices.length !== 1 &&
                                            <IconButton aria-label="remove" onClick={() => removeChoice(qIndex, index)}>
                                                <Remove/>
                                            </IconButton>
                                            }
                                        </div>
                                    )
                                }
                                <Divider/>
                            </Grid>
                        )
                    }
                </Grid>
                <IconButton aria-label="add" onClick={addQuestionHandler}>
                    <AddBox/> Add question
                </IconButton>
                <Button aria-label="save" onClick={onSaveHndler}>
                    Save
                </Button>
            </Grid>
        </div>
    );
}
