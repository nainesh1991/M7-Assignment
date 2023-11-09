// GET ADD EMPLOYEE FORM AND EMPLOYEE TABLE FROM THE DOM
const $ = (id) => document.getElementById(id)
let form = $('addForm')
let table_employee = $('employees')

// SET A COUNT VARIABLE TO DISPLAY NEXT TO EMPLOYEES HEADER
let output = $('empCount')
let empCount = 0;
output.textContent = `${empCount}`;

// ADD EMPLOYEE
form.addEventListener('submit', (e) => {
    // PREVENT FORM SUBMISSION
    e.preventDefault()
    // GET THE VALUES FROM THE TEXT BOXES

    let employee_ID = $('id').value;
    let full_Name = $('name').value;
    let digit_Extension = $('extension').value;
    let email = $('email').value;
    let department = $('department').value;

    // INSERT A NEW ROW AT THE END OF THE EMPLOYEES TABLE
    let tr = table_employee.insertRow()
    // INSERT A CELL FOR EACH ITEM WITHIN THE NEW ROW
    // let cl_Employee_ID = document.createElement('td')
    // let cl_Full_Name = document.createElement('td')
    // let cl_Digit_Extension = document.createElement('td')
    // let cl_email = document.createElement('td')
    // let cl_Department = document.createElement('td')
    let cl_Employee_ID = tr.insertCell();
    let cl_Full_Name = tr.insertCell();
    let cl_Digit_Extension = tr.insertCell();
    let cl_email = tr.insertCell();
    let cl_Department = tr.insertCell();

    // APPEND THE TEXT VALUES AS TEXT NODES WITHIN THE CELLS
    cl_Employee_ID.appendChild(document.createTextNode(employee_ID))
    cl_Full_Name.appendChild(document.createTextNode(full_Name))
    cl_Digit_Extension.appendChild(document.createTextNode(digit_Extension))
    cl_email.appendChild(document.createTextNode(email))
    cl_Department.appendChild(document.createTextNode(department))
    tr.appendChild(cl_Employee_ID);
    tr.appendChild(cl_Full_Name);
    tr.appendChild(cl_Digit_Extension);
    tr.appendChild(cl_email);
    tr.appendChild(cl_Department);
    // CREATE THE DELETE BUTTON
    let cl_Delete_Btn = tr.insertCell();
    let deleteBtn = document.createElement('button')
    let textDelete = document.createTextNode('X')
    deleteBtn.appendChild(textDelete)
    cl_Delete_Btn.appendChild(deleteBtn)

    table_employee.appendChild(tr)

    // Reset the form
    form.reset();

    // SET FOCUS BACK TO THE ID TEXT BOX
    $('id').focus();

    // INCREMENENT THE NUMBER OF EMPLOYEES IN THE TABLE
    empCount++;
    console.log(empCount)
    output.textContent = empCount;

})

// DELETE EMPLOYEE
table_employee.addEventListener('click', (e) => {
    if (confirm("Are you sure you want to delete this employee?")) {
        let tr = e.target.parentElement.parentElement;
        table_employee.deleteRow(tr.rowIndex);
        empCount--;
        output.textContent = empCount;
        $('id').focus();
    }
})