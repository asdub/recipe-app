import React from 'react'
import { AppBar, Badge, Toolbar, Typography } from '@mui/material';
import RestaurantOutlinedIcon from '@mui/icons-material/RestaurantOutlined';

const NavBar = ({ recipeCount }) => {
    return (
        <div>
            <AppBar position="static" color="primary">
                <Toolbar>
                    <Typography variant="h5" component="h1" color="inherit">
                        Recipe's 
                    </Typography>
                    <Badge badgeContent={recipeCount} color="error">
                        <Typography variant="subtitle1" component="span" color="inherit">
                            <RestaurantOutlinedIcon />
                        </Typography>
                    </Badge>
                </Toolbar>
            </AppBar>
        </div>
    )
}
export default NavBar;