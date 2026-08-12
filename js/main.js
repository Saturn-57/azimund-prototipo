import { MAP_STYLE, MAP_VIEW_OPTIONS } from './config/mapStyle.js';
import { ZoomVisibilityManager } from './core/ZoomVisibilityManager.js';
import { stopOrbit } from './core/cameraOrbit.js';
import { customLayer } from './core/ThreeModelLayer.js';
//import { loadTestGeojson } from './core/geojsonLoadTest.js';
import { initBasemapSwitcher } from './ui/basemapSwitcher.js';
import { addMarkers } from './ui/markerLayer.js';
import { initDrawTools } from './ui/drawTools.js';
import { initTerrain } from './ui/terrainToggle.js';
import { initProjectionToggle } from './ui/projectionToggle.js';

const map = new maplibregl.Map({container: 'map', style: MAP_STYLE, ...MAP_VIEW_OPTIONS }); // initializes the map

const zoomVisibility = new ZoomVisibilityManager(map);

// initializes the UI
initBasemapSwitcher(map);
addMarkers(map, zoomVisibility);
let drawControl = initDrawTools(map);
initTerrain(map);
initProjectionToggle(map);

//loading a geojson from file onto terradraw test
loadTestGeojson(map, drawControl);


// any manual drag takes control back from the auto-orbit
map.on('dragstart', stopOrbit);

map.on('style.load', () => {
  if (!map.getLayer('3d-model')) {
    map.addLayer(customLayer);
  }
});

