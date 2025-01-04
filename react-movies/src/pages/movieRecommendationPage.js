import React from "react";
import { useLocation } from "react-router-dom";
import PageTemplate from "../components/templateMoviePage";
import MovieRecommendation from "../components/movieRecommendation";

const MovieRecommendationPage = (props) => {
    let location = useLocation();
    const { movie, recommendation } = location.state;

    return (
        <PageTemplate movie={movie}>
            <MovieRecommendation recommendation={recommendation} />
        </PageTemplate>
    );
};

export default MovieRecommendationPage;