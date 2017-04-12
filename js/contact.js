$(function() {
  $('.submit').click(sendForm);
})



function sendForm(e) {
  var form = document.querySelector('form');
  if (form.checkValidity()) {
        e.preventDefault();
        $.ajax({
            url: "https://formspree.io/sai_puzikov@hotmail.com", 
            method: "POST",
            data: {
              name: $('#name').val(),
              email: $('#email').val(),
              message: $('#message').val()
            },
            dataType: "json"
        })
        .done(function() { 
          $('.form').html('<img src="img/okey.png" alt="ok" id="okey"> <p>Received!</p>');
        });
  }
}