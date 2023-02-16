document.getElementById('phone-plus').addEventListener('click',function(){
    const unitPrice = 1219;
    const newPrice = clickEvents('phone-quantity', true, 'phone-previous-price', unitPrice); 
    document.getElementById('phone-previous-price').innerText = newPrice; 
    calculations()
})

document.getElementById('phone-minus').addEventListener('click',function(){
    const unitPrice = 1219;
    const newPrice = clickEvents('phone-quantity', false, 'phone-previous-price', unitPrice); 
    document.getElementById('phone-previous-price').innerText = newPrice; 
    calculations()
})
