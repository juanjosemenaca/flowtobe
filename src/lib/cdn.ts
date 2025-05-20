// CDN configuration
export const CDN_URL = 'https://cdn.FLOW2BALY.com';

// Image optimization settings
export const imageSettings = {
  quality: 80,
  format: 'webp',
  width: {
    thumbnail: 300,
    medium: 600,
    large: 1200,
    full: 1920
  }
};

// Generate CDN URL for images
export const getImageUrl = (path: string, size: keyof typeof imageSettings.width = 'medium') => {
  const width = imageSettings.width[size];
  return `${CDN_URL}/images/${path}?w=${width}&q=${imageSettings.quality}&fmt=${imageSettings.format}`;
};

// Generate CDN URL for other assets
export const getAssetUrl = (path: string) => {
  return `${CDN_URL}/assets/${path}`;
}; 