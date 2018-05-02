import React from 'react';
import $ from 'jquery'; 

export class ContactForm extends React.Component {
    constructor() {
      super();
      this.handleSubmit = this.handleSubmit.bind(this);
      this.handleNameChange = this.handleNameChange.bind(this);
      this.handleEmailChange = this.handleEmailChange.bind(this);
      this.handleMessageChange = this.handleMessageChange.bind(this);
      this.state = {
        contactName: "",
        contactEmail: "",
        contactMessage: ""
      };
    }
    // Change state of input field so text is updated while typing
    handleNameChange(e) {
      this.setState({
        contactName: e.target.value,
      });
    }
    handleEmailChange(e) {
      this.setState({
        contactEmail: e.target.value,
      });
    }
    handleMessageChange(e) {
      this.setState({
        contactMessage: e.target.value,
      });
    }
    

    handleSubmit(event) {
/*      
      if (!event.target.checkValidity()) {
        this.setState({ displayErrors: true });
        return;
      }
      // form is valid! We can parse and submit data
      this.setState({ displayErrors: false });
*/
      event.preventDefault();
      //this.setState({
       // contactEmail: '',
        //contactMessage: ''
      //});
      this.setState({ type: "info", message: "Sending..." });
      $.ajax({
        url: process.env.NODE_ENV !== "production" ? "../../../server/mailer.php" : "https://www.home.willemloreinklusjesdienst.be/server/php/mails/mailer.php",
        //url: "/../mailer.php",
        type: "POST",
        data: {
          userName: this.state.contactName,
          userEmail: this.state.contactEmail,
          userMessage: this.state.contactMessage
        },
        cache: false,
        success: function(data) {
          let responseSuccess = data.message;
          // Success..
          this.setState({ type: "success", message: responseSuccess });

          //this.setState({ type: "success", message: "We have received your message and will get in touch shortly. Thanks!" });
          $('#formContact').slideUp();
          $('#formContact').after(this.state.message);
          console.log('success', data);
        }.bind(this),
        // Fail
        error: function(xhr, status, err) {
          console.log(xhr, status);
          console.log(err);
          let responseFail = err.message;
          this.setState({ type: "danger", message: responseFail });
          //this.setState({ type: "danger", message: "Sorry, there has been an error.  Please try again later or visit us at SZB 438." });
          console.log(this.state.message + 'fail');
        }.bind(this)
      });
        
        
      /* TODO:
      * Correctly retrieve data
      * Send to email via API
      */
     /*
      const data = new FormData(event.target);
      console.log(data.values);
      fetch('/api/form-submit-url', {
        method: 'POST',
        body: data,
      });
      */
    }
  
    render() {
      const displayErrors  = this.state;
      return (
        <form 
            id="contactForm" 
            className={displayErrors ? 'displayErrors' : ''}
            method="POST"
            action="mailer.php"
            onSubmit={this.handleSubmit}  
        >
          <input 
            type="text" 
            name="userName" 
            id="userName"
            value={this.state.contactName} 
            className="form-control" 
            placeholder="Uw volledige naam"
            onChange={this.handleNameChange}
            required 
          />
  
          <input 
            type="email" 
            name="userEmail" 
            id="userEmail"
            value={this.state.contactEmail}
            className="form-control" 
            placeholder="E-mail"
            onChange={this.handleEmailChange}
            required 
          />

          <textarea 
            name="userMessage" 
            id="userMessage"
            value={this.state.contactMessage} 
            rows="6" 
            className="form-control" 
            placeholder="Uw bericht, feedback, vragen, ..."
            onChange={this.handleMessageChange}
            required
          >
          </textarea>
  
          <button id="form-submit" className="btn">Versturen</button>
        </form>
      );
    }
  }