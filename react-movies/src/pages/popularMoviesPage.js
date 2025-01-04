import React from "react";
import { getPopular } from "../api/tmdb-api";
import { useQuery } from 'react-query';
import Spinner from '../components/spinner';
import PageTemplate from '../components/templateMovieListPage';

const PopularMoviesPage = (props) => {

    const { data, error, isLoading, isError } = useQuery('popular', getPopular)

    if (isLoading) {
        return <Spinner />
    }

    if (isError) {
        return <h1>{error.message}</h1>
    }
    const movies = data.results;

    return (
        <PageTemplate
            title="Popular Movies"
            movies={movies}
            action={(movie) => {
            }}
        />
    );
};
export default PopularMoviesPage;
