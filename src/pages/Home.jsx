import { Link } from "react-router-dom";

function Home() {
  return (
    <div className="min-h-screen bg-background">
      {/* Navbar */}
      <nav className="bg-white shadow-lg">
        <div className="max-w-6xl mx-auto px-4">
          <div className="flex justify-between items-center py-4">
            <div className="text-xl font-semibold text-primary">
              Corn Disease Classification
            </div>
            <div className="flex space-x-4">
              <Link
                to="/"
                className="text-text hover:text-primary px-3 py-2 rounded-md text-sm font-medium"
              >
                Home
              </Link>
              <Link
                to="/about"
                className="text-text hover:text-primary px-3 py-2 rounded-md text-sm font-medium"
              >
                About
              </Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <div className="max-w-4xl mx-auto px-4 py-16 text-center">
        <h1 className="text-4xl font-bold text-secondary mb-6">
          Klasifikasi Penyakit Jagung Menggunakan Algoritma CNN dengan
          InceptionV3
        </h1>
        <p className="text-lg text-text mb-8">
          Website ini merupakan implementasi dari penelitian skripsi yang
          bertujuan untuk mengklasifikasikan penyakit pada tanaman jagung
          menggunakan algoritma Convolutional Neural Network (CNN) dengan
          arsitektur InceptionV3. Dengan teknologi ini, petani dapat mendeteksi
          penyakit jagung secara cepat dan akurat.
        </p>
        <Link
          to="/predict"
          className="bg-primary text-white px-6 py-3 rounded-lg hover:bg-primary-dark transition duration-300"
        >
          Coba Sekarang
        </Link>
      </div>

      {/* Features Section */}
      <div className="max-w-6xl mx-auto px-4 py-16">
        <h2 className="text-3xl font-bold text-center text-secondary mb-12">
          Fitur Utama
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white p-6 rounded-lg shadow-lg text-center">
            <h3 className="text-xl font-semibold text-secondary mb-4">
              Deteksi Cepat
            </h3>
            <p className="text-text">
              Mendeteksi penyakit jagung dalam hitungan detik dengan akurasi
              tinggi.
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-lg text-center">
            <h3 className="text-xl font-semibold text-secondary mb-4">
              Mudah Digunakan
            </h3>
            <p className="text-text">
              Antarmuka yang sederhana dan ramah pengguna untuk semua kalangan.
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-lg text-center">
            <h3 className="text-xl font-semibold text-secondary mb-4">
              Hasil Akurat
            </h3>
            <p className="text-text">
              Menggunakan model InceptionV3 yang telah dilatih dengan dataset
              berkualitas.
            </p>
          </div>
        </div>
      </div>
      <footer className=" p-4 shadow-md text-center">
        <p className="text-sm text-gray-600">
          &copy; 2025 Plant Leaf Classifier | All rights reserved
        </p>
      </footer>
    </div>
  );
}

export default Home;
