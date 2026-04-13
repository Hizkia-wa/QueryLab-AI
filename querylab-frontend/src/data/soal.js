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
  }
];

export default soalData;