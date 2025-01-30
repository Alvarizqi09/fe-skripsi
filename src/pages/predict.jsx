import { useState } from "react";
import axios from "axios";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom"; // Import the useNavigate hook

function PredictPlantLeaf() {
  const [image, setImage] = useState(null);
  const [predictedImage, setPredictedImage] = useState(null);
  const [prediction, setPrediction] = useState(null);
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate(); // Initialize the navigate function

  const handleImageChange = (e) => {
    setImage(e.target.files[0]);
    setPredictedImage(null);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!image) return;

    setLoading(true);

    const formData = new FormData();
    formData.append("image", image);

    try {
      const response = await axios.post(
        "https://7728-110-136-171-84.ngrok-free.app/predict",
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );

      setPrediction(response.data);
      setPredictedImage(response.data.predicted_image);
    } catch (error) {
      console.error(error);
      alert("Error during prediction");
    } finally {
      setLoading(false);
    }
  };

  const handleBack = () => {
    // Navigate to the home path when the back button is clicked
    navigate("/");
  };

  return (
    <div className="min-h-screen bg-background flex items-center justify-center">
      <motion.div
        className="bg-white p-8 rounded-lg shadow-lg w-full sm:w-96 md:w-1/2 lg:w-1/3"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <h1 className="text-3xl font-semibold text-center text-primary mb-6">
          Plant Leaf Classifier
        </h1>

        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block text-sm font-medium text-text mb-2">
              Upload Leaf Image
            </label>
            <input
              type="file"
              onChange={handleImageChange}
              className="block w-full p-3 border border-gray-300 rounded-md text-sm focus:ring-2 focus:ring-primary"
            />
          </div>

          <button
            type="submit"
            className="w-full bg-primary text-white p-3 rounded-lg hover:bg-primary-dark transition duration-300"
          >
            {loading ? (
              <div className="flex justify-center">
                <div className="w-6 h-6 border-4 border-t-4 border-primary border-solid rounded-full animate-spin"></div>
              </div>
            ) : (
              "Predict"
            )}
          </button>
        </form>

        <div className="mt-6 grid grid-cols-2 gap-4 justify-center">
          {image && (
            <div className="flex flex-col items-center">
              <p className="text-lg font-medium text-text text-center mb-2">
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

          {predictedImage && (
            <div className="flex flex-col items-center">
              <p className="text-lg font-medium text-text text-center mb-2">
                Predicted Image:
              </p>
              <div className="mt-4">
                <img
                  src={predictedImage}
                  alt="Predicted Plant"
                  className="w-full h-auto rounded-lg shadow-md border-2 border-gray-300"
                />
              </div>
            </div>
          )}
        </div>

        {prediction && (
          <div className="mt-6 text-center">
            <p className="text-lg font-medium text-text">
              Prediction:{" "}
              <span className="text-primary font-bold">
                {prediction.predicted_class}
              </span>
            </p>
            <p className="text-sm text-text mt-2">
              Confidence: {prediction.confidence.toFixed(2)}%
            </p>
          </div>
        )}

        {/* Back Button */}
        <div className="mt-4">
          <button
            onClick={handleBack}
            className="w-full bg-gray-200 text-gray-700 p-3 rounded-lg hover:bg-gray-300 transition duration-300"
          >
            Go Back
          </button>
        </div>
      </motion.div>
    </div>
  );
}

export default PredictPlantLeaf;
