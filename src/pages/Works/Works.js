import React from 'react'
import './Works.css'
import MapSampleOne from '../../images/MapSampleOne.PNG'
import MapSampleTwo from '../../images/MapSampleTwo.PNG'
import MapSampleThree from '../../images/MapSampleThree.PNG'
import ScrollToTop from "react-scroll-to-top";


function Works() {
    return (
        <>
            <div className="workcontainer">
            <div className="topic">
            <h1>ArcGIS Online Maps</h1> 
            <p>Note: All interactive maps in this page were made with the ArcGIS Online platform only and because of that the feature capacity of the maps are limited. The aim of the maps is just to demonstrate my skillset as both a web developer and GIS developer.</p>
            </div>
        
            <div className="project">
            <h2>North Coast Transmission Project</h2>
            <arcgis-embedded-map
              style={{ width: '100%', height: '500px' }}
              item-id="b9b522ed85cc45839740312c0e971019"
              theme="light"
              heading-enabled
              legend-enabled
              share-enabled
              center="-127.85709869316676,54.43093000891833"
              scale="1155581.108577"
              portal-url="https://www.arcgis.com"
            ></arcgis-embedded-map>
            <p>This map illustrates BC’s plan to expand the North Coast transmission system to deliver more clean, reliable electricity, support economic growth, and meet increasing demand as existing infrastructure reaches capacity.</p>
            </div>

    

            <div className="project">
            <h2>Watershed Map</h2>
            <arcgis-embedded-map
              style={{ width: '100%', height: '500px' }}
              item-id="87abb9d2984d4716a956806c3381d68d"
              theme="light"
              heading-enabled
              legend-enabled
              share-enabled
              center="-122.92928305923272,49.41365777822526"
              scale="577790.554289"
              portal-url="https://www.arcgis.com"
            />
            <p>This is a map that shows Metro Vancouver Watershed that contain the reservoirs that supplys water to the region.</p>
            </div>

            <div className="project">
            <h2>Manitoba's Health Regions</h2>
            <arcgis-embedded-map
              style={{ width: '100%', height: '500px' }}
              item-id="3ad254371b7a4ffb96156474e81c7b39"
              theme="light"
              heading-enabled
              legend-enabled
              share-enabled
              center="-95.08607332076087,54.95132099966508"
              scale="18489297.737236"
              portal-url="https://www.arcgis.com"
            />
            <p>This map shows the health regions within Manitoba. <a target="_blank"  rel="noreferrer" href="https://ed3um6x3suex7ljp.maps.arcgis.com/home/webmap/viewer.html?webmap=ce37a660df334651a0bbf7cfd9a10438">click here</a> to see legend</p>
            </div>

            <div className="topic">
            <h1>AI-Powered Map Generation</h1>
            <p>An innovative project that combines artificial intelligence with map generation, allowing users to create custom maps through natural language descriptions.</p>
            </div>

            <div className="project">
            <h2>AI Map Generator</h2>
            <iframe 
                loading="lazy" 
                width="1000" 
                height="600" 
                title="AI Map Generator" 
                src="https://eddy3133.github.io/ai-map-generator/"
            />
            <div>
                <p>
                    This project demonstrates the integration of OpenAI's DALL-E 3 API with modern web technologies to create an interactive map generation tool.
                </p>
                <p>Key features:</p>
                <ul>
                    <li>Natural language map generation</li>
                    <li>Multiple map styles</li>
                    <li>Real-time AI processing</li>
                    <li>Responsive web interface</li>
                    <li>FastAPI backend with OpenAI integration</li>
                </ul>
                <a target="_blank" rel="noreferrer" href="https://github.com/Eddy3133/ai-map-generator">View the project on GitHub</a>
            </div>
            </div>

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
            <ScrollToTop smooth style={{borderRadius: "50%", backgroundColor: "#4553FE", marginRight: "10px"}} />
        </div>
        
        </>
    )
}

export default Works
