// Price Cworld
const getData = async () => {
  fetch('https://api.pancakeswap.info/api/v2/tokens/0x1fbce266cc9949df60d5f8b6f4cc2758d63eb1f5')
 .then(response => response.json())
 .then(data => {
   document.getElementById("priceCworldhidden").innerHTML = parseFloat(data.data.price).toFixed(2)
 });
}
getData();

// Price_timer
tcount=setInterval(function(){
 tcount++
 if (tcount==10) {getData();tcount=0}
},1000);

// Calcul 
function calculate() {

    p = document.getElementById("p").value;
    n = 1;
    t = document.getElementById("t").value; // no. of years
    r = 3;
    
    // The equation is A = p * [[1 + (r/n)] ^ nt]
    A = (p * Math.pow((1 + (3 / 100)), (n * t)));
  
  document.getElementById("cw-node-value").innerHTML = A.toFixed(2) + ' <span class="cw-symbol">$CWORD</span>';
  document.getElementById("cw-node-reward").innerHTML = (A.toFixed(2) / 100*3).toFixed(2) + ' <span class="cw-symbol">$CWORD</span>';

  t = document.getElementById("priceCworldhidden").innerHTML;

  statA = (A / 100*3) * (1 * t);
  statB = (A / 100*3) * (7 * t);
  statC = (A / 100*3) * (30 * t);
  
  stat1.innerHTML = '<span class="cw-symbol">$</span>' + parseFloat(statA).toFixed(2)
  stat2.innerHTML = '<span class="cw-symbol">$</span>' + parseFloat(statB).toFixed(2)
  stat3.innerHTML = '<span class="cw-symbol">$</span>' + parseFloat(statC).toFixed(2)

  calculatehidden();
  
}

function calculatehidden() { 
    if (window.getComputedStyle(document.querySelector('#hid')).display=='none'){
      document.querySelector("#hid").style.display="block";
    } 
}