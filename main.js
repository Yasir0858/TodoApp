let li=document.querySelector("li");
let form=document.querySelector("form");
let ul=document.querySelector("ul");

// console.log(ul);
// console.log(li);

const run=(e)=>{

    e.preventDefault();
    let li=document.createElement("li");
    let input=document.querySelector("input");
    li.innerText=input.value;
    li.className="list-group-item my-3";
    let bttn=document.createElement("button");
    bttn.innerText="Delete";
    bttn.className="btn btn-danger float-end";
    li.appendChild(bttn);
    ul.appendChild(li);
    // console.log(li);
    
    form.reset();
    
}
form.addEventListener("submit",run);
const deletebutton=(e)=>{
    if(e.target.className.includes("btn")){
        let li=e.target.parentElement;
        if(window.confirm("Are you sure ?")){

            ul.removeChild(li); 
        }
    }
    

}
ul.addEventListener("click" , deletebutton);