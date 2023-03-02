import {useLocation} from 'react-router-dom'


export const usePathname = () =>{
    const location = useLocation();
    return location.pathname;
    
}

export function eraseSlash(string){
    const path = string.split("/")
    const targetPlanet = path[1]
    return targetPlanet
}

export function endPoint(string) {
    const path = string.split("/");
    let endPoint;
    return path.length > 2  ? endPoint = path[2] : false;
    
}



