import Container from "./Container";
import Grid from "./Grid";
import logo from "../assets/images/logo.png";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedin,
  FaPhoneAlt,
  FaTwitter,
} from "react-icons/fa";
import { MdEmail, MdLocationOn } from "react-icons/md";

const Footer = () => {
  return (
    <>
      {/* ========================== Footer Section Start ==========================  */}

      <div className="bg-primary py-6">
        <Container>
          <Grid className="grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-12">
            <div className="text-center lg:text-left">
              <img src={logo} alt="logo" className="w-24" />
              <p className="text-white mt-6">
                Caretutors was founded in 2012. It is Bangladesh&apos;s first,
                most trusted and leading online platform for guardians,
                students, and tutors to hire verified tutors or find tuition
                jobs in 13 different categories from anywhere in the country.
              </p>
            </div>
            <div>
              <h4 className="text-white font-semibold text-2xl pb-6">
                Quick Links
              </h4>
              <ul className="flex flex-col gap-2 text-white mt-2 text-base">
                <li>About Us</li>
                <li>Contact Us</li>
                <li>Privacy Policy</li>
                <li>Terms & Conditions</li>
              </ul>
            </div>
            <div>
              <h4 className="text-white font-semibold text-2xl pb-6">
                Contact Us
              </h4>
              <ul className="flex flex-col gap-2 text-white mt-2 text-base">
                <li className="flex items-center gap-2">
                  <FaPhoneAlt />
                  <p>+880-1793940504</p>
                </li>
                <li className="flex items-center gap-2">
                  {" "}
                  <MdEmail /> <p>laksmisatno1998@gmail</p>
                </li>
                <li className="flex items-center gap-2">
                  <MdLocationOn /> Thakurgaon sadar, Thakurgaon
                </li>
              </ul>
              <ul className="flex gap-2 text-white mt-4 text-base">
                <li>
                  <a
                    href="/"
                    className="size-8 rounded-full bg-white text-primary flex justify-center items-center"
                  >
                    <FaFacebookF />
                  </a>
                </li>
                <li>
                  <a
                    href="/"
                    className="size-8 rounded-full bg-white text-primary flex justify-center items-center"
                  >
                    <FaTwitter />
                  </a>
                </li>
                <li>
                  <a
                    href="/"
                    className="size-8 rounded-full bg-white text-primary flex justify-center items-center"
                  >
                    <FaInstagram />
                  </a>
                </li>
                <li>
                  <a
                    href="/"
                    className="size-8 rounded-full bg-white text-primary flex justify-center items-center"
                  >
                    <FaLinkedin />
                  </a>
                </li>
              </ul>
            </div>
          </Grid>
        </Container>
      </div>
      <div className="w-full py-2 bg-black">
        <p className="text-center text-sm text-white">
          Copyright &copy; 2024 tutor theme. All rights reserved. modify by{" "}
          <span className="text-primary">Laksmi Satno</span>
        </p>
      </div>
    </>
  );
};

export default Footer;
