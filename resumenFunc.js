
//RESUMEN DE LAS FUNCIONES .MAP / .FILTER / .REDUCE
//este resumen está hecho con ayuda del video https://www.youtube.com/watch?v=tP8JiVUiyDo del canal "la cocina del código"
//recomiendo ver el video teniendo este resumen como apoyo.
//---------------------------------------------------------------------------------
//---------------------------------------------------------------------------------
//FUNCION MAP: se usa cuando queremos obtener un nuevo array transformando algunos o todos los elementos del array original
// map siempre dará un nuevo array con la misma cantidad de elementos que el array original.
//---------------------------------------------------------------------------------
//FUNCION FILTER: sirve para obtener un nuevo array, filtrando los elementos del array original que cumplan cierta condicion
//filter devolverá un nuevo array cuya cantidad de elementos puede ser menor o igual a los del array original
//---------------------------------------------------------------------------------
//FUNCION REDUCE: se usa cuando queremos obtener un unico valor a partir de un array
//---------------------------------------------------------------------------------
//---------------------------------------------------------------------------------
//empezaremos creando un array de objetos que nos servirá para probar todas las funciones
//para probar las funciones de ejemplo, descomentar la seccion del ejemplo a imprimir en consola
//para ejecutar en consola usar el comando -----node resumenFunc.js----- en la terminal

const productos = [
    {id:"producto01", tipo: "remeras", cantidad: 50, precio: 700}, 
    {id:"producto02", tipo: "camisas", cantidad: 25, precio: 1000},
    {id:"producto03", tipo: "vestidos", cantidad: 48, precio: 1500},
    {id:"producto04", tipo: "pantalon", cantidad: 39, precio: 1800},
    {id:"producto05", tipo: "medias", cantidad: 100, precio: 250},
    {id:"producto06", tipo: "zapatillas", cantidad: 80, precio: 2000},
    {id:"producto07", tipo: "buzos", cantidad: 70, precio: 2500},
    {id:"producto08", tipo: "camperas", cantidad: 40, precio: 2500},
    {id:"producto09", tipo: "gorras", cantidad: 65, precio: 1300},
    {id:"producto10", tipo: "corbatas", cantidad: 37, precio: 1000},
];
//---------------------------------------------------------------------------------
                        //FUNCION .MAP
//---------------------------------------------------------------------------------
//esta funcion de ejemplo aplica un 10% de descuento en los productos que cuestan mas de 1300
//---------------------------------------------------------------------------------
//const productosConDescuentos= productos.map (function (producto){   
//    if (producto.precio <1300) return producto;           //retorno temprano de los productos que no nos interesan
//    return {
//        ...producto, precio: producto.precio * 0.9        // crea un array de objetos copiados de productos
//    };                                                    // pero pisando el precio de los mas caros con el nuevo precio
//});                                                       // con descuento
//console.log (productosConDescuentos);

//----------------------------------------------------------------------------------
// esta funcion de ejemplo rescata un valor en concreto del array de productos
//----------------------------------------------------------------------------------

//const idProductos = productos.map(function (producto){
//    return producto.id;
//});
//console.log(idProductos);

//----------------------------------------------------------------------------------
// lo cual tambien se puede escribir así
//----------------------------------------------------------------------------------

//const idProductos = productos.map (producto => producto.id); //se cambia "function" por "=>"
//console.log (idProductos);                                   //como hay solo un parametro "producto" podemos suprimir los parentesis
                                                               //al haber solo una orden de return en la funcion .map se puede suprimir
                                                               //convirtiendo return producto.id en solamente producto.id a la derecha de =>

//---------------------------------------------------------------------------------
                        //FUNCION .FILTER
//---------------------------------------------------------------------------------

//const productosBaratos = productos.filter (producto => producto.precio < 1200) //filtra del array de objetos solo los que cuestan 
//console.log(productosBaratos);                                                 //menos de 1200

//---------------------------------------------------------------------------------
        // o también se puede hacer así
//---------------------------------------------------------------------------------

//const esBarato = producto => producto.precio < 1200;   // funcion que define ¿que es barato?
//const productosBaratos = productos.filter (esBarato);  // usamos la funcion filter y como argumento le pasamos la funcion creada
//console.log(productosBaratos);
//podemos hacer justo lo opuesto, es decir filtrar los productos caros usando parte del mismo código

//const esCaro = producto => !esBarato (producto);       //usamos ! para indicar que la funcion esCaro usa
//const productosCaros = productos.filter (esCaro);      //el opuesto de esBarato, es decir, productos que 
//console.log(productosCaros);                           //cuestan mas de 1200
//----------------------------------------------------------------------------------
                        //FUNCION .REDUCE
//----------------------------------------------------------------------------------
//esta funcion de ejemplo suma la cantidad de prendas que tenemos en stock
//----------------------------------------------------------------------------------
 //reduce recibe como parametro un acumulador y un indicador de cada elemento del
 // en este caso PRODUCTO no está declarado dentro del array PRODUCTOS, pero hace referencia
 //a cada objeto dentro del grupo de productos.
 //despues del arrow function (=>) se le indica como es que la funcion va a reducir,
 //en este caso, tomando la cantidad de stock de cada producto y sumandola al acumulador
 //como si fuera un bucle for, tenemos que inicializar el acumulador... el 0 despues de
 //producto.cantidad le indica al acumulador en que numero inicializar
 //podemos no colocar el 0, en este caso la funcion inicializara el acumulador
 //con el calor del primer elemento del array, pero cuidado con esta forma de sintaxis
 //porque puede generar un error si recibe un array vacío

//let stock = productos.reduce((acumulador, producto) => acumulador + producto.cantidad,0);                                                         
//console.log(stock);

//----------------------------------------------------------------------------------
//tambien podemos dividir el .reduce en dos para que quede mas claro y funcionará igualmente
//----------------------------------------------------------------------------------

// const sumaStock = ((acumulador, producto) => acumulador + producto.cantidad);    //en este caso creamos la funcion sumaStock y le asignamos la operación 
// const stock = productos.reduce (sumaStock,0);                                    //luego usamos la función sumaStock como argumento en la función reduce
// console.log(stock);                                                              //y no nos olvidamos de inicializar el contador en 0


//NOTA: hay muchas, muchas, muchisimas otras formas en las que podemos usar las funciones MAP FILTER REDUCE (inclusive podemos usar conbinaciones de estas)
//estos son solo algunos ejemplos para entender como funcionan en sus usos mas comunes.....
//espero que les haya servido, para mi fue un gusto hacer este resumen