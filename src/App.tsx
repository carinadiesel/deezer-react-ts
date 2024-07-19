import { AppBar, Box, Drawer, Toolbar, Typography } from "@mui/material";
import "./App.css";
import hero from "./assets/hero.jpg";

function App() {
  return (
    <Box sx={{ background: "#000" }}>
      <AppBar
        position="fixed"
        color="primary"
        sx={{
          zIndex: (theme) => theme.zIndex.drawer + 1,
          display: "flex",
          justifyContent: "space-between",
        }}
        enableColorOnDark
      >
        <Toolbar>
          <Typography variant="h6" noWrap component="div">
            {" "}
            Logo
          </Typography>

          {/* <Box>
            <Avatar sx={{ bgcolor: "secondary" }}>N</Avatar>
          </Box> */}
        </Toolbar>
      </AppBar>
      <Box
        sx={{
          height: "59rem",
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
            width: 500,
            flexShrink: 0,
            [`& .MuiDrawer-paper`]: { width: 500, boxSizing: "border-box" },
          }}
        >
          <Toolbar />
          <Box sx={{ overflow: "auto" }}></Box>
        </Drawer>
      </Box>
    </Box>
  );
}

export default App;
