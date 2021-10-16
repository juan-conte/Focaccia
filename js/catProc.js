let htmltoappend=""

for(let article of PizzasData)
{
    
    

    htmltoappend +=  `
       
       <div class="col-md-4">
       <a href="SOFT_LINK" class="card mb-4 shadow-sm custom-card bg-dark text-white" style="text-decoration: none;">
         <img class="bd-placeholder-img card-img-top"  src="${article.imagen}">
         <h3 class="m-3 text-white">${article.nombre}</h3>
         <div class="card-body">
            <p class="card-text text-white">${article.descripcion}</p>
            <p class="card-text" style="text-align: center; border-radius: 8px; background-color: #48b890; width:3em;"><small class="text-white">$${article.precio}</small></p>
         </div>
       </a>
     </div> `
}

document.getElementById("insertcards").innerHTML = htmltoappend;






