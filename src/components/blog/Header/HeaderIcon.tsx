import EmailIcon from '@mui/icons-material/Email';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import RedditIcon from '@mui/icons-material/Reddit';
import TwitterIcon from '@mui/icons-material/Twitter';
import Tooltip from '@mui/material/Tooltip';

type IconType = 'Reddit' | 'Twitter' | 'LinkedIn' | 'Email';

interface IconProps {
  type: IconType;
  color: string;
}

const icons = {
  Reddit: RedditIcon,
  Twitter: TwitterIcon,
  LinkedIn: LinkedInIcon,
  Email: EmailIcon,
};

const HeaderIcon = ({ type, color }: IconProps) => {
  const title = type === 'Email' ? 'Share with email' : `Share on ${type}`;

  const IconComponent = icons[type];

  return (
    <Tooltip title={title} placement="top" arrow>
      <IconComponent
        sx={{
          color: 'text.blogIcons',
          mr: '8px',
          fontSize: '25px',
          '&:hover': {
            color: `var(--${color})`,
            cursor: 'pointer',
          },
        }}
      />
    </Tooltip>
  );
};

export default HeaderIcon;
