import React, { Component } from 'react';
import style from './PlantImages.module.css';

class PlantImages extends Component {
    state = {
        mainImage: '',
        index: 0,
        imageList: []
    }

    handleClickOnImage = async (event) => {

        console.log(event._id);
        console.log(event.target._id);
    }

    handleClearImageArray = () => {
        this.setState({
            imageList: []
        })
    }

    render() {
        return(
            <div className={style.Images}>
                {this.handleClearImageArray}
                <div className={style.MainImage}>
                    <img src={`${this.state.imageList[0]}`}></img>
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
