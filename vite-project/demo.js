function fetchData(dataId,getNextData){
    setTimeout(()=>{
        console.log(dataId)
        if(getNextData){
            getNextData()
        
        }
    },5000);
}
fetchData(1,()=>{
    fetchData(2,()=>{
        fetchData(3)
    })
})


function fetchdata1(dataId){
    console.log(dataId)
}
async function getdata(){
    await fetchdata1(11)
    await fetchdata1(10)
}
getdata()