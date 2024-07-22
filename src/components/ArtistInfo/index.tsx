import { Box, Card, CardMedia, Tab, Tabs, Typography } from "@mui/material";
import * as React from "react";
import { useEffect, useState } from "react";
import { useArtistContext } from "../../context/ArtistContext";
import AlbumCard from "./AlbumCard";
import TopFiveTable from "./TopFiveTable";

type Album = {
  title: string;
  cover: string;
};

export type rowDataTopFive = {
  title_short: string;
  duration: number;
  rank: number;
};

export type TopFiveTableProps = {
  rows: rowDataTopFive[] | null;
};

export default function ArtistInfo() {
  const { artistInfo } = useArtistContext();

  const [topFiveData, setTopFiveData] = useState<rowDataTopFive[] | null>(null);

  const [value, setValue] = useState(0);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  // useEffect so rerendering isn't blocked when state changes
  useEffect(() => {
    const fetchTopFive = async () => {
      try {
        const response = await fetch(
          `https://api.deezer.com/artist/${artistInfo?.id}/top`
        );
        const result = await response.json();
        setTopFiveData(result.data);
      } catch (error) {
        console.error(error);
      }
    };

    if (artistInfo?.id) {
      fetchTopFive();
    }
  }, [artistInfo?.id]);

  const [albums, setAlbums] = useState<Album[] | null>(null);

  useEffect(() => {
    const fetchAlbums = async () => {
      try {
        const response = await fetch(
          `https://api.deezer.com/artist/${artistInfo?.id}/albums`
        );
        const result = await response.json();
        setAlbums(result.data);
      } catch (error) {
        console.error(error);
      }
    };

    if (artistInfo?.id) {
      fetchAlbums();
    }
  }, [artistInfo?.id]);

  return (
    <>
      <Card
        sx={(theme) => ({
          height: "70%",
          width: "55rem",
          margin: "auto",
          padding: 2,
          borderRadius: theme.spacing(2), // 16px
          transition: "0.3s",
          boxShadow: "0px 14px 80px rgba(34, 35, 58, 0.2)",
          position: "relative",
          overflow: "initial",
          paddingBottom: theme.spacing(2),
          [theme.breakpoints.up("md")]: {
            flexDirection: "row",
            paddingTop: theme.spacing(2),
          },
        })}
      >
        <Box sx={{ display: "flex" }}>
          <CardMedia
            image={artistInfo?.picture_xl}
            sx={(theme) => ({
              width: "15rem",
              height: "15rem",
              borderRadius: theme.spacing(2),
              backgroundColor: "#fff",
            })}
          />
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              width: "100%",
              height: "15rem",
              paddingBottom: 3,
            }}
          >
            <Typography variant="h2" textAlign={"center"}>
              {artistInfo?.name}
            </Typography>
            <Box
              sx={{
                width: "100%",
                display: "flex",
                justifyContent: "space-around",
                paddingTop: 5,
              }}
            >
              <Box>
                {" "}
                <Typography variant="h4" color={"primary"}>
                  {artistInfo?.nb_album}
                </Typography>
                <Typography
                  variant="h6"
                  color={"grey"}
                  sx={{ fontWeight: "bold" }}
                >
                  ALBUMS
                </Typography>
              </Box>
              <Box>
                <Typography variant="h4" color={"primary"}>
                  {artistInfo?.nb_fan}
                </Typography>
                <Typography
                  variant="h6"
                  color={"grey"}
                  sx={{ fontWeight: "bold" }}
                >
                  FANS
                </Typography>
              </Box>
            </Box>
          </Box>
        </Box>
        <Tabs
          value={value}
          onChange={handleChange}
          textColor="primary"
          indicatorColor="secondary"
          aria-label="secondary tabs example"
        >
          <Tab label="Top Tracks" />
          <Tab label="Albums" />
        </Tabs>
        {value === 0 && (
          <Box
            sx={{
              width: "100%",
              display: "flex",
              flexWrap: "wrap",
              justifyContent: "space-evenly",
              height: "50%",
              gap: 2,
              paddingY: 3,
            }}
          >
            <TopFiveTable rows={topFiveData} />
          </Box>
        )}
        {value === 1 && (
          <Box
            sx={{
              width: "100%",
              display: "flex",
              flexWrap: "wrap",
              justifyContent: "space-evenly",
              overflowY: "scroll",
              height: "50%",
              gap: 2,
              paddingY: 2,
            }}
          >
            {albums?.map((album, index) => (
              <AlbumCard key={index} img={album.cover} title={album.title} />
            ))}
          </Box>
        )}
      </Card>
    </>
  );
}
