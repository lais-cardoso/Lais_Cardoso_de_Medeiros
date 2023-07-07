import styles from './styles';
import './styles.js';
import React from 'react';
import { Container, Button, Grid, TextField, CardContent, CardActions, Box, Typography, Avatar, Paper } from '@material-ui/core/';
import { palette } from '@mui/system';
import { experimentalStyled as styled } from '@mui/material/styles';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
//icons-material nao instalou

function Home() {
    return (
        <Container className={styles().root}>

            <Grid className={styles().center} container item xs={12} >

            <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
                    <Grid item xs={12} md={3}>
                        <Button variant="outlined" style={{ color: "#FFFFFF", borderColor: "#ffffff" }} href="https://github.com/lais-cardoso">GitHub</Button>
                    </Grid>
                    <Grid item xs={12} md={3}>
                        <Button variant="outlined" style={{ color: "#FFFFFF", borderColor: "#ffffff" }} href="https://www.linkedin.com/in/lais-cardoso-de-medeiros-074774236/">Linkedin</Button>
                    </Grid>
                    <Grid item xs={12} md={3}>
                        <Button variant="outlined" style={{ color: "#FFFFFF", borderColor: "#ffffff" }} href="mailto:englaiscardosodemedeiros@gmail.com?subject=&body=">Gmail</Button>
                    </Grid>
                    <Grid item xs={12} md={3}>
                        <Button variant="outlined" style={{ color: "#FFFFFF", borderColor: "#ffffff" }} href="http://lattes.cnpq.br/7464083861535129">Currículo Lattes</Button>
                    </Grid>
                </Grid>

                <Grid container item xs={12} className={styles().center}>
                    <Typography style={{ fontFamily: 'Oswald', fontWeight: "400", weight: "300px", color: "#ffffff", marginTop: "40vh", fontSize: 50 }}>
                        Laís Cardoso de Medeiros
                    </Typography>
                </Grid>

                <Grid container item xs={12} className={styles().center}>
                    <Typography style={{ fontFamily: 'Liu Jian Mao Cao', fontWeight: "400", weight: "300px", color: "#ffffff", fontSize: 35 }}>
                        Desenvolvedora FullStack
                    </Typography>
                </Grid>

                <Grid container spacing={1} className={styles().center}>
                    <KeyboardArrowDownIcon style={{ color: "#FFFFFF", fontSize: 40 }} />
                </Grid>
            </Grid>

            <Grid container justifyContent="center">
                <Grid item xs={12}>
                    <CardContent style={{ fontFamily: 'Oswald', fontWeight: "400", weight: "300px", color: "#ffffff", marginTop: "40vh", fontSize: 50 }}>
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


            <Grid container spacing={1} className={styles().homeBackground}>

                <Typography style={{ fontFamily: 'Oswald', fontWeight: "400", weight: "300px", color: "#ffffff", fontSize: 35 }}>
                    Projetos
                </Typography>

                <Grid container item xs={12} spacing={3}>
                    <Grid item xs={4}>
                        <Paper className={styles().paper}>item</Paper>
                    </Grid>
                    <Grid item xs={4}>
                        <Paper className={styles().paper}>item</Paper>
                    </Grid>
                    <Grid item xs={4}>
                        <Paper className={styles().paper}>item</Paper>
                    </Grid>
                </Grid>
                <Grid container item xs={12} spacing={3}>
                    <Grid item xs={4}>
                        <Paper className={styles().paper}>item</Paper>
                    </Grid>
                    <Grid item xs={4}>
                        <Paper className={styles().paper}>item</Paper>
                    </Grid>
                    <Grid item xs={4}>
                        <Paper className={styles().paper}>item</Paper>
                    </Grid>
                </Grid>
                <Grid container item xs={12} spacing={3}>
                    <Grid item xs={4}>
                        <Paper className={styles().paper}>item</Paper>
                    </Grid>
                    <Grid item xs={4}>
                        <Paper className={styles().paper}>item</Paper>
                    </Grid>
                    <Grid item xs={4}>
                        <Paper className={styles().paper}>item</Paper>
                    </Grid>
                </Grid>
            </Grid>

            <Grid container spacing={1} style={{marginTop:'50px'}} className={styles().homeBackground}>

                <Typography style={{ fontFamily: 'Oswald', fontWeight: "400", weight: "300px", color: "#ffffff", fontSize: 35}}>
                    Trabalhos científicos
                </Typography>

                <Grid container item xs={12} spacing={3}>
                    <Grid item xs={4}>
                        <Paper className={styles().paper}>item</Paper>
                    </Grid>
                    <Grid item xs={4}>
                        <Paper className={styles().paper}>item</Paper>
                    </Grid>
                    <Grid item xs={4}>
                        <Paper className={styles().paper}>item</Paper>
                    </Grid>
                </Grid>
                <Grid container item xs={12} spacing={3}>
                    <Grid item xs={4}>
                        <Paper className={styles().paper}>item</Paper>
                    </Grid>
                    <Grid item xs={4}>
                        <Paper className={styles().paper}>item</Paper>
                    </Grid>
                    <Grid item xs={4}>
                        <Paper className={styles().paper}>item</Paper>
                    </Grid>
                </Grid>
                <Grid container item xs={12} spacing={3}>
                    <Grid item xs={4}>
                        <Paper className={styles().paper}>item</Paper>
                    </Grid>
                    <Grid item xs={4}>
                        <Paper className={styles().paper}>item</Paper>
                    </Grid>
                    <Grid item xs={4}>
                        <Paper className={styles().paper}>item</Paper>
                    </Grid>
                </Grid>
            </Grid>

        </Container>
    );
}

export default Home;