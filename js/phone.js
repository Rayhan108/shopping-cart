function updatePhoneNumber(isIncrease){
    const phoneNoField = document.getElementById('phone-number-field');
    const phoneNoFieldValueString = phoneNoField.value;
    const phoneNoFieldValue = parseInt(phoneNoFieldValueString);
    let newPhoneNo;
    if(isIncrease === true){
         newPhoneNo = phoneNoFieldValue+1;
    }else{
         newPhoneNo = phoneNoFieldValue-1;
    }
    phoneNoField.value = newPhoneNo;
    return newPhoneNo;
}


function updatePrice(newPhoneNo){
    const phoneTotalPrice = newPhoneNo*1219;
    const phoneTotal =document.getElementById('phone-total');
    phoneTotal.innerText = phoneTotalPrice;
}




document.getElementById('btn-phone-plus').addEventListener('click',function(){
    const newPhoneNo = updatePhoneNumber(true);
    updatePrice(newPhoneNo);
    calculateSubtotal()
   
   

  
});
document.getElementById('btn-phone-minus').addEventListener('click',function(){
    const newPhoneNo = updatePhoneNumber(false);
    updatePrice(newPhoneNo);
    calculateSubtotal()
});