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
      <Box>
        <Typography fontSize={30}>Fall</Typography>
      </Box>
      <Box display="flex" my="20px">
        <Box mx="10px">
          <FormGroup>
            <Typography fontSize={20}>Field Hockey</Typography>
            <FormControlLabel
              control={<Switch defaultChecked color="secondary" />}
              label="Display"
            />
            <Button variant="contained" color="success">
              Save to Database
            </Button>
          </FormGroup>
        </Box>
        <Box mx="10px">
          <FormGroup>
            <Typography fontSize={20}>Football</Typography>
            <FormControlLabel
              control={<Switch defaultChecked color="secondary" />}
              label="Display"
            />
            <Button variant="contained" color="success">
              Save to Database
            </Button>
          </FormGroup>
        </Box>
        <Box mx="10px">
          <FormGroup>
            <Typography fontSize={20}>Boys Soccer</Typography>
            <FormControlLabel
              control={<Switch defaultChecked color="secondary" />}
              label="Display"
            />
            <Button variant="contained" color="success">
              Save to Database
            </Button>
          </FormGroup>
        </Box>
        <Box mx="10px">
          <FormGroup>
            <Typography fontSize={20}>Softball</Typography>
            <FormControlLabel
              control={<Switch defaultChecked color="secondary" />}
              label="Display"
            />
            <Button variant="contained" color="success">
              Save to Database
            </Button>
          </FormGroup>
        </Box>
        <Box mx="10px">
          <FormGroup>
            <Typography fontSize={20}>Girls Volleyball</Typography>
            <FormControlLabel
              control={<Switch defaultChecked color="secondary" />}
              label="Display"
            />
            <Button variant="contained" color="success">
              Save to Database
            </Button>
          </FormGroup>
        </Box>
      </Box>
      <Box>
        <Typography fontSize={30}>Winter</Typography>
      </Box>
      <Box display="flex" my="20px">
        <Box mx="10px">
          <FormGroup>
            <Typography fontSize={20}>Boys Basketball</Typography>
            <FormControlLabel
              control={<Switch defaultChecked color="secondary" />}
              label="Display"
            />
            <Button variant="contained" color="success">
              Save to Database
            </Button>
          </FormGroup>
        </Box>
        <Box mx="10px">
          <FormGroup>
            <Typography fontSize={20}>Girls Basketball</Typography>
            <FormControlLabel
              control={<Switch defaultChecked color="secondary" />}
              label="Display"
            />
            <Button variant="contained" color="success">
              Save to Database
            </Button>
          </FormGroup>
        </Box>
        <Box mx="10px">
          <FormGroup>
            <Typography fontSize={20}>Ice Hockey</Typography>
            <FormControlLabel
              control={<Switch defaultChecked color="secondary" />}
              label="Display"
            />
            <Button variant="contained" color="success">
              Save to Database
            </Button>
          </FormGroup>
        </Box>
      </Box>
      <Box>
        <Typography fontSize={30}>Spring</Typography>
      </Box>
      <Box display="flex" my="20px">
        <Box mx="10px">
          <FormGroup>
            <Typography fontSize={20}>Baseball</Typography>
            <FormControlLabel
              control={<Switch defaultChecked color="secondary" />}
              label="Display"
            />
            <Button variant="contained" color="success">
              Save to Database
            </Button>
          </FormGroup>
        </Box>
        <Box mx="10px">
          <FormGroup>
            <Typography fontSize={20}>Boys Lacrosse</Typography>
            <FormControlLabel
              control={<Switch defaultChecked color="secondary" />}
              label="Display"
            />
            <Button variant="contained" color="success">
              Save to Database
            </Button>
          </FormGroup>
        </Box>
        <Box mx="10px">
          <FormGroup>
            <Typography fontSize={20}>Girls Lacrosse</Typography>
            <FormControlLabel
              control={<Switch defaultChecked color="secondary" />}
              label="Display"
            />
            <Button variant="contained" color="success">
              Save to Database
            </Button>
          </FormGroup>
        </Box>
        <Box mx="10px">
          <FormGroup>
            <Typography fontSize={20}>Girls Soccer</Typography>
            <FormControlLabel
              control={<Switch defaultChecked color="secondary" />}
              label="Display"
            />
            <Button variant="contained" color="success">
              Save to Database
            </Button>
          </FormGroup>
        </Box>
        <Box mx="10px">
          <FormGroup>
            <Typography fontSize={20}>Boys Volleyball</Typography>
            <FormControlLabel
              control={<Switch defaultChecked color="secondary" />}
              label="Display"
            />
            <Button variant="contained" color="success">
              Save to Database
            </Button>
          </FormGroup>
        </Box>
      </Box>
    </Box>
  );
};

export default Chsaa;
