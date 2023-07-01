import { Tooltip, useTheme } from '@mui/material';
import IconButton from '@mui/material/IconButton';

export interface Props {
  children?: any;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
  title?: String;
}

export default function StyledIconButton(props: Props) {

  const theme = useTheme();
  
  return (
    <>
      {props.title ? (
        <Tooltip
          title={props.title}
          placement="bottom"
          PopperProps={{ sx: { mt: '10px !important' } }}
        >
          <IconButton
            color="primary"
            onClick={props.onClick}
            sx={{
              height: '34px',
              width: '34px',
              borderRadius: '4px',
              ml: '10px',
              '&:hover': {
                backgroundColor: theme.palette.mode === 'light' ? 'rgba(0, 0, 0, 0.1)' : 'default',
                '& .MuiTouchRipple-root': {
                  display: 'none',
                  
                },
              },
            }}
          >
            {props.children}
          </IconButton>
        </Tooltip>
      ) : (
        <IconButton
          color="primary"
          onClick={props.onClick}
          sx={{
            borderRadius: '10px',
            border: '1px solid',
            borderColor: 'background.paperDivider',
            mx: '5px',
            '&:hover': {
              borderColor: 'primary.main',
            },
          }}
        >
          {props.children}
        </IconButton>
      )}
    </>
  );
}
