import React from "react";
import Typography from "@mui/material/Typography";

const MovieCredit = ({ credit }) => {
    return (
        <>
            <Typography variant="h5" component="h3">
                Name: {credit.name}
            </Typography>

            <Typography variant="h6" component="p">
                Character: {credit.character}
            </Typography>

            <Typography variant="h6" component="p">
                Popularity: {credit.popularity}
            </Typography>
        </>
    );
};
export default MovieCredit
