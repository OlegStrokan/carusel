import React from 'react';
import { CardMedia, Grid, Typography } from '@mui/material';
import { observer } from 'mobx-react-lite';
import { collectionState } from '../mobx/collections/collections';
import { SwiperSlide, Swiper } from 'swiper/react';
import { makeStyles } from '@mui/styles';
import CircularProgress from '@mui/material/CircularProgress';
import SwiperCore, {
  Keyboard,
  Scrollbar,
  Pagination,
  Navigation,
} from 'swiper'


const useStyles = makeStyles( {
  root: {
    maxWidth: '520px',
    '@media (max-width: 650px)' : {
      maxWidth: '320px',
    }
  },
  media: {
    height: 300,
    width: 500,
    borderRadius: 10,
    margin: '0 15px',
    '@media (max-width: 650px)' : {
      height: 150,
      width: 300,
    }
  },
  preloader: {
  },
  title: {
    padding: '15px',
    textAlign: 'center'
  },
  swiperContainer: {
    paddingBottom: '3rem',
    '& .swiper-pagination-bullet': {
      background: 'blue',
    },
    '& .swiper-button-next:after': {
      fontSize: '2rem !important',
    },
    '& .swiper-button-prev:after': {
      fontSize: '2rem !important',
    },
  },
})

SwiperCore.use([Keyboard, Scrollbar, Pagination, Navigation])

export const Collections = observer(() => {


  const styles = useStyles();
  React.useEffect(() => {
    collectionState.getCollections()
  }, [])



  return (
    <Grid className={styles.root}>
      {collectionState.loading ?  <Grid><CircularProgress className={styles.preloader} /></Grid> :
        <Grid>
      <Typography variant="h4" className={styles.title}>Collections</Typography>
      <Swiper
        grabCursor
        keyboard={{ enabled: true }}
        loop
        navigation
        pagination
        className={styles.swiperContainer}

      >
        {collectionState.collections.map((image, index) => (
          <SwiperSlide
            key={index}
          >
            <CardMedia image={image.cover_image_url} className={styles.media} />
          </SwiperSlide>
        ))}
      </Swiper>
        </Grid>}
      </Grid>

  );
});
