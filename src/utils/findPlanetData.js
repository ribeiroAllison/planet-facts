const findPlanetData = (planetName, planetsArray) =>{
    return planetsArray.find(planet => planet.name.toLowerCase() === planetName.toLowerCase());
  }


export default findPlanetData;