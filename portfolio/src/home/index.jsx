import styles from './styles';
import './styles.js';
import React from 'react';
import { Container, Button, Grid, TextField, CardContent, CardActions, Box, Typography, Avatar, Paper } from '@material-ui/core/';
import { experimentalStyled as styled } from '@mui/material/styles';
//icons-material nao instalou

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(2),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

function Home() {
    return (
        <Container className={styles().homeBackground}>
            <Grid className={styles().center}>
                <Grid className={styles().center1}>
                    <Grid item xs={12}>
                        <Typography color="text.secondary" gutterBottom>
                            Laís Cardoso de Medeiros
                        </Typography>
                    </Grid>
                    <Grid item xs={12}>
                        <Typography color="text.secondary" gutterBottom>
                            Desenvolvedora FullStack
                        </Typography>
                    </Grid>

                    <Grid item xs={4}>
                        <Button variant="outlined">GitHub</Button>
                    </Grid>
                    <Grid item xs={4}>
                        <Button variant="outlined">Linkedin</Button>
                    </Grid>
                    <Grid item xs={4}>
                        <Button variant="outlined">Gmail</Button>
                    </Grid>
                </Grid>
            </Grid>
                

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
                    
                </Grid>
                <Grid item xs={12}>
                    <CardContent color="text.secondary">
                        <Typography  color="text.secondary" gutterBottom>
                            Sobre mim
                        </Typography>
                        <Typography variant="h5" component="div">

                        </Typography>
                        <Typography color="text.secondary">
                            Recode jr
                        </Typography>
                    </CardContent>
                    <CardActions>
                        <Typography  color="text.secondary" gutterBottom>
                            Sobre mim
                        </Typography>
                        <Button size="small">Contato</Button>
                    </CardActions>
                </Grid>

                <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
        {Array.from(Array(6)).map((_, index) => (
          <Grid item xs={2} sm={4} md={4} key={index}>
            <Item>xs=2</Item>
          </Grid>
        ))}
      </Grid>
    </Box>
            
        </Container>
    );
}

export default Home;