function calculate() {
    p = document.getElementById("p").value;
    n = 1;
    t = document.getElementById("t").value; // no. of years
    r = 3;
    result = document.getElementById("result");
  
    // The equation is A = p * [[1 + (r/n)] ^ nt]
    A = (p * Math.pow((1 + (3 / 100)), (n * t)));
  
    // toFixed is used for rounding the amount with two decimal places.
    result.innerHTML = "Node Value : " + A.toFixed(2);
    result.innerHTML += "<br> Daily Rewards : " + (A.toFixed(2) / 100*3).toFixed(2);
  }