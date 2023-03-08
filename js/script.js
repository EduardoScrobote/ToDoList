document.addEventListener('DOMContentLoaded', () => {
    const tasks = document.getElementById('tarefs')
    const getButton = document.getElementById('btnAdd')
    const iptTask = document.getElementById('inputTaref')

    const saveTask = () => {
        const tasksUl = document.getElementById('tarefs')
        const tasksHtml = tasksUl.innerHTML
        localStorage.setItem('tarefs', tasksHtml)
    };
    const keyPress = () => {
        iptTask.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') {
            getButton.click()
    }})
    };
keyPress()
    const button = () => {
        getButton.addEventListener('click', () => {
            if (iptTask.value !== ''){
            tasks.innerHTML += `<li>${iptTask.value} <button type='button' class='delBtn'>Delete</button> </li>`
            saveTask()
        iptTask.value = ''
    } else {console.log('error')}
})
    };
    button()
    const buttonDelet = () => {
        tasks.addEventListener('click', (e) => {
            if (e.target.classList.contains('delBtn')) {
                const li = e.target.parentNode
                li.parentNode.removeChild(li)
            }
            saveTask()
        })
    };
    buttonDelet()
    window.addEventListener('load', () => {
        const load = localStorage.getItem('tarefs')
        tasks.innerHTML += `${load}`
    })
});