function getData() {
    
    let name = document.getElementById("name").value
    let email = document.getElementById("email").value
    let phone = document.getElementById("phone").value
    let subject = document.getElementById("subject").value
    let message = document.getElementById("message").value
  
    if(name === ""){
      return alert("Nama harus di isi")
    } else if(email === "") {
      return alert("Email harus di isi") 
    } else if(phone === "") {
      return alert("Nomor telpon harus di isi") 
    } else if(subject ==- "choose a subject") {
      return alert("tolong pilih subject") 
    } else if(message === "") {
      return alert("Message harus di isi") 
    }
  
    let emailReceiver = "sacrumsibli25@gmail.com";
  
    let a = document.createElement("a");
    a.href = `mailto:${emailReceiver}?subject=${subject}&body=Halo, nama saya ${name}, ${message}. Tolong kontak saya di nomor ${number} atau email saya di ${email}`;
    a.click();
  
    let messagers = {
      nama: name,
      email: email,
      phone_number: number,
      subject: subject,
      message: message,
    };
  
    console.log(messagers); 

  }
