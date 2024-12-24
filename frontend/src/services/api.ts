import { ApiResponse, Disease } from '../types';
import { mapApiResponseToDisease } from '../utils/diseaseMapper';

const API_URL = 'http://localhost:8000';
 
export async function analyzePlantImage(image: File): Promise<Disease> {
  const formData = new FormData();
  formData.append('file', image);

  try {
    const response = await fetch(`${API_URL}/predict`, {
      method: 'POST',
      body: formData,
    });

    if (!response.ok) {
      const error = await response.text();
      throw new Error(`Analysis failed: ${error}`);
    }

    const apiResponse: ApiResponse = await response.json();
    return mapApiResponseToDisease(apiResponse);
  } catch (error) {
    console.error(error);
    throw new Error('Failed to analyze image. Please try again.');
  }
}