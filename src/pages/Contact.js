import { Container, makeStyles, Typography, Grid, Paper, TextField, Button } from '@material-ui/core';
import { PhoneEnabled, Email, LocationOn, KeyboardArrowRight } from '@material-ui/icons';
import { useState, useRef } from 'react';
import emailjs from 'emailjs-com';

const useStyles = makeStyles({
  Contact: {
    width: 'calc(100% - 1rem)',
    minHeight: '100vh',
    marginRight: '1rem',
    paddingTop: 100,
  },
  title: {
    fontWeight: 'bold',
    marginBottom: 80,
  },
  gridContainer: {
    justifyContent: 'center',
    '@media (min-width: 960px)': {
      justifyContent: 'space-between',
    },
  },
  paper: {
    padding: '1rem',
    margin: '1rem 0',
    display: 'flex',
    alignItems: 'center',
    color: '#1F2937',
    backgroundColor: '#f3f4f6',
    '& > span ': {
      marginLeft: 16,
      fontFamily: 'roboto',
      wordBreak: 'break-word',
    },
  },
  form: {
    '& > div': {
      margin: '1rem 0',
      backgroundColor: '#f3f4f6',
    },
  },
  txtField: {
    '& > label, label + div > *': {
      fontFamily: 'roboto',
      color: '#7a7a7b',
    },
  },
  button: {
    fontFamily: 'roboto',
  },
  submitSuccessMssg: {
    margin: '1.5rem auto',
    padding: '0.5rem',
    textAlign: 'center',
    width: '85%',
    color: '#1F2937',
    backgroundColor: '#5eead4',
    '& p': {
      fontFamily: 'roboto',
      display: 'inline-block',
      margin: 5,
    },
  },
  submitFailedMssg: {
    margin: '1.5rem auto',
    padding: '0.5rem',
    textAlign: 'center',
    width: '85%',
    color: '#1F2937',
    backgroundColor: '#EF4444',
    '& p': {
      fontFamily: 'roboto',
      display: 'inline-block',
      margin: 5,
    },
  },
});

const Contact = () => {
  const classes = useStyles();
  const form = useRef();
  const [disabled, setDisabled] = useState(true);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');
  const [isSubmitSuccess, setIsSubmitSuccess] = useState(false);
  const [isSubmitFailed, setIsSubmitFailed] = useState(false);

  const [txtFieldsInfo, setTxtFieldsInfo] = useState([
    {
      name: 'name',
      label: 'Name',
      value: name,
      error: false,
      helperTxt: '',
      onChangeHelperTxt: 'The name must be at least 8 characters long.',
      onSubmitHelperTxt: 'The name field is required.',
      pattern: /^[a-zA-Z\u0621-\u064A\u0660-\u0669 ]{7,}$/,
    },
    {
      name: 'user_email',
      label: 'Email',
      value: email,
      error: false,
      helperTxt: '',
      onChangeHelperTxt: 'The email must be a valid email address.',
      onSubmitHelperTxt: 'The email field is required.',
      pattern: /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
    },
    {
      name: 'subject',
      label: 'Subject',
      value: subject,
      error: false,
      helperTxt: '',
      onChangeHelperTxt: 'The subject must be between at 8 and 30 characters long.',
      onSubmitHelperTxt: 'The subject field is required.',
      pattern: /^[a-zA-Z\u0621-\u064A\u0660-\u0669 ]{7,30}$/,
    },
    {
      name: 'message',
      label: 'Message',
      value: message,
      error: false,
      helperTxt: '',
      onChangeHelperTxt: 'The message field is required.',
      onSubmitHelperTxt: 'The message field is required.',
      pattern: /^.{5,}$/,
    },
  ]);

  const handleChange = (e) => {
    if (e.target.name === 'name') {
      setName(e.target.value);
    }
    if (e.target.name === 'user_email') {
      setEmail(e.target.value);
    }
    if (e.target.name === 'subject') {
      setSubject(e.target.value);
    }
    if (e.target.name === 'message') {
      setMessage(e.target.value);
    }

    txtFieldsInfo.map((txtField) => {
      if (e.target.name === txtField.name) {
        txtField.value = e.target.value;
        if (!txtField.value.trim().match(txtField.pattern)) {
          txtField.helperTxt = txtField.onChangeHelperTxt;
          txtField.error = true;
        } else {
          txtField.helperTxt = '';
          txtField.error = false;
        }
      }
    });

    const arRegex = /^[\u0621-\u064A\u0660-\u0669 ]+$/;
    if (e.target.value.trim().match(arRegex)) {
      e.target.style.direction = 'rtl';
    } else {
      e.target.style.direction = 'ltr';
    }

    if (
      txtFieldsInfo[0].value.trim().match(txtFieldsInfo[0].pattern) &&
      txtFieldsInfo[1].value.trim().match(txtFieldsInfo[1].pattern) &&
      txtFieldsInfo[2].value.trim().match(txtFieldsInfo[2].pattern) &&
      txtFieldsInfo[3].value.trim().match(txtFieldsInfo[3].pattern)
    ) {
      setDisabled(false);
    } else {
      setDisabled(true);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    emailjs.sendForm('service_TheGOAT7', 'template_57vqn9t', form.current, 'user_edrhOVfi2sfQyr7TLikqy').then(
      (result) => {
        console.log(result.text);
        if (result.text == 'OK') {
          form.current.reset();
          setDisabled(true);
          setIsSubmitSuccess(true);
          setTimeout(() => {
            setIsSubmitSuccess(false);
          }, 3000);
        }
      },
      (error) => {
        console.log(error.text);
        setIsSubmitFailed(true);
        setTimeout(() => {
          setIsSubmitFailed(false);
        }, 3000);
      }
    );
  };

  return (
    <div className={classes.Contact}>
      <Container maxWidth='md'>
        <Typography variant='h2' className={classes.title}>
          Contact
        </Typography>
        <Container maxWidth='md'>
          <Grid className={classes.gridContainer} container spacing={2}>
            <Grid item xs={12} sm={9} md={4}>
              <Paper className={classes.paper} variant='outlined'>
                <LocationOn /> <span>Cairo, Egypt</span>
              </Paper>
              <Paper className={classes.paper} variant='outlined'>
                <PhoneEnabled /> <span>01157782869</span>
              </Paper>
              <Paper className={classes.paper} variant='outlined'>
                <Email /> <span>shaherashraf77@gmail.com</span>
              </Paper>
            </Grid>
            <Grid item xs={12} sm={9} md={7}>
              <form ref={form} className={classes.form} noValidate autoComplete='off' onSubmit={handleSubmit}>
                {txtFieldsInfo.map(
                  (txtField, index) =>
                    txtField.name !== 'message' && (
                      <TextField
                        key={index}
                        className={classes.txtField}
                        name={txtField.name}
                        label={txtField.label}
                        onChange={handleChange}
                        error={txtField.error}
                        helperText={txtField.helperTxt}
                        required
                        color='secondary'
                        variant='outlined'
                        fullWidth
                      />
                    )
                )}
                {txtFieldsInfo.map(
                  (txtField, index) =>
                    txtField.name === 'message' && (
                      <TextField
                        key={index}
                        className={classes.txtField}
                        name={txtField.name}
                        label={txtField.label}
                        onChange={handleChange}
                        error={txtField.error}
                        helperText={txtField.helperTxt}
                        required
                        color='secondary'
                        variant='outlined'
                        fullWidth
                        multiline
                        rows={8}
                      />
                    )
                )}
                <Button disabled={disabled} className={classes.button} value='Send' type='submit' color='secondary' variant='contained' endIcon={<KeyboardArrowRight />}>
                  Send Message
                </Button>
              </form>
              {isSubmitSuccess && (
                <Paper className={classes.submitSuccessMssg} variant='outlined'>
                  <Typography variant='body2'>The message has been sent successfully.</Typography>
                  <span>&#x1F604;</span>
                </Paper>
              )}
              {isSubmitFailed && (
                <Paper className={classes.submitFailedMssg} variant='outlined'>
                  <Typography variant='body2'>Your message was sent, but an error occurred.</Typography>
                  <span>&#x1F972;</span>
                </Paper>
              )}
            </Grid>
          </Grid>
        </Container>
      </Container>
    </div>
  );
};

export default Contact;
