import About from "../About/About";
import Applications from "../Applications/Applications";
import Events from "../Events/Events";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import Home from "../Home/Home";
// import Information from "../Information/Information";
import Managers from "../Manager/Managers";
import Notice_bord from "../Notice-bord/Notice_bord";
import Programs from "../Programs/Programs";

function Mainlayout() {
  return (
    <>
      <Header />
      <Home />
      <Managers />
      <About />
      <Programs />
      <Notice_bord />
      <Applications />

      {/* <Events />  */}
      {/* <Information /> */}
      <Footer />
    </>
  );
}
export default Mainlayout;
