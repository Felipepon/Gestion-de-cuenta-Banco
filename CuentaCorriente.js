export class cuentaCorriente {

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


