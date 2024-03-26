import { Cliente } from "./Cliente.js";

export class cuentaCorriente {

    #cliente;
    Agencia;
    numeroCuenta;
    #Saldo;
    static cantidadCuentas= 0;
    
    set cliente (valor ){
        if( valor instanceof Cliente)
        this.#cliente = valor;

    }
    get cliente(){
        return this.#cliente;
    }

    

    constructor (Agencia,numeroCuenta,cliente){
        this.cliente = cliente;
        this.#Saldo = 0;
        this.Agencia = Agencia;
        this.numeroCuenta = numeroCuenta;
        cuentaCorriente.cantidadCuentas++;
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

    Transferencia (valor, cuentaDestino){
        this.Retiro(valor);
        cuentaDestino.Deposito(valor)

    



    }

}


