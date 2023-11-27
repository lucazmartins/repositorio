function calculaIdade(dia,mes,ano){
    const anoCorrente = 2023;
    const mesCorrente = 11;
    const diaCorrente = 27;

    const subAno = anoCorrente - ano
    const subMes = mesCorrente - mes
    const subDia = diaCorrente - dia


     
     if(subAno <= 0)
         return ("Insira um ano válido");

    if (subMes > 0) 
    return subAno     
     
    if(subMes < 0) {
         return subAno - 1;
    }
    else {
             if(subDia  >0 ){
                 return subAno
             }
                        
    }
}





module.exports = calculaIdade;


// else = se nao 
// if = se 