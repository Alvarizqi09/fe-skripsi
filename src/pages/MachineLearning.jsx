import { motion } from "framer-motion";
import {
  FaChartLine,
  FaFilter,
  FaLayerGroup,
  FaBalanceScale,
} from "react-icons/fa";

function MachineLearning() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-green-50 to-white">
      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4 text-center relative overflow-hidden bg-green-800">
        <div className="max-w-4xl mx-auto">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-5xl font-bold text-white mb-6"
          >
            Arsitektur Sistem Klasifikasi Penyakit Jagung
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl text-green-200 mb-8"
          >
            Implementasi InceptionV3 dengan Gaussian Filter untuk Deteksi
            Penyakit Daun Jagung
          </motion.p>
        </div>
      </section>

      {/* Overview Section */}
      <div className="max-w-6xl mx-auto px-4 py-16">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="bg-white rounded-2xl shadow-lg p-8 mb-16"
        >
          <h2 className="text-3xl font-bold text-green-800 mb-6">
            📊 Hasil Utama Penelitian
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-semibold mb-4 text-gray-800">
                Performansi Model
              </h3>
              <div className="space-y-4">
                <div className="bg-green-50 p-4 rounded-lg border border-green-100">
                  <div className="flex items-center">
                    <div className="text-3xl font-bold text-green-700 mr-4">
                      98.91%
                    </div>
                    <div>
                      <div className="font-medium">Akurasi Validasi</div>
                      <div className="text-sm text-gray-600">
                        Pada dataset validasi
                      </div>
                    </div>
                  </div>
                </div>
                <div className="bg-blue-50 p-4 rounded-lg border border-blue-100">
                  <div className="flex items-center">
                    <div className="text-3xl font-bold text-blue-700 mr-4">
                      99.22%
                    </div>
                    <div>
                      <div className="font-medium">Akurasi Testing</div>
                      <div className="text-sm text-gray-600">
                        Pada dataset testing
                      </div>
                    </div>
                  </div>
                </div>
                <div className="bg-purple-50 p-4 rounded-lg border border-purple-100">
                  <div className="flex items-center">
                    <div className="text-3xl font-bold text-purple-700 mr-4">
                      98.83%
                    </div>
                    <div>
                      <div className="font-medium">Akurasi Training</div>
                      <div className="text-sm text-gray-600">
                        Pada dataset pelatihan
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-4 text-gray-800">
                Metrik Klasifikasi
              </h3>
              <div className="overflow-x-auto">
                <table className="min-w-full bg-white border border-gray-200">
                  <thead className="bg-gray-50">
                    <tr>
                      <th className="py-2 px-4 border-b">Kelas</th>
                      <th className="py-2 px-4 border-b">Precision</th>
                      <th className="py-2 px-4 border-b">Recall</th>
                      <th className="py-2 px-4 border-b">F1-Score</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="py-2 px-4 border-b">Common Rust</td>
                      <td className="py-2 px-4 border-b">1.00</td>
                      <td className="py-2 px-4 border-b">1.00</td>
                      <td className="py-2 px-4 border-b">1.00</td>
                    </tr>
                    <tr>
                      <td className="py-2 px-4 border-b">Gray Leaf Spot</td>
                      <td className="py-2 px-4 border-b">1.00</td>
                      <td className="py-2 px-4 border-b">0.95</td>
                      <td className="py-2 px-4 border-b">0.98</td>
                    </tr>
                    <tr>
                      <td className="py-2 px-4 border-b">Healthy</td>
                      <td className="py-2 px-4 border-b">1.00</td>
                      <td className="py-2 px-4 border-b">1.00</td>
                      <td className="py-2 px-4 border-b">1.00</td>
                    </tr>
                    <tr>
                      <td className="py-2 px-4 border-b">
                        Northern Leaf Blight
                      </td>
                      <td className="py-2 px-4 border-b">0.96</td>
                      <td className="py-2 px-4 border-b">1.00</td>
                      <td className="py-2 px-4 border-b">0.98</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <p className="text-sm text-gray-500 mt-2">
                Macro Avg F1-Score: 0.99 | Weighted Avg F1-Score: 0.99
              </p>
            </div>
          </div>
        </motion.div>

        {/* Gaussian Filter Section */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="bg-white rounded-2xl shadow-lg p-8 mb-16"
        >
          <div className="flex items-center mb-6">
            <div className="bg-purple-100 p-3 rounded-full mr-4">
              <FaFilter className="text-purple-600 text-2xl" />
            </div>
            <h2 className="text-3xl font-bold text-gray-800">
              Implementasi Gaussian Filter
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-semibold mb-4 text-gray-800">
                Custom Layer Gaussian Blur
              </h3>
              <p className="text-gray-700 mb-4">
                Gaussian Filter digunakan sebagai tahap preprocessing untuk
                mengurangi noise dan variasi pencahayaan pada gambar daun
                jagung. Implementasi dilakukan melalui custom layer di
                TensorFlow.
              </p>

              <div className="bg-gray-800 rounded-xl p-4 mb-4">
                <pre className="text-green-400 text-sm overflow-x-auto">
                  <code>
                    {`class GaussianBlurLayer(tf.keras.layers.Layer):
    def __init__(self, kernel_size=(5, 5), sigma=1.0, **kwargs):
        super(GaussianBlurLayer, self).__init__(**kwargs)
        self.kernel_size = kernel_size
        self.sigma = sigma

    def call(self, inputs):
        # Membuat Gaussian kernel
        kernel = self.create_gaussian_kernel(self.kernel_size, self.sigma)
        
        # Mengaplikasikan kernel dengan depthwise convolution
        blurred_image = tf.nn.depthwise_conv2d(
            inputs, kernel, 
            strides=[1, 1, 1, 1], 
            padding="SAME"
        )
        return blurred_image`}
                  </code>
                </pre>
              </div>
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-4 text-gray-800">
                Parameter dan Implementasi
              </h3>
              <div className="space-y-4">
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-bold mb-2">Kernel Size (5x5)</h4>
                  <p className="text-sm text-gray-600">
                    Ukuran matriks filter yang memberikan keseimbangan optimal
                    antara noise reduction dan preservasi detail.
                  </p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-bold mb-2">Sigma (1.0)</h4>
                  <p className="text-sm text-gray-600">
                    Standar deviasi Gaussian kernel yang menentukan seberapa
                    kuat efek blur diterapkan.
                  </p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-bold mb-2">
                    Integrasi dengan Data Augmentation
                  </h4>
                  <p className="text-sm text-gray-600">
                    Gaussian Blur digabungkan dengan augmentasi lain seperti
                    random flip, rotation, zoom, dan contrast.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* InceptionV3 Section */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="bg-white rounded-2xl shadow-lg p-8 mb-16"
        >
          <div className="flex items-center mb-6">
            <div className="bg-blue-100 p-3 rounded-full mr-4">
              <FaLayerGroup className="text-blue-600 text-2xl" />
            </div>
            <h2 className="text-3xl font-bold text-gray-800">
              Arsitektur InceptionV3
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-semibold mb-4 text-gray-800">
                Implementasi Transfer Learning
              </h3>
              <p className="text-gray-700 mb-4">
                Model InceptionV3 diinisialisasi dengan weights dari ImageNet
                dan dimodifikasi untuk klasifikasi 4 kelas penyakit jagung.
              </p>

              <h4 className="font-semibold mb-2">Konfigurasi Khusus:</h4>
              <ul className="space-y-3 mb-6">
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">✓</span>
                  <span>Input size: 299x299x3 (RGB)</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">✓</span>
                  <span>Freeze layer 0-291 (transfer learning)</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">✓</span>
                  <span>Optimizer: Nadam dengan learning rate 0.0001</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">✓</span>
                  <span>Class weighting untuk handling data imbalance</span>
                </li>
              </ul>

              <h4 className="font-semibold mb-2">Struktur Tambahan:</h4>
              <ul className="space-y-2">
                <li>Global Average Pooling</li>
                <li>Dropout (0.4)</li>
                <li>Dense Layer (512 units, ReLU, L2 regularization 0.03)</li>
                <li>Output Layer (4 units, Softmax)</li>
              </ul>
            </div>

            <div>
              <div className="bg-gray-100 rounded-xl p-4 mb-6">
                <img
                  src="/inc.png"
                  alt="InceptionV3 Architecture"
                  className="w-full h-auto rounded-lg"
                />
                <p className="text-center text-sm text-gray-500 mt-2">
                  Diagram blok InceptionV3
                </p>
              </div>
              <div className="bg-blue-50 rounded-xl p-4">
                <h4 className="font-bold mb-2 text-blue-800">
                  Detail Pelatihan
                </h4>
                <div className="grid grid-cols-2 gap-2 text-sm">
                  <div className="bg-white p-2 rounded border">
                    <span className="font-medium">Epochs:</span> 20
                  </div>
                  <div className="bg-white p-2 rounded border">
                    <span className="font-medium">Batch Size:</span> 128
                  </div>
                  <div className="bg-white p-2 rounded border">
                    <span className="font-medium">Early Stopping:</span>{" "}
                    Patience 3
                  </div>
                  <div className="bg-white p-2 rounded border">
                    <span className="font-medium">Loss Function:</span>{" "}
                    SparseCategoricalCrossentropy
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Performance Section */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="bg-white rounded-2xl shadow-lg p-8"
        >
          <div className="flex items-center mb-6">
            <div className="bg-green-100 p-3 rounded-full mr-4">
              <FaChartLine className="text-green-600 text-2xl" />
            </div>
            <h2 className="text-3xl font-bold text-gray-800">Evaluasi Model</h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-semibold mb-4 text-gray-800">
                Confusion Matrix
              </h3>
              <div className="bg-gray-100 rounded-xl p-4 flex justify-center">
                <img
                  src="/confu.jpg"
                  alt="Confusion Matrix"
                  className="max-w-full h-auto"
                />
              </div>
              <p className="text-center text-sm text-gray-500 mt-2">
                Performa model pada dataset testing (128 samples)
              </p>
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-4 text-gray-800">
                Training History
              </h3>
              <div className="bg-gray-100 rounded-xl p-4 flex justify-center">
                <img
                  src="/chart.jpg"
                  alt="Training History"
                  className="max-w-full h-auto"
                />
              </div>
              <p className="text-center text-sm text-gray-500 mt-2">
                Perkembangan akurasi dan loss selama pelatihan
              </p>
            </div>
          </div>

          <div className="mt-8">
            <div className="flex items-center gap-4">
              <FaBalanceScale className="text-green-600 text-2xl mb-4" />
              <h3 className="text-xl font-semibold mb-4 text-gray-800">
                Class Weight
              </h3>
            </div>
            <p className="text-gray-700 mb-4">
              Untuk mengatasi data imbalance, digunakan class weighting dengan
              konfigurasi berikut:
            </p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <div className="bg-white border rounded-lg p-4 text-center">
                <div className="font-bold text-gray-800">Common Rust</div>
                <div className="text-blue-600 font-bold">0.81</div>
              </div>
              <div className="bg-white border rounded-lg p-4 text-center">
                <div className="font-bold text-gray-800">Gray Leaf Spot</div>
                <div className="text-blue-600 font-bold">1.88</div>
              </div>
              <div className="bg-white border rounded-lg p-4 text-center">
                <div className="font-bold text-gray-800">Healthy</div>
                <div className="text-blue-600 font-bold">0.83</div>
              </div>
              <div className="bg-white border rounded-lg p-4 text-center">
                <div className="font-bold text-gray-800">N. Leaf Blight</div>
                <div className="text-blue-600 font-bold">0.98</div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}

export default MachineLearning;
