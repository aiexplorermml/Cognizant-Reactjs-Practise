function getdata(){
    const details=fetch("https://jsonplaceholder.typicode.com/todos/")
    .then(res=>res.json())
    .then((data)=>{
        data.map((user)=>{
            const li=document.createElement("li")
            li.innerHTML=user.id
            document.getElementById("datas").appendChild(li)
        })
    })
}
getdata()