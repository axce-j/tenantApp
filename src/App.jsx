import { Route, Routes } from "react-router-dom";
import Welcome from "./Pages/welcome.jsx"
import Home from "./Pages/home.jsx"
import CampYabbHouse from "./Pages/campYabbHouse.jsx" 
import ChantierHouse from "./Pages/chantierHouse.jsx"
import GarRouteHouse from "./Pages/garRouteHouse.jsx"
import VillageHouse from "./Pages/villageHouse.jsx"
function App() {
  return (
    <div className=" bg-[rgba(4,12,28,1)] border-transparent  min-w-[240px]  h-screen w-screen">

<Routes>
      <Route path="/"  element={<Welcome/>} />
      <Route path="/home"  element={<Home/>}  />
      <Route path="/campYabbassi" element={<CampYabbHouse/>} />
      <Route path="/chantier"element={<ChantierHouse/>} /> 
      <Route path="/gareRoutier" element={<GarRouteHouse/>} />
      <Route path="/village" element={<VillageHouse/>} />
      <Route path="error"/>
    </Routes>
    </div>
    
  );
}

export default App;
