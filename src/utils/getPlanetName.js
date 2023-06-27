import { useParams } from "react-router-dom";
import findPlanetData from "./findPlanetData";

    const getPlanetName = (url, array) =>{
        const {planetURL} = useParams();
        return findPlanetData(url, array)
    }

export default getPlanetName;