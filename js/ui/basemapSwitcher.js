// Maps the <select> option values to the actual MapLibre layer ids defined
// in config/mapStyle.js.
const BASEMAP_LAYERS = {
  satellite: 'satellite',
  terrain: 'eox-terrain',
  'terrain-light': 'eox-terrain-light'
};

function setBasemap(map, key) {
  const activeLayerId = BASEMAP_LAYERS[key];
  Object.values(BASEMAP_LAYERS).forEach((layerId) => {
    map.setLayoutProperty(layerId, 'visibility', layerId === activeLayerId ? 'visible' : 'none');
  });
}

export function initBasemapSwitcher(map) {
  document.getElementById('basemap-select').addEventListener('change', (e) => {
    setBasemap(map, e.target.value);
  });
}
