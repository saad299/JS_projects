const nmbr1 = document.getElementById('nmbr-01');
const nmbr2 = document.getElementById('nmbr-02');
const nmbr3 = document.getElementById('nmbr-03');
const nmbr4 = document.getElementById('nmbr-04');
const nmbr5 = document.getElementById('nmbr-05');

let arr = [];

function next1() {
  let x = document.getElementById('txt1').value;
  let invalid;
  if (isNaN(x) || x <= 0 || x > 10) {
    invalid = 'Input not valid';
    alert('Please enter the correct range of number');
    document.getElementById('para1').innerHTML = invalid;
    return false;
  } else {
    document.getElementById('para1').innerHTML = x;
    arr.push(document.getElementById('txt1').value);
  }
}
function next2() {
  let x = document.getElementById('txt2').value;
  let invalid;
  if (isNaN(x) || x <= 0 || x > 10) {
    invalid = 'Input not valid';
    alert('Please enter the correct range of number');
    document.getElementById('para2').innerHTML = invalid;
    return false;
  } else {
    document.getElementById('para2').innerHTML = x;
    arr.push(document.getElementById('txt2').value);
  }
}
function next3() {
  let x = document.getElementById('txt3').value;
  let invalid;
  if (isNaN(x) || x <= 0 || x > 10) {
    invalid = 'Input not valid';
    alert('Please enter the correct range of number');
    document.getElementById('para3').innerHTML = invalid;
    return false;
  } else {
    document.getElementById('para3').innerHTML = x;
    arr.push(document.getElementById('txt3').value);
  }
}
function next4() {
  let x = document.getElementById('txt4').value;
  let invalid;
  if (isNaN(x) || x <= 0 || x > 10) {
    invalid = 'Input not valid';
    alert('Please enter the correct range of number');
    document.getElementById('para4').innerHTML = invalid;
    return false;
  } else {
    document.getElementById('para4').innerHTML = x;
    arr.push(document.getElementById('txt4').value);
  }
}
function next5() {
  let x = document.getElementById('txt5').value;
  let invalid;
  if (isNaN(x) || x <= 0 || x > 10) {
    invalid = 'Input not valid';
    alert('Please enter the correct range of number');
    document.getElementById('para5').innerHTML = invalid;
    return false;
  } else {
    document.getElementById('para5').innerHTML = x;
    arr.push(document.getElementById('txt5').value);
  }
}

function confirm() {
  let a = document.getElementById('txt1').value;
  let b = document.getElementById('txt2').value;
  let c = document.getElementById('txt3').value;
  let d = document.getElementById('txt4').value;
  let e = document.getElementById('txt5').value;
  if (a == '' || b == '' || c == '' || d == '' || e == '') {
    alert('Please populate all the input fields');
  } else {
    document.open('text/html', 'replace');
    document.write(
      `<p>You saved 5 numbers in an array. Those numbers are [${arr}]</p>
    <button onclick="document.location='index.html'" id="reset">Start Again?</button>`
    );
    document.close();
  }
}