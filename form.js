let students={};
let id=1;
function add(){
    let name=document.getElementById("name").value;
    let ID=document.getElementById("ID").value;
    let age=document.getElementById("age").value;
    let course=document.getElementById("course").value;
    if(name=="" || ID=="" || age=="" || course==""){
        alert("Please fill all fields");
        return;
    }
    else{
        students.push({name:name,ID:ID,age:age,course:course});
    }
    document.getElementById("output").innerHTML += 
    "<div class='card'> <h2>"+name+"</h2><p>ID: "+ID+"</p><p>Age: "+age+"</p><p>Course: "+course+"</p></div>";
    
}