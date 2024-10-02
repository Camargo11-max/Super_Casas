/**
 * 1. Agregar el Htmal Y CSS para las tarjetas o cards (imagen, titulo, card de boostrap)
 * 2. Agregar al boton de cada card un evento Onclick, metodo decir el id de seleccion, en el metodo guaradar informacion en el localstorage
 * --> 3. Cunado se agrege el item del carrito mostrar la cantidad de item que agrega el usuario.
 * --> 4. mostrar la totalidad de productos, o deaplegar el listado con un boton de ver carrito o finalizar compra, redireccionar al icono del carrito,
 *  mostrar los productos agregados por el usuario, imagen, titulo, precio ,cantidad.
 */



let carrito = JSON.parse(localStorage.getItem('listaCarrito')) || [];
function agregarProducto(producto){
    const existeProducto = carrito.find((item) => item.id == producto) 
        
    if (existeProducto){
        existeProducto.cantidad += 1
    } else {
        carrito.push({id:producto, cantidad:1})
    }

   localStorage.setItem('listaCarrito',JSON.stringify(carrito));
   actualizarContadorProductos();
   alert ('Vas a renovar tu ' +  producto)
}

function actualizarContadorProductos(){
    const cartCount = document.getElementById ('count-car');
    cartCount.textContent = carrito.length;
}

function toggleListado(){
    const divListado = document.getElementById('listadoCart');
    const listadoVisible = divListado.style.display === 'block';
    console.log(listadoVisible, 'listadoVisible')
    if (listadoVisible) {
        divListado.style.display = 'none';
    } else {
        mostrarItemsCarrito();
        divListado.style.display ='block'
    }   
}

function mostrarItemsCarrito (){
const divListado = document.getElementById('listadoCart');
if(carrito.length === 0){
    divListado.innerHTML = 'No tienes nada para renovar';
    return;
}

divListado.innerHTML = '';

const ul = document.createElement('ul');

carrito.forEach(producto => {
   const li = document.createElement ('li');
   li.textContent = producto.cantidad + producto.id;
   console.log(producto)
   ul.appendChild(li) 
});

divListado.appendChild(ul)
}

window.addEventListener('beforeunload', () => {
  localStorage.clear();
})

actualizarContadorProductos ();

