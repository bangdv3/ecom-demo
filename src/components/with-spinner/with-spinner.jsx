import React from 'react';
import {SpinnerContainer, SpinnerOverlay} from './with-spinner.styles'

const WithSpinner = WrappedCommponent => {
  const Spinner = ({isLoading, ...otherProps}) => {
    return isLoading?
    (<SpinnerOverlay>
      <SpinnerContainer />
    </SpinnerOverlay>)
    : 
    (<WrappedCommponent {...otherProps} />)
  }
  return Spinner;
}
export default WithSpinner