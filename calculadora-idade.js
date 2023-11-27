function calculaIdade(dia,mes,ano){
    const anoCorrente = 2023;
    const mesCorrente = 11;
    const diaCorrente = 27;

    const subAno = anoCorrente - ano;
    const subMes = mesCorrente - mes;
    const subDia = diaCorrente - dia;


// SubAno <0     
    if (subAno === 0)
        return 0;

    if (subAno < 0)
        return "insira um ano válido";

// SubAno > 0

    if (subMes > 0) 
        return subAno;     
     
    if (subMes < 0) 
        return subAno - 1;
    
// SubAno = 0

    if (subDia  >= 0)
        return subAno;
   
// Obrigatoriamente o subDia < 0  

    return subAno - 1;                 
    
}





module.exports = calculaIdade;


// else = se nao 
// if = se 