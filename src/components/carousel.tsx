import React, { useState } from 'react';
import { Button, Paper, IconButton, Box } from '@mui/material';
import NavigateBeforeIcon from '@mui/icons-material/NavigateBefore';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import { useTheme } from '@mui/material/styles';
import styles from './Carousel.module.css';
import RadioButtonUncheckedIcon from '@mui/icons-material/RadioButtonUnchecked';
import RadioButtonCheckedIcon from '@mui/icons-material/RadioButtonChecked';

const images = [
  'https://via.placeholder.com/500x500.png?text=Image1',
  'https://via.placeholder.com/500x500.png?text=Image2',
  'https://via.placeholder.com/500x500.png?text=Image3'
];

const Carousel: React.FC = () => {
  const [index, setIndex] = useState(0);

  return (
    <>
      <img className="w-full" src={images[index]} alt="Image" />
      <Box display="flex" justifyContent="center" mt={2}>
        {images.map((_, i) => (
          <IconButton key={i} onClick={() => setIndex(i)}>
            {index === i ? (
              <RadioButtonCheckedIcon fontSize="small" color="primary" />
            ) : (
              <RadioButtonUncheckedIcon fontSize="small" color="inherit" />
            )}
          </IconButton>
        ))}
      </Box>
    </>
  );
};


export default Carousel;
