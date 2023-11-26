
alert("Welcome to the Contact Us page");

// TASK 4B – Copy your web app's Firebase configuration here ...

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDV83UcVV1YSnqT7tglEDWl2bcfKifVSKc",
  authDomain: "pdst-demo-jscript.firebaseapp.com",
  databaseURL: "https://pdst-demo-jscript-default-rtdb.firebaseio.com",
  projectId: "pdst-demo-jscript",
  storageBucket: "pdst-demo-jscript.appspot.com",
  messagingSenderId: "476668021285",
  appId: "1:476668021285:web:5dc7624681868bac42cdcc",
  measurementId: "G-4ZK57R4RVX"
};
// TASK 4C
// TASK 4C
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

// Retrieve the database handle
const myDBCxn = firebase.database().ref('/contacts');
// Task 2D - tell JavaScript to call saveContacts when SUBMIT button is clicked
const btn = document.getElementById("submit-data");
btn.addEventListener("click", saveContacts);

// Submit clicked so post the data to the server
function saveContacts() {
  alert("SUBMIT clicked!!!");

  // Task 2E - read the data from the email field
  const emailField = document.getElementById("email");
  const emailFieldValue = emailField.value;
  alert(emailFieldValue);
  // reset form 
  emailField.value = ''; // clear the field
  emailField.focus(); // set the focus

  // TASK 4D
  // code to save the data to Firebase GOES HERE!
  const data = myDBCxn.push();
  data.set( {email: emailFieldValue
            });
}  // <-- GOTCHA!

// Task 5B - Code to retrieve and display the data goes here ...
myDBCxn.on("child_added", displayData);

function displayData(data, prevChildKey) {
    const datapoint = data.val();
    document.getElementById("contacts").value += datapoint.email + "\n";
}

// Task 5C - Code to retrieve and display the data in a list goes here ...
// Task 5C - Code to retrieve and display the data in a list goes here ...
myDBCxn.on("child_added", displayDataAsList);

// A handler to display the Firebase data as a list
function displayDataAsList(data, prevChildKey) {

    const datapoint = data.val();

    // create a new list item element and set its value to the email address
    const newListItem = document.createElement('li');
    newListItem.innerHTML = datapoint.email;

    // append the above list item to the ordered list identified by rows
    const rowList = document.getElementById('rows');
    rowList.appendChild(newListItem);  

}