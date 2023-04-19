import { Box } from '@mui/material';
import SectionTitle from '../SectionTitle/SectionTitle';

export default function AboutMe() {
  return (
    <>
      <Box className="centerBox">
        <SectionTitle title="About Me" />
        {"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus gravida elit sit amet mauris consequat ullamcorper. Nulla sed molestie purus. Interdum et malesuada fames ac ante ipsum primis in faucibus. Integer leo felis, mattis quis dui vel, eleifend placerat purus. Etiam rhoncus odio metus, ut commodo sem sodales ac. Vivamus purus metus, varius pharetra maximus vitae, pellentesque nec lacus. Nullam condimentum ut augue at posuere. Praesent mattis justo turpis, in ullamcorper purus sagittis non. Sed tellus dolor, blandit eget ante a, convallis volutpat massa. "}
      </Box>
    </>
  );
}
