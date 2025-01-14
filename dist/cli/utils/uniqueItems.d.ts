import type { Manifest } from '../types';
declare const uniqueItems: (items: Manifest) => {
    output: string;
    src: string;
    width: number;
    quality: number;
    extension: string;
    externalUrl?: string;
}[];
export default uniqueItems;
