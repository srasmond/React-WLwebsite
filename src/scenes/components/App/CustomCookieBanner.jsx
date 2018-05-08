import React from 'react';

import CookieBanner from 'react-cookie-banner';

export class CustomCookieBanner extends React.Component{
    constructor() {
        super();
        this.state = {
            dismissOnScroll: false,
            message: "",
        };
    }

    message = "Deze website gebruikt cookies om uw surf-ervaring te verbeteren. Door op deze site te blijven gaat u hiermee akkoord."
    
    render(){
        return (
            <div>
                <CookieBanner
                    message={this.message}
                    buttonMessage='Sluiten'
                    dismissOnScroll={this.state.dismissOnScroll}
                    cookie="user-has-accepted-cookies"
                />
            </div>
        );
    }
}