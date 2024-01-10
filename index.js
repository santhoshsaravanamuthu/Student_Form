function addName() {
    var name = document.getElementById("name").value;
    var age = document.getElementById("age").value;
    var gender = document.querySelector('input[name="gender"]:checked').value;
    var courses = document.querySelector('select[name="Courses"]').value;
    var email = document.getElementById("email").value;


    var table = document.getElementById("output-table");
    var newRow = table.insertRow(table.rows.length);

    
    var nameCell = newRow.insertCell(0);
    var ageCell = newRow.insertCell(1);
    var genderCell = newRow.insertCell(2);
    var coursesCell = newRow.insertCell(3);
    var emailCell = newRow.insertCell(4);
    var actionCell = newRow.insertCell(5);

    nameCell.innerHTML = name;
    ageCell.innerHTML = age;
    genderCell.innerHTML = gender;
    coursesCell.innerHTML = courses;
    emailCell.innerHTML = email;
    actionCell.innerHTML = '<button onclick="deleteRow(this)" id="del">Delete</button>';
}

function deleteRow(button) {
    var row = button.parentNode.parentNode;
    row.parentNode.removeChild(row);
}