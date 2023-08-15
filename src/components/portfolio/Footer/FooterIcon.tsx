import EmailIcon from '@mui/icons-material/Email';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import CodePenIcon from '../../Icons/CodePenIcon';
import Link from '@mui/material/Link';

type IconType = 'GitHub' | 'LinkedIn' | 'Email' | 'CodePen';

interface IconProps {
  type: IconType;
  color?: string;
  href?: string;
}

const icons = {
  GitHub: GitHubIcon,
  LinkedIn: LinkedInIcon,
  Email: EmailIcon,
  CodePen: CodePenIcon,
};

const FooterIcon = ({ type, color, href }: IconProps) => {
  const IconComponent = icons[type];

  return (
    <Link href={href} target="_blank" rel="noopener noreferrer" color="inherit">
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
    </Link>
  );
};

export default FooterIcon;
