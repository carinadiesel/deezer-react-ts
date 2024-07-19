import { Box } from "@mui/material";
import "./App.css";
import hero from "./assets/hero.jpg";

function App() {
  return (
    <Box sx={{ background: "#000" }}>
      <Box
        sx={{
          height: "59rem",
          width: "100vw",
          backgroundImage: `linear-gradient(90deg, rgba(0,0,0,1) 0%, rgba(0,0,0,1) 35%, rgba(0,0,0,0.7) 60%, rgba(0,0,0,0) 100%),url(${hero})`,
          backgroundSize: "contain",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "right",
          overflow: "hidden",
        }}
      >
        TEST
      </Box>
    </Box>
  );
}

export default App;
