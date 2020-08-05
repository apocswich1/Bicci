const DeliveryStatus = (status) => {

    switch (status) {
        case -4: return '--- ---'; break;
        case -3: return 'Usuario no esta o ya no quiere el pedido'; break;
        case -2: return 'Driver no pudo entregar el pedido'; break;
        case -1: return 'Cancelado por el restaurant'; break;
        case 1:  return 'Creado'; break;
        case 2:  return 'Aceptado por el restaurant'; break;
        case 3:  return 'Preparando pedido'; break;
        case 4:  return 'Driver asignado y en camino al restaurant'; break;
        case 5:  return 'Driver llego al restaurant'; break;
        case 6:  return 'Driver tiene pedido y va a tu casa'; break;
        case 7:  return 'Driver llego a tu casa'; break;
        case 8:  return 'Driver entrego el pedido'; break;
        case 9:  return 'Finalizado'; break;
        default: return status
    }

}

export default DeliveryStatus;