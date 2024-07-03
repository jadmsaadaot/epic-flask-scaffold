import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { Chip } from "@mui/material";

function createData(
  id: number,
  name: string,
  submittedDate: string,
  submittedBy: string,
  isCompleted: boolean
) {
  return { id, name, submittedDate, submittedBy, isCompleted };
}

const rows = [
  createData(1, "Management Plan 1", "15-May-2024", "Allen, Barry", true),
  createData(2, "Management Plan 2", "18-May-2024", "Jane, Mary", false),
  createData(3, "Management Plan 3", "21-May-2024", "Danvers, Carol", true),
  createData(4, "Management Plan 4", "22-May-2024", "Allen, Barry", true),
];

export default function ListPage() {
  return (
    <TableContainer component={Paper}>
      <Table width={"100%"} aria-label="simple table" stickyHeader>
        <TableHead>
          <TableRow>
            <TableCell>Plan</TableCell>
            <TableCell align="right">Submitted date</TableCell>
            <TableCell align="right">Submitted by</TableCell>
            <TableCell align="right">Status</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow
              key={row.id}
              sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {row.name}
              </TableCell>
              <TableCell align="right">{row.submittedDate}</TableCell>
              <TableCell align="right">{row.submittedBy}</TableCell>
              <TableCell align="right">
                {row.isCompleted ? (
                  <Chip label="Completed" color="success" />
                ) : (
                  <Chip label="Not Started" color="error" />
                )}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
