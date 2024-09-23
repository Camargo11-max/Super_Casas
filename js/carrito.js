
const productlist = document.getElementById('product-list');

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
    listItem.textContent = `Nombre ${product.name}, Precio ${product.price}`;
    productlist.appendChild(listItem);  

});
})

.catch((error) => {
console.error (`Error al obtener los productos: ${error}`);

const errorMesage = document.createElement('p');
errorMesage.textContent = 'No se pudo obtener la informacion de los productos.';
productlist.appendChild(errorMesage);
});


/*let carrito = localStorage.getItem('listaCarrito') || [];
function agregarProducto(identificador){
 carrito.push(identificador)   
 localStorage.setItem('listaCarrito', carrito);
 actualizarContadorProductos();
}

function actualizarContadorProductos(){
    const cartCount = document.getElementById ('count-car');
    cartCount.textContent = carrito.length;
} */
