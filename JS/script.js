function changeText(){
    document.getElementById("title").innerHTML = "DOM changed";
}
function showName(){
    let name =document.getElementById("nameinput").value;
    document.getElementById("output").innerHTML = name;
}
function changeColor(){
    document.getElementsByTagName("body")[0].style.backgroundColor = randomColor();
}
function randomColor(){
    let r = Math.floor(Math.random()*256);
    let g = Math.floor(Math.random()*256);
    let b = Math.floor(Math.random()*256);
    return "rgb("+r+","+g+","+b+")";
}
function addTask(){
    let task=document.getElementById("task").value;
    let l=document.getElementById('list');
    let li=document.createElement('li');
    li.innerHTML=task;
    l.appendChild(li);
}
function removeLast(){
    let l=document.getElementById('list');
    if(l.lastElementChild){
    l.lastElementChild.remove();}
    else{
        alert("No more items to remove");
    }
}
function removeFirst(){
    let l=document.getElementById('list');
    if(l.firstElementChild){
    l.firstElementChild.remove();}
    else{
        alert("No more items to remove");
    }
}

