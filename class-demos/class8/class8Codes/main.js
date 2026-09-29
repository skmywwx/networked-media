// 
alert('javascript!')
console.log('log this info to the console')

// global variables
let colors = ['#790D16', '#E5D3AF', '#F5EFE1', '#AEC4D4', '#0D1C42', '#22396F']

// arrow function
// for function to run, need the webpage fully loaded using event listener
// tell browser to wait for the HTML files to load before doing any other thing
// window.onload is similar to setup/draw
// all the code should go inside of the window

window.onload = () => {
    console.log('page has loaded')

    //get element by id 
    //retrieves a single JS element using an id
    //to avoid writing over and over again, can be made into a variable
    //document.getElementById('main')
    let mainElement = document.getElementById('main')
    //grabs the text color of the style of the 'main' element
    //highest priority, overwrite styles in CSS
    mainElement.style.color = "white"
    console.log(mainElement)

    //query selector
    //retrieves a single element using the css selector
    //only grabs the first element of each selector, e.g. the first paragraph of 'p'
    let firstParagraph = document.querySelector('p')
    let blueParagraph = document.querySelector('.blue')
    document.querySelector('#main')

    firstParagraph.textContent = 'i have updated the text with javascript'
    blueParagraph.style.backgroundColor = 'navy'

    //query selector for ID works the smae as getElementById
    // loop function to produce multiple spans at the same time 
    let containerDiv = document.querySelector('#blue-div')
    for (let i=0; i < 60; i++){
    //creating an element on a webpage:
    //1. declare what type of element we are creating
    let newSpan = document.createElement('span');
    //2. modify that element/ content
    newSpan.textContent = 'new span';
    newSpan.classList.add('all-spans')
    //generate a random color
    let c = Math.floor(Math.random() * colors.length);
    newSpan.style.backgroundColor = colors[c];
    // newSpan.style.backgroundColor = 'pink'
    //3. add the created element to the page (specific location)
    //anywhere on the bottom of the html: document.body
    //in a specific container: select that element
    containerDiv.appendChild(newSpan)
    }

    //set interval is built-in to js
    //2 parameters: 
    //1. callback
    //2. amount of time in ms
    
    setInterval(()=>{
        console.log('two seconds have passed')
        //two ways to retrive all elements of a class
        //document.getElementByClassName('all-spans')
        let allSpans = document.querySelectorAll('.all-spans')
        console.log(allSpans)
        //shorthand for (let s = 0; s < allSpans.length; s++)
        // what is the transform function supposed to do? 
        for(let s of allSpans){
            // console.log(s.style.transform)
            // ` (backlick) is above tab and next to 1
            s.style.transform =  `rotate(${rotation}deg)`
            // s.style.transform = 'rotate(" + roration + deg")";"
            rotation++
            console.log(s.style.transform)
        }
    }, 2000);
    //other ways to write: 
    // setInterval(function(){}, 2000)
    // setInterval(intervalFunction, 2000)

}

// helper function go after window.onload{}
function intervalFunction (){}

// four javascript selectors; use document from the DOM
// objects use curly brackets