var inputBox = document.getElementById('input-box')
var container = document.getElementById('container')
var btn = document.getElementById('btn')

btn.addEventListener('click',function(){
    if(inputBox.value === ""){
        alert('Please write your task')
    }else{
        var li = document.createElement('li')
        li.innerHTML = inputBox.value
        container.appendChild(li)
        var span = document.createElement('span')
        span.classList.add('ri-close-line')
        li.appendChild(span)
    }
    inputBox.value = ""
    savedata()
})

container.addEventListener('click',function(e){
    if(e.target.tagName === "SPAN"){
        e.target.parentElement.remove();
        savedata()
    }
})

function savedata(){
    localStorage.setItem('data',container.innerHTML )
}
function showdata(){
    container.innerHTML = localStorage.getItem('data')
}
showdata()