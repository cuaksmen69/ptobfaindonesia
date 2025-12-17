'use client'

import { useState } from 'react'
import { Menu, X, ArrowLeft, FileText, Scale, AlertCircle, CheckCircle, Gavel } from 'lucide-react'
import Link from 'next/link'

export default function TermsAndConditions() {
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
              <Link href="/privacy" className="text-gray-700 hover:text-blue-900 transition-colors font-medium">Privacy Policy</Link>
              <Link href="/terms" className="text-blue-900 font-medium">Terms & Conditions</Link>
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
              <Link href="/privacy" className="block px-3 py-2 text-gray-700 hover:text-blue-900 font-medium">Privacy Policy</Link>
              <Link href="/terms" className="block px-3 py-2 text-blue-900 font-medium">Terms & Conditions</Link>
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
          <span className="text-blue-900 font-medium">Terms & Conditions</span>
        </nav>
      </div>

      {/* Main Content */}
      <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12">
          {/* Header */}
          <div className="text-center mb-12">
            <div className="bg-blue-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
              <FileText className="text-blue-900" size={40} />
            </div>
            <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Syarat dan Ketentuan <span className="text-blue-900">PT OBFA INDONESIA</span>
            </h1>
            <p className="text-lg text-gray-600">
              Terakhir diperbarui: {new Date().toLocaleDateString('id-ID', { year: 'numeric', month: 'long', day: 'numeric' })}
            </p>
          </div>

          {/* Introduction */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Pendahuluan</h2>
            <p className="text-gray-600 leading-relaxed mb-4">
              Selamat datang di PT OBFA INDONESIA. Syarat dan Ketentuan ini mengatur penggunaan 
              layanan perdagangan besar yang kami sediakan. Dengan menggunakan layanan kami, 
              Anda setuju untuk terikat oleh syarat dan ketentuan yang diuraikan di bawah ini.
            </p>
            <p className="text-gray-600 leading-relaxed">
              Jika Anda tidak setuju dengan bagian mana pun dari syarat dan ketentuan ini, 
              harap jangan gunakan layanan kami.
            </p>
          </section>

          {/* Services Description */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
              <Scale className="text-blue-900 mr-3" size={28} />
              Deskripsi Layanan
            </h2>
            <p className="text-gray-600 leading-relaxed mb-4">
              PT OBFA INDONESIA menyediakan layanan perdagangan besar yang meliputi:
            </p>
            <ul className="list-disc list-inside text-gray-600 space-y-2">
              <li>Distribusi berbagai macam barang produk</li>
              <li>Layanan impor dan ekspor</li>
              <li>Konsultasi bisnis perdagangan</li>
              <li>Manajemen rantai pasokan</li>
              <li>Layanan logistik dan pengiriman</li>
              <li>Solusi perdagangan kustom</li>
            </ul>
          </section>

          {/* User Obligations */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
              <CheckCircle className="text-blue-900 mr-3" size={28} />
              Kewajiban Pengguna
            </h2>
            <p className="text-gray-600 leading-relaxed mb-4">
              Sebagai pengguna layanan PT OBFA INDONESIA, Anda setuju untuk:
            </p>
            <ul className="list-disc list-inside text-gray-600 space-y-2">
              <li>Memberikan informasi yang akurat dan lengkap</li>
              <li>Mematuhi semua hukum dan peraturan yang berlaku</li>
              <li>Tidak menggunakan layanan untuk tujuan ilegal</li>
              <li>Memenuhi kewajiban pembayaran tepat waktu</li>
              <li>Menjaga kerahasiaan informasi akun</li>
              <li>Melaporkan masalah atau ketidaksesuaian segera</li>
              <li>Bekerja sama dalam penyelesaian sengketa</li>
            </ul>
          </section>

          {/* Payment Terms */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Syarat Pembayaran</h2>
            <div className="space-y-4">
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Metode Pembayaran</h3>
                <p className="text-gray-600 leading-relaxed">
                  Kami menerima berbagai metode pembayaran termasuk transfer bank, 
                  kartu kredit, dan syarat pembayaran kredit untuk pelanggan yang memenuhi syarat.
                </p>
              </div>
              
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Jadwal Pembayaran</h3>
                <p className="text-gray-600 leading-relaxed">
                  Pembayaran harus dilakukan sesuai dengan faktur yang diterbitkan. 
                  Keterlambatan pembayaran dapat dikenakan bunga sesuai dengan ketentuan yang berlaku.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Pajak dan Biaya</h3>
                <p className="text-gray-600 leading-relaxed">
                  Semua harga yang tercantum belum termasuk PPN dan pajak lain yang berlaku. 
                  Biaya pengiriman dan penanganan akan ditambahkan sesuai dengan lokasi pengiriman.
                </p>
              </div>
            </div>
          </section>

          {/* Delivery and Shipping */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Pengiriman dan Pengiriman</h2>
            <p className="text-gray-600 leading-relaxed mb-4">
              PT OBFA INDONESIA berkomitmen untuk pengiriman yang tepat waktu dan aman:
            </p>
            <ul className="list-disc list-inside text-gray-600 space-y-2">
              <li>Estimasi waktu pengiriman akan diberikan saat konfirmasi pesanan</li>
              <li>Risiko kehilangan atau kerusakan beralih kepada pembeli saat pengiriman</li>
              <li>Biaya pengiriman akan ditentukan berdasarkan berat dan lokasi</li>
              <li>Asuransi pengiriman tersedia dengan biaya tambahan</li>
              <li>Pembatalan pesanan dapat dilakukan sebelum proses pengiriman dimulai</li>
            </ul>
          </section>

          {/* Product Quality */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Kualitas Produk</h2>
            <p className="text-gray-600 leading-relaxed mb-4">
              Kami menjamin kualitas produk yang kami jual:
            </p>
            <ul className="list-disc list-inside text-gray-600 space-y-2">
              <li>Semua produk memenuhi standar kualitas yang ditetapkan</li>
              <li>Produk yang cacat dapat dikembalikan atau ditukar</li>
              <li>Garansi produk sesuai dengan ketentuan pabrikan</li>
              <li>Dokumen kualitas dan sertifikat tersedia upon request</li>
            </ul>
          </section>

          {/* Intellectual Property */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Hak Kekayaan Intelektual</h2>
            <p className="text-gray-600 leading-relaxed mb-4">
              Semua konten, merek dagang, dan materi milik PT OBFA INDONESIA dilindungi 
              oleh hukum hak kekayaan intelektual. Pengguna tidak diperbolehkan:
            </p>
            <ul className="list-disc list-inside text-gray-600 space-y-2">
              <li>Menggunakan merek dagang kami tanpa izin tertulis</li>
              <li>Menyalin atau mendistribusikan konten kami</li>
              <li>Membuat produk turunan dari layanan kami</li>
              <li>Melanggar hak kekayaan intelektual pihak ketiga</li>
            </ul>
          </section>

          {/* Limitation of Liability */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
              <AlertCircle className="text-blue-900 mr-3" size={28} />
              Pembatasan Tanggung Jawab
            </h2>
            <p className="text-gray-600 leading-relaxed mb-4">
              Sejauh diizinkan oleh hukum, PT OBFA INDONESIA tidak bertanggung jawab atas:
            </p>
            <ul className="list-disc list-inside text-gray-600 space-y-2">
              <li>Kerugian tidak langsung, insidental, atau konsekuensial</li>
              <li>Kehilangan keuntungan atau peluang bisnis</li>
              <li>Kerusakan data atau sistem</li>
              <li>Interruption layanan di luar kontrol kami</li>
              <li>Kesalahan atau kelalaian dari pihak ketiga</li>
            </ul>
          </section>

          {/* Dispute Resolution */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
              <Gavel className="text-blue-900 mr-3" size={28} />
              Penyelesaian Sengketa
            </h2>
            <div className="space-y-4">
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Negosiasi</h3>
                <p className="text-gray-600 leading-relaxed">
                  Kami berkomitmen untuk menyelesaikan sengketa secara damai melalui 
                  negosiasi dan diskusi yang konstruktif.
                </p>
              </div>
              
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Mediasi</h3>
                <p className="text-gray-600 leading-relaxed">
                  Jika negosiasi gagal, sengketa akan diselesaikan melalui mediasi 
                  dengan mediator netral yang disepakati bersama.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Yurisdiksi</h3>
                <p className="text-gray-600 leading-relaxed">
                  Syarat dan ketentuan ini diatur oleh hukum Republik Indonesia. 
                  Setiap sengketa akan diselesaikan di pengadilan yang berwenang di Bekasi, Jawa Barat.
                </p>
              </div>
            </div>
          </section>

          {/* Termination */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Penghentian Layanan</h2>
            <p className="text-gray-600 leading-relaxed mb-4">
              PT OBFA INDONESIA berhak menghentikan atau menangguhkan layanan jika:
            </p>
            <ul className="list-disc list-inside text-gray-600 space-y-2">
              <li>Pengguna melanggar syarat dan ketentuan</li>
              <li>Pengguna menggunakan layanan untuk tujuan ilegal</li>
              <li>Terdapat aktivitas penipuan atau pencucian uang</li>
              <li>Pengguna tidak memenuhi kewajiban pembayaran</li>
              <li>Diperlukan oleh hukum atau peraturan yang berlaku</li>
            </ul>
          </section>

          {/* Contact Information */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Hubungi Kami</h2>
            <p className="text-gray-600 leading-relaxed mb-6">
              Jika Anda memiliki pertanyaan tentang Syarat dan Ketentuan PT OBFA INDONESIA, 
              silakan hubungi kami:
            </p>
            <div className="bg-blue-50 p-6 rounded-lg">
              <div className="space-y-3">
                <p className="text-gray-700">
                  <strong>Email:</strong> legal@obfaindonesia.co.id
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

          {/* Agreement */}
          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Persetujuan</h2>
            <p className="text-gray-600 leading-relaxed">
              Dengan menggunakan layanan PT OBFA INDONESIA, Anda menyatakan bahwa Anda telah 
              membaca, memahami, dan setuju untuk terikat oleh Syarat dan Ketentuan ini. 
              PT OBFA INDONESIA berhak untuk mengubah syarat dan ketentuan ini kapan saja 
              dengan memberikan pemberitahuan kepada pengguna.
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
              <Link href="/privacy" className="text-blue-900 hover:text-blue-700 text-sm">
                Privacy Policy
              </Link>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}