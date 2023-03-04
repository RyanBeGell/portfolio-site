import { Box, Grid } from '@mui/material';
import Image from 'next/image';
import SectionTitle from '../SectionTitle/SectionTitle';

export default function Certifications() {
  return (
    <>
      <Box className="centerBox">
        <SectionTitle title="Certifications" />
        <Grid container direction="row">
          <Grid container justifyContent="center" item xs={4}>
            <Image
              src="/AWS-Certified-Cloud-Practitioner.png"
              height="200"
              width="200"
            />
          </Grid>
          <Grid container justifyContent="center" item xs={4}>
            <Image
              src="/AWS-Certified-Developer-Associate_badge.png"
              height="200"
              width="200"
            />
          </Grid>
          <Grid container justifyContent="center" item xs={4}>
            <Image
              src="/AWS-Certified-Cloud-Practitioner.png"
              height="200"
              width="200"
            />
          </Grid>
        </Grid>
      </Box>
    </>
  );
}
