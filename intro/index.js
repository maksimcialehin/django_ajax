console.log('hello wordl')

const testEL = document.getElementById('test-el')

testEL.textContent = 'bye bye'

testEL.addEventListener('click', ()=>{
    console.log('clicked')
    testEL.innerHTML = '<b>clicked</b>'
})

testEL.addEventListener('mouseover', ()=>{
    console.log('on')
})

testEL.addEventListener('mouseout', ()=>{
    console.log('off')
})

document.addEventListener('scroll', ()=>{
    const positionY = window.scrollY
    console.log(positionY)
})


// get the data with AJAX
const url = 'https://swapi.dev/api/people'

// 1 jquery AJAX method
$.ajax({
    type: 'GET',
    url: url,
    success: function(response){
        console.log('jquery ajax', response)
    },
    error: function(error){
        console.log(error)
    }
})

// 2 XMLHttpRequest
const req = new XMLHttpRequest()

req.addEventListener('readystatechange', ()=>{
    if(req.readyState==4){
        console.log('xhttp', JSON.parse(req.responseText))
    }
})

req.open('GET', url)
req.send()

// 3 fetch method

fetch(url)
.then(resp=> resp.json()).then(data=> console.log('fetch', data))
.catch(error=> console.log(error))