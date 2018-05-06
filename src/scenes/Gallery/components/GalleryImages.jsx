import React from 'react';
import ImageGallery from 'react-image-gallery';

export class SetImages extends React.Component {
    constructor(){
        super();
        this.state = {
            showPlayButton: false,
            showBullets: true,
            showThumbnails: true,
            useBrowserFullscreen: false,
            lazyLoad: true,
            autoPlay: false,
            disableArrowKeys: false
        };
    }

    renderSwitch(currentCase) {
        let basePath = process.env.PUBLIC_URL + "/images/";
        let imageArray = [];
        let currentSubFolder;
        let numberOfImages;

        switch(currentCase) {
            case 'imagesProject1a':
                currentSubFolder="1.Onderhoud_en_reinigen/Tuin/";
                numberOfImages = 7;
                for (let i = 1; i <= numberOfImages; i++) {
                    imageArray.push({
                        original: basePath + currentSubFolder + i +'.jpg',
                        thumbnail: basePath + currentSubFolder + i +'.jpg'
                    });
                }
                return imageArray;

            case 'imagesProject1b':
                currentSubFolder="1.Onderhoud_en_reinigen/Gebouwen/";
                numberOfImages = 1;
                for (let i = 1; i <= numberOfImages; i++) {
                    imageArray.push({
                        original: basePath + currentSubFolder + i +'.jpg',
                        thumbnail: basePath + currentSubFolder + i +'.jpg'
                    });
                }
                return imageArray;

            case 'imagesProject2':
                currentSubFolder="2.Afbraakwerken/";
                numberOfImages = 7;
                for (let i = 1; i <= numberOfImages; i++) {
                    imageArray.push({
                        original: basePath + currentSubFolder + i +'.jpg',
                        thumbnail: basePath + currentSubFolder + i +'.jpg'
                    });
                }
                return imageArray;
                
            case 'imagesProject3':
                currentSubFolder="3.Sanitaire_klussen/";
                numberOfImages = 7;
                for (let i = 1; i <= numberOfImages; i++) {
                    imageArray.push({
                        original: basePath + currentSubFolder + i +'.jpg',
                        thumbnail: basePath + currentSubFolder + i +'.jpg'
                    });
                }
                return imageArray;

            case 'imagesProject4':
                currentSubFolder="4.Isolatie/";
                numberOfImages = 4;
                for (let i = 1; i <= numberOfImages; i++) {
                    imageArray.push({
                        original: basePath + currentSubFolder + i +'.jpg',
                        thumbnail: basePath + currentSubFolder + i +'.jpg'
                    });
                }
                return imageArray;
                
            case 'imagesProject5':
                currentSubFolder="5.valse_wanden_en _plafonds_uitwerken_zolder/";
                numberOfImages = 10;
                for (let i = 1; i <= numberOfImages; i++) {
                    imageArray.push({
                        original: basePath + currentSubFolder + i +'.jpg',
                        thumbnail: basePath + currentSubFolder + i +'.jpg'
                    });
                }
                return imageArray;
                
            case 'imagesProject6':
                currentSubFolder="6.herstellingen/";
                numberOfImages = 2;
                for (let i = 1; i <= numberOfImages; i++) {
                    imageArray.push({
                        original: basePath + currentSubFolder + i +'.jpg',
                        thumbnail: basePath + currentSubFolder + i +'.jpg'
                    });
                }
                return imageArray;

            case 'imagesProject7':
                currentSubFolder="7.schilderwerk/";
                numberOfImages = 2;
                for (let i = 1; i <= numberOfImages; i++) {
                    imageArray.push({
                        original: basePath + currentSubFolder + i +'.jpg',
                        thumbnail: basePath + currentSubFolder + i +'.jpg'
                    });
                }
                return imageArray;
                                
            case 'imagesProject8':
                currentSubFolder="8.totaalpakketten/";
                numberOfImages = 2;
                for (let i = 1; i <= numberOfImages; i++) {
                    imageArray.push({
                        original: basePath + currentSubFolder + i +'.jpg',
                        thumbnail: basePath + currentSubFolder + i +'.jpg'
                    });
                }
                return imageArray;
                        
            case 'imagesProject9':
                currentSubFolder="10.tuinhuizen/";
                numberOfImages = 2;
                for (let i = 1; i <= numberOfImages; i++) {
                    imageArray.push({
                        original: basePath + currentSubFolder + i +'.jpg',
                        thumbnail: basePath + currentSubFolder + i +'.jpg'
                    });
                }
                return imageArray;

            case 'imagesProject10':
                currentSubFolder="9.hulp_bij/";
                numberOfImages = 1;
                for (let i = 1; i <= numberOfImages; i++) {
                    imageArray.push({
                        original: basePath + currentSubFolder + i +'.jpg',
                        thumbnail: basePath + currentSubFolder + i +'.jpg'
                    });
                }
                return imageArray;
            default:
                return null;
        }
    }

    render() {
        return(
            <ImageGallery 
                items= {this.renderSwitch(this.props.imageId)}
                showPlayButton={this.state.showPlayButton}
                showBullets={this.state.showBullets}
                showThumbnails={this.state.showThumbnails}
                useBrowserFullscreen={this.state.useBrowserFullscreen}
                lazyLoad={this.state.lazyLoad}
                autoPlay={this.state.autoPlay}
                disableArrowKeys={this.state.disableArrowKeys}
            />
        );
    }
}