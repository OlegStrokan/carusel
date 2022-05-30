import React from 'react';
import { CardMedia, Grid, Typography } from '@mui/material';
import { observer } from 'mobx-react-lite';
import { SwiperSlide, Swiper } from 'swiper/react';
import { makeStyles } from '@mui/styles';
import CircularProgress from '@mui/material/CircularProgress';
import SwiperCore, {
  Keyboard,
  Scrollbar,
  Pagination,
  Navigation,
} from 'swiper'


import { storiesState } from '../mobx/stories/stories';

const useStyles = makeStyles({
  root: {
    maxWidth: '430px',
    margin: 'auto',
    '@media (max-width: 650px)' : {
      width: '330px',
    }
  },
  media: {
    height: 400,
    width: 400,
    borderRadius: '50%',
    margin: '0 15px',
    '@media (max-width: 650px)' : {
      height: 300,
      width: 300,
    }
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

export const Stories = observer(() => {

  const styles = useStyles();

  return (
    <Grid className={styles.root}>
        <Grid>
          <Typography variant="h4" className={styles.title}>Stories</Typography>
          <Swiper
            grabCursor
            keyboard={{ enabled: true }}
            loop
            navigation
            pagination
            className={styles.swiperContainer}
          >
            {storiesState.stories.map((image, index) => (
              <SwiperSlide
                key={index}
              >
                <CardMedia image={image.cover_src} className={styles.media} />
              </SwiperSlide>
            ))}
          </Swiper>
        </Grid>
    </Grid>

  );
});
