import { Route, Routes } from "react-router-dom";
import Welcome from "./Pages/IndexPage/welcome.jsx";
import Home from "./Pages/Home/home.jsx";
import CampYabbHouse from "./Pages/CampYabbHouse/campYabbHouse.jsx";
import ChantierHouse from "./Pages/ChantierHouse/chantierHouse.jsx";
import GarRouteHouse from "./Pages/GarerouteHouse/garRouteHouse.jsx";
import VillageHouse from "./Pages/VillageHouse/villageHouse.jsx";
import "@fortawesome/fontawesome-free/css/all.min.css";
import HouseDetails from "./Pages/HouseDetails/houseDetails.jsx";
import SignUp from "./Pages/Register/signup.jsx";
import SignIn from "./Pages/Register/signin.jsx";
import HouseAppDetails from "./Pages/HouseDetails/houseAppDetails.jsx";

function App() {
  return (
    // <div className=" bg-[rgba(4,12,28,1)] border-transparent
    //  min-w-[240px]  h-screen w-screen
    //  ">

    <div
      className=" bg-[rgba(4,12,28,1)] border-transparent 
     min-w-[240px]  
     "
    >
       <Routes>
        <Route path="/" element={<Welcome />} />
        <Route path="/sign-up" element={<SignUp />} />
        <Route path="/sign-in" element={<SignIn />} />
        <Route path="/home" element={<Home />} />
        <Route path="/campYabbassi" element={<CampYabbHouse />} />
        <Route path="/chantier" element={<ChantierHouse />} />
        <Route path="/gareRoutier" element={<GarRouteHouse />} />
        <Route path="/village" element={<VillageHouse />} />
        <Route path="/houseDetails/:houseId" element={<HouseDetails />} />
        <Route path="/houseAppDetails" element={<HouseAppDetails />} />

        {/* <Route path="*" element={<NotFound />} /> Catch-all route for 404 */}
      </Routes>
    </div>
  );
}

export default App;
