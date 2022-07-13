const btn = document.getElementById('btn');
const fromName = document.getElementById('from_name');
const fromSurname = document.getElementById('from_surname');
const fromMsg = document.getElementById('txt');
document.getElementById('form').addEventListener('submit', function(event) {
   event.preventDefault();

   btn.value = "En cours d'envoie ...";

   const serviceID = 'service_46h71bo';
   const templateID = 'template_78ugn8j';

   emailjs.sendForm(serviceID, templateID, this)
    .then(() => {
      btn.value = 'Message ';
      alert('Message envoyé avec succès!');
      fromName.value = '';
      fromSurname.value = '';
      fromMsg.value = '';
    }, (err) => {
      btn.value = 'Message';
      alert(JSON.stringify(err));
    });
});
