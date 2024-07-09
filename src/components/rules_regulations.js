import * as React from "react";
import { styled } from "@mui/material/styles";
import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import DialogContent from "@mui/material/DialogContent";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import MusicNoteIcon from "@mui/icons-material/MusicNote";
import LocalParkingIcon from "@mui/icons-material/LocalParking";
import PetsIcon from "@mui/icons-material/Pets";
import HomeIcon from "@mui/icons-material/Home";
import DeleteIcon from "@mui/icons-material/Delete";
import BuildIcon from "@mui/icons-material/Build";
import LockIcon from "@mui/icons-material/Lock";

const BootstrapDialog = styled(Dialog)(({ theme }) => ({
  "& .MuiDialogContent-root": {
    padding: theme.spacing(2),
  },
  "& .MuiDialogActions-root": {
    padding: theme.spacing(1),
  },
  "& .MuiPaper-root": {
    backgroundColor: "#f9f9f9",
    boxShadow: theme.shadows[5],
  },
}));

const rules = [
  {
    icon: <MusicNoteIcon color="primary" />,
    description:
      "Loud music, parties, or other disruptive noises should be kept at a minimum.",
  },
  {
    icon: <LocalParkingIcon color="primary" />,
    description:
      "Designated parking spaces are assigned, and unauthorized parking in other residents' spaces is prohibited.",
  },
  {
    icon: <PetsIcon color="primary" />,
    description:
      "Owners must clean up after their pets and ensure they do not disturb other residents.",
  },
  {
    icon: <HomeIcon color="primary" />,
    description:
      "Common areas such as hallways, lobbies, and recreational facilities should be kept clean and free of personal belongings.",
  },
  {
    icon: <DeleteIcon color="primary" />,
    description:
      "Proper disposal of garbage and recycling in designated bins is required.",
  },
  {
    icon: <BuildIcon color="primary" />,
    description:
      "Unauthorized alterations or repairs to the apartment unit are generally not allowed.",
  },
  {
    icon: <LockIcon color="primary" />,
    description: "Doors and windows should be kept locked when not at home.",
  },
];

export default function RulesRegulations({ open, handleClose }) {
  return (
    <BootstrapDialog
      onClose={handleClose}
      aria-labelledby="customized-dialog-title"
      open={open}
    >
      <DialogTitle
        sx={{ m: 0, p: 2, color: "primary.main", fontWeight: "bold" }}
        id="customized-dialog-title"
      >
        Rules & Regulations
        <IconButton
          aria-label="close"
          onClick={handleClose}
          sx={{
            position: "absolute",
            right: 8,
            top: 8,
            color: "red",
          }}
        >
          <CloseIcon />
        </IconButton>
      </DialogTitle>
      <DialogContent dividers>
        <Grid container spacing={2}>
          {rules.map((rule, index) => (
            <Grid item xs={12} key={index}>
              <Grid container alignItems="center" spacing={1}>
                <Grid item>{rule.icon}</Grid>
                <Grid item xs>
                  <Typography variant="body1" gutterBottom>
                    {rule.description}
                  </Typography>
                </Grid>
              </Grid>
            </Grid>
          ))}
        </Grid>
      </DialogContent>
    </BootstrapDialog>
  );
}
