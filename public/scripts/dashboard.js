//Variables Globales
const editName = document.getElementById('editProductName')
const editPrice = document.getElementById('editProductPrice')
const editDescription = document.getElementById('editProductDescription')
const editImage = document.getElementById('editProductImage')
const message = document.querySelector("#message")
let selectedProduct;



let products = []

fetch('http://localhost:3000/api/product').then(async(data)=>{
    const productsList = document.getElementById('list-products')
    products = await data.json()

    products.forEach((product) => {
    productsList.innerHTML += `
    <li>
    <img src="${product.image}" alt="">
    ${product.name} - Precio: ${product.price}
  <button class="edit-btn" onclick="openEditModal('${product._id}')">Editar</button>
  <button class="delete-btn" onclick="openDeleteModal('${product._id}')">Borrar</button>
    </li>    
    `
 
})
})






const createProduct = () =>{

    const nombre = document.getElementById('productName')
    const price = document.getElementById('productPrice')
    const description = document.getElementById('productDescription')
    const image = document.getElementById('productImage')

    fetch('http://localhost:3000/api/product', {

        method: 'POST',
        body:JSON.stringify({
            name: nombre.value,
            price: price.value,
            description: description.value,
            image: image.value
        }),
        headers:{
            "Content-Type": "application/json",
        }
    }).then(()=>{
       
        alert('Producto creado')
        

    }).catch(() =>{
       
    alert('Error al crear el producto')
    })

}

function openEditModal(productId) {
    selectedProduct = products.find((pr)=> pr._id===productId)
    document.getElementById('editProductModal').style.display = 'block';
    editName.value = selectedProduct.name;
    editPrice.value = selectedProduct.price;
    editDescription.value = selectedProduct.description;
    editImage.value = selectedProduct.image;


    }

    function updateProduct(){        

            fetch('http://localhost:3000/api/product', {
            method: 'PUT',
            body:JSON.stringify({
                name: editName.value,
                price: editPrice.value,
                image: editImage.value,
                description: editDescription.value,
                productId: selectedProduct._id
            }),
            headers:{
                "Content-Type": "application/json",
            }

            
        }).then(()=>{
            alert('Producto actualizado')
           
           // contenidoDialogo.textContent = "Producto actualizado!!!!"
           
        }). catch((error)=>{
            console.log(error)
            alert('Error al actualizar el producto')
        })
                      

    }


    function openDeleteModal(productId) {
        selectedProduct = products.find((pr)=> pr._id===productId)
        document.getElementById('deleteModal').style.display = 'block';
        }


// Función para confirmar la eliminación
function confirmDelete() {
    fetch('http://localhost:3000/api/product', {
            method: 'DELETE',
            body:JSON.stringify({
                productId: selectedProduct._id
            }),
            headers:{
                "Content-Type": "application/json",
            }       

            
        }).then(()=>{
           alert('Producto eliminado')
            
           
            
            
        }). catch((error)=>{
            console.log(error)
            alert('Error al eliminar el producto')
           
        })
                      
    window.location.reload()
    closeDeleteModal();
    }

 // Función para cerrar el modal de eliminación
 function closeDeleteModal() {
    document.getElementById('deleteModal').style.display = 'none';
    }

    function productDeleted() {
        document.getElementById('productDeleted').style.display = 'blok';
        }
