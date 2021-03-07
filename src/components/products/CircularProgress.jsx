import React from 'react';
import CircularProgress from '@material-ui/core/CircularProgress';

import useStyles from './style';

export default function CircularIndeterminate() {
  const classes = useStyles();

  return (
    <div className={classes.loading}>
      <CircularProgress color="secondary"/>
    </div>
  );
}
