// src/data/materi.js

const materiData = [
{
    id: 1,
    modulId: 1,
    title: "Apa itu SQL?",
    deskripsi: "Mengenal definisi dan peran SQL dalam pengelolaan database.",
    penjelasan: `
SQL atau Structured Query Language adalah bahasa standar yang digunakan untuk berinteraksi dengan sistem database relasional. Bayangkan SQL sebagai jembatan komunikasi antara pengguna dan gudang data (database).
SQL memungkinkan kita untuk membuat, membaca, mengubah, dan menghapus data dengan perintah yang strukturnya mirip dengan bahasa Inggris manusia. Hampir semua aplikasi modern, mulai dari media sosial hingga sistem perbankan, menggunakan SQL di balik layarnya.
Memahami SQL adalah langkah awal yang paling krusial bagi siapa saja yang ingin terjun ke dunia Data Science, Web Development, maupun Data Analysis.
    `,
    sintaks: "SQL bukan bahasa pemrograman prosedural, melainkan bahasa deklaratif.",
    contoh: "-- SQL digunakan di MySQL, PostgreSQL, SQL Server, dan Oracle.",
    catatan: "SQL dikembangkan pertama kali oleh IBM pada tahun 1970-an."
  },
  {
    id: 2,
    modulId: 1,
    title: "Database Relasional (RDBMS)",
    deskripsi: "Memahami cara data disimpan dalam bentuk tabel.",
    penjelasan: `
Dalam SQL, data disimpan dalam objek yang disebut 'Tabel'. Tabel terdiri dari baris (records) dan kolom (fields). Sistem yang mengelola tabel-tabel yang saling berhubungan ini disebut RDBMS (Relational Database Management System).
Hubungan antar tabel inilah yang membuat SQL sangat kuat. Misalnya, tabel 'Mahasiswa' bisa terhubung dengan tabel 'Mata_Kuliah' melalui kolom ID yang sama.
Beberapa RDBMS populer yang akan sering kamu temui adalah MySQL, PostgreSQL, SQLite, dan MariaDB.
    `,
    sintaks: `
Baris = Horizontal (Data Spesifik)
Kolom = Vertikal (Kategori Data)
    `,
    contoh: "Tabel Produk: id_produk (kolom), Nama Sabun (baris).",
    catatan: "Setiap tabel biasanya memiliki Primary Key sebagai identitas unik."
  },
  {
    id: 3,
    modulId: 1,
    title: "Kategori Perintah SQL (DDL, DML, DCL)",
    deskripsi: "Mengenal pembagian perintah berdasarkan fungsinya.",
    penjelasan: `
Perintah SQL dibagi menjadi beberapa kelompok utama agar lebih mudah dipelajari:
1. DDL (Data Definition Language): Untuk membangun struktur, seperti membuat atau menghapus tabel.
2. DML (Data Manipulation Language): Untuk mengelola data di dalam tabel, seperti menambah atau mengedit data.
3. DCL & DQL: DQL (Query) khusus untuk mengambil data (SELECT), sedangkan DCL untuk mengatur hak akses.
Memahami pembagian ini membantu kita mengetahui kapan harus menggunakan perintah tertentu.
    `,
    sintaks: `
DDL: CREATE, ALTER, DROP
DML: INSERT, UPDATE, DELETE
DQL: SELECT
    `,
    contoh: "CREATE TABLE mahasiswa (...) termasuk dalam kategori DDL.",
    catatan: "Kebanyakan pemula memulai dengan DQL (SELECT) untuk belajar membaca data."
  },
  {
    id: 4,
    modulId: 1,
    title: "Tipe Data Dasar SQL",
    deskripsi: "Mengenal jenis-jenis data yang bisa disimpan.",
    penjelasan: `
Sebelum memasukkan data, kita harus menentukan jenis data apa yang boleh masuk ke dalam kolom tersebut. Ini penting untuk menjaga validitas data.
Tipe data yang paling umum adalah:
- INT: Untuk angka bulat (seperti umur atau stok).
- VARCHAR: Untuk teks atau karakter (seperti nama atau alamat).
- DECIMAL/FLOAT: Untuk angka pecahan (seperti harga atau berat).
- DATE: Untuk informasi tanggal.
Pemilihan tipe data yang tepat akan membuat database lebih efisien dan cepat.
    `,
    sintaks: `
NAMA_KOLOM TIPE_DATA(UKURAN)
    `,
    contoh: `
nama_produk VARCHAR(100)
harga_barang INT
tanggal_masuk DATE
    `,
    catatan: "VARCHAR lebih hemat ruang dibanding CHAR karena ukurannya dinamis."
  },
  {
    id: 5,
    modulId: 1,
    title: "Membuat Tabel (CREATE TABLE)",
    deskripsi: "Langkah pertama membangun struktur database.",
    penjelasan: `
Perintah CREATE TABLE digunakan untuk membuat tabel baru di dalam database. Dalam perintah ini, kita mendefinisikan nama tabel, nama kolom, tipe data, serta batasan (constraints) jika ada.
Batasan seperti 'NOT NULL' memastikan bahwa kolom tersebut tidak boleh dikosongkan, sedangkan 'PRIMARY KEY' memastikan setiap baris memiliki identitas unik.
    `,
    sintaks: `
CREATE TABLE nama_tabel (
    kolom1 tipe_data,
    kolom2 tipe_data
);
    `,
    contoh: `
CREATE TABLE pengguna (
    id INT PRIMARY KEY,
    username VARCHAR(50),
    email VARCHAR(100)
);
    `,
    catatan: "Gunakan nama tabel yang deskriptif dan hindari penggunaan spasi."
  },
  {
    id: 6,
    modulId: 1,
    title: "Memasukkan Data (INSERT INTO)",
    deskripsi: "Cara mengisi tabel dengan data mentah.",
    penjelasan: `
Setelah tabel dibuat, kita menggunakan perintah INSERT INTO untuk mengisi data ke dalamnya. Kita bisa memasukkan data ke semua kolom sekaligus atau ke kolom tertentu saja.
Penting untuk memastikan urutan nilai (VALUES) sesuai dengan urutan kolom yang kita definisikan. Jika tipe datanya teks (VARCHAR), nilai tersebut wajib dibungkus dengan tanda petik tunggal (').
    `,
    sintaks: `
INSERT INTO nama_tabel (kolom1, kolom2)
VALUES (nilai1, nilai2);
    `,
    contoh: `
INSERT INTO pengguna (id, username, email)
VALUES (1, 'hizkia_cs', 'hizkia@mail.com');
    `,
    catatan: "Data angka tidak perlu menggunakan tanda petik."
  },
  {
    id: 7,
    modulId: 1,
    title: "Mengambil Data (SELECT Dasar)",
    deskripsi: "Perintah paling populer untuk menampilkan data.",
    penjelasan: `
SELECT adalah perintah yang paling sering digunakan dalam SQL. Perintah ini digunakan untuk menarik atau menampilkan data dari database agar bisa kita lihat hasilnya.
Simbol bintang (*) digunakan jika kita ingin mengambil seluruh kolom yang ada dalam tabel. Namun, sangat disarankan untuk menyebutkan nama kolom secara spesifik jika datanya sangat besar demi efisiensi performa.
    `,
    sintaks: `
SELECT kolom1, kolom2 FROM nama_tabel;
-- Atau untuk semua kolom:
SELECT * FROM nama_tabel;
    `,
    contoh: `
SELECT nama_produk, harga FROM produk;
    `,
    catatan: "SELECT tidak mengubah data di database, hanya menampilkan saja."
  },
  {
    id: 8,
    modulId: 1,
    title: "Menghapus Data & Tabel (DELETE & DROP)",
    deskripsi: "Membersihkan data atau struktur yang tidak diperlukan.",
    penjelasan: `
DELETE digunakan untuk menghapus baris data di dalam tabel. Biasanya digunakan bersama perintah WHERE agar tidak semua data terhapus.
Sedangkan DROP TABLE digunakan untuk menghapus seluruh tabel beserta strukturnya. Hati-hati, perintah DROP tidak bisa dibatalkan (undo), sehingga semua data di dalam tabel tersebut akan hilang selamanya.
    `,
    sintaks: `
DELETE FROM nama_tabel WHERE kondisi;
DROP TABLE nama_tabel;
    `,
    contoh: `
DELETE FROM pengguna WHERE id = 1;
DROP TABLE pengguna;
    `,
    catatan: "Selalu gunakan WHERE saat melakukan DELETE untuk menghindari kehilangan seluruh data."
  },
  {
    id: 1,
    modulId: 2,
    title: "Pengenalan DDL",
    deskripsi: "Memahami peran DDL dalam membangun struktur database.",
    penjelasan: `
Data Definition Language (DDL) adalah sub-bahasa SQL yang digunakan khusus untuk mendefinisikan, mengubah, atau menghapus struktur objek database. Objek ini bisa berupa database itu sendiri, tabel, indeks, atau view.
Jika DML (Data Manipulation Language) bekerja dengan isi (data) di dalam tabel, maka DDL bekerja dengan wadahnya (struktur). Perintah DDL bersifat permanen; sekali dijalankan (COMMIT), strukturnya akan langsung berubah.
    `,
    sintaks: "CREATE, ALTER, DROP, TRUNCATE",
    contoh: "Membangun tabel baru 'karyawan' menggunakan perintah CREATE.",
    catatan: "Perintah DDL biasanya dilakukan oleh Database Administrator atau Backend Developer di awal proyek."
  },
  {
    id: 2,
    modulId: 2,
    title: "CREATE DATABASE",
    deskripsi: "Langkah awal membuat wadah utama data.",
    penjelasan: `
Sebelum membuat tabel, kita harus membuat Database-nya terlebih dahulu. Database adalah kontainer besar yang akan menampung banyak tabel yang saling berhubungan.
Setiap proyek aplikasi biasanya memiliki satu database khusus agar datanya tidak bercampur dengan proyek lain.
    `,
    sintaks: "CREATE DATABASE nama_database;",
    contoh: "CREATE DATABASE querylab_db;",
    catatan: "Pastikan nama database tidak menggunakan spasi, gunakan underscore (_) sebagai pemisah."
  },
  {
    id: 3,
    modulId: 2,
    title: "CREATE TABLE & Constraints",
    deskripsi: "Membangun tabel dengan aturan yang ketat.",
    penjelasan: `
Saat membuat tabel, kita tidak hanya menentukan nama kolom, tapi juga 'Constraints' (batasan). Constraints berfungsi untuk menjaga integritas data agar tidak ada data sampah yang masuk.
Beberapa constraint penting:
- NOT NULL: Kolom tidak boleh kosong.
- UNIQUE: Nilai dalam kolom tidak boleh kembar.
- DEFAULT: Memberikan nilai otomatis jika user tidak mengisi kolom tersebut.
    `,
    sintaks: `
CREATE TABLE nama_tabel (
    id INT PRIMARY KEY,
    nama VARCHAR(100) NOT NULL,
    status VARCHAR(20) DEFAULT 'Aktif'
);
    `,
    contoh: "CREATE TABLE produk (id_produk INT PRIMARY KEY, nama_produk VARCHAR(50) NOT NULL);",
    catatan: "PRIMARY KEY adalah gabungan dari UNIQUE dan NOT NULL secara otomatis."
  },
  {
    id: 4,
    modulId: 2,
    title: "ALTER TABLE: Menambah Kolom",
    deskripsi: "Mengubah struktur tabel yang sudah ada.",
    penjelasan: `
Seringkali setelah tabel jadi, kita baru menyadari ada kolom yang kurang. Perintah ALTER TABLE memungkinkan kita menambah kolom baru tanpa harus menghapus dan membuat ulang tabel tersebut.
Ini sangat berguna untuk aplikasi yang sudah berjalan agar data lama tidak hilang.
    `,
    sintaks: "ALTER TABLE nama_tabel ADD nama_kolom tipe_data;",
    contoh: "ALTER TABLE karyawan ADD alamat VARCHAR(255);",
    catatan: "Kolom baru yang ditambahkan biasanya akan berisi nilai NULL untuk baris data yang sudah ada."
  },
  {
    id: 5,
    modulId: 2,
    title: "ALTER TABLE: Mengubah Tipe Data",
    deskripsi: "Menyesuaikan kapasitas atau jenis data kolom.",
    penjelasan: `
Jika awalnya kamu menentukan VARCHAR(50) tapi ternyata nama pengguna ada yang lebih panjang, kamu bisa mengubah ukurannya menggunakan ALTER TABLE.
Kamu juga bisa mengubah tipe data dari INT ke BIGINT jika jumlah data mulai membengkak.
    `,
    sintaks: "ALTER TABLE nama_tabel MODIFY COLUMN nama_kolom tipe_data_baru;",
    contoh: "ALTER TABLE produk MODIFY COLUMN harga DECIMAL(10,2);",
    catatan: "Hati-hati saat mengubah tipe data jika tabel sudah berisi data, karena bisa terjadi error jika data lama tidak kompatibel."
  },
  {
    id: 6,
    modulId: 2,
    title: "ALTER TABLE: Menghapus Kolom",
    deskripsi: "Membuang bagian tabel yang tidak diperlukan lagi.",
    penjelasan: `
Jika ada kolom yang sudah tidak relevan atau tidak digunakan lagi, sebaiknya dihapus untuk menghemat ruang penyimpanan dan merapikan struktur database.
    `,
    sintaks: "ALTER TABLE nama_tabel DROP COLUMN nama_kolom;",
    contoh: "ALTER TABLE karyawan DROP COLUMN hobi;",
    catatan: "Kolom yang sudah dihapus tidak bisa dikembalikan beserta isinya, jadi pastikan datanya memang sudah tidak butuh."
  },
  {
    id: 7,
    modulId: 2,
    title: "RENAME TABLE",
    deskripsi: "Mengganti nama tabel agar lebih deskriptif.",
    penjelasan: `
Seiring berkembangnya aplikasi, terkadang nama tabel yang lama terasa kurang cocok. Kita bisa mengganti nama tabel ke nama baru tanpa merusak struktur di dalamnya.
    `,
    sintaks: "ALTER TABLE nama_lama RENAME TO nama_baru;",
    contoh: "ALTER TABLE users RENAME TO anggota;",
    catatan: "Ingat untuk memperbarui kode program (codingan) kamu setelah mengubah nama tabel agar tidak error."
  },
  {
    id: 8,
    modulId: 2,
    title: "TRUNCATE TABLE",
    deskripsi: "Mengosongkan isi tabel secara instan.",
    penjelasan: `
TRUNCATE digunakan untuk menghapus semua baris data di dalam tabel secara permanen, namun strukturnya tetap ada.
Bedanya dengan DELETE tanpa WHERE adalah TRUNCATE jauh lebih cepat dan akan mereset hitungan AUTO_INCREMENT kembali ke 1.
    `,
    sintaks: "TRUNCATE TABLE nama_tabel;",
    contoh: "TRUNCATE TABLE log_aktivitas;",
    catatan: "TRUNCATE tidak bisa dibatalkan (Rollback), gunakan dengan sangat hati-hati."
  },
  {
    id: 9,
    modulId: 2,
    title: "DROP TABLE",
    deskripsi: "Menghapus tabel secara total.",
    penjelasan: `
Jika TRUNCATE hanya membuang isinya, DROP TABLE akan menghapus isi DAN wadahnya (tabelnya hilang dari database). Perintah ini digunakan jika tabel tersebut benar-benar sudah tidak dibutuhkan lagi.
    `,
    sintaks: "DROP TABLE nama_tabel;",
    contoh: "DROP TABLE tabel_percobaan;",
    catatan: "Selalu backup data sebelum melakukan DROP di database produksi."
  },
  {
    id: 10,
    modulId: 2,
    title: "Konsep Indexing (CREATE INDEX)",
    deskripsi: "Meningkatkan kecepatan pencarian data.",
    penjelasan: `
DDL juga mencakup pembuatan 'Index'. Index ibarat daftar isi di sebuah buku. Tanpa index, database harus mencari baris demi baris (slow). Dengan index, pencarian data menjadi sangat cepat.
Index biasanya dibuat pada kolom yang paling sering muncul di klausa WHERE (seperti email atau username).
    `,
    sintaks: "CREATE INDEX nama_index ON nama_tabel(kolom);",
    contoh: "CREATE INDEX idx_email ON pengguna(email);",
    catatan: "Terlalu banyak index bisa memperlambat proses INSERT dan UPDATE, gunakan secukupnya."
  },
  {
    id: 1,
    modulId: 3,
    title: "Filosofi Data Manipulation Language (DML)",
    deskripsi: "Memahami esensi manipulasi data dalam siklus hidup aplikasi.",
    penjelasan: `
Data Manipulation Language atau DML adalah jantung dari interaksi pengguna dengan database. Jika struktur tabel sudah siap (lewat DDL), maka DML bertugas untuk menghidupkan tabel tersebut dengan data. 
DML mencakup semua aktivitas operasional harian: mulai dari mendaftarkan pengguna baru, memperbarui profil, hingga menghapus postingan yang tidak diinginkan. 
Berbeda dengan DDL yang mengubah 'kerangka', DML hanya mengubah 'isi'. Di industri, perintah DML adalah yang paling sering dijalankan oleh aplikasi setiap detiknya, seperti saat seseorang menekan tombol 'Simpan' atau 'Edit' di smartphone mereka.
    `,
    sintaks: "INSERT, UPDATE, DELETE, SELECT (Sering dikategorikan sebagai DQL)",
    contoh: "Menambahkan data transaksi baru ke dalam tabel penjualan.",
    catatan: "Perintah DML dapat dibatalkan (Rollback) sebelum dilakukan permanen (Commit) pada beberapa sistem database."
  },
  {
    id: 2,
    modulId: 3,
    title: "INSERT INTO: Menambah Data Baru",
    deskripsi: "Cara dasar memasukkan catatan ke dalam tabel.",
    penjelasan: `
Perintah INSERT INTO adalah langkah pertama untuk mengisi tabel yang kosong. Saat menggunakan perintah ini, kita harus sangat memperhatikan tipe data yang sudah ditentukan di struktur tabel. 
Misalnya, jika kolom 'umur' bertipe INT, jangan memasukkan teks. Jika kolom 'nama' bertipe VARCHAR, pastikan dibungkus dengan kutip tunggal ('). 
Kita bisa memasukkan data dengan menyebutkan nama kolomnya secara spesifik (lebih aman) atau langsung memasukkan nilainya jika kita mengisi semua kolom sesuai urutan aslinya.
    `,
    sintaks: `
INSERT INTO nama_tabel (kolom1, kolom2, ...) 
VALUES (nilai1, nilai2, ...);
    `,
    contoh: "INSERT INTO mahasiswa (id, nama, jurusan) VALUES (1, 'Hizkia', 'Informatika');",
    catatan: "Gunakan koma untuk memisahkan antar kolom dan antar nilai."
  },
  {
    id: 3,
    modulId: 3,
    title: "INSERT Multi-Row: Efisiensi Input",
    deskripsi: "Memasukkan banyak baris data dalam satu perintah sekaligus.",
    penjelasan: `
Dalam pengembangan aplikasi, seringkali kita perlu memasukkan banyak data sekaligus, misalnya saat migrasi data atau mengimpor daftar produk. 
Alih-alih menjalankan perintah INSERT satu per satu (yang akan memperlambat database karena banyak koneksi terbuka-tutup), kita bisa menggunakan teknik Multi-Row INSERT. 
Caranya adalah dengan memisahkan setiap grup nilai dengan tanda koma di dalam satu perintah VALUES. Ini jauh lebih efisien dan cepat bagi performa server.
    `,
    sintaks: `
INSERT INTO nama_tabel (kolom1, kolom2) 
VALUES 
(nilai_a1, nilai_a2), 
(nilai_b1, nilai_b2),
(nilai_c1, nilai_c2);
    `,
    contoh: "INSERT INTO kategori (nama) VALUES ('Elektronik'), ('Pakaian'), ('Makanan');",
    catatan: "Teknik ini sangat disarankan untuk pengisian data dalam jumlah besar (bulk insert)."
  },
  {
    id: 4,
    modulId: 3,
    title: "UPDATE: Mengubah Data yang Ada",
    deskripsi: "Memperbarui informasi pada baris data tertentu.",
    penjelasan: `
Perintah UPDATE digunakan ketika ada informasi yang berubah, seperti pengguna yang ingin mengganti password, mengubah alamat, atau admin yang ingin memperbarui stok barang. 
UPDATE bekerja dengan mencari baris yang dimaksud, lalu menimpa nilai lama dengan nilai yang baru. 
Kita bisa memperbarui satu kolom saja atau banyak kolom sekaligus dalam satu waktu. Namun, perintah ini sangat berbahaya jika digunakan tanpa filter yang tepat.
    `,
    sintaks: `
UPDATE nama_tabel 
SET kolom1 = nilai_baru1, kolom2 = nilai_baru2 
WHERE kondisi;
    `,
    contoh: "UPDATE produk SET harga = 20000, stok = 50 WHERE id_produk = 101;",
    catatan: "Pastikan kolom yang di-update memiliki tipe data yang sesuai dengan nilai baru."
  },
  {
    id: 5,
    modulId: 3,
    title: "Bahaya UPDATE Tanpa WHERE",
    deskripsi: "Memahami risiko besar dalam manipulasi data massal.",
    penjelasan: `
Ini adalah 'mimpi buruk' setiap pengembang database. Jika kamu menjalankan perintah UPDATE tanpa menyertakan klausa WHERE, maka SQL akan menganggap kamu ingin mengubah **SELURUH** baris di tabel tersebut menjadi nilai yang sama. 
Bayangkan jika kamu ingin mengubah alamat satu user, tapi lupa pakai WHERE; maka seluruh user di database kamu akan memiliki alamat yang sama. 
Selalu lakukan pengecekan ganda (double-check) sebelum menekan enter pada perintah UPDATE di server produksi.
    `,
    sintaks: "UPDATE nama_tabel SET nama_kolom = nilai; -- BERBAHAYA!",
    contoh: "UPDATE karyawan SET gaji = 10000000; -- Semua karyawan gajinya jadi 10 juta!",
    catatan: "Tips: Biasakan tulis SELECT dulu dengan WHERE yang sama untuk memastikan baris mana yang akan berubah."
  },
  {
    id: 6,
    modulId: 3,
    title: "DELETE: Menghapus Data",
    deskripsi: "Menghilangkan baris data dari tabel secara permanen.",
    penjelasan: `
Perintah DELETE digunakan untuk membuang data yang sudah tidak valid atau tidak diperlukan lagi, seperti menghapus akun yang sudah dinonaktifkan atau membuang item dari keranjang belanja. 
Sama seperti UPDATE, DELETE bekerja berdasarkan kondisi yang kita berikan lewat WHERE. Data yang dihapus dengan perintah DELETE akan hilang dari tabel, namun strukturnya tetap utuh. 
Berbeda dengan DROP (menghapus tabel), DELETE hanya membersihkan baris di dalamnya.
    `,
    sintaks: "DELETE FROM nama_tabel WHERE kondisi;",
    contoh: "DELETE FROM anggota WHERE status = 'Tidak Aktif';",
    catatan: "Data yang dihapus dengan DELETE biasanya tetap memakan ruang penyimpanan hingga database melakukan 'vacuum' atau optimasi."
  },
  {
    id: 7,
    modulId: 3,
    title: "DELETE vs TRUNCATE",
    deskripsi: "Perbedaan mendasar antara menghapus baris dan mengosongkan tabel.",
    penjelasan: `
Banyak pemula bingung antara DELETE dan TRUNCATE. 
DELETE adalah perintah DML yang menghapus baris satu per satu dan mencatat setiap penghapusan di log database (sehingga bisa di-rollback). 
Sedangkan TRUNCATE adalah perintah DDL yang 'memotong' tabel dan mengosongkannya seketika tanpa mengecek baris satu per satu. 
TRUNCATE jauh lebih cepat, tapi tidak bisa digunakan jika kamu hanya ingin menghapus beberapa baris saja. TRUNCATE juga akan mereset ID otomatis (Auto Increment) ke angka 1 lagi.
    `,
    sintaks: `
DELETE FROM tabel; -- Lambat, log lengkap.
TRUNCATE TABLE tabel; -- Cepat, reset ID.
    `,
    contoh: "Gunakan TRUNCATE untuk membersihkan tabel log yang sudah mencapai jutaan baris.",
    catatan: "Gunakan DELETE jika kamu masih membutuhkan data tersebut di fitur 'Undo' atau 'Recycle Bin' aplikasi."
  },
  {
    id: 8,
    modulId: 3,
    title: "Klausa WHERE: Filter Presisi",
    deskripsi: "Kunci utama keamanan dan ketepatan manipulasi data.",
    penjelasan: `
Klausa WHERE adalah 'penjaga gerbang' dalam DML. Tanpa WHERE, perintah kita akan membabi buta. 
WHERE memungkinkan kita menggunakan operator perbandingan seperti:
- '=' (sama dengan)
- '!=' atau '<>' (tidak sama dengan)
- '>' atau '<' (lebih besar/kecil)
- 'LIKE' (pencarian teks sebagian)
Dengan WHERE, kita memastikan bahwa hanya baris yang memenuhi kriteria spesifik saja yang akan dimanipulasi.
    `,
    sintaks: "WHERE nama_kolom operator nilai;",
    contoh: "WHERE stok < 10 OR status = 'Diskon';",
    catatan: "WHERE juga bisa menggabungkan banyak kondisi menggunakan AND, OR, dan NOT."
  },
  {
    id: 9,
    modulId: 3,
    title: "Pencarian Pola dengan LIKE",
    deskripsi: "Mencari data teks yang tidak persis sama.",
    penjelasan: `
Terkadang kita tidak tahu nilai pastinya. Misalnya, mencari nama pelanggan yang diawali huruf 'H'. Di sinilah fungsi LIKE digunakan. 
LIKE menggunakan simbol wildcard:
- '%' : Mewakili banyak karakter apa saja.
- '_' : Mewakili satu karakter apa saja.
Ini sangat berguna untuk fitur pencarian (search bar) di aplikasi web atau mobile kamu.
    `,
    sintaks: "SELECT * FROM tabel WHERE kolom LIKE 'pola%';",
    contoh: "LIKE '%Siahaan%' akan menemukan semua data yang mengandung kata 'Siahaan' di posisi mana pun.",
    catatan: "Pencarian dengan LIKE '%' di awal kata biasanya lebih lambat bagi database."
  },
  {
    id: 10,
    modulId: 3,
    title: "Mengelola Nilai NULL",
    deskripsi: "Cara menangani data yang kosong atau belum terisi.",
    penjelasan: `
NULL bukan berarti nol (0) atau spasi kosong. NULL berarti 'tidak ada data' atau 'nilainya belum diketahui'. 
Dalam DML, kita tidak bisa menggunakan '=' untuk mengecek NULL. Kita harus menggunakan operator khusus yaitu 'IS NULL' atau 'IS NOT NULL'. 
Menangani NULL dengan benar sangat penting agar perhitungan atau tampilan aplikasi kamu tidak error (crash).
    `,
    sintaks: "WHERE nama_kolom IS NULL;",
    contoh: "SELECT * FROM karyawan WHERE nomor_telepon IS NULL;",
    catatan: "Hati-hati, operasi matematika apa pun yang melibatkan NULL (misal: 10 + NULL) hasilnya akan selalu NULL."
  },
  {
    id: 11,
    modulId: 3,
    title: "Subquery dalam DML",
    deskripsi: "Menggunakan hasil query lain untuk melakukan manipulasi data.",
    penjelasan: `
Kadang kita ingin meng-update atau menghapus data berdasarkan kondisi dari tabel lain. Di sinilah Subquery berperan. 
Subquery adalah 'query di dalam query'. 
Misalnya: 'Hapus semua produk yang kategorinya adalah Elektronik'. Kita cari dulu ID kategori Elektronik di tabel kategori, lalu gunakan hasilnya untuk menghapus produk di tabel produk.
    `,
    sintaks: "DELETE FROM tabel WHERE kolom IN (SELECT kolom FROM tabel_lain);",
    contoh: "UPDATE siswa SET status = 'Lulus' WHERE id IN (SELECT id_siswa FROM nilai WHERE rata_rata > 75);",
    catatan: "Gunakan Subquery dengan bijak karena bisa memperlambat proses jika data tabel sangat besar."
  },
  {
    id: 12,
    modulId: 3,
    title: "Integritas Referensial (Foreign Key)",
    deskripsi: "Hubungan antar tabel saat melakukan DML.",
    penjelasan: `
DML tidak bekerja di ruang hampa. Karena database bersifat Relasional, ada aturan 'Foreign Key'. 
Kamu tidak bisa menghapus data di tabel 'Induk' jika datanya masih digunakan di tabel 'Anak'. 
Misalnya, kamu tidak bisa menghapus 'ID Jurusan Informatika' jika masih ada mahasiswa yang terdaftar di jurusan tersebut. Ini disebut Integritas Referensial, yang menjaga agar database kamu tidak memiliki data 'yatim piatu' (orphan data).
    `,
    sintaks: "ON DELETE CASCADE / ON UPDATE CASCADE",
    contoh: "Jika Jurusan dihapus, maka semua mahasiswa di dalamnya otomatis ikut terhapus (Cascade).",
    catatan: "Pahami skema database kamu sebelum melakukan DELETE massal agar tidak terkena error constraint."
  },
  {
    id: 1,
    modulId: 4,
    title: "Filosofi Data Query Language (DQL)",
    deskripsi: "Memahami mengapa SELECT adalah perintah paling krusial dalam SQL.",
    penjelasan: `
Data Query Language atau DQL adalah bagian dari SQL yang fokus pada pengambilan data. Perintah utamanya hanya satu, yaitu SELECT, namun kekuatannya tidak terbatas. 
Di dunia nyata, data bisa berjumlah jutaan baris. Tidak mungkin kita melihat semuanya secara manual. DQL hadir sebagai alat penyaring yang cerdas. 
Filosofi DQL adalah 'Ask and Receive' (Tanya dan Terima). Kamu bertanya kepada database menggunakan logika tertentu, dan database akan memberikan jawaban dalam bentuk kumpulan data (Result Set). 
DQL tidak mengubah data sedikit pun di dalam tabel; ia hanya membaca dan menampilkannya sesuai keinginan kita. Inilah yang membuat DQL menjadi perintah yang paling aman sekaligus paling sering digunakan oleh Data Analyst dan Business Intelligence.
    `,
    sintaks: "SELECT kolom1, kolom2 FROM nama_tabel;",
    contoh: "Menampilkan daftar nama pelanggan yang melakukan transaksi hari ini.",
    catatan: "Hasil dari perintah SELECT bersifat sementara dan hanya ada di memori layar (Result Set)."
  },
  {
    id: 2,
    modulId: 4,
    title: "Anotasi SELECT * (The Wildcard)",
    deskripsi: "Mengambil seluruh informasi tanpa terkecuali.",
    penjelasan: `
Simbol bintang (*) dalam SQL dikenal sebagai 'Wildcard'. Saat kamu menulis SELECT *, kamu sedang memerintahkan database untuk menarik seluruh kolom yang ada di dalam tabel tersebut. 
Ini sangat berguna saat tahap eksplorasi data, di mana kamu belum tahu pasti kolom mana saja yang isinya penting. 
Namun, bagi seorang LabMaster, penggunaan bintang (*) di dalam aplikasi nyata harus dikurangi. Kenapa? Karena menarik semua kolom (termasuk yang tidak dibutuhkan) akan membebani memori server dan memperlambat kecepatan akses data, terutama jika tabel tersebut memiliki puluhan kolom dengan jutaan baris.
    `,
    sintaks: "SELECT * FROM nama_tabel;",
    contoh: "SELECT * FROM produk; -- Menampilkan semua detail produk.",
    catatan: "Gunakan SELECT * hanya untuk pengecekan cepat, bukan untuk kode program utama."
  },
  {
    id: 3,
    modulId: 4,
    title: "Proyeksi Kolom Spesifik",
    deskripsi: "Mengambil hanya data yang benar-benar dibutuhkan.",
    penjelasan: `
Proyeksi adalah teknik memilih kolom tertentu saja dalam sebuah query. Dengan menyebutkan nama kolom satu per satu setelah kata SELECT, kita membuat query yang jauh lebih efisien dan rapi. 
Misalnya, dari tabel 'Karyawan' yang punya 20 kolom (termasuk alamat, golongan darah, dll), kamu mungkin hanya butuh 'nama' dan 'jabatan' saja untuk laporan bulanan. 
Teknik ini memastikan bandwidth jaringan tidak terbuang sia-sia dan tampilan data menjadi lebih fokus pada informasi yang relevan. Ini adalah standar profesional dalam penulisan query.
    `,
    sintaks: "SELECT kolom_a, kolom_b, kolom_c FROM nama_tabel;",
    contoh: "SELECT nama_produk, harga FROM produk;",
    catatan: "Urutan nama kolom yang kamu tulis di SELECT akan menentukan urutan kolom yang muncul di hasil query."
  },
  {
    id: 4,
    modulId: 4,
    title: "Memberikan Nama Alias (AS)",
    deskripsi: "Mempercantik judul kolom pada hasil laporan.",
    penjelasan: `
Terkadang, nama kolom di database sangat teknis atau singkat, seperti 'tgl_lhr' atau 'hrg_jual_akhir'. Saat hasil query ditampilkan ke user atau atasan, nama-nama tersebut sulit dimengerti. 
Kata kunci 'AS' (Alias) memungkinkan kita memberikan 'nama samaran' sementara untuk kolom tersebut agar lebih mudah dibaca di hasil akhir. 
Alias juga sangat penting saat kita melakukan perhitungan matematika dalam SQL agar kolom hasilnya punya judul yang jelas.
    `,
    sintaks: "SELECT nama_kolom AS nama_baru FROM tabel;",
    contoh: "SELECT hrg_jual AS harga_ritel, stok_brg AS sisa_stok FROM gudang;",
    catatan: "Jika nama alias mengandung spasi, gunakan tanda petik ganda, misal: AS 'Harga Barang'."
  },
  {
    id: 5,
    modulId: 4,
    title: "Eliminasi Duplikasi dengan DISTINCT",
    deskripsi: "Menampilkan nilai unik dari sebuah kolom.",
    penjelasan: `
Dalam tabel database, nilai yang sama seringkali muncul berulang kali. Contohnya, dalam tabel 'Transaksi', nama kota 'Jakarta' mungkin muncul ribuan kali. 
Jika kamu hanya ingin tahu 'Kota mana saja yang sudah pernah melakukan transaksi?', maka perintah SELECT biasa akan menampilkan ribuan baris 'Jakarta'. 
Gunakan DISTINCT untuk menyaring hasil tersebut sehingga nilai yang kembar hanya ditampilkan satu kali saja. Ini sangat berguna untuk melihat kategori unik atau daftar wilayah tanpa pengulangan.
    `,
    sintaks: "SELECT DISTINCT nama_kolom FROM tabel;",
    contoh: "SELECT DISTINCT kategori FROM produk; -- Melihat daftar kategori yang tersedia.",
    catatan: "DISTINCT berlaku untuk semua kolom yang dipilih. Jika memilih dua kolom, maka kombinasi keduanya harus unik."
  },
  {
    id: 6,
    modulId: 4,
    title: "Filter Baris dengan WHERE",
    deskripsi: "Teknik menyaring data berdasarkan kondisi tertentu.",
    penjelasan: `
Tanpa filter, SELECT akan mengembalikan seluruh baris data. Klausa WHERE bertugas sebagai filter yang membatasi data mana saja yang berhak muncul di hasil akhir. 
Kamu bisa menggunakan operator perbandingan seperti '=' (sama dengan), '>' (lebih besar), atau '<' (lebih kecil). 
Filter ini sangat krusial. Bayangkan di dashboard e-commerce, user hanya ingin melihat produk dengan harga di bawah 50 ribu. WHERE inilah yang melakukan pekerjaan berat di balik layar untuk memisahkan data yang relevan dengan keinginan user.
    `,
    sintaks: "SELECT * FROM tabel WHERE kondisi;",
    contoh: "SELECT * FROM buku WHERE harga > 100000;",
    catatan: "SQL bersifat case-insensitive untuk perintah, tapi datanya (isi tabel) bisa bersifat case-sensitive tergantung pengaturan database."
  },
  {
    id: 7,
    modulId: 4,
    title: "Logika Majemuk: AND, OR, NOT",
    deskripsi: "Menggabungkan beberapa kriteria filter dalam satu query.",
    penjelasan: `
Seringkali satu filter saja tidak cukup. Kamu mungkin ingin mencari produk yang 'Harganya di bawah 100 ribu' DAN 'Kategorinya adalah Buku'. 
Di sinilah operator logika berperan:
- AND: Semua kondisi harus terpenuhi agar data muncul.
- OR: Cukup salah satu kondisi terpenuhi, data akan muncul.
- NOT: Menampilkan data yang tidak memenuhi kriteria tersebut.
Dengan menggabungkan operator ini, para Queryan bisa membuat filter yang sangat spesifik dan akurat sesuai kebutuhan bisnis yang kompleks.
    `,
    sintaks: "SELECT * FROM tabel WHERE kondisi1 AND kondisi2 OR kondisi3;",
    contoh: "SELECT * FROM karyawan WHERE departemen = 'IT' AND gaji > 5000000;",
    catatan: "Gunakan tanda kurung () jika kamu mencampur AND dan OR untuk menghindari kesalahan logika urutan."
  },
  {
    id: 8,
    modulId: 4,
    title: "Filter Jangkauan dengan BETWEEN",
    deskripsi: "Cara mudah memfilter data dalam rentang nilai tertentu.",
    penjelasan: `
Jika kamu ingin mencari data di antara dua nilai, misalnya harga antara 10.000 sampai 50.000, kamu bisa menggunakan 'harga >= 10000 AND harga <= 50000'. 
Namun, SQL menyediakan cara yang lebih manusiawi dan bersih dengan kata kunci 'BETWEEN'. 
BETWEEN mencakup nilai batas awal dan batas akhirnya (inclusive). Ini tidak hanya berlaku untuk angka, tapi juga sangat sering digunakan untuk memfilter rentang tanggal, seperti laporan penjualan dari tanggal 1 sampai tanggal 31.
    `,
    sintaks: "SELECT * FROM tabel WHERE kolom BETWEEN nilai1 AND nilai2;",
    contoh: "SELECT * FROM pesanan WHERE tgl_pesan BETWEEN '2024-01-01' AND '2024-01-31';",
    catatan: "Pastikan urutan nilai setelah BETWEEN dimulai dari yang terkecil ke yang terbesar."
  },
  {
    id: 9,
    modulId: 4,
    title: "Filter Daftar dengan IN",
    deskripsi: "Memeriksa kecocokan data dengan sekumpulan nilai.",
    penjelasan: `
Bayangkan kamu ingin menampilkan produk dari kategori 'Sabun', 'Sampo', dan 'Pasta Gigi'. Menulis WHERE dengan banyak 'OR' akan membuat query kamu sangat panjang dan berantakan. 
Operator 'IN' memungkinkan kamu untuk menuliskan daftar nilai di dalam tanda kurung secara lebih ringkas. 
SQL akan mengecek apakah nilai pada kolom tersebut ada di dalam daftar yang kamu berikan. Ini membuat kode query kamu jauh lebih mudah dibaca (clean code) dan mudah dikelola.
    `,
    sintaks: "SELECT * FROM tabel WHERE kolom IN (nilai1, nilai2, ...);",
    contoh: "SELECT * FROM mahasiswa WHERE jurusan IN ('Informatika', 'Sistem Informasi', 'Teknik Komputer');",
    catatan: "Operator IN juga bisa digunakan dengan Subquery (query di dalam query)."
  },
  {
    id: 10,
    modulId: 4,
    title: "Pengurutan Data dengan ORDER BY",
    deskripsi: "Mengatur tampilan data agar berurutan secara sistematis.",
    penjelasan: `
Secara default, database menampilkan data sesuai urutan input (yang seringkali acak). Agar data enak dibaca, kita butuh ORDER BY. 
Ada dua jenis pengurutan:
- ASC (Ascending): Dari kecil ke besar (A ke Z, 1 ke 10, tanggal lama ke baru). Ini adalah default-nya.
- DESC (Descending): Dari besar ke kecil (Z ke A, 10 ke 1, tanggal terbaru ke lama).
Pengurutan sangat penting dalam fitur seperti 'Urutkan Harga Termurah' atau 'Lihat Postingan Terbaru' di aplikasi.
    `,
    sintaks: "SELECT * FROM tabel ORDER BY nama_kolom ASC|DESC;",
    contoh: "SELECT * FROM produk ORDER BY harga DESC; -- Harga paling mahal di atas.",
    catatan: "Kamu bisa mengurutkan berdasarkan lebih dari satu kolom, misalnya urut berdasarkan departemen, lalu urut berdasarkan nama."
  },
  {
    id: 11,
    modulId: 4,
    title: "Pembatasan Hasil dengan LIMIT",
    deskripsi: "Mengambil hanya beberapa baris teratas saja.",
    penjelasan: `
Jika tabelmu punya 1 juta baris, tapi kamu hanya ingin menampilkan '5 Produk Terpopuler', tidak perlu menarik semua data. Gunakan LIMIT. 
LIMIT memerintahkan SQL untuk berhenti mengambil data setelah mencapai jumlah baris yang ditentukan. 
Ini menghemat sumber daya server secara signifikan. Di web development, LIMIT juga sering digabungkan dengan OFFSET untuk membuat sistem 'Pagination' (Halaman 1, 2, 3, dst).
    `,
    sintaks: "SELECT * FROM tabel LIMIT jumlah_baris;",
    contoh: "SELECT * FROM skor_pemain ORDER BY skor DESC LIMIT 10; -- Top 10 Skor tertinggi.",
    catatan: "Di beberapa database seperti SQL Server, perintah yang digunakan adalah TOP, bukan LIMIT."
  },
  {
    id: 12,
    modulId: 4,
    title: "Operasi Aritmatika dalam SELECT",
    deskripsi: "Melakukan perhitungan langsung pada kolom saat query dijalankan.",
    penjelasan: `
SELECT tidak hanya mengambil data mentah, tapi juga bisa melakukan kalkulasi sederhana di tempat. Kamu bisa menggunakan operator matematika seperti +, -, *, dan /. 
Misalnya, kamu punya kolom 'harga' dan 'jumlah_beli'. Kamu bisa langsung menghitung 'total_bayar' dengan mengalikan keduanya di dalam SELECT. 
Hasil perhitungan ini akan muncul sebagai kolom baru di tampilan (biasanya diberikan Alias menggunakan AS agar judulnya rapi). Ini mengurangi beban pengolahan data di sisi aplikasi (frontend).
    `,
    sintaks: "SELECT kolom1 * kolom2 AS hasil_hitung FROM tabel;",
    contoh: "SELECT nama_produk, stok * harga AS total_nilai_stok FROM gudang;",
    catatan: "SQL akan mengikuti urutan matematika standar (perkalian dan pembagian didahulukan)."
  },
  {
    id: 1,
    modulId: 5,
    title: "Anatomi Klausa SQL",
    deskripsi: "Memahami urutan eksekusi klausa agar query tidak error.",
    penjelasan: `
Dalam SQL, urutan penulisan klausa sangatlah kaku. Kamu tidak bisa menaruh ORDER BY sebelum WHERE, atau GROUP BY setelah ORDER BY. Mengapa? Karena SQL bekerja seperti ban berjalan di pabrik. 
Pertama, database mengambil data dari tabel (FROM), lalu menyaring barisnya (WHERE), mengelompokkannya (GROUP BY), menyaring kelompoknya (HAVING), memilih kolomnya (SELECT), dan terakhir mengurutkannya (ORDER BY). 
Memahami aliran kerja ini sangat penting agar para Queryan tidak bingung saat mendapatkan pesan error 'syntax error'. Menguasai klausa ini berarti menguasai cara SQL berpikir di balik layar.
    `,
    sintaks: "SELECT -> FROM -> WHERE -> GROUP BY -> HAVING -> ORDER BY -> LIMIT",
    contoh: "Sebuah query lengkap yang menggunakan semua klausa utama untuk laporan penjualan.",
    catatan: "Urutan penulisan (Syntax) berbeda dengan urutan eksekusi (Logical Processing) di database."
  },
  {
    id: 2,
    modulId: 5,
    title: "Klausa WHERE: Filter Tingkat Baris",
    deskripsi: "Menyaring data mentah sebelum diproses lebih lanjut.",
    penjelasan: `
Klausa WHERE adalah garis pertahanan pertama dalam pengolahan data. Tugasnya adalah memeriksa setiap baris data di tabel dan memutuskan apakah baris tersebut layak masuk ke tahap berikutnya atau dibuang. 
Penting untuk diingat bahwa WHERE bekerja secara individual pada setiap baris (row-level). 
Karena WHERE dieksekusi sebelum data dikelompokkan, kamu TIDAK BISA menggunakan fungsi agregat seperti SUM() atau AVG() di dalam klausa WHERE. WHERE hanya berurusan dengan nilai mentah yang ada di kolom tabel saat itu juga.
    `,
    sintaks: "SELECT * FROM tabel WHERE kolom_mentah = 'nilai';",
    contoh: "SELECT * FROM karyawan WHERE gaji > 5000000; -- Menyaring siapa saja yang gajinya tinggi.",
    catatan: "WHERE adalah klausa yang paling menentukan kecepatan query (performa)."
  },
  {
    id: 3,
    modulId: 5,
    title: "Klausa ORDER BY: Estetika Data",
    deskripsi: "Mengatur urutan tampilan hasil akhir query.",
    penjelasan: `
Data tanpa urutan seringkali tidak ada gunanya bagi manusia. ORDER BY digunakan untuk mengurutkan hasil query berdasarkan satu atau lebih kolom. 
Secara default, jika kamu tidak menuliskan jenis urutan, SQL akan menggunakan ASC (Ascending/Meningkat). 
Namun, kamu bisa menggunakan DESC (Descending) untuk melihat data terbaru, harga termahal, atau stok terdikit di urutan paling atas. ORDER BY adalah klausa terakhir yang dieksekusi sebelum LIMIT, karena ia bertugas merapikan hasil 'piring saji' terakhir kamu.
    `,
    sintaks: "ORDER BY nama_kolom [ASC | DESC];",
    contoh: "SELECT * FROM produk ORDER BY stok DESC, nama_produk ASC;",
    catatan: "Mengurutkan kolom teks (string) akan mengikuti aturan abjad (A-Z atau Z-A)."
  },
  {
    id: 4,
    modulId: 5,
    title: "ORDER BY dengan Banyak Kolom",
    deskripsi: "Teknik pengurutan bertingkat untuk data yang kompleks.",
    penjelasan: `
Terkadang, mengurutkan satu kolom saja tidak cukup. Misalkan kamu ingin melihat daftar siswa berdasarkan 'Kelas', tapi di dalam kelas yang sama, kamu ingin nama mereka urut abjad. 
Dalam SQL, kamu bisa menuliskan beberapa kolom di ORDER BY dipisahkan dengan koma. Database akan memprioritaskan kolom pertama, dan jika ada nilai yang sama (tie), database akan menggunakan kolom kedua sebagai penentu urutan. 
Ini sangat krusial untuk laporan yang memiliki kategori besar seperti wilayah, departemen, atau tahun.
    `,
    sintaks: "ORDER BY kolom1 DESC, kolom2 ASC;",
    contoh: "ORDER BY departemen ASC, gaji DESC; -- Urut departemen, lalu gaji tertinggi di tiap departemen.",
    catatan: "Kamu bisa menggunakan nomor urut kolom (misal: ORDER BY 1), tapi ini tidak disarankan dalam standar profesional."
  },
  {
    id: 5,
    modulId: 5,
    title: "Konsep Dasar GROUP BY",
    deskripsi: "Mengubah baris individu menjadi kelompok kategori.",
    penjelasan: `
GROUP BY adalah salah satu klausa yang paling sulit dipahami pemula tapi paling sakti. Tugasnya adalah merangkum atau 'menciutkan' banyak baris yang memiliki nilai kolom yang sama menjadi satu baris kelompok. 
Misalnya, jika kamu punya 1000 data transaksi dari 5 cabang berbeda, GROUP BY cabang akan menghasilkan hanya 5 baris, di mana setiap baris mewakili satu cabang. 
Tujuan utama GROUP BY adalah untuk melakukan perhitungan statistik (agregasi) pada setiap kelompok tersebut, seperti menghitung total penjualan per cabang atau jumlah siswa per angkatan.
    `,
    sintaks: "SELECT kolom, fungsi_agregat(kolom) FROM tabel GROUP BY kolom;",
    contoh: "SELECT kategori, COUNT(*) FROM produk GROUP BY kategori;",
    catatan: "Setiap kolom yang muncul di SELECT tapi tidak masuk dalam fungsi agregat, WAJIB ada di GROUP BY."
  },
  {
    id: 6,
    modulId: 5,
    title: "GROUP BY dengan Fungsi Agregat",
    deskripsi: "Melakukan perhitungan statistik per kelompok data.",
    penjelasan: `
GROUP BY tidak pernah berdiri sendiri; ia selalu ditemani oleh fungsi agregat (SUM, AVG, MIN, MAX, COUNT). 
Tanpa GROUP BY, fungsi SUM(gaji) akan memberikan satu nilai total untuk seluruh kantor. Dengan GROUP BY departemen, SUM(gaji) akan memberikan total gaji untuk masing-masing departemen secara terpisah. 
Ini adalah pondasi utama dalam pembuatan laporan akuntansi, inventaris, dan dashboard manajemen di aplikasi apapun yang sedang kamu bangun bersama LabMaster Team.
    `,
    sintaks: "SELECT departemen, SUM(gaji) FROM karyawan GROUP BY departemen;",
    contoh: "Menghitung rata-rata nilai ujian berdasarkan mata pelajaran.",
    catatan: "Ingat, GROUP BY mengecilkan jumlah baris hasil query."
  },
  {
    id: 7,
    modulId: 5,
    title: "Klausa HAVING: Filter Tingkat Kelompok",
    deskripsi: "Menyaring hasil setelah data dikelompokkan.",
    penjelasan: `
Banyak yang bingung antara WHERE dan HAVING. Perbedaan kuncinya adalah 'Waktu'. 
HAVING digunakan untuk menyaring kelompok data (setelah GROUP BY dijalankan). 
Misalnya, kamu sudah mengelompokkan penjualan per cabang, lalu kamu ingin menampilkan cabang yang 'Total Penjualannya di atas 1 Milyar'. Karena 'Total Penjualan' adalah hasil SUM() (agregat), kamu tidak bisa memakai WHERE. Kamu wajib menggunakan HAVING. 
HAVING adalah satu-satunya tempat di mana kamu bisa melakukan filter berdasarkan hasil perhitungan fungsi agregat.
    `,
    sintaks: "GROUP BY kolom HAVING fungsi_agregat(kolom) kondisi;",
    contoh: "SELECT kategori, AVG(harga) FROM produk GROUP BY kategori HAVING AVG(harga) > 10000;",
    catatan: "HAVING dieksekusi setelah GROUP BY, sedangkan WHERE dieksekusi sebelum GROUP BY."
  },
  {
    id: 8,
    modulId: 5,
    title: "Perbedaan Vital: WHERE vs HAVING",
    deskripsi: "Kapan harus menggunakan salah satu atau keduanya.",
    penjelasan: `
Mari kita analogikan: Kamu ingin mencari tim sepak bola yang rata-rata usia pemainnya di atas 25 tahun, tapi pemain yang dihitung hanya yang berasal dari Indonesia. 
1. WHERE: Digunakan untuk menyaring pemain (hanya yang Indonesia). Dilakukan di awal. 
2. GROUP BY: Mengelompokkan pemain menjadi tim. 
3. HAVING: Menyaring tim berdasarkan rata-rata usianya (> 25). 
Satu query bisa menggunakan keduanya secara bersamaan. WHERE membuang baris yang tidak perlu, dan HAVING membuang kelompok yang tidak memenuhi kriteria. Ini adalah teknik filter dua lapis yang sangat efisien.
    `,
    sintaks: "SELECT ... FROM ... WHERE ... GROUP BY ... HAVING ...",
    contoh: "Mencari departemen yang jumlah karyawan pria-nya (WHERE) lebih dari 10 orang (HAVING).",
    catatan: "WHERE lebih cepat karena mengurangi jumlah data yang harus dihitung oleh GROUP BY."
  },
  {
    id: 9,
    modulId: 5,
    title: "GROUP BY dengan Banyak Kolom",
    deskripsi: "Pengelompokan data yang lebih spesifik dan detail.",
    penjelasan: `
Kamu bisa mengelompokkan data berdasarkan lebih dari satu kolom. Misalnya, menghitung jumlah penjualan per 'Tahun' dan per 'Kategori'. 
Hasilnya akan menampilkan kombinasi unik dari kedua kolom tersebut. 
Semakin banyak kolom yang kamu masukkan ke GROUP BY, maka hasil datanya akan semakin detail (barisnya semakin banyak). Ini sangat berguna untuk laporan data multidimensi atau tabel pivot dalam analisis data bisnis.
    `,
    sintaks: "GROUP BY kolom_a, kolom_b;",
    contoh: "GROUP BY tahun_akademik, semester; -- Menghitung data per tahun dan per semester.",
    catatan: "Urutan kolom dalam GROUP BY tidak mempengaruhi hasil nilai, hanya urutan logis pengelompokan saja."
  },
  {
    id: 10,
    modulId: 5,
    title: "Kombinasi GROUP BY dan ORDER BY",
    deskripsi: "Mengurutkan hasil perhitungan kelompok.",
    penjelasan: `
Setelah kamu mendapatkan hasil perhitungan kelompok (misal: Total Gaji per Departemen), seringkali kamu ingin melihat siapa yang tertinggal atau yang tertinggi. 
Kamu bisa menggabungkan GROUP BY dengan ORDER BY. Dalam ORDER BY, kamu bisa langsung menuliskan fungsi agregatnya atau menggunakan nama Alias yang sudah kamu buat di bagian SELECT. 
Ini memberikan tampilan yang sangat profesional, seperti daftar 'Top 5 Kategori Produk Paling Laris'.
    `,
    sintaks: "SELECT kat, SUM(jual) AS total FROM tabel GROUP BY kat ORDER BY total DESC;",
    contoh: "Menampilkan departemen dengan rata-rata gaji terkecil sampai terbesar.",
    catatan: "Gunakan nama Alias di ORDER BY agar query kamu lebih bersih dan mudah dibaca."
  },
  {
    id: 11,
    modulId: 5,
    title: "Aturan Emas: Kolom di SELECT vs GROUP BY",
    deskripsi: "Menghindari error paling umum dalam query agregat.",
    penjelasan: `
Ada aturan baku di SQL: Setiap kolom yang kamu tulis di perintah SELECT, jika kolom tersebut bukan bagian dari fungsi agregat (bukan SUM, COUNT, dll), maka kolom tersebut WAJIB tercantum di klausa GROUP BY. 
Jika kamu melanggar aturan ini, database akan bingung. Misalnya kamu minta 'Nama Karyawan' dan 'SUM(Gaji)' dikelompokkan per 'Departemen'. Database tidak tahu nama karyawan mana yang harus ditampilkan karena ada banyak nama dalam satu departemen. 
Memahami aturan ini akan menyelamatkan para Queryan dari 90% error yang terjadi saat belajar GROUP BY.
    `,
    sintaks: "SELECT non_agregat, agregat FROM tabel GROUP BY non_agregat;",
    contoh: "SELECT nama, MAX(skor) FROM game GROUP BY nama; -- Benar.",
    catatan: "Beberapa database seperti MySQL versi lama membolehkan pelanggaran ini, tapi hasilnya acak dan tidak akurat."
  },
  {
    id: 12,
    modulId: 5,
    title: "Implementasi Klausa pada Query Kompleks",
    deskripsi: "Menyatukan semua potongan puzzle dalam satu perintah.",
    penjelasan: `
Sekarang bayangkan satu query utuh: Kamu ingin mengambil 'Nama Vendor' dan 'Total Pasokan', dari tabel 'Logistik', yang 'Tanggalnya tahun 2024', dikelompokkan per 'Vendor', yang 'Total Pasokannya lebih dari 500 unit', dan diurutkan dari 'Terbanyak'. 
Query ini akan menggunakan:
1. FROM logistik
2. WHERE tanggal LIKE '2024%'
3. GROUP BY vendor
4. HAVING SUM(unit) > 500
5. SELECT vendor, SUM(unit)
6. ORDER BY SUM(unit) DESC
Inilah kekuatan sejati seorang Queryan: mampu menyusun klausa-klausa ini menjadi satu perintah yang menghasilkan informasi berharga dari jutaan baris data mentah.
    `,
    sintaks: "Struktur lengkap query kompleks.",
    contoh: "Query laporan performa vendor tahunan.",
    catatan: "Latihlah urutan ini sampai menjadi memori otot (muscle memory)."
  },
  {
    id: 1,
    modulId: 6,
    title: "Filosofi Relasi: Mengapa Kita Butuh JOIN?",
    deskripsi: "Memahami alasan database dipisahkan menjadi banyak tabel.",
    penjelasan: `
Dalam database relasional yang sehat, kita tidak menyimpan semua data dalam satu tabel raksasa. Mengapa? Karena itu akan menyebabkan pemborosan ruang dan data yang berantakan (redundansi). Kita memisahkan data ke tabel-tabel kecil yang spesifik, misalnya tabel 'Mahasiswa' dan tabel 'Jurusan'.
Namun, saat ingin melihat 'Daftar Mahasiswa beserta Nama Jurusannya', kita butuh cara untuk menyatukan kembali data yang terpisah itu. Di sinilah JOIN berperan.
JOIN adalah operasi yang mencocokkan baris dari dua tabel atau lebih berdasarkan kolom yang saling berhubungan (biasanya Primary Key dan Foreign Key). Menguasai JOIN adalah syarat mutlak untuk menjadi Full-Stack Developer atau Data Engineer.
    `,
    sintaks: "SELECT * FROM tabel_a JOIN tabel_b ON tabel_a.kunci = tabel_b.kunci;",
    contoh: "Menghubungkan tabel Transaksi dengan tabel Pelanggan untuk melihat siapa yang belanja.",
    catatan: "JOIN adalah operasi yang paling sering membuat query menjadi lambat jika tidak dioptimasi dengan Index."
  },
  {
    id: 2,
    modulId: 6,
    title: "Konsep INNER JOIN",
    deskripsi: "Mengambil data yang hanya memiliki pasangan di kedua tabel.",
    penjelasan: `
INNER JOIN adalah tipe join yang paling populer dan paling sering digunakan. Prinsipnya sederhana: ia hanya akan menampilkan baris jika ada kecocokan di kedua tabel.
Bayangkan kamu punya tabel 'Siswa' dan tabel 'Hobi'. Jika ada siswa yang tidak punya hobi, atau ada hobi yang tidak dipilih oleh satu pun siswa, maka data tersebut TIDAK akan muncul dalam hasil INNER JOIN. 
INNER JOIN sangat berguna untuk laporan yang membutuhkan data 'lengkap' dan pasti, seperti 'Daftar karyawan yang sudah memiliki departemen'.
    `,
    sintaks: "SELECT * FROM tabel1 INNER JOIN tabel2 ON tabel1.id = tabel2.id_tabel1;",
    contoh: "SELECT mahasiswa.nama, jurusan.nama_jurusan FROM mahasiswa INNER JOIN jurusan ON mahasiswa.jurusan_id = jurusan.id;",
    catatan: "INNER JOIN adalah default join di SQL. Jika kamu hanya menulis 'JOIN', itu dianggap INNER JOIN."
  },
  {
    id: 3,
    modulId: 6,
    title: "LEFT JOIN (LEFT OUTER JOIN)",
    deskripsi: "Menampilkan semua data dari tabel kiri tanpa terkecuali.",
    penjelasan: `
LEFT JOIN bekerja dengan cara mengambil SEMUA baris dari tabel sebelah kiri (tabel yang pertama ditulis), dan hanya mengambil data yang cocok dari tabel sebelah kanan.
Jika di tabel kanan tidak ditemukan pasangan yang cocok, maka kolom dari tabel kanan akan diisi dengan nilai NULL. 
Kapan kita pakai ini? Contoh paling pas adalah: 'Tampilkan semua pelanggan, dan tunjukkan total belanjanya'. Dengan LEFT JOIN, pelanggan yang BELUM PERNAH belanja pun tetap akan muncul di daftar, namun total belanjanya akan kosong (NULL). Ini penting agar kita tahu siapa pelanggan yang belum aktif.
    `,
    sintaks: "SELECT * FROM tabel_kiri LEFT JOIN tabel_kanan ON kondisi;",
    contoh: "SELECT produk.nama, stok.jumlah FROM produk LEFT JOIN stok ON produk.id = stok.id_produk;",
    catatan: "Tabel 'Kiri' adalah tabel yang disebut sebelum kata kunci LEFT JOIN."
  },
  {
    id: 4,
    modulId: 6,
    title: "RIGHT JOIN (RIGHT OUTER JOIN)",
    deskripsi: "Kebalikan dari LEFT JOIN, fokus pada tabel kanan.",
    penjelasan: `
RIGHT JOIN adalah cerminan dari LEFT JOIN. Ia akan mengambil seluruh data dari tabel sebelah kanan, dan mencocokkannya dengan tabel sebelah kiri.
Meski secara fungsi mirip dengan LEFT JOIN (hanya beda posisi tabel), di dunia kerja para developer lebih sering menggunakan LEFT JOIN karena cara bacanya lebih alami (dari kiri ke kanan). Namun, memahami RIGHT JOIN tetap penting karena kadang kita bekerja dengan query warisan orang lain yang menggunakan logika ini.
    `,
    sintaks: "SELECT * FROM tabel_kiri RIGHT JOIN tabel_kanan ON kondisi;",
    contoh: "SELECT * FROM departemen RIGHT JOIN karyawan ON departemen.id = karyawan.dept_id;",
    catatan: "Hasil RIGHT JOIN tabel A dan B akan sama dengan LEFT JOIN tabel B dan A."
  },
  {
    id: 5,
    modulId: 6,
    title: "FULL OUTER JOIN",
    deskripsi: "Menggabungkan semua data, baik yang punya pasangan maupun tidak.",
    penjelasan: `
FULL OUTER JOIN adalah penggabungan total. Ia akan menampilkan semua baris dari kedua tabel. Jika ada yang cocok, datanya digabung. Jika ada data di tabel kiri yang tidak punya pasangan di kanan (atau sebaliknya), barisnya tetap muncul dengan nilai NULL di kolom pasangannya.
Ini adalah cara terbaik untuk melihat 'lubang' di database kamu, misalnya mencari tahu 'siapa siswa yang belum bayar SPP' sekaligus 'siapa data SPP yang tidak punya nama siswa'.
    `,
    sintaks: "SELECT * FROM tabel_a FULL OUTER JOIN tabel_b ON kondisi;",
    contoh: "Melihat korelasi penuh antara tabel stok gudang dan tabel pesanan pelanggan.",
    catatan: "Tidak semua database (seperti MySQL) mendukung FULL OUTER JOIN secara langsung."
  },
  {
    id: 6,
    modulId: 6,
    title: "Mengenal CROSS JOIN (Cartesian Product)",
    deskripsi: "Menghubungkan setiap baris dengan setiap baris lainnya.",
    penjelasan: `
CROSS JOIN adalah operasi perkalian baris. Jika tabel A punya 5 baris dan tabel B punya 4 baris, maka hasil CROSS JOIN adalah 20 baris (5x4).
Hati-hati! CROSS JOIN tidak menggunakan kondisi 'ON'. Biasanya digunakan untuk menghasilkan kombinasi data, seperti 'Tampilkan semua kemungkinan ukuran kaos dan warna kaos yang tersedia'. Jangan gunakan ini pada tabel besar jika tidak ingin server kamu hang!
    `,
    sintaks: "SELECT * FROM tabel_a CROSS JOIN tabel_b;",
    contoh: "SELECT * FROM ukuran CROSS JOIN warna; -- Hasilnya: S Merah, S Biru, M Merah, dst.",
    catatan: "Disebut juga sebagai Cartesian Product."
  },
  {
    id: 7,
    modulId: 6,
    title: "Self Join: Bergabung dengan Diri Sendiri",
    deskripsi: "Menghubungkan sebuah tabel dengan tabel itu sendiri.",
    penjelasan: `
Terdengar aneh? Tapi Self Join sangat penting. Bayangkan tabel 'Karyawan' yang memiliki kolom 'manager_id'. Karena manajer juga merupakan karyawan, maka 'manager_id' sebenarnya merujuk ke 'id' di tabel yang sama.
Untuk melakukan Self Join, kita wajib menggunakan Alias agar SQL tidak bingung. Kita seolah-olah menganggap satu tabel tersebut sebagai dua tabel yang berbeda (misal: tabel 'karyawan' dan tabel 'atasan').
    `,
    sintaks: "SELECT a.nama AS staf, b.nama AS bos FROM karyawan a JOIN karyawan b ON a.manager_id = b.id;",
    contoh: "Melihat struktur organisasi atau silsilah keluarga dalam satu tabel.",
    catatan: "Alias (AS) adalah kunci utama agar Self Join bisa berjalan."
  },
  {
    id: 8,
    modulId: 6,
    title: "JOIN dengan Lebih dari Dua Tabel",
    deskripsi: "Teknik merangkai banyak tabel dalam satu query tunggal.",
    penjelasan: `
Dalam aplikasi yang kompleks, satu query bisa menggabungkan 3, 5, bahkan 10 tabel sekaligus. Misalnya: mengambil data Mahasiswa -> dari Jurusan apa -> di Fakultas mana -> siapa Dekannya.
Cara kerjanya berantai: tabel pertama di-join ke tabel kedua, lalu hasilnya di-join lagi ke tabel ketiga, dan seterusnya. Pastikan kamu selalu memiliki kolom penghubung (Key) di setiap langkah join agar datanya tidak berantakan.
    `,
    sintaks: "SELECT * FROM T1 JOIN T2 ON T1.id = T2.id JOIN T3 ON T2.id = T3.id;",
    contoh: "Menghubungkan Pesanan, Detail_Pesanan, dan Produk dalam satu laporan nota.",
    catatan: "Semakin banyak tabel yang di-join, semakin berat performa query tersebut."
  },
  {
    id: 9,
    modulId: 6,
    title: "Kondisi Filter pada JOIN (WHERE vs ON)",
    deskripsi: "Perbedaan menaruh filter di klausa ON atau di WHERE.",
    penjelasan: `
Banyak Queryan bingung: apakah filter ditaruh di dalam 'ON' atau di 'WHERE' setelah join?
Aturannya: 'ON' digunakan untuk menentukan bagaimana tabel saling terhubung (logika relasi). 'WHERE' digunakan untuk menyaring hasil akhir (logika bisnis). 
Jika kamu menggunakan LEFT JOIN, menaruh filter di klausa 'ON' akan memberikan hasil yang berbeda dibanding di 'WHERE', karena 'ON' dilakukan saat proses penggabungan, sedangkan 'WHERE' dilakukan setelah penggabungan selesai.
    `,
    sintaks: "JOIN tabel_b ON a.id = b.id AND b.status = 'Aktif' WHERE a.tgl > '2024-01-01';",
    contoh: "Memfilter data stok yang tersedia saat proses penggabungan tabel.",
    catatan: "Gunakan 'ON' untuk urusan teknis relasi, 'WHERE' untuk urusan data."
  },
  {
    id: 10,
    modulId: 6,
    title: "JOIN dan Fungsi Agregat",
    deskripsi: "Menghitung data dari tabel yang berbeda secara bersamaan.",
    penjelasan: `
Ini adalah kombinasi maut: JOIN + GROUP BY + Fungsi Agregat. Contohnya: 'Tampilkan nama kategori dan hitung berapa banyak produk di dalamnya'.
Nama kategorinya ada di tabel 'Kategori', tapi data produknya ada di tabel 'Produk'. Kita harus melakukan JOIN dulu agar datanya bersatu, baru kemudian melakukan GROUP BY berdasarkan nama kategori untuk menghitung jumlahnya. Ini adalah standar pembuatan laporan dashboard.
    `,
    sintaks: "SELECT t1.nama, COUNT(t2.id) FROM t1 JOIN t2 GROUP BY t1.nama;",
    contoh: "SELECT jurusan.nama, AVG(mahasiswa.ipk) FROM jurusan JOIN mahasiswa GROUP BY jurusan.nama;",
    catatan: "Hati-hati dengan duplikasi data saat join yang bisa merusak hasil COUNT atau SUM."
  },
  {
    id: 11,
    modulId: 6,
    title: "Menggunakan Alias pada Nama Tabel",
    deskripsi: "Menyingkat nama tabel agar query lebih pendek dan bersih.",
    penjelasan: `
Saat melakukan JOIN, kita sering menuliskan nama tabel berulang kali (misal: 'transaksi_penjualan_detail.id_barang'). Ini sangat melelahkan dan membuat query sulit dibaca.
Kita bisa memberikan Alias singkat untuk tabel, seperti 't' untuk transaksi atau 'p' untuk produk. Ini membuat penulisan query menjadi jauh lebih cepat dan mengurangi risiko salah ketik.
    `,
    sintaks: "SELECT t.id, p.nama FROM transaksi AS t JOIN produk AS p ON t.pid = p.id;",
    contoh: "SELECT m.nama, j.nama_jurusan FROM mahasiswa m JOIN jurusan j ON m.jid = j.id;",
    catatan: "Begitu Alias dibuat, kamu tidak boleh lagi memanggil nama tabel aslinya di dalam query tersebut."
  },
  {
    id: 12,
    modulId: 6,
    title: "Visualisasi JOIN dengan Diagram Venn",
    deskripsi: "Cara termudah memahami logika join lewat gambar.",
    penjelasan: `
Bayangkan dua lingkaran yang saling tumpang tindih (Diagram Venn). 
- Irisan di tengah adalah INNER JOIN.
- Lingkaran kiri penuh (termasuk irisannya) adalah LEFT JOIN.
- Lingkaran kanan penuh adalah RIGHT JOIN.
- Kedua lingkaran penuh adalah FULL OUTER JOIN.
Visualisasi ini sangat membantu para Queryan untuk menentukan tipe join mana yang harus dipakai tanpa perlu menghafal definisi teknis yang rumit.
    `,
    sintaks: "",
    contoh: "Menggunakan diagram untuk memecahkan masalah relasi data yang rumit.",
    catatan: "Selalu gambar diagram venn di kertas jika kamu bingung saat menyusun query join yang kompleks."
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