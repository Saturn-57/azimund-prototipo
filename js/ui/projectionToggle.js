export function initProjectionToggle(map) {
  document.getElementById('project').addEventListener('click', () => {
    const currentProjection = map.getProjection();
    map.setProjection({
      type: currentProjection.type === 'globe' ? 'equirectangular' : 'globe'
    });
  });
}

// projection toggle button