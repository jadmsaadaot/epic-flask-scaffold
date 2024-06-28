import { Box, List, ListItem, ListItemButton } from "@mui/material";
import { Link } from "@tanstack/react-router";

export default function SideNavBar() {
  return (
    <div>
      <Box sx={{ overflow: "auto" }} width={240} height={'calc(100vh - 88px)'}>
        <List>
          {[
            {
              routeName: "Root",
              path: "/",
            },
            {
              routeName: "Home",
              path: "/Home",
            },
            {
              routeName: "About",
              path: "/About",
            },
            {
              routeName: "NewPage",
              path: "/NewPage",
            },
          ].map((route) => (
            <ListItem key={route.routeName} disablePadding>
              <ListItemButton>
                <Link to={route.path} className="[&.active]:font-bold">
                  {route.routeName}
                </Link>
              </ListItemButton>
            </ListItem>
          ))}
        </List>
      </Box>
    </div>
  );
}
