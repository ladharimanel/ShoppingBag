 const DeleteButtons = document.querySelectorAll(".fa-times");
 const heartsButtons = document.querySelectorAll(".fa-heart");
 const plusButtons = document.querySelectorAll(".fa-plus"); 
 const minusButtons = document.querySelectorAll(".fa-minus");
 const total = document.querySelector("#total");

console.log(heartsButtons);


Array.from(DeleteButtons).map((element) => { 
  element.addEventListener ("click", () => { 
    console.log("clicked on the x button"); 
    element.parentElement.parentElement.remove();

  });

});

Array.from(heartsButtons).map((element) => {
  element.addEventListener ("click",() => {
  element.classList.toggle("red")
  }
  )}
)
Array.from(plusButtons).map(element => {
   element.addEventListener("click", () =>{
   element.nextElementSibling.innerHTML++;
   let productprice = element.parentElement.nextElementSibling.innerHTML.replace(
"dt", ""
);

let totalprice = total.innerHTML.replace("dt", "");
 console.log(totalprice);
 total.innerHTML = parseInt(totalprice) + parseInt(productprice) +"dt ";
   });
  });

  Array.from(minusButtons).map(element => {
    element.addEventListener("click", () =>{
if (element.previousElementSibling.innerHTML > 0) {
  element.previousElementSibling.innerHTML--;
  let productprice = element.parentElement.nextElementSibling.innerHTML.replace(
    "dt", ""
    );
    
    let totalprice = total.innerHTML.replace("dt", "");
     console.log(totalprice);
     total.innerHTML = parseInt(totalprice) - parseInt(productprice) +"dt ";
       }

});
  });
