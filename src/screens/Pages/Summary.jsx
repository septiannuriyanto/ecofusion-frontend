import React, {useRef}  from "react";
import { Dropdown } from "react-bootstrap";
import { connect } from "react-redux";
import { VectorMap } from "react-jvectormap";
import PageHeader from "../../components/PageHeader";
import LargeScaleCustomChart from "../../components/HybridEnergy/LargeScaleCustomChart";
import EquipmentList from "../../components/HybridEnergy/EquipmentList";
import { MapContainer, TileLayer } from "react-leaflet";
import { Marker } from "react-leaflet";
import { Popup } from "react-leaflet";
import markerIcon from "../../assets/images/marker.png"
import L, { marker } from "leaflet"
import "leaflet/dist/leaflet.css";



const indonesiaCenter = [-1.799443, 117.719330];
const indonesiaZoomLevel = 5;
const stamenTonerTiles = "https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png";
const stamenTonerAttr =  'Map tiles by <a href="http://stamen.com">Stamen Design</a>, <a href="http://creativecommons.org/licenses/by/3.0">CC BY 3.0</a> &mdash; Map data &copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>';


const mapCenter = [-0.8642815,134.0328986];
const zoomLevel = 12;
const mansinam = [-0.8899083,134.0941649]
const reremipuncak = [-0.8437532,134.0482926]

//for marker initialization

let DefaultIcon = L.icon({
  iconUrl: markerIcon,
  iconSize:[16, 24],
  
  popupAnchor: [0, 0]
});

L.Marker.prototype.options.icon = DefaultIcon;



const Summary = () => {
  const mapRef = useRef(null);

  return (
<div
        style={{ flex: 1 }}
        onClick={() => {
          document.body.classList.remove("offcanvas-active");
        }}
      >
        <div>
          <div className="container-fluid">
            <PageHeader
              HeaderText="Dashboard"
              Breadcrumb={[
                { name: "Dashboard", navigate: "" },
                { name: "Summary", navigate: "" },
              ]}
            />
            <div className="row clearfix">
              <div className="col-lg-12 col-md-12">
                <div className="card planned_task">
                  <div className="header">
                    <h2>Analytical Summary</h2>
                    {/* <Dropdown as="ul" className="header-dropdown">
                      <Dropdown.Toggle
                        variant="success"
                        as="li"
                        id="dropdown-basic"
                      >
                        <Dropdown.Menu
                          as="ul"
                          className="dropdown-menu dropdown-menu-right"
                        >
                          <li>
                            <a>Action</a>
                          </li>
                          <li>
                            <a>Another Action</a>
                          </li>
                          <li>
                            <a>Something else</a>
                          </li>
                        </Dropdown.Menu>
                      </Dropdown.Toggle>
                    </Dropdown> */}
                  </div>
                  <div className="body">
                    <div className="row clearfix">
              <div className="col-md-12">
                <div className="card visitors-map">
                  <div className="header">
                    <h2>Explore  by Region</h2>
                    <Dropdown as="ul" className="header-dropdown">
                      <Dropdown.Toggle
                        variant="success"
                        as="li"
                        id="dropdown-basic"
                      >
                        <Dropdown.Menu
                          as="ul"
                          className="dropdown-menu dropdown-menu-right"
                        >
                          <li>
                            <a>Action</a>
                          </li>
                          <li>
                            <a>Another Action</a>
                          </li>
                          <li>
                            <a>Something else</a>
                          </li>
                        </Dropdown.Menu>
                      </Dropdown.Toggle>
                    </Dropdown>
                  </div>
                  <div className="body">
                    <div className="row">
                    <div className="input-group m-b-0">
                      <div className="input-group-prepend">
                        <span className="input-group-text">
                          <i className="icon-magnifier"></i>
                        </span>
                      </div>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Search Region..."
                    />
                  </div>
        </div>
                    </div>
                    <div className="row">
                      <div className="col-lg-12 h-10">
                                <div className="body search">
          
                      <MapContainer
                      
                      ref={mapRef}
                      center={mapCenter}
                      zoom={zoomLevel}
                      maxZoom={zoomLevel}
                      minZoom={zoomLevel}
                      zoomControl={false}
                      
                      scrollWheelZoom={false}
                      style={{height : "300px"}}
                      
                    
                    >
                      <TileLayer
                        attribution={stamenTonerAttr}
                        url={stamenTonerTiles}
                      />
                      <Marker position={mansinam} >
                          <Popup>
                            PLTS Mansinam
                          </Popup>
                      </Marker>
                      <Marker position={reremipuncak}>
                          <Popup>
                            PLTS Reremi Puncak
                          </Popup>
                      </Marker>
                    </MapContainer>

                        
                      </div>
               
                    </div>
                    
                  </div>
                </div>
              </div>
              <div className="row clearfix">
              <EquipmentList site=" PLTS Mansinam"/>
            </div>
              <div className="row" clearfix>
                    <LargeScaleCustomChart title="Efficiency Monitoring For GS747"/>
              </div>
              
            </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
  )
}

export default Summary
