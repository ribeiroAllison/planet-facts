import {useLocation} from 'react-router-dom'

export const usePathname = () =>{
    const location = useLocation();
    return location.pathname;
}



export function eraseDash(string){
let wordArray=[];
for (let letter of string){
    if(letter !== "/"){
        wordArray.push(letter)
    }
    
}
return wordArray.join("");
}