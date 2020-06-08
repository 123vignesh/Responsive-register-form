let a = document.getElementById("eat");
let b = document.getElementById("fat");
let c = document.getElementById("cityin");
let d = document.getElementById("zipin");

let e = document.getElementById("bat");
let f = document.getElementById("lat");
let g = document.getElementById("citycp");
let h = document.getElementById("zipcp");


Array.prototype.forEach.call(
  document.querySelectorAll(".file-upload__button"),
  function(button) {
    const hiddenInput = button.parentElement.querySelector(
      ".file-upload__input"
    );
    const label = button.parentElement.querySelector(".file-upload__label");
    const defaultLabelText = "Drag your files here";

    
    label.textContent = defaultLabelText;
    label.title = defaultLabelText;

    button.addEventListener("click", function() {
      hiddenInput.click();
    });

    hiddenInput.addEventListener("change", function() {
      const filenameList = Array.prototype.map.call(hiddenInput.files, function(
        file
      ) {
        return file.name;
      });

      label.textContent = filenameList.join(", ") || defaultLabelText;
      label.title = label.textContent;
    });
  }
);



    


function Catch(){
  e.firstElementChild.value = a.firstElementChild.value;
  f.firstElementChild.value = b.firstElementChild.value;
  g.value = c.value;
  h.value = d.value;
let k = document.getElementById("select2-state1-container");
let l = document.getElementById("select2-state2-container");
l.innerText = k.innerText;
}
function Glass() {
  let inputBox = document.createElement("div");
  inputBox.innerHTML="<input type='text' class='extra' /><br>";
  let gu=document.getElementById("addHere");
  gu.appendChild(inputBox);

  let skills = ["Python","Java","C","C++","JavaScript","Ruby","C#"];
 $(".extra").autocomplete({
   source:skills
 
 });
}
$(function() {
  let degrees  =  ["MBA","B.TECH/B.E","PUC","DIPLOMA"];
  $( "#eduWidth" ).autocomplete({
     source: degrees
  });

  let skills = ["Python","Java","C","C++","JavaScript","Ruby","C#"];
  $("#extra").autocomplete({
    source:skills
  
  });
  $("#skillAdd").autocomplete({
    source:skills
  
  });
  

});
$(document).ready(function(){

  


let StateList=[ "Andhra Pradesh","Arunachal Pradesh","Assam","Bihar","Chhattisgarh","Goa","Gujarat","Haryana","Himachal Pradesh","Jammu and Kashmir","Jharkhand","Karnataka","Kerala","Madhya Pradesh","Maharashtra","Manipur","Meghalaya","Mizoram","Nagaland","Odisha","Punjab","Rajasthan","Sikkim","Tamil Nadu","Telangana","Tripura","Uttarakhand","Uttar Pradesh","West Bengal","Andaman and Nicobar Islands","Chandigarh","Dadra and Nagar Haveli","Delhi","Puducherry"];

 

 $("#state1").select2({
  data:StateList
});
    

$("#state2").select2({
  data:StateList
});

   
      });


      function showPreview(event){
        if(event.target.files.length > 0){
          var src = URL.createObjectURL(event.target.files[0]);
          var preview = document.getElementById("file-ip-1-preview");
          preview.src = src;
          preview.style.display = "block";
        }
      }
 
      function validation(){
        
        var userphone= document.getElementById("usernamecheck").value;
        var mobilePattern = /^[789][0-9]{9}$/  ;    

if(mobilePattern.test(userphone)){
  document.getElementById("usernamecheck").style.backgroundColor="Green";
}else{
  document.getElementById("usernamecheck").style.backgroundColor="red";
  
}
}



      function validation1(){
      var username =document.getElementById("mug1").value;
        var userPattern =/^[A-Za-z  .]{3,20}$/;


        if(userPattern.test(username)){
          document.getElementById("mug1").style.backgroundColor="Green";
        }else{
          document.getElementById("mug1").style.backgroundColor="red";
          
        }



      }


      function validation2(){
        var mail =document.getElementById("emailcheck").value;
          var emailPattern =/^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,5})$/;
  
  
          if(emailPattern.test(mail)){
            document.getElementById("emailcheck").style.backgroundColor="Green";
          }else{
            document.getElementById("emailcheck").style.backgroundColor="red";
            
          }
  
  
  
        }
  
        const currentlocation=location.href;
        const menuItem=document.querySelectorAll('a');
        const menuLength =menuItem.length;
        for (let i =0; i=menuLength; i++){
          if(menuItem[i].href === currentlocation){
            menuItem[i].className="active";
          }
        }





      
      



















      
      




