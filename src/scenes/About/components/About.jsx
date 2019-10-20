import React from 'react';
import { Link } from 'react-router-dom';
//import footerImage from './img/bridge-2934151_1920.png';
import footerImage from './img/1.jpg';

export class About extends React.Component{
    render(){
        var pathname = this.props.pathname;
        return (
         <div className="fc-tab-2">
            <div className="about-container">
              <div className="row">
                <div className="col-md-12">
                  <h2>Meer info over <em>Willem Lorein Klusjesdienst</em></h2>
                  <div className="under-line"></div>
                    Particulier en Bedrijf<br />
                    Correcte prijzen<br />
                    Flexibel<br />
                    Perfecte afwerking<br />
                  <br />
                  <p>Na enkele jaren voor een baas te werken in de bouw, was ik klaar voor het avontuur om volledig zelfstandig te worden. <br />
                  Het klussen is mijn passie om zo mensen uit de nood te helpen. 
                  <br /><br /></p>
                  <p>Neem gerust een kijkje in mijn <Link to="/projects" className={pathname === '/projects'?"current":null}><em>projecten</em></Link> voor het volledige gamma aan klussen die ik al uitgevoerd heb.
                  <br />
                  Uiteraard is de lijst niet beperkend en kan een oplossing op maat voor uw specifiek probleem voorgesteld worden.<br />
                  <i>Uw verbeelding is mijn uitdaging!</i>
                  <br /><br />
                  Advies of een afspraak maken? Ga snel naar het tabblad <Link to="/contact" className={pathname === '/contact'?"current":null}><em>contact</em></Link>.</p>
                  <img src={footerImage}
                  alt="" />
                </div>
              </div>
            </div>
          </div>
        );
    }
}