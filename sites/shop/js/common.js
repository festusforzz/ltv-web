$( document ).ready(function() {
  var shopCount = $('.shop-icon-value');
  var count = 1;
  $('.fa-plus').on('click' , function (){
    document.getElementById("myDIV").style.display = "block"
    document.getElementById("myDIV").innerHTML = count++    
});
});

var tovarShorts = {
  image: 'img/shorts.jpg',
  name: 'Shorts',
  size: 'XL',
  count: '1',
  price: '35.85',
}
console.log(tovarShorts);
