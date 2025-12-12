const cardapio=[
    { id:1,produto:"Pão francês",preco:0.50, categoria:"pao",estoque:100},
    {id:2,produto:"Café",preco:3.00,categoria:"bebida",estoque:50},
    { id:3,produto:"Bolo de Chocolate",preco:15.00,categoria:"doce",estoque:19},
    { id:4,produto:"Suco de laranja",preco:8.00,categoria:"bebida",estoque:40},
    { id:5,produto:"Refrigerante",preco:7.00,categoria:"bebida",estoque:26}
];




let proximaid=6; //para continuar IDs
let vendas=[];//para guardar as vendas


//Mudei, antes pra cada produto eu criava um objeto e eum metodo, mas agora em uma função crio os padrões e anexo os produtos a eles
function mostrarProduto(produto){
   console.log(`Produto ${produto.id}`);
   console.log(`Nome: ${produto.produto}`);
   console.log(`Categoria: ${produto.categoria}`);
   console.log(`Preço: R$ ${produto.preco.toFixed(2)}`);
   console.log(`Estoque: ${produto.estoque} unidades`);
   console.log(`Valo em estoque: R$ ${(produto.preco * produto.estoque).toFixed(2)}`);
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
   for(let i=0;i<cardapio.length;i++){
 if(cardapio[i].id===id){
   return cardapio[i];
 } 
   }
   console.log(`Produto com ID ${id} não encontrado`);
   return null;
 }
//Divisão de categorias por tipo e produto
 function CategoriadeProduto(){
   if (!produto) return;

   console.log(`Analisando produto ${produto.produto}`);

   if(produto.categoria==="pao"){
      console.log("Categoria: Pães");
      console.log("Venda: Alta movimentação (alta rotatividade)");
      console.log("Verificar materias em estoque");

   }else if(produto.categoria==="bebidas"){
      console.log("Categoria: Bebidas");
      console.log("Venda: Consumo médio");
      console.log(" Manter refrigeradas");

   }else if(produto.categoria=== "doce"){
      console.log("Categoria: Doces");
      console.log("Venda: produto especial");
      console.log("Verificar validade")
   }else{
      console.log("categoria: Outra");
   }

 }
 // Ainda pensando em como fazer o desconto automatico pro meio do cliente que efeetuar uma compra
 function venderproduto(idproduto,quantidade,nomeCliente="Cliente"){
const produto=buscarproduto(idproduto);

if(!produto){
   console.log("Venda não realizada: produto não foi encontrado");
}
if(quantidade>produto.estoque){
   console.log(`Estoque insulficiente, temos apenas ${produto.estoque} unidades`);
   return;
}

produto.estoque-=quantidade;
 }
 