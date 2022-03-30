import { Carro } from './carro';
import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
})

export class trocandoJson{
    carros: Carro[];
    carro: Carro;

    constructor(){}

    ngOnInit(){}

    mudarArquivoJsonDoBackParaOFront (arquivo: any): any{
        var jsonString = JSON.stringify(arquivo);
        
        jsonString = jsonString.replace("\"id\":", "\"id\":");
        jsonString = jsonString.replace("\"placa\":", "\"placa\":");
        jsonString = jsonString.replace("\"cor\":", "\"cor\":");
        jsonString = jsonString.replace("\"fabricante\":", "\"fabricante\":");
        jsonString = jsonString.replace("\"quilometragem\":", "\"quilometragem\":");
        jsonString = jsonString.replace("\"gasolina\":", "\"gasolina\":");
        jsonString = jsonString.replace("\"chassi\":", "\"chassi\":");
        jsonString = jsonString.replace("\"marcar\":", "\"marca\":");
        jsonString = jsonString.replace("\"modelo\":", "\"modelo\":");
        jsonString = jsonString.replace("\"imagem\":", "\"imagem\":");
        jsonString = jsonString.replace("\"ano\":", "\"ano\":");
        jsonString = jsonString.replace("\"nome\":", "\"nome\":");
        jsonString = jsonString.replace("\"cnpj\":", "\"cnpj\":");
        jsonString = jsonString.replace("\"cpf\":", "\"cpf\":");
        jsonString = jsonString.replace("\"endereco\":", "\"endereco\":");
        jsonString = jsonString.replace("\"telefone\":", "\"telefone\":");
        jsonString = jsonString.replace("\"email\":", "\"email\":");
        jsonString = jsonString.replace("\"cartao\":", "\"cartao\":");
        jsonString = jsonString.replace("\"parcelas\":", "\"parcelas\":");
        var jsonAtualizado = JSON.parse(jsonString);
        
        return jsonAtualizado;
    }
    mudarArquivoJsonDoFrontParaOBack (arquivo: any): any{
        var jsonAtualizado = JSON.stringify(arquivo);

        jsonAtualizado = jsonAtualizado.replace("\"id\":", "\"id\":");
        jsonAtualizado = jsonAtualizado.replace("\"placa\":", "\"placa\":");
        jsonAtualizado = jsonAtualizado.replace("\"cor\":", "\"cor\":");
        jsonAtualizado = jsonAtualizado.replace("\"fabricante\":", "\"fabricante\":");
        jsonAtualizado = jsonAtualizado.replace("\"quilometragem\":", "\"quilometragem\":");
        jsonAtualizado = jsonAtualizado.replace("\"chassi\":", "\"chassi\":");
        jsonAtualizado = jsonAtualizado.replace("\"marca\":", "\"marcar\":");
        jsonAtualizado = jsonAtualizado.replace("\"modelo\":", "\"modelo\":");
        jsonAtualizado = jsonAtualizado.replace("\"imagem\":", "\"imagem\":");
        jsonAtualizado = jsonAtualizado.replace("\"ano\":", "\"ano\":");
        jsonAtualizado = jsonAtualizado.replace("\"nome\":", "\"nome\":");
        jsonAtualizado = jsonAtualizado.replace("\"cnpj\":", "\"cnpj\":");
        jsonAtualizado = jsonAtualizado.replace("\"cpf\":", "\"cpf\":");
        jsonAtualizado = jsonAtualizado.replace("\"endereco\":", "\"endereco\":");
        jsonAtualizado = jsonAtualizado.replace("\"telefone\":", "\"telefone\":");
        jsonAtualizado = jsonAtualizado.replace("\"email\":", "\"email\":");
        jsonAtualizado = jsonAtualizado.replace("\"cartao\":", "\"cartao\":");
        jsonAtualizado = jsonAtualizado.replace("\"parcelas\":", "\"parcelas\":");
        jsonAtualizado = jsonAtualizado.replace("[{","{");
        jsonAtualizado = jsonAtualizado.replace("}]","}");

        return jsonAtualizado;
    }
}