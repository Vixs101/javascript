// using events in JavaScript
const form = document.querySelector('#myform');
const firstName = document.querySelector('#firstname');
const lastName = document.querySelector('#lastname');
const greeting = document.querySelector("#greeting");

form.addEventListener('submit',  e => {
	e.preventDefault();
	
	verifyInputs();
});

function verifyInputs() {
   //trimming to remove whitespaces
   const firstName_value = firstName.value.trim();
   const lastName_value = lastName.value.trim();
//first name validation
   if(firstName_value === '') {
    setErrorFor(firstName, 'Firstname cannot be blank');
   }
   else {
    setSuccessFor(firstName);
   };
// Last name validation
   if(lastName_value === '') {
    setErrorFor(lastName, 'lastname cannot be blank');
   }
   else {
    setSuccessFor(lastName);
   }
}