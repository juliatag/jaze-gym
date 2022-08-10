const signupButtons = document.querySelectorAll('.btn-signup');
const modalBg = document.querySelector('.modal-background');
const modal = document.querySelector('.modal');
const buttonPlus = document.getElementById('buttonPlus');
const buttonMinus = document.getElementById('buttonMinus');

signupButtons.forEach(signupButton => {
    signupButton.addEventListener('click', () => {
        modal.classList.add('is-active');
    })
});

modalBg.addEventListener('click', () => {
    modal.classList.remove('is-active');
});

buttonPlus.addEventListener('click', () => {
    const table = document.getElementById('childrenTable');
    
    // add row and tabledata
    let newRow = table.insertRow();
    //name 
    let newCell1= newRow.insertCell();

    var childName = document.createElement("input");
    childName.type= "text"
    childName.value = "";
    childName.placeholder = "insert child's name";
    childName.required = "required";

    //age
    let newCell2 = newRow.insertCell();

    var childAge = document.createElement("input");
    childAge.type= "number"
    childAge.value = "Insert child's age";
    childAge.required = "required";
    childAge.placeholder = 'age';
    childAge.min = '0';
    childAge.max = '10';
    
    
    newCell1.appendChild(childName);
    newCell2.appendChild(childAge);
  }); // end function


  buttonMinus.addEventListener('click', () => { 
     const table = document.getElementById('childrenTable');
     const rowCount = table.rows.length;
     if (rowCount != 0)
     table.deleteRow(rowCount - 1);    
});
