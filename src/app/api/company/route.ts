import { NextResponse } from 'next/server'

export async function GET() {
  const companyInfo = {
    name: 'PT OBFA INDONESIA',
    tagline: 'Perdagangan Besar Terpercaya',
    description: 'Perusahaan perdagangan besar yang berkomitmen menyediakan produk berkualitas dengan layanan terbaik untuk memenuhi kebutuhan bisnis Anda.',
    address: {
      street: 'Jalan Alternatif Cibubur Kawasan Niaga Citra Grand Ruko Citywalk 3 Nomor 8',
      village: 'Jatikarya',
      district: 'Jatisampurna',
      city: 'Kota Bekasi',
      province: 'Jawa Barat',
      postalCode: '17435',
      fullAddress: 'Jalan Alternatif Cibubur Kawasan Niaga Citra Grand Ruko Citywalk 3 Nomor 8, Kel. Jatikarya, Kec. Jatisampurna, Kota Bekasi, Prov. Jawa Barat 17435'
    },
    contact: {
      phone: '082233059428',
      email: 'info@obfaindonesia.co.id',
      website: 'www.obfaindonesia.co.id'
    },
    business: {
      type: 'Perdagangan Besar',
      category: 'Macam Barang',
      description: 'Distributor dan supplier berbagai macam barang untuk kebutuhan industri dan perdagangan'
    },
    services: [
      {
        id: 1,
        name: 'Distribusi Produk',
        description: 'Jaringan distribusi luas untuk pengiriman produk ke seluruh Indonesia dengan sistem logistik yang efisien.',
        icon: 'package'
      },
      {
        id: 2,
        name: 'Perdagangan Internasional',
        description: 'Layanan impor dan ekspor produk dengan proses yang mudah dan dokumentasi yang lengkap.',
        icon: 'globe'
      },
      {
        id: 3,
        name: 'Konsultasi Bisnis',
        description: 'Tim ahli kami siap memberikan konsultasi untuk solusi perdagangan yang tepat untuk bisnis Anda.',
        icon: 'users'
      }
    ],
    stats: [
      { label: 'Produk Tersedia', value: '500+' },
      { label: 'Pelanggan Puas', value: '1000+' },
      { label: 'Tahun Pengalaman', value: '10+' },
      { label: 'Layanan Support', value: '24/7' }
    ],
    social: {
      facebook: '#',
      instagram: '#',
      linkedin: '#',
      twitter: '#'
    },
    legal: {
      registration: 'PT OBFA INDONESIA',
      taxId: 'ID',
      established: '2014'
    }
  }

  return NextResponse.json({
    success: true,
    data: companyInfo
  })
}