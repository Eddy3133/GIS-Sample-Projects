import React from 'react'
import './Works.css'
import MapSampleOne from '../../images/MapSampleOne.PNG'
import MapSampleTwo from '../../images/MapSampleTwo.PNG'
import MapSampleThree from '../../images/MapSampleThree.PNG'
import ScrollToTop from "react-scroll-to-top";


function Works() {
    return (
        
             
        <div className="workcontainer">
            <div className="topic">
            <h1>ArcGIS Online Maps</h1> 
            </div>

            <div className="note">
            <p color="color">Note: All interactive maps in this page were made with the ArcGIS Online platform only and because of that the feature capacity of the maps are limited. The aim of the maps is just to demonstrate my skillset as both a web developer and GIS developer.</p>
            </div>

            <div className="project">
            <h2>Ecological Zones of Manitoba</h2>
            <iframe loading="lazy" width= "1000" height="500" title="Ecological Areas of Manitoba" src="//ed3um6x3suex7ljp.maps.arcgis.com/apps/Embed/index.html?webmap=ba32d417be7c4dc498d82eb298a6c198&extent=-121.1799,46.0032,-69.3684,61.9948&zoom=true&previewImage=false&scale=true&disable_scroll=true&theme=light" />
            <p>The maps above shows the ecological zones within manitoba as well as the surrounding areas. if you <a href="https://ed3um6x3suex7ljp.maps.arcgis.com/home/webmap/viewer.html?webmap=ba32d417be7c4dc498d82eb298a6c198">click here</a> you would be able to see more information about the map.</p>
            </div>

            <a id="test" href="https://caniuse.com/?search=keyframes" >View Ecological Zones Map</a>

            <div className="project">
            <h2>Watershed Map</h2>
            <iframe loading="lazy" width= "1000" height="500" title="Ecological Areas of Manitoba" src="//ed3um6x3suex7ljp.maps.arcgis.com/apps/Embed/index.html?webmap=a63dc8ab534c4c85956f5f16c2d09cc1&extent=-103.6258,48.8016,-90.6729,53.1486&zoom=true&previewImage=false&scale=true&disable_scroll=true&theme=light" />
            <p>This is a simple map that shows some of the watershed in Manitoba, which are categorized by the their respective names. <a target="_blank"  rel="noreferrer" href="https://ed3um6x3suex7ljp.maps.arcgis.com/home/webmap/viewer.html?webmap=a63dc8ab534c4c85956f5f16c2d09cc1">Click here</a> to see the legend  </p>
            </div>

            <div className="project">
            <h2>Manitoba's Health Regions</h2>
            <iframe loading="lazy" width= "1000" height="500" title="Ecological Areas of Manitoba" src="//ed3um6x3suex7ljp.maps.arcgis.com/apps/Embed/index.html?webmap=ce37a660df334651a0bbf7cfd9a10438&extent=-97.4881,49.7403,-96.6786,50.0186&zoom=true&previewImage=false&scale=true&disable_scroll=true&theme=light" />
            <p>This map shows the health regions within Manitoba. <a target="_blank"  rel="noreferrer" href="https://ed3um6x3suex7ljp.maps.arcgis.com/home/webmap/viewer.html?webmap=ce37a660df334651a0bbf7cfd9a10438">click here</a> to see legend</p>
            </div>


            <br>
            
            
            </br>

            <div className="topic">
            <h1>Simple Sample Maps</h1> 
            </div>

            <div className="project">
            <h2>Rat and Roseau River Crossings</h2>
            <img loading="lazy" src={MapSampleOne} alt="Roseau and Rat Map" width= "1000" height="700"/>
            <p>This is one of the last maps I made for an engineer at Manitoba Infrastructure. It shows the cross section points gotten with the use of HECRAS. This map was used for flood analysis for the surrounding areas of the provincial waterways. The map was made with the use of ArcGIS Pro and MS Excel. Excel was used as the CSV file that enabled me to convert the coordinates to points using ArcGIS Pro.</p>
            </div>

            <div className="project">
            <h2>Manitoba Eastern District Map</h2>
            <img loading="lazy" src={MapSampleTwo} alt="Roseau and Rat Map" width= "1000" height="700"/>
            <p>This map was requested by the Superintendent of the Eastern District of Manitoba. I made this map for a print size of 24"x36" that is why the scale of the map looks small. This map was used as a reference map for the Eastern Distrct staffs to properly navigate and locate infrastructure around the provincial waterways.</p>
            </div>

            <div className="project">
            <h2>Contour Map</h2>
            <img loading="lazy" src={MapSampleThree} alt="Roseau and Rat Map" width= "1000" height="700"/>
            <p>This is a basic contour map showing the land elevation of the area of interest. I got the LiDAR data to make this map </p>
            </div>
            <ScrollToTop smooth style={{borderRadius: "50%", backgroundColor: "#4553FE"}} />
        </div>
        
    )
}

export default Works
