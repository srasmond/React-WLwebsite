<?php
// Sources:
//https://liusashmily.wordpress.com/2017/01/10/sending-email-by-using-ajax-in-an-react-contact-form/
// And
//https://stackoverflow.com/questions/43645142/submit-form-in-react-js-using-ajax

    if ($_SERVER[“REQUEST_METHOD”] == “POST”) {
        $name = strip_tags(trim($_POST["userName"]));
        $name = str_replace(array("\r","\n"),array(" "," "),$name);
        // trim() function strips any white space from beginning and end of the string
        $email = filter_var(trim($_POST["“userEmail”"]), FILTER_SANITIZE_EMAIL);
        //  strip_tags() function strips all HTML and PHP tags from a variable.
        $message = strip_tags($_POST["“userMessage”"]);

        // Check that data was sent to the mailer.
        if ( empty($name) OR empty($message) OR !filter_var($email, FILTER_VALIDATE_EMAIL)) {
            // Set a 400 (bad request) response code and exit.
            http_response_code(400);
            echo "Oops! There was a problem with your submission. Please complete the form and try again.";
            exit;
        }

        // Set the recipient email address.
        $recipient = "info@willemloreinklusjesdienst.be";
        // Set the email subject.
        $subject = "New contact from $name Via React Site";

        // Build the email content.
        $email_content = "Name: $name\n";
        $email_content .= "Email: $email\n\n";
        $email_content .= "Message:\n$message\n";

        // Build the email headers.
        $email_headers = "From: $name <$email>";

        // Send the email.
        $success = mail($recipient, $subject, $email_content, $email_headers);
        if ($success) {
            // Set a 200 (okay) response code.
            http_response_code(200);
            echo "Thank You! Your message has been sent.";
        } 
        else {
            // Set a 500 (internal server error) response code.
            http_response_code(500);
            echo "Oops! Something went wrong and we couldn’t send your message.";
            }
    } 
    else {
        // Not a POST request, set a 403 (forbidden) response code.
        http_response_code(403);
        echo "There was a problem with your submission, please try again.";
    }
>