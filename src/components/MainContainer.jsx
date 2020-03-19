import React from 'react';
import PropTypes from 'prop-types';

// Components
import Form from './Form'
import { withStyles } from '@material-ui/core/styles';
const Styles = {
    mainAppContainer: {
        display: 'flex',
        width: '100vw',
        height: '100vh',
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'column',
    },
    h1: {
        marginBottom: '50px'
    }
}
function MainContainer(props) {
    const { classes } = props;
    return (
        <div className={classes.mainAppContainer}>
            <h1 className={classes.h1}>Hello 👋, this is a Simple App</h1>
            <Form/>
        </div>
    )
}
MainContainer.propTypes = {
    classes: PropTypes.object.isRequired
}

export default withStyles(Styles)(MainContainer)