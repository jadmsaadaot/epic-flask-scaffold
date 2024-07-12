import { Button, Paper } from "@mui/material";
import { useNavigate } from "react-router-dom";

export default function Home() {
  const navigate = useNavigate();
  
  return (
    <>
      <Paper elevation={2} sx={{ padding: "0 1.5rem 2.5rem", backgroundColor: 'primary.accent.light' }}>
        <h2>Environmental Assessments</h2>
        <p>
          British Columbia's environmental assessment process provides
          opportunities for Indigenous Nations, government agencies and the
          public to influence the outcome of environmental assessments in
          British Columbia.
        </p>
        <Button
          variant="outlined"
          color="primary"
          onClick={() => navigate("/planslist")}
        >
          See Plans
        </Button>
      </Paper>
    </>
  );
}
