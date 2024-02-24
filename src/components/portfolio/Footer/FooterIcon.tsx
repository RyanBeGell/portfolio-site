import EmailIcon from '@mui/icons-material/Email';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import Link from '@mui/material/Link';
import Tooltip from '@mui/material/Tooltip';
import CodePenIcon from '../../Icons/CodePenIcon';

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
      <Tooltip title={type}  arrow placement="top" >
        <div>
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
        </div>
      </Tooltip>
    </Link>
  );
};

export default FooterIcon;
