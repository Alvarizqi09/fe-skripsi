import { Link } from "react-router-dom";
import { motion } from "framer-motion";

function About() {
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

      {/* Pengertian Jagung */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="max-w-6xl mx-auto px-4 py-16 flex flex-col md:flex-row items-center gap-8"
      >
        {/* Teks Penjelasan */}
        <div className="w-full md:w-1/2">
          <h2 className="text-2xl font-semibold text-primary mb-4">
            Apa Itu Jagung?
          </h2>
          <p className="text-text leading-relaxed">
            Jagung (Zea mays) adalah salah satu tanaman pangan penting di dunia
            yang menjadi sumber karbohidrat selain beras dan gandum. Tanaman ini
            berasal dari Amerika Tengah dan telah menyebar ke seluruh dunia.
            Jagung digunakan sebagai bahan pangan, pakan ternak, dan bahan baku
            industri.
          </p>
        </div>
        {/* Gambar Jagung */}
        <div className="w-full md:w-1/2">
          <img
            src="/corn.jpg"
            alt="Corn"
            className="w-full h-auto rounded-lg shadow-lg"
          />
        </div>
      </motion.div>

      {/* Penyakit Northern Leaf Blight */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="max-w-6xl mx-auto px-4 py-16 flex flex-col md:flex-row items-center gap-8"
      >
        {/* Gambar Penyakit */}
        <div className="w-full md:w-1/2">
          <img
            src="/nothern-leaf.jpg"
            alt="Northern Leaf Blight"
            className="w-full h-auto rounded-lg shadow-lg"
          />
        </div>
        {/* Teks Penjelasan */}
        <div className="w-full md:w-1/2">
          <h2 className="text-2xl font-semibold text-primary mb-4">
            1. Hawar Daun Utara (Northern Leaf Blight)
          </h2>
          <p className="text-text leading-relaxed">
            Penyakit ini disebabkan oleh jamur Exserohilum turcicum. Gejalanya
            berupa bercak-bercak panjang berwarna coklat keabu-abuan pada daun
            jagung.
          </p>
        </div>
      </motion.div>

      {/* Penyakit Gray Leaf Spot */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="max-w-6xl mx-auto px-4 py-16 flex flex-col md:flex-row-reverse items-center gap-8"
      >
        {/* Gambar Penyakit */}
        <div className="w-full md:w-1/2">
          <img
            src="/gray-leaf.jpg"
            alt="Gray Leaf Spot"
            className="w-full h-auto rounded-lg shadow-lg"
          />
        </div>
        {/* Teks Penjelasan */}
        <div className="w-full md:w-1/2">
          <h2 className="text-2xl font-semibold text-primary mb-4">
            2. Hawar Daun Kelabu (Gray Leaf Spot)
          </h2>
          <p className="text-text leading-relaxed">
            Disebabkan oleh jamur Cercospora zeae-maydis. Gejalanya berupa
            bercak kecil berwarna abu-abu yang dapat menyebar dan menyebabkan
            daun mengering.
          </p>
        </div>
      </motion.div>

      {/* Penyakit Common Rust */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="max-w-6xl mx-auto px-4 py-16 flex flex-col md:flex-row items-center gap-8"
      >
        {/* Gambar Penyakit */}
        <div className="w-full md:w-1/2">
          <img
            src="/common-rust.jpg"
            alt="Common Rust"
            className="w-full h-auto rounded-lg shadow-lg"
          />
        </div>
        {/* Teks Penjelasan */}
        <div className="w-full md:w-1/2">
          <h2 className="text-2xl font-semibold text-primary mb-4">
            3. Karat Daun (Common Rust)
          </h2>
          <p className="text-text leading-relaxed">
            Penyakit ini disebabkan oleh jamur Puccinia sorghi. Gejalanya berupa
            bintik-bintik kecil berwarna oranye atau coklat pada permukaan daun.
          </p>
        </div>
      </motion.div>
    </div>
  );
}

export default About;
