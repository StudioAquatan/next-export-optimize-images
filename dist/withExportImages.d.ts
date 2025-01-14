import type { NextConfig } from 'next';
type Options = {
    configPath?: string;
};
declare const withExportImages: (nextConfig?: NextConfig, options?: Options) => NextConfig;
export type WithExportImages = typeof withExportImages;
export default withExportImages;
