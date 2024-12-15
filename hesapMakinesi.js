const operator = prompt("Lütfen hesap makinesinde yapmak istediğiniz işlemi seçin.(+-*/)");
const num1 = Number(prompt("Birinci sayıyı giriniz."));
const num2 = Number(prompt("İkinci sayıyı giriniz."));
let sum = 0;

if(operator === "+"){
    sum = num1 + num2;
    console.log(sum);
    
}else if(operator === "-"){
    sum = num1 - num2;
    console.log(sum);
}else if(operator === "/"){
    sum = num1 / num2;
    console.log(sum);
}else if(operator === "*"){
    sum = num1 * num2;
    
    console.log(sum);
}else{
    alert("Hatalı Giriş!!");
    console.log("Hatalı Giriş!!!");
    
}