// src/data/materi.js

const materiData = [

  {
    modulId: 1,
    title: "SELECT Dasar",
    deskripsi:
      "Perintah SELECT digunakan untuk mengambil data dari tabel dalam database.",
    penjelasan:
      "SELECT memungkinkan kita memilih seluruh kolom atau kolom tertentu dari sebuah tabel.",
    contoh: `
SELECT * FROM produk;

SELECT nama_produk, harga FROM produk;
`
  },

  {
    modulId: 2,
    title: "Filtering & WHERE",
    deskripsi:
      "Klausa WHERE digunakan untuk memfilter data berdasarkan kondisi tertentu.",
    penjelasan:
      "WHERE dapat digunakan dengan operator seperti =, >, <, AND, OR.",
    contoh: `
SELECT * FROM produk
WHERE stok < 20;

SELECT * FROM produk
WHERE kategori = 'Energi';
`
  },

  {
    modulId: 3,
    title: "ORDER BY & LIMIT",
    deskripsi:
      "Digunakan untuk mengurutkan dan membatasi jumlah data yang ditampilkan.",
    penjelasan:
      "ORDER BY mengurutkan data, LIMIT membatasi jumlah baris hasil.",
    contoh: `
SELECT * FROM produk
ORDER BY harga DESC
LIMIT 5;
`
  },

  {
    modulId: 4,
    title: "Aggregate Function",
    deskripsi:
      "Fungsi agregasi digunakan untuk menghitung data.",
    penjelasan:
      "Beberapa fungsi agregasi: COUNT, SUM, AVG, MIN, MAX.",
    contoh: `
SELECT COUNT(*) FROM produk;

SELECT AVG(harga) FROM produk;
`
  },

  {
    modulId: 5,
    title: "GROUP BY & HAVING",
    deskripsi:
      "Digunakan untuk mengelompokkan data berdasarkan kolom tertentu.",
    penjelasan:
      "GROUP BY mengelompokkan, HAVING memfilter hasil agregasi.",
    contoh: `
SELECT kategori, COUNT(*)
FROM produk
GROUP BY kategori;
`
  },

  {
    modulId: 6,
    title: "INNER JOIN",
    deskripsi:
      "INNER JOIN menggabungkan dua tabel berdasarkan relasi kolom.",
    penjelasan:
      "Hanya data yang cocok di kedua tabel yang akan ditampilkan.",
    contoh: `
SELECT pelanggan.nama, pesanan.total
FROM pelanggan
INNER JOIN pesanan
ON pelanggan.id = pesanan.pelanggan_id;
`
  },

  {
    modulId: 7,
    title: "LEFT & RIGHT JOIN",
    deskripsi:
      "JOIN lanjutan untuk menampilkan data yang tidak memiliki pasangan.",
    penjelasan:
      "LEFT JOIN menampilkan semua data tabel kiri meskipun tidak ada pasangan.",
    contoh: `
SELECT pelanggan.nama, pesanan.total
FROM pelanggan
LEFT JOIN pesanan
ON pelanggan.id = pesanan.pelanggan_id;
`
  },

  {
    modulId: 8,
    title: "Subquery",
    deskripsi:
      "Subquery adalah query di dalam query.",
    penjelasan:
      "Digunakan untuk membandingkan hasil dari query lain.",
    contoh: `
SELECT * FROM produk
WHERE harga > (
  SELECT AVG(harga) FROM produk
);
`
  },

  {
    modulId: 9,
    title: "Index & Optimasi",
    deskripsi:
      "Index mempercepat proses pencarian data dalam tabel.",
    penjelasan:
      "Index sangat berguna untuk kolom yang sering digunakan dalam WHERE.",
    contoh: `
CREATE INDEX idx_email
ON users(email);
`
  },

  {
    modulId: 10,
    title: "Studi Kasus Industri",
    deskripsi:
      "Menggabungkan berbagai teknik SQL dalam satu studi kasus nyata.",
    penjelasan:
      "Biasanya melibatkan JOIN, GROUP BY, dan fungsi agregasi.",
    contoh: `
SELECT pelanggan.nama, SUM(pesanan.total)
FROM pelanggan
INNER JOIN pesanan
ON pelanggan.id = pesanan.pelanggan_id
GROUP BY pelanggan.nama;
`
  }

];

export default materiData;