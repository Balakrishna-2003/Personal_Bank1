let count = 0;
document.onload = () => {
    console.log("event");
    
    // clicking();
}


var id = document.querySelector('#contain');

// function clicking(){
    
//     var btn = document.querySelectorAll('.hidden');
//     for(var i = 0; i < btn.length; i++){
//         btn[i].addEventListener("click",(event) => {
//                 console.log(event);
//                 var id = event.target.id;
            
//         });
    
// }
// }


// clicking();



function aloo() {
    alert(localStorage.getItem(3));
    count++;
    var why = prompt("Enter the Reason: ");
    var user = prompt("Please Enter your Amount: ");
    why = why.toUpperCase();
    var htmldata = `<div class="box">
                            <h2>${why}</h2>
                        </div>
                        <div class="over">
                            <h2 class="h2">$${user}</h2>
                        </div>
                        <div class="box">
                            <button type="submit" class="btn">add</button>
                            <button type="submit"   class="btn hidden" onclick="removei('btn${count}');">remove</button>
                            </div>`;

    var data = document.createElement("div");
    data.className = "first";
    data.id = "btn"+count;
    data.innerHTML = htmldata;
    // document.body.appendChild(data);
    
    id.appendChild(data);
    // clicking();
}



function removei(id){

    
    console.log("i am "+id);
    
    var test = document.querySelector("#"+id);
    console.log(test);

    if(confirm("are you sure ? ")){
        test.remove();
    }
    
}
