
function getTextElementValueById(elementId){
     const phoneTotalElement = document.getElementById(elementId);
     const curentPhoneTotalString = phoneTotalElement.innerText;
     const curentPhoneTotal = parseInt(curentPhoneTotalString);
     return curentPhoneTotal;
 }

 function setTextElementValueById(elementId,value){
     const subTotal = document.getElementById(elementId);
     subTotal.innerText=value;
 }
 
 function calculateSubtotal(){
     const totalPhonePrice = getTextElementValueById('phone-total');
     const totalCasePrice = getTextElementValueById('case-total');
     const subTotalPrice = totalPhonePrice + totalCasePrice;
    setTextElementValueById('sub-total',subTotalPrice);
//     tax calculate
const taxAmountString = (subTotalPrice*0.1).toFixed(2);
const taxAmount = parseFloat(taxAmountString);
setTextElementValueById('tax-amount',taxAmount);
// Total 
const finalTotal = subTotalPrice+ taxAmount;
setTextElementValueById('final-total',finalTotal);
 }