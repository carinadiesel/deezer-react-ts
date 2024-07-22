import { Box, Typography } from "@mui/material";

type AlbumCardProps = {
  img: string;
  title: string;
};

export default function AlbumCard({ img, title }: AlbumCardProps) {
  return (
    <>
      <Box
        sx={{
          display: "flex",
          width: "15rem",
          alignItems: "center",
          gap: 1,
          border: 0.5,
          borderRadius: "5px",
          padding: 0.5,
          borderColor: "gray",
        }}
      >
        <img src={img} height="60px" />
        <Typography
          sx={{
            maxWidth: "250px",
            overflow: "hidden",
            textOverflow: "ellipsis",
            whiteSpace: "nowrap",
          }}
        >
          {title}
        </Typography>
      </Box>
    </>
  );
}
