import { Box, Grid, Modal } from '@mui/material';
import { useState } from 'react';
import ScrollAnimation from '../../ScrollAnimation';
import SectionTitle from '../SectionTitle/SectionTitle';
import styles from './Certifications.module.css';

export default function Certifications() {
  interface Certification {
    logo: string;
    screenshot: string;
  }

  const certifications = [
    {
      logo: '/AWS-Certified-Cloud-Practitioner.png',
      screenshot: '/sample.png',
    },
    {
      logo: '/AWS-Certified-Developer-Associate.png',
      screenshot: '/sample.png',
    },
    {
      logo: '/AWS-Certified-Solutions-Architect-Associate.png',
      screenshot: '/sample.png',
    },
  ];

  // State to control the modal
  const [openModal, setOpenModal] = useState(false);
  const [selectedCertification, setSelectedCertification] =
    useState<null | Certification>(null);

  const handleCertificationClick = (cert: Certification) => {
    setSelectedCertification(cert);
    setOpenModal(true);
  };

  const closeModal = () => {
    setOpenModal(false);
  };

  return (
    <Box className="centerBox">
      <SectionTitle title="Certifications" />
      <Grid container direction="row" spacing={3}>
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
            <ScrollAnimation animation={'fade'} timeout={1000 + index * 500}>
              <img
                src={cert.logo}
                height={190}
                width={190}
                className={`${styles.cert} hover-pointer grow-on-hover`}
                onClick={() => handleCertificationClick(cert)}
              />
            </ScrollAnimation>
          </Grid>
        ))}
      </Grid>
      <Modal
        sx={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        }}
        open={openModal}
        onClose={closeModal}
      >
        <Box>
        {selectedCertification && (
          <img
            src={selectedCertification.screenshot}
            height={900}
            width={600}
          />
        )}
        </Box>
      </Modal>
    </Box>
  );
}
