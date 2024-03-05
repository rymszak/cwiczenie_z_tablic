const add=document.getElementById(`add`)
const tab=[]
add.addEventListener('click', function(evt){
    evt.preventDefault()
    const name=document.querySelector('#name')
    const age=document.getElementById('age')
    const city=document.getElementById('city')
    const dane={
        imie: name.value,
        wiek: age.value,
        miasto: city.value
    }
    tab.push(dane)
    console.log(tab)
})
const see=document.getElementById(see)
see.addEventListener('click', function(ev){
    ev.preventDefault()
    const adult=document.getElementById('adult')
    const ice=document.getElementById('ice').checked
    const Name_E=document.getElementById('eric').checked
    const display=document.getElementById('dis')
    if(adult.checked){
    tab.forEach(element => {
        display.innerHTML+= element+"<br>"
    });
    }
})