import React, {createRef, useEffect, useState} from 'react'
import {createStyles, makeStyles, Theme, WithStyles, withStyles} from '@material-ui/core/styles'
import Button from '@material-ui/core/Button'
import Dialog from '@material-ui/core/Dialog'
import MuiDialogTitle from '@material-ui/core/DialogTitle'
import MuiDialogContent from '@material-ui/core/DialogContent'
import MuiDialogActions from '@material-ui/core/DialogActions'
import IconButton from '@material-ui/core/IconButton'
import CloseIcon from '@material-ui/icons/Close'
import Typography from '@material-ui/core/Typography'
import TextField from '@material-ui/core/TextField'
import Grid from '@material-ui/core/Grid'
import {User} from "../../entity/entities";

const styles = (theme: Theme) => createStyles({
  root: {
    margin: 0,
    padding: theme.spacing(2)
  },
  closeButton: {
    position: 'absolute',
    right: theme.spacing(1),
    top: theme.spacing(1),
    color: theme.palette.grey[500]
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(3),
  },
});

const DialogTitle = withStyles(styles)((props: any) => {
  const { children, classes, onClose, ...other } = props;
  return (
    <MuiDialogTitle disableTypography className={classes.root} {...other}>
      <Typography variant="h6">{children}</Typography>
      {onClose ? (
        <IconButton aria-label="close" className={classes.closeButton} onClick={onClose}>
          <CloseIcon/>
        </IconButton>
      ) : null}
    </MuiDialogTitle>
  )
});

const DialogContent = withStyles((theme: Theme) => ({
  root: {
    padding: theme.spacing(2)
  }
}))(MuiDialogContent);

const DialogActions = withStyles((theme: Theme) => ({
  root: {
    margin: 0,
    padding: theme.spacing(1)
  }
}))(MuiDialogActions);

interface Props extends WithStyles<typeof styles> {
  isOpen: boolean;
  title: string;
  user: User | null;
  onClose: () => void;
  onSave: (user: User) => void;
}

export const UserEditor = withStyles(styles)((props: Props) => {

  const classes = makeStyles(styles);

  const [name, setName] = useState<string>('');
  const [surname, setSurname] = useState<string>('');
  const [username, setUsername] = useState<string>('');
  const [password, setPassword] = useState<string>( '');
  const [email, setEmail] = useState<string>('');

  useEffect(() => {
    setName(props.user ? props.user.firstName : '');
    setSurname(props.user ? props.user.secondName : '');
    setUsername(props.user ? props.user.login : '');
    setPassword(props.user && props.user.password ? props.user.password : '');
    setEmail(props.user ? props.user.mail : '')
  }, [props.user]);

  const changeName = (e: any) => {
    setName(e.target.value)
  };

  const changeSurname = (e: any) => {
    setSurname(e.target.value)
  };

  const changeUsername = (e: any) => {
    setUsername(e.target.value)
  };

  const changePassword = (e: any) => {
    setPassword(e.target.value)
  };

  const changeEmail = (e: any) => {
    setEmail(e.target.value)
  };

  const handleClose = () => {
    props.onClose();
  };

  const saveHandler = () => {
    const user = new User();
    console.log(name);
    console.log(surname);
    console.log(username);
    console.log(password);
    console.log(email);
    user.firstName = name;
    user.secondName = surname;
    user.login = username;
    user.password = password;
    user.mail = email;
    if(props.user) {
      user.id = props.user.id;
      user.role = props.user.role;
    }
    props.onSave(user);
    handleClose();
  };

  return (
    <Dialog onClose={handleClose} aria-labelledby="customized-dialog-title" open={props.isOpen}>
      <DialogTitle id="customized-dialog-title" onClose={handleClose}>
        {props.title}
      </DialogTitle>
      <DialogContent dividers>
        <form className={props.classes.form} noValidate>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={6}>
              <TextField
                onChange={changeName}
                autoComplete="fname"
                name="firstName"
                variant="outlined"
                required
                fullWidth
                id="firstName"
                label="First Name"
                defaultValue={props.user && props.user.firstName }
                autoFocus
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                onChange={changeSurname}
                variant="outlined"
                required
                fullWidth
                id="lastName"
                label="Last Name"
                name="lastName"
                autoComplete="lname"
                defaultValue={props.user && props.user.secondName }
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                onChange={changeUsername}
                variant="outlined"
                required
                fullWidth
                id="name"
                label="Username"
                name="username"
                defaultValue={props.user && props.user.login }
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                onChange={changePassword}
                variant="outlined"
                required
                fullWidth
                name="password"
                label="Password"
                id="password"
                defaultValue={props.user && props.user.password }
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                onChange={changeEmail}
                variant="outlined"
                required
                fullWidth
                id="email"
                label="Email Address"
                name="email"
                defaultValue={props.user && props.user.mail }
              />
            </Grid>
          </Grid>
        </form>
      </DialogContent>
      <DialogActions>
        <Button autoFocus onClick={saveHandler} color="primary">
          Save
        </Button>
      </DialogActions>
    </Dialog>
  )
});
