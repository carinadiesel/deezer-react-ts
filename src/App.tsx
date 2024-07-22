import { AppBar, Avatar, Box, Drawer, Toolbar } from "@mui/material";
import "./App.css";
import hero from "./assets/hero.jpg";
import ArtistInfo from "./components/ArtistInfo/index.tsx";
import { SearchDrawerContent } from "./components/SearchDrawerContent";
import { useArtistContext } from "./context/ArtistContext.tsx";

function App() {
  const { artistInfo } = useArtistContext();
  return (
    <Box sx={{ background: "#000" }}>
      <AppBar
        position="fixed"
        color="primary"
        sx={{
          zIndex: (theme) => theme.zIndex.drawer + 1,
          paddingX: "2rem",
        }}
        enableColorOnDark
      >
        <Toolbar
          sx={{
            display: "flex",
            justifyContent: "space-between",
          }}
        >
          <img src="../src/assets/logo-white-horizontal.svg" height={40} />
          <Avatar sx={{ bgcolor: "lightblue" }}>U</Avatar>
        </Toolbar>
      </AppBar>
      <Box
        sx={{
          display: "flex",
          height: "100vh",
          width: "100vw",
          backgroundImage: `linear-gradient(90deg, rgba(0,0,0,1) 0%, rgba(0,0,0,1) 30%, rgba(0,0,0,0.7) 60%, rgba(0,0,0,0) 100%),url(${hero})`,
          backgroundSize: "contain",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "right",
          overflow: "hidden",
        }}
      >
        <Drawer
          variant="permanent"
          sx={{
            width: "35vw",
            flexShrink: 0,
            [`& .MuiDrawer-paper`]: { width: "35vw", boxSizing: "border-box" },
          }}
        >
          <Toolbar />
          <Box
            sx={{
              overflow: "auto",
              display: "flex",
              alignItems: "center",
              justifyContent: "start",
              padding: 5,
            }}
          >
            <SearchDrawerContent />
          </Box>
        </Drawer>
        {artistInfo && (
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              width: "65vw",
            }}
          >
            <ArtistInfo />
          </Box>
        )}
      </Box>
    </Box>
  );
}

export default App;
