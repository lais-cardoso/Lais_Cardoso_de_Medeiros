import {makeStyles} from '@material-ui/core';

const styles = makeStyles((theme) =>({
    root:{
        //height: '100vh',
        flexGrow: 1,
    },
    homeBackground:{
        //nao esta centralizado responsivo
        margin: 0,
        background: "linear-gradient(90deg, rgba(0,0,0,1) 0%, rgba(8,5,13,1) 33%, rgba(12,0,14,1) 100%)",
        justifyContent: 'center',
        width: "80vw",
        height: "80vh",
        alignItems: 'center',
        display:'flex',
        flexDirection: 'row',
        marginLeft: '10%',
        marginTop: '5%',
        borderRadius: '16px'
    },
    center: {
        display:'flex',
        alignItems: 'center',
        justifyContent: 'center',
        textAlign:'center',
        color: theme.palette.text.primary,
    },
    paper: {
        padding: theme.spacing(1),
        textAlign: 'center',
        color: theme.palette.text.primary,
      },
}));

export default styles;