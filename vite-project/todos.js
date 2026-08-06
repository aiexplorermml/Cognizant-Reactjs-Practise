function addtodo(){
    const task=document.getElementById("inputId").value;
    const li=document.createElement("li")
    li.innerHTML=`<span>${task}</span>`
    document.getElementById("tid").appendChild(li)
    document.getElementById("inputId").value=""


}