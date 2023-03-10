const helloWorldBox = document.getElementById('hello-world')
const postsBox = document.getElementById('posts-box')
const spinnerBox = document.getElementById('spinner-box')

helloWorldBox.innerHTML = 'hello <b>world</b>'

$.ajax({
    type: 'GET',
    url: '/hello-world/',
    success: function(response) {
        console.log('response', response.text),
        helloWorldBox.textContent = response.text
    },
    error: function(error) {
        console.log('error', error)
    }
})

$.ajax({
    type: 'GET',
    url: '/data/',
    success: function(response) {
        console.log('response', response)
        const data = response.page_obj
        spinnerBox.classList.add('not-visible')
        console.log(data)
        data.forEach(el => {
            postsBox.innerHTML += `
                ${el.title} - <b>${el.body}</b><br>
            `
        });
    },
    error: function(response) {
        console.log('error', error)
    }
})