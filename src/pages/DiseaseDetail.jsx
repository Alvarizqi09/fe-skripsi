// pages/DiseaseDetail.jsx
import { Link, useParams } from "react-router-dom";
import { motion } from "framer-motion";
import {
  GiPlantWatering,
  GiSpray,
  GiLeafSwirl,
  GiHealthNormal,
  GiCorn,
} from "react-icons/gi";
import { MdBiotech, MdOutlineScience } from "react-icons/md";
import { FaLeaf, FaShieldAlt, FaSeedling } from "react-icons/fa";

const diseases = [
  {
    id: "northern-leaf-blight",
    title: "Northern Leaf Blight",
    image: "/nothern-leaf.jpg",
    type: "Fungal",
    risk: "High",
    description:
      "Disebabkan jamur Exserohilum turcicum dengan gejala bercak memanjang berwarna coklat keabu-abuan.",
    symptoms: [
      "Bercak elips berwarna abu-abu",
      "Daun mengering dari bawah ke atas",
      "Ukuran bercak 2-15 cm",
    ],
    prevention: [
      "Rotasi tanaman minimal 2 tahun",
      "Pengolahan sisa tanaman terinfeksi",
      "Aplikasi fungisida tepat waktu",
    ],
    treatment: "Fungisida berbahan aktif azoxystrobin atau propiconazole",
    scientificName: "Exserohilum turcicum",
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
    symptoms: [
      "Bercak persegi panjang berwarna abu-abu",
      "Lesi dibatasi oleh tulang daun",
      "Pada infeksi berat, daun menjadi coklat dan kering",
    ],
    prevention: [
      "Rotasi tanaman dengan tanaman non-jagung selama 2 tahun",
      "Pengolahan tanah untuk mempercepat dekomposisi sisa tanaman",
      "Tanam varietas tahan Gray Leaf Spot",
    ],
    treatment:
      "Fungisida berbahan aktif azoxystrobin, pyraclostrobin, atau propiconazole",
    scientificName: "Cercospora zeae-maydis",
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
    symptoms: [
      "Pustula oval berwarna coklat kemerahan pada kedua sisi daun",
      "Pustula berubah menjadi oranye/coklat saat matang",
      "Daun yang terinfeksi parah menguning dan mati",
    ],
    prevention: [
      "Tanam varietas jagung tahan karat",
      "Pantau tanaman secara rutin untuk deteksi dini",
      "Hindari irigasi yang berlebihan",
    ],
    treatment: "Fungisida berbahan aktif tebuconazole atau pyraclostrobin",
    scientificName: "Puccinia sorghi",
    characteristic: "Umum di Awal Musim Tanam",
  },
];

function DiseaseDetail() {
  const { id } = useParams();
  const disease = diseases.find((d) => d.id === id);

  if (!disease) return <div>Penyakit tidak ditemukan</div>;

  return (
    <div className="min-h-screen bg-gradient-to-b from-green-50 to-white">
      <motion.main
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="max-w-7xl mx-auto px-4 py-12"
      >
        <div className="grid lg:grid-cols-2 gap-8 mb-12">
          <motion.div
            whileHover={{ scale: 0.98 }}
            className="relative rounded-2xl overflow-hidden shadow-xl h-96"
          >
            <img
              src={disease.image}
              alt={disease.title}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-green-900/60" />
          </motion.div>

          <div className="space-y-6">
            <div className="flex items-center gap-4 mb-6">
              <GiCorn className="w-12 h-12 text-green-600" />
              <h1 className="text-4xl font-bold text-green-900">
                {disease.title}
              </h1>
            </div>

            <div className="flex gap-4 mb-6">
              <div className="badge badge-lg badge-error gap-2">
                <MdOutlineScience />
                {disease.type}
              </div>
              <div
                className={`badge badge-lg gap-2 ${
                  disease.risk === "High" ? "badge-warning" : "badge-success"
                }`}
              >
                <FaShieldAlt />
                Risiko {disease.risk}
              </div>
            </div>

            <div className="prose max-w-none">
              <h3 className="flex items-center gap-2 text-xl font-semibold text-green-800">
                <FaLeaf className="text-green-600" />
                Deskripsi Penyakit
              </h3>
              <p className="text-gray-700">{disease.description}</p>

              <h3 className="flex items-center gap-2 text-xl font-semibold text-green-800 mt-6">
                <GiLeafSwirl className="text-green-600" />
                Gejala Utama
              </h3>
              <ul className="list-disc pl-6">
                {disease.symptoms.map((symptom, index) => (
                  <li key={index} className="text-gray-700">
                    {symptom}
                  </li>
                ))}
              </ul>

              <h3 className="flex items-center gap-2 text-xl font-semibold text-green-800 mt-6">
                <GiHealthNormal className="text-green-600" />
                Penanganan
              </h3>
              <p className="text-gray-700">{disease.treatment}</p>
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          <motion.div
            whileHover={{ y: -5 }}
            className="bg-white p-8 rounded-2xl shadow-lg"
          >
            <h3 className="flex items-center gap-3 text-2xl font-bold text-green-900 mb-6">
              <GiPlantWatering className="w-8 h-8 text-green-600" />
              Pencegahan
            </h3>
            <ul className="space-y-4">
              {disease.prevention.map((step, index) => (
                <li key={index} className="flex items-start gap-3">
                  <div className="bg-green-100 p-2 rounded-lg">
                    <FaSeedling className="w-5 h-5 text-green-600" />
                  </div>
                  <p className="text-gray-700 flex-1">{step}</p>
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div
            whileHover={{ y: -5 }}
            className="bg-white p-8 rounded-2xl shadow-lg"
          >
            <h3 className="flex items-center gap-3 text-2xl font-bold text-green-900 mb-6">
              <MdBiotech className="w-8 h-8 text-green-600" />
              Informasi Ilmiah
            </h3>
            <dl className="grid grid-cols-2 gap-4">
              <div className="bg-green-50 p-4 rounded-xl">
                <dt className="text-sm text-green-600">Nama Ilmiah</dt>
                <dd className="font-medium text-green-900">
                  {disease.scientificName}
                </dd>
              </div>
              <div className="bg-green-50 p-4 rounded-xl">
                <dt className="text-sm text-green-600">Tipe Patogen</dt>
                <dd className="font-medium text-green-900">{disease.type}</dd>
              </div>
              <div className="bg-green-50 p-4 rounded-xl">
                <dt className="text-sm text-green-600">Metode Pengendalian</dt>
                <dd className="font-medium text-green-900">
                  Kimia & Kultur Teknis
                </dd>
              </div>
              <div className="bg-green-50 p-4 rounded-xl">
                <dt className="text-sm text-green-600">Tingkat Kerusakan</dt>
                <dd className="font-medium text-green-900">
                  {disease.risk === "High"
                    ? "Tinggi (70-100%)"
                    : "Sedang (30-70%)"}
                </dd>
              </div>
            </dl>
          </motion.div>
        </div>

        <div className="mt-12 text-center">
          <Link
            to="/about"
            className="inline-flex items-center gap-2 px-6 py-3 bg-green-600 text-white rounded-full hover:bg-green-700 transition-colors"
          >
            <GiSpray className="w-5 h-5" />
            Kembali ke Daftar Penyakit
          </Link>
        </div>
      </motion.main>
    </div>
  );
}

export default DiseaseDetail;
