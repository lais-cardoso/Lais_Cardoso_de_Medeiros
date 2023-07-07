import {makeStyles} from '@material-ui/core';

const styles = makeStyles((theme) =>({
    root:{
        //height: '100vh',
        flexGrow: 1,
    },
    homeBackground:{
        //nao esta centralizado responsivo
        margin: 0,
        background: "linear-gradient(90deg, rgba(24,15,34,1) 0%, rgba(14,4,22,1) 33%, rgba(19,3,36,1) 100%);",
        justifyContent: 'center',
        width: "80vw",
        height: "80vh",
        alignItems: 'center',
        display:'flex',
        flexDirection: 'row',
        //marginLeft: '10%',
        //marginTop: '5%',
        borderRadius: '16px',
        borderStyled:'solid',
        borderColor: 'red',
        borderWidth: '50px'
    },
    center: {
        display:'flex',
        alignItems: 'center',
        justifyContent: 'center',
        textAlign:'center',
        color: theme.palette.text.primary,
    },
    paper: {
        padding: theme.spacing(8),
        textAlign: 'center',
        color: theme.palette.text.primary,
      },
    contact: {
            backgroundColor: 'blue',
            height: '100px',
            position: 'absolute',
            top: '0',
            right: '0',
            width: '100px'
        
    }
}));

export default styles;