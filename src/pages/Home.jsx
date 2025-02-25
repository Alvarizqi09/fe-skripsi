import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa";
function Home() {
  return (
    <div className="min-h-screen">
      {/* Navbar */}
      <nav className="sticky top-0 bg-white/80 backdrop-blur-md shadow-sm z-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex justify-between items-center h-16">
            <Link
              to="/"
              className="text-2xl font-bold text-green-700 duration-300 flex items-center"
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
                className="text-gray-600 hover:-translate-y-1  hover:text-green-700 px-3 py-2 text-sm font-medium transition-all"
              >
                Predict
              </Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <div className="w-full mx-auto px-4 py-16 text-center bg-hijjau">
        <h1 className="text-4xl font-bold text-white mb-6">
          Klasifikasi Penyakit Jagung Menggunakan Algoritma CNN dengan
          InceptionV3 dan Gaussian Filter
        </h1>
        <p className="max-w-4xl mx-auto text-center text-gray-400 mb-8">
          Website ini merupakan implementasi dari penelitian skripsi yang
          bertujuan untuk mengklasifikasikan penyakit pada tanaman jagung
          menggunakan algoritma Convolutional Neural Network (CNN) dengan
          arsitektur InceptionV3 dan Gaussian Filter. Dengan teknologi ini,
          petani dapat mendeteksi penyakit jagung secara cepat dan akurat.
        </p>
        <Link
          to="/predict"
          className="bg-white text-black px-6 py-3 rounded-lg hover:bg-jagung hover:text-white transition duration-300"
        >
          <button className="font-bold">Coba Sekarang</button>
        </Link>
      </div>

      {/* SVG Section with Hero Image */}
      <div className="relative">
        {/* SVG Background */}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1440 320"
          className="w-full"
        >
          <path
            fill="#11643C"
            fillOpacity="1"
            d="M0,224L34.3,192C68.6,160,137,96,206,101.3C274.3,107,343,181,411,197.3C480,213,549,171,617,165.3C685.7,160,754,192,823,218.7C891.4,245,960,267,1029,234.7C1097.1,203,1166,117,1234,90.7C1302.9,64,1371,96,1406,112L1440,128L1440,0L1405.7,0C1371.4,0,1303,0,1234,0C1165.7,0,1097,0,1029,0C960,0,891,0,823,0C754.3,0,686,0,617,0C548.6,0,480,0,411,0C342.9,0,274,0,206,0C137.1,0,69,0,34,0L0,0Z"
          ></path>
        </svg>

        {/* Hero Image Positioned Absolutely with 3:2 Ratio and Rounded Corners */}
        <img
          src="/hero.png"
          alt="Hero"
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[calc(100%/2.5)] max-h-[calc(100vh/2)] rounded-2xl"
        />
      </div>

      {/* Penyakit Northern Leaf Blight */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="max-w-6xl mx-auto px-4 py-16 flex flex-col md:flex-row items-center gap-8"
      >
        {/* Gambar Penyakit */}
        <div className="w-ful justify-center items-center flex l md:w-1/2">
          <img
            src="/Photo.png"
            alt="foto diri"
            className="w-[398px] h-[398px] rounded-lg "
          />
        </div>
        {/* Teks Penjelasan */}
        <div className="w-full md:w-1/2">
          <h2 className="text-2xl font-semibold text-primary mb-4">
            Tentang Penulis
          </h2>
          <p className="text-text leading-relaxed">
            Nama saya Alvarizqi, saya adalah seorang mahasiswa Teknik
            Informatika yang sedang menempuh pendidikan di Universitas Negeri
            Semarang. Saya tertarik dengan dunia pemrograman dan pengembangan
            aplikasi berbasis web. Website ini adalah salah satu proyek yang
            saya buat untuk memenuhi tugas mata kuliah Skripsi.
          </p>
          <div className="flex gap-4 mt-6">
            <a
              href="https://github.com/Alvarizqi09"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaGithub className="text-2xl text-gray-600 hover:text-primary" />
            </a>
            <a
              href="https://www.linkedin.com/in/alvarizqi/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaLinkedin className="text-2xl text-gray-600 hover:text-primary" />
            </a>
            <a
              href="https://www.instagram.com/alvarizqi__"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaInstagram className="text-2xl text-gray-600 hover:text-primary" />
            </a>
          </div>
        </div>
      </motion.div>
      {/* Footer */}
      <footer className="p-4 shadow-md text-center mt-20">
        <p className="text-sm text-gray-600">
          &copy; 2025 Plant Leaf Classifier | All rights reserved
        </p>
      </footer>
    </div>
  );
}

export default Home;
