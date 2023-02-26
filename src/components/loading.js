import React from 'react';
import LoadingBar from 'react-redux-loading-bar';
import LoadingBarStyled from './styled/LoadingBarStyled';

function Loading() {
  return (
    <LoadingBarStyled>
      <LoadingBar />
    </LoadingBarStyled>
  );
}

export default Loading;
