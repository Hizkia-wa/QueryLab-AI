// src/data/soal.js

const soalData = [
  {
    id: 1,
    modulId: 1,
    judul: "Menampilkan Semua Data",
    materi: "Perintah SELECT * digunakan untuk mengambil seluruh kolom dan baris dari sebuah tabel.",
    instruksi: "Tampilkan seluruh data dari tabel 'produk'.",
    expectedQuery: "SELECT * FROM produk",
    tabelSkema: {
      tabelKiri: [
        { id: 1, nama_produk: "Kopi Hitam", harga: 15000, stok: 20 },
        { id: 2, nama_produk: "Teh Manis", harga: 5000, stok: 50 },
        { id: 3, nama_produk: "Roti Bakar", harga: 12000, stok: 15 },
        { id: 4, nama_produk: "Susu Segar", harga: 10000, stok: 30 },
        { id: 5, nama_produk: "Jus Jeruk", harga: 15000, stok: 10 }
      ],
      tabelKanan: [] // Modul awal biasanya hanya menggunakan satu tabel utama
    },
    hint: "Gunakan SELECT * FROM nama_tabel."
  },
  {
    id: 2,
    modulId: 1,
    judul: "Memilih Kolom Tertentu",
    materi: "Kita bisa memilih kolom spesifik dengan memisahkan nama kolom menggunakan koma.",
    instruksi: "Tampilkan hanya kolom 'nama_karyawan' dan 'jabatan' dari tabel 'karyawan'.",
    expectedQuery: "SELECT nama_karyawan, jabatan FROM karyawan",
    tabelSkema: {
      tabelKiri: [
        { id: 101, nama_karyawan: "Hizkia", jabatan: "Developer", gaji: 8000000 },
        { id: 102, nama_karyawan: "Cristian", jabatan: "Designer", gaji: 7500000 },
        { id: 103, nama_karyawan: "Siahaan", jabatan: "Manager", gaji: 12000000 },
        { id: 104, nama_karyawan: "Lumban", jabatan: "DevOps", gaji: 9000000 },
        { id: 105, nama_karyawan: "Gaol", jabatan: "Analyst", gaji: 8500000 }
      ],
      tabelKanan: []
    },
    hint: "SELECT kolom1, kolom2 FROM tabel."
  },
  {
    id: 3,
    modulId: 1,
    judul: "Filter Data dengan WHERE",
    materi: "Klausa WHERE digunakan untuk menyaring baris berdasarkan kondisi tertentu.",
    instruksi: "Tampilkan data buku yang memiliki harga di atas 50000.",
    expectedQuery: "SELECT * FROM buku WHERE harga > 50000",
    tabelSkema: {
      tabelKiri: [
        { id: 1, judul: "Algoritma", penulis: "Hizkia", harga: 75000 },
        { id: 2, judul: "Basis Data", penulis: "Cristian", harga: 45000 },
        { id: 3, judul: "Web Design", penulis: "Siahaan", harga: 60000 },
        { id: 4, judul: "Matematika", penulis: "Lumban", harga: 30000 },
        { id: 5, judul: "Statistika", penulis: "Gaol", harga: 55000 }
      ],
      tabelKanan: []
    },
    hint: "Gunakan operator perbandingan '>'."
  },
  {
    id: 4,
    modulId: 1,
    judul: "Mencari Data Spesifik (String)",
    materi: "Untuk filter teks, gunakan tanda petik tunggal ('') pada nilainya.",
    instruksi: "Tampilkan data anggota yang berstatus 'Aktif'.",
    expectedQuery: "SELECT * FROM anggota WHERE status = 'Aktif'",
    tabelSkema: {
      tabelKiri: [
        { id: 1, nama: "Budi", status: "Aktif", level: "Gold" },
        { id: 2, nama: "Santi", status: "Pasif", level: "Silver" },
        { id: 3, nama: "Eka", status: "Aktif", level: "Bronze" },
        { id: 4, nama: "Rian", status: "Aktif", level: "Silver" },
        { id: 5, nama: "Dewi", status: "Pasif", level: "Gold" }
      ],
      tabelKanan: []
    },
    hint: "Gunakan WHERE kolom = 'nilai'."
  },
  {
    id: 5,
    modulId: 1,
    judul: "Mengurutkan Data (A-Z)",
    materi: "ORDER BY digunakan untuk mengurutkan hasil secara ascending (terkecil ke terbesar).",
    instruksi: "Tampilkan semua produk dan urutkan berdasarkan 'nama_produk'.",
    expectedQuery: "SELECT * FROM produk ORDER BY nama_produk ASC",
    tabelSkema: {
      tabelKiri: [
        { id: 1, nama_produk: "Zebra Pen", harga: 5000, kategori: "ATK" },
        { id: 2, nama_produk: "Apple", harga: 10000, kategori: "Buah" },
        { id: 3, nama_produk: "Buku Tulis", harga: 3000, kategori: "ATK" },
        { id: 4, nama_produk: "Deterjen", harga: 15000, kategori: "Sabun" },
        { id: 5, nama_produk: "Cokelat", harga: 12000, kategori: "Snack" }
      ],
      tabelKanan: []
    },
    hint: "Tambahkan ORDER BY di akhir query."
  },
  {
    id: 6,
    modulId: 1,
    judul: "Mengurutkan Terbalik (Z-A / Besar ke Kecil)",
    materi: "Gunakan DESC untuk mengurutkan data dari nilai tertinggi ke terendah.",
    instruksi: "Tampilkan semua stok barang, urutkan dari 'stok' terbanyak.",
    expectedQuery: "SELECT * FROM barang ORDER BY stok DESC",
    tabelSkema: {
      tabelKiri: [
        { id: 1, nama: "Meja", stok: 10, lokasi: "Gudang A" },
        { id: 2, nama: "Kursi", stok: 45, lokasi: "Gudang B" },
        { id: 3, nama: "Lampu", stok: 25, lokasi: "Gudang A" },
        { id: 4, nama: "Pintu", stok: 5, lokasi: "Gudang C" },
        { id: 5, nama: "Kaca", stok: 15, lokasi: "Gudang B" }
      ],
      tabelKanan: []
    },
    hint: "ORDER BY kolom DESC."
  },
  {
    id: 7,
    modulId: 1,
    judul: "Membatasi Hasil (LIMIT)",
    materi: "LIMIT digunakan untuk mengambil jumlah baris tertentu saja.",
    instruksi: "Tampilkan 3 data pelanggan pertama dari tabel 'pelanggan'.",
    expectedQuery: "SELECT * FROM pelanggan LIMIT 3",
    tabelSkema: {
      tabelKiri: [
        { id: 1, nama: "Andi", email: "andi@co", poin: 100 },
        { id: 2, nama: "Budi", email: "budi@co", poin: 50 },
        { id: 3, nama: "Cici", email: "cici@co", poin: 200 },
        { id: 4, nama: "Dedi", email: "dedi@co", poin: 80 },
        { id: 5, nama: "Eka", email: "eka@co", poin: 120 }
      ],
      tabelKanan: []
    },
    hint: "Tambahkan LIMIT 3 di akhir query."
  },
  {
    id: 8,
    modulId: 1,
    judul: "Kombinasi Filter dan Urutan",
    materi: "Urutan penulisan yang benar adalah SELECT -> FROM -> WHERE -> ORDER BY.",
    instruksi: "Tampilkan mobil tipe 'SUV', urutkan berdasarkan 'harga' termurah.",
    expectedQuery: "SELECT * FROM mobil WHERE tipe = 'SUV' ORDER BY harga ASC",
    tabelSkema: {
      tabelKiri: [
        { id: 1, merk: "Toyota", tipe: "SUV", harga: 300 },
        { id: 2, merk: "Honda", tipe: "Sedan", harga: 250 },
        { id: 3, merk: "Mitsubishi", tipe: "SUV", harga: 450 },
        { id: 4, merk: "Suzuki", tipe: "MPV", harga: 200 },
        { id: 5, merk: "Hyundai", tipe: "SUV", harga: 350 }
      ],
      tabelKanan: []
    },
    hint: "WHERE dulu baru ORDER BY."
  },
  {
    id: 9,
    modulId: 1,
    judul: "Operator Perbandingan (Tidak Sama Dengan)",
    materi: "Gunakan '!=' atau '<>' untuk mencari data yang tidak memenuhi syarat.",
    instruksi: "Tampilkan semua siswa yang prodi-nya bukan 'TI'.",
    expectedQuery: "SELECT * FROM siswa WHERE prodi != 'TI'",
    tabelSkema: {
      tabelKiri: [
        { nim: "001", nama: "Hizkia", prodi: "TI", angkatan: "2024" },
        { nim: "002", nama: "Budi", prodi: "SI", angkatan: "2024" },
        { nim: "003", nama: "Siti", prodi: "TI", angkatan: "2024" },
        { nim: "004", nama: "Andi", prodi: "DKV", angkatan: "2024" },
        { nim: "005", nama: "Lusi", prodi: "SI", angkatan: "2024" }
      ],
      tabelKanan: []
    },
    hint: "Gunakan operator !=."
  },
  {
    id: 10,
    modulId: 1,
    judul: "Mencari Range (Antara)",
    materi: "Operator BETWEEN digunakan untuk mencari nilai dalam rentang tertentu.",
    instruksi: "Tampilkan produk dengan harga antara 10000 sampai 20000.",
    expectedQuery: "SELECT * FROM produk WHERE harga BETWEEN 10000 AND 20000",
    tabelSkema: {
      tabelKiri: [
        { id: 1, nama: "Pena", harga: 5000, kategori: "Alat" },
        { id: 2, nama: "Buku", harga: 15000, kategori: "Alat" },
        { id: 3, nama: "Tas", harga: 50000, kategori: "Akses" },
        { id: 4, nama: "Mistar", harga: 12000, kategori: "Alat" },
        { id: 5, nama: "Pensil", harga: 2000, kategori: "Alat" }
      ],
      tabelKanan: []
    },
    hint: "WHERE kolom BETWEEN nilai1 AND nilai2."
  },
  {
    id: 11,
    modulId: 1,
    judul: "Kondisi Ganda (AND)",
    materi: "AND digunakan jika kedua kondisi harus terpenuhi.",
    instruksi: "Tampilkan aset di 'Gedung A' yang harganya di atas 10jt.",
    expectedQuery: "SELECT * FROM aset WHERE lokasi = 'Gedung A' AND harga > 10000000",
    tabelSkema: {
      tabelKiri: [
        { id: 1, item: "PC", lokasi: "Gedung A", harga: 15000000 },
        { id: 2, item: "AC", lokasi: "Gedung B", harga: 5000000 },
        { id: 3, item: "Meja", lokasi: "Gedung A", harga: 2000000 },
        { id: 4, item: "Server", lokasi: "Gedung A", harga: 50000000 },
        { id: 5, item: "CCTV", lokasi: "Gedung C", harga: 3000000 }
      ],
      tabelKanan: []
    },
    hint: "Gunakan operator AND."
  },
  {
    id: 12,
    modulId: 1,
    judul: "Kondisi Pilihan (OR)",
    materi: "OR digunakan jika salah satu kondisi saja yang perlu terpenuhi.",
    instruksi: "Tampilkan karyawan yang jabatannya 'Manager' atau 'Director'.",
    expectedQuery: "SELECT * FROM staff WHERE jabatan = 'Manager' OR jabatan = 'Director'",
    tabelSkema: {
      tabelKiri: [
        { id: 1, nama: "Rizky", jabatan: "Staff", dep: "IT" },
        { id: 2, nama: "Amel", jabatan: "Manager", dep: "HR" },
        { id: 3, nama: "Fajar", jabatan: "Staff", dep: "IT" },
        { id: 4, nama: "Santi", jabatan: "Director", dep: "Finance" },
        { id: 5, nama: "Bagus", jabatan: "Staff", dep: "Sales" }
      ],
      tabelKanan: []
    },
    hint: "Gunakan operator OR."
  },
  {
    id: 13,
    modulId: 1,
    judul: "Mencari dengan Pola (LIKE)",
    materi: "LIKE dengan '%' digunakan untuk mencari teks yang mengandung pola tertentu.",
    instruksi: "Tampilkan menu yang namanya mengandung kata 'Ayam'.",
    expectedQuery: "SELECT * FROM menu WHERE nama_menu LIKE '%Ayam%'",
    tabelSkema: {
      tabelKiri: [
        { id: 1, nama_menu: "Ayam Goreng", kategori: "Food", harga: 20000 },
        { id: 2, nama_menu: "Mie Bakso", kategori: "Food", harga: 15000 },
        { id: 3, nama_menu: "Sate Ayam", kategori: "Food", harga: 25000 },
        { id: 4, nama_menu: "Es Teh", kategori: "Drink", harga: 5000 },
        { id: 5, nama_menu: "Bubur Ayam", kategori: "Food", harga: 12000 }
      ],
      tabelKanan: []
    },
    hint: "WHERE kolom LIKE '%kata%'."
  },
  {
    id: 14,
    modulId: 1,
    judul: "Mencari Awalan Teks",
    materi: "Pola 'A%' berarti mencari teks yang dimulai dengan huruf A.",
    instruksi: "Tampilkan pelanggan yang namanya dimulai dengan huruf 'H'.",
    expectedQuery: "SELECT * FROM user WHERE nama LIKE 'H%'",
    tabelSkema: {
      tabelKiri: [
        { id: 1, nama: "Hizkia", kota: "Medan", tgl: "2024" },
        { id: 2, nama: "Budi", kota: "Jakarta", tgl: "2024" },
        { id: 3, nama: "Hadi", kota: "Surabaya", tgl: "2024" },
        { id: 4, nama: "Santi", kota: "Medan", tgl: "2024" },
        { id: 5, nama: "Hendro", kota: "Bandung", tgl: "2024" }
      ],
      tabelKanan: []
    },
    hint: "Gunakan LIKE 'H%'."
  },
  {
    id: 15,
    modulId: 1,
    judul: "Menghitung Jumlah Baris (COUNT)",
    materi: "COUNT(*) digunakan untuk menghitung total baris yang ada.",
    instruksi: "Tampilkan jumlah total baris dari tabel 'transaksi'.",
    expectedQuery: "SELECT COUNT(*) FROM transaksi",
    tabelSkema: {
      tabelKiri: [
        { id_tr: 101, tgl: "2024-04", total: 50000, kasir: "Ani" },
        { id_tr: 102, tgl: "2024-04", total: 75000, kasir: "Budi" },
        { id_tr: 103, tgl: "2024-04", total: 20000, kasir: "Ani" },
        { id_tr: 104, tgl: "2024-04", total: 100000, kasir: "Cici" },
        { id_tr: 105, tgl: "2024-04", total: 45000, kasir: "Budi" }
      ],
      tabelKanan: []
    },
    hint: "Gunakan SELECT COUNT(*) FROM nama_tabel."
  },
  {
    id: 16,
    modulId: 1,
    judul: "Mencari Nilai Maksimal (MAX)",
    materi: "MAX(kolom) digunakan untuk mendapatkan nilai tertinggi.",
    instruksi: "Tampilkan harga termahal dari tabel 'laptop'.",
    expectedQuery: "SELECT MAX(harga) FROM laptop",
    tabelSkema: {
      tabelKiri: [
        { id: 1, merk: "Asus", seri: "ROG", harga: 25000000 },
        { id: 2, merk: "Acer", seri: "Nitro", harga: 12000000 },
        { id: 3, merk: "Apple", seri: "M3 Pro", harga: 35000000 },
        { id: 4, merk: "Lenovo", seri: "Legion", harga: 18000000 },
        { id: 5, merk: "HP", seri: "Victus", harga: 11000000 }
      ],
      tabelKanan: []
    },
    hint: "Gunakan SELECT MAX(kolom) FROM tabel."
  },
  {
    id: 17,
    modulId: 1,
    judul: "Mencari Nilai Minimal (MIN)",
    materi: "MIN(kolom) digunakan untuk mendapatkan nilai terendah.",
    instruksi: "Tampilkan skor terendah dari tabel 'ujian'.",
    expectedQuery: "SELECT MIN(skor) FROM ujian",
    tabelSkema: {
      tabelKiri: [
        { id: 1, nama: "Budi", matkul: "SQL", skor: 85 },
        { id: 2, nama: "Siti", matkul: "SQL", skor: 90 },
        { id: 3, nama: "Andi", matkul: "SQL", skor: 65 },
        { id: 4, nama: "Lusi", matkul: "SQL", skor: 70 },
        { id: 5, nama: "Hizkia", matkul: "SQL", skor: 95 }
      ],
      tabelKanan: []
    },
    hint: "Gunakan SELECT MIN(kolom) FROM tabel."
  },
  {
    id: 18,
    modulId: 1,
    judul: "Memberi Nama Alias (AS)",
    materi: "AS digunakan untuk mengganti nama kolom hasil agar lebih mudah dibaca.",
    instruksi: "Tampilkan kolom 'nama_barang' dengan alias 'Produk'.",
    expectedQuery: "SELECT nama_barang AS Produk FROM gudang",
    tabelSkema: {
      tabelKiri: [
        { id: 1, nama_barang: "Kertas A4", stok: 100, rak: "A1" },
        { id: 2, nama_barang: "Tinta", stok: 20, rak: "B2" },
        { id: 3, nama_barang: "Flashdisk", stok: 50, rak: "C1" },
        { id: 4, nama_barang: "Mouse", stok: 30, rak: "A2" },
        { id: 5, nama_barang: "Keyboard", stok: 15, rak: "B1" }
      ],
      tabelKanan: []
    },
    hint: "Gunakan SELECT kolom AS alias FROM tabel."
  },
  {
    id: 19,
    modulId: 1,
    judul: "Mencari Data dalam List (IN)",
    materi: "Operator IN digunakan untuk mencocokkan data dengan beberapa nilai pilihan.",
    instruksi: "Tampilkan data produk yang berkategori 'Buah' atau 'Sayur'.",
    expectedQuery: "SELECT * FROM pasar WHERE kategori IN ('Buah', 'Sayur')",
    tabelSkema: {
      tabelKiri: [
        { id: 1, nama: "Apel", kategori: "Buah", harga: 5000 },
        { id: 2, nama: "Bayam", kategori: "Sayur", harga: 2000 },
        { id: 3, nama: "Ayam", kategori: "Daging", harga: 35000 },
        { id: 4, nama: "Jeruk", kategori: "Buah", harga: 4000 },
        { id: 5, nama: "Sawi", kategori: "Sayur", harga: 3000 }
      ],
      tabelKanan: []
    },
    hint: "Gunakan WHERE kolom IN (nilai1, nilai2)."
  },
  {
    id: 20,
    modulId: 1,
    judul: "Filter Data yang Kosong (IS NULL)",
    materi: "IS NULL digunakan untuk mencari baris yang kolomnya tidak memiliki nilai (kosong).",
    instruksi: "Tampilkan data pesanan yang 'tgl_kirim' nya masih kosong.",
    expectedQuery: "SELECT * FROM pesanan WHERE tgl_kirim IS NULL",
    tabelSkema: {
      tabelKiri: [
        { id: 10, item: "Buku", tgl_pesan: "2024-04-01", tgl_kirim: "2024-04-02" },
        { id: 11, item: "Pena", tgl_pesan: "2024-04-02", tgl_kirim: null },
        { id: 12, item: "Tas", tgl_pesan: "2024-04-02", tgl_kirim: "2024-04-03" },
        { id: 13, item: "Mistar", tgl_pesan: "2024-04-03", tgl_kirim: null },
        { id: 14, item: "Spidol", tgl_pesan: "2024-04-04", tgl_kirim: "2024-04-05" }
      ],
      tabelKanan: []
    },
    hint: "Gunakan WHERE kolom IS NULL."
  },
  {
    id: 1,
    modulId: 2,
    judul: "Membuat Database Baru",
    materi: "Perintah CREATE DATABASE digunakan untuk menciptakan wadah baru bagi tabel-tabel data.",
    instruksi: "Buatlah database baru dengan nama 'toko_online'.",
    expectedQuery: "CREATE DATABASE toko_online",
    tabelSkema: {
      tabelKiri: [], // DDL awal biasanya belum memiliki data tabel
      tabelKanan: []
    },
    hint: "Gunakan CREATE DATABASE nama_db."
  },
  {
    id: 2,
    modulId: 2,
    judul: "Menghapus Database",
    materi: "Perintah DROP DATABASE akan menghapus seluruh database beserta isi tabel di dalamnya secara permanen.",
    instruksi: "Hapus database yang bernama 'test_db'.",
    expectedQuery: "DROP DATABASE test_db",
    tabelSkema: {
      tabelKiri: [],
      tabelKanan: []
    },
    hint: "Gunakan DROP DATABASE nama_db."
  },
  {
    id: 3,
    modulId: 2,
    judul: "Membuat Tabel Sederhana",
    materi: "CREATE TABLE mendefinisikan nama tabel dan kolom-kolom yang ada di dalamnya.",
    instruksi: "Buat tabel 'kategori' dengan kolom id (INT) dan nama_kategori (VARCHAR).",
    expectedQuery: "CREATE TABLE kategori (id INT, nama_kategori VARCHAR(50))",
    tabelSkema: {
      tabelKiri: [
        { nama_kolom: "id", tipe: "INT", primary: "No" },
        { nama_kolom: "nama_kategori", tipe: "VARCHAR", primary: "No" }
      ],
      tabelKanan: []
    },
    hint: "Gunakan CREATE TABLE nama (kolom1 tipe, kolom2 tipe)."
  },
  {
    id: 4,
    modulId: 2,
    judul: "Tabel dengan Primary Key",
    materi: "Primary Key memastikan setiap baris data memiliki identitas unik dan tidak boleh kosong.",
    instruksi: "Buat tabel 'pengguna' dengan kolom id sebagai PRIMARY KEY dan username.",
    expectedQuery: "CREATE TABLE pengguna (id INT PRIMARY KEY, username VARCHAR(30))",
    tabelSkema: {
      tabelKiri: [
        { nama_kolom: "id", tipe: "INT", info: "PRIMARY KEY" },
        { nama_kolom: "username", tipe: "VARCHAR", info: "UNIQUE" }
      ],
      tabelKanan: []
    },
    hint: "Tambahkan PRIMARY KEY setelah tipe data."
  },
  {
    id: 5,
    modulId: 2,
    judul: "Menambah Kolom Baru",
    materi: "ALTER TABLE ... ADD digunakan untuk menambahkan kolom ke tabel yang sudah ada.",
    instruksi: "Tambahkan kolom 'telepon' dengan tipe VARCHAR(15) ke tabel 'pelanggan'.",
    expectedQuery: "ALTER TABLE pelanggan ADD telepon VARCHAR(15)",
    tabelSkema: {
      tabelKiri: [
        { id: 1, nama: "Hizkia", email: "h@mail.com", telepon: "NULL" },
        { id: 2, nama: "Lumban", email: "l@mail.com", telepon: "NULL" }
      ],
      tabelKanan: []
    },
    hint: "ALTER TABLE nama_tabel ADD nama_kolom tipe_data."
  },
  {
    id: 6,
    modulId: 2,
    judul: "Menghapus Kolom",
    materi: "ALTER TABLE ... DROP COLUMN digunakan untuk membuang kolom yang tidak diperlukan.",
    instruksi: "Hapus kolom 'alamat_lama' dari tabel 'karyawan'.",
    expectedQuery: "ALTER TABLE karyawan DROP COLUMN alamat_lama",
    tabelSkema: {
      tabelKiri: [
        { id: 1, nama: "Andi", alamat_baru: "Medan", alamat_lama: "Jakarta" },
        { id: 2, nama: "Budi", alamat_baru: "Bali", alamat_lama: "Bandung" }
      ],
      tabelKanan: []
    },
    hint: "Gunakan DROP COLUMN diikuti nama kolom."
  },
  {
    id: 7,
    modulId: 2,
    judul: "Mengubah Tipe Data Kolom",
    materi: "MODIFY atau ALTER COLUMN digunakan untuk mengubah jenis data pada kolom tertentu.",
    instruksi: "Ubah tipe data kolom 'deskripsi' di tabel 'produk' menjadi TEXT.",
    expectedQuery: "ALTER TABLE produk MODIFY deskripsi TEXT",
    tabelSkema: {
      tabelKiri: [
        { kolom: "nama", tipe: "VARCHAR" },
        { kolom: "deskripsi", tipe: "TEXT" }
      ],
      tabelKanan: []
    },
    hint: "Gunakan MODIFY (di MySQL) atau ALTER COLUMN (di PostgreSQL)."
  },
  {
    id: 8,
    modulId: 2,
    judul: "Mengosongkan Isi Tabel (TRUNCATE)",
    materi: "TRUNCATE menghapus seluruh baris data tanpa menghapus struktur tabelnya.",
    instruksi: "Kosongkan seluruh data pada tabel 'log_sistem'.",
    expectedQuery: "TRUNCATE TABLE log_sistem",
    tabelSkema: {
      tabelKiri: [
        { id: 1, pesan: "Login success", tgl: "2026" },
        { id: 2, pesan: "Update profile", tgl: "2026" }
      ],
      tabelKanan: []
    },
    hint: "TRUNCATE TABLE nama_tabel."
  },
  {
    id: 9,
    modulId: 2,
    judul: "Menghapus Tabel Secara Total",
    materi: "DROP TABLE menghapus data sekaligus struktur tabel dari database.",
    instruksi: "Hapus tabel 'temp_data' dari database.",
    expectedQuery: "DROP TABLE temp_data",
    tabelSkema: {
      tabelKiri: [],
      tabelKanan: []
    },
    hint: "DROP TABLE nama_tabel."
  },
  {
    id: 10,
    modulId: 2,
    judul: "Mengganti Nama Tabel",
    materi: "RENAME digunakan untuk mengubah nama tabel yang sudah ada.",
    instruksi: "Ubah nama tabel 'user' menjadi 'anggota'.",
    expectedQuery: "ALTER TABLE user RENAME TO anggota",
    tabelSkema: {
      tabelKiri: [],
      tabelKanan: []
    },
    hint: "RENAME TO nama_baru."
  },
  {
    id: 11,
    modulId: 2,
    judul: "Menambah Constraint NOT NULL",
    materi: "NOT NULL memastikan kolom tersebut wajib diisi data.",
    instruksi: "Ubah kolom 'email' pada tabel 'admin' agar tidak boleh kosong (NOT NULL).",
    expectedQuery: "ALTER TABLE admin MODIFY email VARCHAR(50) NOT NULL",
    tabelSkema: {
      tabelKiri: [
        { kolom: "email", status: "Wajib Isi" }
      ],
      tabelKanan: []
    },
    hint: "Sebutkan kembali tipe datanya diikuti NOT NULL."
  },
  {
    id: 12,
    modulId: 2,
    judul: "Menambah Nilai Default",
    materi: "DEFAULT memberikan nilai otomatis jika user tidak mengisi kolom tersebut.",
    instruksi: "Atur kolom 'status' di tabel 'pesanan' agar default-nya bernilai 'Pending'.",
    expectedQuery: "ALTER TABLE pesanan ALTER COLUMN status SET DEFAULT 'Pending'",
    tabelSkema: {
      tabelKiri: [
        { id: 1, item: "Buku", status: "Pending" }
      ],
      tabelKanan: []
    },
    hint: "Gunakan SET DEFAULT (PostgreSQL) atau ALTER COLUMN DEFAULT (MySQL)."
  },
  {
    id: 13,
    modulId: 2,
    judul: "Membuat Tabel dengan Auto Increment",
    materi: "AUTO_INCREMENT membuat angka ID bertambah otomatis secara berurutan.",
    instruksi: "Buat tabel 'siswa' dengan 'id' INT yang AUTO_INCREMENT dan PRIMARY KEY.",
    expectedQuery: "CREATE TABLE siswa (id INT AUTO_INCREMENT PRIMARY KEY, nama VARCHAR(50))",
    tabelSkema: {
      tabelKiri: [
        { id: 1, nama: "Andi" },
        { id: 2, nama: "Budi" }
      ],
      tabelKanan: []
    },
    hint: "Gunakan keyword AUTO_INCREMENT."
  },
  {
    id: 14,
    modulId: 2,
    judul: "Membuat Foreign Key (Hubungan Tabel)",
    materi: "Foreign Key menghubungkan satu tabel dengan tabel lainnya.",
    instruksi: "Buat tabel 'order' dengan kolom 'user_id' yang merujuk ke tabel 'users(id)'.",
    expectedQuery: "CREATE TABLE order (id INT, user_id INT, FOREIGN KEY (user_id) REFERENCES users(id))",
    tabelSkema: {
      tabelKiri: [ { id_order: 1, user_id: 101 } ],
      tabelKanan: [ { id_user: 101, nama: "Hizkia" } ]
    },
    hint: "FOREIGN KEY (kolom) REFERENCES tabel_induk(kolom_induk)."
  },
  {
    id: 15,
    modulId: 2,
    judul: "Menghapus Constraint",
    materi: "Constraint seperti Foreign Key bisa dihapus tanpa menghapus kolomnya.",
    instruksi: "Hapus foreign key 'fk_kategori' dari tabel 'produk'.",
    expectedQuery: "ALTER TABLE produk DROP FOREIGN KEY fk_kategori",
    tabelSkema: {
      tabelKiri: [],
      tabelKanan: []
    },
    hint: "Gunakan DROP FOREIGN KEY nama_constraint."
  },
  {
    id: 16,
    modulId: 2,
    judul: "Membuat Unique Constraint",
    materi: "UNIQUE memastikan tidak ada data ganda dalam satu kolom (misal: Email).",
    instruksi: "Buat tabel 'akun' dengan kolom 'email' yang harus unik.",
    expectedQuery: "CREATE TABLE akun (id INT, email VARCHAR(50) UNIQUE)",
    tabelSkema: {
      tabelKiri: [
        { id: 1, email: "a@mail.com" },
        { id: 2, email: "b@mail.com" }
      ],
      tabelKanan: []
    },
    hint: "Tambahkan UNIQUE setelah tipe data."
  },
  {
    id: 17,
    modulId: 2,
    judul: "Mengubah Nama Kolom",
    materi: "RENAME COLUMN digunakan untuk mengganti nama field yang sudah ada.",
    instruksi: "Ubah nama kolom 'kontak' menjadi 'whatsapp' pada tabel 'supplier'.",
    expectedQuery: "ALTER TABLE supplier RENAME COLUMN kontak TO whatsapp",
    tabelSkema: {
      tabelKiri: [
        { id: 1, whatsapp: "0812..." }
      ],
      tabelKanan: []
    },
    hint: "ALTER TABLE ... RENAME COLUMN lama TO baru."
  },
  {
    id: 18,
    modulId: 2,
    judul: "Check Constraint",
    materi: "CHECK memastikan data yang masuk memenuhi syarat logika tertentu.",
    instruksi: "Buat tabel 'tabungan' dengan kolom 'saldo' yang harus >= 0.",
    expectedQuery: "CREATE TABLE tabungan (id INT, saldo INT CHECK (saldo >= 0))",
    tabelSkema: {
      tabelKiri: [
        { id: 1, saldo: 50000 }
      ],
      tabelKanan: []
    },
    hint: "Gunakan CHECK (kondisi)."
  },
  {
    id: 19,
    modulId: 2,
    judul: "Membuat Index",
    materi: "INDEX digunakan untuk mempercepat proses pencarian data pada kolom tertentu.",
    instruksi: "Buat index bernama 'idx_nama' untuk kolom 'nama' di tabel 'karyawan'.",
    expectedQuery: "CREATE INDEX idx_nama ON karyawan (nama)",
    tabelSkema: {
      tabelKiri: [],
      tabelKanan: []
    },
    hint: "CREATE INDEX nama_index ON tabel(kolom)."
  },
  {
    id: 20,
    modulId: 2,
    judul: "Menghapus Index",
    materi: "Jika index tidak lagi dibutuhkan, kita bisa menghapusnya untuk menghemat memori.",
    instruksi: "Hapus index 'idx_nama' dari tabel 'karyawan'.",
    expectedQuery: "DROP INDEX idx_nama ON karyawan",
    tabelSkema: {
      tabelKiri: [],
      tabelKanan: []
    },
    hint: "Gunakan DROP INDEX."
  },
  {
    id: 1,
    modulId: 3,
    judul: "Menambah Data Baru (Satu Baris)",
    materi: "INSERT INTO digunakan untuk memasukkan data baru ke dalam tabel.",
    instruksi: "Masukkan data produk baru: id=6, nama='Lampu', harga=25000, stok=10.",
    expectedQuery: "INSERT INTO produk (id, nama, harga, stok) VALUES (6, 'Lampu', 25000, 10)",
    tabelSkema: {
      tabelKiri: [
        { id: 1, nama: "Meja", harga: 150000, stok: 5 },
        { id: 2, nama: "Kursi", harga: 85000, stok: 12 },
        { id: 3, nama: "Pena", harga: 5000, stok: 100 },
        { id: 4, nama: "Buku", harga: 15000, stok: 50 },
        { id: 5, nama: "Tas", harga: 120000, stok: 8 }
      ],
      tabelKanan: []
    },
    hint: "INSERT INTO nama_tabel (kolom) VALUES (nilai)."
  },
  {
    id: 2,
    modulId: 3,
    judul: "Menambah Data Tanpa Nama Kolom",
    materi: "Jika kita mengisi semua kolom sesuai urutan, kita tidak perlu menuliskan nama kolomnya.",
    instruksi: "Masukkan data ke tabel 'kategori' dengan nilai 4 dan 'Elektronik'.",
    expectedQuery: "INSERT INTO kategori VALUES (4, 'Elektronik')",
    tabelSkema: {
      tabelKiri: [
        { id: 1, nama_kategori: "Makanan" },
        { id: 2, nama_kategori: "Minuman" },
        { id: 3, nama_kategori: "Pakaian" },
        { id: 4, nama_kategori: "NULL" },
        { id: 5, nama_kategori: "NULL" }
      ],
      tabelKanan: []
    },
    hint: "INSERT INTO nama_tabel VALUES (nilai1, nilai2)."
  },
  {
    id: 3,
    modulId: 3,
    judul: "Menambah Banyak Data Sekaligus",
    materi: "Kita bisa memasukkan beberapa baris data dalam satu perintah dengan memisahkannya menggunakan koma.",
    instruksi: "Masukkan dua user baru: ('Hizkia', 'Medan') dan ('Cristian', 'Jakarta').",
    expectedQuery: "INSERT INTO user (nama, kota) VALUES ('Hizkia', 'Medan'), ('Cristian', 'Jakarta')",
    tabelSkema: {
      tabelKiri: [
        { id: 1, nama: "Andi", kota: "Bali" },
        { id: 2, nama: "Budi", kota: "Solo" },
        { id: 3, nama: "Santi", kota: "Aceh" },
        { id: 4, nama: "NULL", kota: "NULL" },
        { id: 5, nama: "NULL", kota: "NULL" }
      ],
      tabelKanan: []
    },
    hint: "Gunakan VALUES (data1), (data2)."
  },
  {
    id: 4,
    modulId: 3,
    judul: "Memperbarui Data (Satu Kolom)",
    materi: "UPDATE digunakan untuk mengubah data yang sudah ada. Gunakan WHERE agar tidak semua data berubah.",
    instruksi: "Ubah harga produk dengan id 3 menjadi 7000.",
    expectedQuery: "UPDATE produk SET harga = 7000 WHERE id = 3",
    tabelSkema: {
      tabelKiri: [
        { id: 1, nama: "Pena", harga: 5000 },
        { id: 2, nama: "Pensil", harga: 3000 },
        { id: 3, nama: "Spidol", harga: 7000 },
        { id: 4, nama: "Buku", harga: 15000 },
        { id: 5, nama: "Mistar", harga: 8000 }
      ],
      tabelKanan: []
    },
    hint: "UPDATE tabel SET kolom = nilai WHERE kondisi."
  },
  {
    id: 5,
    modulId: 3,
    judul: "Memperbarui Banyak Kolom",
    materi: "Kita bisa mengubah beberapa kolom sekaligus dengan memisahkannya menggunakan koma setelah SET.",
    instruksi: "Ubah nama menjadi 'Hizkia' dan status menjadi 'Aktif' untuk id 101.",
    expectedQuery: "UPDATE anggota SET nama = 'Hizkia', status = 'Aktif' WHERE id = 101",
    tabelSkema: {
      tabelKiri: [
        { id: 101, nama: "Hizkia", status: "Aktif" },
        { id: 102, nama: "Budi", status: "Pasif" },
        { id: 103, nama: "Siti", status: "Aktif" },
        { id: 104, nama: "Lusi", status: "Pasif" },
        { id: 105, nama: "Andi", status: "Aktif" }
      ],
      tabelKanan: []
    },
    hint: "SET kolom1 = v1, kolom2 = v2."
  },
  {
    id: 6,
    modulId: 3,
    judul: "Menghapus Baris Tertentu",
    materi: "DELETE FROM digunakan untuk menghapus baris data berdasarkan kondisi tertentu.",
    instruksi: "Hapus data pelanggan yang memiliki id 5.",
    expectedQuery: "DELETE FROM pelanggan WHERE id = 5",
    tabelSkema: {
      tabelKiri: [
        { id: 1, nama: "User A" },
        { id: 2, nama: "User B" },
        { id: 3, nama: "User C" },
        { id: 4, nama: "User D" },
        { id: 5, nama: "Dihapus" }
      ],
      tabelKanan: []
    },
    hint: "DELETE FROM nama_tabel WHERE kondisi."
  },
  {
    id: 7,
    modulId: 3,
    judul: "Update Data dengan Perhitungan",
    materi: "Kita bisa menggunakan nilai kolom itu sendiri untuk melakukan update (misal: menaikkan harga).",
    instruksi: "Naikkan semua stok barang sebanyak 10.",
    expectedQuery: "UPDATE barang SET stok = stok + 10",
    tabelSkema: {
      tabelKiri: [
        { id: 1, nama: "A", stok: 20 },
        { id: 2, nama: "B", stok: 25 },
        { id: 3, nama: "C", stok: 15 },
        { id: 4, nama: "D", stok: 30 },
        { id: 5, nama: "E", stok: 10 }
      ],
      tabelKanan: []
    },
    hint: "SET stok = stok + 10."
  },
  {
    id: 8,
    modulId: 3,
    judul: "Menghapus Data dengan Syarat Teks",
    materi: "DELETE juga bisa menggunakan filter teks atau pola.",
    instruksi: "Hapus semua pesanan yang statusnya 'Batal'.",
    expectedQuery: "DELETE FROM pesanan WHERE status = 'Batal'",
    tabelSkema: {
      tabelKiri: [
        { id: 1, item: "Laptop", status: "Proses" },
        { id: 2, item: "Mouse", status: "Batal" },
        { id: 3, item: "Keyboard", status: "Selesai" },
        { id: 4, item: "Monitor", status: "Batal" },
        { id: 5, item: "Webcam", status: "Proses" }
      ],
      tabelKanan: []
    },
    hint: "Gunakan WHERE status = 'Batal'."
  },
  {
    id: 9,
    modulId: 3,
    judul: "Update Data Berdasarkan Range",
    materi: "Gunakan operator perbandingan dalam WHERE untuk memperbarui banyak baris sekaligus.",
    instruksi: "Ubah diskon menjadi 20 untuk produk yang harganya di atas 100000.",
    expectedQuery: "UPDATE produk SET diskon = 20 WHERE harga > 100000",
    tabelSkema: {
      tabelKiri: [
        { id: 1, nama: "A", harga: 150000, diskon: 20 },
        { id: 2, nama: "B", harga: 50000, diskon: 0 },
        { id: 3, nama: "C", harga: 200000, diskon: 20 },
        { id: 4, nama: "D", harga: 80000, diskon: 0 },
        { id: 5, nama: "E", harga: 120000, diskon: 20 }
      ],
      tabelKanan: []
    },
    hint: "Gunakan WHERE harga > 100000."
  },
  {
    id: 10,
    modulId: 3,
    judul: "Menambah Data dengan NULL",
    materi: "Jika suatu kolom bersifat opsional, kita bisa mengisi nilainya dengan NULL.",
    instruksi: "Masukkan karyawan baru: nama='Siahaan', jabatan='Intern', gaji=NULL.",
    expectedQuery: "INSERT INTO karyawan (nama, jabatan, gaji) VALUES ('Siahaan', 'Intern', NULL)",
    tabelSkema: {
      tabelKiri: [
        { id: 1, nama: "Siahaan", jabatan: "Intern", gaji: "NULL" },
        { id: 2, nama: "Andi", jabatan: "Staff", gaji: 5000000 }
      ],
      tabelKanan: []
    },
    hint: "Tulis NULL tanpa tanda petik."
  },
  {
    id: 11,
    modulId: 3,
    judul: "Copy Data dari Tabel Lain",
    materi: "INSERT INTO ... SELECT digunakan untuk menyalin data dari satu tabel ke tabel lain.",
    instruksi: "Masukkan semua nama dari tabel 'pelanggan' ke tabel 'arsip_nama'.",
    expectedQuery: "INSERT INTO arsip_nama (nama) SELECT nama FROM pelanggan",
    tabelSkema: {
      tabelKiri: [ { id: 1, nama: "Hizkia" }, { id: 2, nama: "Cristian" } ],
      tabelKanan: [ { nama: "Hizkia" }, { nama: "Cristian" } ]
    },
    hint: "Gunakan INSERT INTO ... SELECT."
  },
  {
    id: 12,
    modulId: 3,
    judul: "Update Menggunakan Kondisi OR",
    materi: "Gunakan OR untuk memperbarui baris yang memenuhi salah satu syarat.",
    instruksi: "Set stok menjadi 0 untuk barang bermerk 'Lama' atau 'Rusak'.",
    expectedQuery: "UPDATE barang SET stok = 0 WHERE merk = 'Lama' OR merk = 'Rusak'",
    tabelSkema: {
      tabelKiri: [
        { id: 1, merk: "Lama", stok: 0 },
        { id: 2, merk: "Baru", stok: 50 },
        { id: 3, merk: "Rusak", stok: 0 },
        { id: 4, merk: "Baru", stok: 40 },
        { id: 5, merk: "Lama", stok: 0 }
      ],
      tabelKanan: []
    },
    hint: "Gunakan operator OR."
  },
  {
    id: 13,
    modulId: 3,
    judul: "Delete Menggunakan Kondisi AND",
    materi: "Gunakan AND untuk menghapus baris yang harus memenuhi semua syarat.",
    instruksi: "Hapus data stok yang lokasinya di 'Gudang B' dan jumlahnya 0.",
    expectedQuery: "DELETE FROM stok WHERE lokasi = 'Gudang B' AND jumlah = 0",
    tabelSkema: {
      tabelKiri: [
        { id: 1, lokasi: "Gudang B", jumlah: 0 },
        { id: 2, lokasi: "Gudang A", jumlah: 0 },
        { id: 3, lokasi: "Gudang B", jumlah: 10 }
      ],
      tabelKanan: []
    },
    hint: "Gunakan operator AND."
  },
  {
    id: 14,
    modulId: 3,
    judul: "Update Kolom dengan String Baru",
    materi: "Memperbarui teks pada kolom tertentu.",
    instruksi: "Ganti semua jabatan 'Admin' menjadi 'Operations'.",
    expectedQuery: "UPDATE staff SET jabatan = 'Operations' WHERE jabatan = 'Admin'",
    tabelSkema: {
      tabelKiri: [
        { id: 1, nama: "Ani", jabatan: "Operations" },
        { id: 2, nama: "Budi", jabatan: "Staff" }
      ],
      tabelKanan: []
    },
    hint: "Gunakan SET jabatan = 'Operations'."
  },
  {
    id: 15,
    modulId: 3,
    judul: "Insert dengan Tanggal",
    materi: "Format tanggal standar SQL adalah 'YYYY-MM-DD'.",
    instruksi: "Masukkan event baru: nama='Rapat', tgl='2026-04-15'.",
    expectedQuery: "INSERT INTO event (nama, tgl) VALUES ('Rapat', '2026-04-15')",
    tabelSkema: {
      tabelKiri: [
        { id: 1, nama: "Rapat", tgl: "2026-04-15" }
      ],
      tabelKanan: []
    },
    hint: "Gunakan tanda petik untuk tanggal."
  },
  {
    id: 16,
    modulId: 3,
    judul: "Update Data yang Kosong (IS NULL)",
    materi: "Kita bisa mengisi data pada kolom yang sebelumnya NULL.",
    instruksi: "Ubah keterangan menjadi 'Tersedia' bagi produk yang keterangannya NULL.",
    expectedQuery: "UPDATE produk SET keterangan = 'Tersedia' WHERE keterangan IS NULL",
    tabelSkema: {
      tabelKiri: [
        { id: 1, nama: "A", keterangan: "Tersedia" },
        { id: 2, nama: "B", keterangan: "Tersedia" }
      ],
      tabelKanan: []
    },
    hint: "Gunakan WHERE kolom IS NULL."
  },
  {
    id: 17,
    modulId: 3,
    judul: "Menghapus Semua Data Tabel",
    materi: "DELETE FROM tanpa WHERE akan menghapus seluruh isi tabel namun menyisakan strukturnya.",
    instruksi: "Hapus semua baris data dari tabel 'temporary_logs'.",
    expectedQuery: "DELETE FROM temporary_logs",
    tabelSkema: {
      tabelKiri: [
        { id: 1, log: "data 1" },
        { id: 2, log: "data 2" }
      ],
      tabelKanan: []
    },
    hint: "Jangan gunakan klausa WHERE."
  },
  {
    id: 18,
    modulId: 3,
    judul: "Update Data Berdasarkan List (IN)",
    materi: "Memperbarui baris yang nilainya ada dalam daftar tertentu.",
    instruksi: "Ubah status menjadi 'Prioritas' untuk id 1, 3, dan 5.",
    expectedQuery: "UPDATE tugas SET status = 'Prioritas' WHERE id IN (1, 3, 5)",
    tabelSkema: {
      tabelKiri: [
        { id: 1, status: "Prioritas" },
        { id: 2, status: "Biasa" },
        { id: 3, status: "Prioritas" }
      ],
      tabelKanan: []
    },
    hint: "Gunakan WHERE id IN (1, 3, 5)."
  },
  {
    id: 19,
    modulId: 3,
    judul: "Insert Menggunakan Fungsi Now()",
    materi: "Fungsi NOW() atau CURRENT_DATE sering digunakan untuk mengisi waktu otomatis.",
    instruksi: "Masukkan log: user='Hizkia', aksi='Login', waktu=NOW().",
    expectedQuery: "INSERT INTO logs (user, aksi, waktu) VALUES ('Hizkia', 'Login', NOW())",
    tabelSkema: {
      tabelKiri: [
        { user: "Hizkia", aksi: "Login", waktu: "2026-04-14 21:40" }
      ],
      tabelKanan: []
    },
    hint: "Gunakan fungsi NOW() tanpa tanda petik."
  },
  {
    id: 20,
    modulId: 3,
    judul: "Update dengan Subquery Sederhana",
    materi: "Kita bisa memperbarui data berdasarkan hasil dari query lain.",
    instruksi: "Ubah harga produk menjadi 0 untuk produk yang ada di tabel 'barang_rusak'.",
    expectedQuery: "UPDATE produk SET harga = 0 WHERE nama IN (SELECT nama FROM barang_rusak)",
    tabelSkema: {
      tabelKiri: [ { nama: "Barang A", harga: 0 } ],
      tabelKanan: [ { nama: "Barang A" } ]
    },
    hint: "Gunakan WHERE kolom IN (SELECT ...)."
  },
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
    expectedQuery: "SELECT * FROM pengiriman WHERE status = 'Proses' AND berat > 5",
    tabelSkema: [
      { id: 1, resi: "RX001", status: "Proses", berat: 10, kota: "Medan" },
      { id: 2, resi: "RX002", status: "Selesai", berat: 2, kota: "Jakarta" },
      { id: 3, resi: "RX003", status: "Proses", berat: 3, kota: "Bandung" },
      { id: 4, resi: "RX004", status: "Proses", berat: 8, kota: "Surabaya" },
      { id: 5, resi: "RX005", status: "Pending", berat: 15, kota: "Medan" }
    ],
    hint: "Gunakan: WHERE status = 'Proses' AND berat > 5"
  },
  {
    id: 2,
    modulId: 5,
    judul: "Mengurutkan Berdasarkan Tanggal",
    materi: "ORDER BY sangat krusial untuk data kronologis seperti log pengiriman.",
    instruksi: "Tampilkan semua data pengiriman, urutkan berdasarkan 'tgl_kirim' dari yang paling terbaru.",
    expectedQuery: "SELECT * FROM pengiriman ORDER BY tgl_kirim DESC",
    tabelSkema: [
      { id: 1, resi: "RX001", tgl_kirim: "2023-10-01", kurir: "Andi", biaya: 15000 },
      { id: 2, resi: "RX002", tgl_kirim: "2023-10-05", kurir: "Budi", biaya: 20000 },
      { id: 3, resi: "RX003", tgl_kirim: "2023-10-02", kurir: "Caca", biaya: 12000 },
      { id: 4, resi: "RX004", tgl_kirim: "2023-10-08", kurir: "Andi", biaya: 25000 },
      { id: 5, resi: "RX005", tgl_kirim: "2023-10-07", kurir: "Dedi", biaya: 18000 }
    ],
    hint: "Gunakan: ORDER BY tgl_kirim DESC"
  },
  {
    id: 3,
    modulId: 5,
    judul: "Pengelompokan Data (GROUP BY)",
    materi: "GROUP BY digunakan untuk meringkas baris data yang memiliki nilai yang sama ke dalam satu ringkasan.",
    instruksi: "Tampilkan kolom 'kota_tujuan' dan hitung jumlah pengiriman ke setiap kota tersebut.",
    expectedQuery: "SELECT kota_tujuan, COUNT(*) FROM pengiriman GROUP BY kota_tujuan",
    tabelSkema: [
      { id: 1, kota_tujuan: "Jakarta", layanan: "Reguler", berat: 2, ongkir: 18000 },
      { id: 2, kota_tujuan: "Bandung", layanan: "Express", berat: 1, ongkir: 25000 },
      { id: 3, kota_tujuan: "Jakarta", layanan: "Sameday", berat: 3, ongkir: 45000 },
      { id: 4, kota_tujuan: "Surabaya", layanan: "Reguler", berat: 5, ongkir: 35000 },
      { id: 5, kota_tujuan: "Jakarta", layanan: "Reguler", berat: 1, ongkir: 18000 }
    ],
    hint: "Gunakan: SELECT kota_tujuan, COUNT(*) GROUP BY kota_tujuan"
  },
  {
    id: 4,
    modulId: 5,
    judul: "Filter Hasil Agregasi (HAVING)",
    materi: "Jika WHERE memfilter baris sebelum dikelompokkan, HAVING memfilter hasil setelah data dikelompokkan.",
    instruksi: "Tampilkan 'kota_tujuan' yang memiliki jumlah pengiriman lebih dari 1 paket.",
    expectedQuery: "SELECT kota_tujuan, COUNT(*) FROM pengiriman GROUP BY kota_tujuan HAVING COUNT(*) > 1",
    tabelSkema: [
      { id: 1, kota_tujuan: "Jakarta", resi: "RX1", berat: 2, tgl: "2024-01-01" },
      { id: 2, kota_tujuan: "Bandung", resi: "RX2", berat: 1, tgl: "2024-01-02" },
      { id: 3, kota_tujuan: "Jakarta", resi: "RX3", berat: 5, tgl: "2024-01-02" },
      { id: 4, kota_tujuan: "Medan", resi: "RX4", berat: 3, tgl: "2024-01-03" },
      { id: 5, kota_tujuan: "Surabaya", resi: "RX5", berat: 4, tgl: "2024-01-03" }
    ],
    hint: "Gunakan: GROUP BY kota_tujuan HAVING COUNT(*) > 1"
  },
  {
    id: 5,
    modulId: 5,
    judul: "Kombinasi WHERE dan GROUP BY",
    materi: "Kita bisa memfilter data mentah dulu sebelum melakukan pengelompokan.",
    instruksi: "Hitung jumlah pengiriman untuk setiap 'kota_tujuan', tetapi hanya untuk paket yang statusnya 'Selesai'.",
    expectedQuery: "SELECT kota_tujuan, COUNT(*) FROM pengiriman WHERE status = 'Selesai' GROUP BY kota_tujuan",
    tabelSkema: [
      { id: 1, kota_tujuan: "Surabaya", status: "Selesai", kurir: "Andi", berat: 2 },
      { id: 2, kota_tujuan: "Surabaya", status: "Proses", kurir: "Budi", berat: 1 },
      { id: 3, kota_tujuan: "Jakarta", status: "Selesai", kurir: "Caca", berat: 5 },
      { id: 4, kota_tujuan: "Jakarta", status: "Selesai", kurir: "Andi", berat: 3 },
      { id: 5, kota_tujuan: "Bandung", status: "Batal", kurir: "Dedi", berat: 2 }
    ],
    hint: "Gunakan WHERE status = 'Selesai' sebelum GROUP BY."
  },

  // --- KAFE / PENJUALAN (ID 6 - 10) ---
  {
    id: 6,
    modulId: 5,
    judul: "Mencari Nilai Tertinggi per Kategori",
    materi: "Mencari harga maksimal membantu menentukan produk premium di setiap kategori.",
    instruksi: "Tampilkan 'kategori_menu' dan harga termahal (MAX) dari masing-masing kategori tersebut.",
    expectedQuery: "SELECT kategori_menu, MAX(harga) FROM penjualan_cafe GROUP BY kategori_menu",
    tabelSkema: [
      { id: 1, nama_menu: "Kopi Susu", kategori_menu: "Minuman", harga: 20000, stok: 50 },
      { id: 2, nama_menu: "Espresso", kategori_menu: "Minuman", harga: 25000, stok: 30 },
      { id: 3, nama_menu: "Brownies", kategori_menu: "Makanan", harga: 15000, stok: 20 },
      { id: 4, nama_menu: "Croissant", kategori_menu: "Makanan", harga: 22000, stok: 15 },
      { id: 5, nama_menu: "Latte", kategori_menu: "Minuman", harga: 28000, stok: 25 }
    ],
    hint: "Gunakan: SELECT kategori_menu, MAX(harga) GROUP BY kategori_menu"
  },
  {
    id: 7,
    modulId: 5,
    judul: "Menjumlahkan Pendapatan (SUM)",
    materi: "Fungsi SUM menjumlahkan nilai numerik dalam satu kelompok.",
    instruksi: "Tampilkan 'metode_bayar' dan total uang yang diterima (SUM) dari masing-masing metode tersebut.",
    expectedQuery: "SELECT metode_bayar, SUM(total_bayar) FROM penjualan GROUP BY metode_bayar",
    tabelSkema: [
      { id: 1, metode_bayar: "Tunai", total_bayar: 50000, kasir: "Ani", tgl: "2024-02-01" },
      { id: 2, metode_bayar: "QRIS", total_bayar: 75000, kasir: "Budi", tgl: "2024-02-01" },
      { id: 3, metode_bayar: "Tunai", total_bayar: 20000, kasir: "Ani", tgl: "2024-02-02" },
      { id: 4, metode_bayar: "Debit", total_bayar: 150000, kasir: "Budi", tgl: "2024-02-02" },
      { id: 5, metode_bayar: "QRIS", total_bayar: 45000, kasir: "Ani", tgl: "2024-02-02" }
    ],
    hint: "Gunakan: SELECT metode_bayar, SUM(total_bayar) GROUP BY metode_bayar"
  },
  {
    id: 8,
    modulId: 5,
    judul: "Rata-rata Penjualan (AVG)",
    materi: "AVG digunakan untuk mencari nilai tengah atau rata-rata harga.",
    instruksi: "Tampilkan rata-rata harga menu untuk kategori 'Minuman'.",
    expectedQuery: "SELECT AVG(harga) FROM menu WHERE kategori_menu = 'Minuman'",
    tabelSkema: [
      { id: 1, nama_menu: "Tea", kategori_menu: "Minuman", harga: 10000, tipe: "Dingin" },
      { id: 2, nama_menu: "Coffee", kategori_menu: "Minuman", harga: 30000, tipe: "Panas" },
      { id: 3, nama_menu: "Cake", kategori_menu: "Makanan", harga: 25000, tipe: "Manis" },
      { id: 4, nama_menu: "Soda", kategori_menu: "Minuman", harga: 15000, tipe: "Dingin" },
      { id: 5, nama_menu: "Juice", kategori_menu: "Minuman", harga: 25000, tipe: "Dingin" }
    ],
    hint: "Gunakan WHERE kategori_menu = 'Minuman' dan fungsi AVG"
  },
  {
    id: 9,
    modulId: 5,
    judul: "Filter Having dengan Agregasi Berbeda",
    materi: "HAVING bisa memfilter kategori berdasarkan total omzet yang besar.",
    instruksi: "Tampilkan 'kategori_menu' yang memiliki total pendapatan (SUM) di atas 100.000.",
    expectedQuery: "SELECT kategori_menu FROM penjualan GROUP BY kategori_menu HAVING SUM(total_bayar) > 100000",
    tabelSkema: [
      { id: 1, kategori_menu: "Makanan", total_bayar: 120000, qty: 5, tgl: "2024-03-01" },
      { id: 2, kategori_menu: "Minuman", total_bayar: 80000, qty: 10, tgl: "2024-03-01" },
      { id: 3, kategori_menu: "Snack", total_bayar: 30000, qty: 3, tgl: "2024-03-02" },
      { id: 4, kategori_menu: "Makanan", total_bayar: 50000, qty: 2, tgl: "2024-03-02" },
      { id: 5, kategori_menu: "Minuman", total_bayar: 40000, qty: 4, tgl: "2024-03-02" }
    ],
    hint: "GROUP BY kategori_menu HAVING SUM(total_bayar) > 100000"
  },
  {
    id: 10,
    modulId: 5,
    judul: "Urutan Lengkap Klausa SQL",
    materi: "Struktur: SELECT -> FROM -> WHERE -> GROUP BY -> HAVING -> ORDER BY.",
    instruksi: "Tampilkan 'kategori_menu' dan total pendapatan per kategori, urutkan dari pendapatan terbesar, hanya untuk kategori yang total pendapatannya > 50.000.",
    expectedQuery: "SELECT kategori_menu, SUM(total_bayar) FROM penjualan GROUP BY kategori_menu HAVING SUM(total_bayar) > 50000 ORDER BY SUM(total_bayar) DESC",
    tabelSkema: [
      { id: 1, kategori_menu: "Snack", total_bayar: 60000, kasir: "Ani", shift: "Pagi" },
      { id: 2, kategori_menu: "Minuman", total_bayar: 200000, kasir: "Budi", shift: "Sore" },
      { id: 3, kategori_menu: "Makanan", total_bayar: 150000, kasir: "Ani", shift: "Sore" },
      { id: 4, kategori_menu: "Snack", total_bayar: 10000, kasir: "Budi", shift: "Pagi" },
      { id: 5, kategori_menu: "Minuman", total_bayar: 45000, kasir: "Ani", shift: "Pagi" }
    ],
    hint: "Gunakan urutan GROUP BY, lalu HAVING, lalu ORDER BY"
  },

  // --- HOTEL / PROPERTI (ID 11 - 15) ---
  {
    id: 11,
    modulId: 5,
    judul: "Filter Kamar Tersedia",
    materi: "Filter properti berdasarkan ketersediaan dan budget tamu.",
    instruksi: "Tampilkan 'nama_kamar' dan 'harga_per_malam' yang statusnya 'Tersedia' dan harganya di bawah 500.000.",
    expectedQuery: "SELECT nama_kamar, harga_per_malam FROM kamar WHERE status = 'Tersedia' AND harga_per_malam < 500000",
    tabelSkema: [
      { id: 1, nama_kamar: "Suite Mewah", status: "Tersedia", harga_per_malam: 450000, tipe: "VIP" },
      { id: 2, nama_kamar: "Standard 01", status: "Terisi", harga_per_malam: 300000, tipe: "Reguler" },
      { id: 3, nama_kamar: "Economy 05", status: "Tersedia", harga_per_malam: 250000, tipe: "Budget" },
      { id: 4, nama_kamar: "Suite 02", status: "Tersedia", harga_per_malam: 750000, tipe: "VIP" },
      { id: 5, nama_kamar: "Standard 02", status: "Tersedia", harga_per_malam: 350000, tipe: "Reguler" }
    ],
    hint: "WHERE status = 'Tersedia' AND harga_per_malam < 500000"
  },
  {
    id: 12,
    modulId: 5,
    judul: "Urutan Properti Termahal",
    materi: "Gunakan ORDER BY untuk menyortir dari harga tertinggi ke terendah.",
    instruksi: "Tampilkan semua kolom dari tabel 'kamar', urutkan berdasarkan 'harga_per_malam' dari yang tertinggi.",
    expectedQuery: "SELECT * FROM kamar ORDER BY harga_per_malam DESC",
    tabelSkema: [
      { id: 1, nama_kamar: "Penthouse", harga_per_malam: 2000000, lantai: 10, view: "Laut" },
      { id: 2, nama_kamar: "Studio", harga_per_malam: 400000, lantai: 2, view: "Kota" },
      { id: 3, nama_kamar: "Deluxe", harga_per_malam: 850000, lantai: 5, view: "Taman" },
      { id: 4, nama_kamar: "Superior", harga_per_malam: 600000, lantai: 3, view: "Kota" },
      { id: 5, nama_kamar: "Villa", harga_per_malam: 3500000, lantai: 1, view: "Pantai" }
    ],
    hint: "Gunakan ORDER BY harga_per_malam DESC"
  },
  {
    id: 13,
    modulId: 5,
    judul: "Menghitung Kamar per Tipe",
    materi: "Menganalisis komposisi aset properti yang dimiliki.",
    instruksi: "Tampilkan 'tipe_kamar' dan hitung jumlah unit (COUNT) untuk setiap tipe tersebut.",
    expectedQuery: "SELECT tipe_kamar, COUNT(*) FROM kamar GROUP BY tipe_kamar",
    tabelSkema: [
      { id: 1, tipe_kamar: "Single", nama_kamar: "A1", status: "Tersedia", ac: "Ya" },
      { id: 2, tipe_kamar: "Double", nama_kamar: "B1", status: "Terisi", ac: "Ya" },
      { id: 3, tipe_kamar: "Single", nama_kamar: "A2", status: "Tersedia", ac: "Tidak" },
      { id: 4, tipe_kamar: "Suite", nama_kamar: "C1", status: "Tersedia", ac: "Ya" },
      { id: 5, tipe_kamar: "Double", nama_kamar: "B2", status: "Tersedia", ac: "Ya" }
    ],
    hint: "Gunakan GROUP BY tipe_kamar"
  },
  {
    id: 14,
    modulId: 5,
    judul: "Rata-rata Harga per Lokasi",
    materi: "Analisis harga pasar untuk menentukan strategi promosi.",
    instruksi: "Tampilkan 'lokasi' dan rata-rata (AVG) harga kamar di setiap lokasi tersebut.",
    expectedQuery: "SELECT lokasi, AVG(harga_per_malam) FROM kamar GROUP BY lokasi",
    tabelSkema: [
      { id: 1, lokasi: "Bali", harga_per_malam: 1000000, rating: 4.5, wifi: "Ya" },
      { id: 2, lokasi: "Jakarta", harga_per_malam: 800000, rating: 4.2, wifi: "Ya" },
      { id: 3, lokasi: "Bali", harga_per_malam: 1200000, rating: 4.8, wifi: "Ya" },
      { id: 4, lokasi: "Bandung", harga_per_malam: 500000, rating: 4.0, wifi: "Ya" },
      { id: 5, lokasi: "Jakarta", harga_per_malam: 900000, rating: 4.4, wifi: "Ya" }
    ],
    hint: "Gunakan SELECT lokasi, AVG(harga_per_malam) GROUP BY lokasi"
  },
  {
    id: 15,
    modulId: 5,
    judul: "Lokasi dengan Properti Banyak",
    materi: "HAVING memfilter lokasi yang memiliki lebih dari satu properti aktif.",
    instruksi: "Tampilkan 'lokasi' yang memiliki total unit (COUNT) lebih dari 1 kamar.",
    expectedQuery: "SELECT lokasi, COUNT(*) FROM properti GROUP BY lokasi HAVING COUNT(*) > 1",
    tabelSkema: [
      { id: 1, lokasi: "Yogyakarta", resi: "K-01", status: "Aktif", pemilik: "Hizkia" },
      { id: 2, lokasi: "Medan", resi: "K-02", status: "Aktif", pemilik: "Hizkia" },
      { id: 3, lokasi: "Yogyakarta", resi: "K-03", status: "Pasif", pemilik: "Cristian" },
      { id: 4, lokasi: "Bali", resi: "K-04", status: "Aktif", pemilik: "Siahaan" },
      { id: 5, lokasi: "Medan", resi: "K-05", status: "Aktif", pemilik: "Hizkia" }
    ],
    hint: "GROUP BY lokasi HAVING COUNT(*) > 1"
  },

  // --- RESERVASI (ID 16 - 20) ---
  {
    id: 16,
    modulId: 5,
    judul: "Total Pendapatan Tamu Tertentu",
    materi: "Menghitung kontribusi tamu loyal terhadap pendapatan hotel.",
    instruksi: "Hitung total pembayaran (SUM) dari 'tamu_id' bernilai 101.",
    expectedQuery: "SELECT SUM(total_bayar) FROM reservasi WHERE tamu_id = 101",
    tabelSkema: [
      { id: 1, tamu_id: 101, total_bayar: 1500000, tgl: "2024-01-10", bayar: "Lunas" },
      { id: 2, tamu_id: 102, total_bayar: 800000, tgl: "2024-01-11", bayar: "Lunas" },
      { id: 3, tamu_id: 101, total_bayar: 500000, tgl: "2024-02-15", bayar: "Lunas" },
      { id: 4, tamu_id: 105, total_bayar: 2000000, tgl: "2024-02-20", bayar: "DP" },
      { id: 5, tamu_id: 101, total_bayar: 700000, tgl: "2024-03-01", bayar: "Lunas" }
    ],
    hint: "SELECT SUM(total_bayar) WHERE tamu_id = 101"
  },
  {
    id: 17,
    modulId: 5,
    judul: "Filter Reservasi Tanggal Depan",
    materi: "Mencari jadwal kedatangan tamu di masa depan.",
    instruksi: "Tampilkan reservasi yang 'tgl_checkin'-nya setelah '2024-01-01' dan statusnya 'Confirmed'.",
    expectedQuery: "SELECT * FROM reservasi WHERE tgl_checkin > '2024-01-01' AND status = 'Confirmed'",
    tabelSkema: [
      { id: 1, tamu: "Budi", tgl_checkin: "2024-02-15", status: "Confirmed", kamar: "101" },
      { id: 2, tamu: "Ani", tgl_checkin: "2023-12-25", status: "Confirmed", kamar: "102" },
      { id: 3, tamu: "Caca", tgl_checkin: "2024-03-01", status: "Pending", kamar: "105" },
      { id: 4, tamu: "Dedi", tgl_checkin: "2024-01-10", status: "Confirmed", kamar: "201" },
      { id: 5, tamu: "Eka", tgl_checkin: "2023-11-20", status: "Cancelled", kamar: "305" }
    ],
    hint: "WHERE tgl_checkin > '2024-01-01' AND status = 'Confirmed'"
  },
  {
    id: 18,
    modulId: 5,
    judul: "Jumlah Reservasi per Bulan",
    materi: "Melihat tren bulanan untuk menentukan periode High Season.",
    instruksi: "Tampilkan 'bulan_reservasi' dan jumlah total reservasi (COUNT) per bulan.",
    expectedQuery: "SELECT bulan_reservasi, COUNT(*) FROM reservasi GROUP BY bulan_reservasi",
    tabelSkema: [
      { id: 1, bulan_reservasi: "Januari", tamu: "Ani", kamar: "A1", bayar: "Debit" },
      { id: 2, bulan_reservasi: "Februari", tamu: "Budi", kamar: "B1", bayar: "QRIS" },
      { id: 3, bulan_reservasi: "Januari", tamu: "Caca", kamar: "A2", bayar: "Tunai" },
      { id: 4, bulan_reservasi: "Maret", tamu: "Dedi", kamar: "C1", bayar: "Kartu" },
      { id: 5, bulan_reservasi: "Februari", tamu: "Eka", kamar: "B2", bayar: "QRIS" }
    ],
    hint: "Gunakan GROUP BY bulan_reservasi"
  },
  {
    id: 19,
    modulId: 5,
    judul: "Tamu Paling Sering Menginap",
    materi: "Mencari 'Top Spender' untuk program Loyalty Reward.",
    instruksi: "Tampilkan 'tamu_id' dan hitung berapa kali mereka menginap, urutkan dari yang terbanyak.",
    expectedQuery: "SELECT tamu_id, COUNT(*) FROM reservasi GROUP BY tamu_id ORDER BY COUNT(*) DESC",
    tabelSkema: [
      { id: 1, tamu_id: 101, malam: 2, tgl: "2024-01-01", total: 1000000 },
      { id: 2, tamu_id: 105, malam: 1, tgl: "2024-01-05", total: 500000 },
      { id: 3, tamu_id: 101, malam: 3, tgl: "2024-02-10", total: 1500000 },
      { id: 4, tamu_id: 110, malam: 5, tgl: "2024-02-15", total: 2500000 },
      { id: 5, tamu_id: 105, malam: 2, tgl: "2024-03-01", total: 1000000 }
    ],
    hint: "Gunakan GROUP BY tamu_id ORDER BY COUNT(*) DESC"
  },
  {
    id: 20,
    modulId: 5,
    judul: "Metode Bayar Favorit",
    materi: "Mengevaluasi metode pembayaran yang paling sering digunakan tamu.",
    instruksi: "Tampilkan 'metode_bayar' yang total transaksinya (SUM) melebihi 10.000.000.",
    expectedQuery: "SELECT metode_bayar FROM reservasi GROUP BY metode_bayar HAVING SUM(total_bayar) > 10000000",
    tabelSkema: [
      { id: 1, metode_bayar: "Kartu Kredit", total_bayar: 12000000, tamu: "Budi", tgl: "2024-04-01" },
      { id: 2, metode_bayar: "Transfer Bank", total_bayar: 5000000, tamu: "Ani", tgl: "2024-04-02" },
      { id: 3, metode_bayar: "Kartu Kredit", total_bayar: 8000000, tamu: "Caca", tgl: "2024-04-03" },
      { id: 4, metode_bayar: "Transfer Bank", total_bayar: 4000000, tamu: "Dedi", tgl: "2024-04-04" },
      { id: 5, metode_bayar: "QRIS", total_bayar: 2000000, tamu: "Eka", tgl: "2024-04-05" }
    ],
    hint: "GROUP BY metode_bayar HAVING SUM(total_bayar) > 10000000"
  },
  {
    id: 1,
    modulId: 6,
    judul: "Log Transaksi Parkir",
    materi: "Menghubungkan data kendaraan dengan catatan waktu masuk di area parkir menggunakan JOIN.",
    instruksi: "Tampilkan 'nomor_plat' dan 'waktu_masuk' untuk kendaraan yang memiliki tipe 'Mobil'.",
    expectedQuery: "SELECT kendaraan.nomor_plat, parkir.waktu_masuk FROM kendaraan JOIN parkir ON kendaraan.id = parkir.id_kendaraan WHERE kendaraan.tipe = 'Mobil'",
    tabelSkema: {
      tabelKiri: [
        { id: 1, nomor_plat: "BK 1234 AA", tipe: "Mobil", warna: "Hitam" },
        { id: 2, nomor_plat: "BK 5555 BB", tipe: "Motor", warna: "Merah" },
        { id: 3, nomor_plat: "B 1010 CC", tipe: "Mobil", warna: "Putih" },
        { id: 4, nomor_plat: "BK 2222 DD", tipe: "Motor", warna: "Biru" },
        { id: 5, nomor_plat: "D 9999 EE", tipe: "Mobil", warna: "Silver" }
      ],
      tabelKanan: [
        { id_log: 101, id_kendaraan: 1, waktu_masuk: "08:00", zona: "A1" },
        { id_log: 102, id_kendaraan: 3, waktu_masuk: "08:30", zona: "A2" },
        { id_log: 103, id_kendaraan: 5, waktu_masuk: "09:00", zona: "B1" },
        { id_log: 104, id_kendaraan: 2, waktu_masuk: "09:15", zona: "M1" },
        { id_log: 105, id_kendaraan: 4, waktu_masuk: "10:00", zona: "M2" }
      ]
    },
    hint: "Hubungkan kendaraan.id dengan parkir.id_kendaraan."
  },
  {
    id: 2,
    modulId: 6,
    judul: "Filter Diskon Berdasarkan Kategori",
    materi: "Mengambil data produk yang terhubung dengan tabel diskon musiman untuk melihat potongan harga.",
    instruksi: "Tampilkan 'nama_produk' dan 'persen_diskon' untuk produk yang memiliki diskon di atas 10%.",
    expectedQuery: "SELECT produk.nama_produk, diskon.persen_diskon FROM produk JOIN diskon ON produk.id_kategori = diskon.id_kategori WHERE diskon.persen_diskon > 10",
    tabelSkema: {
      tabelKiri: [
        { id: 1, nama_produk: "Kemeja", id_kategori: 10, harga: 150000 },
        { id: 2, nama_produk: "Celana", id_kategori: 10, harga: 200000 },
        { id: 3, nama_produk: "Sepatu", id_kategori: 11, harga: 450000 },
        { id: 4, nama_produk: "Kaos", id_kategori: 10, harga: 50000 },
        { id: 5, nama_produk: "Jaket", id_kategori: 12, harga: 300000 }
      ],
      tabelKanan: [
        { id_kategori: 10, nama_kat: "Pakaian", persen_diskon: 20, periode: "Lebaran" },
        { id_kategori: 11, nama_kat: "Alas Kaki", persen_diskon: 5, periode: "Natal" },
        { id_kategori: 12, nama_kat: "Jaket", persen_diskon: 15, periode: "Winter" },
        { id_kategori: 13, nama_kat: "Topi", persen_diskon: 10, periode: "Summer" },
        { id_kategori: 14, nama_kat: "Tas", persen_diskon: 25, periode: "Sekolah" }
      ]
    },
    hint: "Gunakan JOIN pada id_kategori dan filter persen_diskon > 10."
  },
  {
    id: 3,
    modulId: 6,
    judul: "Data Resep dan Dokter",
    materi: "Menampilkan data pasien beserta nama dokter yang menangani mereka.",
    instruksi: "Tampilkan 'nama_pasien' dan 'nama_dokter' yang memberikan diagnosa 'Flu Burung'.",
    expectedQuery: "SELECT pasien.nama_pasien, dokter.nama_dokter FROM pasien JOIN dokter ON pasien.id_dokter = dokter.id WHERE pasien.diagnosa = 'Flu Burung'",
    tabelSkema: {
      tabelKiri: [
        { id: 1, nama_pasien: "Budi", diagnosa: "Demam", id_dokter: 101 },
        { id: 2, nama_pasien: "Santi", diagnosa: "Flu Burung", id_dokter: 102 },
        { id: 3, nama_pasien: "Eka", diagnosa: "Batuk", id_dokter: 101 },
        { id: 4, nama_pasien: "Rian", diagnosa: "Flu Burung", id_dokter: 103 },
        { id: 5, nama_pasien: "Dewi", diagnosa: "Sakit Gigi", id_dokter: 104 }
      ],
      tabelKanan: [
        { id: 101, nama_dokter: "Dr. Andi", spesialis: "Umum", ruang: "Mawar" },
        { id: 102, nama_dokter: "Dr. Siti", spesialis: "Paru", ruang: "Melati" },
        { id: 103, nama_dokter: "Dr. Budi", spesialis: "Internis", ruang: "Anggrek" },
        { id: 104, nama_dokter: "Dr. Doni", spesialis: "Gigi", ruang: "Lili" },
        { id: 105, nama_dokter: "Dr. Rani", spesialis: "Anak", ruang: "Flamboyan" }
      ]
    },
    hint: "Filter diagnosa pasien menggunakan WHERE diagnosa = 'Flu Burung'."
  },
  {
    id: 4,
    modulId: 6,
    judul: "Inventaris Cabang dan Gudang",
    materi: "Mengecek sisa stok di gudang utama berdasarkan item yang ada di cabang.",
    instruksi: "Tampilkan 'nama_cabang' dan 'nama_item' yang stok gudangnya (stok_pusat) kurang dari 50.",
    expectedQuery: "SELECT cabang.nama_cabang, gudang.nama_item FROM cabang JOIN gudang ON cabang.id_item = gudang.id WHERE gudang.stok_pusat < 50",
    tabelSkema: {
      tabelKiri: [
        { id: 1, nama_cabang: "Medan Mall", id_item: 501, tgl: "2024" },
        { id: 2, nama_cabang: "Jakarta City", id_item: 502, tgl: "2024" },
        { id: 3, nama_cabang: "Medan Mall", id_item: 503, tgl: "2024" },
        { id: 4, nama_cabang: "Surabaya Plaza", id_item: 501, tgl: "2024" },
        { id: 5, nama_cabang: "Bandung Hub", id_item: 505, tgl: "2024" }
      ],
      tabelKanan: [
        { id: 501, nama_item: "Minyak Goreng", stok_pusat: 40, rak: "A1" },
        { id: 502, nama_item: "Gula Pasir", stok_pusat: 100, rak: "A2" },
        { id: 503, nama_item: "Beras 5kg", stok_pusat: 25, rak: "B1" },
        { id: 504, nama_item: "Garam", stok_pusat: 80, rak: "B2" },
        { id: 505, nama_item: "Tepung", stok_pusat: 60, rak: "C1" }
      ]
    },
    hint: "Gunakan JOIN pada id_item = gudang.id."
  },
  {
    id: 5,
    modulId: 6,
    judul: "Reservasi Kamar Hotel",
    materi: "Menampilkan tipe kamar yang dipesan oleh tamu untuk keperluan operasional.",
    instruksi: "Tampilkan 'nama_tamu' dan 'tipe_kamar' untuk tamu yang menginap (durasi) lebih dari 2 malam.",
    expectedQuery: "SELECT tamu.nama_tamu, kamar.tipe_kamar FROM tamu JOIN kamar ON tamu.no_kamar = kamar.no_kamar WHERE tamu.durasi > 2",
    tabelSkema: {
      tabelKiri: [
        { id: 1, nama_tamu: "Hizkia", no_kamar: "101", durasi: 3 },
        { id: 2, nama_tamu: "Cristian", no_kamar: "105", durasi: 1 },
        { id: 3, nama_tamu: "Siahaan", no_kamar: "202", durasi: 5 },
        { id: 4, nama_tamu: "Lumban", no_kamar: "101", durasi: 2 },
        { id: 5, nama_tamu: "Gaol", no_kamar: "301", durasi: 4 }
      ],
      tabelKanan: [
        { no_kamar: "101", tipe_kamar: "Deluxe", harga: 750000, lantai: 1 },
        { no_kamar: "105", tipe_kamar: "Standard", harga: 400000, lantai: 1 },
        { no_kamar: "202", tipe_kamar: "Suite", harga: 1500000, lantai: 2 },
        { no_kamar: "301", tipe_kamar: "Penthouse", harga: 3000000, lantai: 3 },
        { no_kamar: "102", tipe_kamar: "Standard", harga: 400000, lantai: 1 }
      ]
    },
    hint: "Gunakan WHERE durasi > 2."
  },
  {
    id: 6,
    modulId: 6,
    judul: "Logistik Penjemputan Paket",
    materi: "Menghubungkan paket dengan kurir yang bertanggung jawab dalam pengiriman.",
    instruksi: "Tampilkan 'resi' dan 'nama_kurir' untuk paket yang memiliki status 'On Process'.",
    expectedQuery: "SELECT paket.resi, kurir.nama_kurir FROM paket JOIN kurir ON paket.id_kurir = kurir.id WHERE paket.status = 'On Process'",
    tabelSkema: {
      tabelKiri: [
        { resi: "JP001", status: "Delivered", id_kurir: 10, berat: "2kg" },
        { resi: "JP002", status: "On Process", id_kurir: 11, berat: "1kg" },
        { resi: "JP003", status: "On Process", id_kurir: 10, berat: "5kg" },
        { resi: "JP004", status: "Pending", id_kurir: 12, berat: "3kg" },
        { resi: "JP005", status: "On Process", id_kurir: 11, berat: "1kg" }
      ],
      tabelKanan: [
        { id: 10, nama_kurir: "Budi", kendaraan: "Motor", area: "Medan" },
        { id: 11, nama_kurir: "Siti", kendaraan: "Mobil", area: "Jakarta" },
        { id: 12, nama_kurir: "Andi", kendaraan: "Motor", area: "Bandung" },
        { id: 13, nama_kurir: "Rudi", kendaraan: "Mobil", area: "Surabaya" },
        { id: 14, nama_kurir: "Eka", kendaraan: "Motor", area: "Bali" }
      ]
    },
    hint: "Hubungkan id_kurir di kedua tabel."
  },
  {
    id: 7,
    modulId: 6,
    judul: "Total Nilai Aset Per Kategori",
    materi: "Menggunakan JOIN dan SUM untuk menghitung nilai total aset di setiap departemen perusahaan.",
    instruksi: "Tampilkan 'nama_dep' dan total nilai aset (SUM harga) dengan alias 'total_nilai'.",
    expectedQuery: "SELECT departemen.nama_dep, SUM(aset.harga) AS total_nilai FROM departemen JOIN aset ON departemen.id = aset.id_dep GROUP BY departemen.nama_dep",
    tabelSkema: {
      tabelKiri: [
        { id: 1, nama_dep: "IT", gedung: "A", pj: "Hizkia" },
        { id: 2, nama_dep: "Marketing", gedung: "B", pj: "Cristian" },
        { id: 3, nama_dep: "Finance", gedung: "A", pj: "Siahaan" },
        { id: 4, nama_dep: "HRD", gedung: "C", pj: "Lumban" },
        { id: 5, nama_dep: "Sales", gedung: "B", pj: "Gaol" }
      ],
      tabelKanan: [
        { id_aset: 501, nama_item: "Macbook", harga: 20000000, id_dep: 1 },
        { id_aset: 502, nama_item: "Server", harga: 50000000, id_dep: 1 },
        { id_aset: 503, nama_item: "Kamera", harga: 15000000, id_dep: 2 },
        { id_aset: 504, nama_item: "Printer", harga: 2000000, id_dep: 3 },
        { id_aset: 505, nama_item: "iPad Pro", harga: 18000000, id_dep: 2 }
      ]
    },
    hint: "Gunakan GROUP BY departemen.nama_dep."
  },
  {
    id: 8,
    modulId: 6,
    judul: "Membership dan Akses Konten",
    materi: "Menghubungkan user dengan tier langganan mereka untuk validasi fitur.",
    instruksi: "Tampilkan 'username' dan 'fitur_utama' untuk user yang berlangganan tier 'Premium'.",
    expectedQuery: "SELECT users.username, tier.fitur_utama FROM users JOIN tier ON users.id_tier = tier.id WHERE tier.nama_tier = 'Premium'",
    tabelSkema: {
      tabelKiri: [
        { id: 1, username: "hizkia_dev", id_tier: 3, join: "2023" },
        { id: 2, username: "user_baru", id_tier: 1, join: "2024" },
        { id: 3, username: "cris_pro", id_tier: 3, join: "2023" },
        { id: 4, username: "lumban_si", id_tier: 2, join: "2023" },
        { id: 5, username: "gaol_ai", id_tier: 3, join: "2024" }
      ],
      tabelKanan: [
        { id: 1, nama_tier: "Free", harga: 0, fitur_utama: "Terbatas" },
        { id: 2, nama_tier: "Basic", harga: 50000, fitur_utama: "No Ads" },
        { id: 3, nama_tier: "Premium", harga: 150000, fitur_utama: "All Access" },
        { id: 4, nama_tier: "VIP", harga: 300000, fitur_utama: "Priority" },
        { id: 5, nama_tier: "Trial", harga: 0, fitur_utama: "7 Days" }
      ]
    },
    hint: "Gunakan WHERE tier.nama_tier = 'Premium'."
  },
  {
    id: 9,
    modulId: 6,
    judul: "Filter Lokasi Cabang Restoran",
    materi: "Menampilkan menu andalan berdasarkan lokasi kota cabang tertentu.",
    instruksi: "Tampilkan 'nama_cabang' dan 'menu_spesial' untuk cabang yang berada di kota 'Medan'.",
    expectedQuery: "SELECT cabang.nama_cabang, menu.menu_spesial FROM cabang JOIN menu ON cabang.id_menu = menu.id WHERE cabang.kota = 'Medan'",
    tabelSkema: {
      tabelKiri: [
        { id: 1, nama_cabang: "Bento Medan", kota: "Medan", id_menu: 101 },
        { id: 2, nama_cabang: "Bento JKT", kota: "Jakarta", id_menu: 102 },
        { id: 3, nama_cabang: "Bento SBY", kota: "Surabaya", id_menu: 101 },
        { id: 4, nama_cabang: "Bento Amplas", kota: "Medan", id_menu: 103 },
        { id: 5, nama_cabang: "Bento BSD", kota: "Tangerang", id_menu: 101 }
      ],
      tabelKanan: [
        { id: 101, menu_spesial: "Nasi Lemak", harga: 25000, tipe: "Food" },
        { id: 102, menu_spesial: "Soto Betawi", harga: 35000, tipe: "Food" },
        { id: 103, menu_spesial: "Teh Tarik", harga: 15000, tipe: "Drink" },
        { id: 104, menu_spesial: "Es Jeruk", harga: 10000, tipe: "Drink" },
        { id: 105, menu_spesial: "Roti Bakar", harga: 20000, tipe: "Snack" }
      ]
    },
    hint: "Gunakan WHERE cabang.kota = 'Medan'."
  },
  {
    id: 10,
    modulId: 6,
    judul: "Penerbit dan Koleksi Perpustakaan",
    materi: "Menghubungkan buku dengan informasi penerbitnya untuk tracking koleksi.",
    instruksi: "Tampilkan 'judul_buku' dan 'nama_penerbit' untuk buku yang diterbitkan tahun 2024.",
    expectedQuery: "SELECT koleksi.judul_buku, penerbit.nama_penerbit FROM koleksi JOIN penerbit ON koleksi.id_penerbit = penerbit.id WHERE koleksi.tahun = 2024",
    tabelSkema: {
      tabelKiri: [
        { id: 1, judul_buku: "Belajar SQL", id_penerbit: 50, tahun: 2024 },
        { id: 2, judul_buku: "Mastering Flutter", id_penerbit: 51, tahun: 2023 },
        { id: 3, judul_buku: "UI/UX Guide", id_penerbit: 50, tahun: 2024 },
        { id: 4, judul_buku: "Data Science", id_penerbit: 52, tahun: 2024 },
        { id: 5, judul_buku: "Go Backend", id_penerbit: 51, tahun: 2022 }
      ],
      tabelKanan: [
        { id: 50, nama_penerbit: "Gramedia", alamat: "Jakarta", email: "gra@mail" },
        { id: 51, nama_penerbit: "Informatika", alamat: "Bandung", email: "info@mail" },
        { id: 52, nama_penerbit: "Erlangga", alamat: "Jakarta", email: "erl@mail" },
        { id: 53, nama_penerbit: "Andi Offset", alamat: "Yogya", email: "andi@mail" },
        { id: 54, nama_penerbit: "Pustaka", alamat: "Medan", email: "pus@mail" }
      ]
    },
    hint: "Gunakan WHERE koleksi.tahun = 2024."
  },
  {
    id: 11,
    modulId: 6,
    judul: "Relasi Buku dan Peminjam",
    materi: "JOIN digunakan untuk menghubungkan tabel transaksi peminjaman dengan tabel master buku.",
    instruksi: "Tampilkan 'judul' dari tabel 'buku' yang sedang dipinjam oleh 'Andi'.",
    expectedQuery: "SELECT buku.judul FROM buku JOIN peminjaman ON buku.id = peminjaman.id_buku WHERE peminjaman.nama_peminjam = 'Andi'",
    tabelSkema: {
      tabelKiri: [
        { id: 101, judul: "Laskar Pelangi", penulis: "Andrea H.", stok: 5 },
        { id: 102, judul: "Filosofi Teras", penulis: "Henry M.", stok: 3 },
        { id: 103, judul: "Atomic Habits", penulis: "James C.", stok: 7 },
        { id: 104, judul: "Bumi", penulis: "Tere Liye", stok: 2 },
        { id: 105, judul: "Pulang", penulis: "Leila S.", stok: 4 }
      ],
      tabelKanan: [
        { id: 1, id_buku: 101, nama_peminjam: "Andi", status: "Dipinjam" },
        { id: 2, id_buku: 103, nama_peminjam: "Budi", status: "Kembali" },
        { id: 3, id_buku: 101, nama_peminjam: "Citra", status: "Dipinjam" },
        { id: 4, id_buku: 105, nama_peminjam: "Andi", status: "Dipinjam" },
        { id: 5, id_buku: 102, nama_peminjam: "Dedi", status: "Kembali" }
      ]
    },
    hint: "Gunakan JOIN pada buku.id = peminjaman.id_buku."
  },
  {
    id: 12,
    modulId: 6,
    judul: "Agregasi Belanja Pelanggan",
    materi: "Menghitung total transaksi finansial pelanggan dengan menggabungkan dua tabel.",
    instruksi: "Tampilkan 'nama' pelanggan dan total belanja (SUM harga) dengan alias 'total_belanja'.",
    expectedQuery: "SELECT pelanggan.nama, SUM(transaksi.harga) AS total_belanja FROM pelanggan JOIN transaksi ON pelanggan.id = transaksi.id_pelanggan GROUP BY pelanggan.nama",
    tabelSkema: {
      tabelKiri: [
        { id: 1, nama: "Hizkia", kota: "Medan", member: "Gold" },
        { id: 2, nama: "Cristian", kota: "Jakarta", member: "Silver" },
        { id: 3, nama: "Siahaan", kota: "Surabaya", member: "Gold" },
        { id: 4, nama: "Lumban", kota: "Medan", member: "Bronze" },
        { id: 5, nama: "Gaol", kota: "Bandung", member: "Silver" }
      ],
      tabelKanan: [
        { id_tr: 10, id_pelanggan: 1, barang: "Laptop", harga: 10000000 },
        { id_tr: 11, id_pelanggan: 1, barang: "Mouse", harga: 200000 },
        { id_tr: 12, id_pelanggan: 2, barang: "Keyboard", harga: 500000 },
        { id_tr: 13, id_pelanggan: 3, barang: "Monitor", harga: 2000000 },
        { id_tr: 14, id_pelanggan: 1, barang: "Kabel", harga: 50000 }
      ]
    },
    hint: "Gunakan GROUP BY pelanggan.nama untuk hasil SUM."
  },
  {
    id: 13,
    modulId: 6,
    judul: "Pencarian Pattern di Tabel Relasi",
    materi: "Klausa LIKE dapat memfilter data hasil penggabungan tabel secara spesifik.",
    instruksi: "Tampilkan 'nama_produk' dan 'nama_kategori' yang kategorinya mengandung kata 'Elektronik'.",
    expectedQuery: "SELECT produk.nama_produk, kategori.nama_kategori FROM produk JOIN kategori ON produk.id_kategori = kategori.id WHERE kategori.nama_kategori LIKE '%Elektronik%'",
    tabelSkema: {
      tabelKiri: [
        { id: 1, nama_produk: "TV LED", id_kategori: 10, harga: 3000000 },
        { id: 2, nama_produk: "Kursi", id_kategori: 11, harga: 500000 },
        { id: 3, nama_produk: "Kulkas", id_kategori: 10, harga: 2500000 },
        { id: 4, nama_produk: "Meja", id_kategori: 11, harga: 700000 },
        { id: 5, nama_produk: "Smartphone", id_kategori: 10, harga: 4000000 }
      ],
      tabelKanan: [
        { id: 10, nama_kategori: "Peralatan Elektronik", kode: "ELC", lantai: "1" },
        { id: 11, nama_kategori: "Furniture Rumah", kode: "FUR", lantai: "2" },
        { id: 12, nama_kategori: "Alat Olahraga", kode: "SPO", lantai: "3" },
        { id: 13, nama_kategori: "Pakaian Jadi", kode: "CLO", lantai: "2" },
        { id: 14, nama_kategori: "Elektronik Dapur", kode: "KIT", lantai: "1" }
      ]
    },
    hint: "Gunakan WHERE kategori.nama_kategori LIKE '%Elektronik%'."
  },
  {
    id: 14,
    modulId: 6,
    judul: "Analisis Kinerja Karyawan",
    materi: "Menghubungkan karyawan dengan proyek untuk manajemen beban kerja tim.",
    instruksi: "Tampilkan 'nama_karyawan' dan 'nama_proyek' untuk proyek yang berstatus 'Priority'.",
    expectedQuery: "SELECT karyawan.nama_karyawan, proyek.nama_proyek FROM karyawan JOIN proyek ON karyawan.id = proyek.id_karyawan WHERE proyek.status = 'Priority'",
    tabelSkema: {
      tabelKiri: [
        { id: 1, nama_karyawan: "Rizky", divisi: "IT", email: "riz@co" },
        { id: 2, nama_karyawan: "Amel", divisi: "HR", email: "amel@co" },
        { id: 3, nama_karyawan: "Fajar", divisi: "IT", email: "faj@co" },
        { id: 4, nama_karyawan: "Santi", divisi: "Fin", email: "san@co" },
        { id: 5, nama_karyawan: "Bagus", divisi: "IT", email: "bag@co" }
      ],
      tabelKanan: [
        { id_p: 101, id_karyawan: 1, nama_proyek: "App Mobile", status: "Priority" },
        { id_p: 102, id_karyawan: 3, nama_proyek: "Database", status: "Regular" },
        { id_p: 103, id_karyawan: 5, nama_proyek: "Security", status: "Priority" },
        { id_p: 104, id_karyawan: 1, nama_proyek: "Web CMS", status: "Regular" },
        { id_p: 105, id_karyawan: 4, nama_proyek: "Audit", status: "Priority" }
      ]
    },
    hint: "Hubungkan id karyawan dengan id_karyawan di tabel proyek."
  },
  {
    id: 15,
    modulId: 6,
    judul: "Data Penjualan dan Wilayah",
    materi: "Memetakan performa toko berdasarkan wilayah operasional dan pimpinan wilayahnya.",
    instruksi: "Tampilkan 'nama_toko' dan 'provinsi' dari wilayah yang dikepalai oleh 'Lumban'.",
    expectedQuery: "SELECT toko.nama_toko, wilayah.provinsi FROM toko JOIN wilayah ON toko.id_wilayah = wilayah.id WHERE wilayah.kepala_wilayah = 'Lumban'",
    tabelSkema: {
      tabelKiri: [
        { id: 1, nama_toko: "Toko Sehat", id_wilayah: 50, tipe: "Cabang" },
        { id: 2, nama_toko: "Mart Jaya", id_wilayah: 51, tipe: "Pusat" },
        { id: 3, nama_toko: "Sinar Abadi", id_wilayah: 50, tipe: "Cabang" },
        { id: 4, nama_toko: "Laris Manis", id_wilayah: 52, tipe: "Cabang" },
        { id: 5, nama_toko: "Berkah Mart", id_wilayah: 51, tipe: "Cabang" }
      ],
      tabelKanan: [
        { id: 50, provinsi: "Sumut", kepala_wilayah: "Lumban", zona: "Barat" },
        { id: 51, provinsi: "DKI", kepala_wilayah: "Gaol", zona: "Pusat" },
        { id: 52, provinsi: "Jatim", kepala_wilayah: "Siahaan", zona: "Timur" },
        { id: 53, provinsi: "Bali", kepala_wilayah: "Hizkia", zona: "Timur" },
        { id: 54, provinsi: "Jabar", kepala_wilayah: "Cristian", zona: "Barat" }
      ]
    },
    hint: "Gunakan JOIN toko ON toko.id_wilayah = wilayah.id."
  },
  {
    id: 16,
    modulId: 6,
    judul: "Stok Barang dan Supplier",
    materi: "Menghubungkan manajemen stok dengan kontak supplier untuk proses restock.",
    instruksi: "Tampilkan 'nama_barang' and 'nama_supplier' untuk barang yang stoknya di bawah 15.",
    expectedQuery: "SELECT barang.nama_barang, supplier.nama_supplier FROM barang JOIN supplier ON barang.id_supplier = supplier.id WHERE barang.stok < 15",
    tabelSkema: {
      tabelKiri: [
        { id: 1, nama_barang: "Kertas A4", id_supplier: 1, stok: 10 },
        { id: 2, nama_barang: "Tinta", id_supplier: 2, stok: 20 },
        { id: 3, nama_barang: "Flashdisk", id_supplier: 1, stok: 12 },
        { id: 4, nama_barang: "Mouse Pad", id_supplier: 3, stok: 30 },
        { id: 5, nama_barang: "Webcam", id_supplier: 2, stok: 5 }
      ],
      tabelKanan: [
        { id: 1, nama_supplier: "PT ATK Maju", kota: "Jakarta", telp: "021" },
        { id: 2, nama_supplier: "CV Techno", kota: "Bandung", telp: "022" },
        { id: 3, nama_supplier: "Gudang Komp", kota: "Medan", telp: "061" },
        { id: 4, nama_supplier: "Sinar Jaya", kota: "Surabaya", telp: "031" },
        { id: 5, nama_supplier: "Logistik ID", kota: "Jakarta", telp: "021" }
      ]
    },
    hint: "Gunakan WHERE barang.stok < 15."
  },
  {
    id: 17,
    modulId: 6,
    judul: "Nilai Mahasiswa dan Mata Kuliah",
    materi: "Menghubungkan profil mahasiswa dengan nilai akademik pada mata kuliah tertentu.",
    instruksi: "Tampilkan 'nama_mahasiswa' dan 'nama_matkul' untuk mahasiswa yang mendapatkan skor 'A'.",
    expectedQuery: "SELECT mahasiswa.nama_mahasiswa, matkul.nama_matkul FROM mahasiswa JOIN nilai ON mahasiswa.id = nilai.id_mhs JOIN matkul ON nilai.id_matkul = matkul.id WHERE nilai.skor = 'A'",
    tabelSkema: {
      tabelKiri: [
        { id: 1, nama_mahasiswa: "Hizkia", nim: "4142400", prodi: "TI" },
        { id: 2, nama_mahasiswa: "Budi", nim: "4142401", prodi: "SI" },
        { id: 3, nama_mahasiswa: "Siti", nim: "4142402", prodi: "TI" },
        { id: 4, nama_mahasiswa: "Andi", nim: "4142403", prodi: "DKV" },
        { id: 5, nama_mahasiswa: "Lusi", nim: "4142404", prodi: "TI" }
      ],
      tabelKanan: [
        { id: 10, nama_matkul: "Basis Data", sks: 3, dosen: "Dr. Siahaan" },
        { id: 11, nama_matkul: "Web Prog", sks: 4, dosen: "Lumban M.Kom" },
        { id: 12, nama_matkul: "Statistika", sks: 2, dosen: "Prof. Gaol" },
        { id: 13, nama_matkul: "UI/UX Design", sks: 3, dosen: "Cristian" },
        { id: 14, nama_matkul: "Algoritma", sks: 4, dosen: "Hizkia M.T" }
      ]
    },
    hint: "Ini membutuhkan JOIN 3 tabel (mahasiswa, nilai, matkul)."
  },
  {
    id: 18,
    modulId: 6,
    judul: "Left Join: Produk Tanpa Penjualan",
    materi: "LEFT JOIN tetap menampilkan data dari tabel kiri meskipun tidak ada pasangan di tabel kanan.",
    instruksi: "Tampilkan 'nama_produk' dan 'jumlah' terjual. Gunakan LEFT JOIN agar produk yang belum terjual tetap muncul.",
    expectedQuery: "SELECT produk.nama_produk, penjualan.jumlah FROM produk LEFT JOIN penjualan ON produk.id = penjualan.id_produk",
    tabelSkema: {
      tabelKiri: [
        { id: 1, nama_produk: "Macbook", kategori: "Laptop", stok: 5 },
        { id: 2, nama_produk: "iPhone", kategori: "HP", stok: 10 },
        { id: 3, nama_produk: "Airpods", kategori: "Audio", stok: 15 },
        { id: 4, nama_produk: "Watch", kategori: "Watch", stok: 8 },
        { id: 5, nama_produk: "iPad", kategori: "Tablet", stok: 4 }
      ],
      tabelKanan: [
        { id_s: 501, id_produk: 1, jumlah: 2, kasir: "Ani" },
        { id_s: 502, id_produk: 3, jumlah: 5, kasir: "Budi" },
        { id_s: 503, id_produk: 1, jumlah: 1, kasir: "Ani" },
        { id_s: 504, id_produk: 2, jumlah: 3, kasir: "Cici" },
        { id_s: 505, id_produk: 2, jumlah: 1, kasir: "Budi" }
      ]
    },
    hint: "Gunakan LEFT JOIN untuk mempertahankan data produk."
  },
  {
    id: 19,
    modulId: 6,
    judul: "Filter Join Antar Tanggal",
    materi: "Memfilter hasil penggabungan tabel berdasarkan pola tanggal tertentu.",
    instruksi: "Tampilkan 'nama_pelanggan' dan 'tgl_order' untuk pesanan di bulan Februari (02).",
    expectedQuery: "SELECT pelanggan.nama_pelanggan, pesanan.tgl_order FROM pelanggan JOIN pesanan ON pelanggan.id = pesanan.id_pelanggan WHERE pesanan.tgl_order LIKE '%-02-%'",
    tabelSkema: {
      tabelKiri: [
        { id: 1, nama_pelanggan: "Hizkia", email: "h@mail", poin: 100 },
        { id: 2, nama_pelanggan: "Cristian", email: "c@mail", poin: 50 },
        { id: 3, nama_pelanggan: "Siahaan", email: "s@mail", poin: 200 },
        { id: 4, nama_pelanggan: "Lumban", email: "l@mail", poin: 80 },
        { id: 5, nama_pelanggan: "Gaol", email: "g@mail", poin: 120 }
      ],
      tabelKanan: [
        { id: 10, id_pelanggan: 1, tgl_order: "2024-01-15", total: 50000 },
        { id: 11, id_pelanggan: 2, tgl_order: "2024-02-10", total: 150000 },
        { id: 12, id_pelanggan: 1, tgl_order: "2024-02-14", total: 200000 },
        { id: 13, id_pelanggan: 4, tgl_order: "2024-03-01", total: 75000 },
        { id: 14, id_pelanggan: 5, tgl_order: "2024-02-28", total: 300000 }
      ]
    },
    hint: "Gunakan LIKE '%-02-%' pada kolom tgl_order."
  },
  {
    id: 20,
    modulId: 6,
    judul: "Join dengan Pengurutan",
    materi: "Menyortir hasil gabungan tabel berdasarkan metrik performa.",
    instruksi: "Tampilkan 'nama_driver' dan 'rating' perjalanan, urutkan dari rating tertinggi.",
    expectedQuery: "SELECT driver.nama_driver, trip.rating FROM driver JOIN trip ON driver.id = trip.id_driver ORDER BY trip.rating DESC",
    tabelSkema: {
      tabelKiri: [
        { id: 1, nama_driver: "Joko", plat: "BK 1234 AA", unit: "Mobil" },
        { id: 2, nama_driver: "Eko", plat: "BK 5678 BB", unit: "Motor" },
        { id: 3, nama_driver: "Susi", plat: "BK 9012 CC", unit: "Mobil" },
        { id: 4, nama_driver: "Bambang", plat: "BK 3456 DD", unit: "Motor" },
        { id: 5, nama_driver: "Rina", plat: "BK 7890 EE", unit: "Mobil" }
      ],
      tabelKanan: [
        { id_t: 1001, id_driver: 1, rating: 4.8, tgl: "2024-04" },
        { id_t: 1002, id_driver: 3, rating: 5.0, tgl: "2024-04" },
        { id_t: 1003, id_driver: 2, rating: 4.5, tgl: "2024-04" },
        { id_t: 1004, id_driver: 5, rating: 4.9, tgl: "2024-04" },
        { id_t: 1005, id_driver: 4, rating: 4.2, tgl: "2024-04" }
      ]
    },
    hint: "Gunakan ORDER BY trip.rating DESC."
  },
  {
    id: 1,
    modulId: 7,
    judul: "Menghitung Jumlah Data",
    materi: "COUNT digunakan untuk menghitung jumlah baris dalam tabel.",
    instruksi: "Hitung jumlah seluruh data pada tabel 'karyawan'.",
    expectedQuery: "SELECT COUNT(*) FROM karyawan",
    tabelSkema: [
      { id: 1, nama: "Andi", departemen: "IT", gaji: 5000000 },
      { id: 2, nama: "Budi", departemen: "HR", gaji: 6000000 },
      { id: 3, nama: "Sari", departemen: "IT", gaji: 7000000 },
      { id: 4, nama: "Rina", departemen: "Finance", gaji: 4000000 },
      { id: 5, nama: "Doni", departemen: "IT", gaji: 8000000 }
    ],
    hint: "Gunakan COUNT(*)"
  },
  {
    id: 2,
    modulId: 7,
    judul: "Rata-rata Gaji",
    materi: "AVG digunakan untuk menghitung rata-rata nilai.",
    instruksi: "Hitung rata-rata gaji karyawan.",
    expectedQuery: "SELECT AVG(gaji) FROM karyawan",
    tabelSkema: [
      { id: 1, nama: "Andi", departemen: "IT", gaji: 5000000 },
      { id: 2, nama: "Budi", departemen: "HR", gaji: 6000000 },
      { id: 3, nama: "Sari", departemen: "IT", gaji: 7000000 },
      { id: 4, nama: "Rina", departemen: "Finance", gaji: 4000000 },
      { id: 5, nama: "Doni", departemen: "IT", gaji: 8000000 }
    ],
    hint: "Gunakan AVG(gaji)"
  },
  {
    id: 3,
    modulId: 7,
    judul: "Gaji Tertinggi",
    materi: "MAX digunakan untuk mencari nilai terbesar.",
    instruksi: "Tampilkan gaji tertinggi dari tabel 'karyawan'.",
    expectedQuery: "SELECT MAX(gaji) FROM karyawan",
    tabelSkema: [
      { id: 1, nama: "Andi", departemen: "IT", gaji: 5000000 },
      { id: 2, nama: "Budi", departemen: "HR", gaji: 6000000 },
      { id: 3, nama: "Sari", departemen: "IT", gaji: 7000000 },
      { id: 4, nama: "Rina", departemen: "Finance", gaji: 4000000 },
      { id: 5, nama: "Doni", departemen: "IT", gaji: 8000000 }
    ],
    hint: "Gunakan MAX(gaji)"
  },
  {
    id: 4,
    modulId: 7,
    judul: "Total Gaji",
    materi: "SUM digunakan untuk menjumlahkan nilai.",
    instruksi: "Hitung total semua gaji karyawan.",
    expectedQuery: "SELECT SUM(gaji) FROM karyawan",
    tabelSkema: [
      { id: 1, nama: "Andi", departemen: "IT", gaji: 5000000 },
      { id: 2, nama: "Budi", departemen: "HR", gaji: 6000000 },
      { id: 3, nama: "Sari", departemen: "IT", gaji: 7000000 },
      { id: 4, nama: "Rina", departemen: "Finance", gaji: 4000000 },
      { id: 5, nama: "Doni", departemen: "IT", gaji: 8000000 }
    ],
    hint: "Gunakan SUM(gaji)"
  },
  {
    id: 5,
    modulId: 7,
    judul: "Jumlah per Departemen",
    materi: "COUNT bisa digabung dengan GROUP BY.",
    instruksi: "Hitung jumlah karyawan per departemen.",
    expectedQuery: "SELECT departemen, COUNT(*) FROM karyawan GROUP BY departemen",
    tabelSkema: [
      { id: 1, nama: "Andi", departemen: "IT", gaji: 5000000 },
      { id: 2, nama: "Budi", departemen: "HR", gaji: 6000000 },
      { id: 3, nama: "Sari", departemen: "IT", gaji: 7000000 },
      { id: 4, nama: "Rina", departemen: "Finance", gaji: 4000000 },
      { id: 5, nama: "Doni", departemen: "IT", gaji: 8000000 }
    ],
    hint: "Gunakan GROUP BY"
  },
  {
    id: 6,
    modulId: 7,
    judul: "Total Penjualan",
    instruksi: "Hitung total penjualan dari tabel 'transaksi'.",
    expectedQuery: "SELECT SUM(total) FROM transaksi",
    tabelSkema: [
      { id: 1, pelanggan: "A", produk: "Laptop", total: 5000000 },
      { id: 2, pelanggan: "B", produk: "Mouse", total: 200000 },
      { id: 3, pelanggan: "C", produk: "Keyboard", total: 300000 },
      { id: 4, pelanggan: "D", produk: "Monitor", total: 1500000 },
      { id: 5, pelanggan: "E", produk: "Laptop", total: 7000000 }
    ],
    hint: "Gunakan SUM"
  },
  {
    id: 7,
    modulId: 7,
    judul: "Rata-rata Penjualan",
    instruksi: "Hitung rata-rata total transaksi.",
    expectedQuery: "SELECT AVG(total) FROM transaksi",
    tabelSkema: [
      { id: 1, pelanggan: "A", produk: "Laptop", total: 5000000 },
      { id: 2, pelanggan: "B", produk: "Mouse", total: 200000 },
      { id: 3, pelanggan: "C", produk: "Keyboard", total: 300000 },
      { id: 4, pelanggan: "D", produk: "Monitor", total: 1500000 },
      { id: 5, pelanggan: "E", produk: "Laptop", total: 7000000 }
    ],
    hint: "Gunakan AVG"
  },
  {
    id: 8,
    modulId: 7,
    judul: "Transaksi Tertinggi",
    instruksi: "Tampilkan nilai transaksi terbesar.",
    expectedQuery: "SELECT MAX(total) FROM transaksi",
    tabelSkema: [
      { id: 1, pelanggan: "A", produk: "Laptop", total: 5000000 },
      { id: 2, pelanggan: "B", produk: "Mouse", total: 200000 },
      { id: 3, pelanggan: "C", produk: "Keyboard", total: 300000 },
      { id: 4, pelanggan: "D", produk: "Monitor", total: 1500000 },
      { id: 5, pelanggan: "E", produk: "Laptop", total: 7000000 }
    ],
    hint: "Gunakan MAX"
  },
  {
    id: 9,
    modulId: 7,
    judul: "Jumlah Produk Terjual",
    instruksi: "Hitung jumlah transaksi.",
    expectedQuery: "SELECT COUNT(*) FROM transaksi",
    tabelSkema: [
      { id: 1, pelanggan: "A", produk: "Laptop", total: 5000000 },
      { id: 2, pelanggan: "B", produk: "Mouse", total: 200000 },
      { id: 3, pelanggan: "C", produk: "Keyboard", total: 300000 },
      { id: 4, pelanggan: "D", produk: "Monitor", total: 1500000 },
      { id: 5, pelanggan: "E", produk: "Laptop", total: 7000000 }
    ],
    hint: "Gunakan COUNT"
  },
  {
    id: 10,
    modulId: 7,
    judul: "Total per Produk",
    instruksi: "Hitung total penjualan per produk.",
    expectedQuery: "SELECT produk, SUM(total) FROM transaksi GROUP BY produk",
    tabelSkema: [
      { id: 1, pelanggan: "A", produk: "Laptop", total: 5000000 },
      { id: 2, pelanggan: "B", produk: "Mouse", total: 200000 },
      { id: 3, pelanggan: "C", produk: "Keyboard", total: 300000 },
      { id: 4, pelanggan: "D", produk: "Monitor", total: 1500000 },
      { id: 5, pelanggan: "E", produk: "Laptop", total: 7000000 }
    ],
    hint: "Gunakan GROUP BY produk"
  },
  {
    id: 11,
    modulId: 7,
    judul: "Nilai Rata-rata Siswa",
    instruksi: "Hitung rata-rata nilai siswa.",
    expectedQuery: "SELECT AVG(nilai) FROM siswa",
    tabelSkema: [
      { id: 1, nama: "A", kelas: "1A", nilai: 80 },
      { id: 2, nama: "B", kelas: "1A", nilai: 70 },
      { id: 3, nama: "C", kelas: "1B", nilai: 90 },
      { id: 4, nama: "D", kelas: "1B", nilai: 60 },
      { id: 5, nama: "E", kelas: "1A", nilai: 85 }
    ],
    hint: "Gunakan AVG"
  },
  {
    id: 12,
    modulId: 7,
    judul: "Nilai Tertinggi per Kelas",
    instruksi: "Tampilkan nilai tertinggi per kelas.",
    expectedQuery: "SELECT kelas, MAX(nilai) FROM siswa GROUP BY kelas",
    tabelSkema: [
      { id: 1, nama: "A", kelas: "1A", nilai: 80 },
      { id: 2, nama: "B", kelas: "1A", nilai: 70 },
      { id: 3, nama: "C", kelas: "1B", nilai: 90 },
      { id: 4, nama: "D", kelas: "1B", nilai: 60 },
      { id: 5, nama: "E", kelas: "1A", nilai: 85 }
    ],
    hint: "Gunakan GROUP BY"
  },
  {
    id: 13,
    modulId: 7,
    judul: "Jumlah Siswa per Kelas",
    instruksi: "Hitung jumlah siswa per kelas.",
    expectedQuery: "SELECT kelas, COUNT(*) FROM siswa GROUP BY kelas",
    tabelSkema: [
      { id: 1, nama: "A", kelas: "1A", nilai: 80 },
      { id: 2, nama: "B", kelas: "1A", nilai: 70 },
      { id: 3, nama: "C", kelas: "1B", nilai: 90 },
      { id: 4, nama: "D", kelas: "1B", nilai: 60 },
      { id: 5, nama: "E", kelas: "1A", nilai: 85 }
    ],
    hint: "Gunakan COUNT + GROUP BY"
  },
  {
    id: 14,
    modulId: 7,
    judul: "Nilai Terendah",
    instruksi: "Tampilkan nilai terendah siswa.",
    expectedQuery: "SELECT MIN(nilai) FROM siswa",
    tabelSkema: [
      { id: 1, nama: "A", kelas: "1A", nilai: 80 },
      { id: 2, nama: "B", kelas: "1A", nilai: 70 },
      { id: 3, nama: "C", kelas: "1B", nilai: 90 },
      { id: 4, nama: "D", kelas: "1B", nilai: 60 },
      { id: 5, nama: "E", kelas: "1A", nilai: 85 }
    ],
    hint: "Gunakan MIN"
  },
  {
    id: 15,
    modulId: 7,
    judul: "Total Nilai",
    instruksi: "Hitung total nilai semua siswa.",
    expectedQuery: "SELECT SUM(nilai) FROM siswa",
    tabelSkema: [
      { id: 1, nama: "A", kelas: "1A", nilai: 80 },
      { id: 2, nama: "B", kelas: "1A", nilai: 70 },
      { id: 3, nama: "C", kelas: "1B", nilai: 90 },
      { id: 4, nama: "D", kelas: "1B", nilai: 60 },
      { id: 5, nama: "E", kelas: "1A", nilai: 85 }
    ],
    hint: "Gunakan SUM"
  },
  {
    id: 16,
    modulId: 7,
    judul: "Rata-rata Nilai per Kelas",
    instruksi: "Hitung rata-rata nilai siswa per kelas.",
    expectedQuery: "SELECT kelas, AVG(nilai) FROM siswa GROUP BY kelas",
    tabelSkema: [
      { id: 1, nama: "A", kelas: "1A", nilai: 80 },
      { id: 2, nama: "B", kelas: "1A", nilai: 70 },
      { id: 3, nama: "C", kelas: "1B", nilai: 90 },
      { id: 4, nama: "D", kelas: "1B", nilai: 60 },
      { id: 5, nama: "E", kelas: "1A", nilai: 85 }
    ],
    hint: "Gunakan AVG + GROUP BY"
  },
  {
    id: 17,
    modulId: 7,
    judul: "Jumlah Siswa dengan Nilai Tinggi",
    instruksi: "Hitung jumlah siswa yang memiliki nilai di atas 75.",
    expectedQuery: "SELECT COUNT(*) FROM siswa WHERE nilai > 75",
    tabelSkema: [
      { id: 1, nama: "A", kelas: "1A", nilai: 80 },
      { id: 2, nama: "B", kelas: "1A", nilai: 70 },
      { id: 3, nama: "C", kelas: "1B", nilai: 90 },
      { id: 4, nama: "D", kelas: "1B", nilai: 60 },
      { id: 5, nama: "E", kelas: "1A", nilai: 85 }
    ],
    hint: "Gunakan WHERE + COUNT"
  },
  {
    id: 18,
    modulId: 7,
    judul: "Kelas dengan Jumlah Siswa Lebih dari 2",
    instruksi: "Tampilkan kelas yang memiliki jumlah siswa lebih dari 2.",
    expectedQuery: "SELECT kelas, COUNT(*) FROM siswa GROUP BY kelas HAVING COUNT(*) > 2",
    tabelSkema: [
      { id: 1, nama: "A", kelas: "1A", nilai: 80 },
      { id: 2, nama: "B", kelas: "1A", nilai: 70 },
      { id: 3, nama: "C", kelas: "1B", nilai: 90 },
      { id: 4, nama: "D", kelas: "1B", nilai: 60 },
      { id: 5, nama: "E", kelas: "1A", nilai: 85 }
    ],
    hint: "Gunakan HAVING"
  },
  {
    id: 19,
    modulId: 7,
    judul: "Total Nilai per Kelas",
    instruksi: "Hitung total nilai untuk setiap kelas.",
    expectedQuery: "SELECT kelas, SUM(nilai) FROM siswa GROUP BY kelas",
    tabelSkema: [
      { id: 1, nama: "A", kelas: "1A", nilai: 80 },
      { id: 2, nama: "B", kelas: "1A", nilai: 70 },
      { id: 3, nama: "C", kelas: "1B", nilai: 90 },
      { id: 4, nama: "D", kelas: "1B", nilai: 60 },
      { id: 5, nama: "E", kelas: "1A", nilai: 85 }
    ],
    hint: "Gunakan SUM + GROUP BY"
  },
  {
    id: 20,
    modulId: 7,
    judul: "Kelas dengan Rata-rata Nilai Tinggi",
    instruksi: "Tampilkan kelas yang memiliki rata-rata nilai di atas 75.",
    expectedQuery: "SELECT kelas, AVG(nilai) FROM siswa GROUP BY kelas HAVING AVG(nilai) > 75",
    tabelSkema: [
      { id: 1, nama: "A", kelas: "1A", nilai: 80 },
      { id: 2, nama: "B", kelas: "1A", nilai: 70 },
      { id: 3, nama: "C", kelas: "1B", nilai: 90 },
      { id: 4, nama: "D", kelas: "1B", nilai: 60 },
      { id: 5, nama: "E", kelas: "1A", nilai: 85 }
    ],
    hint: "Gunakan HAVING + AVG"
  },
  {
    id: 1,
    modulId: 8,
    judul: "Produk di Atas Rata-rata",
    instruksi: "Tampilkan produk dengan harga di atas rata-rata.",
    expectedQuery: "SELECT * FROM produk WHERE harga > (SELECT AVG(harga) FROM produk)",
    tabelSkema: [
      { id: 1, nama: "Laptop", kategori: "Elektronik", harga: 5000000 },
      { id: 2, nama: "Mouse", kategori: "Elektronik", harga: 200000 },
      { id: 3, nama: "Keyboard", kategori: "Elektronik", harga: 300000 },
      { id: 4, nama: "Monitor", kategori: "Elektronik", harga: 1500000 },
      { id: 5, nama: "Printer", kategori: "Elektronik", harga: 2500000 }
    ],
    hint: "Gunakan AVG dalam subquery"
  },
  {
    id: 2,
    modulId: 8,
    judul: "Harga Tertinggi",
    instruksi: "Tampilkan produk dengan harga tertinggi.",
    expectedQuery: "SELECT * FROM produk WHERE harga = (SELECT MAX(harga) FROM produk)",
    tabelSkema: [
      { id: 1, nama: "Laptop", kategori: "Elektronik", harga: 5000000 },
      { id: 2, nama: "Mouse", kategori: "Elektronik", harga: 200000 },
      { id: 3, nama: "Keyboard", kategori: "Elektronik", harga: 300000 },
      { id: 4, nama: "Monitor", kategori: "Elektronik", harga: 1500000 },
      { id: 5, nama: "Printer", kategori: "Elektronik", harga: 2500000 }
    ],
    hint: "Gunakan MAX dalam subquery"
  },
  {
    id: 3,
    modulId: 8,
    judul: "Produk Lebih Mahal dari Laptop",
    instruksi: "Tampilkan produk yang lebih mahal dari Laptop.",
    expectedQuery: "SELECT * FROM produk WHERE harga > (SELECT harga FROM produk WHERE nama = 'Laptop')",
    tabelSkema: [
      { id: 1, nama: "Laptop", kategori: "Elektronik", harga: 5000000 },
      { id: 2, nama: "Mouse", kategori: "Elektronik", harga: 200000 },
      { id: 3, nama: "Keyboard", kategori: "Elektronik", harga: 300000 },
      { id: 4, nama: "Monitor", kategori: "Elektronik", harga: 1500000 },
      { id: 5, nama: "Printer", kategori: "Elektronik", harga: 2500000 }
    ],
    hint: "Ambil harga Laptop di subquery"
  },
  {
    id: 4,
    modulId: 8,
    judul: "Produk di Bawah Rata-rata",
    instruksi: "Tampilkan produk dengan harga di bawah rata-rata.",
    expectedQuery: "SELECT * FROM produk WHERE harga < (SELECT AVG(harga) FROM produk)",
    tabelSkema: [
      { id: 1, nama: "Laptop", kategori: "Elektronik", harga: 5000000 },
      { id: 2, nama: "Mouse", kategori: "Elektronik", harga: 200000 },
      { id: 3, nama: "Keyboard", kategori: "Elektronik", harga: 300000 },
      { id: 4, nama: "Monitor", kategori: "Elektronik", harga: 1500000 },
      { id: 5, nama: "Printer", kategori: "Elektronik", harga: 2500000 }
    ],
    hint: "Gunakan AVG"
  },
  {
    id: 5,
    modulId: 8,
    judul: "Produk Bukan Harga Tertinggi",
    instruksi: "Tampilkan semua produk kecuali yang harga tertinggi.",
    expectedQuery: "SELECT * FROM produk WHERE harga <> (SELECT MAX(harga) FROM produk)",
    tabelSkema: [
      { id: 1, nama: "Laptop", kategori: "Elektronik", harga: 5000000 },
      { id: 2, nama: "Mouse", kategori: "Elektronik", harga: 200000 },
      { id: 3, nama: "Keyboard", kategori: "Elektronik", harga: 300000 },
      { id: 4, nama: "Monitor", kategori: "Elektronik", harga: 1500000 },
      { id: 5, nama: "Printer", kategori: "Elektronik", harga: 2500000 }
    ],
    hint: "Gunakan <>"
  },
  {
    id: 6,
    modulId: 8,
    judul: "Gaji di Atas Rata-rata",
    instruksi: "Tampilkan karyawan dengan gaji di atas rata-rata.",
    expectedQuery: "SELECT * FROM karyawan WHERE gaji > (SELECT AVG(gaji) FROM karyawan)",
    tabelSkema: [
      { id: 1, nama: "Andi", departemen: "IT", gaji: 5000000 },
      { id: 2, nama: "Budi", departemen: "HR", gaji: 6000000 },
      { id: 3, nama: "Sari", departemen: "IT", gaji: 7000000 },
      { id: 4, nama: "Rina", departemen: "Finance", gaji: 4000000 },
      { id: 5, nama: "Doni", departemen: "IT", gaji: 8000000 }
    ],
    hint: "Gunakan AVG"
  },
  {
    id: 7,
    modulId: 8,
    judul: "Gaji Tertinggi",
    instruksi: "Tampilkan karyawan dengan gaji tertinggi.",
    expectedQuery: "SELECT * FROM karyawan WHERE gaji = (SELECT MAX(gaji) FROM karyawan)",
    tabelSkema: [
      { id: 1, nama: "Andi", departemen: "IT", gaji: 5000000 },
      { id: 2, nama: "Budi", departemen: "HR", gaji: 6000000 },
      { id: 3, nama: "Sari", departemen: "IT", gaji: 7000000 },
      { id: 4, nama: "Rina", departemen: "Finance", gaji: 4000000 },
      { id: 5, nama: "Doni", departemen: "IT", gaji: 8000000 }
    ],
    hint: "Gunakan MAX"
  },
  {
    id: 8,
    modulId: 8,
    judul: "Gaji di Bawah Rata-rata",
    instruksi: "Tampilkan karyawan dengan gaji di bawah rata-rata.",
    expectedQuery: "SELECT * FROM karyawan WHERE gaji < (SELECT AVG(gaji) FROM karyawan)",
    tabelSkema: [
      { id: 1, nama: "Andi", departemen: "IT", gaji: 5000000 },
      { id: 2, nama: "Budi", departemen: "HR", gaji: 6000000 },
      { id: 3, nama: "Sari", departemen: "IT", gaji: 7000000 },
      { id: 4, nama: "Rina", departemen: "Finance", gaji: 4000000 },
      { id: 5, nama: "Doni", departemen: "IT", gaji: 8000000 }
    ],
    hint: "Gunakan AVG"
  },
  {
    id: 9,
    modulId: 8,
    judul: "Gaji Sama dengan Andi",
    instruksi: "Tampilkan karyawan dengan gaji sama dengan Andi.",
    expectedQuery: "SELECT * FROM karyawan WHERE gaji = (SELECT gaji FROM karyawan WHERE nama = 'Andi')",
    tabelSkema: [
      { id: 1, nama: "Andi", departemen: "IT", gaji: 5000000 },
      { id: 2, nama: "Budi", departemen: "HR", gaji: 6000000 },
      { id: 3, nama: "Sari", departemen: "IT", gaji: 5000000 },
      { id: 4, nama: "Rina", departemen: "Finance", gaji: 4000000 },
      { id: 5, nama: "Doni", departemen: "IT", gaji: 8000000 }
    ],
    hint: "Ambil gaji Andi"
  },
  {
    id: 10,
    modulId: 8,
    judul: "Gaji di Atas Minimum",
    instruksi: "Tampilkan karyawan dengan gaji di atas minimum.",
    expectedQuery: "SELECT * FROM karyawan WHERE gaji > (SELECT MIN(gaji) FROM karyawan)",
    tabelSkema: [
      { id: 1, nama: "Andi", departemen: "IT", gaji: 5000000 },
      { id: 2, nama: "Budi", departemen: "HR", gaji: 6000000 },
      { id: 3, nama: "Sari", departemen: "IT", gaji: 7000000 },
      { id: 4, nama: "Rina", departemen: "Finance", gaji: 4000000 },
      { id: 5, nama: "Doni", departemen: "IT", gaji: 8000000 }
    ],
    hint: "Gunakan MIN"
  },
  {
    id: 11,
    modulId: 8,
    judul: "Nilai di Atas Rata-rata",
    instruksi: "Tampilkan siswa dengan nilai di atas rata-rata.",
    expectedQuery: "SELECT * FROM siswa WHERE nilai > (SELECT AVG(nilai) FROM siswa)",
    tabelSkema: [
      { id: 1, nama: "A", kelas: "1A", nilai: 80 },
      { id: 2, nama: "B", kelas: "1A", nilai: 70 },
      { id: 3, nama: "C", kelas: "1B", nilai: 90 },
      { id: 4, nama: "D", kelas: "1B", nilai: 60 },
      { id: 5, nama: "E", kelas: "1A", nilai: 85 }
    ],
    hint: "Gunakan AVG"
  },
  {
    id: 12,
    modulId: 8,
    judul: "Nilai Tertinggi",
    instruksi: "Tampilkan siswa dengan nilai tertinggi.",
    expectedQuery: "SELECT * FROM siswa WHERE nilai = (SELECT MAX(nilai) FROM siswa)",
    tabelSkema: [
      { id: 1, nama: "A", kelas: "1A", nilai: 80 },
      { id: 2, nama: "B", kelas: "1A", nilai: 70 },
      { id: 3, nama: "C", kelas: "1B", nilai: 90 },
      { id: 4, nama: "D", kelas: "1B", nilai: 60 },
      { id: 5, nama: "E", kelas: "1A", nilai: 85 }
    ],
    hint: "Gunakan MAX"
  },
  {
    id: 13,
    modulId: 8,
    judul: "Nilai di Bawah Maksimum",
    instruksi: "Tampilkan siswa dengan nilai di bawah nilai tertinggi.",
    expectedQuery: "SELECT * FROM siswa WHERE nilai < (SELECT MAX(nilai) FROM siswa)",
    tabelSkema: [
      { id: 1, nama: "A", kelas: "1A", nilai: 80 },
      { id: 2, nama: "B", kelas: "1A", nilai: 70 },
      { id: 3, nama: "C", kelas: "1B", nilai: 90 },
      { id: 4, nama: "D", kelas: "1B", nilai: 60 },
      { id: 5, nama: "E", kelas: "1A", nilai: 85 }
    ],
    hint: "Gunakan MAX"
  },
  {
    id: 14,
    modulId: 8,
    judul: "Nilai Sama dengan Siswa A",
    instruksi: "Tampilkan siswa dengan nilai sama dengan siswa A.",
    expectedQuery: "SELECT * FROM siswa WHERE nilai = (SELECT nilai FROM siswa WHERE nama = 'A')",
    tabelSkema: [
      { id: 1, nama: "A", kelas: "1A", nilai: 80 },
      { id: 2, nama: "B", kelas: "1A", nilai: 70 },
      { id: 3, nama: "C", kelas: "1B", nilai: 80 },
      { id: 4, nama: "D", kelas: "1B", nilai: 60 },
      { id: 5, nama: "E", kelas: "1A", nilai: 85 }
    ],
    hint: "Ambil nilai A"
  },
  {
    id: 15,
    modulId: 8,
    judul: "Nilai di Atas Minimum",
    instruksi: "Tampilkan siswa dengan nilai di atas nilai minimum.",
    expectedQuery: "SELECT * FROM siswa WHERE nilai > (SELECT MIN(nilai) FROM siswa)",
    tabelSkema: [
      { id: 1, nama: "A", kelas: "1A", nilai: 80 },
      { id: 2, nama: "B", kelas: "1A", nilai: 70 },
      { id: 3, nama: "C", kelas: "1B", nilai: 90 },
      { id: 4, nama: "D", kelas: "1B", nilai: 60 },
      { id: 5, nama: "E", kelas: "1A", nilai: 85 }
    ],
    hint: "Gunakan MIN"
  },
  {
    id: 16,
    modulId: 8,
    judul: "Produk Lebih Mahal dari Rata-rata Kategori",
    instruksi: "Tampilkan produk yang harganya lebih tinggi dari rata-rata kategori 'Elektronik'.",
    expectedQuery: "SELECT * FROM produk WHERE harga > (SELECT AVG(harga) FROM produk WHERE kategori = 'Elektronik')",
    tabelSkema: [
      { id: 1, nama: "Laptop", kategori: "Elektronik", harga: 5000000 },
      { id: 2, nama: "Mouse", kategori: "Elektronik", harga: 200000 },
      { id: 3, nama: "Buku", kategori: "Non-Elektronik", harga: 100000 },
      { id: 4, nama: "Monitor", kategori: "Elektronik", harga: 1500000 },
      { id: 5, nama: "Printer", kategori: "Elektronik", harga: 2500000 }
    ],
    hint: "Gunakan AVG dengan WHERE kategori"
  },
  {
    id: 17,
    modulId: 8,
    judul: "Karyawan di Atas Rata-rata Departemen IT",
    instruksi: "Tampilkan karyawan yang gajinya lebih tinggi dari rata-rata departemen IT.",
    expectedQuery: "SELECT * FROM karyawan WHERE gaji > (SELECT AVG(gaji) FROM karyawan WHERE departemen = 'IT')",
    tabelSkema: [
      { id: 1, nama: "Andi", departemen: "IT", gaji: 5000000 },
      { id: 2, nama: "Budi", departemen: "HR", gaji: 6000000 },
      { id: 3, nama: "Sari", departemen: "IT", gaji: 7000000 },
      { id: 4, nama: "Rina", departemen: "Finance", gaji: 4000000 },
      { id: 5, nama: "Doni", departemen: "IT", gaji: 8000000 }
    ],
    hint: "Gunakan subquery dengan filter departemen"
  },
  {
    id: 18,
    modulId: 8,
    judul: "Siswa dengan Nilai Kedua Tertinggi",
    instruksi: "Tampilkan siswa dengan nilai tertinggi kedua.",
    expectedQuery: "SELECT * FROM siswa WHERE nilai = (SELECT MAX(nilai) FROM siswa WHERE nilai < (SELECT MAX(nilai) FROM siswa))",
    tabelSkema: [
      { id: 1, nama: "A", kelas: "1A", nilai: 80 },
      { id: 2, nama: "B", kelas: "1A", nilai: 70 },
      { id: 3, nama: "C", kelas: "1B", nilai: 90 },
      { id: 4, nama: "D", kelas: "1B", nilai: 60 },
      { id: 5, nama: "E", kelas: "1A", nilai: 85 }
    ],
    hint: "Gunakan MAX dua kali (nested subquery)"
  },
  {
    id: 19,
    modulId: 8,
    judul: "Produk Lebih Murah dari Semua Produk Elektronik",
    instruksi: "Tampilkan produk yang lebih murah dari semua produk kategori Elektronik.",
    expectedQuery: "SELECT * FROM produk WHERE harga < ALL (SELECT harga FROM produk WHERE kategori = 'Elektronik')",
    tabelSkema: [
      { id: 1, nama: "Laptop", kategori: "Elektronik", harga: 5000000 },
      { id: 2, nama: "Mouse", kategori: "Elektronik", harga: 200000 },
      { id: 3, nama: "Buku", kategori: "Non-Elektronik", harga: 100000 },
      { id: 4, nama: "Monitor", kategori: "Elektronik", harga: 1500000 },
      { id: 5, nama: "Printer", kategori: "Elektronik", harga: 2500000 }
    ],
    hint: "Gunakan ALL"
  },
  {
    id: 20,
    modulId: 8,
    judul: "Karyawan Bukan Gaji Terendah",
    instruksi: "Tampilkan semua karyawan kecuali yang memiliki gaji terendah.",
    expectedQuery: "SELECT * FROM karyawan WHERE gaji <> (SELECT MIN(gaji) FROM karyawan)",
    tabelSkema: [
      { id: 1, nama: "Andi", departemen: "IT", gaji: 5000000 },
      { id: 2, nama: "Budi", departemen: "HR", gaji: 6000000 },
      { id: 3, nama: "Sari", departemen: "IT", gaji: 7000000 },
      { id: 4, nama: "Rina", departemen: "Finance", gaji: 4000000 },
      { id: 5, nama: "Doni", departemen: "IT", gaji: 8000000 }
    ],
    hint: "Gunakan MIN + operator <>"
  },
  {
    id: 1,
    modulId: 9,
    judul: "Primary Key pada ID",
    instruksi: "Buat tabel 'users' dengan kolom id sebagai PRIMARY KEY.",
    expectedQuery: "CREATE TABLE users (id INT PRIMARY KEY, nama VARCHAR(50), email VARCHAR(50), umur INT);",
    tabelSkema: [
      { id: 1, nama: "Andi", email: "andi@mail.com", umur: 20 },
      { id: 2, nama: "Budi", email: "budi@mail.com", umur: 25 },
      { id: 3, nama: "Sari", email: "sari@mail.com", umur: 22 },
      { id: 4, nama: "Rina", email: "rina@mail.com", umur: 30 },
      { id: 5, nama: "Doni", email: "doni@mail.com", umur: 28 }
    ],
    hint: "Gunakan PRIMARY KEY"
  },
  {
    id: 2,
    modulId: 9,
    judul: "NOT NULL pada Nama",
    instruksi: "Buat tabel 'pelanggan' dengan kolom nama tidak boleh NULL.",
    expectedQuery: "CREATE TABLE pelanggan (id INT, nama VARCHAR(50) NOT NULL, kota VARCHAR(50), umur INT);",
    tabelSkema: [
      { id: 1, nama: "A", kota: "Medan", umur: 20 },
      { id: 2, nama: "B", kota: "Jakarta", umur: 25 },
      { id: 3, nama: "C", kota: "Bandung", umur: 22 },
      { id: 4, nama: "D", kota: "Surabaya", umur: 30 },
      { id: 5, nama: "E", kota: "Bali", umur: 28 }
    ],
    hint: "Gunakan NOT NULL"
  },
  {
    id: 3,
    modulId: 9,
    judul: "UNIQUE Email",
    instruksi: "Buat tabel 'users' dengan email harus unik.",
    expectedQuery: "CREATE TABLE users (id INT, nama VARCHAR(50), email VARCHAR(50) UNIQUE, umur INT);",
    tabelSkema: [
      { id: 1, nama: "Andi", email: "andi@mail.com", umur: 20 },
      { id: 2, nama: "Budi", email: "budi@mail.com", umur: 25 },
      { id: 3, nama: "Sari", email: "sari@mail.com", umur: 22 },
      { id: 4, nama: "Rina", email: "rina@mail.com", umur: 30 },
      { id: 5, nama: "Doni", email: "doni@mail.com", umur: 28 }
    ],
    hint: "Gunakan UNIQUE"
  },
  {
    id: 4,
    modulId: 9,
    judul: "DEFAULT Nilai",
    instruksi: "Buat tabel 'produk' dengan stok default 0.",
    expectedQuery: "CREATE TABLE produk (id INT, nama VARCHAR(50), kategori VARCHAR(50), stok INT DEFAULT 0);",
    tabelSkema: [
      { id: 1, nama: "Laptop", kategori: "Elektronik", stok: 5 },
      { id: 2, nama: "Mouse", kategori: "Elektronik", stok: 10 },
      { id: 3, nama: "Keyboard", kategori: "Elektronik", stok: 8 },
      { id: 4, nama: "Monitor", kategori: "Elektronik", stok: 3 },
      { id: 5, nama: "Printer", kategori: "Elektronik", stok: 2 }
    ],
    hint: "Gunakan DEFAULT"
  },
  {
    id: 5,
    modulId: 9,
    judul: "CHECK Harga",
    instruksi: "Buat tabel 'barang' dengan harga harus lebih dari 0.",
    expectedQuery: "CREATE TABLE barang (id INT, nama VARCHAR(50), kategori VARCHAR(50), harga INT CHECK (harga > 0));",
    tabelSkema: [
      { id: 1, nama: "A", kategori: "X", harga: 100 },
      { id: 2, nama: "B", kategori: "X", harga: 200 },
      { id: 3, nama: "C", kategori: "Y", harga: 300 },
      { id: 4, nama: "D", kategori: "Y", harga: 400 },
      { id: 5, nama: "E", kategori: "Z", harga: 500 }
    ],
    hint: "Gunakan CHECK"
  },
  {
    id: 6,
    modulId: 9,
    judul: "Foreign Key Dasar",
    instruksi: "Buat tabel 'pesanan' dengan foreign key ke 'users'.",
    expectedQuery: "CREATE TABLE pesanan (id INT, user_id INT, produk VARCHAR(50), total INT, FOREIGN KEY (user_id) REFERENCES users(id));",
    tabelSkema: [
      { id: 1, user_id: 1, produk: "Laptop", total: 5000000 },
      { id: 2, user_id: 2, produk: "Mouse", total: 200000 },
      { id: 3, user_id: 3, produk: "Keyboard", total: 300000 },
      { id: 4, user_id: 1, produk: "Monitor", total: 1500000 },
      { id: 5, user_id: 2, produk: "Printer", total: 2500000 }
    ],
    hint: "Gunakan FOREIGN KEY"
  },
  {
    id: 7,
    modulId: 9,
    judul: "Primary + NOT NULL",
    instruksi: "Buat tabel 'kategori' dengan id PRIMARY KEY dan nama NOT NULL.",
    expectedQuery: "CREATE TABLE kategori (id INT PRIMARY KEY, nama VARCHAR(50) NOT NULL, deskripsi VARCHAR(50), status VARCHAR(20));",
    tabelSkema: [
      { id: 1, nama: "A", deskripsi: "X", status: "aktif" },
      { id: 2, nama: "B", deskripsi: "Y", status: "aktif" },
      { id: 3, nama: "C", deskripsi: "Z", status: "nonaktif" },
      { id: 4, nama: "D", deskripsi: "X", status: "aktif" },
      { id: 5, nama: "E", deskripsi: "Y", status: "aktif" }
    ],
    hint: "Gabungkan constraint"
  },
  {
    id: 8,
    modulId: 9,
    judul: "UNIQUE Username",
    instruksi: "Buat tabel 'akun' dengan username unik.",
    expectedQuery: "CREATE TABLE akun (id INT, username VARCHAR(50) UNIQUE, password VARCHAR(50), role VARCHAR(20));",
    tabelSkema: [
      { id: 1, username: "andi", password: "123", role: "admin" },
      { id: 2, username: "budi", password: "123", role: "user" },
      { id: 3, username: "sari", password: "123", role: "user" },
      { id: 4, username: "rina", password: "123", role: "admin" },
      { id: 5, username: "doni", password: "123", role: "user" }
    ],
    hint: "Gunakan UNIQUE"
  },
  {
    id: 9,
    modulId: 9,
    judul: "CHECK Umur",
    instruksi: "Buat tabel 'anggota' dengan umur minimal 17.",
    expectedQuery: "CREATE TABLE anggota (id INT, nama VARCHAR(50), kota VARCHAR(50), umur INT CHECK (umur >= 17));",
    tabelSkema: [
      { id: 1, nama: "A", kota: "Medan", umur: 18 },
      { id: 2, nama: "B", kota: "Jakarta", umur: 20 },
      { id: 3, nama: "C", kota: "Bandung", umur: 25 },
      { id: 4, nama: "D", kota: "Surabaya", umur: 30 },
      { id: 5, nama: "E", kota: "Bali", umur: 22 }
    ],
    hint: "Gunakan CHECK"
  },
  {
    id: 10,
    modulId: 9,
    judul: "DEFAULT Status",
    instruksi: "Buat tabel 'pesanan' dengan status default 'pending'.",
    expectedQuery: "CREATE TABLE pesanan (id INT, produk VARCHAR(50), total INT, status VARCHAR(20) DEFAULT 'pending');",
    tabelSkema: [
      { id: 1, produk: "Laptop", total: 5000000, status: "pending" },
      { id: 2, produk: "Mouse", total: 200000, status: "selesai" },
      { id: 3, produk: "Keyboard", total: 300000, status: "pending" },
      { id: 4, produk: "Monitor", total: 1500000, status: "proses" },
      { id: 5, produk: "Printer", total: 2500000, status: "pending" }
    ],
    hint: "Gunakan DEFAULT"
  },
  {
    id: 11,
    modulId: 9,
    judul: "CHECK Range",
    instruksi: "Buat tabel 'nilai' dengan skor antara 0-100.",
    expectedQuery: "CREATE TABLE nilai (id INT, nama VARCHAR(50), kelas VARCHAR(10), skor INT CHECK (skor BETWEEN 0 AND 100));",
    tabelSkema: [
      { id: 1, nama: "A", kelas: "1A", skor: 80 },
      { id: 2, nama: "B", kelas: "1A", skor: 70 },
      { id: 3, nama: "C", kelas: "1B", skor: 90 },
      { id: 4, nama: "D", kelas: "1B", skor: 60 },
      { id: 5, nama: "E", kelas: "1A", skor: 85 }
    ],
    hint: "Gunakan BETWEEN"
  },
  {
    id: 12,
    modulId: 9,
    judul: "Composite Unique",
    instruksi: "Buat tabel 'jadwal' dengan kombinasi hari dan jam unik.",
    expectedQuery: "CREATE TABLE jadwal (id INT, hari VARCHAR(20), jam VARCHAR(10), ruang VARCHAR(10), UNIQUE (hari, jam));",
    tabelSkema: [
      { id: 1, hari: "Senin", jam: "08:00", ruang: "A" },
      { id: 2, hari: "Senin", jam: "10:00", ruang: "B" },
      { id: 3, hari: "Selasa", jam: "08:00", ruang: "A" },
      { id: 4, hari: "Rabu", jam: "10:00", ruang: "C" },
      { id: 5, hari: "Kamis", jam: "08:00", ruang: "B" }
    ],
    hint: "Gunakan UNIQUE (2 kolom)"
  },
  {
    id: 13,
    modulId: 9,
    judul: "Primary + Unique",
    instruksi: "Buat tabel 'produk' dengan id PRIMARY KEY dan nama UNIQUE.",
    expectedQuery: "CREATE TABLE produk (id INT PRIMARY KEY, nama VARCHAR(50) UNIQUE, kategori VARCHAR(50), harga INT);",
    tabelSkema: [
      { id: 1, nama: "Laptop", kategori: "Elektronik", harga: 5000000 },
      { id: 2, nama: "Mouse", kategori: "Elektronik", harga: 200000 },
      { id: 3, nama: "Keyboard", kategori: "Elektronik", harga: 300000 },
      { id: 4, nama: "Monitor", kategori: "Elektronik", harga: 1500000 },
      { id: 5, nama: "Printer", kategori: "Elektronik", harga: 2500000 }
    ],
    hint: "Gabungkan constraint"
  },
  {
    id: 14,
    modulId: 9,
    judul: "DEFAULT Tanggal",
    instruksi: "Buat tabel 'log' dengan tanggal default sekarang.",
    expectedQuery: "CREATE TABLE log (id INT, aktivitas VARCHAR(50), user VARCHAR(50), tanggal TIMESTAMP DEFAULT CURRENT_TIMESTAMP);",
    tabelSkema: [
      { id: 1, aktivitas: "Login", user: "A", tanggal: "2024-01-01" },
      { id: 2, aktivitas: "Logout", user: "B", tanggal: "2024-01-02" },
      { id: 3, aktivitas: "Login", user: "C", tanggal: "2024-01-03" },
      { id: 4, aktivitas: "Edit", user: "D", tanggal: "2024-01-04" },
      { id: 5, aktivitas: "Delete", user: "E", tanggal: "2024-01-05" }
    ],
    hint: "Gunakan CURRENT_TIMESTAMP"
  },
  {
    id: 15,
    modulId: 9,
    judul: "CHECK Enum",
    instruksi: "Buat tabel 'pesanan' dengan status hanya 'pending', 'proses', 'selesai'.",
    expectedQuery: "CREATE TABLE pesanan (id INT, produk VARCHAR(50), total INT, status VARCHAR(20) CHECK (status IN ('pending','proses','selesai')));",
    tabelSkema: [
      { id: 1, produk: "Laptop", total: 5000000, status: "pending" },
      { id: 2, produk: "Mouse", total: 200000, status: "selesai" },
      { id: 3, produk: "Keyboard", total: 300000, status: "pending" },
      { id: 4, produk: "Monitor", total: 1500000, status: "proses" },
      { id: 5, produk: "Printer", total: 2500000, status: "pending" }
    ],
    hint: "Gunakan CHECK IN"
  },
  {
    id: 16,
    modulId: 9,
    judul: "Foreign Key dengan ON DELETE CASCADE",
    instruksi: "Buat tabel 'detail_pesanan' dengan foreign key ke tabel 'pesanan' dan gunakan ON DELETE CASCADE.",
    expectedQuery: "CREATE TABLE detail_pesanan (id INT, pesanan_id INT, produk VARCHAR(50), qty INT, FOREIGN KEY (pesanan_id) REFERENCES pesanan(id) ON DELETE CASCADE);",
    tabelSkema: [
      { id: 1, pesanan_id: 1, produk: "Laptop", qty: 1 },
      { id: 2, pesanan_id: 2, produk: "Mouse", qty: 2 },
      { id: 3, pesanan_id: 3, produk: "Keyboard", qty: 1 },
      { id: 4, pesanan_id: 1, produk: "Monitor", qty: 1 },
      { id: 5, pesanan_id: 2, produk: "Printer", qty: 1 }
    ],
    hint: "Gunakan FOREIGN KEY + ON DELETE CASCADE"
  },
  {
    id: 17,
    modulId: 9,
    judul: "Multiple NOT NULL",
    instruksi: "Buat tabel 'pegawai' dengan kolom nama dan jabatan tidak boleh NULL.",
    expectedQuery: "CREATE TABLE pegawai (id INT, nama VARCHAR(50) NOT NULL, jabatan VARCHAR(50) NOT NULL, gaji INT);",
    tabelSkema: [
      { id: 1, nama: "Andi", jabatan: "Manager", gaji: 8000000 },
      { id: 2, nama: "Budi", jabatan: "Staff", gaji: 5000000 },
      { id: 3, nama: "Sari", jabatan: "Admin", gaji: 4000000 },
      { id: 4, nama: "Rina", jabatan: "HR", gaji: 6000000 },
      { id: 5, nama: "Doni", jabatan: "IT", gaji: 7000000 }
    ],
    hint: "Gunakan NOT NULL di dua kolom"
  },
  {
    id: 18,
    modulId: 9,
    judul: "CHECK Gaji Minimum",
    instruksi: "Buat tabel 'karyawan' dengan gaji minimal 3000000.",
    expectedQuery: "CREATE TABLE karyawan (id INT, nama VARCHAR(50), departemen VARCHAR(50), gaji INT CHECK (gaji >= 3000000));",
    tabelSkema: [
      { id: 1, nama: "Andi", departemen: "IT", gaji: 5000000 },
      { id: 2, nama: "Budi", departemen: "HR", gaji: 4000000 },
      { id: 3, nama: "Sari", departemen: "Finance", gaji: 6000000 },
      { id: 4, nama: "Rina", departemen: "IT", gaji: 7000000 },
      { id: 5, nama: "Doni", departemen: "HR", gaji: 8000000 }
    ],
    hint: "Gunakan CHECK (gaji >= ...)"
  },
  {
    id: 19,
    modulId: 9,
    judul: "UNIQUE Kombinasi Kolom",
    instruksi: "Buat tabel 'absensi' dengan kombinasi nama dan tanggal unik.",
    expectedQuery: "CREATE TABLE absensi (id INT, nama VARCHAR(50), tanggal DATE, status VARCHAR(20), UNIQUE (nama, tanggal));",
    tabelSkema: [
      { id: 1, nama: "Andi", tanggal: "2024-01-01", status: "Hadir" },
      { id: 2, nama: "Budi", tanggal: "2024-01-01", status: "Hadir" },
      { id: 3, nama: "Sari", tanggal: "2024-01-02", status: "Izin" },
      { id: 4, nama: "Rina", tanggal: "2024-01-02", status: "Hadir" },
      { id: 5, nama: "Doni", tanggal: "2024-01-03", status: "Sakit" }
    ],
    hint: "Gunakan UNIQUE (nama, tanggal)"
  },
  {
    id: 20,
    modulId: 9,
    judul: "Gabungan Semua Constraint",
    instruksi: "Buat tabel 'users' dengan id PRIMARY KEY, email UNIQUE, nama NOT NULL, dan umur minimal 17.",
    expectedQuery: "CREATE TABLE users (id INT PRIMARY KEY, nama VARCHAR(50) NOT NULL, email VARCHAR(50) UNIQUE, umur INT CHECK (umur >= 17));",
    tabelSkema: [
      { id: 1, nama: "Andi", email: "andi@mail.com", umur: 20 },
      { id: 2, nama: "Budi", email: "budi@mail.com", umur: 25 },
      { id: 3, nama: "Sari", email: "sari@mail.com", umur: 22 },
      { id: 4, nama: "Rina", email: "rina@mail.com", umur: 30 },
      { id: 5, nama: "Doni", email: "doni@mail.com", umur: 28 }
    ],
    hint: "Gabungkan PRIMARY KEY, UNIQUE, NOT NULL, CHECK"
  }
];

export default soalData;