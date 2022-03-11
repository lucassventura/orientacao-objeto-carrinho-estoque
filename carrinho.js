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

class Estoque {
    constructor(quantidadeMinimaEstoque, quantidadeMaximaEstoque){
    this.quantidadeMaximaEstoque = quantidadeMaximaEstoque;
    this.quantidadeMinimaEstoque = quantidadeMinimaEstoque;
    this.itensEstoque = {
        eletronicos:[
            {id:1,nome: "Tv" , preco:1200, estoque:80},
            {id:2,nome: "Computadores",  preco:3000, estoque:100},
            {id:3,nome: "Celulares",  preco:800, estoque:54},
            {id:4,nome: "Fones",preco:5,  estoque:41},
            {id:5,nome: "Webcam", preco:50, estoque:36},
            {id:6,nome: "Mouse", preco:3,  estoque:354},
            {id:7,nome: "Tablet",preco:20, estoque:150},
            {id:8,nome: "Mousepads",   preco:2, estoque:1000},
            {id:9,nome: "Headsets",preco:35, estoque:80},
            {id:10,nome: "Impressoras", preco:1, estoque:50},
            {id:11,nome: "No-breaks", preco:14, estoque:36},
            {id:12,nome: "Memória ram", preco:3, estoque:12},
        ],
        materialEscolar:[
            {id:1,nome: "Caderno" , preco:10, estoque:80},
            {id:2,nome: "Estojo",   preco:30, estoque:100},
            {id:3,nome: "Mochila",  preco:70, estoque:54},
            {id:4,nome: "Lapiseira",preco:5,  estoque:32},
            {id:5,nome: "Fichario", preco:50, estoque:20},
            {id:6,nome: "Borracha", preco:3,  estoque:85},
            {id:7,nome: "Lancheira",preco:20, estoque:100},
            {id:8,nome: "Caneta",   preco:2, estoque:1000},
            {id:9,nome: "Cola branca",preco:35, estoque:250},
            {id:10,nome: "Borracha", preco:1, estoque:400},
            {id:11,nome: "Lápis de cor", preco:14, estoque:63},
            {id:12,nome: "Apontador", preco:3, estoque:5},
        ],
        automotivo:[],
        cozinha:[
            {id:1,nome: "Panela" , preco:10, estoque:80},
            {id:2,nome: "Cafeteira",   preco:30, estoque:100},
            {id:3,nome: "Louça",  preco:70, estoque:54},
            {id:4,nome: "Copos",preco:5,  estoque:32},
            {id:5,nome: "Fogão", preco:50, estoque:20},
            {id:6,nome: "Geladeira", preco:1, estoque:400},
            {id:7,nome: "Abridor de garrafa", preco:14, estoque:63},
            {id:8,nome: "Forno elétrico", preco:3, estoque:5},
        ],
        petShop:[
            {id:1,nome: "Tapete Higiênico" , preco:10, estoque:80},
        ],
    }
    }

    // for...of -> te dá o valor da propriedade
    // for..in -> te dá a chave da propriedade

    verificaEstoque(categoria){
        switch (categoria){
        case "eletronicos":
            return this.itensEstoque.eletronicos.filter(produto => produto.estoque <= this.quantidadeMinimaEstoque);
        case "materialEscolar":
            return this.itensEstoque.materialEscolar.filter(produto => produto.estoque <= this.quantidadeMinimaEstoque);
        default: undefined
           let arrayDeArrays = Object.entries(this.itensEstoque)
           
           let outroArray = arrayDeArrays.map(arrayDuplo => {
                let arrayFiltrado = arrayDuplo[1].filter(produto => produto.estoque <= this.quantidadeMinimaEstoque)
                return [arrayDuplo[0], arrayFiltrado];
           }); 

           return Object.fromEntries(outroArray)

        }           
    }
    adicionarItem(item, categoria) {
        
        let retornoDaBusca;
        
        switch (categoria){
        case "eletronicos":
            retornoDaBusca = this.itensEstoque.eletronicos.find(produto => produto.nome === item.nome);
            
            if(retornoDaBusca === undefined){
                this.itensEstoque.eletronicos.push({id: this.itensEstoque.eletronicos.length + 1 ,...item});                
            }else{
                retornoDaBusca.estoque += item.estoque;               
            };
            return true;
        
        case "materialEscolar":
            retornoDaBusca = this.itensEstoque.materialEscolar.find(produto => produto.nome === item.nome);
            
            if(retornoDaBusca === undefined){
                this.itensEstoque.materialEscolar.push({id: this.itensEstoque.materialEscolar.length + 1 ,...item})               
            }else{
                retornoDaBusca.estoque += item.estoque;               
            }
            return true;

        case "automotivo":
            retornoDaBusca = this.itensEstoque.automotivo.find(produto => produto.nome === item.nome);
            
            if(retornoDaBusca === undefined){
                this.itensEstoque.automotivo.push({id: this.itensEstoque.automotivo.length + 1 ,...item});                
            }else{
                retornoDaBusca.estoque += item.estoque;                
            }
            return true;
            
        case "cozinha":
            retornoDaBusca = this.itensEstoque.cozinha.find(produto => produto.nome === item.nome);
            
            if(retornoDaBusca === undefined){
                this.itensEstoque.cozinha.push({id: this.itensEstoque.cozinha.length + 1 ,...item});                
            }else{
                retornoDaBusca.estoque += item.estoque;                
            }
            return true;
            
        case "petShop":   
        retornoDaBusca = this.itensEstoque.petShop.find(produto => produto.nome === item.nome);
            
        if(retornoDaBusca === undefined){
            this.itensEstoque.petShop.push({id: this.itensEstoque.petShop.length + 1 ,...item});                
        }else{
            retornoDaBusca.estoque += item.estoque;               
        }
        return true;
        
        };
    };
}

// Testes - Parte 2

// let estoque = new Estoque (1000, 2000);

// console.log(estoque.verificaEstoque("materialEscolar"))
// console.log(estoque.adicionarItem({nome: 'Agenda', preco: 5, estoque:65}, "materialEscolar"))
// console.log(estoque.verificaEstoque("materialEscolar"))


