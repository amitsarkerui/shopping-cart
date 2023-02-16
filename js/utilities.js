function getInputBoxValue (elementId){
    const quantityInputField = document.getElementById(elementId);
    const quantityInputString = quantityInputField.value;
    const quantity = parseInt(quantityInputString);
    return quantity;
}
function getInputFieldInnerText(elementId){
    const previousPriceString = document.getElementById(elementId).innerText;
    const previousPrice = parseInt(previousPriceString);
    return previousPrice;
}
function updateNumber (isIncrease, previousQuantity){
    if (isIncrease){
        newQuantity = previousQuantity + 1;
    }
    else{
        if(newQuantity <= 0){
            return newQuantity;
        }
        else{
            newQuantity = previousQuantity - 1;
        }
        
    }
    return newQuantity;
}

function subtotal(){
    const phoneCurrentPrice = getInputFieldInnerText('phone-previous-price');
    const caseCurrentPrice = getInputFieldInnerText ('case-previous-price');
    const subTotalPrice = phoneCurrentPrice + caseCurrentPrice;
    document.getElementById('sub-total').innerText = subTotalPrice;
    return subTotalPrice;
}
function calculations(){
    const totalSubTotal = subtotal();
    const taxTotal = getInputFieldInnerText('total-tax');
    const totalAmount = getInputFieldInnerText('total-amount');
    const totalTaxAmount = Math.round(totalSubTotal * 0.15);
    const totalPrice = totalSubTotal + totalTaxAmount;
    document.getElementById('total-tax').innerText = totalTaxAmount;
    document.getElementById('total-amount').innerText = totalPrice;

}

function clickEvents (inputElementId, tf, previousPriceId, unitPrice){
        const previousQuantity = getInputBoxValue(inputElementId);
        const quantity = updateNumber (tf, previousQuantity);
        document.getElementById(inputElementId).value = quantity;
        const previousPrices = getInputFieldInnerText (previousPriceId);
        const newPrice = quantity*unitPrice;
        document.getElementById(previousPriceId).innerText = newPrice;
        return newPrice;
}
