// src/data/soal.js

const soalData = [
  {
    id: 1,
    modulId: 1,
    judul: "SELECT Dasar - Produk Stok Rendah",
    materi:
      "Sebagai analis gudang, Anda diminta menampilkan seluruh data produk yang stoknya di bawah batas minimum untuk keperluan restock.",
    instruksi:
      "Tampilkan semua kolom dari tabel produk yang memiliki stok kurang dari 20.",
    tabelSkema: [
      { id: 1, nama_produk: "Baterai Lithium", kategori: "Energi", stok: 15, harga: 500000 },
      { id: 2, nama_produk: "Panel Surya 100W", kategori: "Energi", stok: 45, harga: 1200000 },
      { id: 3, nama_produk: "Kabel Tembaga", kategori: "Manufaktur", stok: 10, harga: 75000 }
    ],
    hint: "Gunakan WHERE stok < 20"
  },

  {
  id: 2,
  modulId: 1,
  judul: "SELECT Kolom Tertentu",
  materi:
    "Manajer hanya membutuhkan informasi nama produk dan harga untuk laporan keuangan.",
  instruksi:
    "Tampilkan kolom nama_produk dan harga dari tabel produk.",
  tabelSkema: [
    { id: 1, nama_produk: "Baterai Lithium", kategori: "Energi", stok: 15, harga: 500000 },
    { id: 2, nama_produk: "Panel Surya 100W", kategori: "Energi", stok: 45, harga: 1200000 },
    { id: 3, nama_produk: "Kabel Tembaga", kategori: "Manufaktur", stok: 10, harga: 75000 }
  ],
  hint: "Sebutkan nama kolom setelah SELECT."
},

{
  id: 3,
  modulId: 1,
  judul: "Filter Harga Tinggi",
  materi:
    "Perusahaan ingin mengetahui produk dengan harga di atas 500000.",
  instruksi:
    "Tampilkan semua kolom produk dengan harga lebih dari 500000.",
  tabelSkema: [
    { id: 1, nama_produk: "Baterai Lithium", kategori: "Energi", stok: 15, harga: 500000 },
    { id: 2, nama_produk: "Panel Surya 100W", kategori: "Energi", stok: 45, harga: 1200000 },
    { id: 3, nama_produk: "Kabel Tembaga", kategori: "Manufaktur", stok: 10, harga: 75000 }
  ],
  hint: "Gunakan WHERE harga > 500000"
},

{
  id: 4,
  modulId: 1,
  judul: "Filter Kategori Energi",
  materi:
    "Divisi Energi ingin melihat seluruh produk dalam kategori mereka.",
  instruksi:
    "Tampilkan semua produk dengan kategori 'Energi'.",
  tabelSkema: [
    { id: 1, nama_produk: "Baterai Lithium", kategori: "Energi", stok: 15, harga: 500000 },
    { id: 2, nama_produk: "Panel Surya 100W", kategori: "Energi", stok: 45, harga: 1200000 },
    { id: 3, nama_produk: "Kabel Tembaga", kategori: "Manufaktur", stok: 10, harga: 75000 }
  ],
  hint: "Gunakan WHERE kategori = 'Energi'"
},

{
  id: 5,
  modulId: 1,
  judul: "Filter Stok Lebih Dari",
  materi:
    "Tim logistik ingin melihat produk dengan stok lebih dari 20.",
  instruksi:
    "Tampilkan semua produk dengan stok lebih dari 20.",
  tabelSkema: [
    { id: 1, nama_produk: "Baterai Lithium", kategori: "Energi", stok: 15, harga: 500000 },
    { id: 2, nama_produk: "Panel Surya 100W", kategori: "Energi", stok: 45, harga: 1200000 },
    { id: 3, nama_produk: "Kabel Tembaga", kategori: "Manufaktur", stok: 10, harga: 75000 }
  ],
  hint: "Gunakan WHERE stok > 20"
},

{
  id: 6,
  modulId: 1,
  judul: "Filter Tidak Sama Dengan",
  materi:
    "Manajemen ingin melihat produk yang bukan berasal dari kategori Energi.",
  instruksi:
    "Tampilkan semua produk yang kategorinya bukan 'Energi'.",
  tabelSkema: [
    { id: 1, nama_produk: "Baterai Lithium", kategori: "Energi", stok: 15, harga: 500000 },
    { id: 2, nama_produk: "Panel Surya 100W", kategori: "Energi", stok: 45, harga: 1200000 },
    { id: 3, nama_produk: "Kabel Tembaga", kategori: "Manufaktur", stok: 10, harga: 75000 }
  ],
  hint: "Gunakan WHERE kategori != 'Energi'"
},

{
  id: 7,
  modulId: 1,
  judul: "Filter AND",
  materi:
    "Tim ingin melihat produk kategori Energi dengan stok kurang dari 50.",
  instruksi:
    "Tampilkan semua produk dengan kategori 'Energi' dan stok kurang dari 50.",
  tabelSkema: [
    { id: 1, nama_produk: "Baterai Lithium", kategori: "Energi", stok: 15, harga: 500000 },
    { id: 2, nama_produk: "Panel Surya 100W", kategori: "Energi", stok: 45, harga: 1200000 },
    { id: 3, nama_produk: "Kabel Tembaga", kategori: "Manufaktur", stok: 10, harga: 75000 }
  ],
  hint: "Gunakan AND"
},

{
  id: 8,
  modulId: 1,
  judul: "Filter OR",
  materi:
    "Manajemen ingin melihat produk dengan stok sangat rendah atau harga sangat tinggi.",
  instruksi:
    "Tampilkan produk dengan stok kurang dari 10 atau harga lebih dari 1000000.",
  tabelSkema: [
    { id: 1, nama_produk: "Baterai Lithium", kategori: "Energi", stok: 15, harga: 500000 },
    { id: 2, nama_produk: "Panel Surya 100W", kategori: "Energi", stok: 45, harga: 1200000 },
    { id: 3, nama_produk: "Kabel Tembaga", kategori: "Manufaktur", stok: 10, harga: 75000 }
  ],
  hint: "Gunakan OR"
},

{
  id: 9,
  modulId: 1,
  judul: "Filter BETWEEN",
  materi:
    "Perusahaan ingin melihat produk dengan harga dalam rentang tertentu.",
  instruksi:
    "Tampilkan produk dengan harga antara 100000 dan 600000.",
  tabelSkema: [
    { id: 1, nama_produk: "Baterai Lithium", kategori: "Energi", stok: 15, harga: 500000 },
    { id: 2, nama_produk: "Panel Surya 100W", kategori: "Energi", stok: 45, harga: 1200000 },
    { id: 3, nama_produk: "Kabel Tembaga", kategori: "Manufaktur", stok: 10, harga: 75000 }
  ],
  hint: "Gunakan BETWEEN 100000 AND 600000"
},

{
  id: 10,
  modulId: 1,
  judul: "Filter LIKE",
  materi:
    "Tim pemasaran ingin melihat produk yang namanya diawali huruf 'B'.",
  instruksi:
    "Tampilkan semua produk dengan nama_produk diawali huruf 'B'.",
  tabelSkema: [
    { id: 1, nama_produk: "Baterai Lithium", kategori: "Energi", stok: 15, harga: 500000 },
    { id: 2, nama_produk: "Panel Surya 100W", kategori: "Energi", stok: 45, harga: 1200000 },
    { id: 3, nama_produk: "Kabel Tembaga", kategori: "Manufaktur", stok: 10, harga: 75000 }
  ],
  hint: "Gunakan LIKE 'B%'"
},

{
    id: 11,
    modulId: 2,
    judul: "Filtering & Kondisi - Produk Energi",
    materi:
      "Manajemen ingin melihat produk yang hanya berasal dari kategori Energi.",
    instruksi:
      "Tampilkan nama_produk dan harga dari produk yang kategorinya 'Energi'.",
    tabelSkema: [
      { id: 1, nama_produk: "Baterai Lithium", kategori: "Energi", harga: 500000 },
      { id: 2, nama_produk: "Panel Surya 100W", kategori: "Energi", harga: 1200000 },
      { id: 3, nama_produk: "Kabel Tembaga", kategori: "Manufaktur", harga: 75000 }
    ],
    hint: "Gunakan WHERE kategori = 'Energi'"
  },

  {
    id: 12,
    modulId: 3,
    judul: "Sorting & LIMIT - Produk Termahal",
    materi:
      "Direktur ingin mengetahui produk dengan harga tertinggi.",
    instruksi:
      "Tampilkan semua kolom dan urutkan berdasarkan harga dari yang tertinggi, batasi hanya 2 data.",
    tabelSkema: [
      { id: 1, nama_produk: "Baterai", harga: 500000 },
      { id: 2, nama_produk: "Panel Surya", harga: 1200000 },
      { id: 3, nama_produk: "Kabel", harga: 75000 }
    ],
    hint: "Gunakan ORDER BY harga DESC dan LIMIT 2"
  },

  {
    id: 13,
    modulId: 4,
    judul: "Aggregate - Total Produk",
    materi:
      "Tim ingin mengetahui total jumlah produk yang tersedia.",
    instruksi:
      "Hitung jumlah seluruh produk.",
    tabelSkema: [
      { id: 1, nama_produk: "Baterai" },
      { id: 2, nama_produk: "Panel Surya" },
      { id: 3, nama_produk: "Kabel" }
    ],
    hint: "Gunakan COUNT(*)"
  },

  {
    id: 14,
    modulId: 5,
    judul: "GROUP BY - Total Produk per Kategori",
    materi:
      "Manajemen ingin melihat jumlah produk berdasarkan kategori.",
    instruksi:
      "Hitung jumlah produk untuk setiap kategori.",
    tabelSkema: [
      { id: 1, kategori: "Energi" },
      { id: 2, kategori: "Energi" },
      { id: 3, kategori: "Manufaktur" }
    ],
    hint: "Gunakan GROUP BY kategori"
  },

  {
    id: 15,
    modulId: 6,
    judul: "INNER JOIN - Data Pesanan",
    materi:
      "Gabungkan data pelanggan dengan data pesanan mereka.",
    instruksi:
      "Tampilkan nama pelanggan dan total pesanan menggunakan INNER JOIN.",
    tabelSkema: [
      { pelanggan_id: 1, nama: "Andi" },
      { pesanan_id: 1, pelanggan_id: 1, total: 200000 }
    ],
    hint: "Gunakan INNER JOIN ON pelanggan.id = pesanan.pelanggan_id"
  },

  {
    id: 16,
    modulId: 7,
    judul: "LEFT JOIN - Pelanggan Tanpa Pesanan",
    materi:
      "Tampilkan semua pelanggan termasuk yang belum memiliki pesanan.",
    instruksi:
      "Gunakan LEFT JOIN untuk menampilkan nama pelanggan dan total pesanan.",
    tabelSkema: [
      { pelanggan_id: 1, nama: "Andi" },
      { pelanggan_id: 2, nama: "Budi" }
    ],
    hint: "Gunakan LEFT JOIN"
  },

  {
    id: 17,
    modulId: 8,
    judul: "Subquery - Harga di Atas Rata-rata",
    materi:
      "Cari produk yang harganya di atas rata-rata.",
    instruksi:
      "Gunakan subquery untuk menampilkan produk dengan harga lebih besar dari rata-rata.",
    tabelSkema: [
      { id: 1, harga: 500000 },
      { id: 2, harga: 1200000 },
      { id: 3, harga: 75000 }
    ],
    hint: "Gunakan SELECT AVG(harga) di dalam subquery"
  },

  {
    id: 18,
    modulId: 9,
    judul: "Index & Optimasi",
    materi:
      "Database mulai melambat saat mencari berdasarkan email.",
    instruksi:
      "Tuliskan perintah untuk membuat index pada kolom email di tabel users.",
    tabelSkema: [],
    hint: "Gunakan CREATE INDEX"
  },

  {
    id: 19,
    modulId: 10,
    judul: "Studi Kasus E-Commerce",
    materi:
      "Manajemen ingin mengetahui total penjualan setiap pelanggan.",
    instruksi:
      "Tampilkan nama pelanggan dan total seluruh transaksi mereka.",
    tabelSkema: [
      { pelanggan: "Andi", total: 200000 },
      { pelanggan: "Andi", total: 300000 },
      { pelanggan: "Budi", total: 150000 }
    ],
    hint: "Gunakan SUM(total) dan GROUP BY pelanggan"
  }
];

export default soalData;