const body = document.querySelector('body')
const darkBtn = document.getElementById('dark-btn')
const lightBtn = document.getElementById('light-btn')

const modelocal = localStorage.getItem('mode')
if(modelocal){
    body.classList.add('dark-mode')
    darkBtn.classList.toggle('hidden')
    lightBtn.classList.toggle('hidden')
}



const modeBtn = ()=>{
    darkBtn.classList.toggle('hidden')
    lightBtn.classList.toggle('hidden')
    body.classList.toggle('dark-mode')
}
darkBtn.addEventListener('click', ()=>{
    modeBtn()
    localStorage.setItem('mode', 'dark-mode')
})
lightBtn.addEventListener('click', ()=>{
    modeBtn()
    localStorage.setItem('mode', '')
})