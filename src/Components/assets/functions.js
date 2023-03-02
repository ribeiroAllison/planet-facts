import {useLocation} from 'react-router-dom'

export const usePathname = () =>{
    const location = useLocation();
    return location.pathname;
    
}



export function eraseDash(string){
const split = string.split("/")
const targetPlanet = split[1]
let wordArray=[];
return targetPlanet
}

const string = "/mercury/structure";
const splitTest = string.split("/");
console.log(splitTest)
