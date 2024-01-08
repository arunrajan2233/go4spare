import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

export const Emailvalidation = props => {
  // Trim the email and password

  const {email} = props;
  // Email validation regular expression
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  if (emailRegex.test( email)) {
    return true;
  } else {
    return false;
  }
};

// export default Validation;
