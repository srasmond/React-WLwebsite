import React from 'react';
import wlData from '../../../../wlData.json';

import "./vendor/css/image-gallery.css";

const basePath = process.env.PUBLIC_URL + "/images/";

export class ProjectDefault extends React.Component{
    render(){
        return (
            <div>
                <div className="projectContentText" dangerouslySetInnerHTML= { {__html: wlData.menu_items.item3.sub_items.sub_item1.content.body} }>
                </div>
            </div>
        );
    };
};

export class Project1a extends React.Component{
    render(){
        let currentSubFolder = "1.Onderhoud_en_reinigen/Tuin/";
        return (
             <div>
                 <div className="projectContentText" dangerouslySetInnerHTML= { {__html: wlData.menu_items.item3.sub_items.sub_item2.sub_sub_items.sub_sub_item1.content.body} }>
                </div>
                <div className="projectImage">
                    <img src= {basePath + currentSubFolder + "7.jpg"} alt=""/>
                </div>
            </div>    
        );
    };
};

export class Project1b extends React.Component{
    render(){
        let currentSubFolder = "1.Onderhoud_en_reinigen/Gebouwen/";
        return (
            <div> 
                <div className="projectContentText" dangerouslySetInnerHTML= { {__html: wlData.menu_items.item3.sub_items.sub_item2.sub_sub_items.sub_sub_item2.content.body} }> 
                </div>
                <div className="projectImage">
                    <img src= {basePath + currentSubFolder + "1.jpg"} alt=""/>
                </div>
            </div>
        );
    };
};

export class Project2 extends React.Component{
    render(){
        let currentSubFolder = "2.Afbraakwerken/";
        return (
            <div> 
                <div className="projectContentText" dangerouslySetInnerHTML= { {__html: wlData.menu_items.item3.sub_items.sub_item3.content.body} }>
                </div>
                <div className="projectImage specialSize">
                    <img src= {basePath + currentSubFolder + "7.jpg"} alt=""/>
                </div>
            </div>
        );
    };
};

export class Project3 extends React.Component{
    render(){
        let currentSubFolder = "3.Sanitaire_klussen/";
        return (
            <div> 
                <div className="projectContentText" dangerouslySetInnerHTML= { {__html: wlData.menu_items.item3.sub_items.sub_item4.content.body} }> 
                </div>
                <div className="projectImage specialSize">
                    <img src= {basePath + currentSubFolder + "8.jpg"} alt=""/>
                </div>
            </div>
        );
    };
};

export class Project4 extends React.Component{
    render(){
        let currentSubFolder = "4.Isolatie/";
        return (
           <div> 
               <div className="projectContentText" dangerouslySetInnerHTML= { {__html: wlData.menu_items.item3.sub_items.sub_item5.content.body} }>
                </div>
                <div className="projectImage">
                    <img src= {basePath + currentSubFolder + "1.jpg"} alt=""/>
                </div>
            </div>
        );
    };
};

export class Project5 extends React.Component{
    render(){
        let currentSubFolder = "5.valse_wanden_en _plafonds_uitwerken_zolder/";
        return (
            <div> 
                <div className="projectContentText" dangerouslySetInnerHTML= { {__html: wlData.menu_items.item3.sub_items.sub_item6.content.body} }>  
                </div>
                <div className="projectImage specialSize">
                    <img src= {basePath + currentSubFolder + "11.jpg"} alt=""/>
                </div>
            </div>
        );
    };
};

export class Project6 extends React.Component{
    render(){
        let currentSubFolder = "6.herstellingen/";
        return (
            <div> 
                <div className="projectContentText" dangerouslySetInnerHTML= { {__html: wlData.menu_items.item3.sub_items.sub_item7.content.body} }>
                </div>
                <div className="projectImage">
                    <img src= {basePath + currentSubFolder + "2.jpg"} alt=""/>
                </div>
            </div>
        );
    };
};

export class Project7 extends React.Component{
    render(){
        let currentSubFolder = "7.schilderwerk/";
        return (
            <div> 
                <div className="projectContentText" dangerouslySetInnerHTML= { {__html: wlData.menu_items.item3.sub_items.sub_item8.content.body} }>  
                </div>
                <div className="projectImage moreRoomToFill">
                    <img src= {basePath + currentSubFolder + "3.jpg"} alt=""/>
                </div>
            </div>
        );
    };
};

export class Project8 extends React.Component{
    render(){
        let currentSubFolder = "8.totaalpakketten/";
        return (
            <div> 
                <div className="projectContentText" dangerouslySetInnerHTML= { {__html: wlData.menu_items.item3.sub_items.sub_item9.content.body} }>
                </div>
                <div className="projectImage moreRoomToFill">
                    <img src= {basePath + currentSubFolder + "2.jpg"} alt=""/>
                </div>
            </div>
        );
    };
};

export class Project9 extends React.Component{
    render(){
        let currentSubFolder = "10.tuinhuizen/";
        return (
            <div> 
                <div className="projectContentText" dangerouslySetInnerHTML= { {__html: wlData.menu_items.item3.sub_items.sub_item10.content.body} }>
                </div>
                <div className="projectImage moreRoomToFill">
                    <img src= {basePath + currentSubFolder + "1.jpg"} alt=""/>
                </div>
            </div>
        );
    };
};

export class Project10 extends React.Component{
    render(){
        let currentSubFolder = "9.hulp_bij/";
        return (
            <div> 
                <div className="projectContentText" dangerouslySetInnerHTML= { {__html: wlData.menu_items.item3.sub_items.sub_item11.content.body} }>
                </div>
                <div className="projectImage moreRoomToFill">
                    <img src= {basePath + currentSubFolder + "1.jpg"} alt=""/>
                </div>
            </div>
        );
    };
};
