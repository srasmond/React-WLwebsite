import React from 'react';
import { Link } from 'react-router-dom';
import {SetImages} from './HomeImages.jsx';
import "./vendor/css/image-gallery.css";

export class Home extends React.Component{
  render(){
    var pathname = this.props.pathname;
    return (
      <div className="fc-tab-1"> 
        <div className="home-container">
          <div className="row">
            <div className="col-md-6">
              <div className="left-content">
                <div className="left-line"></div>  
                <h2>Welkom op de website van <em>Willem Lorein Klusjesdienst!</em></h2>
                <p>Uw verbeelding is mijn uitdaging! </p>
                <div className="primary-button">
                  <Link to="/about" className={pathname === '/about'?"current":null}>Ga verder</Link>
                </div>
              </div>
            </div>
            <div className="col-md-6">
              <div className="right-content">
                <SetImages />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}