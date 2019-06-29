var firebaseConfig = {
    apiKey: "AIzaSyAp9FhgmVUcRJtJEvMuyCH-qbLfILpVYCg",
    authDomain: "erc-contact-us-form.firebaseapp.com",
    databaseURL: "https://erc-contact-us-form.firebaseio.com",
    projectId: "erc-contact-us-form",
    storageBucket: "",
    messagingSenderId: "443882819352",
    appId: "1:443882819352:web:9888ac018b134cf0"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  
var messageRef = firebase.database().ref('Message');

function getIDValue(id)
{
    return document.getElementById(id).value;
}

document.getElementById('contact_form').addEventListener('submit',submit);

function submit(e)
{
    e.preventDefault();
    console.log(123);

    var name = getIDValue('name');
    var email = getIDValue('email');
    var message = getIDValue('message');

    console.log(name);

    saveMessage(name,email,message);

    document.querySelector('#sendmessage').style.display = 'block';

    setTimeout(function()
        {
            document.querySelector('#sendmessage').style.display = 'none';
        },3000);
}

function saveMessage(name,email,message)
{
    var NewMessageRef = messageRef.push();
    NewMessageRef.set({
        name: name,
        email: email,
        message: message
    });
}