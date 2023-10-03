let email = document.querySelector('#emailHere');
let subscribe = document.querySelector('#submitEmail');
let confirmMessage = document.querySelector('#confirmText');
let successShow = document.querySelector('.success');
let dismiss = document.querySelector('#Dismiss');
let updated = document.querySelector('#updated');
let emailError = document.querySelector('#email-error');


subscribe.addEventListener('click', () => {
  if (!email.value.match(/^[A-Za-z\._\-0-9]*[@][A-Za-z]*[\.][a-z]{2,4}$/)) {
    alert('Enter Valid Email Address');
  } else {
    successShow.classList.add('successOpen');
    updated.classList.add('updated');
    let Email = email.value;
    confirmMessage.innerHTML = `A confirmation email has been sent to ${Email} 
    Please open it and click the button inside to confirm your subscription.`;

  }  
});

const validateEmail = () => {
  if (!email.value.match(/^[A-Za-z\._\-0-9]*[@][A-Za-z]*[\.][a-z]{2,4}$/)) {
    emailError.innerHTML = "Valid email required";
    email.style.borderColor = "hsl(4, 100%, 67%)";
    email.style.color = "hsl(4, 100%, 67%)";
    email.style.backgroundColor = "#f3dede";
    return false;
  } 
  emailError.innerHTML = "";
  email.style.borderColor = "green";
  email.style.backgroundColor = "white";
  email.style.color = "black";
  return true;
}

dismiss.addEventListener('click', () => {
  successShow.classList.remove('successOpen');
  updated.classList.remove('updated');  
});