import React from "react";
import { getNowPlaying } from "../api/tmdb-api";
import { useQuery } from 'react-query';
import Spinner from '../components/spinner';
import PageTemplate from '../components/templateMovieListPage';

const NowPlayingMoviesPage = (props) => {

    const { data, error, isLoading, isError } = useQuery('now_playing', getNowPlaying)

    if (isLoading) {
        return <Spinner />
    }

    if (isError) {
        return <h1>{error.message}</h1>
    }
    const movies = data.results;

    return (
        <PageTemplate
            title="Now Playing Movies"
            movies={movies}
            action={(movie) => {
            }}
        />
    );
};
export default NowPlayingMoviesPage;
