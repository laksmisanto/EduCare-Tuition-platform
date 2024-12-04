import Container from "../Container";
import Grid from "../Grid";
import registerImg from "../../assets/images/login.png";
import {
  Checkbox,
  FormControl,
  FormControlLabel,
  FormLabel,
  InputLabel,
  MenuItem,
  Radio,
  RadioGroup,
  Select,
  TextField,
} from "@mui/material";
import Button from "../Button";

const SignUp = () => {
  return (
    <>
      <Container>
        <Grid className="grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-12">
          <div className="justify-self-center">
            <img src={registerImg} alt="" />
          </div>
          <div className=" p-12 flex flex-col gap-4 self-center">
            <TextField label="Full Name" type="text" fullWidth size="small" />
            <TextField
              label="Email Address"
              type="email"
              fullWidth
              size="small"
            />
            <TextField
              label="Phone Number"
              type="text"
              fullWidth
              size="small"
            />
            {/* =================== District & Upazila Start =================== */}
            <div className="flex gap-4">
              <FormControl size="small" fullWidth>
                <InputLabel id="demo-simple-select-label">District</InputLabel>
                <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  // value={city}
                  label="District"
                  // onChange={handleChange}
                >
                  <MenuItem value={10}>Dinajpur</MenuItem>
                  <MenuItem value={20}>Birganj</MenuItem>
                  <MenuItem value={30}>Dinajpur</MenuItem>
                  <MenuItem value={40}>Thakurgaon</MenuItem>
                  <MenuItem value={50}>Tetuliya</MenuItem>
                  <MenuItem value={60}>Panchagar</MenuItem>
                </Select>
              </FormControl>
              <FormControl size="small" fullWidth>
                <InputLabel id="demo-simple-select-label">Upazila</InputLabel>
                <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  // value={city}
                  label="Upazila"
                  // onChange={handleChange}
                >
                  <MenuItem value={10}>Dinajpur</MenuItem>
                  <MenuItem value={20}>Birganj</MenuItem>
                  <MenuItem value={30}>Dinajpur</MenuItem>
                  <MenuItem value={40}>Thakurgaon</MenuItem>
                  <MenuItem value={50}>Tetuliya</MenuItem>
                  <MenuItem value={60}>Panchagar</MenuItem>
                </Select>
              </FormControl>
            </div>
            {/* =================== District & Upazila End =================== */}
            <TextField label="Address" type="text" multiline rows={2} />

            {/* =================== Account type & Gender part Start =================== */}

            <FormControl size="small" fullWidth>
              <InputLabel id="demo-simple-select-label">
                Account Type
              </InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                // value={city}
                label="Account Type"
                // onChange={handleChange}
              >
                <MenuItem value={10}>Gradient</MenuItem>
                <MenuItem value={20}>Student</MenuItem>
                <MenuItem value={30}>Tutor</MenuItem>
              </Select>
            </FormControl>
            <FormControl size="small">
              <FormLabel id="demo-row-radio-buttons-group-label">
                Gender
              </FormLabel>
              <RadioGroup
                row
                aria-labelledby="demo-row-radio-buttons-group-label"
                name="row-radio-buttons-group"
              >
                <FormControlLabel
                  value="female"
                  control={<Radio />}
                  label="Female"
                />
                <FormControlLabel
                  value="male"
                  control={<Radio />}
                  label="Male"
                />
                <FormControlLabel
                  value="other"
                  control={<Radio />}
                  label="Other"
                />
              </RadioGroup>
            </FormControl>

            {/* =================== Account type & Gender part End =================== */}

            {/* =================== Password & Confirm Password Start =================== */}
            <div className="flex gap-4">
              <TextField
                label="Password"
                type="password"
                fullWidth
                size="small"
              />
              <TextField
                label="Confirm Password"
                type="password"
                fullWidth
                size="small"
              />
            </div>
            {/* =================== Password & Confirm Password End =================== */}
            <div>
              <p className="text-sm text-gray p-4 border border-gray rounded">
                Welcome to EduCare. These Terms of Use (
                <a href="/termscondition" className="text-primary underline">
                  Terms & Condition
                </a>
                ) govern your use of our website, products, and services. By
                accessing or using our website, you agree to comply with these
                Terms.
              </p>
            </div>
            <FormControlLabel
              required
              control={<Checkbox />}
              label="I agree to the Terms of Use and Privacy Policy"
            />
            <div className="text-center flex flex-col gap-4">
              <Button>Sign Up</Button>
              <a
                href="/login"
                className="text-sm text-gray inline-block hover:text-primary hover:underline transition-all duration-75 ease-linear"
              >
                Already have an account?
              </a>
            </div>
          </div>
        </Grid>
      </Container>
    </>
  );
};

export default SignUp;
