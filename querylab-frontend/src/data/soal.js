// src/data/soal.js

const soalData = [
{
    id: 1,
    modulId: 1,
    judul: "Pengambilan Seluruh Kolom",
    materi:
      "Langkah pertama dalam SQL adalah mampu menarik seluruh data dari sebuah tabel untuk melihat struktur informasinya.",
    instruksi:
      "Tampilkan seluruh data dan semua kolom dari tabel 'produk'.",
    tabelSkema: [
      { id: 1, nama_produk: "Baterai Lithium", kategori: "Energi", stok: 15, harga: 500000 },
      { id: 2, nama_produk: "Panel Surya 100W", kategori: "Energi", stok: 45, harga: 1200000 },
      { id: 3, nama_produk: "Kabel Tembaga", kategori: "Manufaktur", stok: 10, harga: 75000 }
    ],
    hint: "Gunakan tanda asterisk (*) setelah kata kunci SELECT."
  },

  {
    id: 2,
    modulId: 1,
    judul: "Memilih Kolom Spesifik",
    materi:
      "Untuk efisiensi, kita seringkali hanya membutuhkan kolom tertentu. Manajer hanya ingin melihat daftar nama barang dan harganya saja.",
    instruksi:
      "Tampilkan kolom 'nama_produk' dan 'harga' dari tabel 'produk'.",
    tabelSkema: [
      { id: 1, nama_produk: "Baterai Lithium", harga: 500000 },
      { id: 2, nama_produk: "Panel Surya 100W", harga: 1200000 },
      { id: 3, nama_produk: "Kabel Tembaga", harga: 75000 }
    ],
    hint: "Pisahkan nama kolom dengan tanda koma (,) setelah SELECT."
  },

  {
    id: 3,
    modulId: 1,
    judul: "Memberikan Nama Alias (AS)",
    materi:
      "Nama kolom di database terkadang sulit dibaca. Kita bisa mengubah tampilan nama kolom di hasil laporan menggunakan alias.",
    instruksi:
      "Tampilkan kolom 'nama_produk' namun ubah nama tampilannya menjadi 'nama_barang'.",
    tabelSkema: [
      { id: 1, nama_produk: "Baterai Lithium" },
      { id: 2, nama_produk: "Panel Surya 100W" }
    ],
    hint: "Gunakan kata kunci AS setelah nama kolom asli."
  },

  {
    id: 4,
    modulId: 1,
    judul: "Operasi Matematika Sederhana",
    materi:
      "SELECT juga bisa digunakan untuk menghitung. Hitunglah nilai total aset (stok dikali harga) untuk setiap produk.",
    instruksi:
      "Tampilkan 'nama_produk' dan hasil perkalian antara 'stok' dan 'harga'. Beri nama kolom hasil hitungan tersebut sebagai 'total_nilai'.",
    tabelSkema: [
      { id: 1, nama_produk: "Baterai Lithium", stok: 15, harga: 500000 }
    ],
    hint: "Gunakan operator bintang (*) untuk perkalian, contoh: stok * harga AS total_nilai."
  },

  {
    id: 5,
    modulId: 1,
    judul: "Menghindari Data Duplikat",
    materi:
      "Terkadang kita hanya ingin tahu ada kategori apa saja di gudang tanpa melihat nama produknya berulang kali.",
    instruksi:
      "Tampilkan daftar 'kategori' yang unik (tidak ada duplikasi) dari tabel 'produk'.",
    tabelSkema: [
      { id: 1, kategori: "Energi" },
      { id: 2, kategori: "Energi" },
      { id: 3, kategori: "Manufaktur" }
    ],
    hint: "Gunakan kata kunci DISTINCT sebelum nama kolom."
  },

{
    id: 6,
    modulId: 1,
    judul: "Pengurutan Data (ORDER BY)",
    materi:
      "Data yang rapi memudahkan pembacaan. HR ingin melihat daftar karyawan yang diurutkan berdasarkan gaji dari yang tertinggi ke terendah.",
    instruksi:
      "Tampilkan semua kolom dari tabel 'karyawan' dan urutkan berdasarkan 'gaji' secara menurun (descending).",
    tabelSkema: [
      { id: 1, nama: "Andi", divisi: "IT", gaji: 8000000 },
      { id: 2, nama: "Budi", divisi: "HR", gaji: 6000000 },
      { id: 3, nama: "Citra", divisi: "Sales", gaji: 12000000 }
    ],
    hint: "Gunakan ORDER BY nama_kolom DESC."
  },

  {
    id: 7,
    modulId: 1,
    judul: "Membatasi Hasil (LIMIT)",
    materi:
      "Terkadang kita hanya perlu mengambil sampel data atau peringkat teratas saja untuk menghemat sumber daya.",
    instruksi:
      "Tampilkan 2 baris pertama saja dari tabel 'karyawan'.",
    tabelSkema: [
      { id: 1, nama: "Andi", divisi: "IT" },
      { id: 2, nama: "Budi", divisi: "HR" },
      { id: 3, nama: "Citra", divisi: "Sales" }
    ],
    hint: "Gunakan kata kunci LIMIT di akhir query."
  },

  {
    id: 8,
    modulId: 1,
    judul: "Penggabungan Kolom (Concatenation)",
    materi:
      "Dalam laporan, seringkali kita perlu menggabungkan dua informasi menjadi satu baris teks yang bermakna.",
    instruksi:
      "Tampilkan kolom 'nama' dan 'divisi' yang digabungkan dengan format: 'Nama - Divisi'. Beri nama alias 'info_karyawan'.",
    tabelSkema: [
      { id: 1, nama: "Andi", divisi: "IT" }
    ],
    hint: "Gunakan fungsi CONCAT(kolom1, ' - ', kolom2) atau operator || tergantung dialek SQL."
  },

  {
    id: 9,
    modulId: 1,
    judul: "Filter dengan In-List (IN)",
    materi:
      "Jika ingin memfilter banyak nilai sekaligus dalam satu kolom, kita bisa menggunakan operator IN agar query lebih ringkas.",
    instruksi:
      "Tampilkan karyawan yang bekerja di divisi 'IT' atau 'Sales'.",
    tabelSkema: [
      { id: 1, nama: "Andi", divisi: "IT" },
      { id: 2, nama: "Budi", divisi: "HR" },
      { id: 3, nama: "Citra", divisi: "Sales" }
    ],
    hint: "Gunakan WHERE divisi IN ('IT', 'Sales')."
  },

  {
    id: 10,
    modulId: 1,
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
    modulId: 1,
    judul: "Menghitung Selisih Harga",
    materi: "Operasi pengurangan dapat digunakan untuk melihat selisih nilai antar kolom atau dengan nilai statis.",
    instruksi: "Tampilkan 'nama_produk', 'harga_jual', dan selisih antara 'harga_jual' dengan 'harga_modal'. Beri nama alias 'keuntungan'.",
    tabelSkema: [
      { id: 1, nama_produk: "Mouse Wireless", harga_jual: 150000, harga_modal: 100000 }
    ],
    hint: "Gunakan: SELECT nama_produk, harga_jual, (harga_jual - harga_modal) AS keuntungan"
  },
  {
    id: 12,
    modulId: 1,
    judul: "Filter Rentang Harga (BETWEEN)",
    materi: "Untuk memfilter data di antara dua nilai, kita bisa menggunakan operator BETWEEN agar lebih mudah dibaca.",
    instruksi: "Tampilkan semua kolom dari tabel 'penjualan' yang harganya antara 100000 dan 500000.",
    tabelSkema: [
      { id: 1, nama_produk: "Keyboard", harga_jual: 250000 },
      { id: 2, nama_produk: "Monitor", harga_jual: 1500000 }
    ],
    hint: "Gunakan: WHERE harga_jual BETWEEN 100000 AND 500000"
  },
  {
    id: 13,
    modulId: 1,
    judul: "Mengecek Data Kosong (IS NULL)",
    materi: "Dalam database, data yang tidak terisi disebut NULL. Kita bisa mencarinya dengan operator khusus.",
    instruksi: "Tampilkan semua data produk yang 'keterangan'-nya masih kosong (NULL).",
    tabelSkema: [
      { id: 1, nama_produk: "Webcam", keterangan: null },
      { id: 2, nama_produk: "Speaker", keterangan: "Baru" }
    ],
    hint: "Gunakan: WHERE keterangan IS NULL"
  },
  {
    id: 14,
    modulId: 1,
    judul: "Pengurutan Ganda",
    materi: "Kita bisa mengurutkan data berdasarkan lebih dari satu kolom untuk hasil yang lebih spesifik.",
    instruksi: "Tampilkan semua kolom, urutkan berdasarkan 'kategori' secara alfabetis (ASC), lalu berdasarkan 'stok' dari yang terbanyak (DESC).",
    tabelSkema: [
      { id: 1, nama_produk: "Laptop", kategori: "Elektronik", stok: 5 },
      { id: 2, nama_produk: "Smartphone", kategori: "Elektronik", stok: 20 }
    ],
    hint: "Gunakan: ORDER BY kategori ASC, stok DESC"
  },
  {
    id: 15,
    modulId: 1,
    judul: "Pencarian Akhiran Teks",
    materi: "Wildcard (%) bisa diletakkan di awal jika kita ingin mencari data yang berakhir dengan kata tertentu.",
    instruksi: "Tampilkan semua produk yang nama_produk-nya berakhiran dengan kata 'Gaming'.",
    tabelSkema: [
      { id: 1, nama_produk: "Mouse Gaming" },
      { id: 2, nama_produk: "Kursi Kantor" }
    ],
    hint: "Gunakan: WHERE nama_produk LIKE '%Gaming'"
  },

  // --- TABEL PERPUSTAKAAN (Daftar Buku) ---
  {
    id: 16,
    modulId: 1,
    judul: "Seleksi Buku Tahun Tertentu",
    materi: "Memfilter angka tahun sering digunakan dalam pengarsipan data.",
    instruksi: "Tampilkan 'judul_buku' dan 'penulis' untuk buku yang terbit di atas tahun 2020.",
    tabelSkema: [
      { id: 1, judul_buku: "Belajar SQL", penulis: "Budi", thn_terbit: 2021 },
      { id: 2, judul_buku: "Algoritma", penulis: "Andi", thn_terbit: 2018 }
    ],
    hint: "Gunakan: WHERE thn_terbit > 2020"
  },
  {
    id: 17,
    modulId: 1,
    judul: "Alias pada Nama Tabel",
    materi: "Bukan hanya kolom, tabel juga bisa diberi alias untuk mempersingkat penulisan query.",
    instruksi: "Tampilkan kolom 'judul_buku' dari tabel 'perpustakaan' dengan memberi alias tabel tersebut sebagai 'p'.",
    tabelSkema: [
      { id: 1, judul_buku: "Sains Dasar" }
    ],
    hint: "Gunakan: SELECT p.judul_buku FROM perpustakaan AS p"
  },
  {
    id: 18,
    modulId: 1,
    judul: "Logika NOT",
    materi: "Gunakan NOT untuk mengecualikan kriteria tertentu dari hasil pencarian.",
    instruksi: "Tampilkan semua buku kecuali yang kategorinya 'Fiksi'.",
    tabelSkema: [
      { id: 1, judul_buku: "Sejarah Dunia", kategori: "Non-Fiksi" },
      { id: 2, judul_buku: "Novel A", kategori: "Fiksi" }
    ],
    hint: "Gunakan: WHERE NOT kategori = 'Fiksi' atau WHERE kategori != 'Fiksi'"
  },
  {
    id: 19,
    modulId: 1,
    judul: "Pencarian Kata di Tengah (LIKE)",
    materi: "Untuk mencari kata yang ada di posisi mana saja, apit kata tersebut dengan dua tanda %.",
    instruksi: "Tampilkan semua buku yang judulnya mengandung kata 'Data'.",
    tabelSkema: [
      { id: 1, judul_buku: "Struktur Data" },
      { id: 2, judul_buku: "Database Expert" },
      { id: 3, judul_buku: "Seni Lukis" }
    ],
    hint: "Gunakan: WHERE judul_buku LIKE '%Data%'"
  },
  {
    id: 20,
    modulId: 1,
    judul: "Limit dengan Offset",
    materi: "Offset digunakan untuk melompati beberapa baris data awal. Berguna untuk sistem halaman (pagination).",
    instruksi: "Tampilkan 1 baris data, tapi lompati 2 baris pertama.",
    tabelSkema: [
      { id: 1, judul_buku: "Buku 1" },
      { id: 2, judul_buku: "Buku 2" },
      { id: 3, judul_buku: "Buku 3" }
    ],
    hint: "Gunakan: LIMIT 1 OFFSET 2"
  },
  {
    id: 21,
    modulId: 2,
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
    id: 22,
    modulId: 2,
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
    id: 23,
    modulId: 2,
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
    id: 24,
    modulId: 2,
    judul: "Filter Hasil Agregasi (HAVING)",
    materi: "Jika WHERE memfilter baris sebelum dikelompokkan, HAVING memfilter hasil setelah data dikelompokkan.",
    instruksi: "Tampilkan 'kota_tujuan' yang memiliki jumlah pengiriman lebih dari 10 paket.",
    tabelSkema: [
      { id: 1, kota_tujuan: "Jakarta" }
    ],
    hint: "Gunakan: GROUP BY kota_tujuan HAVING COUNT(*) > 10"
  },
  {
    id: 25,
    modulId: 2,
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
    id: 26,
    modulId: 2,
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
    id: 27,
    modulId: 2,
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
    id: 28,
    modulId: 2,
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
    id: 29,
    modulId: 2,
    judul: "Filter Having dengan Agregasi Berbeda",
    materi: "HAVING bisa menggunakan fungsi agregasi yang tidak ada di bagian SELECT.",
    instruksi: "Tampilkan 'kategori_menu' yang memiliki total pendapatan (SUM) di atas 100.000.",
    tabelSkema: [
      { id: 1, kategori_menu: "Makanan", total_bayar: 120000 }
    ],
    hint: "Gunakan: GROUP BY kategori_menu HAVING SUM(total_bayar) > 100000"
  },
  {
    id: 30,
    modulId: 2,
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
    id: 31,
    modulId: 2,
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
    id: 32,
    modulId: 2,
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
    id: 33,
    modulId: 2,
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
    id: 34,
    modulId: 2,
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
    id: 35,
    modulId: 2,
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
    id: 36,
    modulId: 2,
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
    id: 37,
    modulId: 2,
    judul: "Filter Reservasi Tanggal Depan",
    materi: "Melihat jadwal tamu yang akan datang.",
    instruksi: "Tampilkan reservasi yang 'tgl_checkin'-nya setelah '2024-01-01' dan statusnya 'Confirmed'.",
    tabelSkema: [
      { id: 1, tgl_checkin: "2024-02-15", status: "Confirmed" }
    ],
    hint: "Gunakan WHERE tgl_checkin > '2024-01-01' AND status = 'Confirmed'"
  },
  {
    id: 38,
    modulId: 2,
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
    id: 39,
    modulId: 2,
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
    id: 40,
    modulId: 2,
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
    id: 41,
    modulId: 2,
    judul: "Filter Fasilitas Spesifik",
    materi: "Tamu sering mencari properti berdasarkan fasilitas tertentu. Gunakan LIKE untuk mencari pola teks.",
    instruksi: "Tampilkan semua kolom dari tabel 'properti' yang memiliki fasilitas 'Kolam Renang'.",
    tabelSkema: [
      { id: 1, nama_properti: "Villa Indah", fasilitas: "Wifi, Kolam Renang, AC" },
      { id: 2, nama_properti: "Studio Room", fasilitas: "Wifi, AC" }
    ],
    hint: "Gunakan WHERE fasilitas LIKE '%Kolam Renang%'"
  },
  {
    id: 42,
    modulId: 2,
    judul: "Mencari Kamar Termurah per Kota",
    materi: "Gunakan MIN untuk menemukan harga paling kompetitif di setiap daerah.",
    instruksi: "Tampilkan 'kota' dan harga terendah (MIN) dari kolom 'harga_permalam'. Kelompokkan berdasarkan kota.",
    tabelSkema: [
      { id: 1, kota: "Bandung", harga_permalam: 500000 },
      { id: 2, kota: "Bandung", harga_permalam: 350000 },
      { id: 3, kota: "Bali", harga_permalam: 1000000 }
    ],
    hint: "Gunakan GROUP BY kota"
  },
  {
    id: 43,
    modulId: 2,
    judul: "Urutan Rating Tertinggi",
    materi: "Menampilkan properti terbaik di halaman utama aplikasi.",
    instruksi: "Tampilkan 'nama_properti' dan 'rating', urutkan berdasarkan rating dari yang terbesar ke terkecil.",
    tabelSkema: [
      { id: 1, nama_properti: "Cottage A", rating: 4.5 },
      { id: 2, nama_properti: "Cottage B", rating: 4.9 }
    ],
    hint: "Gunakan ORDER BY rating DESC"
  },
  {
    id: 44,
    modulId: 2,
    judul: "Kota dengan Properti Mewah",
    materi: "Filter kota yang hanya memiliki rata-rata harga properti di atas standar tertentu.",
    instruksi: "Tampilkan 'kota' yang rata-rata (AVG) harga propertinya di atas 1.000.000.",
    tabelSkema: [
      { id: 1, kota: "Jakarta", harga_permalam: 1500000 },
      { id: 2, kota: "Jakarta", harga_permalam: 1200000 }
    ],
    hint: "Gunakan GROUP BY kota HAVING AVG(harga_permalam) > 1000000"
  },
  {
    id: 45,
    modulId: 2,
    judul: "Kombinasi Filter dan Urutan",
    materi: "Menyaring data yang aktif lalu mengurutkannya berdasarkan harga.",
    instruksi: "Tampilkan semua properti yang 'status'-nya 'Aktif', urutkan berdasarkan 'harga_permalam' termurah.",
    tabelSkema: [
      { id: 1, nama_properti: "House X", status: "Aktif", harga_permalam: 400000 },
      { id: 2, nama_properti: "House Y", status: "Nonaktif", harga_permalam: 200000 }
    ],
    hint: "Gunakan WHERE status = 'Aktif' ORDER BY harga_permalam ASC"
  },
  {
    id: 46,
    modulId: 2,
    judul: "Menghitung Total Ulasan",
    materi: "Host ingin tahu seberapa populer properti mereka berdasarkan jumlah ulasan.",
    instruksi: "Tampilkan 'properti_id' dan hitung jumlah ulasan (COUNT) untuk setiap properti tersebut.",
    tabelSkema: [
      { id: 1, properti_id: 10, komentar: "Bagus" },
      { id: 2, properti_id: 10, komentar: "Nyaman" },
      { id: 3, properti_id: 11, komentar: "Kurang bersih" }
    ],
    hint: "Gunakan GROUP BY properti_id"
  },
  {
    id: 47,
    modulId: 2,
    judul: "Filter Review Skor Rendah",
    materi: "Identifikasi masalah dengan melihat ulasan di bawah standar.",
    instruksi: "Tampilkan semua ulasan yang memiliki 'skor' kurang dari atau sama dengan 3.",
    tabelSkema: [
      { id: 1, skor: 5, komentar: "Mantap" },
      { id: 2, skor: 2, komentar: "Kecewa" }
    ],
    hint: "Gunakan WHERE skor <= 3"
  },
  {
    id: 48,
    modulId: 2,
    judul: "Properti dengan Rating Konsisten",
    materi: "Hanya tampilkan properti yang mendapatkan ulasan cukup banyak.",
    instruksi: "Tampilkan 'properti_id' yang memiliki jumlah ulasan lebih dari 2.",
    tabelSkema: [
      { id: 1, properti_id: 50 },
      { id: 2, properti_id: 50 },
      { id: 3, properti_id: 50 }
    ],
    hint: "Gunakan GROUP BY properti_id HAVING COUNT(*) > 2"
  },
  {
    id: 49,
    modulId: 2,
    judul: "Rata-rata Skor per Properti",
    materi: "Menentukan nilai akhir properti berdasarkan rata-rata ulasan tamu.",
    instruksi: "Tampilkan 'properti_id' dan rata-rata (AVG) 'skor'-nya.",
    tabelSkema: [
      { id: 1, properti_id: 20, skor: 5 },
      { id: 2, properti_id: 20, skor: 4 }
    ],
    hint: "Gunakan SELECT properti_id, AVG(skor) GROUP BY properti_id"
  },
  {
    id: 50,
    modulId: 2,
    judul: "Analisis Ulasan Terbaru",
    materi: "Melihat ulasan paling segar untuk merespon tamu dengan cepat.",
    instruksi: "Tampilkan 'komentar' dan 'tgl_ulasan', urutkan berdasarkan 'tgl_ulasan' terbaru (terkini).",
    tabelSkema: [
      { id: 1, tgl_ulasan: "2023-12-01", komentar: "Ok" },
      { id: 2, tgl_ulasan: "2024-01-10", komentar: "Sempurna" }
    ],
    hint: "Gunakan ORDER BY tgl_ulasan DESC"
  },
  {
    id: 51,
    modulId: 2,
    judul: "Analisis Pendapatan Bersih",
    materi: "Host perlu menghitung pendapatan setelah dipotong komisi platform (misal 10%).",
    instruksi: "Tampilkan 'id_transaksi' dan hitung pendapatan bersih (total_bayar dikurangi 10%). Beri nama alias 'net_income'.",
    tabelSkema: [
      { id_transaksi: "TRX01", total_bayar: 1000000 }
    ],
    hint: "Gunakan: SELECT id_transaksi, (total_bayar * 0.9) AS net_income"
  },
  {
    id: 52,
    modulId: 2,
    judul: "Filter Transaksi Gagal/Refund",
    materi: "Menyisihkan transaksi yang tidak menghasilkan uang.",
    instruksi: "Tampilkan semua transaksi yang statusnya BUKAN 'Success' dan urutkan dari nominal terbesar.",
    tabelSkema: [
      { id_transaksi: "TRX02", status: "Refund", total_bayar: 500000 },
      { id_transaksi: "TRX03", status: "Success", total_bayar: 1200000 }
    ],
    hint: "Gunakan WHERE status != 'Success' ORDER BY total_bayar DESC"
  },
  {
    id: 53,
    modulId: 2,
    judul: "Pendapatan per Bulan (Seasonality)",
    materi: "Melihat bulan mana yang paling menguntungkan bagi host.",
    instruksi: "Tampilkan 'bulan' dan total pendapatan (SUM) per bulan tersebut.",
    tabelSkema: [
      { bulan: "Desember", total_bayar: 5000000 },
      { bulan: "Januari", total_bayar: 2000000 },
      { bulan: "Desember", total_bayar: 3000000 }
    ],
    hint: "Gunakan GROUP BY bulan"
  },
  {
    id: 54,
    modulId: 2,
    judul: "Host dengan Performa Tinggi (High Volume)",
    materi: "Mencari host yang menangani lebih dari sejumlah transaksi tertentu.",
    instruksi: "Tampilkan 'host_id' yang memiliki jumlah transaksi (COUNT) lebih dari 50 kali.",
    tabelSkema: [
      { host_id: "H-001", id_transaksi: "T-10" }
    ],
    hint: "Gunakan GROUP BY host_id HAVING COUNT(*) > 50"
  },
  {
    id: 55,
    modulId: 2,
    judul: "Rata-rata Transaksi di Atas Target",
    materi: "Mengidentifikasi apakah rata-rata nilai sewa memenuhi target bisnis.",
    instruksi: "Tampilkan 'host_id' yang memiliki rata-rata (AVG) 'total_bayar' di atas 2.000.000.",
    tabelSkema: [
      { host_id: "H-002", total_bayar: 2500000 }
    ],
    hint: "Gunakan GROUP BY host_id HAVING AVG(total_bayar) > 2000000"
  },

  // --- TABEL PERFORMA_HOST (Statistik Chat & Respon) ---
  {
    id: 56,
    modulId: 2,
    judul: "Kecepatan Respon Host",
    materi: "Sistem memberikan badge 'Superhost' jika respon di bawah 10 menit.",
    instruksi: "Tampilkan 'nama_host' yang memiliki 'avg_response_time' di bawah 10 menit dan statusnya 'Active'.",
    tabelSkema: [
      { nama_host: "Alex", avg_response_time: 5, status: "Active" },
      { nama_host: "Bima", avg_response_time: 15, status: "Active" }
    ],
    hint: "Gunakan WHERE avg_response_time < 10 AND status = 'Active'"
  },
  {
    id: 57,
    modulId: 2,
    judul: "Total Pesan per Kategori",
    materi: "Menganalisis jenis pertanyaan tamu (Booking, Refund, Fasilitas).",
    instruksi: "Tampilkan 'kategori_pesan' dan jumlah total pesan yang masuk untuk kategori tersebut.",
    tabelSkema: [
      { kategori_pesan: "Booking", id_pesan: 1 },
      { kategori_pesan: "Booking", id_pesan: 2 },
      { kategori_pesan: "Fasilitas", id_pesan: 3 }
    ],
    hint: "Gunakan GROUP BY kategori_pesan"
  },
  {
    id: 58,
    modulId: 2,
    judul: "Ranking Host Berdasarkan Chat Terbanyak",
    materi: "Melihat host yang paling sibuk melayani tamu.",
    instruksi: "Tampilkan 'host_id' dan jumlah pesan, urutkan dari yang paling banyak pesannya.",
    tabelSkema: [
      { host_id: "H-10", jml_pesan: 150 },
      { host_id: "H-11", jml_pesan: 300 }
    ],
    hint: "Gunakan ORDER BY jml_pesan DESC"
  },
  {
    id: 59,
    modulId: 2,
    judul: "Filter Host dengan Rating Rendah tapi Chat Banyak",
    materi: "Mencari anomali: Host sibuk tapi penilaian tamu buruk.",
    instruksi: "Tampilkan 'host_id' yang punya pesan > 100 tapi rating di bawah 3.0.",
    tabelSkema: [
      { host_id: "H-20", jml_pesan: 120, rating: 2.5 }
    ],
    hint: "Gunakan WHERE jml_pesan > 100 AND rating < 3.0"
  },
  {
    id: 60,
    modulId: 2,
    judul: "Laporan Akhir: Performa Bulanan",
    materi: "Menggabungkan urutan, grup, dan filter dalam satu laporan.",
    instruksi: "Tampilkan 'bulan', total transaksi, dan rata-rata rating. Hanya untuk bulan dengan total transaksi > 1000, urutkan dari rating tertinggi.",
    tabelSkema: [
      { bulan: "Juli", total_trx: 1500, avg_rating: 4.8 }
    ],
    hint: "Urutan: GROUP BY bulan HAVING total_trx > 1000 ORDER BY avg_rating DESC"
  }
];

export default soalData;