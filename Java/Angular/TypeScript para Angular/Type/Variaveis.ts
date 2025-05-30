/**
 * variaveis
 */

//tipos primitivos: boolean, number, string
let ligado: boolean = false;
let nome: string = "Paulo";
let idade: number = 19;
let altura: number = 1.86;

// tipos especiais null, undefined
let nulo: null = null;
let indefinido: undefined = undefined;

//tipos abrangentes: any, void
let retorno: void;
let retornoView: any = false;

//objeto - sem previsibilidade
let produto: object = {
  name: "Joao",
  cidade: "GO",
  idade: 19,
};

//objeto tipado - com previsibilidade
type ProdutoLoja = {
  nome: string;
  preco: number;
  unidades: number;

};

let meuProduto: ProdutoLoja = {
  nome: "Tênis",
  preco: 89.99,
  unidades: 5,
};

/* ARRAYS */

let dados: string[] = ["felipe", "ana", "adriana"];
let dados2: Array<string> = ["felipe", "ana", "adriana"];

let infos: (string | number)[] = [322, "felipe"];

/* TUPLAS */
let boleto: [string, number, number] = ["agua conta", 199.9, 32342342];

/* arrays métodos (são os mesmos do Javascript) */
dados.pop();

/**
 * Datas
 */
let aniversario: Date = new Date("2022-12-01 05:00");
console.log(aniversario.toString());