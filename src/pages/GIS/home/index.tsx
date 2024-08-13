import { Viewer, Cesium3DTileset } from "resium";
import { IonResource, Ion, Cartesian3, Math, createOsmBuildingsAsync } from "cesium";
import "cesium/Build/Cesium/Widgets/widgets.css";
import { useEffect } from "react";


// const position = Cartesian3.fromDegrees(-74.0707383, 40.7117244, 100);
// const pointGraphics = { pixelSize: 10 };

function Home() {
    let viewer: any; // This will be raw Cesium's Viewer object.
    Ion.defaultAccessToken = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJqdGkiOiI5ODllMmZhOS0zZWJlLTRhMjItOTg3OC0wZDA5ZTMxMjVkYTYiLCJpZCI6MTg3NTE1LCJpYXQiOjE3MDQ0MzYwMzB9.frFcuYYnf2bRjhr7KlbT84W99zXrh6t3ktQgKIDIF8s';

    const handleReady = (tileset: any) => {
        if (viewer) {
            viewer.zoomTo(tileset);
        }
    };
    useEffect(() => {
        if (viewer) {
            // 设置相机参数
            viewer.camera.flyTo({
                destination: Cartesian3.fromDegrees(114.31205, 30.5341, 900),
                orientation: {
                    heading: Math.toRadians(0.0),
                    pitch: Math.toRadians(-15.0),
                }
            });
            // 加载OSM建筑
            const buildingTileset = createOsmBuildingsAsync();
            viewer.scene.primitives.add(buildingTileset);
        }
    }, [])
    return (
        <Viewer
            full
            ref={e => {
                viewer = e && e.cesiumElement;
            }}>
            <Cesium3DTileset url={IonResource.fromAssetId(96188)} onReady={handleReady} />
        </Viewer>
    );
}

export default Home;
