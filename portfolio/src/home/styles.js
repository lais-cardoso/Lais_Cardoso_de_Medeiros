import {makeStyles} from '@material-ui/core';

const styles = makeStyles((theme) =>({
    body:{
        backgroundColor: "gray",
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
    }
}));

export default styles;