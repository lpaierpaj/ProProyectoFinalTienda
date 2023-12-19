
function removeProduct(userId, productId){

//console.log(userId)
//console.log(productId)
fetch('http://localhost:3000/api/cart', {

        method: 'DELETE',
        body:JSON.stringify({
            userId: userId,
            productId: productId
        }),
        headers:{
            "Content-Type": "application/json",
        }
    }).then(()=>{
       
        alert('Producto eliminado del carrito')
        window.location.reload()

        

    }).catch(() =>{
       
    alert('Error al crear el producto')
    })



}