const lista = document.querySelectorAll('ul li');
let index = 0;

function show(indexSun){
    index = index + indexSun;
    index = Math.min(Math.max(index,0), lista.length - 1)
    lista[index].scrollIntoView({behavior:"smooth"})
}