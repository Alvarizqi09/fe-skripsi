import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { FaStar } from "react-icons/fa";

function About() {
  const diseases = [
    {
      id: "northern-leaf-blight",
      title: "Northern Leaf Blight",
      image: "/nothern-leaf.jpg",
      type: "Fungal",
      risk: "High",
      description:
        "Disebabkan jamur Exserohilum turcicum dengan gejala bercak memanjang berwarna coklat keabu-abuan.",
      characteristic: "Penyebaran Cepat di Musim Hujan",
    },
    {
      id: "gray-leaf-spot",
      title: "Gray Leaf Spot",
      image: "/gray-leaf.jpg",
      type: "Fungal",
      risk: "Moderate",
      description:
        "Jamur Cercospora zeae-maydis menyebabkan bercak kecil abu-abu yang menyebar dan membuat daun kering.",
      characteristic: "Menyukai Kelembapan Tinggi",
    },
    {
      id: "common-rust",
      title: "Common Rust",
      image: "/common-rust.jpg",
      type: "Fungal",
      risk: "Low",
      description:
        "Jamur Puccinia sorghi menimbulkan bintik oranye/coklat yang mengurangi kemampuan fotosintesis.",
      characteristic: "Umum di Awal Musim Tanam",
    },
  ];
  return (
    <div className="min-h-screen bg-gradient-to-b from-green-50 to-white">
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
          {diseases.map((disease) => (
            <Link to={`/disease/${disease.id}`} key={disease.id}>
              <motion.div
                whileHover={{ y: -10 }}
                className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow cursor-pointer"
              >
                <img
                  src={disease.image}
                  alt={disease.title}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <div className="flex items-center gap-2 mb-3">
                    <div className="badge badge-error badge-lg">
                      {disease.type}
                    </div>
                    <div
                      className={`badge ${
                        disease.risk === "High"
                          ? "badge-warning"
                          : disease.risk === "Moderate"
                          ? "badge-success"
                          : "badge-info"
                      } badge-lg`}
                    >
                      {disease.risk} Risk
                    </div>
                  </div>
                  <h3 className="text-xl font-bold text-gray-800 mb-2">
                    {disease.title}
                  </h3>
                  <p className="text-gray-600 mb-4">{disease.description}</p>
                  <div className="flex items-center text-sm text-gray-500">
                    <FaStar className="w-5 h-5 mr-2" />
                    <span>{disease.characteristic}</span>
                  </div>
                </div>
              </motion.div>
            </Link>
          ))}
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
    </div>
  );
}

export default About;
