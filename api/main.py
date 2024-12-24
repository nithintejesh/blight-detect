from fastapi import FastAPI, File, UploadFile
from fastapi.middleware.cors import CORSMiddleware
import uvicorn
import numpy as np
from io import BytesIO
from PIL import Image
import tensorflow as tf

app = FastAPI()

# CORS Configuration
origins = [
    "http://localhost",
    "http://localhost:3000",
    "http://localhost:5173",
]
app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# Load model
model = tf.keras.models.load_model('../saved_models/1')

# Class names corresponding to model output
CLASS_NAMES = ["Early Blight", "Late Blight", "Healthy"]

# Compare model summary
print("Model Summary:")
model.summary()

# Function to preprocess uploaded image
def read_file_as_image(data) -> np.ndarray:
    """Converts the uploaded byte data into a NumPy array representing the image."""
    image = np.array(Image.open(BytesIO(data)))

    # Resize and ensure the image has an RGB format
    image = Image.fromarray(image).resize((256, 256)).convert("RGB")
    
    return np.array(image)

# API endpoint for prediction
@app.post("/predict")
async def predict(file: UploadFile = File(...)):
    """
    Accepts an uploaded image file and returns the prediction class and confidence.
    """
    # Read and preprocess the image
    image = read_file_as_image(await file.read())
    img_batch = np.expand_dims(image, 0)  # Expand to create a batch dimension

    # Model Prediction
    predictions = model.predict(img_batch)

    # Get the predicted class and confidence
    predicted_class_idx = np.argmax(predictions[0])  # Get the index of the highest prediction
    predicted_class = CLASS_NAMES[predicted_class_idx]  # Map index to class name
    confidence = np.max(predictions[0])  # Get the confidence level (max probability)

    return {
        'class': predicted_class,
        'confidence': float(confidence)  # Ensure the confidence is a float for JSON serialization
    }

# Run the server using Uvicorn if the script is run directly
if __name__ == "__main__":
    uvicorn.run(app, host='localhost', port=8000)
