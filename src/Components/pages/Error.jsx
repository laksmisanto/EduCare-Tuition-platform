import Container from "../Container";

const Error = () => {
  return (
    <>
      <Container>
        <div className="w-full h-screen flex justify-center items-center">
          <div className="text-center font-nunito">
            <h1 className="text-4xl font-extrabold text-primary">404 </h1>
            <h2 className="text-2xl font-bold text-black">Not Found</h2>
            <p className="text-base text-gray">
              The page you are looking for is not found
            </p>
            <a
              href="/"
              className="text-base text-white bg-primary px-4 py-2 rounded-lg mt-4 inline-block hover:bg-opacity-80 transition-all duration-75 ease-linear"
            >
              Back to Home
            </a>
          </div>
        </div>
      </Container>
    </>
  );
};

export default Error;
