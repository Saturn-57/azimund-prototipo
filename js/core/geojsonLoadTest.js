export async function loadTestGeojson(map, drawControl) {
    map.once('load', () => {
        const drawInstance = drawControl.getTerraDrawInstance();
        if (drawInstance) {
            const res = await fetch('../../geojson/jinsong_test.geojson');
            const geojson = await res.json();

            drawInstance?.addFeatures(geojson.features[0]);

            map.once('idle', () => {
                console.log("aiya");
            });
        }
    });
}