import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
})
  
export class CarroServiceSetadoDoJava{

    constructor(private httpClient: HttpClient){}

    ngOnInit(){}

    public buscarcarrosDoJava(){
        return this.httpClient.get('http://localhost:8080/carros');
    }

    public buscarDetalheDocarroJava(id: number){
        return this.httpClient.get('http://localhost:8080/carro/'+id);
    }

    public pesquisarPeloNomeDocarroJava(nomeDocarro: string){
        return this.httpClient.get('http://localhost:8080/carro?nomeDocarro='+nomeDocarro);
    }
    
    public salvarcarro(arquivo:any){
        return this.httpClient.post('http://localhost:8080/cadastrarCarro',arquivo,{
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            }
        });
    }

    public deletarcarro(id:number){
        return this.httpClient.delete('http://localhost:8080/deletarCarro/'+id);
    }

    public atualizarcarro(arquivo:any){
        return this.httpClient.put('http://localhost:8080/atualizarCarro',arquivo,{
            headers:{
                'Accept': 'application/json',
                'Content-Type': 'application/json'                
            }
        });
    }
}