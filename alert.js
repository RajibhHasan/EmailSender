
const alerty=()=>{




function elemaker(eleT,parent,html){
const ele = document.createElement(eleT);
const root=document.getElementById("root");


ele.innerHTML = html;
console.log(ele);
ele.classList.add('popUp');

ele.style.backgroundColor="red";
return parent.appendChild(ele);
}

elemaker("div",document.body,'hi create div')

// Get all elements on the page


// Loop through each element
for (var i = 0; i < root.length; i++) {
    // Disable the element
    console.log(root[i]);
    root[i].disabled = true;
}






}

export default alerty;



