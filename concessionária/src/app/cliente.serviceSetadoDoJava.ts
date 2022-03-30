import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@   Injectable({
    providedIn: 'root'
})
  
export class ClienteServiceSetadoDoJava{

    constructor(private httpClient: HttpClient){}

    ngOnInit(){}

    public buscarClientesDoJava(){
        return this.httpClient.get('http://localhost:8080/clientes');
    }

    public buscarDetalheDoClienteJava(id: number){
        return this.httpClient.get('http://localhost:8080/cliente/'+id);
    }
        
    public salvarCliente(arquivo:any){
        console.log(arquivo);
        return this.httpClient.post('http://localhost:8080/cadastrarCliente',arquivo,{
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            }
        });
    }
    
    public deletarCliente(id:number){
        return this.httpClient.delete('http://localhost:8080/deletarCliente/'+id);
    }
    
    public atualizarCliente(arquivo:any){
        return this.httpClient.put('http://localhost:8080/atualizarCliente',arquivo,{
            headers:{
                'Accept': 'application/json',
                'Content-Type': 'application/json'                
            }
        });
    }
}