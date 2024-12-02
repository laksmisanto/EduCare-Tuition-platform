import Container from "./Container";
import Flex from "./Flex";
import Grid from "./Grid";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaTwitter,
} from "react-icons/fa";
import { MdCall, MdEmail } from "react-icons/md";

const TopBar = () => {
  return (
    <>
      <div className="w-full bg-primary flex items-center">
        <Container>
          <Grid className="py-2 w-full grid-cols-1 lg:grid-cols-2 items-center">
            <Flex className="gap-x-2">
              <Flex className="gap-x-1 items-center">
                <MdEmail className="text-base text-white" />
                <p className="text-sm text-white">laksmisatno1998@gmail.com</p>
              </Flex>
              <Flex className="gap-x-1 items-center">
                <MdCall className="text-base text-white" />
                <p className="text-sm text-white">+91 123456789</p>
              </Flex>
            </Flex>

            <Flex className="justify-self-end gap-x-2">
              <a
                href="https://www.facebook.com/"
                className="size-6 rounded-full bg-white flex justify-center items-center"
              >
                <FaFacebookF className="text-sm text-primary" />
              </a>
              <a
                href="https://www.facebook.com/"
                className="size-6 rounded-full bg-white flex justify-center items-center"
              >
                <FaLinkedinIn className="text-sm text-primary" />
              </a>
              <a
                href="https://www.facebook.com/"
                className="size-6 rounded-full bg-white flex justify-center items-center"
              >
                <FaTwitter className="text-sm text-primary" />
              </a>
              <a
                href="https://www.facebook.com/"
                className="size-6 rounded-full bg-white flex justify-center items-center"
              >
                <FaInstagram className="text-sm text-primary" />
              </a>
            </Flex>
          </Grid>
        </Container>
      </div>
    </>
  );
};

export default TopBar;
