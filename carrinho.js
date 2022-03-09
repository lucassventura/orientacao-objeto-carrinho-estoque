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
        this.valorTotal = this.itensCarrinho.reduce((total, produto) => total += produto.preco, 0);
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

carrinho.calculaPrecoPromocional();
console.log(carrinho)
console.log(carrinho.verificarDisponibilidade());
