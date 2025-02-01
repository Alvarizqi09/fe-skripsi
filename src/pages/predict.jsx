import { useState } from "react";
import axios from "axios";
import { motion } from "framer-motion";

function PredictForm() {
  const [image, setImage] = useState(null);
  const [prediction, setPrediction] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleImageChange = (e) => {
    setImage(e.target.files[0]);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!image) return;

    setLoading(true);
    const formData = new FormData();
    formData.append("image", image);

    try {
      const response = await axios.post(
        "http://localhost:5000/predict", // Railway URL
        formData,
        {
          headers: { "Content-Type": "multipart/form-data" },
        }
      );

      setPrediction(response.data);
    } catch (error) {
      console.error("Error uploading image", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-4xl mx-auto p-6 bg-white rounded-lg shadow-lg">
      <form onSubmit={handleSubmit} className="mb-6">
        <input
          type="file"
          onChange={handleImageChange}
          className="block w-full text-sm text-gray-500 file:py-2 file:px-4 file:border file:rounded-md file:bg-blue-50 file:text-blue-500 hover:file:bg-blue-100"
        />
        <button
          type="submit"
          className="mt-4 w-full bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 transition duration-300"
        >
          {loading ? "Predicting..." : "Predict"}
        </button>
      </form>

      {loading && <p className="text-center text-gray-500">Loading...</p>}

      {prediction && (
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 gap-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <motion.div
            className="flex flex-col items-center space-y-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h3 className="text-xl font-semibold">Uploaded Image</h3>
            <img
              src={URL.createObjectURL(image)}
              alt="Uploaded"
              className="max-w-full max-h-64 object-contain rounded-lg shadow-md"
            />
          </motion.div>

          <motion.div
            className="flex flex-col items-center space-y-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <h3 className="text-xl font-semibold">Prediction Result</h3>
            <div className="bg-white p-4 rounded-lg shadow-md w-full max-w-xs">
              <h2 className="text-lg font-bold">
                {prediction.predicted_class}
              </h2>
              <p className="text-sm text-gray-500">
                Confidence: {prediction.confidence.toFixed(2)}
              </p>
            </div>
          </motion.div>
        </motion.div>
      )}
    </div>
  );
}

export default PredictForm;
