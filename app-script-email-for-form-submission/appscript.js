function onSubmit(e){
  const myEmail = Session.getActiveUser().getEmail();
  const email = e.namedValues['Email Address'][0];


  MailApp.sendEmail({
    to: email,
    subject: "Ice cream flavor survey",
    htmlBody: "Thank you very much for participating in our ice cream flavor survey."
    
  })

}
