const URL="https://jsonplaceholder.typicode.com/users"
const factpara=document.querySelector("#fact")
const btn=document.querySelector("#btn")

const getfacts=async()=>{
    console.log("getting data...")
    let response=await fetch(URL)
    console.log(response);  //json format
    let data=await response.json(); //since json is asynchronous therefore await
    console.log(data[0].name);
    factpara.innerText=data[2].name
}
btn.addEventListener("click",getfacts)

getfacts()


