import React, { useState } from "react";
import { AppBar, Stack, Toolbar, Typography, Button } from "@mui/material";
import RulesRegulations from "../../components/rules_regulations";

export default function Header() {
  const [openDialog, setOpenDialog] = useState(false);

  const handleOpenDialog = () => {
    setOpenDialog(true);
  };

  const handleCloseDialog = () => {
    setOpenDialog(false);
  };

  return (
    <AppBar
      position="static"
      sx={{
        padding: 0,
        margin: 0,
        width: "100%",
        backgroundColor: "primary.main",
      }}
    >
      <Toolbar>
        <Typography variant="h5" sx={{ flexGrow: 1 }} component="div">
          SimCity
        </Typography>
        <Stack direction="row" spacing={2}>
          <Button
            color="inherit"
            sx={{
              fontWeight: "bold",
              fontSize: 17,
            }}
            onClick={() => {
              handleOpenDialog();
            }}
          >
            Rules & Regulations
          </Button>
        </Stack>
      </Toolbar>
      <RulesRegulations open={openDialog} handleClose={handleCloseDialog} />
    </AppBar>
  );
}
