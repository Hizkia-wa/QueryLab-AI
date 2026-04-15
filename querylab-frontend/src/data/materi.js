// src/data/materi.js

const materiData = [
  {
    id: 1,
    modulId: 1,
    title: "Apa itu SQL?",
    deskripsi: "Mengenal definisi dan sejarah singkat SQL.",
    penjelasan: "SQL adalah bahasa standar untuk mengelola database relasional.", // GUNAKAN STRING BIASA
    sintaks: "-- Tidak ada sintaks khusus",
    contoh: "SELECT 'Belajar SQL itu seru!';",
    catatan: "SQL dikembangkan pertama kali di IBM pada tahun 1970-an."
  },
  {
    id: 1,
    modulId: 4,
    title: "Filosofi dan Peran DQL dalam SQL",
    deskripsi: "Memahami posisi Data Query Language sebagai alat utama analisis data.",
    penjelasan: "Data Query Language (DQL) merupakan sub-bahasa SQL yang paling fundamental bagi siapa saja yang bekerja dengan data. Berbeda dengan DML yang mengubah isi tabel, DQL bersifat 'Read-Only'. Artinya, perintah-perintah di dalamnya hanya digunakan untuk menarik informasi tanpa risiko merusak atau mengubah data asli. SELECT adalah perintah tunggal yang mendominasi DQL, berfungsi sebagai jembatan antara penyimpanan fisik data dan tampilan logis yang dibutuhkan oleh pengguna atau aplikasi.",
    sintaks: "SELECT [kolom] FROM [tabel];",
    contoh: "SELECT 'Halo Dunia'; // Melakukan query tanpa tabel untuk testing",
    catatan: "Setiap perintah SELECT akan menghasilkan 'Result Set', yaitu tabel virtual sementara yang menampung hasil query Anda."
  },
  {
    id: 2,
    modulId: 4,
    title: "Struktur Dasar SELECT dan FROM",
    deskripsi: "Mempelajari dua kata kunci wajib dalam setiap pengambilan data.",
    penjelasan: "Setiap query pengambilan data minimal harus memiliki dua komponen utama: SELECT dan FROM. SELECT menentukan 'apa' yang ingin diambil (kolom), sedangkan FROM menentukan 'di mana' data tersebut berada (tabel). Tanpa kedua komponen ini, database tidak akan tahu sumber data yang dimaksud. Struktur ini mengikuti logika bahasa manusia yang teratur, sehingga memudahkan pengembang untuk memetakan kebutuhan informasi ke dalam baris kode.",
    sintaks: "SELECT nama_kolom FROM nama_tabel;",
    contoh: "SELECT judul_buku FROM koleksi_perpustakaan;",
    catatan: "Pastikan nama tabel dan kolom yang ditulis sudah sesuai dengan skema database agar tidak terjadi error 'Undefined Column'."
  },
  {
    id: 3,
    modulId: 4,
    title: "Implementasi Wildcard Asterisk (*)",
    deskripsi: "Cara cepat mengambil seluruh informasi dari sebuah tabel.",
    penjelasan: "Simbol asterisk (*) dalam dunia SQL diartikan sebagai 'semua'. Ketika Anda menuliskan SELECT *, Anda memerintahkan database untuk mengembalikan setiap kolom yang terdaftar dalam skema tabel tersebut sesuai urutan pembuatannya. Ini sangat berguna ketika Anda belum mengenal struktur tabel secara detail atau sedang melakukan inspeksi data secara cepat. Namun, penggunaan ini harus dihindari dalam kode aplikasi final karena dapat memperlambat performa sistem.",
    sintaks: "SELECT * FROM nama_tabel;",
    contoh: "SELECT * FROM pelanggan;",
    catatan: "Gunakan asterisk hanya untuk keperluan debugging atau eksplorasi data awal."
  },
  {
    id: 4,
    modulId: 4,
    title: "Seleksi Kolom Spesifik untuk Efisiensi",
    deskripsi: "Mengoptimalkan query dengan hanya memanggil data yang diperlukan.",
    penjelasan: "Dalam standar industri, memanggil data secara spesifik jauh lebih baik daripada menggunakan asterisk. Dengan menyebutkan nama kolom yang dipisahkan koma, Anda mengurangi beban lalu lintas jaringan antara server database dan aplikasi. Database hanya akan memproses kolom yang diminta, sehingga penggunaan memori menjadi lebih hemat. Selain itu, cara ini menjaga keamanan data agar kolom sensitif (seperti password atau token) tidak ikut terpanggil secara tidak sengaja.",
    sintaks: "SELECT kolom1, kolom2, kolom3 FROM nama_tabel;",
    contoh: "SELECT id_user, email, status_langganan FROM tabel_users;",
    catatan: "Urutan penulisan kolom di SELECT akan menentukan urutan tampilan pada hasil akhir (Result Set)."
  },
  {
    id: 5,
    modulId: 4,
    title: "Penggunaan Alias (AS) pada Kolom",
    deskripsi: "Memberikan nama samaran pada kolom agar hasil query lebih representatif.",
    penjelasan: "Seringkali nama kolom di database menggunakan istilah teknis yang sulit dipahami orang awam atau terlalu singkat. Kata kunci AS (Alias) memungkinkan kita mengubah nama tampilan kolom di hasil query tanpa mengubah nama asli di tabel. Ini sangat membantu saat kita ingin menyajikan data langsung ke laporan atau antarmuka pengguna, sehingga informasi yang muncul lebih deskriptif dan profesional.",
    sintaks: "SELECT nama_kolom AS nama_baru FROM nama_tabel;",
    contoh: "SELECT prd_name AS nama_produk, prd_price AS harga_jual FROM produk;",
    catatan: "Jika nama alias mengandung spasi, gunakan tanda kutip, misalnya: AS 'Harga Barang'."
  },
  {
    id: 6,
    modulId: 4,
    title: "Eliminasi Duplikasi dengan DISTINCT",
    deskripsi: "Menampilkan nilai yang unik dari sebuah kolom.",
    penjelasan: "Dalam sebuah tabel, seringkali terdapat data yang berulang, misalnya kolom 'kota' pada tabel pelanggan. Jika Anda hanya ingin mengetahui daftar kota apa saja yang ada tanpa melihat pengulangan, gunakan kata kunci DISTINCT. Perintah ini akan memfilter hasil query dan hanya menyisakan satu entri untuk setiap nilai yang unik. Database akan melakukan scanning secara internal untuk memastikan tidak ada duplikasi dalam output yang diberikan.",
    sintaks: "SELECT DISTINCT nama_kolom FROM nama_tabel;",
    contoh: "SELECT DISTINCT kategori_film FROM tabel_film;",
    catatan: "DISTINCT berlaku untuk seluruh baris hasil; jika Anda memilih dua kolom, maka kombinasi keduanya yang akan dipastikan unik."
  },
  {
    id: 7,
    modulId: 4,
    title: "Operasi Aritmatika dalam SELECT",
    deskripsi: "Melakukan perhitungan langsung saat mengambil data.",
    penjelasan: "SELECT tidak hanya bisa mengambil data mentah, tapi juga bisa melakukan kalkulasi matematis sederhana seperti penjumlahan, pengurangan, perkalian, dan pembagian. Kita bisa menggabungkan nilai dari dua kolom atau mengalikan kolom dengan angka tetap. Hal ini sangat berguna untuk menghitung nilai total, diskon, atau pajak secara 'on-the-fly' tanpa perlu melakukan perhitungan di sisi aplikasi atau bahasa pemrograman lain.",
    sintaks: "SELECT kolom1 + kolom2 AS total FROM nama_tabel;",
    contoh: "SELECT nama_barang, harga * stok AS total_nilai_aset FROM inventaris;",
    catatan: "Operasi ini tidak mengubah nilai di tabel asli, hanya mengubah nilai yang ditampilkan di hasil query saja."
  },
  {
    id: 8,
    modulId: 4,
    title: "Konsep Penulisan Kode SQL yang Baik (Formatting)",
    deskripsi: "Mengenal etika penulisan SQL agar mudah dikelola dalam jangka panjang.",
    penjelasan: "Meskipun SQL tidak mempedulikan spasi atau baris baru (whitespace), penulisan yang rapi sangat menentukan kualitas kode. Pengembang profesional biasanya meletakkan kata kunci utama (SELECT, FROM) di baris yang berbeda dan menggunakan indentasi. Hal ini memudahkan proses debugging ketika terjadi kesalahan logika. Selain itu, penggunaan komentar (--) sangat disarankan untuk menjelaskan maksud dari sebuah query yang kompleks kepada rekan tim atau diri sendiri di masa depan.",
    sintaks: "SELECT\n  kolom_a,\n  kolom_b\nFROM nama_tabel;",
    contoh: "-- Query untuk mengambil data profil\nSELECT nama, tgl_lahir FROM users;",
    catatan: "SQL bersifat case-insensitive, tapi kapitalisasi pada keyword adalah standar komunitas (Best Practice)."
  },
  {
    id: 9,
    modulId: 4,
    title: "Limitasi Hasil dengan LIMIT",
    deskripsi: "Membatasi jumlah baris yang ditampilkan oleh query.",
    penjelasan: "Jika sebuah tabel memiliki jutaan baris, menampilkan semuanya sekaligus akan membuat sistem menjadi berat (hang). Perintah LIMIT digunakan untuk menentukan jumlah maksimal baris yang ingin ditarik. Fitur ini adalah kunci utama dalam pembuatan fitur 'Pagination' (halaman 1, 2, 3) di aplikasi web atau mobile. Dengan membatasi data, kita memastikan aplikasi tetap responsif dan penggunaan bandwidth tetap terkendali.",
    sintaks: "SELECT kolom FROM tabel LIMIT jumlah_baris;",
    contoh: "SELECT * FROM log_aktivitas LIMIT 10;",
    catatan: "Di beberapa database lain seperti SQL Server, perintah yang digunakan adalah TOP, sedangkan di Oracle menggunakan ROWNUM."
  },
  {
    id: 10,
    modulId: 4,
    title: "Pengenalan Literal dan Konstanta",
    deskripsi: "Menambahkan data statis ke dalam hasil query.",
    penjelasan: "Terkadang kita perlu menampilkan informasi tambahan yang tidak ada di kolom tabel manapun. Kita bisa menyisipkan 'Literal' atau nilai tetap (string, angka, atau tanggal) langsung di dalam perintah SELECT. Nilai ini akan muncul di setiap baris hasil query. Teknik ini sering digunakan untuk memberikan label, tanda pengenal, atau sebagai placeholder saat menggabungkan beberapa hasil query dari sumber yang berbeda.",
    sintaks: "SELECT 'Teks Statis' AS label, nama_kolom FROM nama_tabel;",
    contoh: "SELECT nama_mhs, 'Aktif' AS status_akademik FROM mahasiswa;",
    catatan: "Literal string harus diapit oleh tanda kutip tunggal ('...')."
  },
  {
    id: 1,
    modulId: 7,
    title: "Konsep Fungsi Agregat",
    deskripsi: "Memahami dasar fungsi agregat dalam SQL.",

    penjelasan: `
Fungsi agregat adalah fitur penting dalam SQL yang digunakan untuk melakukan perhitungan terhadap sekumpulan data dalam sebuah kolom. Berbeda dengan query biasa yang menampilkan banyak baris data, fungsi agregat akan merangkum data tersebut menjadi satu nilai hasil.
Dalam dunia nyata, kita jarang membutuhkan semua data mentah. Sebagai contoh, dalam sistem penjualan, kita lebih sering membutuhkan informasi seperti total penjualan, jumlah transaksi, atau rata-rata harga produk. Fungsi agregat membantu kita mendapatkan informasi tersebut dengan cepat.
Fungsi agregat bekerja dengan cara mengambil seluruh nilai dalam satu kolom, kemudian melakukan operasi tertentu seperti menghitung, menjumlahkan, atau mencari nilai maksimum.
Jika digunakan tanpa GROUP BY, fungsi agregat akan menghasilkan satu baris hasil. Namun jika digunakan dengan GROUP BY, hasilnya bisa menjadi beberapa baris sesuai kelompok data.
  `,
    sintaks: `
SELECT fungsi_agregat(kolom)
FROM tabel;
  `,
    contoh: `
SELECT COUNT(*) FROM produk;
SELECT SUM(harga) FROM produk;
SELECT AVG(harga) FROM produk;
  `,
    catatan: `
Fungsi agregat sangat sering digunakan dalam laporan, dashboard, dan analisis data bisnis.
  `
  },
  {
    id: 2,
    modulId: 7,
    title: "COUNT, SUM, AVG, MAX, MIN",
    deskripsi: "Mengenal jenis-jenis fungsi agregat utama.",
    penjelasan: `
SQL menyediakan beberapa fungsi agregat utama yang sering digunakan dalam pengolahan data.
COUNT digunakan untuk menghitung jumlah baris data.
SUM digunakan untuk menjumlahkan nilai numerik.
AVG digunakan untuk menghitung rata-rata.
MAX digunakan untuk mencari nilai terbesar.
MIN digunakan untuk mencari nilai terkecil.
Setiap fungsi memiliki kegunaan masing-masing dan biasanya digunakan sesuai kebutuhan analisis data.
  `,
    sintaks: `
COUNT(*)
SUM(kolom)
AVG(kolom)
MAX(kolom)
MIN(kolom)
  `,
    contoh: `
SELECT COUNT(*) FROM karyawan;
SELECT SUM(gaji) FROM karyawan;
SELECT AVG(gaji) FROM karyawan;
SELECT MAX(gaji) FROM karyawan;
SELECT MIN(gaji) FROM karyawan;
  `,
    catatan: `
Pastikan kolom yang digunakan sesuai dengan tipe data, terutama untuk SUM dan AVG.
  `
  },
  {
    id: 3,
    modulId: 7,
    title: "Penggunaan GROUP BY",
    deskripsi: "Mengelompokkan data untuk analisis lebih detail.",
    penjelasan: `
GROUP BY digunakan untuk mengelompokkan data berdasarkan nilai tertentu dalam satu kolom.
Dengan GROUP BY, kita dapat melakukan perhitungan agregat untuk setiap kelompok data. Misalnya, menghitung jumlah karyawan per departemen atau rata-rata nilai per kelas.
Tanpa GROUP BY, fungsi agregat hanya menghasilkan satu nilai untuk seluruh tabel. Dengan GROUP BY, hasilnya akan dibagi berdasarkan kategori tertentu.
  `,
    sintaks: `
SELECT kolom, fungsi_agregat(kolom)
FROM tabel
GROUP BY kolom;
  `,
    contoh: `
SELECT departemen, COUNT(*)
FROM karyawan
GROUP BY departemen;
  `,
    catatan: `
Semua kolom yang tidak menggunakan fungsi agregat wajib ditulis di GROUP BY.
  `
  },
  {
    id: 4,
    modulId: 7,
    title: "Filtering dengan HAVING",
    deskripsi: "Menyaring hasil agregasi.",
    penjelasan: `
HAVING digunakan untuk memfilter hasil dari fungsi agregat setelah proses GROUP BY dilakukan.
Berbeda dengan WHERE yang bekerja sebelum data dikelompokkan, HAVING bekerja setelah proses pengelompokan selesai.
Dengan HAVING, kita bisa memfilter berdasarkan hasil agregasi, misalnya hanya menampilkan kelompok dengan jumlah data tertentu.
  `,
    sintaks: `
SELECT kolom, COUNT(*)
FROM tabel
GROUP BY kolom
HAVING COUNT(*) > nilai;
  `,
    contoh: `
SELECT departemen, COUNT(*)
FROM karyawan
GROUP BY departemen
HAVING COUNT(*) > 2;
  `,
    catatan: `
HAVING hanya digunakan untuk kondisi yang melibatkan fungsi agregat.
  `
  },
  {
    id: 5,
    modulId: 7,
    title: "Perbedaan WHERE dan HAVING",
    deskripsi: "Memahami perbedaan dua jenis filtering.",
    penjelasan: `
WHERE dan HAVING memiliki fungsi yang sama yaitu untuk memfilter data, tetapi digunakan pada tahap yang berbeda.
WHERE digunakan untuk memfilter data sebelum proses GROUP BY dilakukan. Sedangkan HAVING digunakan setelah proses GROUP BY.
Artinya, WHERE bekerja pada data mentah, sedangkan HAVING bekerja pada hasil agregasi.
  `,
    sintaks: `
WHERE kondisi
HAVING kondisi_agregat
  `,
    contoh: `
SELECT * FROM karyawan WHERE gaji > 5000000;
SELECT departemen, COUNT(*)
FROM karyawan
GROUP BY departemen
HAVING COUNT(*) > 2;
  `,
    catatan: `
Gunakan WHERE untuk filter awal, dan HAVING untuk filter hasil agregasi.
  `
  },
  {
    id: 6,
    modulId: 7,
    title: "Menangani Nilai NULL",
    deskripsi: "Cara fungsi agregat memperlakukan NULL.",
    penjelasan: `
NULL adalah nilai yang menunjukkan tidak adanya data atau nilai yang belum diketahui.
Dalam fungsi agregat, NULL biasanya diabaikan. Misalnya, AVG hanya akan menghitung nilai yang tidak NULL.
COUNT(kolom) hanya menghitung nilai yang tidak NULL, sedangkan COUNT(*) menghitung semua baris termasuk yang memiliki NULL.
  `,
    sintaks: `
SELECT COUNT(kolom)
FROM tabel;
  `,
    contoh: `
SELECT COUNT(gaji) FROM karyawan;
SELECT COUNT(*) FROM karyawan;
  `,
    catatan: `
Pemahaman tentang NULL sangat penting agar tidak terjadi kesalahan dalam analisis data.
  `
  },
  {
    id: 1,
    modulId: 8,
    title: "Konsep Query dalam Query",
    deskripsi: "Memahami dasar subquery dalam SQL.",
    penjelasan: `
Subquery adalah query yang ditulis di dalam query lain. Artinya, kita menjalankan sebuah query terlebih dahulu, lalu hasilnya digunakan oleh query utama.
Konsep ini sering disebut sebagai "query dalam query". Subquery biasanya digunakan ketika kita membutuhkan hasil sementara untuk melakukan perbandingan atau filtering data.
Sebagai contoh, kita ingin menampilkan produk yang harganya di atas rata-rata. Kita tidak bisa langsung tahu nilai rata-rata tanpa menghitungnya terlebih dahulu. Di sinilah subquery digunakan.
Subquery akan dieksekusi terlebih dahulu oleh database, kemudian hasilnya digunakan oleh query utama untuk menghasilkan output akhir.
    `,
    sintaks: `
SELECT kolom
FROM tabel
WHERE kolom_operator (SELECT kolom FROM tabel);
    `,
    contoh: `
SELECT * FROM produk
WHERE harga > (
  SELECT AVG(harga) FROM produk
);
    `,
    catatan: `
Subquery selalu berada di dalam tanda kurung () dan akan dijalankan terlebih dahulu sebelum query utama.
    `
  },
  {
    id: 2,
    modulId: 8,
    title: "Jenis Subquery (Single & Multiple Row)",
    deskripsi: "Mengenal jenis subquery berdasarkan jumlah hasil.",

    penjelasan: `
Subquery dapat dibedakan berdasarkan jumlah hasil yang dikembalikan.
Single-row subquery adalah subquery yang menghasilkan satu nilai saja. Biasanya digunakan dengan operator seperti =, >, atau <.
Multiple-row subquery menghasilkan lebih dari satu nilai. Untuk jenis ini, kita harus menggunakan operator khusus seperti IN, ANY, atau ALL.
Pemilihan jenis subquery sangat penting karena akan mempengaruhi cara kita menulis kondisi dalam query utama.
    `,
    sintaks: `
-- Single row
SELECT * FROM tabel
WHERE kolom = (SELECT kolom FROM tabel);
-- Multiple row
SELECT * FROM tabel
WHERE kolom IN (SELECT kolom FROM tabel);
    `,
    contoh: `
-- Single
SELECT * FROM karyawan
WHERE gaji = (SELECT MAX(gaji) FROM karyawan);
-- Multiple
SELECT * FROM karyawan
WHERE departemen IN (
  SELECT departemen FROM karyawan WHERE gaji > 5000000
);
    `,
    catatan: `
Gunakan operator yang sesuai dengan jumlah hasil subquery agar tidak terjadi error.
    `
  },
  {
    id: 3,
    modulId: 8,
    title: "Operator Subquery (IN, EXISTS, ANY, ALL)",
    deskripsi: "Menggunakan operator dalam subquery.",
    penjelasan: `
Dalam subquery, terdapat beberapa operator penting yang digunakan untuk membandingkan hasil query.
IN digunakan untuk mengecek apakah suatu nilai ada dalam hasil subquery.
EXISTS digunakan untuk mengecek apakah subquery menghasilkan data (true/false).
ANY digunakan untuk membandingkan dengan salah satu nilai dalam hasil subquery.
ALL digunakan untuk membandingkan dengan semua nilai dalam hasil subquery.
Pemahaman operator ini sangat penting untuk membuat query yang fleksibel dan kuat.
    `,
    sintaks: `
kolom IN (subquery)
EXISTS (subquery)
kolom > ANY (subquery)
kolom > ALL (subquery)
    `,
    contoh: `
SELECT * FROM produk
WHERE kategori IN (
  SELECT kategori FROM produk WHERE harga > 1000000
);
SELECT * FROM karyawan
WHERE gaji > ALL (
  SELECT gaji FROM karyawan WHERE departemen = 'HR'
);
    `,
    catatan: `
Operator IN paling sering digunakan, sedangkan EXISTS biasanya digunakan untuk performa yang lebih baik pada data besar.
    `
  },
  {
    id: 4,
    modulId: 8,
    title: "Posisi Subquery (WHERE, SELECT, FROM)",
    deskripsi: "Menempatkan subquery dalam query utama.",
    penjelasan: `
Subquery dapat ditempatkan di beberapa bagian dalam query SQL.
Di WHERE, subquery digunakan untuk filtering data.
Di SELECT, subquery digunakan untuk menampilkan hasil tambahan dalam kolom.
Di FROM, subquery digunakan sebagai tabel sementara (derived table).
Setiap posisi memiliki fungsi dan kegunaan yang berbeda tergantung kebutuhan query.
    `,
    sintaks: `
-- WHERE
SELECT * FROM tabel
WHERE kolom = (subquery);
-- SELECT
SELECT kolom, (subquery) FROM tabel;
-- FROM
SELECT * FROM (subquery) AS alias;
    `,
    contoh: `
-- WHERE
SELECT * FROM produk
WHERE harga > (SELECT AVG(harga) FROM produk);
-- SELECT
SELECT nama,
  (SELECT AVG(gaji) FROM karyawan) AS rata_gaji
FROM karyawan;
-- FROM
SELECT * FROM (
  SELECT nama, gaji FROM karyawan
) AS data_karyawan;
    `,
    catatan: `
Gunakan alias saat subquery berada di FROM agar query tidak error.
    `
  },
  {
    id: 5,
    modulId: 8,
    title: "Correlated Subquery",
    deskripsi: "Subquery yang bergantung pada query utama.",
    penjelasan: `
Correlated subquery adalah jenis subquery yang bergantung pada query utama.
Berbeda dengan subquery biasa yang dieksekusi satu kali, correlated subquery akan dijalankan berulang kali untuk setiap baris dalam query utama.
Jenis ini biasanya digunakan untuk perbandingan yang lebih kompleks, seperti membandingkan data dalam kelompok tertentu.
    `,
    sintaks: `
SELECT kolom
FROM tabel1 t1
WHERE kolom > (
  SELECT AVG(kolom)
  FROM tabel2 t2
  WHERE t1.kolom = t2.kolom
);
    `,
    contoh: `
SELECT * FROM karyawan k1
WHERE gaji > (
  SELECT AVG(gaji)
  FROM karyawan k2
  WHERE k1.departemen = k2.departemen
);
    `,
    catatan: `
Correlated subquery bisa lebih lambat karena dijalankan berulang untuk setiap baris.
    `
  },
  {
    id: 6,
    modulId: 8,
    title: "Perbandingan Subquery vs JOIN",
    deskripsi: "Memahami kapan menggunakan subquery atau JOIN.",
    penjelasan: `
Subquery dan JOIN sama-sama digunakan untuk menggabungkan atau memproses data dari beberapa tabel, tetapi memiliki pendekatan yang berbeda.
Subquery lebih mudah dipahami karena seperti langkah bertahap, sedangkan JOIN lebih efisien untuk performa terutama pada data besar.
JOIN biasanya digunakan ketika kita ingin menggabungkan tabel, sedangkan subquery digunakan untuk filtering atau perhitungan tambahan.
Pemilihan antara subquery dan JOIN tergantung pada kebutuhan dan kompleksitas query.
    `,
    sintaks: `
-- Subquery
SELECT * FROM tabel
WHERE kolom = (subquery);
-- JOIN
SELECT * FROM tabel1
JOIN tabel2 ON kondisi;
    `,
    contoh: `
-- Subquery
SELECT * FROM pesanan
WHERE pelanggan_id IN (
  SELECT id FROM pelanggan
);
-- JOIN
SELECT * FROM pesanan
JOIN pelanggan ON pesanan.pelanggan_id = pelanggan.id;
    `,
    catatan: `
JOIN biasanya lebih cepat, tetapi subquery lebih mudah dipahami untuk pemula.
    `
  },
    {
    id: 61,
    modulId: 9,
    materiId: 1,
    question: "Apa yang dimaksud dengan constraint dalam database?",
    options: [
      "Perintah untuk menghapus data",
      "Aturan untuk menjaga validitas data",
      "Perintah untuk membuat tabel",
      "Perintah untuk mengurutkan data"
    ],
    answer: "Aturan untuk menjaga validitas data"
  },
  {
    id: 62,
    modulId: 9,
    materiId: 1,
    question: "Apa fungsi utama constraint?",
    options: [
      "Menambah data",
      "Menjaga kualitas dan konsistensi data",
      "Menghapus tabel",
      "Mengurutkan data"
    ],
    answer: "Menjaga kualitas dan konsistensi data"
  },
  {
    id: 63,
    modulId: 9,
    materiId: 1,
    question: "Apa yang terjadi jika tidak menggunakan constraint?",
    options: [
      "Data lebih cepat",
      "Data bisa tidak valid",
      "Data otomatis rapi",
      "Tidak ada perubahan"
    ],
    answer: "Data bisa tidak valid"
  },
  {
    id: 64,
    modulId: 9,
    materiId: 1,
    question: "Constraint biasanya diterapkan pada?",
    options: [
      "Database",
      "Tabel",
      "Kolom",
      "Server"
    ],
    answer: "Kolom"
  },
  {
    id: 65,
    modulId: 9,
    materiId: 1,
    question: "Contoh constraint yang mencegah nilai kosong adalah?",
    options: [
      "UNIQUE",
      "PRIMARY KEY",
      "NOT NULL",
      "FOREIGN KEY"
    ],
    answer: "NOT NULL"
  },
   {
    id: 66,
    modulId: 9,
    materiId: 2,
    question: "Constraint UNIQUE digunakan untuk?",
    options: [
      "Menghapus data",
      "Mencegah nilai duplikat",
      "Mengurutkan data",
      "Menambah data"
    ],
    answer: "Mencegah nilai duplikat"
  },
  {
    id: 67,
    modulId: 9,
    materiId: 2,
    question: "PRIMARY KEY adalah gabungan dari?",
    options: [
      "NULL dan UNIQUE",
      "NOT NULL dan UNIQUE",
      "FOREIGN KEY dan CHECK",
      "DEFAULT dan NULL"
    ],
    answer: "NOT NULL dan UNIQUE"
  },
  {
    id: 68,
    modulId: 9,
    materiId: 2,
    question: "FOREIGN KEY digunakan untuk?",
    options: [
      "Menghapus data",
      "Menghubungkan tabel",
      "Mengurutkan data",
      "Menambah kolom"
    ],
    answer: "Menghubungkan tabel"
  },
  {
    id: 69,
    modulId: 9,
    materiId: 2,
    question: "CHECK digunakan untuk?",
    options: [
      "Memastikan nilai sesuai kondisi tertentu",
      "Menghapus data",
      "Menggabungkan tabel",
      "Mengurutkan data"
    ],
    answer: "Memastikan nilai sesuai kondisi tertentu"
  },
  {
    id: 70,
    modulId: 9,
    materiId: 2,
    question: "DEFAULT digunakan untuk?",
    options: [
      "Menghapus nilai",
      "Memberi nilai otomatis",
      "Mengurutkan data",
      "Menggabungkan tabel"
    ],
    answer: "Memberi nilai otomatis"
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
  },
  {
    id: 72,
    modulId: 9,
    materiId: 3,
    question: "Perintah untuk menambah constraint setelah tabel dibuat adalah?",
    options: [
      "UPDATE",
      "INSERT",
      "ALTER TABLE",
      "DELETE"
    ],
    answer: "ALTER TABLE"
  },
  {
    id: 73,
    modulId: 9,
    materiId: 3,
    question: "ALTER TABLE digunakan untuk?",
    options: [
      "Menghapus database",
      "Mengubah struktur tabel",
      "Mengurutkan data",
      "Menghapus data"
    ],
    answer: "Mengubah struktur tabel"
  },
  {
    id: 74,
    modulId: 9,
    materiId: 3,
    question: "Menambahkan UNIQUE constraint menggunakan?",
    options: [
      "ADD COLUMN",
      "ADD CONSTRAINT",
      "DELETE",
      "INSERT"
    ],
    answer: "ADD CONSTRAINT"
  },
  {
    id: 75,
    modulId: 9,
    materiId: 3,
    question: "Menggunakan ALTER TABLE harus?",
    options: [
      "Sembarangan",
      "Hati-hati karena mempengaruhi data",
      "Tidak perlu dipikirkan",
      "Selalu aman"
    ],
    answer: "Hati-hati karena mempengaruhi data"
  },
  {
    id: 76,
    modulId: 9,
    materiId: 4,
    question: "Relasi antar tabel digunakan untuk?",
    options: [
      "Menghapus data",
      "Menghubungkan data antar tabel",
      "Mengurutkan data",
      "Menambah kolom"
    ],
    answer: "Menghubungkan data antar tabel"
  },
  {
    id: 77,
    modulId: 9,
    materiId: 4,
    question: "Constraint yang digunakan untuk relasi adalah?",
    options: [
      "PRIMARY KEY",
      "FOREIGN KEY",
      "UNIQUE",
      "CHECK"
    ],
    answer: "FOREIGN KEY"
  },
  {
    id: 78,
    modulId: 9,
    materiId: 4,
    question: "FOREIGN KEY mengacu pada?",
    options: [
      "Kolom biasa",
      "PRIMARY KEY di tabel lain",
      "CHECK",
      "DEFAULT"
    ],
    answer: "PRIMARY KEY di tabel lain"
  },
  {
    id: 79,
    modulId: 9,
    materiId: 4,
    question: "Tujuan relasi adalah?",
    options: [
      "Menghapus data",
      "Menghindari duplikasi data",
      "Mengurutkan data",
      "Menambah tabel"
    ],
    answer: "Menghindari duplikasi data"
  },
  {
    id: 80,
    modulId: 9,
    materiId: 4,
    question: "Contoh relasi adalah?",
    options: [
      "Produk dan harga",
      "Pesanan dan pelanggan",
      "Nama dan umur",
      "Kolom dan tabel"
    ],
    answer: "Pesanan dan pelanggan"
  },
  {
    id: 81,
    modulId: 9,
    materiId: 5,
    question: "Constraint digunakan untuk validasi data agar?",
    options: [
      "Data lebih banyak",
      "Data tetap valid",
      "Data terhapus",
      "Data lebih lambat"
    ],
    answer: "Data tetap valid"
  },
  {
    id: 82,
    modulId: 9,
    materiId: 5,
    question: "CHECK digunakan untuk?",
    options: [
      "Menghapus data",
      "Membatasi nilai tertentu",
      "Mengurutkan data",
      "Menggabungkan tabel"
    ],
    answer: "Membatasi nilai tertentu"
  },
  {
    id: 83,
    modulId: 9,
    materiId: 5,
    question: "NOT NULL digunakan untuk?",
    options: [
      "Menghapus data",
      "Memastikan kolom tidak kosong",
      "Mengurutkan data",
      "Menambah kolom"
    ],
    answer: "Memastikan kolom tidak kosong"
  },
  {
    id: 84,
    modulId: 9,
    materiId: 5,
    question: "Validasi di database penting karena?",
    options: [
      "Lebih cepat",
      "Tidak bergantung pada aplikasi",
      "Lebih lambat",
      "Tidak berguna"
    ],
    answer: "Tidak bergantung pada aplikasi"
  },
  {
    id: 85,
    modulId: 9,
    materiId: 5,
    question: "Constraint membantu mencegah?",
    options: [
      "Query berjalan",
      "Data tidak valid",
      "Data tampil",
      "Database dibuat"
    ],
    answer: "Data tidak valid"
  } 
];

export default materiData;