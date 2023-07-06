import styles from './styles';
import './styles.js';
import React from 'react';
import { Container, Button, Grid, TextField, CardContent, CardActions, Box, Typography, Avatar, Paper } from '@material-ui/core/';
import { palette } from '@mui/system';
import { experimentalStyled as styled } from '@mui/material/styles';
//icons-material nao instalou

function FormRow() {
    return (
        <React.Fragment>
            <Grid item xs={4}>
                <Paper className={styles().paper}>item</Paper>
            </Grid>
            <Grid item xs={4}>
                <Paper className={styles().paper}>item</Paper>
            </Grid>
            <Grid item xs={4}>
                <Paper className={styles().paper}>item</Paper>
            </Grid>
        </React.Fragment>
    );
}

function Home() {
    return (
        <Container className={styles().root}>

            <Grid className={styles().center} container item xs={12} >
                
                <Grid container item xs={12} className={styles().center}>
                    <Typography style={{ fontFamily: 'Oswald', fontWeight: "400", weight: "300px", color:"#ffffff", marginTop: "40vh", fontSize: 50}}>
                        Laís Cardoso de Medeiros
                    </Typography>
                </Grid>

                <Grid container item xs={12} className={styles().center}>
                    <Typography style={{ fontFamily: 'Liu Jian Mao Cao', fontWeight: "400", weight: "300px", color:"#ffffff",  fontSize: 35}}>
                        Desenvolvedora FullStack
                    </Typography>
                </Grid>
                
                <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
                    <Grid item xs={12} md={4}>
                        <Button variant="outlined">GitHub</Button>
                    </Grid>
                    <Grid item xs={12} md={4}>
                        <Button variant="outlined">Linkedin</Button>
                    </Grid>
                    <Grid item xs={12} md={4}>
                        <Button variant="outlined">Gmail</Button>
                    </Grid>
                </Grid>
            </Grid>

            <Grid container justifyContent="center">
                <Grid item xs={12}>
                    <CardContent style={{ fontFamily: 'Oswald', fontWeight: "400", weight: "300px", color:"#ffffff", marginTop: "40vh", fontSize: 50}}>
                        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                            Experiência
                        </Typography>
                        <Typography variant="h5" component="div">

                        </Typography>
                        <Typography sx={{ mb: 1.5 }} color="text.secondary">
                            Recode jr
                        </Typography>
                    </CardContent>
                </Grid>

            </Grid>
            <Grid item xs={12}>
                <CardContent color="text.secondary">
                    <Typography color="text.secondary" gutterBottom>
                        Sobre mim
                    </Typography>
                    <Typography variant="h5" component="div">

                    </Typography>
                    <Typography color="text.secondary">
                        Recode jr
                    </Typography>
                </CardContent>
                <CardActions>
                    <Typography color="text.secondary" gutterBottom>
                        Sobre mim
                    </Typography>
                    <Button size="small">Contato</Button>
                </CardActions>
            </Grid>


            <Grid container spacing={1}>
                <Grid container item xs={12} spacing={3}>
                    <FormRow />
                </Grid>
                <Grid container item xs={12} spacing={3}>
                    <FormRow />
                </Grid>
                <Grid container item xs={12} spacing={3}>
                    <FormRow />
                </Grid>
            </Grid>

        </Container>
    );
}

export default Home;