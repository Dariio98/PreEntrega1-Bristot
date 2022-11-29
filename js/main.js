// Simulador rotiseria
// función para elegir producto

const comprarComida = () => {
    let comida = '';
    let cantidad = 0;
    let cantidadTotal = 0;
    let precio = 0;
    let totalCompra = 0;
    let seguirComprando = false;

    do {
        comida = prompt('¿Qué deseas encargar? \n pizza: $1500 \n empanadas (solo por docena): $800 \n milanesa $1200?');
        cantidad = parseInt(prompt('¿Cuántas deseas comprar?'));

        switch (comida) {
            case 'pizza':
                precio = 1500                
                break;
            case 'empanadas':
                precio = 800                
                break;
            case 'milanesa':
                precio = 1200                
                break;
        
            default:
                alert('Usted no ingreso el nombre del producto correctamente');
                precio = 0;
                break;
        }

        totalCompra += precio * cantidad


        seguirComprando = confirm('¿Deseas comprar algo más?')
        cantidadTotal = cantidadTotal + cantidad
    } while (seguirComprando );
    console.log(cantidadTotal);
    const precioPromo = promo(cantidadTotal,totalCompra);
    coordinarEntrega(precioPromo);
}

// función de promoción
const promo = (cantidadTotal, totalCompra) => {
    let precioPromo 

    if (cantidadTotal >= 2) {
        precioPromo = ((90* totalCompra) / 100);
        alert('El precio de su compra con descuento es de: $'+precioPromo);
        return precioPromo;
    } else {
        alert('El precio de su compra es de: $'+totalCompra);
        return totalCompra;
    }
}

// funcion para entrega del producto
const coordinarEntrega = (precioPromo) => {
    let entrega = '';
    let precioEntrega = 0;
    let precioFinal = 0;
    let finalizarCompra = false;

    do {
        entrega = parseInt(prompt('Cómo deseas coordinar la entrega? \n Ingresa el numero correspondiente segun tu respuesta \n 1) Retirar en el local \n 2) Comer en nuestro local: $200 \n 3) Delivery: $500'));

        switch (entrega) {
            case 1:
                precioEntrega = 0;
                alert('Su pedido estara listo para retirar en 45 minutos');
                break;
            case 2:
                precioEntrega = 200;
                alert('Lo esperamos en nuestro local para disfrutar de nuestra comida :) \n Le recordamos que deberá abonar $200 extra a su compra')
                break;
            case 3:
                precioEntrega = 500;
                alert('Gracias por elegir nuestro servicio de delivery. Nuestro repartidor le llevará el pedido lo antes posible. \n Le recordamos que deberá abonar $500 extra a su compra')
                break;
        
            default:
                precioEntrega = 0;
                alert('Vuelva a ingresar el número correctamente');
                break;
        }
        finalizarCompra = confirm('¿Deseas volver a seleccionar la entrega?')
    } while(finalizarCompra)

    precioFinal = precioPromo + precioEntrega;
    alert('El precio final de su compra es de: $'+precioFinal)
}

comprarComida();