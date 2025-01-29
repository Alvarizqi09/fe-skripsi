import { useState } from "react";
import axios from "axios";

function PredictPlantLeaf() {
  const [image, setImage] = useState(null);
  const [predictedImage, setPredictedImage] = useState(null);
  const [prediction, setPrediction] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleImageChange = (e) => {
    setImage(e.target.files[0]);
    setPredictedImage(null); // Clear previous predicted image if a new one is selected
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!image) return;

    setLoading(true);

    const formData = new FormData();
    formData.append("image", image);

    try {
      const response = await axios.post(
        "http://127.0.0.1:5000/predict",
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );

      setPrediction(response.data);
      setPredictedImage(response.data.predicted_image); // Assuming the backend returns a URL or image data for the prediction image
    } catch (error) {
      console.error(error);
      alert("Error during prediction");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-r from-blue-100 to-purple-100 flex items-center justify-center">
      <div className="bg-white p-8 rounded-lg shadow-lg w-full sm:w-96 md:w-1/2 lg:w-1/3">
        <h1 className="text-3xl font-semibold text-center text-blue-600 mb-6">
          Plant Leaf Classifier
        </h1>

        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Upload Leaf Image
            </label>
            <input
              type="file"
              onChange={handleImageChange}
              className="block w-full p-3 border border-gray-300 rounded-md text-sm focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <button
            type="submit"
            className="w-full bg-blue-500 text-white p-3 rounded-md hover:bg-blue-600 transition duration-300"
          >
            {loading ? (
              <div className="flex justify-center">
                <div className="w-6 h-6 border-4 border-t-4 border-blue-500 border-solid rounded-full animate-spin"></div>
              </div>
            ) : (
              "Predict"
            )}
          </button>
        </form>

        <div className="mt-6 grid grid-cols-2 gap-4 justify-center">
          {/* Display uploaded image */}
          {image && (
            <div className="flex flex-col items-center">
              <p className="text-lg font-medium text-gray-800 text-center mb-2">
                Uploaded Image:
              </p>
              <div className="mt-4">
                <img
                  src={URL.createObjectURL(image)}
                  alt="Uploaded Leaf"
                  className="w-full h-auto rounded-lg shadow-md border-2 border-gray-300"
                />
              </div>
            </div>
          )}

          {/* Display predicted image */}
          {predictedImage && (
            <div className="flex flex-col items-center">
              <p className="text-lg font-medium text-gray-800 text-center mb-2">
                Predicted Image:
              </p>
              <div className="mt-4">
                <img
                  src={predictedImage} // Use the returned prediction image URL
                  alt="Predicted Plant"
                  className="w-full h-auto rounded-lg shadow-md border-2 border-gray-300"
                />
              </div>
            </div>
          )}
        </div>

        {/* Display prediction result */}
        {prediction && (
          <div className="mt-6 text-center">
            <p className="text-lg font-medium text-gray-800">
              Prediction:{" "}
              <span className="text-blue-600 font-bold">
                {prediction.predicted_class}
              </span>
            </p>
            {/* Optionally display confidence */}
            <p className="text-sm text-gray-500 mt-2">
              Confidence: {prediction.confidence.toFixed(2)}%
            </p>
          </div>
        )}
      </div>
    </div>
  );
}

export default PredictPlantLeaf;
