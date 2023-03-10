import { InitFn } from "./main";
import vss, { FileOpenFlags } from "./vss";

export function registerFileAddon(folder: string): () => void {
    return () => {
        const assets = vss.getScriptsFolder() + "/" + folder + "/";

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
}