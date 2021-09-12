


let dollarPrice = document.querySelector(".input"),
    egyPrice = document.querySelector(".egy-price"),
    euroAmount = document.getElementById(".euro-price1")
    euroPrice = document.querySelector(".euro-price"),
    dollarAmount = document.querySelector(".dollar")
    mySelect = document.querySelector(".select"),
    myBtn = document.querySelector(".btn");


    

    
     function change() {

     
      if (mySelect.value === "country") {
        dollarPrice.oninput = function() {
          alert("Please Choose Your Coin That You Want To Convert");
         }   
        }      
      


    if (mySelect.value === "dollar") {
      dollarPrice.oninput = function() {
       egyPrice.textContent = `${(dollarPrice.value * 15.6)}`
      }      
    } 


    if (mySelect.value === "euro") {
      dollarPrice.oninput = function() {
       egyPrice.textContent = `${(dollarPrice.value * 18.56)}`
      }      
    }


    if (mySelect.value === "pound") {
      dollarPrice.oninput = function() {
       egyPrice.textContent = `${(dollarPrice.value * 21.73)}`
      }      
    }


    if (mySelect.value === "Riyal") {
      dollarPrice.oninput = function() {
       egyPrice.textContent = `${(dollarPrice.value * 4.19)}`
      }      
    }


    if (mySelect.value === "yen") {
      dollarPrice.oninput = function() {
       egyPrice.textContent = `${(dollarPrice.value * 0.14)}`
      }      
    }
  

  };

   myBtn.addEventListener('click', () => {
     egyPrice.forEach(egyPrice => egyPrice.value = '') 
       
     });
   
    

    
    


  





    
      










