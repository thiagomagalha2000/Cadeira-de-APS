import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
})
  
export class VendaServiceSetadoDoJava{

    constructor(private httpClient: HttpClient){}

    ngOnInit(){}

    public buscarVendasDoJava(){
        return this.httpClient.get('http://localhost:8080/vendas');
    }

    public salvarVenda(arquivo:any){
        return this.httpClient.post('http://localhost:8080/cadastrarVenda',arquivo,{
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            }
        });
    }

    public buscarDetalheDoVendaJava(id: number){
        return this.httpClient.get('http://localhost:8080/venda/'+id);
    }
        
    
    public deletarVenda(id:number){
        return this.httpClient.delete('http://localhost:8080/deletarVenda/'+id);
    }
    
    public atualizarVenda(arquivo:any){
        return this.httpClient.put('http://localhost:8080/atualizarVenda/',arquivo,{
            headers:{
                'Accept': 'application/json',
                'Content-Type': 'application/json'                
            }
        });
    }
}