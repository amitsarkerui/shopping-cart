document.getElementById('case-plus').addEventListener('click',function(){
    const unitPrice = 59;
    const newPrice = clickEvents('case-quantity', true, 'case-previous-price', unitPrice); 
    document.getElementById('case-previous-price').innerText = newPrice; 
    calculations()
})

document.getElementById('case-minus').addEventListener('click',function(){
    const unitPrice = 59;
    const newPrice = clickEvents('case-quantity', false, 'case-previous-price', unitPrice); 
    document.getElementById('case-previous-price').innerText = newPrice; 
    calculations()
})
