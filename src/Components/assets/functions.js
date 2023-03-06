import {useLocation} from 'react-router-dom'

// Custom Hook to extract path name from useLocation()
export const usePathname = () =>{
    const location = useLocation();
    return location.pathname;
    
}


// function to extract planet name string from URL
export function getPlanetFromURL(string){
    const path = string.split("/")
    const targetPlanet = path[1]
    return targetPlanet
}

// function to get path after /"planet name"
export function endPoint(string) {
    const path = string.split("/");
    let endPoint;
    return path.length > 2  ? endPoint = path[2] : false;
    
}



