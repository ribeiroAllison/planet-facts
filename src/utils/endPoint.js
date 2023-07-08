// function to get path after /"planet name"
export function endPoint(string) {
    const path = string.split("/");
    let endPoint;
    return path.length > 2  ? endPoint = path[2] : false;
}