const materiData = [
  {
    modulId: 1,
    title: "SELECT Dasar",
    deskripsi: "Mengambil data dari tabel.",
    penjelasan:
      "SELECT adalah perintah utama dalam SQL untuk mengambil data dari database. Kita bisa mengambil semua kolom (*) atau kolom tertentu.",
    sintaks: `SELECT kolom1, kolom2 FROM nama_tabel;`,
    contoh: `-- Ambil semua data
SELECT * FROM produk;

-- Ambil kolom tertentu
SELECT nama_produk, harga FROM produk;`,
    catatan: "Gunakan SELECT * hanya saat eksplorasi, hindari di aplikasi production.",
    kesalahanUmum: "Tidak menuliskan FROM atau salah nama tabel."
  },

  {
    modulId: 2,
    title: "Filtering dengan WHERE",
    deskripsi: "Memfilter data berdasarkan kondisi.",
    penjelasan:
      "WHERE digunakan untuk mengambil data berdasarkan kondisi tertentu.",
    sintaks: `SELECT * FROM tabel WHERE kondisi;`,
    contoh: `-- Stok kurang dari 20
SELECT * FROM produk
WHERE stok < 20;

-- Kategori Energi
SELECT * FROM produk
WHERE kategori = 'Energi';`,
    catatan: "Gunakan AND / OR untuk kondisi lebih kompleks.",
    kesalahanUmum: "Lupa tanda petik untuk string."
  },

  {
    modulId: 3,
    title: "ORDER BY & LIMIT",
    deskripsi: "Mengurutkan dan membatasi data.",
    penjelasan:
      "ORDER BY digunakan untuk sorting, LIMIT untuk membatasi jumlah data.",
    sintaks: `SELECT * FROM tabel ORDER BY kolom DESC LIMIT 5;`,
    contoh: `-- Urutkan harga tertinggi
SELECT * FROM produk
ORDER BY harga DESC;

-- Ambil 5 data
SELECT * FROM produk
LIMIT 5;`,
    catatan: "Gunakan ASC (default) atau DESC.",
    kesalahanUmum: "Salah urutan penulisan LIMIT dan ORDER BY."
  },

  {
    modulId: 4,
    title: "Aggregate Function",
    deskripsi: "Menghitung data.",
    penjelasan:
      "Digunakan untuk operasi perhitungan seperti jumlah, rata-rata, dll.",
    sintaks: `SELECT COUNT(*) FROM tabel;`,
    contoh: `SELECT COUNT(*) FROM produk;
SELECT AVG(harga) FROM produk;`,
    catatan: "Sering digunakan dengan GROUP BY.",
    kesalahanUmum: "Menggabungkan kolom biasa tanpa GROUP BY."
  },

  {
    modulId: 5,
    title: "GROUP BY & HAVING",
    deskripsi: "Mengelompokkan data.",
    penjelasan:
      "GROUP BY mengelompokkan data, HAVING memfilter hasil agregasi.",
    sintaks: `SELECT kolom, COUNT(*) FROM tabel GROUP BY kolom;`,
    contoh: `SELECT kategori, COUNT(*)
FROM produk
GROUP BY kategori;`,
    catatan: "HAVING digunakan setelah GROUP BY.",
    kesalahanUmum: "Menggunakan WHERE untuk agregasi."
  },

  {
    modulId: 6,
    title: "INNER JOIN",
    deskripsi: "Menggabungkan tabel.",
    penjelasan:
      "INNER JOIN menampilkan data yang cocok di kedua tabel.",
    sintaks: `SELECT * FROM A INNER JOIN B ON kondisi;`,
    contoh: `SELECT pelanggan.nama, pesanan.total
FROM pelanggan
INNER JOIN pesanan
ON pelanggan.id = pesanan.pelanggan_id;`,
    catatan: "Gunakan alias tabel untuk mempercepat penulisan.",
    kesalahanUmum: "Lupa ON condition."
  },

  {
    modulId: 7,
    title: "LEFT & RIGHT JOIN",
    deskripsi: "JOIN lanjutan.",
    penjelasan:
      "LEFT JOIN menampilkan semua data kiri, RIGHT JOIN sebaliknya.",
    sintaks: `SELECT * FROM A LEFT JOIN B ON kondisi;`,
    contoh: `SELECT pelanggan.nama, pesanan.total
FROM pelanggan
LEFT JOIN pesanan
ON pelanggan.id = pesanan.pelanggan_id;`,
    catatan: "LEFT JOIN paling sering digunakan di dunia kerja.",
    kesalahanUmum: "Tidak memahami arah join."
  },

  {
    modulId: 8,
    title: "Subquery",
    deskripsi: "Query di dalam query.",
    penjelasan:
      "Digunakan untuk membandingkan hasil dari query lain.",
    sintaks: `SELECT * FROM tabel WHERE kolom > (SELECT ...);`,
    contoh: `SELECT * FROM produk
WHERE harga > (
  SELECT AVG(harga) FROM produk
);`,
    catatan: "Subquery bisa di WHERE, SELECT, atau FROM.",
    kesalahanUmum: "Subquery menghasilkan lebih dari 1 nilai."
  },

  {
    modulId: 9,
    title: "Index & Optimasi",
    deskripsi: "Optimasi performa query.",
    penjelasan:
      "Index mempercepat pencarian data.",
    sintaks: `CREATE INDEX nama_index ON tabel(kolom);`,
    contoh: `CREATE INDEX idx_email ON users(email);`,
    catatan: "Gunakan index pada kolom yang sering di-query.",
    kesalahanUmum: "Terlalu banyak index memperlambat insert."
  },

  {
    modulId: 10,
    title: "Studi Kasus Industri",
    deskripsi: "Gabungan semua konsep SQL.",
    penjelasan:
      "Digunakan untuk menyelesaikan masalah nyata.",
    sintaks: "-",
    contoh: `SELECT pelanggan.nama, SUM(pesanan.total)
FROM pelanggan
INNER JOIN pesanan
ON pelanggan.id = pesanan.pelanggan_id
GROUP BY pelanggan.nama;`,
    catatan: "Biasanya kombinasi JOIN + GROUP BY + agregasi.",
    kesalahanUmum: "Tidak memahami relasi antar tabel."
  }
];

export default materiData;