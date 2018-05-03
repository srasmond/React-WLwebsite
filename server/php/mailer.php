<?php
// Sources:
//https://liusashmily.wordpress.com/2017/01/10/sending-email-by-using-ajax-in-an-react-contact-form/
// And
//https://stackoverflow.com/questions/43645142/submit-form-in-react-js-using-ajax

    if ($_POST) {
        $name = strip_tags(trim($_POST["userName"]));
        $name = str_replace(array("\r","\n"),array(" "," "),$name);
        // trim() function strips any white space from beginning and end of the string
        $email = filter_var(trim($_POST["userEmail"]), FILTER_SANITIZE_EMAIL);
        //  strip_tags() function strips all HTML and PHP tags from a variable.
        $message = strip_tags($_POST["userMessage"]);

        // Check that data was sent to the mailer.
            //var_dump($email);
            //var_dump($name);
            //var_dump($message);
        if ( empty($name) OR empty($message) OR !filter_var($email, FILTER_VALIDATE_EMAIL)) {
            // Set a 400 (bad request) response code and exit.
            http_response_code(400);
            echo "Oei! Er was een probleem met uw verzending. Gelieve het formulier opnieuw in te vullen en door te sturen";
            exit;
        }

        // Set the recipient email address.
        $recipient = "info@willemloreinklusjesdienst.be";
        // Set the email subject.
        $subject = "Nieuw bericht van $name";

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
            echo "Bedankt! Uw bericht werd verzonden en zal spoedig beantwoord worden.";
        } 
        else {
            // Set a 500 (internal server error) response code.
            http_response_code(500);
            echo "Oei! Er is iets misgegaan. Wij kunnen momenteel uw bericht niet verzenden.";
            }
    }
    else {
        // Not a POST request, set a 403 (forbidden) response code.
        http_response_code(403);
        echo "Er was een probleem met uw verzending, gelieve opnieuw te proberen.";
    };
?>