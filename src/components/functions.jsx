import { useNavigate } from "react-router-dom";
import tenantImage from "../assets/tenantImage.png";
import tenantImage2 from "../assets/tenantImage2.png";
import tenantImage3 from "../assets/tenantImage3.png";
import tenantImage4 from "../assets/tenantImage4.png";

const tenantsNamesVillage = [
  ["App1", "Mr Guenebe Louis"],
  ["App2", "Mr Hamadou"],
  ["App3", "Mr aksodh"],
  ["App4", "MrXYZAS"],
];

  const tenantDetailsVillage = [
  [
    [tenantImage],
    [
      ["1", "Mr Guenebe Louis", "200000xaf", "23-06-2020"],
      ["1", "200,000XAF", "1Y  5M  16D", "600,000XAF", "3 months unpaid"],
    ],
  ],
  [
    [tenantImage2],
    [
      ["2", "Mr Hamadou", "200000xaf", "23-06-2022"],
      ["2", "200,000XAF", "1Y  2M  19D", "200,000XAF", "1 month unpaid"],
    ],
  ],
  [
    [tenantImage3],
    [
      ["3", "Mr aksodh", "200000xaf", "13-12-2018"],
      ["3", "180,000XAF", "3Y  2M  29D", "2,160,000XAF", "12 months unpaid"],
    ],
  ],
  [
    [tenantImage4],
    [
      ["4", "Mr Xyzas", "200000xaf", "20-08-2022"],
      ["1", "200,000XAF", "2Y  1M  16D", "0XAF", "0 months unpaid"],
    ],
  ],
];
export {tenantDetailsVillage,tenantsNamesVillage}

const AllFunctions = () => {
   
  const navigate = useNavigate();

  const handleNaviagtiontoHomePage = () => {
    navigate("/home") }
    const handleNaviagtiontoHouse = (name) => {
      const houseName= `/${name}`
      navigate(houseName) }
    return{ 
        handleNaviagtiontoHomePage,
        handleNaviagtiontoHouse
    }
    
    
  };
export default AllFunctions;


 