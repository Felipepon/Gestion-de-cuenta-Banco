class Cliente {
    nombreCliente;
    IdCliente;
    
    
}

class cuentaCorriente {

    Agencia;
    numeroCuenta;
    #Saldo;

    

    constructor (){
        this.#Saldo = 0
        this.Agencia = '';
        this.numeroCuenta = '';
    }

    Deposito(valor){

        if (valor > 0)
            this.#Saldo += valor;; 
        return this.#Saldo;
    }

    Retiro(valor){
        
        if (valor <= this.#Saldo)

            this.#Saldo -= valor;
        return this.#Saldo;
       
    }

    VerSaldo (){
        
        return this.#Saldo;
    }

}



const cuentaDeAndres = new cuentaCorriente ();

let Saldo = cuentaDeAndres.VerSaldo ();

console.log('el saldo actaul es: '+Saldo)

Saldo = cuentaDeAndres.Deposito(10000);
console.log('el saldo actaul es: '+Saldo)

Saldo = cuentaDeAndres.Retiro(5000);
console.log('el saldo actaul es: '+Saldo)






