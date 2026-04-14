// src/data/soal.js

const soalData = [
{
    id: 1,
    modulId: 4,
    judul: "Pengambilan Seluruh Kolom",
    materi: "Langkah pertama dalam SQL adalah mampu menarik seluruh data dari sebuah tabel untuk melihat struktur informasinya.",
    instruksi: "Tampilkan seluruh data dan semua kolom dari tabel 'produk'.",
    expectedQuery: "SELECT * FROM produk",
    tabelSkema: [
      { id: 1, nama_produk: "Baterai Lithium", kategori: "Energi", stok: 15, harga: 500000 },
      { id: 2, nama_produk: "Panel Surya 100W", kategori: "Energi", stok: 45, harga: 1200000 },
      { id: 3, nama_produk: "Kabel Tembaga", kategori: "Manufaktur", stok: 10, harga: 75000 },
      { id: 4, nama_produk: "Lampu LED 12W", kategori: "Elektronik", stok: 100, harga: 35000 },
      { id: 5, nama_produk: "Inverter DC-AC", kategori: "Energi", stok: 8, harga: 2500000 }
    ],
    hint: "Gunakan tanda asterisk (*) setelah kata kunci SELECT."
  },
  {
    id: 2,
    modulId: 4,
    judul: "Memilih Kolom Spesifik",
    materi: "Untuk efisiensi, kita seringkali hanya membutuhkan kolom tertentu. Manajer hanya ingin melihat daftar nama barang dan harganya saja.",
    instruksi: "Tampilkan kolom 'nama_produk' dan 'harga' dari tabel 'produk'.",
    expectedQuery: "SELECT nama_produk, harga FROM produk",
    tabelSkema: [
      { id: 1, nama_produk: "Baterai Lithium", kategori: "Energi", stok: 15, harga: 500000 },
      { id: 2, nama_produk: "Panel Surya 100W", kategori: "Energi", stok: 45, harga: 1200000 },
      { id: 3, nama_produk: "Kabel Tembaga", kategori: "Manufaktur", stok: 10, harga: 75000 },
      { id: 4, nama_produk: "Lampu LED 12W", kategori: "Elektronik", stok: 100, harga: 35000 },
      { id: 5, nama_produk: "Inverter DC-AC", kategori: "Energi", stok: 8, harga: 2500000 }
    ],
    hint: "Pisahkan nama kolom dengan tanda koma (,) setelah SELECT."
  },
  {
    id: 3,
    modulId: 4,
    judul: "Memberikan Nama Alias (AS)",
    materi: "Nama kolom di database terkadang sulit dibaca. Kita bisa mengubah tampilan nama kolom di hasil laporan menggunakan alias.",
    instruksi: "Tampilkan kolom 'nama_produk' namun ubah nama tampilannya menjadi 'nama_barang' dari tabel 'produk'.",
    expectedQuery: "SELECT nama_produk AS nama_barang FROM produk",
    tabelSkema: [
      { id: 1, nama_produk: "Baterai Lithium", kategori: "Energi", stok: 15, harga: 500000 },
      { id: 2, nama_produk: "Panel Surya 100W", kategori: "Energi", stok: 45, harga: 1200000 },
      { id: 3, nama_produk: "Kabel Tembaga", kategori: "Manufaktur", stok: 10, harga: 75000 },
      { id: 4, nama_produk: "Lampu LED 12W", kategori: "Elektronik", stok: 100, harga: 35000 },
      { id: 5, nama_produk: "Inverter DC-AC", kategori: "Energi", stok: 8, harga: 2500000 }
    ],
    hint: "Gunakan kata kunci AS setelah nama kolom asli."
  },
  {
    id: 4,
    modulId: 4,
    judul: "Operasi Matematika Sederhana",
    materi: "SELECT juga bisa digunakan untuk menghitung. Hitunglah nilai total aset (stok dikali harga) untuk setiap produk.",
    instruksi: "Tampilkan 'nama_produk' dan hasil perkalian antara 'stok' dan 'harga'. Beri nama kolom tersebut sebagai 'total_nilai'.",
    expectedQuery: "SELECT nama_produk, stok * harga AS total_nilai FROM produk",
    tabelSkema: [
      { id: 4, nama_produk: "Baterai Lithium", kategori: "Energi", stok: 15, harga: 500000 },
      { id: 2, nama_produk: "Panel Surya 100W", kategori: "Energi", stok: 45, harga: 1200000 },
      { id: 3, nama_produk: "Kabel Tembaga", kategori: "Manufaktur", stok: 10, harga: 75000 },
      { id: 4, nama_produk: "Lampu LED 12W", kategori: "Elektronik", stok: 100, harga: 35000 },
      { id: 5, nama_produk: "Inverter DC-AC", kategori: "Energi", stok: 8, harga: 2500000 }
    ],
    hint: "Gunakan operator bintang (*) untuk perkalian."
  },
  {
    id: 5,
    modulId: 4,
    judul: "Menghindari Data Duplikat",
    materi: "Terkadang kita hanya ingin tahu ada kategori apa saja di gudang tanpa melihat nama produknya berulang kali.",
    instruksi: "Tampilkan daftar 'kategori' yang unik dari tabel 'produk'.",
    expectedQuery: "SELECT DISTINCT kategori FROM produk",
    tabelSkema: [
      { id: 1, nama_produk: "Baterai", kategori: "Energi", stok: 15, harga: 500000 },
      { id: 2, nama_produk: "Panel Surya", kategori: "Energi", stok: 45, harga: 1200000 },
      { id: 3, nama_produk: "Kabel", kategori: "Manufaktur", stok: 10, harga: 75000 },
      { id: 4, nama_produk: "Lampu", kategori: "Elektronik", stok: 100, harga: 35000 },
      { id: 5, nama_produk: "Obeng", kategori: "Manufaktur", stok: 20, harga: 25000 }
    ],
    hint: "Gunakan kata kunci DISTINCT sebelum nama kolom."
  },
  {
    id: 6,
    modulId: 4,
    judul: "Pengurutan Data (ORDER BY)",
    materi: "Data yang rapi memudahkan pembacaan. HR ingin melihat daftar karyawan dari gaji tertinggi ke terendah.",
    instruksi: "Tampilkan semua kolom dari tabel 'karyawan' dan urutkan berdasarkan 'gaji' secara menurun (descending).",
    expectedQuery: "SELECT * FROM karyawan ORDER BY gaji DESC",
    tabelSkema: [
      { id: 1, nama: "Andi", divisi: "IT", masa_kerja: 2, gaji: 8000000 },
      { id: 2, nama: "Budi", divisi: "HR", masa_kerja: 5, gaji: 6000000 },
      { id: 3, nama: "Citra", divisi: "Sales", masa_kerja: 1, gaji: 12000000 },
      { id: 4, nama: "Dedi", divisi: "IT", masa_kerja: 3, gaji: 9500000 },
      { id: 5, nama: "Eka", divisi: "Finance", masa_kerja: 4, gaji: 7500000 }
    ],
    hint: "Gunakan ORDER BY nama_kolom DESC."
  },
  {
    id: 7,
    modulId: 4,
    judul: "Membatasi Hasil (LIMIT)",
    materi: "Terkadang kita hanya perlu mengambil sampel data atau peringkat teratas saja untuk menghemat sumber daya.",
    instruksi: "Tampilkan 2 baris pertama saja dari tabel 'karyawan'.",
    expectedQuery: "SELECT * FROM karyawan LIMIT 2",
    tabelSkema: [
      { id: 1, nama: "Andi", divisi: "IT", masa_kerja: 2, gaji: 8000000 },
      { id: 2, nama: "Budi", divisi: "HR", masa_kerja: 5, gaji: 6000000 },
      { id: 3, nama: "Citra", divisi: "Sales", masa_kerja: 1, gaji: 12000000 },
      { id: 4, nama: "Dedi", divisi: "IT", masa_kerja: 3, gaji: 9500000 },
      { id: 5, nama: "Eka", divisi: "Finance", masa_kerja: 4, gaji: 7500000 }
    ],
    hint: "Gunakan kata kunci LIMIT di akhir query."
  },
  {
    id: 8,
    modulId: 4,
    judul: "Penggabungan Kolom (Concatenation)",
    materi: "Seringkali kita perlu menggabungkan dua informasi menjadi satu baris teks yang bermakna.",
    instruksi: "Tampilkan kolom 'nama' dan 'divisi' yang digabungkan (Format: 'Nama - Divisi'). Beri nama alias 'info_karyawan'.",
    expectedQuery: "SELECT CONCAT(nama, ' - ', divisi) AS info_karyawan FROM karyawan",
    tabelSkema: [
      { id: 1, nama: "Andi", divisi: "IT", masa_kerja: 2, gaji: 8000000 },
      { id: 2, nama: "Budi", divisi: "HR", masa_kerja: 5, gaji: 6000000 },
      { id: 3, nama: "Citra", divisi: "Sales", masa_kerja: 1, gaji: 12000000 },
      { id: 4, nama: "Dedi", divisi: "IT", masa_kerja: 3, gaji: 9500000 },
      { id: 5, nama: "Eka", divisi: "Finance", masa_kerja: 4, gaji: 7500000 }
    ],
    hint: "Gunakan fungsi CONCAT(kolom1, ' - ', kolom2)."
  },
  {
    id: 9,
    modulId: 4,
    judul: "Filter dengan In-List (IN)",
    materi: "Jika ingin memfilter banyak nilai sekaligus dalam satu kolom, gunakan operator IN agar query lebih ringkas.",
    instruksi: "Tampilkan karyawan yang bekerja di divisi 'IT' atau 'Sales'.",
    expectedQuery: "SELECT * FROM karyawan WHERE divisi IN ('IT', 'Sales')",
    tabelSkema: [
      { id: 1, nama: "Andi", divisi: "IT", masa_kerja: 2, gaji: 8000000 },
      { id: 2, nama: "Budi", divisi: "HR", masa_kerja: 5, gaji: 6000000 },
      { id: 3, nama: "Citra", divisi: "Sales", masa_kerja: 1, gaji: 12000000 },
      { id: 4, nama: "Dedi", divisi: "IT", masa_kerja: 3, gaji: 9500000 },
      { id: 5, nama: "Eka", divisi: "Finance", masa_kerja: 4, gaji: 7500000 }
    ],
    hint: "Gunakan WHERE divisi IN ('IT', 'Sales')."
  },

  {
    id: 10,
    modulId: 4,
    judul: "Mencari Pola Teks (LIKE)",
    materi:
      "Pencarian fleksibel sangat berguna jika kita hanya ingat sebagian nama atau pola tertentu.",
    instruksi:
      "Tampilkan semua karyawan yang namanya diawali dengan huruf 'A'.",
    tabelSkema: [
      { id: 1, nama: "Andi", divisi: "IT" },
      { id: 2, nama: "Anisa", divisi: "Marketing" },
      { id: 3, nama: "Budi", divisi: "HR" }
    ],
    hint: "Gunakan WHERE nama LIKE 'A%'."
  },
  {
    id: 11,
    modulId: 4,
    judul: "Menghitung Selisih Harga",
    materi: "Operasi pengurangan dapat digunakan untuk melihat selisih nilai antar kolom atau dengan nilai statis.",
    instruksi: "Tampilkan 'nama_produk', 'harga_jual', dan selisih antara 'harga_jual' dengan 'harga_modal' sebagai alias 'keuntungan'.",
    expectedQuery: "SELECT nama_produk, harga_jual, (harga_jual - harga_modal) AS keuntungan FROM penjualan",
    tabelSkema: [
      { id: 1, nama_produk: "Mouse Wireless", kategori: "Aksesoris", harga_modal: 100000, harga_jual: 150000 },
      { id: 2, nama_produk: "Keyboard RGB", kategori: "Aksesoris", harga_modal: 200000, harga_jual: 350000 },
      { id: 3, nama_produk: "Monitor 24", kategori: "Elektronik", harga_modal: 1200000, harga_jual: 1500000 },
      { id: 4, nama_produk: "Webcam HD", kategori: "Elektronik", harga_modal: 300000, harga_jual: 450000 },
      { id: 5, nama_produk: "Speaker BT", kategori: "Audio", harga_modal: 150000, harga_jual: 250000 }
    ],
    hint: "Gunakan: (harga_jual - harga_modal) AS keuntungan"
  },
  {
    id: 12,
    modulId: 4,
    judul: "Filter Rentang Harga (BETWEEN)",
    materi: "Untuk memfilter data di antara dua nilai (inklusif), kita bisa menggunakan operator BETWEEN agar query lebih ringkas.",
    instruksi: "Tampilkan semua kolom dari tabel 'penjualan' yang harga_jualnya antara 100000 dan 500000.",
    expectedQuery: "SELECT * FROM penjualan WHERE harga_jual BETWEEN 100000 AND 500000",
    tabelSkema: [
      { id: 1, nama_produk: "Keyboard", kategori: "Aksesoris", stok: 10, harga_jual: 250000 },
      { id: 2, nama_produk: "Monitor", kategori: "Elektronik", stok: 5, harga_jual: 1500000 },
      { id: 3, nama_produk: "Mouse", kategori: "Aksesoris", stok: 20, harga_jual: 150000 },
      { id: 4, nama_produk: "Laptop", kategori: "Elektronik", stok: 3, harga_jual: 8000000 },
      { id: 5, nama_produk: "Adapter", kategori: "Aksesoris", stok: 15, harga_jual: 120000 }
    ],
    hint: "Gunakan: WHERE harga_jual BETWEEN 100000 AND 500000"
  },
  {
    id: 13,
    modulId: 4,
    judul: "Mengecek Data Kosong (IS NULL)",
    materi: "NULL mewakili ketiadaan data. Kita tidak bisa menggunakan '=' untuk NULL, melainkan harus menggunakan 'IS NULL'.",
    instruksi: "Tampilkan semua data produk yang 'keterangan'-nya masih kosong (NULL).",
    expectedQuery: "SELECT * FROM produk WHERE keterangan IS NULL",
    tabelSkema: [
      { id: 1, nama_produk: "Webcam", kategori: "Elektronik", stok: 5, keterangan: null },
      { id: 2, nama_produk: "Speaker", kategori: "Audio", stok: 10, keterangan: "Baru" },
      { id: 3, nama_produk: "Kabel HDMI", kategori: "Aksesoris", stok: 50, keterangan: null },
      { id: 4, nama_produk: "Microphone", kategori: "Audio", stok: 8, keterangan: "Promo" },
      { id: 5, nama_produk: "Tripod", kategori: "Aksesoris", stok: 12, keterangan: null }
    ],
    hint: "Gunakan: WHERE keterangan IS NULL"
  },
  {
    id: 14,
    modulId: 4,
    judul: "Pengurutan Ganda",
    materi: "Kita bisa mengurutkan data berdasarkan lebih dari satu kolom untuk mengelompokkan data secara visual.",
    instruksi: "Tampilkan semua kolom, urutkan berdasarkan 'kategori' secara alfabetis (ASC), lalu berdasarkan 'stok' dari terbanyak ke sedikit (DESC).",
    expectedQuery: "SELECT * FROM produk ORDER BY kategori ASC, stok DESC",
    tabelSkema: [
      { id: 1, nama_produk: "Laptop", kategori: "Elektronik", stok: 5, harga: 7000000 },
      { id: 2, nama_produk: "Smartphone", kategori: "Elektronik", stok: 20, harga: 3000000 },
      { id: 3, nama_produk: "Meja", kategori: "Furniture", stok: 15, harga: 500000 },
      { id: 4, nama_produk: "Kursi", kategori: "Furniture", stok: 30, harga: 250000 },
      { id: 5, nama_produk: "Tablet", kategori: "Elektronik", stok: 12, harga: 4000000 }
    ],
    hint: "Gunakan: ORDER BY kategori ASC, stok DESC"
  },
  {
    id: 15,
    modulId: 4,
    judul: "Pencarian Akhiran Teks",
    materi: "Wildcard (%) diletakkan di depan kata untuk mencari data yang berakhiran dengan teks tertentu.",
    instruksi: "Tampilkan semua produk yang nama_produk-nya berakhiran dengan kata 'Gaming'.",
    expectedQuery: "SELECT * FROM produk WHERE nama_produk LIKE '%Gaming'",
    tabelSkema: [
      { id: 1, nama_produk: "Mouse Gaming", kategori: "Aksesoris", stok: 10, harga: 300000 },
      { id: 2, nama_produk: "Kursi Kantor", kategori: "Furniture", stok: 5, harga: 1200000 },
      { id: 3, nama_produk: "Keyboard Gaming", kategori: "Aksesoris", stok: 8, harga: 550000 },
      { id: 4, nama_produk: "Headset Gaming", kategori: "Audio", stok: 15, harga: 400000 },
      { id: 5, nama_produk: "Meja Belajar", kategori: "Furniture", stok: 4, harga: 750000 }
    ],
    hint: "Gunakan: WHERE nama_produk LIKE '%Gaming'"
  },
  {
    id: 16,
    modulId: 4,
    judul: "Seleksi Buku Tahun Tertentu",
    materi: "Operator perbandingan (>, <, >=, <=) sangat umum digunakan untuk memfilter data bertipe angka atau tahun.",
    instruksi: "Tampilkan 'judul_buku' dan 'penulis' untuk buku yang terbit di atas tahun 2020.",
    expectedQuery: "SELECT judul_buku, penulis FROM perpustakaan WHERE thn_terbit > 2020",
    tabelSkema: [
      { id: 1, judul_buku: "Belajar SQL", penulis: "Budi", kategori: "Teknologi", thn_terbit: 2021 },
      { id: 2, judul_buku: "Algoritma", penulis: "Andi", kategori: "Teknologi", thn_terbit: 2018 },
      { id: 3, judul_buku: "Masakan Nusantara", penulis: "Siti", kategori: "Kuliner", thn_terbit: 2022 },
      { id: 4, judul_buku: "Sejarah Asia", penulis: "Dodi", kategori: "Sejarah", thn_terbit: 2015 },
      { id: 5, judul_buku: "React Native", penulis: "Eka", kategori: "Teknologi", thn_terbit: 2023 }
    ],
    hint: "Gunakan: WHERE thn_terbit > 2020"
  },
  {
    id: 17,
    modulId: 4,
    judul: "Alias pada Nama Tabel",
    materi: "Pemberian alias pada tabel memudahkan kita saat bekerja dengan banyak tabel (JOIN) di masa depan.",
    instruksi: "Tampilkan kolom 'judul_buku' dari tabel 'perpustakaan' dengan memberi alias tabel tersebut sebagai 'p'.",
    expectedQuery: "SELECT p.judul_buku FROM perpustakaan AS p",
    tabelSkema: [
      { id: 1, judul_buku: "Sains Dasar", penulis: "Prof. H", kategori: "Sains", thn_terbit: 2020 },
      { id: 2, judul_buku: "Fisika Modern", penulis: "Dr. K", kategori: "Sains", thn_terbit: 2019 },
      { id: 3, judul_buku: "Biologi Laut", penulis: "Rina", kategori: "Sains", thn_terbit: 2021 },
      { id: 4, judul_buku: "Kimia Organik", penulis: "Budi", kategori: "Sains", thn_terbit: 2018 },
      { id: 5, judul_buku: "Astronomi", penulis: "Lia", kategori: "Sains", thn_terbit: 2022 }
    ],
    hint: "Gunakan: SELECT p.judul_buku FROM perpustakaan AS p"
  },
  {
    id: 18,
    modulId: 4,
    judul: "Logika NOT",
    materi: "Operator NOT digunakan untuk membalikkan kondisi logika, sehingga kita bisa mengambil data yang TIDAK memenuhi kriteria.",
    instruksi: "Tampilkan semua buku kecuali yang kategorinya 'Fiksi' dari tabel 'perpustakaan'.",
    expectedQuery: "SELECT * FROM perpustakaan WHERE NOT kategori = 'Fiksi'",
    tabelSkema: [
      { id: 1, judul_buku: "Sejarah Dunia", penulis: "A", kategori: "Non-Fiksi", thn_terbit: 2010 },
      { id: 2, judul_buku: "Novel Misteri", penulis: "B", kategori: "Fiksi", thn_terbit: 2020 },
      { id: 3, judul_buku: "Ensiklopedia", penulis: "C", kategori: "Non-Fiksi", thn_terbit: 2015 },
      { id: 4, judul_buku: "Cerpen Rakyat", penulis: "D", kategori: "Fiksi", thn_terbit: 2012 },
      { id: 5, judul_buku: "Jurnal Medis", penulis: "E", kategori: "Non-Fiksi", thn_terbit: 2023 }
    ],
    hint: "Gunakan: WHERE NOT kategori = 'Fiksi'"
  },
  {
    id: 19,
    modulId: 4,
    judul: "Pencarian Kata di Tengah (LIKE)",
    materi: "Wildcard (%) di awal dan akhir pola memungkinkan kita mencari teks yang mengandung kata kunci di posisi mana pun.",
    instruksi: "Tampilkan semua buku yang judulnya mengandung kata 'Data'.",
    expectedQuery: "SELECT * FROM perpustakaan WHERE judul_buku LIKE '%Data%'",
    tabelSkema: [
      { id: 1, judul_buku: "Struktur Data", penulis: "Andi", kategori: "Teknologi", thn_terbit: 2020 },
      { id: 2, judul_buku: "Database Expert", penulis: "Budi", kategori: "Teknologi", thn_terbit: 2019 },
      { id: 3, judul_buku: "Seni Lukis", penulis: "Cici", kategori: "Seni", thn_terbit: 2021 },
      { id: 4, judul_buku: "Big Data Science", penulis: "Dedi", kategori: "Teknologi", thn_terbit: 2022 },
      { id: 5, judul_buku: "Fotografi", penulis: "Eka", kategori: "Seni", thn_terbit: 2018 }
    ],
    hint: "Gunakan: WHERE judul_buku LIKE '%Data%'"
  },
  {
    id: 20,
    modulId: 4,
    judul: "Limit dengan Offset",
    materi: "OFFSET melompati baris data, sedangkan LIMIT membatasi jumlah baris yang diambil. Kombinasi ini penting untuk pagination.",
    instruksi: "Tampilkan 1 baris data dari tabel 'perpustakaan', tapi lompati 2 baris pertama.",
    expectedQuery: "SELECT * FROM perpustakaan LIMIT 1 OFFSET 2",
    tabelSkema: [
      { id: 1, judul_buku: "Buku A", penulis: "P1", kategori: "K1", thn_terbit: 2010 },
      { id: 2, judul_buku: "Buku B", penulis: "P2", kategori: "K2", thn_terbit: 2011 },
      { id: 3, judul_buku: "Buku C", penulis: "P3", kategori: "K3", thn_terbit: 2012 },
      { id: 4, judul_buku: "Buku D", penulis: "P4", kategori: "K4", thn_terbit: 2013 },
      { id: 5, judul_buku: "Buku E", penulis: "P5", kategori: "K5", thn_terbit: 2014 }
    ],
    hint: "Gunakan: LIMIT 1 OFFSET 2"
  },
  {
    id: 1,
    modulId: 5,
    judul: "Filter dengan Banyak Kondisi (AND)",
    materi: "Klausa WHERE dapat menggabungkan beberapa kriteria agar data yang muncul lebih spesifik.",
    instruksi: "Tampilkan semua kolom dari tabel 'pengiriman' yang statusnya 'Proses' DAN beratnya lebih dari 5 kg.",
    tabelSkema: [
      { id: 1, resi: "RX001", status: "Proses", berat: 10 },
      { id: 2, resi: "RX002", status: "Selesai", berat: 2 },
      { id: 3, resi: "RX003", status: "Proses", berat: 3 }
    ],
    hint: "Gunakan: WHERE status = 'Proses' AND berat > 5"
  },
  {
    id: 2,
    modulId: 5,
    judul: "Mengurutkan Berdasarkan Tanggal",
    materi: "ORDER BY sangat krusial untuk data kronologis seperti log pengiriman.",
    instruksi: "Tampilkan semua data pengiriman, urutkan berdasarkan 'tgl_kirim' dari yang paling terbaru.",
    tabelSkema: [
      { id: 1, resi: "RX001", tgl_kirim: "2023-10-01" },
      { id: 2, resi: "RX002", tgl_kirim: "2023-10-05" }
    ],
    hint: "Gunakan: ORDER BY tgl_kirim DESC"
  },
  {
    id: 3,
    modulId: 5,
    judul: "Pengelompokan Data (GROUP BY)",
    materi: "GROUP BY digunakan untuk meringkas baris data yang memiliki nilai yang sama ke dalam satu ringkasan.",
    instruksi: "Tampilkan kolom 'kota_tujuan' dan hitung jumlah pengiriman ke setiap kota tersebut.",
    tabelSkema: [
      { id: 1, kota_tujuan: "Jakarta" },
      { id: 2, kota_tujuan: "Bandung" },
      { id: 3, kota_tujuan: "Jakarta" }
    ],
    hint: "Gunakan: SELECT kota_tujuan, COUNT(*) FROM pengiriman GROUP BY kota_tujuan"
  },
  {
    id: 4,
    modulId: 5,
    judul: "Filter Hasil Agregasi (HAVING)",
    materi: "Jika WHERE memfilter baris sebelum dikelompokkan, HAVING memfilter hasil setelah data dikelompokkan.",
    instruksi: "Tampilkan 'kota_tujuan' yang memiliki jumlah pengiriman lebih dari 10 paket.",
    tabelSkema: [
      { id: 1, kota_tujuan: "Jakarta" }
    ],
    hint: "Gunakan: GROUP BY kota_tujuan HAVING COUNT(*) > 10"
  },
  {
    id: 5,
    modulId: 5,
    judul: "Kombinasi WHERE dan GROUP BY",
    materi: "Kita bisa memfilter data mentah dulu sebelum melakukan pengelompokan.",
    instruksi: "Hitung jumlah pengiriman untuk setiap 'kota_tujuan', tetapi hanya untuk paket yang statusnya 'Selesai'.",
    tabelSkema: [
      { id: 1, kota_tujuan: "Surabaya", status: "Selesai" },
      { id: 2, kota_tujuan: "Surabaya", status: "Proses" }
    ],
    hint: "Urutannya: WHERE dulu, baru GROUP BY."
  },

  // --- TABEL PENJUALAN_CAFE ---
  {
    id: 6,
    modulId: 5,
    judul: "Mencari Nilai Tertinggi per Kategori",
    materi: "Mencari angka maksimal dalam kelompok tertentu sering digunakan untuk analisis produk terlaris.",
    instruksi: "Tampilkan 'kategori_menu' dan harga termahal (MAX) dari masing-masing kategori tersebut.",
    tabelSkema: [
      { id: 1, nama_menu: "Kopi Susu", kategori_menu: "Minuman", harga: 20000 },
      { id: 2, nama_menu: "Espresso", kategori_menu: "Minuman", harga: 25000 },
      { id: 3, nama_menu: "Brownies", kategori_menu: "Makanan", harga: 15000 }
    ],
    hint: "Gunakan: SELECT kategori_menu, MAX(harga) FROM penjualan_cafe GROUP BY kategori_menu"
  },
  {
    id: 7,
    modulId: 5,
    judul: "Menjumlahkan Pendapatan (SUM)",
    materi: "Fungsi SUM menjumlahkan nilai numerik dalam satu kelompok.",
    instruksi: "Tampilkan 'metode_bayar' dan total uang yang diterima (SUM) dari masing-masing metode tersebut.",
    tabelSkema: [
      { id: 1, metode_bayar: "Tunai", total_bayar: 50000 },
      { id: 2, metode_bayar: "QRIS", total_bayar: 75000 },
      { id: 3, metode_bayar: "Tunai", total_bayar: 20000 }
    ],
    hint: "Gunakan: GROUP BY metode_bayar"
  },
  {
    id: 8,
    modulId: 5,
    judul: "Rata-rata Penjualan (AVG)",
    materi: "AVG digunakan untuk mencari nilai tengah atau rata-rata dari sekumpulan data numerik.",
    instruksi: "Tampilkan rata-rata harga menu untuk kategori 'Minuman'.",
    tabelSkema: [
      { id: 1, kategori_menu: "Minuman", harga: 20000 },
      { id: 2, kategori_menu: "Minuman", harga: 30000 }
    ],
    hint: "Gunakan: SELECT AVG(harga) FROM penjualan_cafe WHERE kategori_menu = 'Minuman'"
  },
  {
    id: 9,
    modulId: 5,
    judul: "Filter Having dengan Agregasi Berbeda",
    materi: "HAVING bisa menggunakan fungsi agregasi yang tidak ada di bagian SELECT.",
    instruksi: "Tampilkan 'kategori_menu' yang memiliki total pendapatan (SUM) di atas 100.000.",
    tabelSkema: [
      { id: 1, kategori_menu: "Makanan", total_bayar: 120000 }
    ],
    hint: "Gunakan: GROUP BY kategori_menu HAVING SUM(total_bayar) > 100000"
  },
  {
    id: 10,
    modulId: 5,
    judul: "Urutan Lengkap Klausa SQL",
    materi: "Memahami urutan eksekusi: SELECT -> FROM -> WHERE -> GROUP BY -> HAVING -> ORDER BY.",
    instruksi: "Tampilkan 'kategori_menu' dan total pendapatan per kategori, urutkan dari pendapatan terbesar, hanya untuk kategori yang total pendapatannya > 50.000.",
    tabelSkema: [
      { id: 1, kategori_menu: "Snack", total_bayar: 60000 },
      { id: 2, kategori_menu: "Minuman", total_bayar: 200000 }
    ],
    hint: "Gunakan struktur: GROUP BY ... HAVING ... ORDER BY ... DESC"
  },
  {
    id: 11,
    modulId: 5,
    judul: "Filter Kamar Tersedia",
    materi: "Sebagai host, Anda perlu memfilter properti mana saja yang siap untuk disewakan.",
    instruksi: "Tampilkan 'nama_kamar' dan 'harga_per_malam' yang statusnya 'Tersedia' dan harganya di bawah 500000.",
    tabelSkema: [
      { id: 1, nama_kamar: "Suite Mewah", status: "Tersedia", harga_per_malam: 450000 },
      { id: 2, nama_kamar: "Standard Room", status: "Terisi", harga_per_malam: 300000 },
      { id: 3, nama_kamar: "Economy Room", status: "Tersedia", harga_per_malam: 250000 }
    ],
    hint: "Gunakan WHERE status = 'Tersedia' AND harga_per_malam < 500000"
  },
  {
    id: 12,
    modulId: 5,
    judul: "Urutan Properti Termahal",
    materi: "Menampilkan kamar dari yang paling eksklusif (termahal) untuk promosi premium.",
    instruksi: "Tampilkan semua kolom dari tabel 'kamar', urutkan berdasarkan 'harga_per_malam' dari yang tertinggi.",
    tabelSkema: [
      { id: 1, nama_kamar: "Penthouse", harga_per_malam: 2000000 },
      { id: 2, nama_kamar: "Studio", harga_per_malam: 400000 }
    ],
    hint: "Gunakan ORDER BY harga_per_malam DESC"
  },
  {
    id: 13,
    modulId: 5,
    judul: "Menghitung Kamar per Tipe",
    materi: "Host ingin tahu berapa banyak unit yang mereka miliki untuk setiap tipe kamar.",
    instruksi: "Tampilkan 'tipe_kamar' dan hitung jumlah unit (COUNT) untuk setiap tipe tersebut.",
    tabelSkema: [
      { id: 1, tipe_kamar: "Single", nama_kamar: "A1" },
      { id: 2, tipe_kamar: "Double", nama_kamar: "B1" },
      { id: 3, tipe_kamar: "Single", nama_kamar: "A2" }
    ],
    hint: "Gunakan GROUP BY tipe_kamar"
  },
  {
    id: 14,
    modulId: 5,
    judul: "Rata-rata Harga per Lokasi",
    materi: "Analisis harga pasar berdasarkan lokasi properti.",
    instruksi: "Tampilkan 'lokasi' dan rata-rata (AVG) harga kamar di setiap lokasi tersebut.",
    tabelSkema: [
      { id: 1, lokasi: "Bali", harga_per_malam: 1000000 },
      { id: 2, lokasi: "Jakarta", harga_per_malam: 800000 },
      { id: 3, lokasi: "Bali", harga_per_malam: 1200000 }
    ],
    hint: "Gunakan SELECT lokasi, AVG(harga_per_malam) GROUP BY lokasi"
  },
  {
    id: 15,
    modulId: 5,
    judul: "Lokasi dengan Properti Banyak",
    materi: "Mencari lokasi mana yang paling banyak memiliki aset.",
    instruksi: "Tampilkan 'lokasi' yang memiliki total unit (COUNT) lebih dari 5 kamar.",
    tabelSkema: [
      { id: 1, lokasi: "Yogyakarta", unit: 10 }
    ],
    hint: "Gunakan GROUP BY lokasi HAVING COUNT(*) > 5"
  },

  // --- TABEL RESERVASI (Data Transaksi Tamu) ---
  {
    id: 16,
    modulId: 5,
    judul: "Total Pendapatan Tamu Tertentu",
    materi: "Menghitung seberapa besar kontribusi seorang tamu (Loyalty Check).",
    instruksi: "Hitung total pembayaran (SUM) dari 'tamu_id' bernilai 101.",
    tabelSkema: [
      { id: 1, tamu_id: 101, total_bayar: 1500000 },
      { id: 2, tamu_id: 102, total_bayar: 800000 },
      { id: 3, tamu_id: 101, total_bayar: 500000 }
    ],
    hint: "Gunakan SELECT SUM(total_bayar) WHERE tamu_id = 101"
  },
  {
    id: 17,
    modulId: 5,
    judul: "Filter Reservasi Tanggal Depan",
    materi: "Melihat jadwal tamu yang akan datang.",
    instruksi: "Tampilkan reservasi yang 'tgl_checkin'-nya setelah '2024-01-01' dan statusnya 'Confirmed'.",
    tabelSkema: [
      { id: 1, tgl_checkin: "2024-02-15", status: "Confirmed" }
    ],
    hint: "Gunakan WHERE tgl_checkin > '2024-01-01' AND status = 'Confirmed'"
  },
  {
    id: 18,
    modulId: 5,
    judul: "Jumlah Reservasi per Bulan",
    materi: "Analisis tren bulanan untuk melihat high season.",
    instruksi: "Tampilkan 'bulan_reservasi' dan jumlah total reservasi (COUNT) per bulan.",
    tabelSkema: [
      { id: 1, bulan_reservasi: "Januari" },
      { id: 2, bulan_reservasi: "Februari" },
      { id: 3, bulan_reservasi: "Januari" }
    ],
    hint: "Gunakan GROUP BY bulan_reservasi"
  },
  {
    id: 19,
    modulId: 5,
    judul: "Tamu Paling Sering Menginap",
    materi: "Mencari 'Top Spender' atau tamu loyal.",
    instruksi: "Tampilkan 'tamu_id' dan hitung berapa kali mereka menginap, urutkan dari yang terbanyak.",
    tabelSkema: [
      { id: 1, tamu_id: 101 },
      { id: 2, tamu_id: 105 },
      { id: 3, tamu_id: 101 }
    ],
    hint: "Gunakan GROUP BY tamu_id ORDER BY COUNT(*) DESC"
  },
  {
    id: 20,
    modulId: 5,
    judul: "Metode Bayar Favorit",
    materi: "Mengevaluasi metode pembayaran yang paling efisien.",
    instruksi: "Tampilkan 'metode_bayar' yang total transaksinya (SUM) melebihi 10.000.000.",
    tabelSkema: [
      { id: 1, metode_bayar: "Kartu Kredit", total_bayar: 12000000 },
      { id: 2, metode_bayar: "Transfer Bank", total_bayar: 5000000 }
    ],
    hint: "Gunakan GROUP BY metode_bayar HAVING SUM(total_bayar) > 10000000"
  },
  {
    id: 1,
    modulId: 6,
    judul: "Log Transaksi Parkir",
    materi: "Menghubungkan data kendaraan dengan catatan waktu masuk/keluar di area parkir.",
    instruksi: "Tampilkan 'nomor_plat' dan 'waktu_masuk' untuk kendaraan yang memiliki tipe 'Mobil'.",
    expectedQuery: "SELECT kendaraan.nomor_plat, parkir.waktu_masuk FROM kendaraan JOIN parkir ON kendaraan.id = parkir.id_kendaraan WHERE kendaraan.tipe = 'Mobil'",
    tabelSkema: {
      tabelKiri: [
        { id: 1, nomor_plat: "BK 1234 AA", tipe: "Mobil", pemilik: "Hizkia", warna: "Hitam" },
        { id: 2, nomor_plat: "BK 5555 BB", tipe: "Motor", pemilik: "Cristian", warna: "Merah" },
        { id: 3, nomor_plat: "B 1010 CC", tipe: "Mobil", pemilik: "Siahaan", warna: "Putih" },
        { id: 4, nomor_plat: "BK 2222 DD", tipe: "Motor", pemilik: "Lumban", warna: "Biru" },
        { id: 5, nomor_plat: "D 9999 EE", tipe: "Mobil", pemilik: "Gaol", warna: "Silver" }
      ],
      tabelKanan: [
        { id_log: 101, id_kendaraan: 1, waktu_masuk: "08:00", zona: "A1", biaya: 5000 },
        { id_log: 102, id_kendaraan: 3, waktu_masuk: "08:30", zona: "A2", biaya: 5000 },
        { id_log: 103, id_kendaraan: 5, waktu_masuk: "09:00", zona: "B1", biaya: 5000 },
        { id_log: 104, id_kendaraan: 2, waktu_masuk: "09:15", zona: "M1", biaya: 2000 },
        { id_log: 105, id_kendaraan: 4, waktu_masuk: "10:00", zona: "M2", biaya: 2000 }
      ]
    },
    hint: "Hubungkan kendaraan.id dengan parkir.id_kendaraan."
  },
  {
    id: 2,
    modulId: 6,
    judul: "Filter Diskon Berdasarkan Kategori",
    materi: "Mengambil data produk yang terhubung dengan tabel diskon musiman.",
    instruksi: "Tampilkan 'nama_produk' dan 'persen_diskon' untuk produk yang memiliki diskon di atas 10%.",
    expectedQuery: "SELECT produk.nama_produk, diskon.persen_diskon FROM produk JOIN diskon ON produk.id_kategori = diskon.id_kategori WHERE diskon.persen_diskon > 10",
    tabelSkema: {
      tabelKiri: [
        { id: 1, nama_produk: "Kemeja Flannel", id_kategori: 10, stok: 50, harga: 150000 },
        { id: 2, nama_produk: "Celana Chino", id_kategori: 10, stok: 30, harga: 200000 },
        { id: 3, nama_produk: "Sepatu Sneaker", id_kategori: 11, stok: 15, harga: 450000 },
        { id: 4, nama_produk: "Kaos Polos", id_kategori: 10, stok: 100, harga: 50000 },
        { id: 5, nama_produk: "Jaket Bomber", id_kategori: 12, stok: 10, harga: 300000 }
      ],
      tabelKanan: [
        { id_kategori: 10, nama_kat: "Pakaian", persen_diskon: 20, periode: "Lebaran" },
        { id_kategori: 11, nama_kat: "Alas Kaki", persen_diskon: 5, periode: "New Year" },
        { id_kategori: 12, nama_kat: "Outerwear", persen_diskon: 15, periode: "Winter" }
      ]
    },
    hint: "Gunakan JOIN pada id_kategori dan filter persen_diskon > 10."
  },
  {
    id: 3,
    modulId: 6,
    judul: "Data Resep dan Dokter",
    materi: "Menampilkan data pasien beserta nama dokter yang menangani di rumah sakit.",
    instruksi: "Tampilkan 'nama_pasien' dan 'nama_dokter' yang memberikan diagnosa 'Flu Burung'.",
    expectedQuery: "SELECT pasien.nama_pasien, dokter.nama_dokter FROM pasien JOIN dokter ON pasien.id_dokter = dokter.id WHERE pasien.diagnosa = 'Flu Burung'",
    tabelSkema: {
      tabelKiri: [
        { id: 1, nama_pasien: "Budi", diagnosa: "Demam", id_dokter: 101, tgl: "2024-04" },
        { id: 2, nama_pasien: "Santi", diagnosa: "Flu Burung", id_dokter: 102, tgl: "2024-04" },
        { id: 3, nama_pasien: "Eka", diagnosa: "Batuk", id_dokter: 101, tgl: "2024-04" },
        { id: 4, nama_pasien: "Rian", diagnosa: "Flu Burung", id_dokter: 103, tgl: "2024-04" },
        { id: 5, nama_pasien: "Dewi", diagnosa: "Sakit Gigi", id_dokter: 104, tgl: "2024-04" }
      ],
      tabelKanan: [
        { id: 101, nama_dokter: "Dr. Andi", spesialis: "Umum", ruang: "Mawar" },
        { id: 102, nama_dokter: "Dr. Siti", spesialis: "Paru", ruang: "Melati" },
        { id: 103, nama_dokter: "Dr. Budi", spesialis: "Penyakit Dalam", ruang: "Anggrek" },
        { id: 104, nama_dokter: "Dr. Doni", spesialis: "Gigi", ruang: "Flamboyan" }
      ]
    },
    hint: "Filter diagnosa pasien menggunakan WHERE."
  },
  {
    id: 4,
    modulId: 6,
    judul: "Inventaris Cabang dan Gudang",
    materi: "Mengecek sisa stok di gudang utama berdasarkan permintaan cabang.",
    instruksi: "Tampilkan 'nama_cabang' dan 'nama_item' yang stok gudangnya kurang dari 50.",
    expectedQuery: "SELECT cabang.nama_cabang, gudang.nama_item FROM cabang JOIN gudang ON cabang.id_item = gudang.id WHERE gudang.stok_pusat < 50",
    tabelSkema: {
      tabelKiri: [
        { id: 1, nama_cabang: "Medan Mall", id_item: 501, order: 10, tgl: "2024" },
        { id: 2, nama_cabang: "Jakarta City", id_item: 502, order: 5, tgl: "2024" },
        { id: 3, nama_cabang: "Medan Mall", id_item: 503, order: 20, tgl: "2024" },
        { id: 4, nama_cabang: "Surabaya Plaza", id_item: 501, order: 15, tgl: "2024" },
        { id: 5, nama_cabang: "Bandung Hub", id_item: 505, order: 30, tgl: "2024" }
      ],
      tabelKanan: [
        { id: 501, nama_item: "Minyak Goreng", stok_pusat: 40, rak: "A1" },
        { id: 502, nama_item: "Gula Pasir", stok_pusat: 100, rak: "A2" },
        { id: 503, nama_item: "Beras 5kg", stok_pusat: 25, rak: "B1" },
        { id: 505, nama_item: "Tepung", stok_pusat: 60, rak: "B2" }
      ]
    },
    hint: "Gunakan JOIN pada id_item = gudang.id."
  },
  {
    id: 5,
    modulId: 6,
    judul: "Reservasi Kamar Hotel",
    materi: "Menampilkan tipe kamar yang dipesan oleh tamu tertentu.",
    instruksi: "Tampilkan 'nama_tamu' dan 'tipe_kamar' untuk tamu yang menginap lebih dari 2 malam.",
    expectedQuery: "SELECT tamu.nama_tamu, kamar.tipe_kamar FROM tamu JOIN kamar ON tamu.no_kamar = kamar.no_kamar WHERE tamu.durasi > 2",
    tabelSkema: {
      tabelKiri: [
        { id: 1, nama_tamu: "Hizkia", no_kamar: "101", durasi: 3, status: "Check-in" },
        { id: 2, nama_tamu: "Cristian", no_kamar: "105", durasi: 1, status: "Check-out" },
        { id: 3, nama_tamu: "Siahaan", no_kamar: "202", durasi: 5, status: "Check-in" },
        { id: 4, nama_tamu: "Lumban", no_kamar: "101", durasi: 2, status: "Check-out" },
        { id: 5, nama_tamu: "Gaol", no_kamar: "301", durasi: 4, status: "Check-in" }
      ],
      tabelKanan: [
        { no_kamar: "101", tipe_kamar: "Deluxe", harga: 750000, lantai: 1 },
        { no_kamar: "105", tipe_kamar: "Standard", harga: 400000, lantai: 1 },
        { no_kamar: "202", tipe_kamar: "Suite", harga: 1500000, lantai: 2 },
        { no_kamar: "301", tipe_kamar: "Penthouse", harga: 3000000, lantai: 3 }
      ]
    },
    hint: "Gunakan WHERE durasi > 2."
  },
  {
    id: 6,
    modulId: 6,
    judul: "Logistik Penjemputan Paket",
    materi: "Menghubungkan paket dengan kurir yang bertanggung jawab.",
    instruksi: "Tampilkan 'resi' dan 'nama_kurir' untuk paket yang memiliki status 'On Process'.",
    expectedQuery: "SELECT paket.resi, kurir.nama_kurir FROM paket JOIN kurir ON paket.id_kurir = kurir.id WHERE paket.status = 'On Process'",
    tabelSkema: {
      tabelKiri: [
        { resi: "JP001", berat: "2kg", status: "Delivered", id_kurir: 10 },
        { resi: "JP002", berat: "1kg", status: "On Process", id_kurir: 11 },
        { resi: "JP003", berat: "5kg", status: "On Process", id_kurir: 10 },
        { resi: "JP004", berat: "3kg", status: "Pending", id_kurir: 12 },
        { resi: "JP005", berat: "1kg", status: "On Process", id_kurir: 11 }
      ],
      tabelKanan: [
        { id: 10, nama_kurir: "Budi Santoso", kendaraan: "Motor", area: "Medan Baru" },
        { id: 11, nama_kurir: "Siti Aminah", kendaraan: "Mobil", area: "Medan Kota" },
        { id: 12, nama_kurir: "Andi Wijaya", kendaraan: "Motor", area: "Medan Helvetia" }
      ]
    },
    hint: "Hubungkan id_kurir di kedua tabel."
  },
  {
    id: 7,
    modulId: 6,
    judul: "Total Nilai Aset Per Kategori",
    materi: "Menggunakan JOIN dan SUM untuk menghitung nilai total aset di setiap departemen.",
    instruksi: "Tampilkan 'nama_dep' dan total nilai aset (SUM harga) dengan alias 'total_nilai'.",
    expectedQuery: "SELECT departemen.nama_dep, SUM(aset.harga) AS total_nilai FROM departemen JOIN aset ON departemen.id = aset.id_dep GROUP BY departemen.nama_dep",
    tabelSkema: {
      tabelKiri: [
        { id: 1, nama_dep: "IT Support", gedung: "A", pj: "Hizkia" },
        { id: 2, nama_dep: "Marketing", gedung: "B", pj: "Cristian" },
        { id: 3, nama_dep: "Finance", gedung: "A", pj: "Siahaan" }
      ],
      tabelKanan: [
        { id_aset: 501, nama_item: "Macbook", harga: 20000000, id_dep: 1 },
        { id_aset: 502, nama_item: "Server", harga: 50000000, id_dep: 1 },
        { id_aset: 503, nama_item: "Kamera DSLLR", harga: 15000000, id_dep: 2 },
        { id_aset: 504, nama_item: "Printer L3110", harga: 2000000, id_dep: 3 },
        { id_aset: 505, nama_item: "iPad Pro", harga: 18000000, id_dep: 2 }
      ]
    },
    hint: "Gunakan GROUP BY departemen.nama_dep."
  },
  {
    id: 8,
    modulId: 6,
    judul: "Membership dan Akses Konten",
    materi: "Menghubungkan user dengan tier langganan mereka.",
    instruksi: "Tampilkan 'username' dan 'fitur_utama' untuk user yang berlangganan tier 'Premium'.",
    expectedQuery: "SELECT users.username, tier.fitur_utama FROM users JOIN tier ON users.id_tier = tier.id WHERE tier.nama_tier = 'Premium'",
    tabelSkema: {
      tabelKiri: [
        { id: 1, username: "hizkia_dev", id_tier: 3, tgl_join: "2023-01" },
        { id: 2, username: "user_baru", id_tier: 1, tgl_join: "2024-02" },
        { id: 3, username: "cris_pro", id_tier: 3, tgl_join: "2023-05" },
        { id: 4, username: "lumban_si", id_tier: 2, tgl_join: "2023-11" },
        { id: 5, username: "gaol_ai", id_tier: 3, tgl_join: "2024-01" }
      ],
      tabelKanan: [
        { id: 1, nama_tier: "Free", harga: 0, fitur_utama: "Akses Terbatas" },
        { id: 2, nama_tier: "Basic", harga: 50000, fitur_utama: "Tanpa Iklan" },
        { id: 3, nama_tier: "Premium", harga: 150000, fitur_utama: "Akses Semua Fitur" }
      ]
    },
    hint: "Gunakan WHERE tier.nama_tier = 'Premium'."
  },
  {
    id: 9,
    modulId: 6,
    judul: "Filter Lokasi Cabang Restoran",
    materi: "Menampilkan menu andalan berdasarkan lokasi kota cabang.",
    instruksi: "Tampilkan 'nama_cabang' dan 'menu_spesial' untuk cabang yang berada di kota 'Medan'.",
    expectedQuery: "SELECT cabang.nama_cabang, menu.menu_spesial FROM cabang JOIN menu ON cabang.id_menu = menu.id WHERE cabang.kota = 'Medan'",
    tabelSkema: {
      tabelKiri: [
        { id: 1, nama_cabang: "Bento Medan", kota: "Medan", id_menu: 101, karyawan: 10 },
        { id: 2, nama_cabang: "Bento Jakarta", kota: "Jakarta", id_menu: 102, karyawan: 25 },
        { id: 3, nama_cabang: "Bento Surabaya", kota: "Surabaya", id_menu: 101, karyawan: 15 },
        { id: 4, nama_cabang: "Bento Amplas", kota: "Medan", id_menu: 103, karyawan: 8 },
        { id: 5, nama_cabang: "Bento Setiabudi", kota: "Medan", id_menu: 101, karyawan: 12 }
      ],
      tabelKanan: [
        { id: 101, menu_spesial: "Nasi Lemak", harga: 25000, kategori: "Makanan" },
        { id: 102, menu_spesial: "Soto Betawi", harga: 35000, kategori: "Makanan" },
        { id: 103, menu_spesial: "Teh Tarik", harga: 15000, kategori: "Minuman" }
      ]
    },
    hint: "Gunakan WHERE cabang.kota = 'Medan'."
  },
  {
    id: 10,
    modulId: 6,
    judul: "Penerbit dan Koleksi Perpustakaan",
    materi: "Menghubungkan buku dengan informasi penerbitnya.",
    instruksi: "Tampilkan 'judul_buku' dan 'nama_penerbit' untuk buku yang diterbitkan tahun 2024.",
    expectedQuery: "SELECT koleksi.judul_buku, penerbit.nama_penerbit FROM koleksi JOIN penerbit ON koleksi.id_penerbit = penerbit.id WHERE koleksi.tahun = 2024",
    tabelSkema: {
      tabelKiri: [
        { id: 1, judul_buku: "Belajar SQL", id_penerbit: 50, tahun: 2024, isbn: "978-1" },
        { id: 2, judul_buku: "Mastering Flutter", id_penerbit: 51, tahun: 2023, isbn: "978-2" },
        { id: 3, judul_buku: "UI/UX Design Guide", id_penerbit: 50, tahun: 2024, isbn: "978-3" },
        { id: 4, judul_buku: "Data Science 101", id_penerbit: 52, tahun: 2024, isbn: "978-4" },
        { id: 5, judul_buku: "Go Backend", id_penerbit: 51, tahun: 2022, isbn: "978-5" }
      ],
      tabelKanan: [
        { id: 50, nama_penerbit: "Gramedia", alamat: "Jakarta", email: "info@gra.com" },
        { id: 51, nama_penerbit: "Informatika", alamat: "Bandung", email: "cs@info.com" },
        { id: 52, nama_penerbit: "Erlangga", alamat: "Jakarta", email: "help@erl.com" }
      ]
    },
    hint: "Gunakan WHERE koleksi.tahun = 2024."
  },
{
    id: 11,
    modulId: 6,
    judul: "Relasi Buku dan Peminjam",
    materi: "JOIN digunakan untuk menghubungkan tabel transaksi (peminjaman) dengan tabel master (buku) berdasarkan ID.",
    instruksi: "Tampilkan 'judul' dari tabel 'buku' yang sedang dipinjam oleh 'Andi'.",
    expectedQuery: "SELECT buku.judul FROM buku JOIN peminjaman ON buku.id = peminjaman.id_buku WHERE peminjaman.nama_peminjam = 'Andi'",
    tabelSkema: {
      tabelKiri: [
        { id: 101, judul: "Laskar Pelangi", penulis: "Andrea Hirata", stok: 5, rak: "A1" },
        { id: 102, judul: "Filosofi Teras", penulis: "Henry M.", stok: 3, rak: "B2" },
        { id: 103, judul: "Atomic Habits", penulis: "James Clear", stok: 7, rak: "C1" },
        { id: 104, judul: "Bumi", penulis: "Tere Liye", stok: 2, rak: "A2" },
        { id: 105, judul: "Pulang", penulis: "Leila S.", stok: 4, rak: "B1" }
      ],
      tabelKanan: [
        { id: 1, id_buku: 101, nama_peminjam: "Andi", tgl_pinjam: "2024-01-01", status: "Dipinjam" },
        { id: 2, id_buku: 103, nama_peminjam: "Budi", tgl_pinjam: "2024-01-02", status: "Kembali" },
        { id: 3, id_buku: 101, nama_peminjam: "Citra", tgl_pinjam: "2024-01-05", status: "Dipinjam" },
        { id: 4, id_buku: 105, nama_peminjam: "Andi", tgl_pinjam: "2024-01-06", status: "Dipinjam" },
        { id: 5, id_buku: 102, nama_peminjam: "Dedi", tgl_pinjam: "2024-01-10", status: "Kembali" }
      ]
    },
    hint: "Gunakan JOIN pada buku.id = peminjaman.id_buku"
  },
  {
    id: 12,
    modulId: 6,
    judul: "Agregasi Belanja Pelanggan",
    materi: "Kita bisa menjumlahkan data dari tabel transaksi yang terhubung dengan tabel profil pelanggan.",
    instruksi: "Tampilkan 'nama' pelanggan dan total belanja mereka (SUM harga) dengan alias 'total_belanja'.",
    expectedQuery: "SELECT pelanggan.nama, SUM(transaksi.harga) AS total_belanja FROM pelanggan JOIN transaksi ON pelanggan.id = transaksi.id_pelanggan GROUP BY pelanggan.nama",
    tabelSkema: {
      tabelKiri: [
        { id: 1, nama: "Hizkia", kota: "Medan", member: "Gold", sejak: "2023" },
        { id: 2, nama: "Cristian", kota: "Jakarta", member: "Silver", sejak: "2024" },
        { id: 3, nama: "Siahaan", kota: "Surabaya", member: "Gold", sejak: "2022" },
        { id: 4, nama: "Lumban", kota: "Medan", member: "Bronze", sejak: "2024" },
        { id: 5, nama: "Gaol", kota: "Bandung", member: "Silver", sejak: "2023" }
      ],
      tabelKanan: [
        { id_tr: 10, id_pelanggan: 1, barang: "Laptop", harga: 10000000, tgl: "2024-04" },
        { id_tr: 11, id_pelanggan: 1, barang: "Mouse", harga: 200000, tgl: "2024-04" },
        { id_tr: 12, id_pelanggan: 2, barang: "Keyboard", harga: 500000, tgl: "2024-04" },
        { id_tr: 13, id_pelanggan: 3, barang: "Monitor", harga: 2000000, tgl: "2024-04" },
        { id_tr: 14, id_pelanggan: 1, barang: "Kabel", harga: 50000, tgl: "2024-04" }
      ]
    },
    hint: "Gunakan GROUP BY pelanggan.nama untuk mengelompokkan hasil SUM."
  },
  {
    id: 13,
    modulId: 6,
    judul: "Pencarian Pattern di Tabel Relasi",
    materi: "Klausa LIKE dapat digunakan pada kolom hasil JOIN untuk filter teks yang fleksibel.",
    instruksi: "Tampilkan 'nama_produk' dan 'nama_kategori' yang kategorinya mengandung kata 'Elektronik'.",
    expectedQuery: "SELECT produk.nama_produk, kategori.nama_kategori FROM produk JOIN kategori ON produk.id_kategori = kategori.id WHERE kategori.nama_kategori LIKE '%Elektronik%'",
    tabelSkema: {
      tabelKiri: [
        { id: 1, nama_produk: "TV LED", id_kategori: 10, merk: "LG", harga: 3000000 },
        { id: 2, nama_produk: "Kursi", id_kategori: 11, merk: "Ikea", harga: 500000 },
        { id: 3, nama_produk: "Kulkas", id_kategori: 10, merk: "Sharp", harga: 2500000 },
        { id: 4, nama_produk: "Meja", id_kategori: 11, merk: "Informa", harga: 700000 },
        { id: 5, nama_produk: "Smartphone", id_kategori: 10, merk: "Samsung", harga: 4000000 }
      ],
      tabelKanan: [
        { id: 10, nama_kategori: "Peralatan Elektronik", kode: "ELC", lantai: "1", pj: "Budi" },
        { id: 11, nama_kategori: "Furniture Rumah", kode: "FUR", lantai: "2", pj: "Siti" },
        { id: 12, nama_kategori: "Alat Olahraga", kode: "SPO", lantai: "3", pj: "Andi" },
        { id: 13, nama_kategori: "Pakaian", kode: "CLO", lantai: "2", pj: "Dedi" },
        { id: 14, nama_kategori: "Elektronik Dapur", kode: "KIT", lantai: "1", pj: "Eka" }
      ]
    },
    hint: "WHERE kategori.nama_kategori LIKE '%Elektronik%'"
  },
  {
    id: 14,
    modulId: 6,
    judul: "Analisis Kinerja Karyawan dan Proyek",
    materi: "Menghubungkan karyawan dengan proyek yang sedang dikerjakan untuk melihat beban kerja.",
    instruksi: "Tampilkan 'nama_karyawan' dan 'nama_proyek' untuk proyek yang memiliki status 'Priority'.",
    expectedQuery: "SELECT karyawan.nama_karyawan, proyek.nama_proyek FROM karyawan JOIN proyek ON karyawan.id = proyek.id_karyawan WHERE proyek.status = 'Priority'",
    tabelSkema: {
      tabelKiri: [
        { id: 1, nama_karyawan: "Rizky", divisi: "IT", email: "riz@co.id", tgl_masuk: "2022" },
        { id: 2, nama_karyawan: "Amel", divisi: "HR", email: "amel@co.id", tgl_masuk: "2021" },
        { id: 3, nama_karyawan: "Fajar", divisi: "IT", email: "faj@co.id", tgl_masuk: "2023" },
        { id: 4, nama_karyawan: "Santi", divisi: "Finance", email: "san@co.id", tgl_masuk: "2020" },
        { id: 5, nama_karyawan: "Bagus", divisi: "IT", email: "bag@co.id", tgl_masuk: "2022" }
      ],
      tabelKanan: [
        { id_p: 101, id_karyawan: 1, nama_proyek: "App Mobile", status: "Priority", deadline: "Mei" },
        { id_p: 102, id_karyawan: 3, nama_proyek: "Database", status: "Regular", deadline: "Juni" },
        { id_p: 103, id_karyawan: 5, nama_proyek: "Security", status: "Priority", deadline: "April" },
        { id_p: 104, id_karyawan: 1, nama_proyek: "Web CMS", status: "Regular", deadline: "Juli" },
        { id_p: 105, id_karyawan: 4, nama_proyek: "Audit", status: "Priority", deadline: "Maret" }
      ]
    },
    hint: "Hubungkan id karyawan dengan id_karyawan di tabel proyek."
  },
  {
    id: 15,
    modulId: 6,
    judul: "Data Penjualan dan Wilayah",
    materi: "Menggabungkan data toko dengan wilayah operasionalnya.",
    instruksi: "Tampilkan 'nama_toko' dan 'provinsi' dari wilayah yang dikepalai oleh 'Lumban'.",
    expectedQuery: "SELECT toko.nama_toko, wilayah.provinsi FROM toko JOIN wilayah ON toko.id_wilayah = wilayah.id WHERE wilayah.kepala_wilayah = 'Lumban'",
    tabelSkema: {
      tabelKiri: [
        { id: 1, nama_toko: "Toko Sehat", id_wilayah: 50, alamat: "Jl. Sudirman", tipe: "Cabang" },
        { id: 2, nama_toko: "Mart Jaya", id_wilayah: 51, alamat: "Jl. Thamrin", tipe: "Pusat" },
        { id: 3, nama_toko: "Sinar Abadi", id_wilayah: 50, alamat: "Jl. Gatot", tipe: "Cabang" },
        { id: 4, nama_toko: "Laris Manis", id_wilayah: 52, alamat: "Jl. Diponegoro", tipe: "Cabang" },
        { id: 5, nama_toko: "Berkah Mart", id_wilayah: 51, alamat: "Jl. Asia", tipe: "Cabang" }
      ],
      tabelKanan: [
        { id: 50, provinsi: "Sumatera Utara", kepala_wilayah: "Lumban", target: "1M", zona: "Barat" },
        { id: 51, provinsi: "DKI Jakarta", kepala_wilayah: "Gaol", target: "5M", zona: "Pusat" },
        { id: 52, provinsi: "Jawa Timur", kepala_wilayah: "Siahaan", target: "3M", zona: "Timur" },
        { id: 53, provinsi: "Bali", kepala_wilayah: "Hizkia", target: "2M", zona: "Timur" },
        { id: 54, provinsi: "Jawa Barat", kepala_wilayah: "Cristian", target: "4M", zona: "Barat" }
      ]
    },
    hint: "Gunakan JOIN toko ON toko.id_wilayah = wilayah.id"
  },
  {
    id: 16,
    modulId: 6,
    judul: "Stok Barang dan Supplier",
    materi: "Menghubungkan tabel produk dengan informasi kontak supplier.",
    instruksi: "Tampilkan 'nama_barang' dan 'nama_supplier' untuk barang yang stoknya di bawah 15.",
    expectedQuery: "SELECT barang.nama_barang, supplier.nama_supplier FROM barang JOIN supplier ON barang.id_supplier = supplier.id WHERE barang.stok < 15",
    tabelSkema: {
      tabelKiri: [
        { id: 1, nama_barang: "Kertas A4", id_supplier: 1, stok: 10, unit: "Rim" },
        { id: 2, nama_barang: "Tinta Printer", id_supplier: 2, stok: 20, unit: "Botol" },
        { id: 3, nama_barang: "Flashdisk 32GB", id_supplier: 1, stok: 12, unit: "Pcs" },
        { id: 4, nama_barang: "Mouse Pad", id_supplier: 3, stok: 30, unit: "Pcs" },
        { id: 5, nama_barang: "Webcam HD", id_supplier: 2, stok: 5, unit: "Pcs" }
      ],
      tabelKanan: [
        { id: 1, nama_supplier: "PT ATK Maju", kota: "Jakarta", telp: "021", email: "atk@mail.com" },
        { id: 2, nama_supplier: "CV Techno", kota: "Bandung", telp: "022", email: "tech@mail.com" },
        { id: 3, nama_supplier: "Gudang Komputer", kota: "Medan", telp: "061", email: "gudang@mail.com" },
        { id: 4, nama_supplier: "Sinar Jaya", kota: "Surabaya", telp: "031", email: "sinar@mail.com" },
        { id: 5, nama_supplier: "Logistik ID", kota: "Jakarta", telp: "021", email: "log@mail.com" }
      ]
    },
    hint: "Gunakan WHERE barang.stok < 15"
  },
  {
    id: 17,
    modulId: 6,
    judul: "Nilai Mahasiswa dan Mata Kuliah",
    materi: "JOIN sering digunakan dalam sistem akademik untuk melihat hasil belajar per mata kuliah.",
    instruksi: "Tampilkan 'nama_mahasiswa' dan 'nama_matkul' untuk mahasiswa yang mendapatkan nilai 'A'.",
    expectedQuery: "SELECT mahasiswa.nama_mahasiswa, matkul.nama_matkul FROM mahasiswa JOIN nilai ON mahasiswa.id = nilai.id_mhs JOIN matkul ON nilai.id_matkul = matkul.id WHERE nilai.skor = 'A'",
    tabelSkema: {
      tabelKiri: [
        { id: 1, nama_mahasiswa: "Hizkia", nim: "4142400", prodi: "TI", angkatan: "2024" },
        { id: 2, nama_mahasiswa: "Budi", nim: "4142401", prodi: "SI", angkatan: "2024" },
        { id: 3, nama_mahasiswa: "Siti", nim: "4142402", prodi: "TI", angkatan: "2024" },
        { id: 4, nama_mahasiswa: "Andi", nim: "4142403", prodi: "DKV", angkatan: "2024" },
        { id: 5, nama_mahasiswa: "Lusi", nim: "4142404", prodi: "TI", angkatan: "2024" }
      ],
      tabelKanan: [
        { id: 10, nama_matkul: "Basis Data", sks: 3, dosen: "Dr. Siahaan", semester: 1 },
        { id: 11, nama_matkul: "Web Prog", sks: 4, dosen: "Lumban M.Kom", semester: 1 },
        { id: 12, nama_matkul: "Statistika", sks: 2, dosen: "Prof. Gaol", semester: 1 },
        { id: 13, nama_matkul: "UI/UX Design", sks: 3, dosen: "Cristian S.Ds", semester: 1 },
        { id: 14, nama_matkul: "Algoritma", sks: 4, dosen: "Hizkia M.T", semester: 1 }
      ]
    },
    hint: "Soal ini membutuhkan penggabungan 3 tabel (mahasiswa, nilai, matkul)."
  },
  {
    id: 18,
    modulId: 6,
    judul: "Left Join: Produk Tanpa Penjualan",
    materi: "LEFT JOIN menampilkan semua produk meskipun belum pernah terjual (data transaksi kosong).",
    instruksi: "Tampilkan 'nama_produk' dan 'jumlah' terjual. Gunakan LEFT JOIN agar produk yang belum terjual tetap muncul.",
    expectedQuery: "SELECT produk.nama_produk, penjualan.jumlah FROM produk LEFT JOIN penjualan ON produk.id = penjualan.id_produk",
    tabelSkema: {
      tabelKiri: [
        { id: 1, nama_produk: "Macbook Air", kategori: "Laptop", harga: 15000000, stok: 5 },
        { id: 2, nama_produk: "iPhone 15", kategori: "HP", harga: 16000000, stok: 10 },
        { id: 3, nama_produk: "Airpods Pro", kategori: "Audio", harga: 3000000, stok: 15 },
        { id: 4, nama_produk: "Apple Watch", kategori: "Watch", harga: 6000000, stok: 8 },
        { id: 5, nama_produk: "iPad Pro", kategori: "Tablet", harga: 12000000, stok: 4 }
      ],
      tabelKanan: [
        { id_s: 501, id_produk: 1, jumlah: 2, tgl: "2024-03-01", kasir: "Ani" },
        { id_s: 502, id_produk: 3, jumlah: 5, tgl: "2024-03-02", kasir: "Budi" },
        { id_s: 503, id_produk: 1, jumlah: 1, tgl: "2024-03-05", kasir: "Ani" },
        { id_s: 504, id_produk: 2, jumlah: 3, tgl: "2024-03-06", kasir: "Cici" },
        { id_s: 505, id_produk: 2, jumlah: 1, tgl: "2024-03-07", kasir: "Budi" }
      ]
    },
    hint: "Gunakan LEFT JOIN untuk mempertahankan data dari tabel kiri (produk)."
  },
  {
    id: 19,
    modulId: 6,
    judul: "Filter Join Antar Tanggal",
    materi: "Kita bisa memfilter data JOIN berdasarkan rentang waktu tertentu.",
    instruksi: "Tampilkan 'nama_pelanggan' dan 'tgl_order' untuk pesanan yang dilakukan di bulan 'Februari'.",
    expectedQuery: "SELECT pelanggan.nama_pelanggan, pesanan.tgl_order FROM pelanggan JOIN pesanan ON pelanggan.id = pesanan.id_pelanggan WHERE pesanan.tgl_order LIKE '%-02-%'",
    tabelSkema: {
      tabelKiri: [
        { id: 1, nama_pelanggan: "Hizkia", email: "h@mail.com", poin: 100, status: "Aktif" },
        { id: 2, nama_pelanggan: "Cristian", email: "c@mail.com", poin: 50, status: "Aktif" },
        { id: 3, nama_pelanggan: "Siahaan", email: "s@mail.com", poin: 200, status: "Pasif" },
        { id: 4, nama_pelanggan: "Lumban", email: "l@mail.com", poin: 80, status: "Aktif" },
        { id: 5, nama_pelanggan: "Gaol", email: "g@mail.com", poin: 120, status: "Aktif" }
      ],
      tabelKanan: [
        { id: 10, id_pelanggan: 1, tgl_order: "2024-01-15", total: 50000, bayar: "Tunai" },
        { id: 11, id_pelanggan: 2, tgl_order: "2024-02-10", total: 150000, bayar: "Debit" },
        { id: 12, id_pelanggan: 1, tgl_order: "2024-02-14", total: 200000, bayar: "Tunai" },
        { id: 13, id_pelanggan: 4, tgl_order: "2024-03-01", total: 75000, bayar: "Qris" },
        { id: 14, id_pelanggan: 5, tgl_order: "2024-02-28", total: 300000, bayar: "Debit" }
      ]
    },
    hint: "Gunakan LIKE '%-02-%' pada kolom tgl_order."
  },
  {
    id: 20,
    modulId: 6,
    judul: "Join dengan Pengurutan (Order By)",
    materi: "Hasil gabungan tabel seringkali perlu diurutkan berdasarkan nilai tertentu dari salah satu tabel.",
    instruksi: "Tampilkan 'nama_driver' dan 'rating' perjalanan, urutkan dari rating tertinggi (DESC).",
    expectedQuery: "SELECT driver.nama_driver, trip.rating FROM driver JOIN trip ON driver.id = trip.id_driver ORDER BY trip.rating DESC",
    tabelSkema: {
      tabelKiri: [
        { id: 1, nama_driver: "Joko", plat: "BK 1234 AA", unit: "Mobil", bergabung: "2020" },
        { id: 2, nama_driver: "Eko", plat: "BK 5678 BB", unit: "Motor", bergabung: "2021" },
        { id: 3, nama_driver: "Susi", plat: "BK 9012 CC", unit: "Mobil", bergabung: "2019" },
        { id: 4, nama_driver: "Bambang", plat: "BK 3456 DD", unit: "Motor", bergabung: "2022" },
        { id: 5, nama_driver: "Rina", plat: "BK 7890 EE", unit: "Mobil", bergabung: "2023" }
      ],
      tabelKanan: [
        { id_t: 1001, id_driver: 1, tgl: "2024-04-01", rating: 4.8, jarak: "5km" },
        { id_t: 1002, id_driver: 3, tgl: "2024-04-01", rating: 5.0, jarak: "12km" },
        { id_t: 1003, id_driver: 2, tgl: "2024-04-01", rating: 4.5, jarak: "2km" },
        { id_t: 1004, id_driver: 5, tgl: "2024-04-02", rating: 4.9, jarak: "8km" },
        { id_t: 1005, id_driver: 4, tgl: "2024-04-02", rating: 4.2, jarak: "15km" }
      ]
    },
    hint: "Gunakan ORDER BY trip.rating DESC"
  }
];

export default soalData;