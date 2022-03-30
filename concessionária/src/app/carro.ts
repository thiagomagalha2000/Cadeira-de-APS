import { Time } from "@angular/common";

/*
export class Genre {
  id: number;
  nomeDoGenero: string;
}

export class ProductionCompanies {
  id: number;
  logo_path: string;
  name: string;
  origin_country: string;
}

export class ProductionCountries {
  iso_3166_1: string;
  name: string;
}

export class SpokenLanguages {
  iso_639_1: string;
  name: string;
}

export class Carro{
  adult: boolean;
  backdrop_path: string;
  belongs_to_collection: object;
  budget: number;
  genres: Array<Genre>;
  homepage: string;
  id: number;
  imdb_id: string;
  original_language: string;
  original_title: string;
  overview: string;
  popularity: number;
  poster_path: string;
  production_companies: Array<ProductionCompanies>;
  production_countries: Array<ProductionCountries>;
  release_date: string;
  revenue: number;
  runtime: number;
  spoken_languages: Array<SpokenLanguages>;
  status: string;
  tagline: string;
  title: string;
  video: boolean;
  vote_average: number;
  vote_count: number; 
}
*/
export class Carro{
  id: number;
  placa: string;
  cor: string;
  fabricante: string;
  gasolina: string;
  quilometragem: number;
  chassi: String;
  valor: number;
  marca: String;
  modelo: String;
  imagem: String;
  ano: number;
}

export class Fabricante{
  id: number;
  nome: String;
  cnpj: String;
}

export class Cliente{
  id: number;
  cpf: number;
  endereco: String;
  telefone: number;
  email: String;
  cartao: number;
  parcelas: number;
}

export class Venda{
  id: number;
	data_venda: Date;
	hora_venda: Time;
	valor_venda: number;
	cartao: number;
	parcelas: String;
}