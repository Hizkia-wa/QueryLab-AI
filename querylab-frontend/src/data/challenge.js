export const studiKasusData = {
  tema: "E-Commerce Growth Analytics 2026",
  deskripsi:
    "SmartStore sedang mengalami lonjakan transaksi. Sebagai Lead Data Analyst, Anda diminta menyediakan data krusial untuk laporan kuartal pertama. Hubungkan data produk dengan data transaksi untuk mendapatkan insight yang mendalam.",

  tabelTersedia: [
    {
      nama: "produk",
      kolom: ["id", "nama_produk", "kategori", "stok", "harga"]
    },
    {
      nama: "transaksi",
      kolom: ["id_trx", "produk_id", "jumlah", "total_bayar", "metode_bayar"]
    }
  ],

  soal: [
    {
      id: 1,
      judul: "Inventaris Kritis",
      instruksi:
        "Manajemen logistik membutuhkan daftar produk kategori 'Elektronik' yang stoknya di bawah 15 unit untuk segera dipesan ulang. Tampilkan nama produk dan stoknya saja.",
      kisi: "Gunakan SELECT nama_produk, stok ... WHERE kategori = 'Elektronik' AND stok < 15",
      jawabanKey: ["select", "nama_produk", "stok", "from", "produk", "where", "kategori", "elektronik", "and", "stok", "<", "15"]
    },
    {
      id: 2,
      judul: "Analisis Metode Pembayaran",
      instruksi:
        "Tim Finansial ingin melihat semua transaksi yang menggunakan metode bayar 'Transfer Bank' dengan total bayar di atas 1.000.000. Tampilkan seluruh kolom dari tabel transaksi.",
      kisi: "Gunakan SELECT * dengan filter metode_bayar dan total_bayar.",
      jawabanKey: ["select", "*", "from", "transaksi", "where", "metode_bayar", "transfer bank", "total_bayar", ">", "1000000"]
    },
    {
      id: 3,
      judul: "Top Revenue Generator",
      instruksi:
        "Tampilkan daftar transaksi yang memiliki jumlah barang dibeli lebih dari 5, urutkan dari yang total bayarnya paling besar ke terkecil.",
      kisi: "Gunakan WHERE jumlah > 5 dan ORDER BY total_bayar DESC.",
      jawabanKey: ["select", "from", "transaksi", "where", "jumlah", ">", "5", "order", "by", "total_bayar", "desc"]
    },
    {
      id: 4,
      judul: "Integrasi Data Produk & Penjualan",
      instruksi:
        "Laporan Eksekutif: Tampilkan nama produk (dari tabel produk) dan total bayar (dari tabel transaksi) untuk semua penjualan yang telah terjadi. Gunakan relasi produk_id.",
      kisi: "Gunakan INNER JOIN antara produk dan transaksi berdasarkan ID produk.",
      jawabanKey: ["select", "produk.nama_produk", "transaksi.total_bayar", "from", "produk", "inner", "join", "transaksi", "on", "produk.id", "=", "transaksi.produk_id"]
    }
  ]
};