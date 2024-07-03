import { Box, List, ListItem, ListItemButton } from "@mui/material";
import { Link } from "react-router-dom";

export default function SideNavBar() {
  return (
    <div>
      <Box
        sx={{ overflow: "auto", borderRight: "1px solid #0000001A" }}
        width={240}
        height={"calc(100vh - 88px)"}
      >
        <List>
          {[
            {
              routeName: "Root",
              path: "/",
            },
            {
              routeName: "About",
              path: "/about",
            },
            {
              routeName: "ListPage",
              path: "/listpage",
            },
          ].map((route) => (
            <ListItem key={route.routeName}>
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
