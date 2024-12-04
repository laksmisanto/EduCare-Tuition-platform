import Container from "./Container";
import Grid from "./Grid";
import logo from "../assets/images/logo.png";
import Button from "./Button";

const MenuBar = () => {
  const MenuData = [
    {
      name: "Home",
      link: "/",
    },
    {
      name: "About Us",
      link: "/about",
    },
    {
      name: "Jobs Board",
      link: "/jobsboard",
    },
    {
      name: "Contact Us",
      link: "/contact",
    },
    {
      name: "Sign In",
      link: "/login",
    },
  ];
  return (
    <>
      <div className="w-full bg-white">
        <Container>
          <Grid className="py-2 w-full grid-cols-1 lg:grid-cols-2 items-center">
            <a href="/" className="block">
              <img src={logo} alt="logo" className="w-24 h-auto object-cover" />
            </a>

            <div>
              <ul className="font-nunito flex justify-end gap-x-8 items-center">
                {MenuData.map((item, index) => (
                  <li key={index}>
                    <a
                      href={item.link}
                      className="font-semibold text-base text-black hover:text-primary transition-all delay-75 ease-linear"
                    >
                      {item.name}
                    </a>
                  </li>
                ))}
                <li>
                  <Button>
                    <a href="/signup">Become A Tutor</a>
                  </Button>
                </li>
              </ul>
            </div>
          </Grid>
        </Container>
      </div>
    </>
  );
};

export default MenuBar;
