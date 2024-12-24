export interface ApiResponse {
  class: string;
  confidence: number;
}

export interface Disease {
  disease: string;
  confidence: number;
  tip: string;
}

export interface FileWithPreview extends File {
  preview?: string;
}