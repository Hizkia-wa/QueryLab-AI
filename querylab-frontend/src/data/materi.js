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
  }
];

export default materiData;