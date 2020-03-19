import React from 'react';
import PropTypes from 'prop-types';
// Material UI
import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button';
import { withStyles } from '@material-ui/core/styles';

//AXIOS
import axios from 'axios';
const styles = {
    btn: {
        background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
        border: 0,
        borderRadius: 3,
        boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
        color: 'white',
        height: 48,
        padding: '0 30px',
        marginTop: '5px'
      },
      formContainer: {
        display: 'flex',
        flexDirection: 'column',
      }
};

class Form extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            data: '',
            resultText: ''
        }
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleUpdateData = this.handleUpdateData.bind(this);
    }
    handleUpdateData(event){
        this.setState({data: event.target.value})
        event.preventDefault();
    }
    handleSubmit(event){
        const data = {
            text: this.state.data
        };

        console.log('Logg', data);
        axios.post('http://localhost:8080/toUpperCase', {data})
        .then((response)=> {
            console.log('response', response.data)
            this.setState({data: '', resultText: response.data.text})
        })
        event.preventDefault();
    }
    render(){
        const {classes} = this.props
        return(
            <>
                <form noValidate autoComplete="off" className={classes.formContainer} onSubmit={this.handleSubmit}>
                    <TextField label="Texto a mayusculas" id="foInput" name="foInput" variant="outlined" value={this.state.data} onChange={this.handleUpdateData}/>
                    <Button type="submit" className={classes.btn} variant="contained" color="primary">Primary</Button>
                </form>
                <h2>Resultado: {this.state.resultText}</h2>
            </>
        )
    }
}
Form.propTypes = {
    classes: PropTypes.object.isRequired
}
export default withStyles(styles)(Form);