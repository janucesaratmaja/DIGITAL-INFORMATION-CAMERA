function emailsent(){

    var Username = document.getElementById('nama').value;
    var email = document.getElementById('email').value;
    var Kritik_dan_Saran = document.getElementById('kamera').value;

    var messageBody = "Name " + Username +
    "<br/> Phone " + email +
    "<br/> Kritik dan Saran" + Kritik_dan_Saran;
    Email.send({
        Host : "smtp.elasticemail.com",
        Username : "woyyyyyy102@gmail.com",
        Password : "B2831093CB6D59788E482EB4DAA10073D3E0",
        To : 'adrielwintersatmaja@gmail.com',
        From : "woyyyyyy102@gmail.com",
        Subject : "This is the subject",
        Body : messageBody
    }).then(
      message => {
        if (message=='OK'){
            swal("MANTAP ABANGKUU!", "MENYALAAA", "success");
        }
        else{
            swal("ERROR!", "You clicked the button!", "error");
        }
      }
    );
}