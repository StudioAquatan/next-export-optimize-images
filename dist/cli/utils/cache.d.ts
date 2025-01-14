export declare const defaultCacheDir: string;
export declare const defaultCacheFilePath: string;
export declare const createCacheDir: (cacheDir?: string) => Promise<void>;
export type CacheImages = {
    output: string;
    hash: string;
}[];
export declare const readCacheManifest: (filePath?: string) => CacheImages;
export declare const writeCacheManifest: (cacheImages: CacheImages, filePath?: string) => void;
