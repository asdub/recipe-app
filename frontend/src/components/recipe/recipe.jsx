import React from "react";
import { Link } from "react-router-dom";
import { Card, CardMedia, CardContent, CardActions, Typography, Badge, Button } from '@mui/material';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import AccessTimeFilledIcon from '@mui/icons-material/AccessTimeFilled';
import PeopleIcon from '@mui/icons-material/People';
import useStyles from './styles'



const Recipe = ({ item }) => {
    const classes = useStyles();

    const truncateText = (text) =>
        text?.length > 100 ? `${text.substring(0, 120)}...` : text;

    return (
        <Card className={classes.root}>

            <CardMedia className={classes.media} image={item.photo_url} title={item.name} />
            <CardContent className={classes.content}>
                <div className={classes.cardContent}>
                    <div className={classes.cardContentMain}>
                        <Typography dangerouslySetInnerHTML={{ __html: item.name }} variant="h6" component="h2" />
                        {item.chef.map((item) => (
                            <Typography variant="subtitle1" color="secondary" key={item.id}>
                                {item.chef_name}
                            </Typography>
                        ))}
                    </div>
                    <div className={classes.cardMetrics}>
                        <Badge badgeContent={item.total_time_minutes} max={999} color="info" sx={{ mr: 2 }}>
                            <Typography variant="caption1" color="secondary">
                                Ready in
                                <AccessTimeFilledIcon />
                            </Typography>
                        </Badge>
                        <Badge badgeContent={item.serves} max={999} color="info">
                            <Typography variant="caption1" color="secondary">
                                Serves
                                <PeopleIcon />
                            </Typography>
                        </Badge>
                    </div>
                </div>

                <div className={classes.cardDescription}>
                    <Typography dangerouslySetInnerHTML={{ __html: truncateText(item.description) }} variant="body2" />
                </div>
                <CardActions disableSpacing className={classes.cardActions}>
                        <Button 
                            color="secondary" 
                            component={Link} 
                            endIcon={<KeyboardArrowRightIcon /> }
                            state={{ state: item }}
                            size="medium"
                            to={`/recipe/${item.id}`} 
                            variant="outlined" 
                        > 
                            View Recipe
                        </Button>
                </CardActions>
            </CardContent>

        </Card>
    );
};

export default Recipe;