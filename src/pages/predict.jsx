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
    <div className="flex flex-col h-screen">
      <div className="flex-1 p-4 overflow-y-auto">
        {/* Prediction Result */}
        {prediction && (
          <motion.div
            className="flex flex-col mb-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            <motion.div
              className="flex flex-col items-end space-y-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              <h3 className="text-xl font-semibold text-[var(--color-text)]">
                Uploaded Image
              </h3>
              <img
                src={URL.createObjectURL(image)}
                alt="Uploaded"
                className="max-w-full max-h-64 object-contain rounded-lg shadow-md"
              />
            </motion.div>
            {/* Prediction result on left like chat bubble */}
            <motion.div
              className="flex flex-col items-start space-y-4 mb-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <h3 className="text-xl font-semibold text-[var(--color-text)]">
                Prediction Result
              </h3>
              <div className="bg-white p-4 rounded-lg shadow-md w-full max-w-xs">
                <h2 className="text-lg font-bold text-primary">
                  {prediction.predicted_class}
                </h2>
                <p className="text-sm text-[var(--color-text-light)]">
                  Confidence: {prediction.confidence.toFixed(2)}
                </p>
              </div>
            </motion.div>

            {/* Uploaded image on right */}
          </motion.div>
        )}

        {/* Loading state */}
        {loading && (
          <div className="text-center text-[var(--color-text-light)]">
            Loading...
          </div>
        )}
      </div>

      {/* Upload button at bottom */}
      <div className="p-4 bg-[var(--color-secondary)] fixed bottom-0 left-0 w-full">
        <form
          onSubmit={handleSubmit}
          className="flex justify-between items-center"
        >
          <input
            type="file"
            onChange={handleImageChange}
            className="file:bg-[var(--color-primary-light)] file:text-[var(--color-primary)] file:py-2 file:px-4 file:border file:rounded-md file:text-sm text-[var(--color-text)]"
          />
          <button
            type="submit"
            className="flex items-center space-x-2 bg-[var(--color-primary)] text-white py-2 px-4 rounded-md hover:bg-[var(--color-primary-dark)] transition duration-300"
            disabled={loading}
          >
            <span>{loading ? "Predicting..." : "Upload & Predict"}</span>
          </button>
        </form>
      </div>
    </div>
  );
}

export default PredictForm;
