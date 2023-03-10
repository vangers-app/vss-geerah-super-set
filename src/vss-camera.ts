// A simple module that pin game camera to front of mechos
import { Config, InitFn } from "./main";
import vss, { iScreenOptionId } from "./vss";

export const init: InitFn = (config: Config) => {
    let unitAngle = 0;

    vss.addQuantListener("option", (payload) => {
        if (payload.id === iScreenOptionId.iCAMERA_TURN) {
            return {
                value: 1,
            };
        }
    });

    vss.addQuantListener("camera", () => {
        return {
            turnAngle: -unitAngle - vss.math.PI_2,
        };
    });

    vss.addQuantListener("mechos_traction", (payload) => {
        unitAngle = payload.unitAngle;
    });
};
