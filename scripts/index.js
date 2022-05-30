// Add the coffee to local storage with key "coffee"

async function getData(){
    let url = "https://masai-mock-api.herokuapp.com/coffee/menu"
    let res = await fetch(url);
    let data = await res.json();
    console.log('data:', data.menu.data)
    let line = data.menu.data;
    append(line)
}
getData();

function append(line){
    let main = document.getElementById("menu");
    line.map(function(ele){
        let div = document.createElement("div");
        div.setAttribute("id","coffee");
        let img = document.createElement("img");
        img.src= ele.image;
        let name = document.createElement("h3");
        name.innerText= ele.title;
        let price = document.createElement("p");
        price.innerText= ele.price;
        let btn = document.createElement("button");
        btn.innerText="Add to bucket";
        btn.setAttribute("id","add_to_bucket");
        btn.addEventListener("click",function(){
            addtocart(ele)
        })
        div.append(img,name,price,btn)
        main.append(div)
    })
}

let bucarr= JSON.parse(localStorage.getItem("coffee"))||[]
function addtocart(ele){
    bucarr.push(ele);
    console.log('bucarr:', bucarr)
    localStorage.setItem("coffee",JSON.stringify(bucarr))
    count.innerText=bucarr.length;
}

let count = document.getElementById("coffee_count");
if(bucarr === null){
    count.innerText = 0;
}
count.innerText = bucarr.length;
