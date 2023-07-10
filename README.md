# Planets facts

![alt screenshot of the program](/public/images/screenshot.jpg "Program screenshot")

## Table of contents

- [Overview](#overview)
  - [How to Run It?](#how-to-run-it)
  - [What is this?](#what-is-this)
  - [The challenge](#the-challenge)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)



## Overview

## How to run it?

Download or clone the repository, open a terminal and navigate to the project's folder

Run this command in the terminal:
```
npm install
```

After the installation is done run 
```
npx json-server --watch <PATH TO FOLDER>/planet-facts/src/API/db.json --port 3003
```

**ATTENTION:** You should substitute the ```<PATH TO FOLDER>``` part of the command above with the path to the folder where you saved the project.

With the server running open a new terminal, navigate to the project's folder and run:
```
npm start
```

Open your browser and follow this link: [http://localhost:3000](http://localhost:3000)

### What is this?

This is a project to complete the MVP required for the second sprint (advanced front-end) of the PUC-Rio university grad school for software development.

### The challenge

Users should be able to:

- View the optimal layout for the app depending on their device's screen size
- See hover states for all interactive elements on the page
- View each planet page and toggle between "Overview", "Internal Structure", and "Surface Geology"
- See no refresh on any page


### Links

- Figma File: [FIGMA](https://www.figma.com/file/T9Te6zgmZso49aQddxr2Qv/planets-fact-site?type=design&node-id=0%3A1&mode=design&t=OeiESYt3x9T173GM-1)


## My process

### Built with

- [React](https://reactjs.org/) - JS library
- Route hooks
- Semantic HTML5 markup
- CSS custom properties
- Flexbox

### What I learned

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

![alt screenshot of program's desktop version](/public/images/sreenshot-desktop.jpg "Desktop screenshot")


![alt screenshot of program's tablet version](/public/images/screenshot-tablet.jpg "Tablet screenshot")


![alt screenshot of program's phone version](/public/images/sreenshot-phone.jpg "Phone screenshot")


### Continued development

Improve semantics of HTML, maybe break down Components into more parts so they are not as big as they are now.

