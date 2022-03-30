import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
})
  
export class FabricanteServiceSetadoDoJava{

    constructor(private httpClient: HttpClient){}

    ngOnInit(){}

    public buscarFabricantesDoJava(){
        return this.httpClient.get('http://localhost:8080/fabricante');
    }

    public buscarDetalheDoFabricanteJava(id: number){
        return this.httpClient.get('http://localhost:8080/fabricante/'+id);
    }
    
    public pesquisarPeloNomeDoFabricanteJava(nomeDoFabricante: string){
        return this.httpClient.get('http://localhost:8080/fabricante?nomeDoFabricante='+nomeDoFabricante);
    }
    
    public salvarFabricante(arquivo:any){
        return this.httpClient.post('http://localhost:8080/cadastrarFabricante',arquivo,{
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            }
        });
    }
    
    public deletarFabricante(id:number){
        return this.httpClient.delete('http://localhost:8080/deletarFabricante/'+id);
    }
    
    public atualizarFabricante(arquivo:any){
        return this.httpClient.put('http://localhost:8080/atualizarFabricante',arquivo,{
            headers:{
                'Accept': 'application/json',
                'Content-Type': 'application/json'                
            }
        });
    }
}