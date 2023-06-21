var Pedro = 0, Juana = 0, empleado, costo;

const $select = document.querySelector("#select-products");
const $input = document.querySelector('#numbers');
const $avatarEmployee = document.querySelector('#avatar');
const $winner = document.querySelector('#winner-name')
const $loser = document.querySelector('#loser-name')
const $highSales = document.querySelector('#winner-sales')
const $lowSales = document.querySelector('#loser-sales')

const opcionCambiada = () => {
    const indice = $select.selectedIndex;
};
$select.addEventListener("change", opcionCambiada);

const juanaFunction = () => {
    const value = $select.selectedIndex;
    const quantity = $input.value;
    if (value == 0) {
        costo = 200;
    }
    else if (value == 1){
        costo = 180;
    }
    else if (value == 2){
        costo = 160;
    }
    else{
        costo = 150;
    }
    let total = costo * quantity;
    Juana += total;
    console.log('Ventas Juana: ',Juana);
}

const pedroFunction = () => {
    const value = $select.selectedIndex;
    const quantity = $input.value;
    if (value == 0) {
        costo = 200;
    }
    else if (value == 1){
        costo = 180;
    }
    else if (value == 2){
        costo = 160;
    }
    else{
        costo = 150;
    }
    let total = costo * quantity;
    Pedro += total;
    console.log('Ventas Pedro: ', Pedro);
}

const winner = () => {
    if (Juana > Pedro){
        empleado = 'Juana';
        $avatarEmployee.src='https://img.freepik.com/vector-premium/vector-caracteres-icono-cara-feliz-avatar-mujer-sonriente-3d_313242-1220.jpg';
        $winner.innerHTML = 'Juana';
        $loser.innerHTML = 'Pedro';
        $highSales.innerHTML = Juana + "usd";
        $lowSales.innerHTML = Pedro + "usd";
    }
    else if(Pedro > Juana){
        empleado = 'Pedro';
        $avatarEmployee.src='https://static.vecteezy.com/system/resources/previews/010/967/316/non_2x/avatar-bearded-man-free-vector.jpg';
        $winner.innerHTML = 'Pedro';
        $loser.innerHTML = 'Juana';
        $highSales.innerHTML = Pedro + "usd";
        $lowSales.innerHTML = Juana + "usd";
    }
    else{
        empleado = 'empate'
        $winner.innerHTML = empleado;
        $loser.innerHTML = empleado;
        $highSales.innerHTML = empleado;
        $lowSales.innerHTML = empleado;
    }
    console.log('Empleado del mes: ', empleado);
}

document.addEventListener("DOMContentLoaded", () => {
    document.querySelector("#Juana").addEventListener("click",juanaFunction);
    document.querySelector("#Pedro").addEventListener("click",pedroFunction);
    document.querySelector('#start-show-results').addEventListener("click",winner);
});