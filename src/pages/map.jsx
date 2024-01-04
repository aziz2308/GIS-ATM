import React, { useEffect, useState, useRef } from "react";
import {
  MapContainer,
  TileLayer,
  Marker,
  Popup,
  useMap,
  LayerGroup,
  ScaleControl,
} from "react-leaflet";
import L from "leaflet";
import { Control } from "leaflet";
import { Box } from "@mui/material";
import { Geocoder } from "leaflet-control-geocoder";
import "leaflet-minimap/dist/Control.MiniMap.min.js";
import "../plugin/L.Control.ZoomBar-master/src/L.Control.ZoomBar";
import "leaflet.coordinates/dist/Leaflet.Coordinates-0.1.5.src";
import "../plugin/leaflet-groupedlayercontrol-gh-pages/src/leaflet.groupedlayercontrol";
import "leaflet.locatecontrol/dist/L.Control.Locate.min";
import "leaflet-control-geocoder/dist/Control.Geocoder.css";
import "leaflet.locatecontrol/dist/L.Control.Locate.min.css";
import "leaflet/dist/leaflet.css";
import "leaflet-minimap/dist/Control.MiniMap.min.css";
import "../plugin/L.Control.ZoomBar-master/src/L.Control.ZoomBar.css";
import "leaflet.coordinates/dist/Leaflet.Coordinates-0.1.5.css";
import "../plugin/leaflet-groupedlayercontrol-gh-pages/src/leaflet.groupedlayercontrol.css";
import "leaflet-groupedlayercontrol";

const Map = () => {
  const [atmData, setAtmData] = useState(null);
  const [jalanData, setJalanData] = useState(null);
  const [wilayahData, setWilayahData] = useState(null);
  const [isWindRoseVisible, setIsWindRoseVisible] = useState(true);
  const mapRef = useRef(null);
  const groupedLayersControlRef = useRef(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("/static/assets/coor-atm.geojson");
        const data = await response.json();
        setAtmData(data);
      } catch (error) {
        console.error("Error fetching GeoJSON data:", error);
      }
    };

    fetchData();
  }, []);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("/static/assets/jalan.geojson");
        const data = await response.json();
        setJalanData(data);
      } catch (error) {
        console.error("Error fetching GeoJSON data:", error);
      }
    };

    fetchData();
  }, []);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("/static/assets/wilayah.geojson");
        const data = await response.json();
        setWilayahData(data);
      } catch (error) {
        console.error("Error fetching GeoJSON data:", error);
      }
    };

    fetchData();
  }, []);

  const GroupedLayerControl = () => {
    const map = useMap();

    useEffect(() => {
      if (wilayahData && jalanData && atmData && map) {
        const GoogleSatelliteHybrid = L.tileLayer(
          "https://mt1.google.com/vt/lyrs=y&x={x}&y={y}&z={z}",
          {
            maxZoom: 22,
            attribution: "Latihan Web SIG",
          }
        );

        const Esri_NatGeoWorldMap = L.tileLayer(
          "https://server.arcgisonline.com/ArcGIS/rest/services/NatGeo_World_Map/MapServer/tile/{z}/{y}/{x}",
          {
            attribution:
              "Tiles &copy; Esri &mdash; National Geographic, Esri, DeLorme, NAVTEQ, UNEP-WCMC, USGS, NASA, ESA, METI, NRCAN, GEBCO, NOAA, iPC",
            maxZoom: 16,
          }
        );

        const GoogleMaps = L.tileLayer(
          "https://mt1.google.com/vt/lyrs=m&x={x}&y={y}&z={z}",
          {
            opacity: 1.0,
            attribution: "Latihan Web GIS",
          }
        );

        const GoogleRoads = L.tileLayer(
          "https://mt1.google.com/vt/lyrs=h&x={x}&y={y}&z={z}",
          {
            opacity: 1.0,
            attribution: "Latihan Web GIS",
          }
        );

        const baseLayers = {
          "Google Satellite Hybrid": GoogleSatelliteHybrid,
          "Esri NatGeo World Map": Esri_NatGeoWorldMap,
          "Google Maps": GoogleMaps,
          "Google Roads": GoogleRoads,
        };

        const geoJsonStyle = (feature) => {
          return {
            fillColor: getColor(feature.properties.id),
            weight: 2,
            opacity: 1,
            color: "white",
            fillOpacity: 0.7,
          };
        };

        const getColor = (id) => {
          switch (id) {
            case 1:
              return "red";
            case 2:
              return "green";
            case 3:
              return "blue";
            default:
              return "gray";
          }
        };

        const onEachFeature = (feature, layer) => {
          layer.bindPopup(`<strong>${feature.properties.nm_wilayah}</strong>`);
        };

        const wilayahLayer = L.geoJSON(wilayahData, {
          style: geoJsonStyle,
          onEachFeature: onEachFeature,
        });

        const groupedOverlays = {
          "Peta Dasar": {
            "ATM Sekitar Ciputat": L.layerGroup(
              atmData.features.map((feature, index) => {
                const { coordinates } = feature.geometry;
                const { Nama } = feature.properties;

                const ratIcon = L.icon({
                  iconUrl: "/static/pin.png",
                  iconSize: [36, 30],
                });

                const marker = L.marker([coordinates[1], coordinates[0]], {
                  icon: ratIcon,
                }).bindPopup(Nama);

                return marker;
              })
            ),
            Jalan: L.geoJSON(jalanData, {
              style: {
                color: "#FF5733",
                weight: 5,
              },
            }),
            Wilayah: wilayahLayer,
          },
        };

        const groupedLayersControl = L.control.groupedLayers(
          baseLayers,
          groupedOverlays,
          {
            collapsed: true,
          }
        );

        groupedLayersControl.addTo(map);

        return () => {
          map.removeControl(groupedLayersControl);
        };
      }
    }, [atmData, map]);

    return null;
  };

  const GeocoderControl = () => {
    const map = useMap();

    useEffect(() => {
      const geocoderControl = new L.Control.Geocoder({
        position: "topleft",
        collapsed: true,
        placeholder: "Search for a location",
        geocoder: L.Control.Geocoder.nominatim(),
      }).addTo(map);

      geocoderControl.on("markgeocode", function (event) {
        const { center, name } = event.geocode || {};
        if (center) {
          const { lat, lng } = center;

          map.eachLayer((layer) => {
            if (layer instanceof L.Marker) {
              map.removeLayer(layer);
            }
          });

          const customIcon = L.icon({
            iconUrl: "/static/pin.png",
            iconSize: [36, 30],
          });

          const marker = L.marker([lat, lng], { icon: customIcon }).addTo(map);
          marker.bindPopup(name).openPopup();
        }
      });

      return () => {
        map.removeControl(geocoderControl);
      };
    }, [map]);

    return null;
  };

  const MiniMapControl = () => {
    const map = useMap();

    useEffect(() => {
      const osmUrl =
        "https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}";
      const osmAttrib = "Map data &copy; OpenStreetMap contributors";
      const osm2 = new L.TileLayer(osmUrl, {
        minZoom: 0,
        maxZoom: 13,
        attribution: osmAttrib,
      });

      const rect1 = { color: "#ff1100", weight: 3 };
      const rect2 = {
        color: "#0000AA",
        weight: 1,
        opacity: 0,
        fillOpacity: 0,
      };

      const miniMap = new L.Control.MiniMap(osm2, {
        toggleDisplay: true,
        position: "bottomright",
        aimingRectOptions: rect1,
        shadowRectOptions: rect2,
      });

      miniMap.addTo(map);

      return () => {
        map.removeControl(miniMap);
      };
    }, [map]);

    return null;
  };

  const LocateControlWrapper = () => {
    const map = useMap();

    useEffect(() => {
      const control = new L.Control.Locate({
        position: "topleft",
        drawCircle: true,
        follow: true,
        setView: true,
        keepCurrentZoomLevel: true,
        markerStyle: {
          weight: 1,
          opacity: 0.8,
          fillOpacity: 0.8,
        },
        circleStyle: {
          weight: 1,
          clickable: false,
        },
        metric: false,
        strings: {
          title: "My location",
          popup: "You are within {distance} {unit} from this point",
          outsideMapBoundsMsg:
            "You seem located outside the boundaries of the map",
        },
        locateOptions: {
          maxZoom: 18,
          watch: true,
          enableHighAccuracy: true,
          maximumAge: 10000,
          timeout: 10000,
        },
      });

      control.addTo(map);

      return () => {
        control.stop();
        control.remove();
      };
    }, [map]);

    return null;
  };

  const WindRoseControl = () => {
    const map = useMap();

    useEffect(() => {
      const legendControl = L.control({ position: "bottomleft" });

      legendControl.onAdd = () => {
        const div = L.DomUtil.create("div", "info legend");
        div.innerHTML = `<img src="/static/mataangin.png" style="width: 200px;" alt="Mata Angin" />`;
        return div;
      };

      legendControl.addTo(map);

      return () => {
        map.removeControl(legendControl);
      };
    }, [map]);

    return null;
  };

  const ZoomBarControl = () => {
    const map = useMap();

    useEffect(() => {
      const zoomBarControl = new L.Control.ZoomBar({ position: "topleft" });
      zoomBarControl.addTo(map);

      return () => {
        map.removeControl(zoomBarControl);
      };
    }, [map]);

    return null;
  };

  const CoordinatesControl = () => {
    const map = useMap();

    useEffect(() => {
      const coordinatesControl = L.control.coordinates({
        position: "bottomleft",
        decimals: 2,
        decimalSeperator: ",",
        labelTemplateLat: "Latitude: {y}",
        labelTemplateLng: "Longitude: {x}",
        enableUserInput: false,
      });

      coordinatesControl.addTo(map);

      return () => {
        map.removeControl(coordinatesControl);
      };
    }, [map]);

    return null;
  };

  return (
    <Box mt={3} p={5}>
      <MapContainer
        center={[-6.309596780991151, 106.7550772859806]}
        zoom={15}
        zoomControl={false}
        style={{ width: "100%", height: "700px", color: "black" }}
        ref={mapRef}
      >
        <TileLayer
          url="https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}"
          minZoom={0}
          attribution="Map data &copy; OpenStreetMap contributors"
        />
        <GroupedLayerControl />

        <MiniMapControl />

        <GeocoderControl />

        <LocateControlWrapper />

        <ZoomBarControl />

        <CoordinatesControl />

        <ScaleControl position="bottomleft" metric={true} />

        <WindRoseControl />
      </MapContainer>
    </Box>
  );
};

export default Map;
