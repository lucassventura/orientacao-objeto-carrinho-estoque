// Parte 1

class Carrinho {
    constructor (qtdProdutos, valorTotal){
        this.itensCarrinho = [
            {nome: "Caderno" , preco: 10, disponivel: true },
            {nome: "Estojo", preco: 30 , disponivel: false },
            {nome: "Mochila", preco: 70 , disponivel: true },
            {nome: "Lapiseira", preco: 5 , disponivel: true },
            {nome: "Fichario", preco: 50 , disponivel: true },
            {nome: "Borracha", preco: 3 , disponivel: false },
            {nome: "Lancheira", preco: 20 , disponivel: true },
        ];
        this.qtdProdutos = qtdProdutos;
        this.valorTotal = valorTotal;
        this.valorFrete = 50;
    };

    calculaPrecoPromocional(){
        let disponiveis = this.itensCarrinho.filter(produto => produto.disponivel === true);       
        this.valorTotal = disponiveis.reduce((total, produto) => total += produto.preco, 0);
        this.qtdProdutos = disponiveis.length
        if(this.valorTotal >= 150) { 
            this.valorFrete = 0; 
        };       
    };
    verificarDisponibilidade(){
        return this.itensCarrinho.filter(produto => produto.disponivel === false);
    };   
};

let carrinho = new Carrinho;

// Testes - Parte 1

// carrinho.calculaPrecoPromocional();
// console.log(carrinho)
// console.log(carrinho.verificarDisponibilidade());

// Parte 2

// class Estoque {
//     constructor(quantidadeMinimaEstoque, quantidadeMaximaEstoque){
//     this.quantidadeMaximaEstoque = quantidadeMaximaEstoque;
//     this.quantidadeMinimaEstoque = quantidadeMinimaEstoque;
//     this.itensEstoque = {
//         eletronicos:[
//             {id:1,nome: "Tv" , preco:1200, estoque:80},
//             {id:2,nome: "Computadores",  preco:3000, estoque:100},
//             {id:3,nome: "Celulares",  preco:800, estoque:54},
//             {id:4,nome: "Fones",preco:5,  estoque:41},
//             {id:5,nome: "Webcam", preco:50, estoque:36},
//             {id:6,nome: "Mouse", preco:3,  estoque:354},
//             {id:7,nome: "Tablet",preco:20, estoque:150},
//             {id:8,nome: "Mousepads",   preco:2, estoque:1000},
//             {id:9,nome: "Headsets",preco:35, estoque:80},
//             {id:10,nome: "Impressoras", preco:1, estoque:50},
//             {id:12,nome: "No-breaks", preco:14, estoque:36},
//             {id:13,nome: "Memória ram", preco:3, estoque:12},
//         ],
//         materialEscolar:[
//             {id:1,nome: "Caderno" , preco:10, estoque:80},
//             {id:2,nome: "Estojo",   preco:30, estoque:100},
//             {id:3,nome: "Mochila",  preco:70, estoque:54},
//             {id:4,nome: "Lapiseira",preco:5,  estoque:32},
//             {id:5,nome: "Fichario", preco:50, estoque:20},
//             {id:6,nome: "Borracha", preco:3,  estoque:85},
//             {id:7,nome: "Lancheira",preco:20, estoque:100},
//             {id:8,nome: "Caneta",   preco:2, estoque:1000},
//             {id:9,nome: "Cola branca",preco:35, estoque:250},
//             {id:10,nome: "Borracha", preco:1, estoque:400},
//             {id:11,nome: "Lápis de cor", preco:14, estoque:63},
//             {id:12,nome: "Apontador", preco:3, estoque:5},
//         ],
//         automotivo:[],
//         cozinha:[
//             {id:1,nome: "Panela" , preco:10, estoque:80},
//             {id:2,nome: "Cafeteira",   preco:30, estoque:100},
//             {id:3,nome: "Louça",  preco:70, estoque:54},
//             {id:4,nome: "Copos",preco:5,  estoque:32},
//             {id:5,nome: "Fogão", preco:50, estoque:20},
//             {id:6,nome: "Geladeira", preco:1, estoque:400},
//             {id:7,nome: "Abridor de garrafa", preco:14, estoque:63},
//             {id:8,nome: "Forno elétrico", preco:3, estoque:5},
//         ],
//         petShop:[
//             {id:1,nome: "Tapete Higiênico" , preco:10, estoque:80},
//         ],
//     }
//     }

    // for...of -> te dá o valor da propriedade
    // for..in -> te dá a chave da propriedade

//     verificaEstoque(categoria){
//         switch (categoria){
//         case "eletronicos":
//             return this.itensEstoque.eletronicos.filter(produto => produto.estoque <= this.quantidadeMinimaEstoque);
//         case "materialEscolar":
//             return this.itensEstoque.materialEscolar.filter(produto => produto.estoque <= this.quantidadeMinimaEstoque);
//         default:

           
//     }    
//     // adicionarItem(){};
//     // removerItem(){};
//     // pesquisarItem(){};
//     // atualizarEstoque(){};
//     };
// }

// let estoque = new Estoque;
// estoque.verificaEstoque(30,90)
// console.log(estoque)