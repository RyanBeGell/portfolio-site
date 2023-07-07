import EmailIcon from '@mui/icons-material/Email';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import { createSvgIcon } from '@mui/material';

type IconType = 'GitHub' | 'LinkedIn' | 'Email' | 'CodePen';

interface IconProps {
  type: IconType;
  color?: string;
}

const CodePenIcon = createSvgIcon(
  <svg viewBox="0 0 128 128">
    <path d="M125.571 39.926l-58.5-39c-1.997-1.23-4.128-1.24-6.142 0l-58.5 39C.929 40.926 0 42.712 0 44.497v39c0 1.786.929 3.572 2.429 4.571l58.5 39.006c1.996 1.229 4.128 1.24 6.142 0l58.5-39.006c1.5-.999 2.429-2.785 2.429-4.57v-39c0-1.786-.929-3.572-2.429-4.572zm-56.07-24.144l43.07 28.715-19.214 12.858L69.5 41.425V15.784zm-11.001 0v25.644L34.642 57.354 15.428 44.498 58.5 15.782zm-47.5 39l13.786 9.215L11 73.212v-18.43zm47.5 57.43L15.428 83.497 34.642 70.64 58.5 86.569v25.643zM64 76.997l-19.428-13 19.428-13 19.428 13-19.428 13zm5.5 35.215V86.569L93.357 70.64l19.214 12.857-43.07 28.715zm47.5-39l-13.786-9.215L117 54.783v18.429z" />
  </svg>,
  'CodePenIcon'
);

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
        color: 'text.secondary',
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
