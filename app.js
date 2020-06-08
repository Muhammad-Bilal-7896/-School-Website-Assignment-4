alert("USERNAME Is 'bilal'\nPassword is '123'");
function check(form)/*function to check userid & password*/
{
 /*the following code checkes whether the entered userid and password are matching*/
 if(form.username.value == "bilal" && form.password.value == "123")
  {
    window.open('ElearningPortal.html');/*opens the target page while Id & password matches*/
  }
 else
 {
   alert("Error Password or Username");/*displays error message*/
  }
}
// alert("Thanks to saylani and sir muhammad ali mughal");
// function myFunction() {
//     var x = document.getElementById("logo2");
//     if (x.style.display = 'block') {
//         div.style.display = 'none';
//     }
//     else {
//         x.style.display = 'none';
//     }
    
//   }
// document.getElementById("_bar_Id_").onclick = function() {
//     var x = document.getElementById("logo2");
//     if (x.style.visibility === "hidden") {
//     x.style.visibility = "visible";
//     } else {
//       x.style.visibility = "hidden";
//       }
//     }
// llllllllllllllllllllllllllll
// var button = document.getElementById('button');
// var button = document.getElementById('button1');
// var button = document.getElementById('button2');

// button.onclick = function() {
//     var div = document.getElementById('newpost');
//     var div1 = document.getElementById('newpost1');
//     var div2 = document.getElementById('newpost2');
//     if (div.style.display !== 'none') {
//         div.style.display = 'none';
//     }
//     else{
//         div.style.display = 'block';
//     }

// };
  