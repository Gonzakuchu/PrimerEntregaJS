const comprarProductos = () => {
    let producto = "";
    let precio = 0;
    let cantidad = 0;
    let seguirComprando = false;
    let totalCompra = 0;
    
    do {
        producto = prompt ("¿Qué deseas comprar? ¿un rascador, un juguete o una bolsa de comida para gatos?");
        cantidad = parseInt(prompt ("¿Cuántos quieres comprar?"));

        const cantidadValidada = validarCantidad(cantidad)
        console.log(cantidadValidada)
    
        switch (producto) {
            case 'rascador':
                precio = 3000;
                break;
            case "juguete":
                precio = 450;
                break;
            case "comida":
                precio = 1500;
                break;
            default:
                alert("Alguno de los datos ingresados no es correcto");
                precio= 0;
                cantidad= 0;
        }
        totalCompra += precio*cantidadValidada;

        seguirComprando = confirm("¿Quieres sumar otro producto?");
    } while (seguirComprando);

    const totalConDescuento = calcularDescuento(totalCompra);
    calcularEnvio(totalConDescuento)
};

const validarCantidad = (cantidad) => {
    while (Number.isNaN(cantidad) || cantidad === 0) {
        if (cantidad !== 0) {
            alert('Debes agregar un número.')
        } else {
            alert('Debes agregar un número distinto a cero.')
        }
        cantidad = parseInt(prompt ("¿Cuántos quieres comprar?"));
    }
    return cantidad;
};

const calcularDescuento = (totalCompra) => {
    let totalConDescuento = 0;

    if (totalCompra >= 4000) {
        totalConDescuento = totalCompra * 0.9;
        return totalConDescuento;
    } else {
        return totalCompra;
    }
};

const calcularEnvio = (totalConDescuento) => {

    let tieneEnvioADomicilio = confirm("Querés envío a domicilio?")

    if (tieneEnvioADomicilio && totalConDescuento >= 3500){
        alert("Tienes envio gratis. El total de tu compra es $" + totalConDescuento);
    } else if (tieneEnvioADomicilio && totalConDescuento < 3500 && totalConDescuento !== 0){
        totalConDescuento += 350;
        alert("El envío cuesta $350. El total de la compra es $" + totalConDescuento);
    } else {
        alert("El total de la compra es $" + totalConDescuento);
    }

};

comprarProductos();