import {
  FaBook,
  FaDollarSign,
  FaFilter,
  FaList,
  FaPuzzlePiece,
  FaSearch,
  FaUsers,
} from "react-icons/fa";
import Container from "../Container";
import Grid from "../Grid";
import Flex from "../Flex";
import { MdLocationOn } from "react-icons/md";

const JobBoard = () => {
  return (
    <>
      <Container className="py-12">
        <Grid className="grid-cols-1 lg:grid-cols-3 ">
          <div className="font-nunito flex gap-5 items-center">
            <FaList className="text-3xl text-primary" />
            <h4 className="font-bold text-2xl text-gray">24854 Jobs found</h4>
          </div>
          <div className="w-full px-4 justify-self-center">
            <div className="flex gap-2 items-center border-2 bg-white border-gray rounded-lg">
              <input
                type="search"
                name="search"
                id="search"
                placeholder="Search Jobs"
                className="text-base text-gray w-full px-2 py-2 bg-white rounded-tl-lg rounded-bl-lg  outline-none"
              />
              <div className="bg-white rounded-tr-lg rounded-br-lg px-3 py-2 h-full cursor-pointer">
                <FaSearch className="text-xl text-primary" />
              </div>
            </div>
          </div>
          <button className="font-nunito px-6 py-3 rounded-lg flex gap-2 items-center justify-self-end bg-primary">
            <FaFilter className="text-xl text-white" />
            <h4 className="font-semibold text-xl text-white">filter</h4>
          </button>
        </Grid>

        <div className="mt-8">
          <Grid className="grid-cols-1  lg:grid-cols-2 gap-6">
            <div className="bg-white rounded-lg p-4 shadow">
              <p className="font-semibold text-xl text-black">
                Need English Medium(Cambridge) Tutor for A Level(AS) Student-3
                Days/Week
              </p>
              <Flex className="gap-x-4 mt-2 mb-8">
                <h4 className="font-semibold text-base text-gray">
                  <span className="text-lg text-primary">Job ID :</span> 40680
                </h4>
                <h4 className="font-semibold text-base text-gray">
                  {" "}
                  <span className="text-lg text-primary">
                    Posted Date :
                  </span>{" "}
                  Sep 18, 2024
                </h4>
              </Flex>
              <Grid className="grid-cols-1 lg:grid-cols-2 gap-6">
                <div className="flex gap-x-2">
                  <Flex className="size-12 justify-center items-center bg-primary rounded-lg">
                    <FaPuzzlePiece className="text-3xl text-white" />
                  </Flex>
                  <div className="font-nunito">
                    <h4 className=" font-semibold text-base text-black">
                      Tuition Type
                    </h4>
                    <p className="text-sm text-gray">Home Tutoring</p>
                  </div>
                </div>
                <div className="flex gap-x-2">
                  <Flex className="size-12 justify-center items-center bg-primary rounded-lg">
                    <FaDollarSign className="text-3xl text-white" />
                  </Flex>
                  <div className="font-nunito">
                    <h4 className=" font-semibold text-base text-black">
                      Salary
                    </h4>
                    <p className="text-sm text-gray">
                      4000 - 5000{" "}
                      <span className="text-primary">/per month BD</span>
                    </p>
                  </div>
                </div>
                <div className="flex gap-x-2">
                  <Flex className="size-12 justify-center items-center bg-primary rounded-lg">
                    <FaBook className="text-3xl text-white" />
                  </Flex>
                  <div className="font-nunito">
                    <h4 className=" font-semibold text-base text-black">
                      Subject
                    </h4>
                    <p className="text-sm text-gray">
                      <span className="text-primary">Subject : </span> English,
                      Math, Science
                    </p>
                  </div>
                </div>
                <div className="flex gap-x-2">
                  <Flex className="size-12 justify-center items-center bg-primary rounded-lg">
                    <FaUsers className="text-3xl text-white" />
                  </Flex>
                  <div className="font-nunito">
                    <h4 className=" font-semibold text-base text-black">
                      Tutor Preferred
                    </h4>
                    <p className="text-sm text-gray">Anyone</p>
                  </div>
                </div>
              </Grid>
              <Flex className="items-center justify-between mt-12">
                <div className="flex gap-x-2">
                  <Flex className="size-12 justify-center items-center bg-primary rounded-lg">
                    <MdLocationOn className="text-3xl text-white" />
                  </Flex>
                  <div className="font-nunito">
                    <h4 className=" font-semibold text-base text-black">
                      Location
                    </h4>
                    <p className="text-sm text-gray">
                      Thakurgaon sadar, Thakurgaon
                    </p>
                  </div>
                </div>
                <a
                  href="/tutordetails"
                  className="text-sm text-white px-6 py-3 rounded-lg bg-primary rounded"
                >
                  Details
                </a>
              </Flex>
            </div>
            <div className="bg-white rounded-lg p-4 shadow">
              <p className="font-semibold text-xl text-black">
                Need English Medium(Cambridge) Tutor for A Level(AS) Student-3
                Days/Week
              </p>
              <Flex className="gap-x-4 mt-2 mb-8">
                <h4 className="font-semibold text-base text-gray">
                  <span className="text-lg text-primary">Job ID :</span> 40680
                </h4>
                <h4 className="font-semibold text-base text-gray">
                  {" "}
                  <span className="text-lg text-primary">
                    Posted Date :
                  </span>{" "}
                  Sep 18, 2024
                </h4>
              </Flex>
              <Grid className="grid-cols-1 lg:grid-cols-2 gap-6">
                <div className="flex gap-x-2">
                  <Flex className="size-12 justify-center items-center bg-primary rounded-lg">
                    <FaPuzzlePiece className="text-3xl text-white" />
                  </Flex>
                  <div className="font-nunito">
                    <h4 className=" font-semibold text-base text-black">
                      Tuition Type
                    </h4>
                    <p className="text-sm text-gray">Home Tutoring</p>
                  </div>
                </div>
                <div className="flex gap-x-2">
                  <Flex className="size-12 justify-center items-center bg-primary rounded-lg">
                    <FaDollarSign className="text-3xl text-white" />
                  </Flex>
                  <div className="font-nunito">
                    <h4 className=" font-semibold text-base text-black">
                      Salary
                    </h4>
                    <p className="text-sm text-gray">
                      4000 - 5000{" "}
                      <span className="text-primary">/per month BD</span>
                    </p>
                  </div>
                </div>
                <div className="flex gap-x-2">
                  <Flex className="size-12 justify-center items-center bg-primary rounded-lg">
                    <FaBook className="text-3xl text-white" />
                  </Flex>
                  <div className="font-nunito">
                    <h4 className=" font-semibold text-base text-black">
                      Subject
                    </h4>
                    <p className="text-sm text-gray">
                      <span className="text-primary">Subject : </span> English,
                      Math, Science
                    </p>
                  </div>
                </div>
                <div className="flex gap-x-2">
                  <Flex className="size-12 justify-center items-center bg-primary rounded-lg">
                    <FaUsers className="text-3xl text-white" />
                  </Flex>
                  <div className="font-nunito">
                    <h4 className=" font-semibold text-base text-black">
                      Tutor Preferred
                    </h4>
                    <p className="text-sm text-gray">Anyone</p>
                  </div>
                </div>
              </Grid>
              <Flex className="items-center justify-between mt-12">
                <div className="flex gap-x-2">
                  <Flex className="size-12 justify-center items-center bg-primary rounded-lg">
                    <MdLocationOn className="text-3xl text-white" />
                  </Flex>
                  <div className="font-nunito">
                    <h4 className=" font-semibold text-base text-black">
                      Location
                    </h4>
                    <p className="text-sm text-gray">
                      Thakurgaon sadar, Thakurgaon
                    </p>
                  </div>
                </div>
                <a
                  href="/tutordetails"
                  className="text-sm text-white px-6 py-3 rounded-lg bg-primary rounded"
                >
                  Details
                </a>
              </Flex>
            </div>
            <div className="bg-white rounded-lg p-4 shadow">
              <p className="font-semibold text-xl text-black">
                Need English Medium(Cambridge) Tutor for A Level(AS) Student-3
                Days/Week
              </p>
              <Flex className="gap-x-4 mt-2 mb-8">
                <h4 className="font-semibold text-base text-gray">
                  <span className="text-lg text-primary">Job ID :</span> 40680
                </h4>
                <h4 className="font-semibold text-base text-gray">
                  {" "}
                  <span className="text-lg text-primary">
                    Posted Date :
                  </span>{" "}
                  Sep 18, 2024
                </h4>
              </Flex>
              <Grid className="grid-cols-1 lg:grid-cols-2 gap-6">
                <div className="flex gap-x-2">
                  <Flex className="size-12 justify-center items-center bg-primary rounded-lg">
                    <FaPuzzlePiece className="text-3xl text-white" />
                  </Flex>
                  <div className="font-nunito">
                    <h4 className=" font-semibold text-base text-black">
                      Tuition Type
                    </h4>
                    <p className="text-sm text-gray">Home Tutoring</p>
                  </div>
                </div>
                <div className="flex gap-x-2">
                  <Flex className="size-12 justify-center items-center bg-primary rounded-lg">
                    <FaDollarSign className="text-3xl text-white" />
                  </Flex>
                  <div className="font-nunito">
                    <h4 className=" font-semibold text-base text-black">
                      Salary
                    </h4>
                    <p className="text-sm text-gray">
                      4000 - 5000{" "}
                      <span className="text-primary">/per month BD</span>
                    </p>
                  </div>
                </div>
                <div className="flex gap-x-2">
                  <Flex className="size-12 justify-center items-center bg-primary rounded-lg">
                    <FaBook className="text-3xl text-white" />
                  </Flex>
                  <div className="font-nunito">
                    <h4 className=" font-semibold text-base text-black">
                      Subject
                    </h4>
                    <p className="text-sm text-gray">
                      <span className="text-primary">Subject : </span> English,
                      Math, Science
                    </p>
                  </div>
                </div>
                <div className="flex gap-x-2">
                  <Flex className="size-12 justify-center items-center bg-primary rounded-lg">
                    <FaUsers className="text-3xl text-white" />
                  </Flex>
                  <div className="font-nunito">
                    <h4 className=" font-semibold text-base text-black">
                      Tutor Preferred
                    </h4>
                    <p className="text-sm text-gray">Anyone</p>
                  </div>
                </div>
              </Grid>
              <Flex className="items-center justify-between mt-12">
                <div className="flex gap-x-2">
                  <Flex className="size-12 justify-center items-center bg-primary rounded-lg">
                    <MdLocationOn className="text-3xl text-white" />
                  </Flex>
                  <div className="font-nunito">
                    <h4 className=" font-semibold text-base text-black">
                      Location
                    </h4>
                    <p className="text-sm text-gray">
                      Thakurgaon sadar, Thakurgaon
                    </p>
                  </div>
                </div>
                <a
                  href="/tutordetails"
                  className="text-sm text-white px-6 py-3 rounded-lg bg-primary rounded"
                >
                  Details
                </a>
              </Flex>
            </div>
            <div className="bg-white rounded-lg p-4 shadow">
              <p className="font-semibold text-xl text-black">
                Need English Medium(Cambridge) Tutor for A Level(AS) Student-3
                Days/Week
              </p>
              <Flex className="gap-x-4 mt-2 mb-8">
                <h4 className="font-semibold text-base text-gray">
                  <span className="text-lg text-primary">Job ID :</span> 40680
                </h4>
                <h4 className="font-semibold text-base text-gray">
                  {" "}
                  <span className="text-lg text-primary">
                    Posted Date :
                  </span>{" "}
                  Sep 18, 2024
                </h4>
              </Flex>
              <Grid className="grid-cols-1 lg:grid-cols-2 gap-6">
                <div className="flex gap-x-2">
                  <Flex className="size-12 justify-center items-center bg-primary rounded-lg">
                    <FaPuzzlePiece className="text-3xl text-white" />
                  </Flex>
                  <div className="font-nunito">
                    <h4 className=" font-semibold text-base text-black">
                      Tuition Type
                    </h4>
                    <p className="text-sm text-gray">Home Tutoring</p>
                  </div>
                </div>
                <div className="flex gap-x-2">
                  <Flex className="size-12 justify-center items-center bg-primary rounded-lg">
                    <FaDollarSign className="text-3xl text-white" />
                  </Flex>
                  <div className="font-nunito">
                    <h4 className=" font-semibold text-base text-black">
                      Salary
                    </h4>
                    <p className="text-sm text-gray">
                      4000 - 5000{" "}
                      <span className="text-primary">/per month BD</span>
                    </p>
                  </div>
                </div>
                <div className="flex gap-x-2">
                  <Flex className="size-12 justify-center items-center bg-primary rounded-lg">
                    <FaBook className="text-3xl text-white" />
                  </Flex>
                  <div className="font-nunito">
                    <h4 className=" font-semibold text-base text-black">
                      Subject
                    </h4>
                    <p className="text-sm text-gray">
                      <span className="text-primary">Subject : </span> English,
                      Math, Science
                    </p>
                  </div>
                </div>
                <div className="flex gap-x-2">
                  <Flex className="size-12 justify-center items-center bg-primary rounded-lg">
                    <FaUsers className="text-3xl text-white" />
                  </Flex>
                  <div className="font-nunito">
                    <h4 className=" font-semibold text-base text-black">
                      Tutor Preferred
                    </h4>
                    <p className="text-sm text-gray">Anyone</p>
                  </div>
                </div>
              </Grid>
              <Flex className="items-center justify-between mt-12">
                <div className="flex gap-x-2">
                  <Flex className="size-12 justify-center items-center bg-primary rounded-lg">
                    <MdLocationOn className="text-3xl text-white" />
                  </Flex>
                  <div className="font-nunito">
                    <h4 className=" font-semibold text-base text-black">
                      Location
                    </h4>
                    <p className="text-sm text-gray">
                      Thakurgaon sadar, Thakurgaon
                    </p>
                  </div>
                </div>
                <a
                  href="/tutordetails"
                  className="text-sm text-white px-6 py-3 rounded-lg bg-primary rounded"
                >
                  Details
                </a>
              </Flex>
            </div>
            <div className="bg-white rounded-lg p-4 shadow">
              <p className="font-semibold text-xl text-black">
                Need English Medium(Cambridge) Tutor for A Level(AS) Student-3
                Days/Week
              </p>
              <Flex className="gap-x-4 mt-2 mb-8">
                <h4 className="font-semibold text-base text-gray">
                  <span className="text-lg text-primary">Job ID :</span> 40680
                </h4>
                <h4 className="font-semibold text-base text-gray">
                  {" "}
                  <span className="text-lg text-primary">
                    Posted Date :
                  </span>{" "}
                  Sep 18, 2024
                </h4>
              </Flex>
              <Grid className="grid-cols-1 lg:grid-cols-2 gap-6">
                <div className="flex gap-x-2">
                  <Flex className="size-12 justify-center items-center bg-primary rounded-lg">
                    <FaPuzzlePiece className="text-3xl text-white" />
                  </Flex>
                  <div className="font-nunito">
                    <h4 className=" font-semibold text-base text-black">
                      Tuition Type
                    </h4>
                    <p className="text-sm text-gray">Home Tutoring</p>
                  </div>
                </div>
                <div className="flex gap-x-2">
                  <Flex className="size-12 justify-center items-center bg-primary rounded-lg">
                    <FaDollarSign className="text-3xl text-white" />
                  </Flex>
                  <div className="font-nunito">
                    <h4 className=" font-semibold text-base text-black">
                      Salary
                    </h4>
                    <p className="text-sm text-gray">
                      4000 - 5000{" "}
                      <span className="text-primary">/per month BD</span>
                    </p>
                  </div>
                </div>
                <div className="flex gap-x-2">
                  <Flex className="size-12 justify-center items-center bg-primary rounded-lg">
                    <FaBook className="text-3xl text-white" />
                  </Flex>
                  <div className="font-nunito">
                    <h4 className=" font-semibold text-base text-black">
                      Subject
                    </h4>
                    <p className="text-sm text-gray">
                      <span className="text-primary">Subject : </span> English,
                      Math, Science
                    </p>
                  </div>
                </div>
                <div className="flex gap-x-2">
                  <Flex className="size-12 justify-center items-center bg-primary rounded-lg">
                    <FaUsers className="text-3xl text-white" />
                  </Flex>
                  <div className="font-nunito">
                    <h4 className=" font-semibold text-base text-black">
                      Tutor Preferred
                    </h4>
                    <p className="text-sm text-gray">Anyone</p>
                  </div>
                </div>
              </Grid>
              <Flex className="items-center justify-between mt-12">
                <div className="flex gap-x-2">
                  <Flex className="size-12 justify-center items-center bg-primary rounded-lg">
                    <MdLocationOn className="text-3xl text-white" />
                  </Flex>
                  <div className="font-nunito">
                    <h4 className=" font-semibold text-base text-black">
                      Location
                    </h4>
                    <p className="text-sm text-gray">
                      Thakurgaon sadar, Thakurgaon
                    </p>
                  </div>
                </div>
                <a
                  href="/tutordetails"
                  className="text-sm text-white px-6 py-3 rounded-lg bg-primary rounded"
                >
                  Details
                </a>
              </Flex>
            </div>
            <div className="bg-white rounded-lg p-4 shadow">
              <p className="font-semibold text-xl text-black">
                Need English Medium(Cambridge) Tutor for A Level(AS) Student-3
                Days/Week
              </p>
              <Flex className="gap-x-4 mt-2 mb-8">
                <h4 className="font-semibold text-base text-gray">
                  <span className="text-lg text-primary">Job ID :</span> 40680
                </h4>
                <h4 className="font-semibold text-base text-gray">
                  {" "}
                  <span className="text-lg text-primary">
                    Posted Date :
                  </span>{" "}
                  Sep 18, 2024
                </h4>
              </Flex>
              <Grid className="grid-cols-1 lg:grid-cols-2 gap-6">
                <div className="flex gap-x-2">
                  <Flex className="size-12 justify-center items-center bg-primary rounded-lg">
                    <FaPuzzlePiece className="text-3xl text-white" />
                  </Flex>
                  <div className="font-nunito">
                    <h4 className=" font-semibold text-base text-black">
                      Tuition Type
                    </h4>
                    <p className="text-sm text-gray">Home Tutoring</p>
                  </div>
                </div>
                <div className="flex gap-x-2">
                  <Flex className="size-12 justify-center items-center bg-primary rounded-lg">
                    <FaDollarSign className="text-3xl text-white" />
                  </Flex>
                  <div className="font-nunito">
                    <h4 className=" font-semibold text-base text-black">
                      Salary
                    </h4>
                    <p className="text-sm text-gray">
                      4000 - 5000{" "}
                      <span className="text-primary">/per month BD</span>
                    </p>
                  </div>
                </div>
                <div className="flex gap-x-2">
                  <Flex className="size-12 justify-center items-center bg-primary rounded-lg">
                    <FaBook className="text-3xl text-white" />
                  </Flex>
                  <div className="font-nunito">
                    <h4 className=" font-semibold text-base text-black">
                      Subject
                    </h4>
                    <p className="text-sm text-gray">
                      <span className="text-primary">Subject : </span> English,
                      Math, Science
                    </p>
                  </div>
                </div>
                <div className="flex gap-x-2">
                  <Flex className="size-12 justify-center items-center bg-primary rounded-lg">
                    <FaUsers className="text-3xl text-white" />
                  </Flex>
                  <div className="font-nunito">
                    <h4 className=" font-semibold text-base text-black">
                      Tutor Preferred
                    </h4>
                    <p className="text-sm text-gray">Anyone</p>
                  </div>
                </div>
              </Grid>
              <Flex className="items-center justify-between mt-12">
                <div className="flex gap-x-2">
                  <Flex className="size-12 justify-center items-center bg-primary rounded-lg">
                    <MdLocationOn className="text-3xl text-white" />
                  </Flex>
                  <div className="font-nunito">
                    <h4 className=" font-semibold text-base text-black">
                      Location
                    </h4>
                    <p className="text-sm text-gray">
                      Thakurgaon sadar, Thakurgaon
                    </p>
                  </div>
                </div>
                <a
                  href="/tutordetails"
                  className="text-sm text-white px-6 py-3 rounded-lg bg-primary rounded"
                >
                  Details
                </a>
              </Flex>
            </div>
            <div className="bg-white rounded-lg p-4 shadow">
              <p className="font-semibold text-xl text-black">
                Need English Medium(Cambridge) Tutor for A Level(AS) Student-3
                Days/Week
              </p>
              <Flex className="gap-x-4 mt-2 mb-8">
                <h4 className="font-semibold text-base text-gray">
                  <span className="text-lg text-primary">Job ID :</span> 40680
                </h4>
                <h4 className="font-semibold text-base text-gray">
                  {" "}
                  <span className="text-lg text-primary">
                    Posted Date :
                  </span>{" "}
                  Sep 18, 2024
                </h4>
              </Flex>
              <Grid className="grid-cols-1 lg:grid-cols-2 gap-6">
                <div className="flex gap-x-2">
                  <Flex className="size-12 justify-center items-center bg-primary rounded-lg">
                    <FaPuzzlePiece className="text-3xl text-white" />
                  </Flex>
                  <div className="font-nunito">
                    <h4 className=" font-semibold text-base text-black">
                      Tuition Type
                    </h4>
                    <p className="text-sm text-gray">Home Tutoring</p>
                  </div>
                </div>
                <div className="flex gap-x-2">
                  <Flex className="size-12 justify-center items-center bg-primary rounded-lg">
                    <FaDollarSign className="text-3xl text-white" />
                  </Flex>
                  <div className="font-nunito">
                    <h4 className=" font-semibold text-base text-black">
                      Salary
                    </h4>
                    <p className="text-sm text-gray">
                      4000 - 5000{" "}
                      <span className="text-primary">/per month BD</span>
                    </p>
                  </div>
                </div>
                <div className="flex gap-x-2">
                  <Flex className="size-12 justify-center items-center bg-primary rounded-lg">
                    <FaBook className="text-3xl text-white" />
                  </Flex>
                  <div className="font-nunito">
                    <h4 className=" font-semibold text-base text-black">
                      Subject
                    </h4>
                    <p className="text-sm text-gray">
                      <span className="text-primary">Subject : </span> English,
                      Math, Science
                    </p>
                  </div>
                </div>
                <div className="flex gap-x-2">
                  <Flex className="size-12 justify-center items-center bg-primary rounded-lg">
                    <FaUsers className="text-3xl text-white" />
                  </Flex>
                  <div className="font-nunito">
                    <h4 className=" font-semibold text-base text-black">
                      Tutor Preferred
                    </h4>
                    <p className="text-sm text-gray">Anyone</p>
                  </div>
                </div>
              </Grid>
              <Flex className="items-center justify-between mt-12">
                <div className="flex gap-x-2">
                  <Flex className="size-12 justify-center items-center bg-primary rounded-lg">
                    <MdLocationOn className="text-3xl text-white" />
                  </Flex>
                  <div className="font-nunito">
                    <h4 className=" font-semibold text-base text-black">
                      Location
                    </h4>
                    <p className="text-sm text-gray">
                      Thakurgaon sadar, Thakurgaon
                    </p>
                  </div>
                </div>
                <a
                  href="/tutordetails"
                  className="text-sm text-white px-6 py-3 rounded-lg bg-primary rounded"
                >
                  Details
                </a>
              </Flex>
            </div>
            <div className="bg-white rounded-lg p-4 shadow">
              <p className="font-semibold text-xl text-black">
                Need English Medium(Cambridge) Tutor for A Level(AS) Student-3
                Days/Week
              </p>
              <Flex className="gap-x-4 mt-2 mb-8">
                <h4 className="font-semibold text-base text-gray">
                  <span className="text-lg text-primary">Job ID :</span> 40680
                </h4>
                <h4 className="font-semibold text-base text-gray">
                  {" "}
                  <span className="text-lg text-primary">
                    Posted Date :
                  </span>{" "}
                  Sep 18, 2024
                </h4>
              </Flex>
              <Grid className="grid-cols-1 lg:grid-cols-2 gap-6">
                <div className="flex gap-x-2">
                  <Flex className="size-12 justify-center items-center bg-primary rounded-lg">
                    <FaPuzzlePiece className="text-3xl text-white" />
                  </Flex>
                  <div className="font-nunito">
                    <h4 className=" font-semibold text-base text-black">
                      Tuition Type
                    </h4>
                    <p className="text-sm text-gray">Home Tutoring</p>
                  </div>
                </div>
                <div className="flex gap-x-2">
                  <Flex className="size-12 justify-center items-center bg-primary rounded-lg">
                    <FaDollarSign className="text-3xl text-white" />
                  </Flex>
                  <div className="font-nunito">
                    <h4 className=" font-semibold text-base text-black">
                      Salary
                    </h4>
                    <p className="text-sm text-gray">
                      4000 - 5000{" "}
                      <span className="text-primary">/per month BD</span>
                    </p>
                  </div>
                </div>
                <div className="flex gap-x-2">
                  <Flex className="size-12 justify-center items-center bg-primary rounded-lg">
                    <FaBook className="text-3xl text-white" />
                  </Flex>
                  <div className="font-nunito">
                    <h4 className=" font-semibold text-base text-black">
                      Subject
                    </h4>
                    <p className="text-sm text-gray">
                      <span className="text-primary">Subject : </span> English,
                      Math, Science
                    </p>
                  </div>
                </div>
                <div className="flex gap-x-2">
                  <Flex className="size-12 justify-center items-center bg-primary rounded-lg">
                    <FaUsers className="text-3xl text-white" />
                  </Flex>
                  <div className="font-nunito">
                    <h4 className=" font-semibold text-base text-black">
                      Tutor Preferred
                    </h4>
                    <p className="text-sm text-gray">Anyone</p>
                  </div>
                </div>
              </Grid>
              <Flex className="items-center justify-between mt-12">
                <div className="flex gap-x-2">
                  <Flex className="size-12 justify-center items-center bg-primary rounded-lg">
                    <MdLocationOn className="text-3xl text-white" />
                  </Flex>
                  <div className="font-nunito">
                    <h4 className=" font-semibold text-base text-black">
                      Location
                    </h4>
                    <p className="text-sm text-gray">
                      Thakurgaon sadar, Thakurgaon
                    </p>
                  </div>
                </div>
                <a
                  href="/tutordetails"
                  className="text-sm text-white px-6 py-3 rounded-lg bg-primary rounded"
                >
                  Details
                </a>
              </Flex>
            </div>
          </Grid>
        </div>
      </Container>
    </>
  );
};

export default JobBoard;
