# cloud-computing Lab 1

## Lab activity Steps
1. Create a google form inside your Google Drive

2. Setup the form so that it collects email addresses by default

    1. goto Settings -> responses -> collect email address and select 'Responder input'

    2. do the same in the Settings -> default -> Form defaults section

3. Go to Responses tab and click on 'view in sheets', a google sheet with the responses opens
4. In the google sheet, click on extensions -> App Scripts, an app script editor opens
5. Write the onSubmit() function (in appscript.js file) and run the script, allow required permissions
6. Click on 'triggers' menu on the left sidebar and create a new trigger for the onSubmit function,
   1.    put source as the google sheet
   2.  put event as 'on form submit' and click on submit

Now whenever user submits the form, an email is sent to the given email address in the form
