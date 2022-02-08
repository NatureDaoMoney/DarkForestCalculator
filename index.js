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
tcount = setInterval(function(){
  tcount++
  if (tcount==10) {
    getData();
    tcount=0;
  }
},1000);

// Calcul 
function calculate() {

    p = document.getElementById("p").value;
    n = 1;
    t = document.getElementById("t").value; // no. of years
    r = 3;
    
    // The equation is A = p * [[1 + (r/n)] ^ nt]
    A = (p * Math.pow((1 + (3 / 100)), (n * t)));
  
    document.getElementById("cw-node-value").innerHTML = A.toFixed(2) + ' <span class="cw-symbol">$CWORLD</span>';
    document.getElementById("cw-node-reward").innerHTML = (A.toFixed(2) / 100*3).toFixed(2) + ' <span class="cw-symbol">$CWORLD</span>';

    price = document.getElementById("priceCworldhidden").innerHTML;

    statA = (A / 100*3) * (1 * price);
    statB = (A / 100*3) * (7 * price);
    statC = (A / 100*3) * (30 * price);
  
    stat1.innerHTML = '<span class="cw-symbol">$</span>' + parseFloat(statA).toFixed(2)
    stat2.innerHTML = '<span class="cw-symbol">$</span>' + parseFloat(statB).toFixed(2)
    stat3.innerHTML = '<span class="cw-symbol">$</span>' + parseFloat(statC).toFixed(2)

    document.getElementById("cw-table-cc-body").innerHTML = '';

    if(t > 0) 
    {
      
      var nv = 0;
      for(let l = 0; l <= t; l++) {
        // stat = (A / 100*3) * (l * price);
        // document.getElementById("cw-table").innerHTML += '<tr><td class="cw-head">Day '+l+'</td><td><span class="cw-symbol">$</span>'+parseFloat(stat).toFixed(2)+'</td></tr>';
        console.log(nv);
        nv = (nv > 0) ? parseFloat(nv) + ((parseFloat(nv)/100) * 3) : parseFloat(p);
        var dr = ((parseFloat(nv)/100) * 3);
        var drd = dr * price;
        document.getElementById("cw-table-cc-body").innerHTML += '<tr><td>Day '+l+'</td><td>'+parseFloat(nv).toFixed(2)+'</td><td>'+parseFloat(dr).toFixed(2)+'</td><td>'+parseFloat(drd).toFixed(2)+'</td></tr>';
      }
    }

    // price = document.getElementById("priceCworldhidden").innerHTML;
}