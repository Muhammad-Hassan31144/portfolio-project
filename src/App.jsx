/* eslint-disable no-unused-vars */
import { BrowserRouter } from "react-router-dom";
import {
  Contact,
  Experience,
  Feedbacks,
  Hero,
  Navbar,
  Footer,
  Tech,
} from "./components";
const App = () => {
  return (
    <BrowserRouter>
      <div className="relative z-0 bg-primary overflow-x-hidden">
        <Navbar />
        <div className="bg-hero-pattern bg-cover bg-no-repeat bg-center">
          <Hero />
        </div>
        <Tech />
        <Experience />
        <Feedbacks />
        <div className="relative z-0">
          <Contact />
          <Footer />
        </div>
      </div>
    </BrowserRouter>
  );
};
export default App;
