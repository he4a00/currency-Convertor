


let dollarPrice = document.querySelector(".input"),
    egyPrice = document.querySelector(".egy-price"),
    euroAmount = document.getElementById(".euro-price1")
    euroPrice = document.querySelector(".euro-price"),
    dollarAmount = document.querySelector(".dollar")
    mySelect = document.querySelector(".select"),
    mySelect1 = document.querySelector(".select1"),
    myBtn = document.querySelector(".btn");





    
    

    
     function change() {


      // choose coin to anoter currency



     
      if (mySelect.value === "country" && mySelect1.value === "country1") {
        dollarPrice.oninput = function() {
          alert("Please Choose Your Coin That You Want To Convert");
         }   
        }; 
        
        if (mySelect.value === "country" && mySelect1.value === "dollar1") {
          dollarPrice.oninput = function() {
            alert("Please Choose Your Coin That You Want To Convert");
           }   
          };

          if (mySelect.value === "country" && mySelect1.value === "euro1") {
            dollarPrice.oninput = function() {
              alert("Please Choose Your Coin That You Want To Convert");
             }   
            };

            if (mySelect.value === "country" && mySelect1.value === "riyal1") {
              dollarPrice.oninput = function() {
                alert("Please Choose Your Coin That You Want To Convert");
               }   
              };

              if (mySelect.value === "country" && mySelect1.value === "pound1") {
                dollarPrice.oninput = function() {
                  alert("Please Choose Your Coin That You Want To Convert");
                 }   
                };

                if (mySelect.value === "country" && mySelect1.value === "yen1") {
                  dollarPrice.oninput = function() {
                    alert("Please Choose Your Coin That You Want To Convert");
                   }   
                  };


                  if (mySelect.value === "country" && mySelect1.value === "egp1") {
                    dollarPrice.oninput = function() {
                      alert("Please Choose Your Coin That You Want To Convert");
                     }   
                    };

                  
    // dollar to another currency
 
    if (mySelect.value === "dollar" && mySelect1.value === "dollar1")  {
      dollarPrice.oninput = function() {
       egyPrice.textContent = `${(dollarPrice.value * 1)}`
      }      
    };

    if (mySelect.value === "dollar" && mySelect1.value === "euro1")  {
      dollarPrice.oninput = function() {
       egyPrice.textContent = `${(dollarPrice.value * 0.85)}`
      }      
    };

    if (mySelect.value === "dollar" && mySelect1.value === "riyal1")  {
      dollarPrice.oninput = function() {
       egyPrice.textContent = `${(dollarPrice.value * 3.75)}`
      }      
    };

    if (mySelect.value === "dollar" && mySelect1.value === "pound1")  {
      dollarPrice.oninput = function() {
       egyPrice.textContent = `${(dollarPrice.value * 0.72)}`
      }      
    };

    if (mySelect.value === "dollar" && mySelect1.value === "yen1")  {
      dollarPrice.oninput = function() {
       egyPrice.textContent = `${(dollarPrice.value * 109.87)}`
      }      
    };

    if (mySelect.value === "dollar" && mySelect1.value === "egp1")  {
      dollarPrice.oninput = function() {
       egyPrice.textContent = `${(dollarPrice.value * 15.71)}`
      }      
    };



   // euro to another currency


    if (mySelect.value === "euro" && mySelect1.value === "euro1") {
     dollarPrice.oninput = function() {
     egyPrice.textContent = `${(dollarPrice.value * 1)}`
    }      
  };

    if (mySelect.value === "euro" && mySelect1.value === "dollar1")  {
      dollarPrice.oninput = function() {
       egyPrice.textContent = `${(dollarPrice.value * 1.18)}`
      }      
    };

    if (mySelect.value === "euro" && mySelect1.value === "pound1")  {
      dollarPrice.oninput = function() {
       egyPrice.textContent = `${(dollarPrice.value * 0.85)}`
      }      
    };

    if (mySelect.value === "euro" && mySelect1.value === "riyal1")  {
      dollarPrice.oninput = function() {
       egyPrice.textContent = `${(dollarPrice.value * 4.43)}`
      }      
    };


    if (mySelect.value === "euro" && mySelect1.value === "yen1")  {
      dollarPrice.oninput = function() {
       egyPrice.textContent = `${(dollarPrice.value * 129.79)}`
      }      
    };

    if (mySelect.value === "euro" && mySelect1.value === "egp1")  {
      dollarPrice.oninput = function() {
       egyPrice.textContent = `${(dollarPrice.value * 18.50)}`
      }      
    };


    



    // pound to another currency 
    
    


    


    if (mySelect.value === "pound" && mySelect1.value === "pound1")  {
      dollarPrice.oninput = function() {
       egyPrice.textContent = `${(dollarPrice.value * 1)}`
      }      
    };


    if (mySelect.value === "pound" && mySelect1.value === "dollar1")  {
      dollarPrice.oninput = function() {
       egyPrice.textContent = `${(dollarPrice.value * 1.38)}`
      }      
    };

    if (mySelect.value === "pound" && mySelect1.value === "euro1") {
      dollarPrice.oninput = function() {
       egyPrice.textContent = `${(dollarPrice.value * 1.17)}`
      }      
    };


    if (mySelect.value === "pound" && mySelect1.value === "riyal1") {
      dollarPrice.oninput = function() {
       egyPrice.textContent = `${(dollarPrice.value * 5.19)}`
      }      
    };

    if (mySelect.value === "pound" && mySelect1.value === "yen1") {
      dollarPrice.oninput = function() {
       egyPrice.textContent = `${(dollarPrice.value * 152.03)}`
      }      
    };

    if (mySelect.value === "pound" && mySelect1.value === "egp1") {
      dollarPrice.oninput = function() {
       egyPrice.textContent = `${(dollarPrice.value * 21.71)}`
      }      
    };


    // riyal to another currency




    if (mySelect.value === "riyal" && mySelect1.value === "riyal1") {
      dollarPrice.oninput = function() {
       egyPrice.textContent = `${(dollarPrice.value * 1)}`
      }      
    };


    if (mySelect.value === "riyal" && mySelect1.value === "dollar1") {
      dollarPrice.oninput = function() {
       egyPrice.textContent = `${(dollarPrice.value * 0.27)}`
      }      
    };


    if (mySelect.value === "riyal" && mySelect1.value === "euro1") {
      dollarPrice.oninput = function() {
       egyPrice.textContent = `${(dollarPrice.value * 0.23)}`
      }      
    };

    if (mySelect.value === "riyal" && mySelect1.value === "pound1") {
      dollarPrice.oninput = function() {
       egyPrice.textContent = `${(dollarPrice.value * 0.19)}`
      }      
    };

    if (mySelect.value === "riyal" && mySelect1.value === "yen1") {
      dollarPrice.oninput = function() {
       egyPrice.textContent = `${(dollarPrice.value * 29.29)}`
      }      
    };

    if (mySelect.value === "riyal" && mySelect1.value === "egp1") {
      dollarPrice.oninput = function() {
       egyPrice.textContent = `${(dollarPrice.value * 4.19)}`
      }      
    };




    // yen to another currency



    if (mySelect.value === "yen" && mySelect1.value === "yen1") {
      dollarPrice.oninput = function() {
       egyPrice.textContent = `${(dollarPrice.value * 1)}`
      }      
    };

    if (mySelect.value === "yen" && mySelect1.value === "dollar1") {
      dollarPrice.oninput = function() {
       egyPrice.textContent = `${(dollarPrice.value * 0.0091)}`
      }      
    };

    if (mySelect.value === "yen" && mySelect1.value === "euro1") {
      dollarPrice.oninput = function() {
       egyPrice.textContent = `${(dollarPrice.value * 0.0077)}`
      }      
    };

    if (mySelect.value === "yen" && mySelect1.value === "pound1") {
      dollarPrice.oninput = function() {
       egyPrice.textContent = `${(dollarPrice.value * 0.0066)}`
      }      
    };

    if (mySelect.value === "yen" && mySelect1.value === "riyal1") {
      dollarPrice.oninput = function() {
       egyPrice.textContent = `${(dollarPrice.value * 0.034)}`
      }      
    };

    if (mySelect.value === "yen" && mySelect1.value === "egp1") {
      dollarPrice.oninput = function() {
       egyPrice.textContent = `${(dollarPrice.value * 0.14)}`
      }      
    };


    // EGP to another currency


    if (mySelect.value === "egp" && mySelect1.value === "egp1") {
      dollarPrice.oninput = function() {
       egyPrice.textContent = `${(dollarPrice.value * 1)}`
      }      
    };

    if (mySelect.value === "egp" && mySelect1.value === "dollar1") {
      dollarPrice.oninput = function() {
       egyPrice.textContent = `${(dollarPrice.value * 0.064)}`
      }      
    };

    if (mySelect.value === "egp" && mySelect1.value === "euro1") {
      dollarPrice.oninput = function() {
       egyPrice.textContent = `${(dollarPrice.value * 0.054)}`
      }      
    };

    if (mySelect.value === "egp" && mySelect1.value === "pound1") {
      dollarPrice.oninput = function() {
       egyPrice.textContent = `${(dollarPrice.value * 0.046)}`
      }      
    };

    if (mySelect.value === "egp" && mySelect1.value === "riyal1") {
      dollarPrice.oninput = function() {
       egyPrice.textContent = `${(dollarPrice.value * 0.24)}`
      }      
    };

    if (mySelect.value === "egp" && mySelect1.value === "yen1") {
      dollarPrice.oninput = function() {
       egyPrice.textContent = `${(dollarPrice.value * 7.01)}`
      }      
    };


    
  

  };

   myBtn.addEventListener('click', () => {
     egyPrice.forEach(egyPrice => egyPrice.value = '') 
       
     });


     
    
     

    
     


      

      


     
   
    

    
    


  





    
      










