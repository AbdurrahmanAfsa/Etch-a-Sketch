let container = document.querySelector('.container');

for (i = 0; i < 256 ; i++){
    let square = document.createElement('div');
    container.appendChild(square);
    square.addEventListener('mouseover' , ()=>{
        square.style.cssText = "background-color: black;"
    });
}