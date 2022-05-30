import React from 'react';
import { Grid, Theme } from '@mui/material';
import { makeStyles } from '@mui/styles';
import { Collections } from './components/Collections';
import { Stories } from './components/Stories';

import 'swiper/swiper.min.css'
import 'swiper/components/pagination/pagination.min.css'
import 'swiper/components/navigation/navigation.min.css'
import 'swiper/components/scrollbar/scrollbar.min.css'

const useStyles = makeStyles((theme: Theme) => ({
  wrappedRoot: {
    backgroundImage: 'linear-gradient(#e66465, #9198e5)',
    outline: '1px solid',
    margin: '-10px',
    display: 'grid',
    height: '100vh',
    justifyContent: 'center',
    alignItems: 'center',
  },
  root: {
    backgroundColor: '#fff',
    borderRadius: 10,
    minHeight: 1000,
    width: 520,
    display: 'grid',
    justifyContent: 'center',
    alignItems: 'center',
    '@media (max-width: 650px)' : {
      maxWidth: '350px',
      minHeight: 700,
    }
  }
}));

export const App = () => {
  const styles = useStyles();
  return (
    <Grid className={styles.wrappedRoot}>
      <Grid className={styles.root}>
      <Grid>
        <Collections/>
      </Grid>
      <Grid>
        <Stories/>
      </Grid>
      </Grid>
    </Grid>
  );
}
