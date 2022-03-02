import React, { useState, useEffect } from "react";
import axios from "axios";
import Recipe from "../recipe/recipe";
import { Box, Button, Chip, Divider, Grid, Typography } from "@mui/material";
import Svg from "../../assets/svg/undraw_cooking_lyxy.svg"
import CountUp from "react-countup";
import InfiniteScroll from 'react-infinite-scroll-component';

const Recipes = () => {
    const [recipes, setRecipes] = useState([]);
    const [next, setNext] = useState('');
    const [count, setCount] = useState('');

    useEffect(() => {
        axios
            .get("/api/recipes/")
            .then((res) => {
                setRecipes(res.data.results)
                setNext(res.data.next)
                setCount(res.data.count)
            })
            .catch((err) => console.log(err));
    }, [])

    const getMore = () => {
        if (next != null) {
            axios
                .get(next)
                .then((res) => {
                    setRecipes((recipes) => {
                        return recipes.concat(res.data.results); // append new items and return new array of recipes
                    })
                    setNext(res.data.next)
                })
                .catch((err) => console.log(err));
        }
    }

    return (
        <div>
            <Grid container spacing={3} style={{ padding: 24 }}>
                <Grid item xs={12} sm={12} md={6} lg={6}>
                    <Typography variant="h1" color="secondary">
                        Explore
                        <strong>
                            <CountUp duration={0.75} end={count} />
                        </strong> <br />
                        Recipes
                    </Typography>
                </Grid>
                <Grid item xs={12} sm={12} md={6} lg={6}>
                    <Box display="flex" justifyContent="flex-end">
                        <img height="250" alt="Recipes" src={Svg} />
                    </Box>
                </Grid>
            </Grid>
            <Divider variant="middle">
                <Chip label="RECIPES" />
            </Divider>

            <InfiniteScroll
                dataLength={count}
                pageStart={0}
                initialLoad={false}
                next={getMore}
                hasMore={(next) ? true : false}
                loader={<span className="loader" key={0}>Loading ...</span>}
                endMessage={
                    <p style={{ textAlign: 'center' }}>
                      <b>Yay! You have seen all the recipes : )</b>
                    </p>
                  }
            >
                <Grid container justifyContent="flex-start" spacing={3} style={{ padding: 24 }}>
                    {recipes.map((recipe) =>
                        <Grid item key={recipe.id} xs={12} sm={6} md={4} lg={3}>
                            <Recipe item={recipe} />
                        </Grid>
                    )}
                </Grid>
            </InfiniteScroll>

        </div>
    );

};

export default Recipes;