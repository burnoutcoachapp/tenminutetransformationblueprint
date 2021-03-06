import React, { useEffect } from 'react';
import { Box, makeStyles } from '@material-ui/core';
import { Header, Introduction, Form, Footer } from '../components';
import strings from '../strings';

const useStyles = makeStyles({
    root: {
        display: 'flex',
        flexDirection: 'column',
        width: '100%',
    },
});

const QuestionnaireScreen: React.FC = () => {
    const classes = useStyles();

    useEffect(() => {
        document.title = strings.appTitle;
    }, []);

    return (
        <Box className={classes.root}>
            <Header />
            <Introduction />
            <Form />
            <Footer />
        </Box>
    );
};

export default QuestionnaireScreen;
