import { Divider, Grid, Paper, useTheme } from '@mui/material';
import { createLazyFileRoute } from '@tanstack/react-router'

export const Route = createLazyFileRoute('/About')({
  component: About,
})

function About() {
  const theme = useTheme();

  return (
    <>
      <Paper style={{backgroundColor: "#ffebee"}} elevation={3}>Hi</Paper>
      <Divider></Divider>
      <Grid sx={{bgcolor: theme.palette.background.paper, color: theme.palette.text.primary, fontWeight: theme.typography.fontWeightBold}}>
        Hi!, in About!
      </Grid>
    </>
  );
}
