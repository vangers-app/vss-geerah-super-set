
import { InitFn } from "./main";
import vss, { actEventCodes, FileOpenFlags, RoadRuntimeObjId } from "./vss";
import { registerFileAddon } from "./vss-file-addon";

export const init: InitFn = () => {
    vss.addQuantListener("runtime_object", (payload) => {
        if (payload.runtimeObjectId === RoadRuntimeObjId.RTO_GAME_QUANT_ID) {
            vss.sendEvent(actEventCodes.EV_TELEPORT, 11);
        }
    });

    registerFileAddon("vss-vandals-league")();
}
