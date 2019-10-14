import React from 'react';
import style from './PlantDetails.module.css';
import Preloader from '../../Preloader/Preloader';
import PlantImages from './PlantImages/PlantImages';

const TREFLE_TOKEN = "REMwZDF3cStYN28vZkJTeU9tWm9Bdz09";

const PlantDetails = (props) => (

    <div className={style.PlantDetails}>
        <ul>
            {props.plantDetailsLoading && < Preloader />}
            < PlantImages 
                {...props}
            />

            <div className={style.Name}>
                <h2 className={style.CommonName}>{props.plantSelectedDetails.common_name}</h2>
                <h6 className={style.ScientificName}>{props.plantSelectedDetails.scientific_name}</h6>
            </div><hr/>

            <div className={style.Taxonomy}>
                <h4>Taxonomy</h4><hr/>

                <div className={style.PlantClass}>
                    <h5>Class:  </h5>
                    <p>{
                        props.plantSelectedDetails.class ? 
                        <a href={`${props.plantSelectedDetails.class.link}?token=${TREFLE_TOKEN}`}
                            target="_blank" rel="noopener noreferrer"
                            >
                            {props.plantSelectedDetails.class.name}
                        </a> 
                        : `No Data Exists`
                    }
                    </p>
                </div>

                <div className={style.Order}>
                    <h5>Order: </h5>
                    <p>{
                        props.plantSelectedDetails.order ? 
                        <a href={`${props.plantSelectedDetails.order.link}?token=${TREFLE_TOKEN}`}
                            target="_blank" rel="noopener noreferrer"
                            >
                            {props.plantSelectedDetails.order.name}
                        </a> 
                        : `No Data Exists`
                    }
                    </p>
                </div>

                <div className={style.FamilyCommonName}>
                    <h5>Family:  </h5>
                        <p>{
                        props.plantSelectedDetails.family? 
                        <a href={`${props.plantSelectedDetails.family.link}?token=${TREFLE_TOKEN}`}
                            target="_blank" rel="noopener noreferrer"
                        >
                            {props.plantSelectedDetails.family.name}
                        </a> 
                        : `No Data Exists`
                        }
                        </p>
                </div>

                <div className={style.Genus}>
                    <h5>Genus:  </h5>
                    <p>{
                        props.plantSelectedDetails.genus? 
                        <a href={`${props.plantSelectedDetails.genus.link}?token=${TREFLE_TOKEN}`}
                            target="_blank" rel="noopener noreferrer"
                        >
                            {props.plantSelectedDetails.genus.name}
                        </a> 
                        : `No Data Exists`
                    }
                    </p>
                </div>
                

                <div className={style.Division}>
                    <h5>Division:  </h5>
                    <p>{
                        props.plantSelectedDetails.division? 
                        <a href={`${props.plantSelectedDetails.division.link}?token=${TREFLE_TOKEN}`}
                            target="_blank" rel="noopener noreferrer"
                            >
                            {props.plantSelectedDetails.division.name}
                        </a> 
                        : `No Data Exists`
                    }
                    </p>
                </div>

                <div className={style.Varieties}>
                    <h5>Varities:  </h5>
                    <p>{
                        props.plantSelectedDetails.varieties ? 
                        props.plantSelectedDetails.varieties.map((variety, idx) =>
                            <div
                                className={style.Variety}
                                key={idx}
                            >

                                <a href={`${variety.link}?token=${TREFLE_TOKEN}`}
                                target="_blank" rel="noopener noreferrer"
                            >
                            {variety.scientific_name}
                        </a> 
                            </div>
                        ) : `No Data Exists`
                    }
                    </p>
                </div>
                
                <div className={style.NativeStatus}>
                    <h5>Native Status:  </h5>
                    <p>{
                        props.plantSelectedDetails.native_status ? 
                        props.plantSelectedDetails.native_status : `No Data Exists`
                    }
                    </p>
                </div>
                
            </div><hr/>
            
            <div className={style.Growth}>
                <h4>Growth</h4><hr/>

                <div className={style.Duration}>
                    <h5>Duration:  </h5>
                    <p>{
                        props.plantSelectedDetails.duration ? 
                        props.plantSelectedDetails.duration 
                        : `No Data Exists`
                    }
                    </p>
                </div>

                <div className={style.Flower}>
                    <h5>Flower Color:  </h5>
                    <p>{
                        props.plantSelectedDetails.main_species? 
                        props.plantSelectedDetails.main_species.flower.color : `No Data Exists`
                    }
                    </p>
                </div>

                <div className={style.DroughtTolerance}>
                    <h5>Drought Tolerance:  </h5>
                    <p>{
                        props.plantSelectedDetails.main_species ? 
                        props.plantSelectedDetails.main_species.growth.drought_tolerance
                        : `No Data Exists`
                    }
                    </p>
                </div>

                <div className={style.ShadeTolerance}>
                    <h5>Shade Tolerance:  </h5>
                    <p>{
                        props.plantSelectedDetails.main_species ? 
                        props.plantSelectedDetails.main_species.growth.shade_tolerance
                        : `No Data Exists`
                    }
                    </p>
                </div>

                <div className={style.MinTemp}>
                    <h5>Minimum Temp (F):  </h5>
                    <p>{
                        props.plantSelectedDetails.main_species ? 
                        props.plantSelectedDetails.main_species.growth.temperature_minimum.deg_f
                        : `No Data Exists`
                    }
                    </p>
                </div>

                <div className={style.PrecipMin}>
                    <h5>Minimum Precipitation (inches/year):  </h5>
                    <p>{
                        props.plantSelectedDetails.main_species ? 
                        props.plantSelectedDetails.main_species.growth.precipitation_minimum.inches
                        : `No Data Exists`
                    }
                    </p>
                </div>

                <div className={style.PrecipMax}>
                    <h5>MaximumPrecipitation (inches/year):  </h5>
                    <p>{
                        props.plantSelectedDetails.main_species ? 
                        props.plantSelectedDetails.main_species.growth.precipitation_maximum.inches
                        : `No Data Exists`
                    }
                    </p>
                </div>  

                <div className={style.MinRootDepth}>
                    <h5>Minimum Root Depth (inches):  </h5>
                    <p>{
                        props.plantSelectedDetails.main_species ? 
                        props.plantSelectedDetails.main_species.growth.root_depth_minimum.inches
                        : `No Data Exists`
                    }
                    </p>
                </div>

                <div className={style.MinRootDepth}>
                    <h5>Mature Height (feet):  </h5>
                    <p>{
                        props.plantSelectedDetails.main_species ? 
                        props.plantSelectedDetails.main_species.specifications.mature_height.ft
                        : `No Data Exists`
                    }
                    </p>
                </div>
            </div>
        </ul>
    </div>
)

export default PlantDetails;