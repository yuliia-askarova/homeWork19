const oddIndexes = [];
const evenIndexes = [];

const buttons = document.querySelectorAll('.btn');
const arr = [...buttons];

function pressBtn (btn){
    return new Promise (resolve => {
       btn.addEventListener('click', function(){
        btn.classList.add('button-active')
        btn.disabled = true;
        resolve(btn.id)
       })
    })}

const buttonPromises = arr.map(element => {
    if(element.id%2){
        oddIndexes.push(pressBtn(element))
    } else {
        evenIndexes.push(pressBtn(element))
    }
    return pressBtn(element)
})
console.log(buttonPromises);

Promise.all(buttonPromises) 
.then(res => {
    alert('All buttons were pressed')
})

Promise.all(oddIndexes)
.then(res => {
    alert('Odd buttons were pressed')
})

Promise.all(evenIndexes)
.then(res => {
    alert('Even buttons were pressed')
})

console.log(oddIndexes);
console.log(evenIndexes);



