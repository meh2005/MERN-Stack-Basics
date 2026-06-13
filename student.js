function addStudent() {
    let name = document.getElementById('name').value;
    let age = document.getElementById('age').value;
    let course = document.getElementById('course').value;

    //validation
    if((/^[0-9]+$/).test(name)){
        alert('Name cannot contain numbers');
        return;
    }
    else if(age < 0 || age > 120){
        alert('Please enter a valid age');
        return;
    }

    let card=document.createElement('div');
    card.classList.add('student-card');
    card.innerHTML = `
        <h3>${name}</h3>
        <p>Age: ${age}</p>
        <p>Course: ${course}</p>
        <button class="delete-btn" onclick="deleteStudent()">Delete</button>
    `;

    let deleteBtn = card.querySelector('.delete-btn');
    deleteBtn.onclick=function(){
        card.remove();
    }

    document.getElementById('studentList').appendChild(card);

    document.getElementById('name').value = '';
    document.getElementById('age').value = '';
    document.getElementById('course').value = '';

}