import { Cliente } from './Cliente.js';
import { cuentaCorriente } from './CuentaCorriente.js';

const cliente = new Cliente();
cliente.nombreCliente = "Andres";
cliente.IdCliente = "1234567890";
cliente.rutCliente = "2039-98";


const cuentaDeAndres = new cuentaCorriente ();

cuentaDeAndres.numeroCuenta = "1";
cuentaDeAndres.Agencia ="001";
cuentaDeAndres.cliente = cliente;



const cliente2 = new Cliente();
cliente2.nombreCliente = "Maria";
cliente2.IdCliente = "0987654321";
cliente2.rutCliente = "2030-09";


const cuentaDeMaria = new cuentaCorriente ();

cuentaDeMaria.numeroCuenta = "2";
cuentaDeMaria.Agencia ="002";
cuentaDeMaria.cliente = cliente;

cuentaDeAndres.Deposito(5000);

let Saldo = cuentaDeAndres.VerSaldo ();


console.log('el saldo actaul es (Andres): '+Saldo)

cuentaDeAndres.Transferencia(3000,cuentaDeMaria)


const saldoMaria = cuentaDeMaria.VerSaldo();

console .log ("saldo cuenta es (maria): "+saldoMaria)

const saldoAndres = cuentaDeAndres.VerSaldo()

console.log ("saldo cuenta es (Andres): "+ saldoAndres)










