import React from 'react';
import '../css/FormInput.css'
import {TextField} from '@material-ui/core'

function FormInput(props) {
  return (
    <form>
      <TextField style={{width:'12rem'}} InputLabelProps={{ shrink:true}} id={props.name} label={props.name} multiline = {props.multiline}></TextField>
    </form>
  )
}
export default FormInput;
