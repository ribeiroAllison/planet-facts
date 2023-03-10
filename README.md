# Planets facts

![alt screenshot of the program](/src/Components/assets/screenshot.jpg "Program screenshot")

## Table of contents

- [Overview](#overview)
  - [What is this?](#what-is-this)
  - [The challenge](#the-challenge)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)



## Overview

### What is this?

This is a project to exercise the concept of React Router post V6. 

It is a web app that allows you to see some interesting information about all of the 8 planets in our solar system.

### The challenge

Users should be able to:

- View the optimal layout for the app depending on their device's screen size
- See hover states for all interactive elements on the page
- View each planet page and toggle between "Overview", "Internal Structure", and "Surface Geology"
- See no refresh on any page


### Links

- Finished project URL: [https://planet-facts-ribeiroallison.vercel.app/](https://planet-facts-ribeiroallison.vercel.app/)


## My process

### Built with

- [React](https://reactjs.org/) - JS library
- Route hooks
- Semantic HTML5 markup
- CSS custom properties
- Flexbox

### What I learned

- I had never touched `React Router V6` before this project, therefore I had to study its documentation before engaging in this endeavor.

- I've learned some cool ways to use JSX and path Hooks to make a `single component render lots of different information.`


#### Some code I'm pride of

`This hover effect turned out to be really beautiful!!`

```css
planet-card:hover{
    border: 1px var(--lightBlue) solid;
    box-shadow:
    0 0 6px 3px var(--lightBlue);  /* inner white */
    
    transition: 1s;
    
}

.planet-card img:hover{
    width: 220px;
    height: 220px;
    transition: 1s;
}
```


`This was my first custom Hook in React!!`

```js
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
```

`One Component that renders pretty much everything using URL path name!`

```js
  const path = usePathname();
    const targetPlanet = eraseSlash(path)
    const planet = data[targetPlanet]
    const endPointPath = endPoint(path)
    const endPointString = endPointPath ? "-" + endPointPath : "";

    function findContent () {
        if(endPointPath === "geology") {
            return planet.geology.content
        } else if(endPointPath === "structure"){
            return planet.structure.content
        } else {
            return planet.overview.content
        }
    }

```

`By far the most complex media query I've ever written, having complete adaptions to phone, tablet and desktop`

![alt screenshot of program's desktop version](/src/Components/assets/sreenshot-desktop.jpg "Desktop screenshot")
![alt screenshot of program's tablet version](/src/Components/assets/screenshot-tablet.jpg "Tablet screenshot")
![alt screenshot of program's phone version](/src/Components/assets/sreenshot-phone.jpg "Phone screenshot")


### Continued development

Improve semantics of HTML, maybe break down Components into more parts so they are not as big as they are now.

