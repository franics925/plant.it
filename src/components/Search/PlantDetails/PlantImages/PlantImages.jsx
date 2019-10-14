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
                <div className={style.MainImage}>
                    <img src={this.state.mainImage}></img>
                </div>

                <div className={style.ImageList}>
                    <ul>
                    {
                        this.props.plantSelectedDetails.images ? 
                        this.props.plantSelectedDetails.images.map((image, idx) =>
                            <div
                                className={style.Image}
                                key={idx}

                            >
                                <img src={`${image.url}`}></img>
                            </div>
                        ) : ``
                    }
                        </ul>
                </div>
            </div>
        );
    }

}

export default PlantImages;





// import React, { Component } from 'react';
// import ReactDOM from 'react-dom';
// import "react-responsive-carousel/lib/styles/carousel.min.css";
// import { Carousel } from 'react-responsive-carousel';
 
// class DemoCarousel extends Component {
//     state = {
//         mainImage=''
//     }

//     render() {
//         return (
//             <Carousel>
//                 <div>
//                     <img src="assets/1.jpeg" />
//                     <p className="legend">Legend 1</p>
//                 </div>
//                 <div>
//                     <img src="assets/2.jpeg" />
//                     <p className="legend">Legend 2</p>
//                 </div>
//                 <div>
//                     <img src="assets/3.jpeg" />
//                     <p className="legend">Legend 3</p>
//                 </div>
//             </Carousel>
//         );
//     }
// });
 
// ReactDOM.render(<DemoCarousel />, document.querySelector('.demo-carousel'));