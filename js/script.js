const allBtn = document.getElementsByClassName('add-btn');

let totalCart = 0;
for(const btn of allBtn){
    btn.addEventListener("click", function(){
        totalCart++;
        document.getElementById('cart-total').innerText = totalCart;
        if(totalCart > 0){
            btn.setAttribute('disabled', true);
        }
    });
}
