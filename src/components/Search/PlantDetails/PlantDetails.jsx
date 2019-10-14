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
                <h4 className={style.CommonName}>{props.plantSelectedDetails.common_name}</h4>
                <p className={style.ScientificName}>{props.plantSelectedDetails.scientific_name}</p>
            </div><hr/>

            <div className={style.Taxonomy}>
                <h3>Taxonomy</h3>

                <div className={style.FamilyCommonName}>
                    <h4>Family Name:  </h4>
                    <p>
                        <h5>
                            Common:
                        </h5>
                        <p>
                            {
                                props.plantSelectedDetails.family_common_name ? 
                                props.plantSelectedDetails.family_common_name : `No Data Exists`
                            }
                        </p>
                        <h5>
                            Scientific:
                        </h5>
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
                    </p>
                </div>

                <div className={style.Genus}>
                    <h4>Genus:  </h4>
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
                
                <div className={style.Order}>
                    <h4>Order: </h4>
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

                <div className={style.PlantClass}>
                    <h4>Class:  </h4>
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

                <div className={style.Division}>
                    <h4>Division:  </h4>
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

                <div className={style.NativeStatus}>
                    <h4>Native Status:  </h4>
                    <p>{
                        props.plantSelectedDetails.native_status ? 
                        props.plantSelectedDetails.native_status : `No Data Exists`
                    }
                    </p>
                </div>

                <div className={style.Varieties}>
                    <h4>Varities:  </h4>
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
            </div><hr/>
            
            <div className={style.Growth}>
                <h4>Growth</h4>

                <div className={style.DroughtTolerance}>
                    <h4>Drought Tolerance:  </h4>
                    <p>{
                        props.plantSelectedDetails.main_species ? 
                        props.plantSelectedDetails.main_species.growth.drought_tolerance
                        : `No Data Exists`
                    }
                    </p>
                </div>

                <div className={style.PrecipMin}>
                    <h4>Minimum Precipitation (inches/year):  </h4>
                    <p>{
                        props.plantSelectedDetails.main_species ? 
                        props.plantSelectedDetails.main_species.growth.precipitation_minimum.inches
                        : `No Data Exists`
                    }
                    </p>
                </div>

                <div className={style.PrecipMax}>
                    <h4>MaximumPrecipitation (inches/year):  </h4>
                    <p>{
                        props.plantSelectedDetails.main_species ? 
                        props.plantSelectedDetails.main_species.growth.precipitation_maximum.inches
                        : `No Data Exists`
                    }
                    </p>
                </div>  

                <div className={style.MinRootDepth}>
                    <h4>Minimum Root Depth (inches):  </h4>
                    <p>{
                        props.plantSelectedDetails.main_species ? 
                        props.plantSelectedDetails.main_species.growth.root_depth_minimum.inches
                        : `No Data Exists`
                    }
                    </p>
                </div>

                <div className={style.MinRootDepth}>
                    <h4>Mature Height (feet):  </h4>
                    <p>{
                        props.plantSelectedDetails.main_species ? 
                        props.plantSelectedDetails.main_species.specifications.mature_height.ft
                        : `No Data Exists`
                    }
                    </p>
                </div>

                <div className={style.ShadeTolerance}>
                    <h4>Shade Tolerance:  </h4>
                    <p>{
                        props.plantSelectedDetails.main_species ? 
                        props.plantSelectedDetails.main_species.growth.shade_tolerance
                        : `No Data Exists`
                    }
                    </p>
                </div>

                <div className={style.MinTemp}>
                    <h4>Minimum Temp (F):  </h4>
                    <p>{
                        props.plantSelectedDetails.main_species ? 
                        props.plantSelectedDetails.main_species.growth.temperature_minimum.deg_f
                        : `No Data Exists`
                    }
                    </p>
                </div>

                <div className={style.Duration}>
                    <h4>Duration:  </h4>
                    <p>{
                        props.plantSelectedDetails.duration ? 
                        props.plantSelectedDetails.duration 
                        : `No Data Exists`
                    }
                    </p>
                </div>

                <div className={style.Flower}>
                    <h4>Flower Color:  </h4>
                    <p>{
                        props.plantSelectedDetails.main_species? 
                        props.plantSelectedDetails.main_species.flower.color : `No Data Exists`
                    }
                    </p>
                </div>
            </div>
        </ul>
    </div>
)

export default PlantDetails;