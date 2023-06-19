// 1. Create a google form inside google drive
// 2. Setup the form so that it collects email addresses by default, 
//     goto Settings -> responses -> collect email address and select 'Responder input'
//     do the same in the Settings -> default -> Form defaults section
// 3. Go to Responses tab and click on 'view in sheets', a google sheet with the responses opens
// 4. In the google sheet, click on extensions -> App Scripts, an app script editor opens
// 5. Write the onSubmit() function as shown below and run the script, allow required permissions
// 6. Click on 'triggers' menu on the left sidebar and create a new trigger for the onSubmit function,
//       put source as the google sheet
//       put event as 'on form submit' and click on submit
// Now whenever user submits the form, an email is sent to the given email address in the form


function onSubmit(e){
  const myemail = Session.getActiveUser().getEmail();
  const email = e.namedValues['Email Address'][0];


  MailApp.sendEmail({
    to: email,
    subject: "Ice cream flavor survey",
    htmlBody: "Thank you very much for participating in our ice cream flavor survey."
    
  })

}
