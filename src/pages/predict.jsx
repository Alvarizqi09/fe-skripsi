import { useState } from "react";
import axios from "axios";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

function PredictForm() {
  const [image, setImage] = useState(null);
  const [prediction, setPrediction] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleImageChange = (e) => {
    if (e.target.files[0]) {
      setImage(e.target.files[0]);
      setPrediction(null); // Reset prediction when new image is selected
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!image) return;

    setLoading(true);
    const formData = new FormData();
    formData.append("image", image);

    try {
      const response = await axios.post(
        "http://localhost:5000/predict",
        formData,
        { headers: { "Content-Type": "multipart/form-data" } }
      );
      setPrediction(response.data);
    } catch (error) {
      console.error("Error uploading image", error);
      setPrediction({
        predicted_class: "Error",
        confidence: 0,
        message: "Failed to process image. Please try again.",
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-green-50 to-gray-50">
      {/* Modern Navbar */}
      <nav className="sticky top-0 bg-white/80 backdrop-blur-md shadow-sm z-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex justify-between items-center h-16">
            <Link
              to="/"
              className="text-2xl font-bold text-green-700 flex items-center"
            >
              🌽 Corn Classification
            </Link>
            <div className="flex space-x-4">
              <Link
                to="/"
                className="text-gray-600 hover:-translate-y-1 duration-300 hover:text-green-700 px-3 py-2 text-sm font-medium transition-all"
              >
                Home
              </Link>
              <Link
                to="/about"
                className="text-gray-600 hover:-translate-y-1 duration-300  hover:text-green-700 px-3 py-2 text-sm font-medium transition-all"
              >
                About
              </Link>
              <Link
                to="/predict"
                className="text-gray-600 hover:-translate-y-1 duration-300 hover:text-green-700 px-3 py-2 text-sm font-medium transition-all"
              >
                Predict
              </Link>
            </div>
          </div>
        </div>
      </nav>

      <main className="max-w-4xl mx-auto px-4 py-8">
        {/* Chat-style Container */}
        <div className="bg-white rounded-2xl shadow-lg p-6 min-h-[600px] flex flex-col">
          {/* Prediction History */}
          <div className="flex-1 space-y-8 overflow-y-auto mb-6">
            {/* User Upload Bubble */}
            {image && (
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                className="flex justify-end items-start gap-3"
              >
                <div className="max-w-[70%] bg-green-100 rounded-xl p-4 relative">
                  <div className="absolute -right-2 top-3 w-4 h-4 bg-green-100 rotate-45" />
                  <div className="flex items-center gap-3 mb-2">
                    <span className="text-sm font-medium text-green-700">
                      You
                    </span>
                    <span className="text-xs text-gray-500">
                      {new Date().toLocaleTimeString()}
                    </span>
                  </div>
                  <img
                    src={URL.createObjectURL(image)}
                    alt="Uploaded leaf"
                    className="w-full h-48 object-contain rounded-lg bg-white p-2 shadow-inner"
                  />
                  <p className="text-xs text-gray-500 mt-2">Image uploaded</p>
                </div>
              </motion.div>
            )}

            {/* AI Response Bubble */}
            {prediction && (
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                className="flex justify-start items-start gap-3"
              >
                <div className="max-w-[70%] bg-gray-50 rounded-xl p-4 relative">
                  <div className="absolute -left-2 top-3 w-4 h-4 bg-gray-50 rotate-45" />
                  <div className="flex items-center gap-3 mb-2">
                    <span className="flex items-center gap-2">
                      <span className="w-3 h-3 bg-green-500 rounded-full" />
                      <span className="text-sm font-medium text-gray-700">
                        Corn Classification
                      </span>
                    </span>
                    <span className="text-xs text-gray-500">
                      {new Date().toLocaleTimeString()}
                    </span>
                  </div>
                  <div className="space-y-2">
                    <h3 className="text-lg font-semibold text-gray-800">
                      {prediction.predicted_class}
                    </h3>
                    <div className="flex items-center gap-2">
                      <div className="w-full bg-gray-200 rounded-full h-2">
                        <div
                          className="bg-green-500 h-2 rounded-full transition-all duration-500"
                          style={{ width: `${prediction.confidence * 100}%` }}
                        />
                      </div>
                      <span className="text-sm text-gray-600">
                        {(prediction.confidence * 100).toFixed(1)}%
                      </span>
                    </div>
                    {prediction.message && (
                      <p className="text-sm text-gray-600 mt-2">
                        {prediction.message}
                      </p>
                    )}
                  </div>
                </div>
              </motion.div>
            )}

            {/* Loading Indicator */}
            {loading && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="flex justify-start items-start gap-3"
              >
                <div className="max-w-[70%] bg-gray-50 rounded-xl p-4 relative">
                  <div className="flex items-center gap-2 text-gray-600">
                    <div className="animate-pulse">🔍</div>
                    <span className="text-sm">Analyzing leaf image...</span>
                  </div>
                </div>
              </motion.div>
            )}
          </div>

          {/* Upload Form */}
          <form
            onSubmit={handleSubmit}
            className="border-t border-gray-100 pt-6"
          >
            <div className="flex gap-4">
              <label className="flex-1 cursor-pointer">
                <input
                  type="file"
                  onChange={handleImageChange}
                  className="hidden"
                  accept="image/*"
                />
                <div className="flex items-center justify-center gap-2 w-full px-6 py-3 bg-green-50 hover:bg-green-100 text-green-700 rounded-xl transition-all border-2 border-dashed border-green-200">
                  <svg
                    className="w-5 h-5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-8l-4-4m0 0L8 8m4-4v12"
                    />
                  </svg>
                  <span className="text-sm font-medium">
                    {image ? "Change Image" : "Select Leaf Image"}
                  </span>
                </div>
              </label>
              <button
                type="submit"
                disabled={!image || loading}
                className="px-6 py-3 bg-green-600 hover:bg-green-700 text-white rounded-xl font-medium transition-all disabled:opacity-50 disabled:cursor-not-allowed flex items-center gap-2"
              >
                {loading ? (
                  <>
                    <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                    Analyzing...
                  </>
                ) : (
                  <>
                    <svg
                      className="w-5 h-5"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M13 10V3L4 14h7v7l9-11h-7z"
                      />
                    </svg>
                    Analyze Now
                  </>
                )}
              </button>
            </div>
            {image && (
              <p className="text-sm text-gray-500 mt-2 text-center">
                Selected file: {image.name}
              </p>
            )}
          </form>
        </div>

        {/* Tips Section */}
        {prediction && !prediction.message && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="mt-8 bg-blue-50 rounded-xl p-6"
          >
            <h3 className="text-lg font-semibold text-blue-800 mb-3">
              💡 Management Tips
            </h3>
            <p className="text-sm text-blue-700">
              Based on your prediction, we recommend:
              <ul className="list-disc pl-6 mt-2 space-y-2">
                <li>Immediately isolate infected plants</li>
                <li>Apply fungicide every 7-10 days</li>
                <li>Improve air circulation around plants</li>
                <li>Remove and destroy infected leaves</li>
              </ul>
            </p>
          </motion.div>
        )}
      </main>
    </div>
  );
}

export default PredictForm;
