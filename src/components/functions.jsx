import { useNavigate } from "react-router-dom";
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


 