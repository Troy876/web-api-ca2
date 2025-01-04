import React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { Link } from "react-router-dom";
import { getMovieCredits } from "../../api/tmdb-api";
import { excerpt } from "../../util";
import { useQuery } from "react-query";
import Spinner from '../spinner'

export default function MovieCredits({ movie }) {
    const { data, error, isLoading, isError } = useQuery(
        ["credits", { id: movie.id }],
        getMovieCredits
    );

    if (isLoading) {
        return <Spinner />;
    }

    if (isError) {
        return <h1>{error.message}</h1>;
    }

    const credits = data?.cast || [];

    return (
        <TableContainer component={Paper}>
            <Table sx={{ minWidth: 550 }} aria-label="credits table">
                <TableHead>
                    <TableRow>
                        <TableCell >Role</TableCell>
                        <TableCell align="center">Name</TableCell>
                        <TableCell align="right">More</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {credits?.map((r) => (
                        <TableRow key={r.id}>
                            <TableCell component="th" scope="row">
                                {r.name}
                            </TableCell>
                            <TableCell >{excerpt(r.character)}</TableCell>
                            <TableCell >
                                <Link
                                    to={`/credits/${r.id}`}
                                    state={{
                                        credit: r,
                                        movie: movie,
                                    }}
                                >
                                    Full Credit
                                </Link>
                            </TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    );
}
