import React from 'react';
import { Grid, Theme } from '@mui/material';
import { makeStyles } from '@mui/styles';
import { Collections } from './components/Collections';
import { Stories } from './components/Stories';

import 'swiper/swiper.min.css'
import 'swiper/components/effect-flip/effect-flip.min.css'
import 'swiper/components/effect-cube/effect-cube.min.css'
import 'swiper/components/pagination/pagination.min.css'
import 'swiper/components/navigation/navigation.min.css'
import 'swiper/components/scrollbar/scrollbar.min.css'
import { collectionState } from './mobx/collections/collections';
import { storiesState } from './mobx/stories/stories';
import CircularProgress from '@mui/material/CircularProgress';
import { initState } from './mobx/init/init';
import { observer } from 'mobx-react-lite';

const useStyles = makeStyles((theme: Theme) => ({
  wrappedRoot: {
    backgroundImage: 'linear-gradient(#e66465, #9198e5)',
    outline: '1px solid',
    margin: '-10px',
    display: 'grid',
    height: '100vh',
    justifyContent: 'center',
    alignItems: 'center',
    color: '#fff',
  },
  root: {
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

export const App = observer(() => {

  const styles = useStyles();

  React.useEffect(() => {
    initState.getData()
  }, [])

  console.log(initState.isInit)
  return (
    <Grid className={styles.wrappedRoot}>
      <Grid className={styles.root}>
        {
          initState.isInit
            ?
        <>
          <Grid>
            <Collections/>
          </Grid>
          <Grid>
            <Stories/>
          </Grid>
        </>
          : <Grid><CircularProgress /></Grid>
        }

      </Grid>
    </Grid>
  );
})
