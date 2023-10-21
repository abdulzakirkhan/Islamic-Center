// const firebaseConfig = {
    //   copy your firebase config informations
//   };
const firebaseConfig = {
    apiKey: "AIzaSyBgmEVZO5qTTglHcDzHjIPUfxUBLBbuld4",
    authDomain: "madrasah-5f1c9.firebaseapp.com",
    databaseURL: "https://madrasah-5f1c9-default-rtdb.firebaseio.com",
    projectId: "madrasah-5f1c9",
    storageBucket: "madrasah-5f1c9.appspot.com",
    messagingSenderId: "975814203203",
    appId: "1:975814203203:web:8036d9ff06e766b87b81f6"
  };
  
  // initialize firebase
  firebase.initializeApp(firebaseConfig);
  
  // reference your database
  var contactFormDB = firebase.database().ref("contact-from");
  
  document.getElementById("contact-from").addEventListener("submit", submitForm);
  
  function submitForm(e) {
    e.preventDefault();
  
    var name = getElementVal("name");
    var phoneid = getElementVal("phoneid");
    var emailid = getElementVal("emailid");
    var msgContent = getElementVal("msgContent");
  
    saveMessages(name,phoneid, emailid, msgContent);
  
    //   enable alert
    document.querySelector(".alert").style.display = "block";
  
    //   remove the alert
    setTimeout(() => {
      document.querySelector(".alert").style.display = "none";
    }, 3000);
  
    //   reset the form
    document.getElementById("contact-from").reset();
  }
  
  const saveMessages = (name,phoneid, emailid, msgContent) => {
    var newContactForm = contactFormDB.push();
  
    newContactForm.set({
      name: name,
      phoneid:phoneid,
      emailid: emailid,
      msgContent: msgContent,
    });
  };
  
  const getElementVal = (id) => {
    return document.getElementById(id).value;
  };