import React, { useState } from 'react';
import {
  Container,
  Typography,
  makeStyles,
} from '@material-ui/core';
import strings from '../strings';
import EmailField from './EmailField';
import LoveRatingQ from './LoveRatingQ';

const useStyles = makeStyles({
  container: {
    display: 'flex',
    paddingTop: 40,
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'column',
  },
});


const Form = (): JSX.Element => {
  const classes = useStyles();

  const [loveRating, setLoveRating] = useState<number | undefined>(undefined);
  const [email, setEmail] = useState('');

  const renderDebugText = (label: string, text?: string): JSX.Element => {
    return (
      <Typography style={{ color: 'red' }} align="center" variant="h6">
        {`${label}${text === undefined ? '' : `: ${text}`}`}
      </Typography>
    );
  };

  return (
    <Container className={classes.container}>
      <Typography align="center" variant="h6">
        {strings.formTitle}
      </Typography>
      {renderDebugText('Debug Stuff')}
      {renderDebugText('Email', email || 'undefined')}
      {renderDebugText('Love Rating', (loveRating ?? 'undefined').toString())}
      <EmailField onEmailChange={(email) => {
        setEmail(email);
      }} />
      <LoveRatingQ onLoveRatingChange={(rating) => {
        setLoveRating(rating)
      }}
      />

    </Container>
  );
};

export default Form;
