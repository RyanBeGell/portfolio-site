import { Box, Grid } from '@mui/material';
import Image from 'next/image';
import SectionTitle from '../SectionTitle/SectionTitle';
import styles from './Certifications.module.css'
export default function Certifications() {
  return (
    <>
      <Box className="centerBox">
        <SectionTitle title="Certifications" />
        <Grid container direction="row" >
          <Grid container justifyContent="center" item  xs={6} sm={4} md={4}>
            <img
              src="/AWS-Certified-Cloud-Practitioner.png"
              height="200"
              width="200"
              className={styles.cert} 
            />
          </Grid>
          <Grid container justifyContent="center" item xs={6} sm={4} md={4}>
          <img
              src="/AWS-Certified-Developer-Associate_badge.png"
              height="200"
              width="200"
              className={styles.cert} 
            />
          </Grid>
          <Grid container justifyContent="center" item xs={12} sm={4} md={4}>
          <img
              src="/AWS-Certified-Cloud-Practitioner.png"
              height="200"
              width="200"
              className={styles.cert} 
            />
          </Grid>
        </Grid>
      </Box>
    </>
  );
}
