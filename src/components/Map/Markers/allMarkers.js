import L from 'leaflet';
import { markerSvgURI } from '../../SVG/markerIcon';

const iconSize = [50, 78];
const iconAnchor = [30, 60];
const popupAnchor = [1, -34];

export const activeMarker = L.icon({
    iconUrl: markerSvgURI('#2bace2', '#FFF', 15),
    iconSize: iconSize,
    iconAnchor: iconAnchor,
    popupAnchor: popupAnchor
});

export const defaultMarker = L.icon({
    iconUrl: markerSvgURI('#ef4026', '#FFF', 15),
    iconSize: iconSize,
    iconAnchor: iconAnchor,
    popupAnchor: popupAnchor
});

export const statusOkMarker = L.icon({
    iconUrl: markerSvgURI('#3bae6b', '#FFF', 15),
    iconSize: iconSize,
    iconAnchor: iconAnchor,
    popupAnchor: popupAnchor
});