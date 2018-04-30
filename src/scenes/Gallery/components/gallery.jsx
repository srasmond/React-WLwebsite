import React from 'react';
import ReactDOM from 'react-dom';
import {Dropdown} from './dropdown.jsx'
import {SetImages} from './galleryImages.jsx';

import "./vendor/css/image-gallery.css";

export class Gallery extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            bsSize: "small",
            title: "Kies een thema",
            id: "project-kiezer"
        }
        this.onSelection = this.onSelection.bind(this);
    }
    onSelection(itemIndex) {
        const element = <SetImages imageId={"imagesProject"+itemIndex}  />
        ReactDOM.render(
            element,
            document.getElementById('dynamicImageShower')
        );
    }
    render(){
        const myDropdown = (
            <Dropdown 
                bsSize={this.state.bSize}
                title={this.state.title}
                id={this.state.id}
                onSelect={this.onSelection}
            />
        );
        return(
            <div className="fc-tab-4">
                <div className="gallery-container">
                    <div id="dropDownGallery"> 
                        {myDropdown} 
                    </div>
                    <div id="dynamicImageShower">
                    </div>
                </div>
            </div>
        );        
    }
}