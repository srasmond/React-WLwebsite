import React from 'react';
import ImageGallery from 'react-image-gallery';

export class SetImages extends React.Component {
    constructor(){
        super();
        this.state = {
            showPlayButton: true,
            showBullets: false,
            showNav: false,
            showThumbnails: false,
            showFullscreenButton: false,
            useBrowserFullscreen: false,
            lazyLoad: true,
            autoPlay: true,
            disableArrowKeys: true
        };
    }

    render() {
        let basePath = process.env.PUBLIC_URL + "/images/Collage/";
        let imageArray = [];
        let numberOfImages = 7;
        for (let i = 1; i <= numberOfImages; i++) {
            imageArray.push({
                original: basePath + i +'.jpg'
            });
        }
        return(
            <ImageGallery 
                items= {imageArray}
                showPlayButton={this.state.showPlayButton}
                showBullets={this.state.showBullets}
                showNav={this.state.showNav}
                showThumbnails={this.state.showThumbnails}
                showFullscreenButton={this.state.showFullscreenButton}
                useBrowserFullscreen={this.state.useBrowserFullscreen}
                lazyLoad={this.state.lazyLoad}
                autoPlay={this.state.autoPlay}
                disableArrowKeys={this.state.disableArrowKeys}
            />
        );
    }
}