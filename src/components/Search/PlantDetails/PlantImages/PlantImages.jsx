import React, { Component } from 'react';
import style from './PlantImages.module.css';

class PlantImages extends Component {
    state = {
        mainImage: '',
        index: 0,
        imageList: []
    }


    render() {
        return(
            <div className={style.Images}>
                {this.handleClearImageArray}
                <div className={style.MainImage}>
                    <img src={`${this.state.mainImage}`}></img>
                </div>

                <div className={style.ImageList}>
                    {
                        this.props.plantSelectedDetails.images ? 
                        this.props.plantSelectedDetails.images.map((image, idx) =>
                            <div
                                className={style.Image}
                                key={idx}
                                pushImages = {this.state.imageList.push(image.url)}
                            >
                                <img 
                                    src={`${image.url}`}
                                    onClick={this.handleClickOnImage}
                                >
                                </img>
                            </div>
                        ) : ``
                    }
                </div>
            </div>
        );
    }

}

export default PlantImages;
