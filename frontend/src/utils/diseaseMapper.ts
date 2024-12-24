import { ApiResponse, Disease } from '../types';

const diseaseTips: Record<string, string> = {
  'Early Blight': 'Remove affected leaves and ensure proper air circulation between plants. Apply fungicide as needed.',
  'Late Blight': 'Remove infected plants immediately. Apply copper-based fungicide. Maintain dry conditions.',
  'Healthy': 'Continue maintaining current growing conditions. Monitor regularly for any changes.',
};

export function mapApiResponseToDisease(response: ApiResponse): Disease {
  return {
    disease: response.class,
    confidence: parseFloat((response.confidence * 100).toFixed(1)), // Convert to percentage
    tip: diseaseTips[response.class] || 'Consult with a plant pathologist for specific treatment recommendations.',
  };
}