import React, { useCallback, useState } from 'react';
import { Upload, X, Image as ImageIcon, AlertCircle } from 'lucide-react';
import { useDropzone } from 'react-dropzone';
import Button from './ui/Button';

interface FileUploadProps {
  onFileSelect: (file: File) => void;
  onClearFile: () => void;
}

export default function FileUpload({ onFileSelect, onClearFile }: FileUploadProps) {
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [preview, setPreview] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);

  const onDrop = useCallback((acceptedFiles: File[], rejectedFiles: any[]) => {
    if (rejectedFiles.length > 0) {
      setError('Please upload an image file under 5MB');
      return;
    }

    const file = acceptedFiles[0];
    if (file) {
      setError(null);
      setSelectedFile(file);
      const reader = new FileReader();
      reader.onload = () => {
        setPreview(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  }, []);

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    accept: { 'image/*': [] },
    maxSize: 5 * 1024 * 1024,
    multiple: false
  });

  const clearPreview = (e: React.MouseEvent) => {
    e.stopPropagation();
    setPreview(null);
    setSelectedFile(null);
    setError(null);
    onClearFile();
  };

  const handlePredict = () => {
    if (selectedFile) {
      onFileSelect(selectedFile);
    }
  };

  return (
    <div className="space-y-4">
      <div
        {...getRootProps()}
        className={`relative border rounded-xl overflow-hidden border-green-400 dark:border-green-500
          ${isDragActive 
            ? 'bg-green-50 dark:bg-green-900/20' 
            : error 
              ? 'border-red-300 dark:border-red-500'
              : 'bg-white dark:bg-gray-800'
          }`}
      >
        <input {...getInputProps()} />
        
        {!preview ? (
          <div className="p-8 text-center">
            <div className="relative mx-auto w-24 h-24 mb-4">
              {error ? (
                <div className="flex items-center justify-center w-full h-full">
                  <AlertCircle className="h-12 w-12 text-red-500 dark:text-red-400" />
                </div>
              ) : (
                <>
                  <div className="absolute inset-0 bg-green-100 dark:bg-green-900/50 rounded-full"></div>
                  <div className="relative flex items-center justify-center w-full h-full bg-green-50 dark:bg-green-900/30 rounded-full">
                    <ImageIcon className="h-12 w-12 text-green-600 dark:text-green-400 animate-float" />
                  </div>
                </>
              )}
            </div>
            
            <h3 className={`text-lg font-semibold mb-2 
              ${error 
                ? 'text-red-600 dark:text-red-400' 
                : 'text-gray-900 dark:text-white'}`}>
              {error || 'Drop your image here'}
            </h3>
            <p className="text-sm text-gray-500 dark:text-gray-400 mb-4">
              or click to browse your files
            </p>
            
            <Button 
              size="sm" 
              variant={error ? 'danger' : 'secondary'}
              className="dark:bg-gray-700 dark:text-white"
            >
              Choose File
            </Button>
            
            <p className="mt-4 text-xs text-gray-400 dark:text-gray-500">
              Supports: JPG, PNG, WEBP (Max size: 5MB)
            </p>
          </div>
        ) : (
          <div className="relative p-4">
            <img
              src={preview}
              alt="Preview"
              className="max-h-64 mx-auto rounded-lg shadow-md"
            />
            <button
              onClick={clearPreview}
              className="absolute top-6 right-6 p-2 bg-white dark:bg-gray-800 rounded-full shadow-lg"
            >
              <X className="h-4 w-4 text-gray-600 dark:text-gray-400" />
            </button>
          </div>
        )}
      </div>
      
      {preview && (
        <div className="flex justify-center">
          <Button onClick={handlePredict}>
            Predict Disease
          </Button>
        </div>
      )}
    </div>
  );
}