import type { Manifest } from '../types';
type ExternalImagesDownloaderArgs = {
    terse?: boolean;
    manifest: Manifest;
    destDir: string;
};
declare const externalImagesDownloader: ({ terse, manifest, destDir }: ExternalImagesDownloaderArgs) => Promise<void>;
export default externalImagesDownloader;
