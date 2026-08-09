export function initDrawTools(map) {
  const draw = new MaplibreTerradrawControl.MaplibreTerradrawControl({
    modes: [
      'point',
      'linestring',
      'polygon',
      'rectangle',
      'circle',
      'freehand',
      'angled-rectangle',
      'sensor',
      'sector',
      'select',
      'delete-selection',
      'delete',
      'download'
    ],
    open: true
  });
  map.addControl(draw, 'top-left');
  return draw;
}



// TERRADRAW (TALVEZ REMOVA)