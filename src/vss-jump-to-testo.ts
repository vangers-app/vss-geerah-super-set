
import { InitFn } from "./main";
import vss, { actEventCodes, FileOpenFlags, RoadRuntimeObjId } from "./vss";

export const init: InitFn = () => {
    const assets = vss.getScriptsFolder() + "/testo/";
    vss.addQuantListener("runtime_object", (payload) => {
        if (payload.runtimeObjectId === RoadRuntimeObjId.RTO_GAME_QUANT_ID) {
            vss.sendEvent(actEventCodes.EV_TELEPORT, 8);
        }
    });

    vss.addQuantListener("file_open", (payload) => {
        const { file, flags } = payload;
        if ((flags & FileOpenFlags.XS_IN) === 0) {
            return;
        }

        if (vss.isFileExists(assets + file)) {
            return {
                file: assets + file,
            };
        }
    });
}
