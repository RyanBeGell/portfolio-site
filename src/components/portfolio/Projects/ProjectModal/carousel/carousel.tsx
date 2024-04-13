import React, { useState } from 'react';
import { IconButton, Box } from '@mui/material';
import NavigateBeforeIcon from '@mui/icons-material/NavigateBefore';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import RadioButtonUncheckedIcon from '@mui/icons-material/RadioButtonUnchecked';
import RadioButtonCheckedIcon from '@mui/icons-material/RadioButtonChecked';
import styles from './carousel.module.css';
import Fade from '@mui/material/Fade';

interface CarouselProps {
  images: string[];
}

const Carousel: React.FC<CarouselProps> = ({ images }) => {
  const [index, setIndex] = useState(0);
  
  return (
    <Box  sx={{ position: 'relative', height:'450px', width:'450px', overflow:'hidden'}}>
      <Fade in={true} key={index} timeout={500}>
        <img src={images[index]} alt="Image" style={{borderRadius:'4px', objectFit: 'cover', width: '100%', height: '100%'}}/>
      </Fade>
      <IconButton 
          color='primary'
          disabled={index===0}
          sx={{ color:'rgba(117, 117, 117, 1)', '&:hover': {color:'primary.main'} }}
          className={styles.navigateButton} 
          onClick={() => setIndex(index - 1)}
      >
        <NavigateBeforeIcon fontSize="large" />
      </IconButton>
      <IconButton 
          color='primary'
          disabled={index === images.length - 1}
          sx={{ color:'rgba(117, 117, 117, 1)', '&:hover': {color:'primary.main'} }}
          className={styles.navigateButton} 
          onClick={() => setIndex(index + 1)}
      >
        <NavigateNextIcon fontSize="large" />
      </IconButton>
      <Box display="flex" justifyContent="center" sx={{ position: 'absolute', bottom: 0, left: '50%', transform: 'translateX(-50%)', pb:'16px' }}>
        {images.map((_, i) => (
          <IconButton key={i} onClick={() => setIndex(i)}>
            {index === i ? (
              <RadioButtonCheckedIcon fontSize="small" color="primary"  />
            ) : (
              <RadioButtonUncheckedIcon fontSize="small" color="inherit"  sx={{ color:'rgba(117, 117, 117, 1)'}}/>
            )}
          </IconButton>
        ))}
      </Box>
    </Box>
  );
};

export default Carousel;
