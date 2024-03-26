import { Cliente } from './Cliente.js';
import { cuentaCorriente } from './CuentaCorriente.js';

const cliente = new Cliente("Andres", "1234567890", "2039-98" );
const cliente2 = new Cliente("Maria", "0987654321", "2030-09");


const cuentaDeAndres = new cuentaCorriente ("001","1",cliente, );

const cuentaDeMaria = new cuentaCorriente ("002","2", cliente2);

console.log( cuentaDeMaria.cliente)
console.log( cuentaDeAndres.cliente)
console.log(cuentaCorriente.cantidadCuentas)


/*
let Saldo = cuentaDeAndres.VerSaldo ();


console.log('el saldo actaul es (Andres): '+Saldo)

cuentaDeAndres.Transferencia(3000,cuentaDeMaria)


const saldoMaria = cuentaDeMaria.VerSaldo();

console .log ("saldo cuenta es (maria): "+saldoMaria)

const saldoAndres = cuentaDeAndres.VerSaldo()

console.log ("saldo cuenta es (Andres): "+ saldoAndres)

*/








