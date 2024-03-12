   
    function calcular()
    {
       
        let valor = document.getElementById("valor").value;
        let cotacao = document.getElementById("cotacao").value;
        var msg = document.getElementsByClassName("erro");
        
        let total = 0;
       
        var erro = false;

     
        if(valor === "")
        {
            erro = true;
            msg[0].innerHTML = "preencha o valor";
        }
        else
        {
            msg[0].innerHTML = "";
        }

        if(cotacao === "")
        {
            erro = true;
            msg[1].innerHTML = "preencha o valor da cotação";
            
        }
        else
        {
            msg[1].innerHTML = "";
        }
      
      
        for (let i= 0; i < valor.length; i++) {
            // Loop interno para iterar sobre os elementos de cada linha
            for (let j = 0; j < cotacao.length; j++) {
                total = [valor] / [cotacao];                
                document.getElementById("msg").innerHTML = `Você consegue comprar U$ ${total.toFixed(2)}`;
            }
    }
}    
  