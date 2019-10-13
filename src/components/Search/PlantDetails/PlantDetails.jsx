import React from 'react';
import style from './PlantDetails.module.css';
import Preloader from '../../Preloader/Preloader';

const PlantDetails = (props) => (

    // image = props.plantSelectedDetails.images[0].url;
    <div className={style.PlantDetails}>
    {props.selectedPlantDetails}
        {}
        <ul>
        {props.plantDetailsLoading && < Preloader />}
        <div className={style.Images}>
                <h4>Pic links:  </h4>
                <p>{
                    props.plantSelectedDetails.images ? 
                    props.plantSelectedDetails.images.map((image, idx) =>
                        <div
                            className={style.Images}
                            key={idx}
                        >
                            <p>{image.url}</p>
                        </div>
                    ) : `No Data Exists`
                }
                </p>
            </div><hr/>

            <div className={style.CommonName}>
                <h4>Common Name:  </h4>
                <p>{
                    props.plantSelectedDetails.common_name ? 
                    props.plantSelectedDetails.common_name : `No Data Exists`
                }
                </p>
            </div><hr/>

            <div className={style.ScientificName}>
                <h4>Scientific Name:  </h4>
                <p>{
                    props.plantSelectedDetails.scientific_name ? 
                    props.plantSelectedDetails.scientific_name : `No Data Exists`
                }
                </p>
            </div><hr/>

            <div className={style.FamilyCommonName}>
                <h4>Family:  </h4>
                <p>
                    <h6>
                        Common Name:
                    </h6>
                    <p>
                        {
                            props.plantSelectedDetails.family_common_name ? 
                            props.plantSelectedDetails.family_common_name : `No Data Exists`
                        }
                    </p>
                    <h6>
                        Scientific Name:
                    </h6>
                    <p>
                        {
                            props.plantSelectedDetails.family ? 
                            props.plantSelectedDetails.family.name : `No Data Exists`
                        }
                    </p>
                </p>
            </div><hr/>


            <div className={style.Duration}>
                <h4>Duration:  </h4>
                <p>{
                    props.plantSelectedDetails.duration ? 
                    props.plantSelectedDetails.duration : `No Data Exists`
                }
                </p>
            </div><hr/>

            <div className={style.NativeStatus}>
                <h4>Native Status:  </h4>
                <p>{
                    props.plantSelectedDetails.native_status ? 
                    props.plantSelectedDetails.native_status : `No Data Exists`
                }
                </p>
            </div><hr/>

            <div className={style.Varieties}>
                <h4>Varities:  </h4>
                <p>{
                    props.plantSelectedDetails.varieties ? 
                    props.plantSelectedDetails.varieties.map((variety, idx) =>
                        <div
                            className={style.Variety}
                            key={idx}
                        >
                            <p>{variety.scientific_name}</p>
                        </div>
                    ) : `No Data Exists`
                }
                </p>
            </div>



            {/* <div className={style.PlantClass}>
                {props.Plant}
            </div> */}
        

            {/* {for (var property in plant) {
                if object.hasOwnProperty(property){
                    console.log(property)
                }
            }}

            {props.plantSelectedDetails.map((detail, idx) =>

                    <div 
                        className={style.commonName}
                        key={idx}
                    > 
                        <h3>{detail, idx}</h3>
                    </div>
            )} */}
        </ul>
    </div>
)

export default PlantDetails;