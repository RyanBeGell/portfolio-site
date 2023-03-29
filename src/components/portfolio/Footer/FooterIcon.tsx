import EmailIcon from '@mui/icons-material/Email';
import LinkIcon from '@mui/icons-material/Link';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import RedditIcon from '@mui/icons-material/Reddit';
import TwitterIcon from '@mui/icons-material/Twitter';
import Tooltip from '@mui/material/Tooltip';
import GitHubIcon from '@mui/icons-material/GitHub';

type IconType = 'GitHub' | 'LinkedIn' | 'Email';

interface IconProps {
  type: IconType;
  color?: string;
}

const icons = {
  GitHub: GitHubIcon,
  LinkedIn: LinkedInIcon,
  Email: EmailIcon,
};

const FooterIcon = ({ type, color }: IconProps) => {

  const IconComponent = icons[type];

  return (
      <IconComponent
        sx={{
          color: 'text.navFooter',
          mr: '8px',
          fontSize: '25px',
          '&:hover': {
            color: `var(--${color})`,
            cursor: 'pointer',
          },
        }}
      />
  );
};

export default FooterIcon;
