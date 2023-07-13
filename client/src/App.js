import React, { useState, useEffect } from 'react';
import { Container, AppBar, Typography, Grow, Grid } from '@material-ui/core';// I have to skip material-ui core. Its

import { useDispatch } from 'react-redux';//this enables us to dispatch an action//we will need to know how to dispatch it. Best used by useEffect

import { getPosts} from './actions/posts';
import Posts from './components/Posts/Posts';
import Form from './components/Form/Form';
// import { getPosts } from './actions/posts';
import useStyles from './styles';
import memories from './images/memories.png';

const App =()=>{
    const [currentId, setCurrentId] = useState(0);

    const classes = useStyles();//really interesting way to use styles here
    // export default makeStyles(() => ({
    //     appBar: {
    //       borderRadius: 15,
    //       margin: '30px 0',
    //       display: 'flex',
    //       flexDirection: 'row',
    //       justifyContent: 'center',
    //       alignItems: 'center',
    //     },
    //     heading: {
    //       color: 'rgba(0,183,255, 1)',
    //     },
    //     image: {
    //       marginLeft: '15px',
    //     },
    //   }));
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getPosts());
    }, [currentId, dispatch]);

    return (
        <Container maxWidth="lg">
        <AppBar className={classes.appBar} position="static" color="inherit">
          <Typography className={classes.heading} variant="h2" align="center">Memories</Typography>
          <img className={classes.image} src={memories} alt="icon" height="60" />
        </AppBar>
        <Grow in>
          <Container>
            <Grid container justify="space-between" alignItems="stretch" spacing={3}>
              <Grid item xs={12} sm={7}>
                <Posts setCurrentId={setCurrentId} />
              </Grid>
              <Grid item xs={12} sm={4}>
                <Form currentId={currentId} setCurrentId={setCurrentId} />
              </Grid>
            </Grid>
          </Container>
        </Grow>
      </Container>
    );
}
export default App;