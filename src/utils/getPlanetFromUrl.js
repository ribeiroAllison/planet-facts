// function to extract planet name string from URL

function getPlanetFromURL(string){
    const path = string.split("/")
    const targetPlanet = path[1]
    return targetPlanet
}

export default getPlanetFromURL