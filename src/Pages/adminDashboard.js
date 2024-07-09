import { useEffect, useState } from "react";
import {
  Typography,
  Grid,
  Card,
  CardContent,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";
// import {
//   Close as CloseIcon,
//   ExpandMore as ExpandMoreIcon,
// } from "@mui/icons-material";
import AdminHeader, { DrawerHeader, Main } from "../components/adminHeader";
import PieChart from "../components/pieChart";

const Dashboard = () => {
  const [record, setRecord] = useState([]);
  const [value, setValue] = useState(0);
  const [open, setOpen] = useState(false);

  const getData = () => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((res) => setRecord(res));
  };

  useEffect(() => {
    getData();
  }, []);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  return (
    <div style={{ display: "flex" }}>
      <AdminHeader
        open={open}
        handleDrawerOpen={handleDrawerOpen}
        handleDrawerClose={handleDrawerClose}
      />
      <Main open={open}>
        <DrawerHeader />
        <div style={{ padding: "16px" }}>
          <Grid container spacing={3}>
            <Grid item xs={12} sm={6} md={3}>
              <Card>
                <CardContent
                  style={{ backgroundColor: "#57b960", color: "white" }}
                >
                  <Typography variant="h6" gutterBottom>
                    Buildings
                  </Typography>
                  <Typography variant="h4">4</Typography>
                </CardContent>
              </Card>
            </Grid>
            <Grid item xs={12} sm={6} md={3}>
              <Card style={{ backgroundColor: "#dc3545", color: "white" }}>
                <CardContent>
                  <Typography variant="h6" gutterBottom>
                    Flats
                  </Typography>
                  <Typography variant="h4">80</Typography>
                </CardContent>
              </Card>
            </Grid>
            {/* <Grid item xs={12} sm={6} md={3}>
              <Card style={{ backgroundColor: "#dc5", color: "white" }}>
                <CardContent>
                  <Typography variant="h6" gutterBottom>
                    Occupied Flats
                  </Typography>
                  <Typography variant="h4">87</Typography>
                </CardContent>
              </Card>
            </Grid> */}
            <Grid item xs={12} sm={6} md={3}>
              <Card style={{ backgroundColor: "#17a2b8", color: "white" }}>
                <CardContent>
                  <Typography variant="h6" gutterBottom>
                    Users
                  </Typography>
                  <Typography variant="h4">125</Typography>
                </CardContent>
              </Card>
            </Grid>
            <Grid item xs={12} sm={6} md={3}>
              <Card style={{ backgroundColor: "#ffc107", color: "white" }}>
                <CardContent>
                  <Typography variant="h6" gutterBottom>
                    Complaints
                  </Typography>
                  <Typography variant="h4">15</Typography>
                </CardContent>
              </Card>
            </Grid>
          </Grid>

          <Grid container spacing={3} marginTop={3}>
            <Grid item xs={12} md={7}>
              <Typography variant="h5" color="textSecondary" gutterBottom>
                Check More Records
              </Typography>
              <TableContainer>
                <Table>
                  <TableHead>
                    <TableRow>
                      <TableCell>No</TableCell>
                      <TableCell>Label</TableCell>
                      <TableCell>Header</TableCell>
                      <TableCell>Column</TableCell>
                      <TableCell>Record Data</TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {record.slice(0, 5).map((output) => (
                      <TableRow key={output.id}>
                        <TableCell>{output.id}</TableCell>
                        <TableCell>{output.name}</TableCell>
                        <TableCell>{output.email}</TableCell>
                        <TableCell>{output.website}</TableCell>
                        <TableCell>{output.phone}</TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </TableContainer>
            </Grid>

            <Grid item xs={12} md={5}>
              <Typography
                variant="h4"
                align="center"
                color="textSecondary"
                gutterBottom
              >
                Data in Chart
              </Typography>
              <div
                style={{
                  height: "300px",
                  width: "400px",
                  marginBottom: "16px",
                }}
              >
                {/* <PieChart /> */}
              </div>
            </Grid>
          </Grid>
        </div>
      </Main>
    </div>
  );
};

export default Dashboard;
