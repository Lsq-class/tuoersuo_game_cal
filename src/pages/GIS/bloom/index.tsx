import { Meta, Story } from "@storybook/react"; 
import { Viewer, Bloom, PostProcessStageComposite, Entity } from "resium";

import { Cartesian3 } from "cesium"; 

export default {
    title: "PostProcessStageComposite",
    component: PostProcessStageComposite,
} as Meta;

export const BloomStory: Story<any> = () => (
    <Viewer full>
        <Bloom />
        <Entity
            position={Cartesian3.fromDegrees(103.86229514826204, 30.05534777835833, 100)}
            model={{ uri: "Cesium_Air.glb" }}
            tracked
        />
    </Viewer>
);

BloomStory.storyName = "Bloom";