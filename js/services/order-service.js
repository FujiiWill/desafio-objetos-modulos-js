import * as shippingService from "./shipping-service.js";


export function total(order){

    const ship = shippingService.shipment(order);
    const disc = order.basic * (order.discount/100.0);

    return order.basic - disc + ship;
}