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
  }
];