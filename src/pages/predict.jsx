import { useState } from "react";
import axios from "axios";
import { motion } from "framer-motion";

function PredictForm() {
  const [image, setImage] = useState(null);
  const [prediction, setPrediction] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleImageChange = (e) => {
    if (e.target.files[0]) {
      setImage(e.target.files[0]);
      setPrediction(null);
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
        message: "Failed to process image. Please try again.",
      });
    } finally {
      setLoading(false);
    }
  };

  const getManagementTips = (predictedClass) => {
    switch (predictedClass) {
      case "Corn Northern Leaf Blight":
        return [
          "Rotasi tanaman minimal 2 tahun",
          "Pengolahan sisa tanaman terinfeksi",
          "Aplikasi fungisida tepat waktu",
        ];
      case "Corn Gray Leaf Spot":
        return [
          "Rotasi tanaman dengan tanaman non-jagung selama 2 tahun",
          "Pengolahan tanah untuk mempercepat dekomposisi sisa tanaman",
          "Tanam varietas tahan Gray Leaf Spot",
        ];
      case "Corn Common Rust":
        return [
          "Tanam varietas jagung tahan karat",
          "Pantau tanaman secara rutin untuk deteksi dini",
          "Hindari irigasi yang berlebihan",
        ];
      default:
        return [
          "Segera isolasi tanaman yang terinfeksi",
          "Gunakan fungisida setiap 7-10 hari",
          "Perbaiki sirkulasi udara di sekitar tanaman",
          "Buang dan musnahkan daun yang terinfeksi",
        ];
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-green-50 to-gray-50">
      <main className="max-w-4xl mx-auto px-4 py-8">
        <div className="bg-white rounded-2xl shadow-lg p-6 min-h-[600px] flex flex-col">
          {/* Chat Container */}
          <div className="flex-1 space-y-8 overflow-y-auto mb-6">
            {/* Initial Guide */}
            {!image && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="space-y-4 text-center"
              >
                <motion.div
                  animate={{ y: [-5, 5, -5] }}
                  transition={{ duration: 2, repeat: Infinity }}
                  className="text-6xl mb-8"
                >
                  🍃
                </motion.div>
                <div className="space-y-6">
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.2 }}
                    className="flex flex-col items-center space-y-2"
                  >
                    <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
                      <span className="text-2xl">1</span>
                    </div>
                    <p className="text-gray-600">Upload gambar daun jagung</p>
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.4 }}
                    className="flex flex-col items-center space-y-2"
                  >
                    <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
                      <span className="text-2xl">2</span>
                    </div>
                    <p className="text-gray-600">Tunggu proses analisis AI</p>
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.6 }}
                    className="flex flex-col items-center space-y-2"
                  >
                    <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
                      <span className="text-2xl">3</span>
                    </div>
                    <p className="text-gray-600">
                      Dapatkan rekomendasi penanganan
                    </p>
                  </motion.div>
                </div>
              </motion.div>
            )}

            {/* User Upload Bubble */}
            {image && (
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                className="flex justify-end"
              >
                <div className="max-w-[75%] bg-green-100 rounded-xl p-4 relative">
                  <div className="absolute -right-2 top-3 w-4 h-4 bg-green-100 rotate-45" />
                  <div className="flex items-center gap-3 mb-2">
                    <span className="text-sm font-medium text-green-700">
                      Anda
                    </span>
                  </div>
                  <img
                    src={URL.createObjectURL(image)}
                    alt="Uploaded leaf"
                    className="w-full h-48 object-contain rounded-lg bg-white p-2 shadow-inner"
                  />
                  <p className="text-xs text-gray-500 mt-2">{image.name}</p>
                </div>
              </motion.div>
            )}

            {/* AI Diagnosis Bubble */}
            {prediction && (
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                className="flex justify-start"
              >
                <div className="max-w-[75%] bg-gray-50 rounded-xl p-4 relative">
                  <div className="absolute -left-2 top-3 w-4 h-4 bg-gray-50 rotate-45" />
                  <div className="flex items-center gap-2 mb-3">
                    <div className="w-3 h-3 bg-green-500 rounded-full" />
                    <span className="text-sm font-medium">
                      Hasil Klasifikasi menunjukan
                    </span>
                  </div>
                  <h3 className="text-lg font-semibold text-gray-800">
                    <span className="text-sm font-medium mr-1">
                      Kelas Jagung :
                    </span>
                    {prediction.predicted_class}
                  </h3>
                  {prediction.message && (
                    <p className="text-sm text-gray-600">
                      {prediction.message}
                    </p>
                  )}
                </div>
              </motion.div>
            )}

            {/* Management Tips Bubble */}
            {prediction && !prediction.message && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="flex justify-start"
              >
                <div className="max-w-[75%] bg-blue-50 rounded-xl p-4 relative">
                  <div className="absolute -left-2 top-3 w-4 h-4 bg-blue-50 rotate-45" />
                  <div className="flex items-center gap-2 mb-3">
                    <div className="w-3 h-3 bg-blue-500 rounded-full" />
                    <span className="text-sm font-medium">
                      Rekomendasi Penanganan
                    </span>
                  </div>
                  <ul className="list-disc pl-6 space-y-2 text-sm">
                    {getManagementTips(prediction.predicted_class).map(
                      (tip, index) => (
                        <motion.li
                          key={index}
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          transition={{ delay: index * 0.1 }}
                          className="text-gray-700"
                        >
                          {tip}
                        </motion.li>
                      )
                    )}
                  </ul>
                </div>
              </motion.div>
            )}

            {/* Loading Bubble */}
            {loading && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="flex justify-start"
              >
                <div className="max-w-[75%] bg-gray-50 rounded-xl p-4 relative">
                  <div className="flex items-center gap-3">
                    <div className="animate-pulse">🔍</div>
                    <div className="space-y-2">
                      <div className="h-3 bg-gray-200 rounded w-32 animate-pulse" />
                      <div className="h-3 bg-gray-200 rounded w-48 animate-pulse" />
                    </div>
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
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  className="flex items-center justify-center gap-2 w-full px-6 py-3 bg-green-50 text-green-700 rounded-xl border-2 border-dashed border-green-200"
                >
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
                    {image ? "Ganti Gambar" : "Pilih Gambar Daun"}
                  </span>
                </motion.div>
              </label>

              <motion.button
                type="submit"
                disabled={!image || loading}
                whileTap={{ scale: 0.95 }}
                className="px-6 py-3 bg-green-600 text-white rounded-xl font-medium disabled:opacity-50 disabled:cursor-not-allowed flex items-center gap-2"
              >
                {loading ? (
                  <>
                    <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                    Menganalisa...
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
                    Analisa Sekarang
                  </>
                )}
              </motion.button>
            </div>
          </form>
        </div>
      </main>
    </div>
  );
}

export default PredictForm;
