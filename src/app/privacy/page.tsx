'use client'

import { useState } from 'react'
import { Menu, X, ArrowLeft, Shield, Eye, Lock, Database, UserCheck } from 'lucide-react'
import Link from 'next/link'

export default function PrivacyPolicy() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      {/* Navigation */}
      <nav className="bg-white shadow-lg sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            <div className="flex items-center">
              <Link href="/" className="flex items-center">
                <img src="/logo.png" alt="PT OBFA INDONESIA" className="h-10 w-auto mr-3" />
                <div>
                  <h1 className="text-xl font-bold bg-gradient-to-r from-blue-900 to-blue-600 bg-clip-text text-transparent">
                    PT OBFA INDONESIA
                  </h1>
                  <p className="text-xs text-gray-600">Perdagangan Besar Terpercaya</p>
                </div>
              </Link>
            </div>
            
            <div className="hidden md:flex items-center space-x-8">
              <Link href="/" className="text-gray-700 hover:text-blue-900 transition-colors font-medium">Beranda</Link>
              <Link href="/privacy" className="text-blue-900 font-medium">Privacy Policy</Link>
              <Link href="/terms" className="text-gray-700 hover:text-blue-900 transition-colors font-medium">Terms & Conditions</Link>
            </div>

            <div className="md:hidden flex items-center">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="text-gray-700 hover:text-blue-900"
              >
                {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile menu */}
        {isMenuOpen && (
          <div className="md:hidden bg-white border-t">
            <div className="px-2 pt-2 pb-3 space-y-1">
              <Link href="/" className="block px-3 py-2 text-gray-700 hover:text-blue-900 font-medium">Beranda</Link>
              <Link href="/privacy" className="block px-3 py-2 text-blue-900 font-medium">Privacy Policy</Link>
              <Link href="/terms" className="block px-3 py-2 text-gray-700 hover:text-blue-900 font-medium">Terms & Conditions</Link>
            </div>
          </div>
        )}
      </nav>

      {/* Breadcrumb */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8">
        <nav className="flex items-center space-x-2 text-sm">
          <Link href="/" className="text-gray-600 hover:text-blue-900 flex items-center">
            <ArrowLeft size={16} className="mr-1" />
            Beranda
          </Link>
          <span className="text-gray-400">/</span>
          <span className="text-blue-900 font-medium">Privacy Policy</span>
        </nav>
      </div>

      {/* Main Content */}
      <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12">
          {/* Header */}
          <div className="text-center mb-12">
            <div className="bg-blue-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
              <Shield className="text-blue-900" size={40} />
            </div>
            <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Kebijakan Privasi <span className="text-blue-900">PT OBFA INDONESIA</span>
            </h1>
            <p className="text-lg text-gray-600">
              Terakhir diperbarui: {new Date().toLocaleDateString('id-ID', { year: 'numeric', month: 'long', day: 'numeric' })}
            </p>
          </div>

          {/* Introduction */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Pendahuluan</h2>
            <p className="text-gray-600 leading-relaxed mb-4">
              Selamat datang di PT OBFA INDONESIA. Kami sangat menghargai privasi Anda dan berkomitmen 
              untuk melindungi data pribadi yang Anda percayakan kepada kami. Kebijakan Privasi ini 
              menjelaskan bagaimana kami mengumpulkan, menggunakan, melindungi, dan membagikan informasi 
              pribadi Anda saat menggunakan layanan kami.
            </p>
            <p className="text-gray-600 leading-relaxed">
              Dengan menggunakan layanan PT OBFA INDONESIA, Anda menyetujui praktik-praktik yang 
              dijelaskan dalam kebijakan ini.
            </p>
          </section>

          {/* Information Collection */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
              <Database className="text-blue-900 mr-3" size={28} />
              Informasi yang Kami Kumpulkan
            </h2>
            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Informasi Pribadi</h3>
                <ul className="list-disc list-inside text-gray-600 space-y-2">
                  <li>Nama lengkap dan informasi identitas</li>
                  <li>Alamat email dan nomor telepon</li>
                  <li>Alamat perusahaan dan alamat pengiriman</li>
                  <li>Informasi pembayaran dan faktur</li>
                  <li>NPWP dan informasi perpajakan</li>
                </ul>
              </div>
              
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Informasi Bisnis</h3>
                <ul className="list-disc list-inside text-gray-600 space-y-2">
                  <li>Nama perusahaan dan jenis usaha</li>
                  <li>Volume dan jenis produk yang dibeli</li>
                  <li>Riwayat transaksi dan pesanan</li>
                  <li>Preferensi produk dan layanan</li>
                </ul>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Informasi Teknis</h3>
                <ul className="list-disc list-inside text-gray-600 space-y-2">
                  <li>Alamat IP dan informasi perangkat</li>
                  <li>Data penggunaan website</li>
                  <li>Cookie dan teknologi pelacakan</li>
                  <li>Informasi log dan akses sistem</li>
                </ul>
              </div>
            </div>
          </section>

          {/* Usage of Information */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
              <Eye className="text-blue-900 mr-3" size={28} />
              Penggunaan Informasi
            </h2>
            <p className="text-gray-600 leading-relaxed mb-4">
              PT OBFA INDONESIA menggunakan informasi yang kami kumpulkan untuk:
            </p>
            <ul className="list-disc list-inside text-gray-600 space-y-2">
              <li>Memproses dan menyelesaikan transaksi perdagangan</li>
              <li>Menyediakan layanan pelanggan dan dukungan teknis</li>
              <li>Mengirim informasi produk dan penawaran khusus</li>
              <li>Meningkatkan kualitas produk dan layanan kami</li>
              <li>Memenuhi persyaratan hukum dan perpajakan</li>
              <li>Mencegah penipuan dan aktivitas ilegal</li>
              <li>Menganalisis tren penggunaan dan preferensi pelanggan</li>
            </ul>
          </section>

          {/* Data Protection */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
              <Lock className="text-blue-900 mr-3" size={28} />
              Perlindungan Data
            </h2>
            <p className="text-gray-600 leading-relaxed mb-4">
              PT OBFA INDONESIA berkomitmen untuk melindungi data pribadi Anda dengan:
            </p>
            <ul className="list-disc list-inside text-gray-600 space-y-2">
              <li>Enkripsi data selama transmisi dan penyimpanan</li>
              <li>Akses terbatas ke informasi pribadi</li>
              <li>Firewall dan sistem keamanan canggih</li>
              <li>Audit keamanan rutin</li>
              <li>Pelatihan staf tentang perlindungan data</li>
              <li>Kebijakan retensi data yang jelas</li>
            </ul>
          </section>

          {/* User Rights */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
              <UserCheck className="text-blue-900 mr-3" size={28} />
              Hak Anda sebagai Pengguna
            </h2>
            <p className="text-gray-600 leading-relaxed mb-4">
              Sebagai pengguna layanan PT OBFA INDONESIA, Anda memiliki hak untuk:
            </p>
            <ul className="list-disc list-inside text-gray-600 space-y-2">
              <li>Mengakses dan melihat data pribadi Anda</li>
              <li>Memperbarui atau mengoreksi informasi yang tidak akurat</li>
              <li>Menghapus data pribadi sesuai ketentuan yang berlaku</li>
              <li>Menolak pemasaran langsung dari kami</li>
              <li>Meminta salinan data pribadi Anda</li>
              <li>Melakukan pengaduan tentang penanganan data kami</li>
            </ul>
          </section>

          {/* Third Party Sharing */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Pembagian dengan Pihak Ketiga</h2>
            <p className="text-gray-600 leading-relaxed mb-4">
              PT OBFA INDONESIA tidak menjual atau menyewakan data pribadi Anda kepada pihak ketiga. 
              Kami hanya akan membagikan informasi Anda dalam keadaan berikut:
            </p>
            <ul className="list-disc list-inside text-gray-600 space-y-2">
              <li>Dengan persetujuan explisit dari Anda</li>
              <li>Untuk memproses transaksi dengan mitra bisnis terpercaya</li>
              <li>Untuk memenuhi persyaratan hukum dan peraturan</li>
              <li>Dengan penyedia layanan yang membantu operasional kami</li>
              <li>Dalam kasus penjualan atau merger perusahaan</li>
            </ul>
          </section>

          {/* Contact Information */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Hubungi Kami</h2>
            <p className="text-gray-600 leading-relaxed mb-6">
              Jika Anda memiliki pertanyaan tentang Kebijakan Privasi PT OBFA INDONESIA atau 
              ingin melaksanakan hak Anda, silakan hubungi kami:
            </p>
            <div className="bg-blue-50 p-6 rounded-lg">
              <div className="space-y-3">
                <p className="text-gray-700">
                  <strong>Email:</strong> privacy@obfaindonesia.co.id
                </p>
                <p className="text-gray-700">
                  <strong>Telepon:</strong> 0822-3305-9428
                </p>
                <p className="text-gray-700">
                  <strong>Alamat:</strong> Jalan Alternatif Cibubur Kawasan Niaga Citra Grand Ruko Citywalk 3 Nomor 8, 
                  Kel. Jatikarya, Kec. Jatisampurna, Kota Bekasi, Prov. Jawa Barat 17435
                </p>
              </div>
            </div>
          </section>

          {/* Policy Updates */}
          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Pembaruan Kebijakan</h2>
            <p className="text-gray-600 leading-relaxed">
              PT OBFA INDONESIA dapat memperbarui Kebijakan Privasi ini dari waktu ke waktu. 
              Setiap perubahan akan dipublikasikan di halaman ini dengan tanggal pembaruan terbaru. 
              Kami menyarankan Anda untuk secara berkala meninjau kebijakan ini untuk tetap 
              informasi tentang praktik privasi kami.
            </p>
          </section>

          {/* Footer */}
          <div className="border-t pt-8 text-center">
            <p className="text-gray-600 text-sm">
              © 2024 PT OBFA INDONESIA. All rights reserved.
            </p>
            <div className="mt-4 space-x-4">
              <Link href="/" className="text-blue-900 hover:text-blue-700 text-sm">
                Kembali ke Beranda
              </Link>
              <span className="text-gray-400">|</span>
              <Link href="/terms" className="text-blue-900 hover:text-blue-700 text-sm">
                Terms & Conditions
              </Link>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}