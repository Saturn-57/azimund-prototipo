export function initDrawTools(map) {
  const draw = new MaplibreTerradrawControl({
    modes: [
      'select',
      'point',
      'marker',
      'linestring',
      'freehand-linestring',
      'polygon',
      'rectangle',
      'circle',
      'freehand',
      'undo',
      'redo',
      'delete-selection',
      'delete',
      'download'
    ],
    open: true,
    undoRedo: {
      keyboardShortcuts: new TerraDrawUndoRedoKeyboardShortcuts({
        undo: [
          {
            key: 'z',
            heldKeys: ['control']
          }
        ],
        redo: [
          {
            key: 'y',
            heldKeys: ['control']
          }
        ]
      })
    }
  });
  map.addControl(draw, 'top-left');
  return draw;
}



// TERRADRAW (TALVEZ REMOVA)