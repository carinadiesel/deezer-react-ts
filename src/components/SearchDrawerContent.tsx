import SearchIcon from "@mui/icons-material/Search";
import { Box, Button, Stack, Typography } from "@mui/material";
import InputBase from "@mui/material/InputBase";
import { alpha, styled } from "@mui/material/styles";
import { useState } from "react";

const Search = styled("div")(({ theme }) => ({
  position: "relative",
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  "&:hover": {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginLeft: 0,
  width: "100%",
}));

const SearchIconWrapper = styled("div")(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: "100%",
  position: "absolute",
  pointerEvents: "none",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: "inherit",
  width: "100%",
  "& .MuiInputBase-input": {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    //   transition: theme.transitions.create("width"),
    //   [theme.breakpoints.up("sm")]: {
    //     width: "12ch",
    //     "&:focus": {
    //       width: "20ch",
    //     },
    //   },
  },
}));

export const SearchDrawerContent = () => {
  const [artistName, setArtistName] = useState("");
  const [resultData, setResultData] = useState([]);

  const handleSubmit = (event: React.SyntheticEvent) => {
    // console.log("handleSubmit ran");
    event.preventDefault();

    console.log(artistName);

    setArtistName(artistName);
    FetchArtists();
  };

  const FetchArtists = async () => {
    const url = `https://deezerdevs-deezer.p.rapidapi.com/search?q=${artistName}`;
    const options = {
      method: "GET",
      headers: {
        "x-rapidapi-key": "06e4fafe1dmsh77eec2f8841d9c3p1b1f27jsn8108f0b752ed",
        "x-rapidapi-host": "deezerdevs-deezer.p.rapidapi.com",
      },
    };
    try {
      const response = await fetch(url, options);
      const result = await response.json();
      setResultData(result.data);
      console.log(result);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <Stack width={"100%"} gap={3}>
      <Typography variant="h3" textAlign="center">
        Search by artist
      </Typography>
      <form onSubmit={handleSubmit}>
        <Box sx={{ display: "flex", gap: 2 }}>
          <Search>
            <SearchIconWrapper>
              <SearchIcon />
            </SearchIconWrapper>
            <StyledInputBase
              placeholder="Artist Name ..."
              inputProps={{ "aria-label": "search" }}
              onChange={(event) => setArtistName(event.target.value)}
              value={artistName}
            />
          </Search>
          <Button variant="contained" type="submit">
            Search
          </Button>
        </Box>
      </form>
    </Stack>
  );
};
