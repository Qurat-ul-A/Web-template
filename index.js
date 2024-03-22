menuBar=document.querySelector('.burger')
aside=document.querySelector('.aside')

menuBar.addEventListener('click',function(){
    aside.classList.toggle('aside')
})