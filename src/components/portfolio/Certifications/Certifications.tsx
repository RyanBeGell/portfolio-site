import CloseIcon from '@mui/icons-material/Close';
import OpenInNewIcon from '@mui/icons-material/OpenInNew';
import { Box, Grid, Modal, Tooltip } from '@mui/material';
import IconButton from '@mui/material/IconButton';
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
      screenshot: 'AWS-Certified-Cloud-Practitioner-certificate.jpg',
    },
    // additional certifications can be added here in future after completion
    // {
    //   logo: '/AWS-Certified-Developer-Associate.png',
    //   screenshot: '/sample.png',
    // },
    // {
    //   logo: '/AWS-Certified-Solutions-Architect-Associate.png',
    //   screenshot: '/sample.png',
    // },
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
            xs={12}
            sm={12}
            md={12}
          >
            <ScrollAnimation animation={'fade'} timeout={1000 + index * 500}>
              <img
                src={cert.logo}
                height={210}
                width={210}
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
        <Box
          sx={{
            position: 'relative',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            maxWidth: '90vw',
            maxHeight: '90vh',
            borderRadius: '4px',
            overflow: 'hidden',
          }}
        >
          <IconButton
            onClick={(event) => {
              event.stopPropagation();
              closeModal();
            }}
            className="xButton"
            sx={{
              color: 'primary.main',
              ':hover': { color: 'red' },
            }}
          >
            <CloseIcon />
          </IconButton>

          {selectedCertification && (
            <Tooltip
              title={
                <span style={{ display: 'flex', alignItems: 'center' }}>
                  View Credential Verification{' '}
                  <OpenInNewIcon fontSize="inherit" sx={{ ml: '4px' }} />
                </span>
              }
              followCursor={true}
              placement="top"
            >
              <img
                src={selectedCertification.screenshot}
                style={{
                  maxHeight: '100%',
                  maxWidth: '100%',
                  objectFit: 'contain',
                  cursor: 'pointer',
                  borderRadius: '4px',
                }}
                onClick={() =>
                  window.open(
                    'https://cp.certmetrics.com/amazon/en/public/verify/credential/24b65de2fcb441d48f175b0a29de8eb8',
                    '_blank'
                  )
                }
              />
            </Tooltip>
          )}
        </Box>
      </Modal>
    </Box>
  );
}
