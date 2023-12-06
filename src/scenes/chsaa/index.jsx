import * as React from "react";
import { Box, Typography } from "@mui/material";
import Header from "../../components/header";
import Button from "@mui/material/Button";
import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Switch from "@mui/material/Switch";

const Chsaa = () => {
  return (
    <Box m="20px">
      <Box>
        <Header
          title="CHSAA UI"
          subtitle="Testing out components for CHSAA Seeding UI"
        />
      </Box>
      <Box display="flex">
        <FormGroup>
          <Typography>Baseball</Typography>

          <FormControlLabel
            control={<Switch defaultChecked />}
            label="Showing"
          />
          <Button variant="contained" color="success">
            Send to Database
          </Button>
        </FormGroup>
        <FormGroup>
          <Typography>Baseball</Typography>

          <FormControlLabel
            control={<Switch defaultChecked />}
            label="Showing"
          />
          <Button variant="contained" color="success">
            Send to Database
          </Button>
        </FormGroup>
      </Box>
    </Box>
  );
};

export default Chsaa;
