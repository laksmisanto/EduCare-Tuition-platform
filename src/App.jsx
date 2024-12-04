import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router";
import RootLayout from "./Components/layout/RootLayout";
import Home from "./Components/pages/Home";
import Error from "./Components/pages/Error";
import Login from "./Components/pages/Login";
import SignUp from "./Components/pages/SignUp";
import TermAndCondition from "./Components/pages/TermAndCondition";
import About from "./Components/pages/About";
import Contact from "./Components/pages/Contact";
import JobBoard from "./Components/pages/JobBoard";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route>
      <Route element={<RootLayout />}>
        <Route index path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/termscondition" element={<TermAndCondition />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/jobsboard" element={<JobBoard />} />
      </Route>
      <Route path="*" element={<Error />} />
    </Route>
  )
);
function App() {
  return <RouterProvider router={router} />;
}

export default App;
