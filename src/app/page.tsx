'use client'

import { useState } from 'react'
import { Menu, X, Phone, Mail, MapPin, Package, Globe, Users, TrendingUp, Shield, ChevronRight } from 'lucide-react'

export default function LandingPage() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      {/* Navigation */}
      <nav className="bg-white shadow-lg sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            <div className="flex items-center">
              <img src="/logo.png" alt="PT OBFA INDONESIA" className="h-10 w-auto mr-3" />
              <div>
                <h1 className="text-xl font-bold bg-gradient-to-r from-blue-900 to-blue-600 bg-clip-text text-transparent">
                  PT OBFA INDONESIA
                </h1>
                <p className="text-xs text-gray-600">Perdagangan Besar Terpercaya</p>
              </div>
            </div>
            
            <div className="hidden md:flex items-center space-x-8">
              <a href="#beranda" className="text-gray-700 hover:text-blue-900 transition-colors font-medium">Beranda</a>
              <a href="#tentang" className="text-gray-700 hover:text-blue-900 transition-colors font-medium">Tentang</a>
              <a href="#layanan" className="text-gray-700 hover:text-blue-900 transition-colors font-medium">Layanan</a>
              <a href="#kontak" className="text-gray-700 hover:text-blue-900 transition-colors font-medium">Kontak</a>
              <div className="flex space-x-4">
                <a href="/privacy" className="text-sm text-gray-600 hover:text-blue-900 transition-colors">Privacy</a>
                <a href="/terms" className="text-sm text-gray-600 hover:text-blue-900 transition-colors">Terms</a>
              </div>
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
              <a href="#beranda" className="block px-3 py-2 text-gray-700 hover:text-blue-900 font-medium">Beranda</a>
              <a href="#tentang" className="block px-3 py-2 text-gray-700 hover:text-blue-900 font-medium">Tentang</a>
              <a href="#layanan" className="block px-3 py-2 text-gray-700 hover:text-blue-900 font-medium">Layanan</a>
              <a href="#kontak" className="block px-3 py-2 text-gray-700 hover:text-blue-900 font-medium">Kontak</a>
              <div className="flex space-x-4 px-3 py-2">
                <a href="/privacy" className="text-sm text-gray-600 hover:text-blue-900">Privacy</a>
                <a href="/terms" className="text-sm text-gray-600 hover:text-blue-900">Terms</a>
              </div>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section id="beranda" className="relative py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              <span className="bg-gradient-to-r from-blue-900 via-blue-700 to-blue-600 bg-clip-text text-transparent">
                PT OBFA INDONESIA
              </span>
            </h1>
            <h2 className="text-2xl md:text-3xl text-gray-800 mb-4 font-semibold">
              Perdagangan Besar Terpercaya di Indonesia
            </h2>
            <p className="text-lg md:text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
              Mitra strategis Anda untuk solusi perdagangan besar yang komprehensif, 
              handal, dan profesional di seluruh Indonesia.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-gradient-to-r from-blue-900 to-blue-700 text-white px-8 py-3 rounded-lg font-semibold hover:from-blue-800 hover:to-blue-600 transition-all transform hover:scale-105 shadow-lg">
                Hubungi Kami
              </button>
              <button className="border-2 border-blue-900 text-blue-900 px-8 py-3 rounded-lg font-semibold hover:bg-blue-900 hover:text-white transition-all">
                Pelajari Lebih Lanjut
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-12 bg-gradient-to-r from-blue-900 to-blue-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
            <div className="text-white">
              <div className="text-3xl font-bold mb-2">500+</div>
              <div className="text-blue-100">Produk Tersedia</div>
            </div>
            <div className="text-white">
              <div className="text-3xl font-bold mb-2">1000+</div>
              <div className="text-blue-100">Pelanggan Puas</div>
            </div>
            <div className="text-white">
              <div className="text-3xl font-bold mb-2">10+</div>
              <div className="text-blue-100">Tahun Pengalaman</div>
            </div>
            <div className="text-white">
              <div className="text-3xl font-bold mb-2">24/7</div>
              <div className="text-blue-100">Layanan Support</div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="tentang" className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Tentang <span className="text-blue-900">PT OBFA INDONESIA</span>
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Perusahaan perdagangan besar yang berkomitmen menyediakan produk berkualitas 
              dengan layanan terbaik untuk memenuhi kebutuhan bisnis Anda.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <img src="/logo.png" alt="PT OBFA INDONESIA" className="rounded-lg shadow-2xl" />
            </div>
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Misi Kami</h3>
              <p className="text-gray-600 mb-6">
                Menjadi mitra perdagangan yang paling andal dan terpercaya di Indonesia, 
                menyediakan berbagai macam barang dengan kualitas terbaik dan harga yang kompetitif.
              </p>
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Visi Kami</h3>
              <p className="text-gray-600 mb-6">
                Menjadi leader dalam industri perdagangan besar di Indonesia dengan inovasi 
                berkelanjutan dan kepuasan pelanggan yang maksimal.
              </p>
              <div className="grid grid-cols-2 gap-4">
                <div className="flex items-center space-x-3">
                  <Shield className="text-blue-900" size={24} />
                  <span className="text-gray-700">Terpercaya</span>
                </div>
                <div className="flex items-center space-x-3">
                  <TrendingUp className="text-blue-900" size={24} />
                  <span className="text-gray-700">Berkembang</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Users className="text-blue-900" size={24} />
                  <span className="text-gray-700">Profesional</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Globe className="text-blue-900" size={24} />
                  <span className="text-gray-700">Terjangkau</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="layanan" className="py-20 bg-gray-50 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Layanan Unggulan Kami
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Berbagai solusi perdagangan besar untuk memenuhi kebutuhan bisnis Anda
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mb-6">
                <Package className="text-blue-900" size={32} />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Distribusi Produk</h3>
              <p className="text-gray-600 mb-4">
                Jaringan distribusi luas untuk pengiriman produk ke seluruh Indonesia 
                dengan sistem logistik yang efisien.
              </p>
              <a href="#" className="text-blue-900 font-semibold flex items-center hover:text-blue-700">
                Pelajari lebih lanjut <ChevronRight size={20} />
              </a>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mb-6">
                <Globe className="text-blue-900" size={32} />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Perdagangan Internasional</h3>
              <p className="text-gray-600 mb-4">
                Layanan impor dan ekspor produk dengan proses yang mudah dan 
                dokumentasi yang lengkap.
              </p>
              <a href="#" className="text-blue-900 font-semibold flex items-center hover:text-blue-700">
                Pelajari lebih lanjut <ChevronRight size={20} />
              </a>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mb-6">
                <Users className="text-blue-900" size={32} />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Konsultasi Bisnis</h3>
              <p className="text-gray-600 mb-4">
                Tim ahli kami siap memberikan konsultasi untuk solusi perdagangan 
                yang tepat untuk bisnis Anda.
              </p>
              <a href="#" className="text-blue-900 font-semibold flex items-center hover:text-blue-700">
                Pelajari lebih lanjut <ChevronRight size={20} />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="kontak" className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Hubungi <span className="text-blue-900">PT OBFA INDONESIA</span>
            </h2>
            <p className="text-lg text-gray-600">
              Siap melayani kebutuhan perdagangan besar Anda
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            <div className="bg-white p-8 rounded-xl shadow-lg">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Informasi Kontak</h3>
              
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <MapPin className="text-blue-900 mt-1" size={20} />
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">Alamat</h4>
                    <p className="text-gray-600">
                      Jalan Alternatif Cibubur Kawasan Niaga Citra Grand Ruko Citywalk 3 Nomor 8, 
                      Kel. Jatikarya, Kec. Jatisampurna, Kota Bekasi, Prov. Jawa Barat 17435
                    </p>
                  </div>
                </div>

                <div className="flex items-center space-x-4">
                  <Phone className="text-blue-900" size={20} />
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">Telepon</h4>
                    <p className="text-gray-600">0822-3305-9428</p>
                  </div>
                </div>

                <div className="flex items-center space-x-4">
                  <Mail className="text-blue-900" size={20} />
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">Email</h4>
                    <p className="text-gray-600">info@obfaindonesia.co.id</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-blue-900 to-blue-700 p-8 rounded-xl shadow-lg text-white">
              <h3 className="text-2xl font-bold mb-6">Kirim Pesan</h3>
              <form className="space-y-4">
                <div>
                  <label className="block text-sm font-medium mb-2">Nama Lengkap</label>
                  <input 
                    type="text" 
                    className="w-full px-4 py-2 rounded-lg text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-300"
                    placeholder="Masukkan nama Anda"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Email</label>
                  <input 
                    type="email" 
                    className="w-full px-4 py-2 rounded-lg text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-300"
                    placeholder="email@example.com"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Pesan</label>
                  <textarea 
                    className="w-full px-4 py-2 rounded-lg text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-300 h-32"
                    placeholder="Tulis pesan Anda..."
                  ></textarea>
                </div>
                <button 
                  type="submit" 
                  className="w-full bg-white text-blue-900 px-6 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-colors"
                >
                  Kirim Pesan
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center mb-4">
                <img src="/logo.png" alt="PT OBFA INDONESIA" className="h-8 w-auto mr-2" />
                <h3 className="text-xl font-bold">PT OBFA INDONESIA</h3>
              </div>
              <p className="text-gray-400">
                Perdagangan besar terpercaya di Indonesia
              </p>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Layanan</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors">Distribusi Produk</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Perdagangan Internasional</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Konsultasi Bisnis</a></li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Perusahaan</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#tentang" className="hover:text-white transition-colors">Tentang Kami</a></li>
                <li><a href="/privacy" className="hover:text-white transition-colors">Privacy Policy</a></li>
                <li><a href="/terms" className="hover:text-white transition-colors">Terms & Conditions</a></li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Kontak</h4>
              <ul className="space-y-2 text-gray-400">
                <li>0822-3305-9428</li>
                <li>info@obfaindonesia.co.id</li>
                <li>Bekasi, Jawa Barat</li>
              </ul>
            </div>
          </div>

          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2024 PT OBFA INDONESIA. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}