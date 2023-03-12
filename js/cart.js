function updateCaseNumber(isIncrease){
   const caseNoField = document.getElementById('case-number-field');
   const caseNoFieldValueString = caseNoField.value;
   const caseNoFieldValue = parseInt(caseNoFieldValueString);
   let newCaseNo;
   if(isIncrease === true){
        newCaseNo = caseNoFieldValue+1;
   }else{
        newCaseNo = caseNoFieldValue-1;
   }
   caseNoField.value = newCaseNo;
  
   return newCaseNo;
}


function updateCasePrice(newCaseNo){
   const caseTotalPrice = newCaseNo*59;
    const caseTotal =document.getElementById('case-total');
    caseTotal.innerText = caseTotalPrice;
}


document.getElementById('btn-case-plus').addEventListener('click',function(){
   const newCaseNo = updateCaseNumber(true);
   updateCasePrice(newCaseNo);
   calculateSubtotal()
});

document.getElementById('btn-case-minus').addEventListener('click',function(){
   const caseQuantity = updateCaseNumber(false);
   updateCasePrice(caseQuantity);
   calculateSubtotal()
})












// এভাবেও করা যায়-------------------------------------------------------------------

// document.getElementById('btn-case-plus').addEventListener('click',function(){
//     const newCaseNo = updateCaseNumber(true);
//     const caseTotalPrice = newCaseNo*59;
//     const caseTotal =document.getElementById('case-total');
//     caseTotal.innerText = caseTotalPrice;
// });

// document.getElementById('btn-case-minus').addEventListener('click',function(){
//     const caseQuantity = updateCaseNumber(false);
//     const caseTotalPrice = caseQuantity*59;
//     const caseTotal =document.getElementById('case-total');
//     caseTotal.innerText = caseTotalPrice;
// })

// document.getElementById('btn-case-minus').addEventListener('click',function(){
//     decreaseCaseNumber()
//   })


// document.getElementById('btn-phone-plus').addEventListener('click',function(){
//   updatePhoneNumber()
// })

// document.getElementById('btn-phone-minus').addEventListener('click',function(){
//   decreasePhoneNumber()
// })

// --------------------------------------------------------------------------------------------------------

