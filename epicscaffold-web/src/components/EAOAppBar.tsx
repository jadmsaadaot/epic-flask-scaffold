import { AppBar, Toolbar, Typography } from "@mui/material";
import EAO_Logo from "@/assets/images/EAO_Logo.png";

export default function EAOAppBar() {
  return (
    <>
      <AppBar position="static" color="default">
        <Toolbar variant="regular" sx={{ padding: "0.5rem" }}>
          <img src={EAO_Logo} height={72} />
          <Typography
            variant="h4"
            color="inherit"
            component="div"
            paddingLeft={"0.5rem"}
            fontWeight={"bold"}
          >
            EPIC.scaffold
          </Typography>
        </Toolbar>
      </AppBar>
    </>
  );
}
