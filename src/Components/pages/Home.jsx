import Container from "../Container";
import Grid from "../Grid";
import Button from "../Button";
import Flex from "../Flex";
import Title from "../Title";
import {
  FaAngleLeft,
  FaAngleRight,
  FaBook,
  FaBookReader,
  FaBriefcase,
} from "react-icons/fa";
import bannerImage from "../../assets/images/Education-girl.png";
import gradientImage from "../../assets/images/gradient.png";
import tutor1 from "../../assets/images/tutor1.png";
import tutor2 from "../../assets/images/tutor2.png";
import tutor3 from "../../assets/images/tutor3.png";
import tutor4 from "../../assets/images/tutor4.png";
import testimonial from "../../assets/images/tutor1.png";

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
  const EmpowermentData = [
    {
      id: 1,
      image: gradientImage,
      title: "Submit Your Tutor Request",
      description: "Fill out all the required fields and submit your request.",
    },
    {
      id: 2,
      image: gradientImage,
      title: "Get the Maximum 5 Best Tutor CVs",
      description: "Fill out all the required fields and submit your request.",
    },
    {
      id: 2,
      image: gradientImage,
      title: "Select the Best One & Start Learning",
      description: "Fill out all the required fields and submit your request.",
    },
  ];
  const TutorsData = [
    {
      image: tutor1,
      title: "Uni_help",
    },
    {
      image: tutor2,
      title: "Skill Development",
    },
    {
      image: tutor3,
      title: "Arts",
    },
    {
      image: tutor4,
      title: "English Medium",
    },
  ];
  const FacilitationData = [
    {
      image: gradientImage,
      title: "Create a Free Account",
      description:
        "Create your account in minutes with some required information.",
    },
    {
      image: gradientImage,
      title: "Complete Your Profile",
      description:
        "Complete your profile by including your personal, educational, tuition related and supporting documentation details.",
    },
    {
      image: gradientImage,
      title: "Apply to Your Desired Tuition Job",
      description:
        "Check the job board everyday and apply on desirable tuition jobs which match with you the most.",
    },
    {
      image: gradientImage,
      title: "Get Selected",
      description:
        "Get shortlisted from system and selected by the guardian/student based on your provided information in profile.",
    },
    {
      image: gradientImage,
      title: "Start Tutoring",
      description:
        "Take the trial classes and confirm your expected tuition job. Happy tutoring!",
    },
  ];
  const TestimonialData = [
    {
      image: testimonial,
      name: "ls_santo",
      designation: "MERN Stack developer",
      message:
        "A good teacher is a beacon of knowledge, a guide on the path of learning. They inspire curiosity, foster critical thinking, and create a safe and supportive environment where students feel empowered to explore and grow. A good teacher not only imparts information but also instills a lifelong love for learning.",
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
                <a href="/signup" className="text-primary underline">
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

      {/* ============================ Why Choose Us Section Start ========================== */}
      <Container className="py-16">
        <div className="mb-8">
          <Title className="text-center">Why Choose Us</Title>
        </div>
        <Grid className="grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-12">
          {EmpowermentData.map(
            (item, index) => (
              console.log(item.image),
              (
                <Flex
                  key={index}
                  className="flex-col rounded-lg bg-white shadow-lg p-6"
                >
                  <div className="relative">
                    <img
                      src={item.image}
                      alt="banner image"
                      className="w-1/2 h-auto mx-auto object-cover"
                    />
                    <div className="absolute top-2 left-2 bg-primary size-8 rounded-full flex justify-center items-center">
                      <p className="font-regular text-base text-white">
                        {index + 1}
                      </p>
                    </div>
                  </div>
                  <div className="font-nunito w-full p-4">
                    <h4 className="font-semibold text-xl text-primary pb-1">
                      {item.title}
                    </h4>
                    <p className="font-regular text-base text-gray">
                      {item.description}
                    </p>
                  </div>
                </Flex>
              )
            )
          )}
        </Grid>
      </Container>
      {/* ============================ Why Choose Us Section End ========================== */}
      {/* =========================== Tutors Section Start ========================== */}
      <Container className="py-16">
        <div className="mb-8">
          <Title className="text-center">Our Service</Title>
        </div>
        <Grid className="grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {TutorsData.map((item, index) => (
            <Flex
              key={index}
              className="flex-col rounded-lg bg-white shadow-lg p-5"
            >
              <div className="mb-5">
                <img
                  src={item.image}
                  alt="banner image"
                  className="w-full h-auto rounded-lg mx-auto object-cover"
                />
              </div>

              <h4 className="font-nunito font-semibold text-xl text-primary">
                {item.title}
              </h4>
            </Flex>
          ))}
        </Grid>
      </Container>
      {/* =========================== Tutors Section End ========================== */}
      {/* ========================== Facilitation Section Start ========================== */}
      <Container className="py-16">
        <div className="mb-8">
          <Title className="text-center">How does it work for tutors?</Title>
        </div>
        <Grid className="grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-12">
          {FacilitationData.map((item, index) => (
            <Flex
              key={index}
              className="flex-col rounded-lg bg-white shadow-lg p-8"
            >
              <div className="relative mb-5">
                <img
                  src={item.image}
                  alt="banner image"
                  className="w-1/2 h-auto rounded-lg mx-auto object-cover"
                />
                <div className="absolute top-1 left-1 bg-primary size-8 rounded-full flex justify-center items-center">
                  <p className="font-regular text-base text-white">
                    {index + 1}
                  </p>
                </div>
              </div>
              <div className="font-nunito w-full">
                <h4 className="font-nunito font-semibold text-xl text-primary">
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
      {/* ========================== Facilitation Section End ========================== */}
      {/* ========================== Testimonial Section Start ========================== */}
      <Container className="py-16">
        <div className="mb-16">
          <Title className="text-center">
            What Some Awesome Guardian/Student Says about Us
          </Title>
        </div>
        <div className="w-3/5 mx-auto">
          <div className="relative w-full h-auto p-8 shadow-lg rounded-lg">
            <div className=" size-20 mx-auto rounded-full  bg-white shadow-lg border-2 border-primary flex justify-center items-center">
              <img
                src={testimonial}
                alt="testimonial image"
                className="w-full h-full rounded-full object-cover"
              />
            </div>
            <div className="font-nunito text-center mt-2 ">
              <h4 className="font-bold text-2xl text-primary">ls_santo</h4>
              <p className="font-regular text-sm text-gray pb-3">
                MERN Stack Developer
              </p>
              <p className="font-regular text-base text-gray">
                A good teacher is a beacon of knowledge, a guide on the path of
                learning. They inspire curiosity, foster critical thinking, and
                create a safe and supportive environment where students feel
                empowered to explore and grow. A good teacher not only imparts
                information but also instills a lifelong love for learning.
              </p>
            </div>
            <div className="w-full absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
              <div className="w-full flex justify-between items-center mt-8">
                <div className="-ml-6 size-12 bg-primary rounded-full flex justify-center items-center text-white cursor-pointer">
                  {" "}
                  <FaAngleLeft size={24} />{" "}
                </div>
                <div className="-mr-6 size-12 bg-primary text-white rounded-full flex justify-center items-center cursor-pointer">
                  <FaAngleRight size={24} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
      {/* ========================== Testimonial Section End ========================== */}
    </>
  );
};

export default Home;
