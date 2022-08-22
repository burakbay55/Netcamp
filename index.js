console.log("hello world");
document.getElementById("root").innerHTML = "merhaba";
for (let index = 0; index < 10; index++) {
    const element = document.createElement("div");
    element.innerHTML = index;
    document.getElementById("root").append(element);
    //console.log(index);
    
}
