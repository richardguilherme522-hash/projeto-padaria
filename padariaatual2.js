const cardapio=[
    { id:1,produto:"Pão francês",Preço:0.50, categoria:"pães",Estoque:100},
    {id:2,produto:"Café",preço:3.00,categoria:"Bebidas",estoque:50},
    { id:3,produto:"Bolo de Chocolate",preço:15.00,categoria:"Doçe",estoque:19},
    { id:4,produto:"Suco de laranja",preço:8.00,categoria:"Bebida",estoque:40},
    { id:5,produto:"Refrigerante",preço:7.00,categoria:"Bebida",estoque:26}
];




let proximaid=6; //para continuar IDs
let vendas=[];//para guardar as vendas


//Mudei, antes pra cada produto eu criava um objeto e eum metodo, mas agora em uma função crio os padrões e anexo os produtos a eles
function mostrarProduto(produto){
   console.log(`Produto ${produto.id}`);
   console.log(`Nome: ${produto.produto}`);
   console.log(`Categoria: ${produto.categoria}`);
   console.log(`Preço: R$ ${produto.preço.tofixed(2)}`);
   console.log(`Estoque: ${produto.estoque} unidades`);
   console.log(`Valo em estoque: R$ ${(produto.preço * produto.estoque).tofixed(2)}`);
}
//mostrar todos os produtos 
 function mostrarCardapio(){
   console.log("Cardapio da Padaria");
   console.log("=".repeat(40));
   
   for(let i=0;i<cardapio.length;i++){
      mostrarProduto(cardapio[i]);
      console.log("-".repeat(40));

   }

   console.log(`Total: ${cardapio.length} produtos cadastrados`)
 }

//buscar produto
 function buscarproduto(id){
   for(let i=onabort;i<cardapio.length;i++){
 if(cardapio[i].id===id){
   return cardapio[i]
 } 
   }
   console.log(`Produto com ID ${id} não encontrado`);
   return null;
 }
//Divisão de categorias por tipo e produto
 function CategoriadeProduto(){
   console.log(`Analisando produto ${produto.produto}`);

   if(produto.categoria==="Pães"){
      console.log("Categoria: Pães");
      console.log("Venda: Alta movimentação (alta rotatividade)");
      console.log("Verificar materias em estoque");

   }else if(produto.categoria==="Bebidas"){
      console.log("Categoria: Bebidas");
      console.log("Venda: Consumo médio");
      console.log(" Manter refrigeradas");

   }else if(produto.categoria=== "Doces"){
      console.log("Categoria: Doces");
      console.log("Venda: produto especial");
      console.log("Verificar validade")
   }else if(produto.categoria==="Salgado"){
      console.log("Categoria:Salgado");
      console.log("Consumo rápido");
      console.log("Produzir fresco");
   }else{
      console.log("Categoria: Outros");
      console.log("Produto diverso");
      console.log("Monitorar vendas");
   }

 }
 // Ainda pensando em como fazer o desconto automatico do estoque por cliente que compra
 function venderproduto(idproduto,quantidade,nomeCliente="Cliente"){
const produto=buscarproduto(idproduto);

if(!produto){
   console.log("Venda não realizada: Produto não encontrado");
}
if(quantidade>produto.estoque){
   console.log(`Estoque insulficiente, temos apenas ${produto.estoque} unidades`)
}
 }
 