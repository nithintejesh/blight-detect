export const FILE_UPLOAD_CONFIG = {
  maxSize: 5 * 1024 * 1024, // 5MB
  acceptedFormats: {
    'image/*': []
  }
} as const;

export const ANIMATION_DURATIONS = {
  spin: '1.5s',
  bounce: '1s',
  fadeIn: '300ms'
} as const;