let container = document.querySelector('.container');
let button = document.querySelector('.button');

    for (i = 0; i < 256 ; i++){
        let square = document.createElement('div');
        container.appendChild(square);
        square.addEventListener('mouseover' , ()=>{
            square.style.cssText = "background-color: black;"
        });
    }