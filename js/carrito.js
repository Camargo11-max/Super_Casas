/**
 * 1. Agregar el Htmal Y CSS para las tarjetas o cards (imagen, titulo, card de boostrap)
 * 2. Agregar al boton de cada card un evento Onclick, metodo decir el id de seleccion, en el metodo guaradar informacion en el localstorage
 * 3. Cunado se agrge el item del carrito mostrar la cantidad de item que agrega el usuario.
 * 4. mostrar la totalidad de productos, o deaplegar el listado con un boton de ver carrito o finalizar compra, redireccionar el el icono del carrito,
 *  mostrar los productos agregados por el usuario, imagen,titulo, precio ,cantidad.
 */
let carrito = localStorage.getItem('listaCarrito') || [];
function agregarProducto(identificador){
 carrito.push(identificador)   
 localStorage.setItem('listaCarrito', carrito);
 actualizarContadorProductos();
}

function actualizarContadorProductos(){
    const cartCount = document.getElementById ('count-car');
    cartCount.textContent = carrito.length;
} 

/*const productlist = document.getElementById('product-list');

const fetchPromise = fetch(
    "./json/info-page.json",
    );

fetchPromise
.then((response) => {
    if (!response.ok) {
        throw new Error (`HTTP error: ${response.status}`);
    }
    return response.json();
})

.then((data) => {
console.log(data);
data.forEach((product) => {
    const listItem = document.createElement("li");
    listItem.textContent = `Nombre ${product.name}, Precio ${product.price}, imagen ${product.image}, tipo ${product.type}`;
    productlist.appendChild(listItem);  

});
})

.catch((error) => {
console.error (`Error al obtener los productos: ${error}`);

const errorMesage = document.createElement('p');
errorMesage.textContent = 'No se pudo obtener la informacion de los productos.';
productlist.appendChild(errorMesage);
}); */