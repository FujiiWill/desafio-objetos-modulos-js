import * as orderService from "./services/order-service.js";
import Order from "./models/order.js";

const o1 = new Order(1034, 150.00, 20);
const total1 = orderService.total(o1);
console.log(`Pedido código ${o1.code}`);
console.log(`Valor total: R$ ${total1.toFixed(2)}`);

const o2 = new Order(2282, 800.00, 10.0);
const total2 = orderService.total(o2);
console.log(`Pedido código ${o2.code}`);
console.log(`Valor total: R$ ${total2.toFixed(2)}`);

const o3 = new Order(1309, 95.90, 0.0);
const total3 = orderService.total(o3);
console.log(`Pedido código ${o3.code}`);
console.log(`Valor total: R$ ${total3.toFixed(2)}`);

