import React from "react";
import Typography from "@mui/material/Typography";

const MovieRecommendation = ({ recommendation }) => {
    return (
        <>
            <Typography variant="h5" component="h3">
                Recommended Movie: {recommendation.title}
            </Typography>

            <Typography variant="h6" component="p">
                Summary: {recommendation.overview}
            </Typography>

            <Typography variant="h6" component="p">
                Rating: {recommendation.vote_average}
            </Typography>

            <Typography variant="h6" component="p">
                Release date: {recommendation.release_date}
            </Typography>
        </>
    );
};
export default MovieRecommendation