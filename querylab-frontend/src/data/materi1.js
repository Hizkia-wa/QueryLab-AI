const materiData = [
  {
    modulId: 1,
    title: "Pengantar SQL",
    deskripsi: "Memahami konsep dasar SQL dan database relasional.",
    penjelasan:
      "SQL (Structured Query Language) adalah bahasa standar yang digunakan untuk berinteraksi dengan database relasional seperti MySQL, PostgreSQL, dan SQL Server. Dalam database, data disimpan dalam bentuk tabel yang terdiri dari baris (record) dan kolom (field). SQL memungkinkan kita untuk mengambil, menambah, mengubah, dan menghapus data dengan mudah.",
    sintaks: "-",
    contoh: `-- Menampilkan teks sederhana
SELECT 'Belajar SQL itu penting';

-- Menampilkan semua data dari tabel
SELECT * FROM produk;`,
    catatan:
      "SQL digunakan di hampir semua aplikasi berbasis data seperti e-commerce, sistem rumah sakit, dan aplikasi mobile.",
    kesalahanUmum:
      "Belum memahami perbedaan antara database, tabel, baris, dan kolom."
  },

  {
    modulId: 2,
    title: "Data Definition Language (DDL)",
    deskripsi: "Mengelola struktur database dan tabel.",
    penjelasan:
      "DDL digunakan untuk membuat dan mengatur struktur database. Dengan DDL, kita bisa membuat tabel baru, mengubah struktur tabel, atau menghapus tabel. Perintah utama DDL adalah CREATE, ALTER, dan DROP.",
    sintaks: `CREATE TABLE nama_tabel (...);`,
    contoh: `-- Membuat tabel
CREATE TABLE produk (
  id INT PRIMARY KEY,
  nama VARCHAR(100),
  harga INT
);

-- Mengubah tabel
ALTER TABLE produk ADD stok INT;

-- Menghapus tabel
DROP TABLE produk;`,
    catatan:
      "DDL tidak mengubah data, tetapi mengubah struktur tabel.",
    kesalahanUmum:
      "Salah menentukan tipe data seperti menggunakan INT untuk teks."
  },

  {
    modulId: 3,
    title: "Data Manipulation Language (DML)",
    deskripsi: "Mengelola data dalam tabel.",
    penjelasan:
      "DML digunakan untuk memanipulasi data dalam tabel, seperti menambahkan data baru, mengubah data, atau menghapus data. Perintah utama DML adalah INSERT, UPDATE, dan DELETE.",
    sintaks: `INSERT INTO tabel VALUES (...);`,
    contoh: `-- Menambahkan data
INSERT INTO produk VALUES (1, 'Teh Botol', 5000);

-- Mengubah data
UPDATE produk SET harga = 6000 WHERE id = 1;

-- Menghapus data
DELETE FROM produk WHERE id = 1;`,
    catatan:
      "Selalu gunakan WHERE saat UPDATE dan DELETE agar tidak mengubah semua data.",
    kesalahanUmum:
      "Lupa WHERE sehingga semua data ikut berubah atau terhapus."
  },

  {
    modulId: 4,
    title: "Konsep Dasar SELECT (DQL)",
    deskripsi: "Mengambil data dari tabel.",
    penjelasan:
      "SELECT adalah perintah utama dalam SQL yang digunakan untuk mengambil data dari satu atau lebih tabel. Kita bisa memilih semua kolom atau hanya kolom tertentu sesuai kebutuhan.",
    sintaks: `SELECT kolom FROM tabel;`,
    contoh: `-- Ambil semua data
SELECT * FROM produk;

-- Ambil kolom tertentu
SELECT nama, harga FROM produk;`,
    catatan:
      "Gunakan SELECT * hanya saat eksplorasi, di aplikasi nyata pilih kolom seperlunya.",
    kesalahanUmum:
      "Salah nama kolom atau tabel."
  },

  {
    modulId: 5,
    title: "Klausa SQL (WHERE, ORDER BY, GROUP BY, HAVING)",
    deskripsi: "Mengatur dan memfilter hasil query.",
    penjelasan:
      "Klausa dalam SQL digunakan untuk mengatur hasil query. WHERE digunakan untuk filter, ORDER BY untuk pengurutan, GROUP BY untuk pengelompokan, dan HAVING untuk filter hasil agregasi.",
    sintaks: `SELECT * FROM tabel WHERE kondisi ORDER BY kolom;`,
    contoh: `-- Filter data
SELECT * FROM produk
WHERE harga > 5000;

-- Urutkan data
SELECT * FROM produk
ORDER BY harga DESC;

-- Grouping
SELECT kategori, COUNT(*)
FROM produk
GROUP BY kategori;`,
    catatan:
      "Urutan penulisan klausa sangat penting: WHERE → GROUP BY → HAVING → ORDER BY.",
    kesalahanUmum:
      "Menggunakan WHERE untuk hasil agregasi (harusnya HAVING)."
  },

  {
    modulId: 6,
    title: "JOIN (Relasi Antar Tabel)",
    deskripsi: "Menggabungkan data dari beberapa tabel.",
    penjelasan:
      "JOIN digunakan untuk menggabungkan data dari dua atau lebih tabel berdasarkan relasi tertentu. Jenis JOIN yang umum adalah INNER JOIN, LEFT JOIN, dan RIGHT JOIN.",
    sintaks: `SELECT * FROM A JOIN B ON kondisi;`,
    contoh: `-- INNER JOIN
SELECT pelanggan.nama, pesanan.total
FROM pelanggan
INNER JOIN pesanan
ON pelanggan.id = pesanan.pelanggan_id;

-- LEFT JOIN
SELECT pelanggan.nama, pesanan.total
FROM pelanggan
LEFT JOIN pesanan
ON pelanggan.id = pesanan.pelanggan_id;`,
    catatan:
      "Gunakan alias tabel untuk mempercepat penulisan query.",
    kesalahanUmum:
      "Tidak memahami relasi antar tabel atau lupa ON."
  },

  {
    modulId: 7,
    title: "Fungsi Agregat",
    deskripsi: "Melakukan perhitungan pada data.",
    penjelasan:
      "Fungsi agregat digunakan untuk melakukan perhitungan seperti menghitung jumlah data, rata-rata, nilai maksimum, dan minimum.",
    sintaks: `SELECT COUNT(*) FROM tabel;`,
    contoh: `SELECT COUNT(*) FROM produk;
SELECT AVG(harga) FROM produk;
SELECT MAX(harga) FROM produk;
SELECT MIN(harga) FROM produk;`,
    catatan:
      "Biasanya digunakan bersama GROUP BY.",
    kesalahanUmum:
      "Menggabungkan kolom biasa tanpa GROUP BY."
  },

  {
    modulId: 8,
    title: "Subquery",
    deskripsi: "Query di dalam query.",
    penjelasan:
      "Subquery adalah query yang berada di dalam query lain. Biasanya digunakan untuk membandingkan nilai dengan hasil query lain.",
    sintaks: `SELECT * FROM tabel WHERE kolom > (SELECT ...);`,
    contoh: `-- Produk di atas rata-rata harga
SELECT * FROM produk
WHERE harga > (
  SELECT AVG(harga) FROM produk
);`,
    catatan:
      "Subquery bisa digunakan di WHERE, SELECT, atau FROM.",
    kesalahanUmum:
      "Subquery menghasilkan lebih dari satu nilai tanpa operator yang sesuai."
  },

  {
    modulId: 9,
    title: "Constraint",
    deskripsi: "Aturan untuk menjaga konsistensi data.",
    penjelasan:
      "Constraint adalah aturan yang diterapkan pada tabel untuk memastikan data tetap valid. Contohnya adalah PRIMARY KEY, FOREIGN KEY, UNIQUE, dan NOT NULL.",
    sintaks: `CREATE TABLE tabel (id INT PRIMARY KEY);`,
    contoh: `CREATE TABLE users (
  id INT PRIMARY KEY,
  email VARCHAR(100) UNIQUE,
  nama VARCHAR(100) NOT NULL
);`,
    catatan:
      "Constraint sangat penting untuk menjaga integritas data.",
    kesalahanUmum:
      "Tidak menggunakan PRIMARY KEY sehingga data bisa duplikat."
  }
];

export default materiData;