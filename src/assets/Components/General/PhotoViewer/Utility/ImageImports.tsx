import type { ImageData } from '../../../../TypeScriptInterfaces/DataInterfaces';

// Import all images from the PhotoViewerImages directory 
const modules = import.meta.glob('../../../../Images/PhotoViewerImages/*.{png,jpg,jpeg}', { eager: true }) as Record<string, { default: string }>;
const contextSources = Object.values(modules).map(m => m.default);

// ensure the explicitly imported first image is included and remove duplicates
const uniqueSrcs = Array.from([...contextSources]);

export const photoViewerImages: ImageData[] = uniqueSrcs.map((src, i) => ({
    id: String(i + 1),
    imageSrc: src,
    description: null,
    altText: null,
}));