import IconButton from '@mui/material/IconButton';

export interface Props{
    children?:any;
    onClick?: React.MouseEventHandler<HTMLButtonElement>;
}

export default function StyledIconButton(props:Props){

    return(<>
    <IconButton
        color='primary'
        onClick={props.onClick}
        sx={{
            borderRadius:'10px',
            border:'1px solid',
            borderColor:'background.paperDivider',
             mx:'5px', 
             '&:hover': {
                borderColor:'primary.main',
              },}}
          >
            {props.children}
        </IconButton>
    </>)
}