import { Box } from '@mui/material';
import SectionTitle from '../SectionTitle/SectionTitle';

export default function AboutMe() {
  return (
    <>
      <Box className="centerBox">
        <SectionTitle title="About Me" />
        {"This is sample text. ".repeat(20)}
      </Box>
    </>
  );
}
