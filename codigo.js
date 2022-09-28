//Nahu envios
alert("Bienvenidos a nahueCuotas")
let usuario = prompt("Ingresa tu nombre");
let apellido = prompt("Ingresa tu apellido");
let uniendoNombres = alert("Bienvenido señor/a " + usuario + " " + apellido);
let palabraClave = "riquelme";
let humano = false;
let contador= 0

//Condicion
while (humano== false && contador <=3){
    let ingreso= prompt("ingresa la palabra clave sin los guiones r-i-q-u-e-lme para saber que no eres un robot");
    if (ingreso === palabraClave) {
        alert("Correcto");
        humano=true;
        mostrarOpciones();
        break}
    else(ingreso!= palabraClave); 
    { 
        contador++;
        alert ("Reintente")}
    }
    alert("Hasta luego");

    
//Swicht 
function mostrarOpciones(){
    let monto = parseInt(prompt("Ingrese el monto del prestamo que desea"))
    let ahora12 = monto*1.35;
    let ahora24 = monto*2.5;
    let ahora36 = monto*3.8;
    let ahora48 = monto*5;
    let cuota12 = parseInt(ahora12/42);
    let cuota24 = parseInt(ahora24/24);
    let cuota36 = parseInt(ahora36/36);
    let cuota48 = parseInt(ahora48/48);
    let cuotas = prompt(
        "Ingresa una opcion \n 1-12 cuotas \n 2-24 cuotas \n 3-36 cuotas \n 4-48 cuotas"
    );
    switch (cuotas) {
        case "1":
            console.log("Seleccionaste 12 cuotas, usted eligio la suma de $" + monto +" \n Su precio final sera de $" +ahora12+" y las cuotas seran de $" + cuota12);
    
            break;
        case "2":
            console.log("Seleccionaste 24 cuotas, usted eligio la suma de $" + monto +" \n Su precio final sera de $" +ahora24+" y las cuotas seran de $" + cuota24);
    
            break;
        case "3":
            console.log("Seleccionaste 36 cuotas, usted eligio la suma de $" + monto +" \n Su precio final sera de $" +ahora36+" y las cuotas seran de $" + cuota36);
    
            break;
        case "4":
            console.log("Seleccionaste 48 cuotas,usted eligio la suma de $" + monto +" \n Su precio final sera de $" +ahora48+" y las cuotas seran de $" + cuota48);
            break;
        default:
            console.log("Reintente por favor")
            break;
    }

}

