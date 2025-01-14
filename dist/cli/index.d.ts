import { Config } from '../utils/getConfig';
import type { Manifest } from './types';
import { CacheImages } from './utils/cache';
type GetOptimizeResultProps = {
    destDir: string;
    noCache: boolean;
    cacheImages: CacheImages;
    cacheDir: string;
    cacheMeasurement: () => void;
    nonCacheMeasurement: () => void;
    errorMeasurement: () => void;
    pushInvalidFormatAssets: (asset: string) => void;
    cliProgressBarIncrement: () => void;
    originalFilePath: string;
    sharpOptions?: Config['sharpOptions'];
} & Manifest[number];
type GetOptimizeResult = (getOptimizeResultProps: GetOptimizeResultProps) => Promise<void>;
export declare const getOptimizeResult: GetOptimizeResult;
type OptimizeImagesProps = {
    manifestJsonPath: string;
    noCache: boolean;
    config: Config;
    terse?: boolean;
};
export declare const optimizeImages: ({ manifestJsonPath, noCache, config, terse }: OptimizeImagesProps) => Promise<void>;
type Run = (args: {
    customManifestJsonPath?: string;
    noCache?: boolean;
}) => void;
export declare const run: Run;
export {};
