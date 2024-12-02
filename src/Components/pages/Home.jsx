import React from "react";
import Container from "../Container";
import Grid from "../Grid";
import Button from "../Button";
import Flex from "../Flex";
import bannerImage from "../../assets/images/Education-girl.png";
import { FaBook, FaBookReader, FaBriefcase } from "react-icons/fa";
import Title from "../Title";

const Home = () => {
  const WebStatusData = [
    {
      icon: (
        <FaBook className="text-white text-2xl md:text-4xl lg:text-6xl mb-6" />
      ),
      title: "Active Tutors",
      number: 340468,
    },
    {
      icon: (
        <FaBriefcase className="text-white text-2xl md:text-4xl lg:text-6xl mb-6" />
      ),
      title: "Live Tuition Jobs",
      number: 2608,
    },
    {
      icon: (
        <FaBookReader className="text-white text-2xl md:text-4xl lg:text-6xl mb-6" />
      ),
      title: "Happy Students",
      number: 121568,
    },
  ];
  const purposeData = [
    {
      icon: (
        <FaBook className="text-white text-2xl md:text-4xl lg:text-6xl  " />
      ),
      title: "Home Tutoring",
      description:
        "Home tutoring allows students to learn various subjects in their own home.",
    },
    {
      icon: <FaBook className="text-white text-2xl md:text-4xl lg:text-6xl " />,
      title: "Group Tutoring",
      description:
        "Group tutoring allows students to learn together and solve problems at an affordable cost.",
    },
    {
      icon: <FaBook className="text-white text-2xl md:text-4xl lg:text-6xl" />,
      title: "Online Tutoring",
      description:
        "Find the best tutors from anywhere and take online classes by using tools such as Google Meet, Zoom, Skype, and more.",
    },
    {
      icon: <FaBook className="text-white text-2xl md:text-4xl lg:text-6xl" />,
      title: "Package Tutoring",
      description:
        "Package tutoring helps a students to complete their studies within a specific time frame.",
    },
  ];
  return (
    <>
      {/* ============================ Hero Section Start ========================== */}
      <Container>
        <Flex className="w-full h-[82vh]">
          <Grid className="py-2 w-full grid-cols-1 lg:grid-cols-2 items-center">
            <div className="font-nunito">
              <h1 className="text-4xl font-bold text-primary pb-1">
                Hire the Right Tutor Today
              </h1>
              <p>Book one-on-one lessons with verified tutors in your area</p>
              <Button className="my-4">Hire a Tutor (It&#39;s Free!)</Button>
              <p>
                Want to become a Tutor?{" "}
                <a href="/registration" className="text-primary">
                  Sign up
                </a>{" "}
                now
              </p>
            </div>
            <div className="justify-self-center w-3/5 h-auto">
              <img
                src={bannerImage}
                alt="banner image"
                className="w-full h-auto object-cover"
              />
            </div>
          </Grid>
        </Flex>
      </Container>

      {/* ============================ Hero Section End ========================== */}

      {/* ============================ Web Status Achievements Start ========================== */}
      <div className="bg-primary py-12">
        <Container>
          <Grid className="grid-cols-1 lg:grid-cols-3">
            {WebStatusData.map((item, index) => (
              <Flex
                key={index}
                className="font-nunito flex flex-col items-center"
              >
                {item.icon}
                <p className="font-regular text-base text-white pb-1">
                  {item.title}
                </p>
                <h4 className="font-bold text-xl lg:text-3xl text-white">
                  {item.number}
                </h4>
              </Flex>
            ))}
          </Grid>
        </Container>
      </div>
      {/* ============================ Web Status Achievements End ========================== */}
      {/* ============================ Purpose /mission and vision Section Start ========================== */}
      <Container className="py-16">
        <div className="mb-8">
          <Title className="text-center">What we&#39;re doing</Title>
        </div>
        <Grid className="grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8">
          {purposeData.map((item, index) => (
            <Flex
              key={index}
              className="font-nunito flex items-center justify-center rounded-lg bg-white shadow-lg"
            >
              <div className="bg-primary rounded-tl-lg rounded-bl-lg w-32 h-full flex justify-center items-center justify-items-center">
                {item.icon}
              </div>
              <div className="w-full p-4">
                <h4 className="font-semibold text-xl text-primary pb-1">
                  {item.title}
                </h4>
                <p className="font-regular text-base text-gray">
                  {item.description}
                </p>
              </div>
            </Flex>
          ))}
        </Grid>
      </Container>
      {/* ============================ Purpose /mission and vision Section End ========================== */}
    </>
  );
};

export default Home;
