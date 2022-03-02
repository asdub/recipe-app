import React from "react";
import { useLocation } from "react-router-dom";
import { AppBar, Avatar, Card, CardMedia, CardContent, CardActions, Grid, Paper, Toolbar, Typography } from '@mui/material';


const RecipeDetail = () => {
    const location = useLocation();
    const recipe = location.state.state;

    return (
        <main> 
            <Grid container justifyContent="flex-start" spacing={3} style={{ padding: 24 }}>
                <Grid item xs={12} sm={12} md={6} lg={6}>
                    <Card>
                        <CardMedia
                            component="img"
                            alt={recipe.name}
                            height="340"
                            image={recipe.photo_url}
                            title={recipe.name}
                        />
                    </Card>
                </Grid>
                <Grid item xs={12} sm={12} md={6} lg={6}>
                    <Paper>
                        <Typography variant="h3" color="inherit">
                            {recipe.name}
                        </Typography>
                    </Paper>
                </Grid>
            </Grid>
        </main>
    );  
};  

export default RecipeDetail;