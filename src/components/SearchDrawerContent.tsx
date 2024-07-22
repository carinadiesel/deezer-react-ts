import SearchIcon from "@mui/icons-material/Search";
import { Box, Button, Divider, Link, Stack, Typography } from "@mui/material";
import InputBase from "@mui/material/InputBase";
import { alpha, styled } from "@mui/material/styles";
import { useState } from "react";
import type { ArtistInfo } from "../context/ArtistContext.tsx";
import { useArtistContext } from "../context/ArtistContext.tsx";
import ArtistCard from "./ArtistCard.tsx";

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
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
  },
}));

export const SearchDrawerContent = () => {
  const [artistName, setArtistName] = useState<string>("");
  const [resultData, setResultData] = useState([]);
  const { setArtistInfo } = useArtistContext();

  const handleSubmit = (event: React.SyntheticEvent) => {
    event.preventDefault(); // Not really needed in this case since there is no validation
    setArtistName(artistName);
    fetchArtists();
  };

  const fetchArtists = async () => {
    try {
      const response = await fetch(
        `https://api.deezer.com/search/artist?q=${artistName}`
      );
      const result = await response.json();
      setResultData(result.data);
    } catch (error) {
      console.error(error);
    }
  };
  return (
    <Stack width={"100%"} gap={3} height={"100%"}>
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
      <Divider sx={{ paddingTop: 1 }} />
      <Box
        sx={{
          display: "flex",
          flexWrap: "wrap",
          rowGap: 5,
          justifyContent: "space-evenly",
          paddingTop: 3,
          paddingBottom: 7,
        }}
      >
        {resultData?.map((artist: ArtistInfo, index) => (
          <Link
            key={index}
            onClick={() => setArtistInfo(artist)}
            sx={{
              cursor: "pointer",
              "&:hover": {
                border: 2,
                borderColor: "primary",
                borderRadius: "1rem",
              },
            }}
            underline="hover"
          >
            <ArtistCard
              name={artist.name}
              fansCount={artist.nb_fan}
              imgUrl={artist.picture_medium}
            />
          </Link>
        ))}
      </Box>
    </Stack>
  );
};
