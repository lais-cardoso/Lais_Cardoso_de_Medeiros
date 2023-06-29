import styles from './styles';
import './styles.js';
import React from 'react';
import { Container, Button, Grid, TextField, CardContent, CardActions, Box, Typography, Avatar } from '@material-ui/core/';
//icons-material nao instalou

function Home() {
    return (
        <Container className={styles().homeBackground}>
            <Typography sx={{ fontSize: 50 }} color="text.secondary" gutterBottom>
                            Laís Cardoso de Medeiros
            </Typography>
            <Typography sx={{ fontSize: 50 }} color="text.secondary" gutterBottom>
                            Desenvolvedora FullStack
            </Typography>

            <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
            <Grid container justifyContent="left">
                <Grid item xs={12}>
                    <CardContent color="text.secondary">
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
                <Grid item xs={6}>
                    <Button variant="outlined">GitHub</Button>
                </Grid>
                <Grid item xs={6}>
                    <Button variant="outlined">Linkedin</Button>
                </Grid>
            </Grid>
            <Grid item xs={12}>
                    <CardContent color="text.secondary">
                        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                            Sobre mim
                        </Typography>
                        <Typography variant="h5" component="div">
                            
                        </Typography>
                        <Typography sx={{ mb: 1.5 }} color="text.secondary">
                            Recode jr
                        </Typography>
                    </CardContent>
                    <CardActions>
                        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                            Sobre mim
                        </Typography>
                        <Button size="small">Contato</Button>
                    </CardActions>
            </Grid>
        </Container>
    );
}

export default Home;