//window.onload is shorthand for 
window.addEventListener("load", ()=>{
    //document.body is the selector to retrieve the body html element
    //within the quotation mark, the event being listened for is added
    //firefox by default does not have size, determined by the nature of the browser
    // function "e" detects information of the event, can be used to grab mouseX and mouseY information
    document.body.addEventListener("click", (e)=>{
        console.log(e)
        console.log('document.body was clicked')
        // console.log(e.clientX + "" + e.clientY)
        // give the results as values
        console.log(`${e.clientX},${e.clientY}`)
    })

    //using ids are good for javascript
    //interaction, using an id is best practice
    
    let textDiv = document.getElementById('text')
    // key presses need to be on the document itself
    document.addEventListener('keydown',(e)=>{
        console.log('key pressed！')
        console.log(e.key)

        //adding typed key to the div on the page
        textDiv.textContent += e.key

        //when typing space, can be changed to any other key
        if(e.key == ' '){
            textDiv.textContent += '!'
        }
    })
})