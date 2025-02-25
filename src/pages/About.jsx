import { Link } from "react-router-dom";
import { motion } from "framer-motion";

function About() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-green-50 to-white">
      {/* Navbar dengan efek glass */}
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
                className="text-gray-600 hover:-translate-y-1 duration-300 hover:text-green-700 px-3 py-2 text-sm font-medium transition-all"
              >
                About
              </Link>
              <Link
                to="/predict"
                className="text-gray-600 hover:-translate-y-1 duration-300  hover:text-green-700 px-3 py-2 text-sm font-medium transition-all"
              >
                Predict
              </Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <motion.section
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="pt-32 pb-20 px-4 text-center relative overflow-hidden"
      >
        <div className="max-w-4xl mx-auto">
          <h1 className="text-5xl font-bold text-green-800 mb-6">
            Mengenal Penyakit Daun Jagung
          </h1>
          <p className="text-lg text-gray-600 mb-8">
            Temukan informasi lengkap tentang berbagai jenis penyakit yang umum
            menyerang tanaman jagung dan cara identifikasinya
          </p>
          <div className="relative h-96 rounded-2xl overflow-hidden shadow-xl">
            <img
              src="/field.png"
              alt="Corn Field"
              className="w-full h-full object-cover absolute inset-0"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-green-900/60 via-transparent" />
          </div>
        </div>
      </motion.section>

      {/* Disease Cards Section */}
      <div className="max-w-7xl mx-auto px-4 py-16">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-3">
          {/* Northern Leaf Blight Card */}
          <motion.div
            whileHover={{ y: -10 }}
            className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow"
          >
            <img
              src="/nothern-leaf.jpg"
              alt="Northern Leaf Blight"
              className="w-full h-48 object-cover"
            />
            <div className="p-6">
              <div className="flex items-center gap-2 mb-3">
                <div className="badge badge-error badge-lg">Fungal</div>
                <div className="badge badge-warning badge-lg">High Risk</div>
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-2">
                Northern Leaf Blight
              </h3>
              <p className="text-gray-600 mb-4">
                Disebabkan jamur Exserohilum turcicum dengan gejala bercak
                memanjang berwarna coklat keabu-abuan.
              </p>
              <div className="flex items-center text-sm text-gray-500">
                <svg
                  className="w-5 h-5 mr-2"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
                <span>Penyebaran Cepat di Musim Hujan</span>
              </div>
            </div>
          </motion.div>

          {/* Gray Leaf Spot Card */}
          <motion.div
            whileHover={{ y: -10 }}
            className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow"
          >
            <img
              src="/gray-leaf.jpg"
              alt="Gray Leaf Spot"
              className="w-full h-48 object-cover"
            />
            <div className="p-6">
              <div className="flex items-center gap-2 mb-3">
                <div className="badge badge-error badge-lg">Fungal</div>
                <div className="badge badge-success badge-lg">
                  Moderate Risk
                </div>
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-2">
                Gray Leaf Spot
              </h3>
              <p className="text-gray-600 mb-4">
                Jamur Cercospora zeae-maydis menyebabkan bercak kecil abu-abu
                yang menyebar dan membuat daun kering.
              </p>
              <div className="flex items-center text-sm text-gray-500">
                <svg
                  className="w-5 h-5 mr-2"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
                <span>Menyukai Kelembapan Tinggi</span>
              </div>
            </div>
          </motion.div>

          {/* Common Rust Card */}
          <motion.div
            whileHover={{ y: -10 }}
            className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow"
          >
            <img
              src="/common-rust.jpg"
              alt="Common Rust"
              className="w-full h-48 object-cover"
            />
            <div className="p-6">
              <div className="flex items-center gap-2 mb-3">
                <div className="badge badge-error badge-lg">Fungal</div>
                <div className="badge badge-info badge-lg">Low Risk</div>
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-2">
                Common Rust
              </h3>
              <p className="text-gray-600 mb-4">
                Jamur Puccinia sorghi menimbulkan bintik oranye/coklat yang
                mengurangi kemampuan fotosintesis.
              </p>
              <div className="flex items-center text-sm text-gray-500">
                <svg
                  className="w-5 h-5 mr-2"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
                <span>Umum di Awal Musim Tanam</span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Prevention Section */}
      <div className="max-w-6xl mx-auto px-4 py-16">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="bg-green-100 rounded-2xl p-8 shadow-inner"
        >
          <h2 className="text-3xl font-bold text-green-900 mb-6">
            🛡️ Pencegahan & Penanganan
          </h2>
          <div className="grid gap-6 md:grid-cols-2">
            <div className="flex items-start gap-4">
              <div className="bg-green-500 text-white p-3 rounded-lg">
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
                  />
                </svg>
              </div>
              <div>
                <h3 className="font-semibold text-lg mb-2">Rotasi Tanaman</h3>
                <p className="text-gray-700">
                  Lakukan rotasi tanaman dengan jenis lain untuk memutus siklus
                  hidup patogen
                </p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="bg-green-500 text-white p-3 rounded-lg">
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4"
                  />
                </svg>
              </div>
              <div>
                <h3 className="font-semibold text-lg mb-2">
                  Benih Tahan Penyakit
                </h3>
                <p className="text-gray-700">
                  Gunakan varietas jagung yang memiliki ketahanan terhadap
                  penyakit
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Footer */}
      <footer className="p-4 shadow-md text-center mt-20">
        <p className="text-sm text-gray-600">
          &copy; 2025 Plant Leaf Classifier | All rights reserved
        </p>
      </footer>
    </div>
  );
}

export default About;
