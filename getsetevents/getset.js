//this is get set or change paragraph No:1
  let h1=document.querySelector("h1");
   h1.setAttribute("class","head");
   console.log("Changed color in every p by setAttribute");
   console.log(h1)

   let parag=document.querySelectorAll("p");
      
      parag.forEach(p=>{
          p.setAttribute("class","pcolor");
          console.log(p);
          
      });
      console.log("Get attribute of every p by getAttribute");
     let getAttr= parag[0].getAttribute("class");
     console.log(getAttr);

     //this classlist
 
     let hfour=document.querySelectorAll("h4");
     hfour.forEach(h=>{
       if(h.textContent.includes("Not VIP")){
         h.classList.add("warn");
       }else if(h.textContent.includes("Welcome"))
       {
         h.classList.add("primary");
       }
     });
     let classlist=Array.from(hfour);
     console.log(classlist);

     //this is No3 child parent siblling



console.log("Child parent siblings")
     let div=document.querySelector("div");
     let child=Array.from(div.children);
     child.forEach(c=>{
      console.log(c);
     });
     let parent=child[3].parentElement;
     console.log(parent);

     let siblling=child[0].nextElementSibling;
     console.log(siblling);
   