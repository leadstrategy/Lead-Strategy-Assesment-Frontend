import React from 'react';

import CircularProgress from '@material-ui/core/CircularProgress';

// styles
import { LoadingConatiner } from './styles';

interface LoaderProps {
  text?: string;
}

export default function Loader({ text }: LoaderProps) {
  return (
    <LoadingConatiner>
      <CircularProgress />
      {!!text && <h1>{text}</h1>}
    </LoadingConatiner>
  );
}
