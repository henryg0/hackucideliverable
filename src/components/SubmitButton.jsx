import React from 'react';
import {withStyles} from '@material-ui/core/styles';
import clsx from 'clsx';
import Button from '@material-ui/core/Button';
import PropTypes from 'prop-types';

const submitBtnStyles = {
  root : {
    background: 'blue',
    borderRadius: '5rem'
  }
}

function SubmitButton() {
  const {classes} = props;
  return (
    <Button className={clsx(classes.root, className)} {...other}>
      {children  || 'class names'}
    </Button>
  );
}

SubmitButton.propTypes = {
  children : PropTypes.node,
  classes : PropTypes.object.isRequired,
  className : PropTypes.string,
}

export default withStyles(submitBtnStyles)(SubmitButton);