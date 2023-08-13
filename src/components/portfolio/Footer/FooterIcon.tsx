import EmailIcon from '@mui/icons-material/Email';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import { createSvgIcon } from '@mui/material';
import CodePenIcon from '../../Icons/CodePenIcon';

type IconType = 'GitHub' | 'LinkedIn' | 'Email' | 'CodePen';

interface IconProps {
  type: IconType;
  color?: string;
}

const icons = {
  GitHub: GitHubIcon,
  LinkedIn: LinkedInIcon,
  Email: EmailIcon,
  CodePen: CodePenIcon,
};

const FooterIcon = ({ type, color }: IconProps) => {
  const IconComponent = icons[type];

  return (
    <IconComponent
      sx={{
        color: 'text.blogIcons',
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
