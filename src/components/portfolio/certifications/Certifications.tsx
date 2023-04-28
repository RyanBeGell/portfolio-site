import { Box, Grid } from '@mui/material';
import ScrollAnimation from '../../ScrollAnimation';
import SectionTitle from '../SectionTitle/SectionTitle';
import styles from './Certifications.module.css';

export default function Certifications() {
  const certifications = [
    { src: '/AWS-Certified-Cloud-Practitioner.png', height: 200, width: 200 },
    {
      src: '/AWS-Certified-Developer-Associate_badge.png',
      height: 200,
      width: 200,
    },
    { src: '/AWS-Certified-Cloud-Practitioner.png', height: 200, width: 200 },
  ];

  return (
    <Box className="centerBox">
      <SectionTitle title="Certifications" />
      <Grid container direction="row">
        {certifications.map((cert, index) => (
          <Grid
            key={index}
            container
            justifyContent="center"
            item
            xs={6}
            sm={4}
            md={4}
          >
            <ScrollAnimation animation={'grow'} timeout={1000 + index * 250}>
              <img
                src={cert.src}
                height={cert.height}
                width={cert.width}
                className={styles.cert}
              />
            </ScrollAnimation>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}
