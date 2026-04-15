export const quizData = [
{
    id: 1,
    modulId: 7,
    materiId: 1,
    question: "Apa yang dimaksud dengan fungsi agregat dalam SQL?",
    options: [
      "Fungsi untuk menghapus data",
      "Fungsi untuk merangkum data menjadi satu nilai",
      "Fungsi untuk membuat tabel",
      "Fungsi untuk mengubah struktur database"
    ],
    answer: "Fungsi untuk merangkum data menjadi satu nilai"
  },
  {
    id: 2,
    modulId: 7,
    materiId: 1,
    question: "Apa tujuan utama fungsi agregat?",
    options: [
      "Menghapus data",
      "Menghasilkan ringkasan data",
      "Menampilkan semua data",
      "Mengubah kolom"
    ],
    answer: "Menghasilkan ringkasan data"
  },
  {
    id: 3,
    modulId: 7,
    materiId: 1,
    question: "Fungsi agregat bekerja pada bagian apa?",
    options: ["Baris", "Kolom", "Database", "Server"],
    answer: "Kolom"
  },
  {
    id: 4,
    modulId: 7,
    materiId: 1,
    question: "Tanpa GROUP BY, fungsi agregat menghasilkan?",
    options: [
      "Banyak baris",
      "Satu baris",
      "Error",
      "Tidak ada hasil"
    ],
    answer: "Satu baris"
  },
  {
    id: 5,
    modulId: 7,
    materiId: 1,
    question: "Mengapa fungsi agregat penting?",
    options: [
      "Untuk menghapus data",
      "Untuk memperlambat query",
      "Untuk merangkum data",
      "Untuk membuat tabel"
    ],
    answer: "Untuk merangkum data"
  },

  // ================= MATERI 2 =================
  {
    id: 6,
    modulId: 7,
    materiId: 2,
    question: "Fungsi COUNT digunakan untuk?",
    options: [
      "Menjumlahkan nilai",
      "Menghitung jumlah data",
      "Mencari nilai terbesar",
      "Menghapus data"
    ],
    answer: "Menghitung jumlah data"
  },
  {
    id: 7,
    modulId: 7,
    materiId: 2,
    question: "Fungsi SUM digunakan untuk?",
    options: [
      "Menghitung jumlah baris",
      "Menjumlahkan nilai",
      "Mencari nilai terkecil",
      "Menampilkan data"
    ],
    answer: "Menjumlahkan nilai"
  },
  {
    id: 8,
    modulId: 7,
    materiId: 2,
    question: "Fungsi AVG digunakan untuk?",
    options: [
      "Menghitung rata-rata",
      "Menghitung total",
      "Menghapus data",
      "Mengurutkan data"
    ],
    answer: "Menghitung rata-rata"
  },
  {
    id: 9,
    modulId: 7,
    materiId: 2,
    question: "Fungsi MAX digunakan untuk?",
    options: [
      "Mencari nilai terkecil",
      "Mencari nilai terbesar",
      "Menghitung jumlah",
      "Menghapus data"
    ],
    answer: "Mencari nilai terbesar"
  },
  {
    id: 10,
    modulId: 7,
    materiId: 2,
    question: "Fungsi MIN digunakan untuk?",
    options: [
      "Mencari nilai terbesar",
      "Mencari nilai terkecil",
      "Menghitung rata-rata",
      "Menjumlahkan data"
    ],
    answer: "Mencari nilai terkecil"
  },
  {
    id: 11,
    modulId: 7,
    materiId: 3,
    question: "Apa fungsi utama dari GROUP BY dalam SQL?",
    options: [
      "Menghapus data",
      "Mengelompokkan data berdasarkan kolom tertentu",
      "Menambahkan data",
      "Mengurutkan data"
    ],
    answer: "Mengelompokkan data berdasarkan kolom tertentu"
  },
  {
    id: 12,
    modulId: 7,
    materiId: 3,
    question: "Apa yang terjadi jika menggunakan GROUP BY?",
    options: [
      "Data akan dihapus",
      "Data akan digabung tanpa aturan",
      "Data akan dikelompokkan",
      "Data akan diurutkan"
    ],
    answer: "Data akan dikelompokkan"
  },
  {
    id: 13,
    modulId: 7,
    materiId: 3,
    question: "Query mana yang benar menggunakan GROUP BY?",
    options: [
      "SELECT COUNT(*) FROM karyawan",
      "SELECT departemen FROM karyawan",
      "SELECT departemen, COUNT(*) FROM karyawan GROUP BY departemen",
      "SELECT * FROM karyawan GROUP BY"
    ],
    answer: "SELECT departemen, COUNT(*) FROM karyawan GROUP BY departemen"
  },
  {
    id: 14,
    modulId: 7,
    materiId: 3,
    question: "Tanpa GROUP BY, fungsi agregat menghasilkan?",
    options: [
      "Banyak baris",
      "Satu baris",
      "Error",
      "Tidak ada hasil"
    ],
    answer: "Satu baris"
  },
  {
    id: 15,
    modulId: 7,
    materiId: 3,
    question: "Kolom yang tidak menggunakan fungsi agregat harus?",
    options: [
      "Dihapus",
      "Ditulis di GROUP BY",
      "Dibiarkan kosong",
      "Dimasukkan ke WHERE"
    ],
    answer: "Ditulis di GROUP BY"
  },
  {
    id: 16,
    modulId: 7,
    materiId: 4,
    question: "Apa fungsi dari HAVING dalam SQL?",
    options: [
      "Menghapus data",
      "Memfilter hasil setelah GROUP BY",
      "Menambahkan data",
      "Mengurutkan data"
    ],
    answer: "Memfilter hasil setelah GROUP BY"
  },
  {
    id: 17,
    modulId: 7,
    materiId: 4,
    question: "HAVING digunakan setelah?",
    options: [
      "SELECT",
      "WHERE",
      "GROUP BY",
      "INSERT"
    ],
    answer: "GROUP BY"
  },
  {
    id: 18,
    modulId: 7,
    materiId: 4,
    question: "Perbedaan HAVING dengan WHERE adalah?",
    options: [
      "HAVING untuk sebelum grouping",
      "WHERE untuk setelah grouping",
      "HAVING untuk hasil agregasi",
      "Tidak ada perbedaan"
    ],
    answer: "HAVING untuk hasil agregasi"
  },
  {
    id: 19,
    modulId: 7,
    materiId: 4,
    question: "Query mana yang benar menggunakan HAVING?",
    options: [
      "SELECT * FROM karyawan HAVING COUNT(*) > 2",
      "SELECT departemen, COUNT(*) FROM karyawan GROUP BY departemen HAVING COUNT(*) > 2",
      "SELECT COUNT(*) FROM karyawan WHERE COUNT(*) > 2",
      "SELECT * FROM karyawan GROUP BY HAVING"
    ],
    answer: "SELECT departemen, COUNT(*) FROM karyawan GROUP BY departemen HAVING COUNT(*) > 2"
  },
  {
    id: 20,
    modulId: 7,
    materiId: 4,
    question: "HAVING biasanya digunakan dengan?",
    options: [
      "INSERT",
      "DELETE",
      "Fungsi agregat",
      "DROP"
    ],
    answer: "Fungsi agregat"
  },
{
    id: 21,
    modulId: 7,
    materiId: 5,
    question: "Apa perbedaan utama WHERE dan HAVING?",
    options: [
      "WHERE untuk hasil agregasi",
      "HAVING untuk data mentah",
      "WHERE sebelum GROUP BY, HAVING setelah",
      "Tidak ada perbedaan"
    ],
    answer: "WHERE sebelum GROUP BY, HAVING setelah"
  },
  {
    id: 22,
    modulId: 7,
    materiId: 5,
    question: "WHERE digunakan untuk?",
    options: [
      "Memfilter hasil agregasi",
      "Memfilter data sebelum GROUP BY",
      "Menghapus data",
      "Mengurutkan data"
    ],
    answer: "Memfilter data sebelum GROUP BY"
  },
  {
    id: 23,
    modulId: 7,
    materiId: 5,
    question: "HAVING digunakan untuk?",
    options: [
      "Memfilter data mentah",
      "Memfilter hasil agregasi",
      "Menambahkan data",
      "Menghapus tabel"
    ],
    answer: "Memfilter hasil agregasi"
  },
  {
    id: 24,
    modulId: 7,
    materiId: 5,
    question: "Query mana yang benar menggunakan WHERE?",
    options: [
      "SELECT * FROM karyawan WHERE gaji > 5000000",
      "SELECT * FROM karyawan HAVING gaji > 5000000",
      "SELECT COUNT(*) WHERE gaji > 5000000",
      "SELECT * GROUP BY WHERE"
    ],
    answer: "SELECT * FROM karyawan WHERE gaji > 5000000"
  },
  {
    id: 25,
    modulId: 7,
    materiId: 5,
    question: "Query mana yang benar menggunakan HAVING?",
    options: [
      "SELECT * FROM karyawan HAVING gaji > 5000000",
      "SELECT departemen, COUNT(*) FROM karyawan GROUP BY departemen HAVING COUNT(*) > 2",
      "SELECT * FROM karyawan WHERE COUNT(*) > 2",
      "SELECT COUNT(*) FROM karyawan WHERE"
    ],
    answer: "SELECT departemen, COUNT(*) FROM karyawan GROUP BY departemen HAVING COUNT(*) > 2"
  },
   {
    id: 26,
    modulId: 7,
    materiId: 6,
    question: "Apa yang dimaksud dengan NULL dalam database?",
    options: [
      "Nilai nol",
      "Nilai kosong atau tidak diketahui",
      "Nilai terbesar",
      "Nilai default"
    ],
    answer: "Nilai kosong atau tidak diketahui"
  },
  {
    id: 27,
    modulId: 7,
    materiId: 6,
    question: "Bagaimana fungsi agregat memperlakukan NULL?",
    options: [
      "Menghitung semua NULL",
      "Menghapus semua data",
      "Mengabaikan NULL",
      "Menggandakan NULL"
    ],
    answer: "Mengabaikan NULL"
  },
  {
    id: 28,
    modulId: 7,
    materiId: 6,
    question: "Perbedaan COUNT(kolom) dan COUNT(*) adalah?",
    options: [
      "COUNT(*) hanya menghitung NULL",
      "COUNT(kolom) menghitung semua baris",
      "COUNT(kolom) tidak menghitung NULL",
      "Tidak ada perbedaan"
    ],
    answer: "COUNT(kolom) tidak menghitung NULL"
  },
  {
    id: 29,
    modulId: 7,
    materiId: 6,
    question: "COUNT(*) akan menghasilkan?",
    options: [
      "Jumlah baris termasuk NULL",
      "Jumlah NULL saja",
      "Jumlah kolom",
      "Nilai rata-rata"
    ],
    answer: "Jumlah baris termasuk NULL"
  },
  {
    id: 30,
    modulId: 7,
    materiId: 6,
    question: "Mengapa penting memahami NULL?",
    options: [
      "Agar bisa menghapus tabel",
      "Agar tidak terjadi kesalahan analisis data",
      "Agar bisa menambah kolom",
      "Agar query lebih lambat"
    ],
    answer: "Agar tidak terjadi kesalahan analisis data"
  },
   {
    id: 31,
    modulId: 8,
    materiId: 7,
    question: "Apa yang dimaksud dengan subquery dalam SQL?",
    options: [
      "Query yang berdiri sendiri",
      "Query di dalam query lain",
      "Query untuk menghapus data",
      "Query untuk membuat tabel"
    ],
    answer: "Query di dalam query lain"
  },
  {
    id: 32,
    modulId: 8,
    materiId: 7,
    question: "Kapan subquery biasanya digunakan?",
    options: [
      "Untuk menghapus data",
      "Untuk menghitung hasil sementara",
      "Untuk membuat database",
      "Untuk menambah kolom"
    ],
    answer: "Untuk menghitung hasil sementara"
  },
  {
    id: 33,
    modulId: 8,
    materiId: 7,
    question: "Subquery akan dieksekusi kapan?",
    options: [
      "Setelah query utama",
      "Sebelum query utama",
      "Bersamaan dengan query utama",
      "Tidak pernah dieksekusi"
    ],
    answer: "Sebelum query utama"
  },
  {
    id: 34,
    modulId: 8,
    materiId: 7,
    question: "Di mana subquery dituliskan?",
    options: [
      "Di luar query",
      "Dalam tanda kurung ()",
      "Dalam tabel",
      "Dalam komentar"
    ],
    answer: "Dalam tanda kurung ()"
  },
  {
    id: 35,
    modulId: 8,
    materiId: 7,
    question: "Query mana yang menggunakan subquery dengan benar?",
    options: [
      "SELECT * FROM produk WHERE harga > AVG(harga)",
      "SELECT * FROM produk WHERE harga > (SELECT AVG(harga) FROM produk)",
      "SELECT AVG(harga) FROM produk WHERE harga",
      "SELECT * FROM produk AVG(harga)"
    ],
    answer: "SELECT * FROM produk WHERE harga > (SELECT AVG(harga) FROM produk)"
  },
  {
    id: 36,
    modulId: 8,
    materiId: 8,
    question: "Apa yang dimaksud dengan single-row subquery?",
    options: [
      "Subquery dengan banyak hasil",
      "Subquery dengan satu nilai hasil",
      "Subquery tanpa hasil",
      "Subquery untuk delete data"
    ],
    answer: "Subquery dengan satu nilai hasil"
  },
  {
    id: 37,
    modulId: 8,
    materiId: 8,
    question: "Operator apa yang cocok untuk single-row subquery?",
    options: [
      "IN",
      "=",
      "EXISTS",
      "ALL"
    ],
    answer: "="
  },
  {
    id: 38,
    modulId: 8,
    materiId: 8,
    question: "Multiple-row subquery menghasilkan?",
    options: [
      "Satu nilai",
      "Banyak nilai",
      "Tidak ada nilai",
      "Error"
    ],
    answer: "Banyak nilai"
  },
  {
    id: 39,
    modulId: 8,
    materiId: 8,
    question: "Operator apa yang digunakan untuk multiple-row subquery?",
    options: [
      "=",
      "<",
      "IN",
      "+"
    ],
    answer: "IN"
  },
  {
    id: 40,
    modulId: 8,
    materiId: 8,
    question: "Query mana yang termasuk multiple-row subquery?",
    options: [
      "SELECT * FROM karyawan WHERE gaji = (SELECT MAX(gaji) FROM karyawan)",
      "SELECT * FROM karyawan WHERE departemen IN (SELECT departemen FROM karyawan)",
      "SELECT * FROM karyawan WHERE gaji > 5000000",
      "SELECT COUNT(*) FROM karyawan"
    ],
    answer: "SELECT * FROM karyawan WHERE departemen IN (SELECT departemen FROM karyawan)"
  },
   {
    id: 41,
    modulId: 8,
    materiId: 3,
    question: "Operator IN digunakan untuk apa dalam subquery?",
    options: [
      "Mengecek nilai terbesar",
      "Mengecek apakah nilai ada dalam hasil subquery",
      "Menghapus data",
      "Mengurutkan data"
    ],
    answer: "Mengecek apakah nilai ada dalam hasil subquery"
  },
  {
    id: 42,
    modulId: 8,
    materiId: 3,
    question: "Operator EXISTS digunakan untuk?",
    options: [
      "Menghitung jumlah data",
      "Mengecek apakah subquery menghasilkan data",
      "Menjumlahkan data",
      "Menghapus tabel"
    ],
    answer: "Mengecek apakah subquery menghasilkan data"
  },
  {
    id: 43,
    modulId: 8,
    materiId: 3,
    question: "Operator ANY digunakan untuk?",
    options: [
      "Membandingkan dengan semua nilai",
      "Membandingkan dengan salah satu nilai",
      "Menghapus data",
      "Menampilkan semua data"
    ],
    answer: "Membandingkan dengan salah satu nilai"
  },
  {
    id: 44,
    modulId: 8,
    materiId: 3,
    question: "Operator ALL digunakan untuk?",
    options: [
      "Membandingkan dengan satu nilai",
      "Membandingkan dengan semua nilai",
      "Menghapus data",
      "Mengurutkan data"
    ],
    answer: "Membandingkan dengan semua nilai"
  },
  {
    id: 45,
    modulId: 8,
    materiId: 3,
    question: "Query mana yang benar menggunakan operator IN?",
    options: [
      "SELECT * FROM produk WHERE kategori = (SELECT kategori FROM produk)",
      "SELECT * FROM produk WHERE kategori IN (SELECT kategori FROM produk)",
      "SELECT * FROM produk WHERE IN kategori",
      "SELECT * FROM produk IN kategori"
    ],
    answer: "SELECT * FROM produk WHERE kategori IN (SELECT kategori FROM produk)"
  },
  {
    id: 46,
    modulId: 8,
    materiId: 4,
    question: "Di mana subquery bisa digunakan dalam SQL?",
    options: [
      "Hanya di WHERE",
      "Hanya di SELECT",
      "WHERE, SELECT, dan FROM",
      "Hanya di FROM"
    ],
    answer: "WHERE, SELECT, dan FROM"
  },
  {
    id: 47,
    modulId: 8,
    materiId: 4,
    question: "Subquery pada WHERE digunakan untuk?",
    options: [
      "Menampilkan kolom baru",
      "Filtering data",
      "Menghapus data",
      "Mengubah tabel"
    ],
    answer: "Filtering data"
  },
  {
    id: 48,
    modulId: 8,
    materiId: 4,
    question: "Subquery pada SELECT digunakan untuk?",
    options: [
      "Menghapus data",
      "Menampilkan hasil tambahan dalam kolom",
      "Mengurutkan data",
      "Menghapus tabel"
    ],
    answer: "Menampilkan hasil tambahan dalam kolom"
  },
  {
    id: 49,
    modulId: 8,
    materiId: 4,
    question: "Subquery pada FROM disebut juga?",
    options: [
      "Main query",
      "Derived table",
      "Primary key",
      "Index"
    ],
    answer: "Derived table"
  },
  {
    id: 50,
    modulId: 8,
    materiId: 4,
    question: "Apa yang wajib digunakan saat subquery berada di FROM?",
    options: [
      "WHERE",
      "GROUP BY",
      "Alias",
      "ORDER BY"
    ],
    answer: "Alias"
  },
  {
    id: 51,
    modulId: 8,
    materiId: 5,
    question: "Apa yang dimaksud dengan correlated subquery?",
    options: [
      "Subquery yang berdiri sendiri",
      "Subquery yang tidak bergantung pada query utama",
      "Subquery yang bergantung pada query utama",
      "Subquery untuk menghapus data"
    ],
    answer: "Subquery yang bergantung pada query utama"
  },
  {
    id: 52,
    modulId: 8,
    materiId: 5,
    question: "Kapan correlated subquery dijalankan?",
    options: [
      "Satu kali saja",
      "Sebelum query utama",
      "Berulang untuk setiap baris",
      "Tidak pernah dijalankan"
    ],
    answer: "Berulang untuk setiap baris"
  },
  {
    id: 53,
    modulId: 8,
    materiId: 5,
    question: "Mengapa correlated subquery bisa lebih lambat?",
    options: [
      "Karena tidak menggunakan tabel",
      "Karena dijalankan berulang untuk setiap baris",
      "Karena tidak memiliki hasil",
      "Karena tidak bisa digunakan"
    ],
    answer: "Karena dijalankan berulang untuk setiap baris"
  },
  {
    id: 54,
    modulId: 8,
    materiId: 5,
    question: "Query mana yang termasuk correlated subquery?",
    options: [
      "SELECT * FROM karyawan WHERE gaji > 5000000",
      "SELECT * FROM karyawan WHERE gaji > (SELECT AVG(gaji) FROM karyawan)",
      "SELECT * FROM karyawan k1 WHERE gaji > (SELECT AVG(gaji) FROM karyawan k2 WHERE k1.departemen = k2.departemen)",
      "SELECT COUNT(*) FROM karyawan"
    ],
    answer: "SELECT * FROM karyawan k1 WHERE gaji > (SELECT AVG(gaji) FROM karyawan k2 WHERE k1.departemen = k2.departemen)"
  },
  {
    id: 55,
    modulId: 8,
    materiId: 5,
    question: "Correlated subquery biasanya digunakan untuk?",
    options: [
      "Menghapus data",
      "Perbandingan data per kelompok",
      "Menambahkan tabel",
      "Mengurutkan data"
    ],
    answer: "Perbandingan data per kelompok"
  },
  {
    id: 56,
    modulId: 8,
    materiId: 6,
    question: "Apa perbedaan utama antara subquery dan JOIN?",
    options: [
      "Subquery lebih cepat",
      "JOIN lebih mudah dipahami",
      "JOIN lebih efisien, subquery lebih mudah dipahami",
      "Tidak ada perbedaan"
    ],
    answer: "JOIN lebih efisien, subquery lebih mudah dipahami"
  },
  {
    id: 57,
    modulId: 8,
    materiId: 6,
    question: "Kapan sebaiknya menggunakan JOIN?",
    options: [
      "Saat ingin performa lebih baik",
      "Saat ingin query lebih panjang",
      "Saat menghapus data",
      "Saat membuat database"
    ],
    answer: "Saat ingin performa lebih baik"
  },
  {
    id: 58,
    modulId: 8,
    materiId: 6,
    question: "Kapan subquery lebih cocok digunakan?",
    options: [
      "Saat ingin query sederhana dan mudah dipahami",
      "Saat ingin performa tinggi",
      "Saat menghapus data",
      "Saat membuat tabel"
    ],
    answer: "Saat ingin query sederhana dan mudah dipahami"
  },
  {
    id: 59,
    modulId: 8,
    materiId: 6,
    question: "JOIN digunakan untuk?",
    options: [
      "Menghapus data",
      "Menggabungkan tabel",
      "Menghitung rata-rata",
      "Mengurutkan data"
    ],
    answer: "Menggabungkan tabel"
  },
  {
    id: 60,
    modulId: 8,
    materiId: 6,
    question: "Query mana yang menggunakan JOIN dengan benar?",
    options: [
      "SELECT * FROM pesanan WHERE pelanggan_id IN (SELECT id FROM pelanggan)",
      "SELECT * FROM pesanan JOIN pelanggan ON pesanan.pelanggan_id = pelanggan.id",
      "SELECT * FROM pesanan WHERE JOIN pelanggan",
      "SELECT JOIN * FROM pelanggan"
    ],
    answer: "SELECT * FROM pesanan JOIN pelanggan ON pesanan.pelanggan_id = pelanggan.id"
  },
  {
    id: 71,
    modulId: 9,
    materiId: 3,
    question: "Constraint biasanya dibuat saat?",
    options: [
      "SELECT",
      "CREATE TABLE",
      "DELETE",
      "DROP"
    ],
    answer: "CREATE TABLE"
  }
];