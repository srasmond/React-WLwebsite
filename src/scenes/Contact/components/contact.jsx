import React from 'react';
import {ContactForm} from './form.jsx';

export class Contact extends React.Component{
  render(){
      return (
      <div className="fc-tab-5">
        <div className="contact-container">
          <div className="row">
            <div className="col-md-6">
              <div className="contact-form">
                <div className="heading">
                  <h2>Contact formulier</h2>
                </div>
                <p id="userMessage"></p>
                <ContactForm/>
              </div>
            </div>
            <div className="col-md-6">
              <div className="more-info">
                <p id="infoText">
                  Heeft u nog een andere klus, alles is bespreekbaar, de mogelijkheden zijn eindeloos.
                  <br /> Neem gerust contact op via <a href="mailto:info@willemloreinklusjesdienst.be"><em>mail</em></a>, <em>telefoon</em> of het <em>formulier</em> op deze pagina en stel uw vraag! 
                  <br /><br /><br /><br />
                </p>
                <p id="basicInformation">
                  <em>Willem Lorein Klusjesdienst </em><br />Geraardsbergsevoetweg 17, 9820 Merelbeke <br /><br /> Tel.: 0474/24.88.15<br />E-mail: <a href="mailto:info@willemloreinklusjesdienst.be">info@willemloreinklusjesdienst.be</a><br />BTW: BE 0629.932.846.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}