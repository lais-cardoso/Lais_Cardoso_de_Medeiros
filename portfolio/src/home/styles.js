import {makeStyles} from '@material-ui/core';

const styles = makeStyles((theme) =>({
    root:{
        background: 'red',
        height: '100vh'
    },
    homeBackground:{
        //nao esta centralizado responsivo
        margin: 0,
        backgroundColor: "#2c2c2c",
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
    },
    center1: {
        display:'flex',
        alignItems: 'center',
        justifyContent: 'center',
    }
}));

export default styles;