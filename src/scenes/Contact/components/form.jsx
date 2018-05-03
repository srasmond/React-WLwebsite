import React from 'react';
import $ from 'jquery'; 

export class ContactForm extends React.Component {
    constructor() {
      super();
      this.state = {
        contactName: "",
        contactEmail: "",
        contactMessage: "",
        type: "",
        message: ""
      };
      this.handleSubmit = this.handleSubmit.bind(this);
      this.handleNameChange = this.handleNameChange.bind(this);
      this.handleEmailChange = this.handleEmailChange.bind(this);
      this.handleMessageChange = this.handleMessageChange.bind(this);
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
    handleSubmit(e) {
      e.preventDefault();
      this.setState({
        type: "info",
        message: "Sending..."
      });
      $.ajax({
        url: "https://www.willemloreinklusjesdienst.be/php/mailer.php",
        type: "POST",
        data: {
          userName: this.state.contactName,
          userEmail: this.state.contactEmail,
          userMessage: this.state.contactMessage
        },
        cache: false,
        success: function(data) {
          let responseSuccess = data;
          // Success..
          console.log("OK");
          this.setState({
            contactName: "success",
            contactEmail: "success",
            contactMessage: "OK",
            type: "success",
            message: responseSuccess + "<br/><br/><br/>"
          });
          // Remove the contact form and show success message
          $('#contactForm').slideUp();
          $('#infoText').slideUp();
          $('#userMessage').html(this.state.message);
          //$('#contactForm').after(this.state.message);
          console.log('success', data);
        }.bind(this),
        // Fail
        error: function(xhr, status, err) {
          console.log("NOK");
          console.log(xhr, status);
          console.log(err);
          let responseFail = xhr.responseText;
          this.setState({
            type: "danger",
            message: responseFail + "<br/><br/><br/>"
          });
          // Show error message to the user
          $('#userMessage').html(this.state.message);
          console.log(this.state.message + ' fail');
        }.bind(this)
      });
    }
  
    render() {
      //const displayErrors  = this.state;
      return (
        <form 
            id="contactForm" 
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