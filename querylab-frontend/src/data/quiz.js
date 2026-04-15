export const quizData = [
  {
    id: 1,
    modulId: 1,
    question: "Apa kepanjangan dari SQL?",
    options: ["Simple Query Language", "Structured Query Language", "System Query Logic", "Standard Query List"],
    answer: "Structured Query Language",
    explanation: "SQL adalah singkatan dari Structured Query Language, bahasa standar untuk mengelola database relasional."
  },
  {
    id: 2,
    modulId: 1,
    question: "Siapa pengembang awal bahasa SQL pada tahun 1970-an?",
    options: ["Microsoft", "Oracle", "IBM", "Google"],
    answer: "IBM",
    explanation: "SQL pertama kali dikembangkan oleh peneliti di IBM (Donald D. Chamberlin dan Raymond F. Boyce)."
  },
  {
    id: 3,
    modulId: 1,
    question: "Sistem yang digunakan untuk mengelola database relasional disebut...",
    options: ["DBMS", "RDBMS", "SQL-Manager", "Data-System"],
    answer: "RDBMS",
    explanation: "RDBMS (Relational Database Management System) adalah sistem perangkat lunak yang mengelola database berbasis tabel yang saling berhubungan."
  },
  {
    id: 4,
    modulId: 1,
    question: "Manakah di bawah ini yang merupakan contoh RDBMS populer?",
    options: ["MongoDB", "MySQL", "Redis", "Excel"],
    answer: "MySQL",
    explanation: "MySQL adalah salah satu RDBMS paling populer di dunia. MongoDB dan Redis adalah database NoSQL."
  },
  {
    id: 5,
    modulId: 1,
    question: "Dalam struktur database relasional, baris dalam sebuah tabel sering disebut dengan istilah...",
    options: ["Field", "Record", "Column", "Schema"],
    answer: "Record",
    explanation: "Baris mewakili satu entitas data lengkap yang disebut Record atau Tuple."
  },
  {
    id: 6,
    modulId: 1,
    question: "Kategori perintah SQL yang digunakan untuk mendefinisikan struktur database adalah...",
    options: ["DML", "DQL", "DDL", "DCL"],
    answer: "DDL",
    explanation: "DDL (Data Definition Language) digunakan untuk membuat, mengubah, dan menghapus struktur (seperti CREATE, ALTER, DROP)."
  },
  {
    id: 7,
    modulId: 1,
    question: "Manakah perintah yang termasuk dalam kategori DML?",
    options: ["CREATE", "INSERT", "DROP", "ALTER"],
    answer: "INSERT",
    explanation: "INSERT adalah bagian dari DML (Data Manipulation Language) karena ia memanipulasi isi data di dalam tabel."
  },
  {
    id: 8,
    modulId: 1,
    question: "Perintah SELECT masuk ke dalam kategori bahasa...",
    options: ["DDL", "DML", "DQL", "DCL"],
    answer: "DQL",
    explanation: "DQL (Data Query Language) khusus digunakan untuk mengambil atau menampilkan data."
  },
  {
    id: 9,
    modulId: 1,
    question: "Tipe data yang digunakan untuk menyimpan angka bulat adalah...",
    options: ["VARCHAR", "DATE", "INT", "DECIMAL"],
    answer: "INT",
    explanation: "INT (Integer) digunakan untuk menyimpan bilangan bulat tanpa angka di belakang koma."
  },
  {
    id: 10,
    modulId: 1,
    question: "Tipe data VARCHAR(50) berarti kolom tersebut dapat menyimpan...",
    options: ["Angka hingga 50", "Teks maksimal 50 karakter", "Tanggal selama 50 hari", "Hanya 50 baris data"],
    answer: "Teks maksimal 50 karakter",
    explanation: "VARCHAR adalah singkatan dari Variable Character, angka di dalam kurung menentukan panjang maksimal teks."
  },
  {
    id: 11,
    modulId: 1,
    question: "Apa kegunaan dari 'Primary Key' dalam sebuah tabel?",
    options: ["Untuk mewarnai tabel", "Sebagai identitas unik setiap baris", "Untuk menghapus tabel", "Sebagai nama tabel"],
    answer: "Sebagai identitas unik setiap baris",
    explanation: "Primary Key memastikan bahwa setiap baris data memiliki identitas yang berbeda dan tidak boleh duplikat (unik)."
  },
  {
    id: 12,
    modulId: 1,
    question: "Sintaks yang benar untuk membuat tabel baru adalah...",
    options: ["MAKE TABLE nama_tabel", "CREATE TABLE nama_tabel", "ADD TABLE nama_tabel", "NEW TABLE nama_tabel"],
    answer: "CREATE TABLE nama_tabel",
    explanation: "Perintah standar SQL untuk membuat struktur tabel baru adalah CREATE TABLE."
  },
  {
    id: 13,
    modulId: 1,
    question: "Constraint 'NOT NULL' pada kolom berarti...",
    options: ["Kolom boleh kosong", "Kolom wajib diisi", "Kolom hanya berisi nol", "Kolom harus unik"],
    answer: "Kolom wajib diisi",
    explanation: "NOT NULL memaksa kolom tersebut tidak boleh bernilai kosong (null) saat data dimasukkan."
  },
  {
    id: 14,
    modulId: 1,
    question: "Perintah untuk memasukkan data ke dalam tabel adalah...",
    options: ["ADD INTO", "INSERT INTO", "PUT INTO", "SET INTO"],
    answer: "INSERT INTO",
    explanation: "INSERT INTO adalah perintah standar DML untuk menambah baris baru ke dalam tabel."
  },
  {
    id: 15,
    modulId: 1,
    question: "Dalam perintah INSERT, jika nilai berupa teks, maka nilai tersebut harus diapit oleh...",
    options: ["Tanda kurung ()", "Tanda petik tunggal ' '", "Tanda persen %", "Tanda pagar #"],
    answer: "Tanda petik tunggal ' '",
    explanation: "SQL menggunakan tanda petik tunggal untuk mendefinisikan nilai literal string atau teks."
  },
  {
    id: 16,
    modulId: 1,
    question: "Simbol bintang (*) pada perintah SELECT * FROM digunakan untuk...",
    options: ["Mencari data yang penting", "Menampilkan semua kolom", "Menghapus semua data", "Mengurutkan data"],
    answer: "Menampilkan semua kolom",
    explanation: "Simbol * bertindak sebagai wildcard yang mewakili seluruh kolom yang ada pada tabel tersebut."
  },
  {
    id: 17,
    modulId: 1,
    question: "Klausa yang digunakan untuk memfilter data pada perintah SELECT adalah...",
    options: ["ORDER BY", "GROUP BY", "WHERE", "HAVING"],
    answer: "WHERE",
    explanation: "Klausa WHERE digunakan untuk memberikan kondisi atau kriteria tertentu saat mengambil data."
  },
  {
    id: 18,
    modulId: 1,
    question: "Perintah untuk menghapus SELURUH baris data tanpa menghapus struktur tabelnya adalah...",
    options: ["DELETE TABLE", "DROP TABLE", "REMOVE ALL", "TRUNCATE TABLE"],
    answer: "TRUNCATE TABLE",
    explanation: "TRUNCATE menghapus seluruh isi data dengan sangat cepat namun membiarkan struktur tabel tetap ada."
  },
  {
    id: 19,
    modulId: 1,
    question: "Apa perbedaan utama DELETE dan DROP?",
    options: ["Tidak ada perbedaan", "DELETE menghapus baris, DROP menghapus tabel", "DROP menghapus baris, DELETE menghapus tabel", "DELETE lebih cepat dari DROP"],
    answer: "DELETE menghapus baris, DROP menghapus tabel",
    explanation: "DELETE adalah DML (isi), sedangkan DROP adalah DDL (wadah/struktur)."
  },
  {
    id: 20,
    modulId: 1,
    question: "SQL adalah bahasa bersifat deklaratif, artinya...",
    options: ["Kita menentukan BAGAIMANA cara kerja komputer", "Kita menentukan APA hasil yang kita inginkan", "Bahasa yang sulit dipelajari", "Hanya bisa digunakan oleh AI"],
    answer: "Kita menentukan APA hasil yang kita inginkan",
    explanation: "Deklaratif berarti kita memberi tahu database 'apa yang mau ditampilkan', bukan langkah-langkah teknis cara mengambilnya."
  },
  {
    id: 21,
    modulId: 1,
    question: "Manakah penulisan klausa FROM yang benar?",
    options: ["FROM * tabel", "FROM nama_tabel", "FROM (SELECT)", "nama_tabel FROM"],
    answer: "FROM nama_tabel",
    explanation: "Klausa FROM harus diikuti langsung oleh nama tabel sumber data."
  },
  {
    id: 22,
    modulId: 1,
    question: "Untuk menghapus database secara keseluruhan, perintah yang digunakan adalah...",
    options: ["DELETE DATABASE", "DROP DATABASE", "REMOVE DATABASE", "TRUNCATE DATABASE"],
    answer: "DROP DATABASE",
    explanation: "Sama seperti tabel, untuk menghapus objek database secara permanen digunakan perintah DROP."
  },
  {
    id: 23,
    modulId: 1,
    question: "Tipe data untuk menyimpan tanggal saja (Tanpa jam) adalah...",
    options: ["DATETIME", "TIMESTAMP", "DATE", "YEAR"],
    answer: "DATE",
    explanation: "Tipe data DATE digunakan khusus untuk menyimpan format YYYY-MM-DD."
  },
  {
    id: 24,
    modulId: 1,
    question: "Manakah yang merupakan urutan perintah SQL yang logis?",
    options: ["SELECT - WHERE - FROM", "SELECT - FROM - WHERE", "FROM - SELECT - WHERE", "WHERE - FROM - SELECT"],
    answer: "SELECT - FROM - WHERE",
    explanation: "Urutan sintaks standar SQL adalah menentukan kolom (SELECT), lalu tabel (FROM), baru kondisi (WHERE)."
  },
  {
    id: 25,
    modulId: 1,
    question: "Hasil dari sebuah perintah SELECT biasanya ditampilkan dalam bentuk...",
    options: ["Paragraf teks", "Grafik lingkaran", "Tabel (Result Set)", "File PDF"],
    answer: "Tabel (Result Set)",
    explanation: "Hasil output dari query SQL ditampilkan dalam bentuk baris dan kolom yang disebut Result Set."
  },
  {
    id: 1,
    modulId: 2,
    question: "Apa fungsi utama dari perintah DDL (Data Definition Language)?",
    options: ["Mengambil data", "Menghapus baris data", "Mendefinisikan struktur database", "Update isi tabel"],
    answer: "Mendefinisikan struktur database",
    explanation: "DDL digunakan untuk membuat, mengubah, dan menghapus kerangka atau struktur objek database seperti tabel."
  },
  {
    id: 2,
    modulId: 2,
    question: "Manakah perintah DDL yang digunakan untuk membuat database baru?",
    options: ["NEW DATABASE", "CREATE DATABASE", "ADD DATABASE", "MAKE DATABASE"],
    answer: "CREATE DATABASE",
    explanation: "CREATE DATABASE adalah perintah standar untuk menginisialisasi wadah database baru."
  },
  {
    id: 3,
    modulId: 2,
    question: "Perintah apa yang digunakan untuk menghapus tabel beserta seluruh strukturnya secara permanen?",
    options: ["DELETE", "REMOVE", "DROP", "TRUNCATE"],
    answer: "DROP",
    explanation: "DROP menghapus objek (tabel/database) secara keseluruhan dari sistem."
  },
  {
    id: 4,
    modulId: 2,
    question: "Klausa apa yang digunakan dalam ALTER TABLE untuk menambah kolom baru?",
    options: ["INSERT", "ADD", "UPDATE", "CHANGE"],
    answer: "ADD",
    explanation: "Untuk menambah kolom pada tabel yang sudah ada, kita menggunakan ALTER TABLE diikuti klausa ADD."
  },
  {
    id: 5,
    modulId: 2,
    question: "Apa kegunaan dari constraint PRIMARY KEY?",
    options: ["Membolehkan data kosong", "Menjamin nilai unik dan tidak NULL", "Menghubungkan dua tabel", "Hanya formalitas"],
    answer: "Menjamin nilai unik dan tidak NULL",
    explanation: "Primary Key berfungsi sebagai identitas unik untuk setiap baris data."
  },
  {
    id: 6,
    modulId: 2,
    question: "Perintah DDL yang digunakan untuk mengosongkan isi tabel tanpa menghapus strukturnya adalah...",
    options: ["DROP", "DELETE", "TRUNCATE", "CLEAR"],
    answer: "TRUNCATE",
    explanation: "TRUNCATE menghapus semua baris data dengan cepat tetapi menyisakan kerangka tabelnya."
  },
  {
    id: 7,
    modulId: 2,
    question: "Tipe data mana yang paling cocok untuk menyimpan nama lengkap seseorang?",
    options: ["INT", "TEXT", "VARCHAR", "DATE"],
    answer: "VARCHAR",
    explanation: "VARCHAR digunakan untuk menyimpan teks dengan panjang yang bervariasi secara efisien."
  },
  {
    id: 8,
    modulId: 2,
    question: "Constraint yang mencegah adanya data duplikat dalam satu kolom adalah...",
    options: ["NOT NULL", "DEFAULT", "UNIQUE", "CHECK"],
    answer: "UNIQUE",
    explanation: "UNIQUE memastikan tidak ada dua baris yang memiliki nilai yang sama pada kolom tersebut."
  },
  {
    id: 9,
    modulId: 2,
    question: "Perintah untuk mengubah nama tabel yang sudah ada adalah...",
    options: ["RENAME TABLE", "CHANGE TABLE", "MODIFY TABLE", "UPDATE TABLE"],
    answer: "RENAME TABLE",
    explanation: "RENAME TABLE (atau ALTER TABLE...RENAME TO) digunakan untuk mengganti identitas nama tabel."
  },
  {
    id: 10,
    modulId: 2,
    question: "Apa fungsi dari constraint DEFAULT?",
    options: ["Mewajibkan isi data", "Memberikan nilai otomatis jika data kosong", "Mengunci tabel", "Menghapus data otomatis"],
    answer: "Memberikan nilai otomatis jika data kosong",
    explanation: "DEFAULT menyediakan nilai bawaan jika pengguna tidak memasukkan data pada kolom tersebut."
  },
  {
    id: 11,
    modulId: 2,
    question: "Manakah tipe data yang digunakan untuk menyimpan angka desimal (presisi tinggi)?",
    options: ["INT", "DECIMAL", "VARCHAR", "BOOLEAN"],
    answer: "DECIMAL",
    explanation: "DECIMAL (atau NUMERIC) digunakan untuk angka dengan pecahan, sangat penting untuk data keuangan."
  },
  {
    id: 12,
    modulId: 2,
    question: "Klausa apa yang digunakan untuk mengubah tipe data kolom di ALTER TABLE?",
    options: ["ADD", "DROP", "MODIFY", "SET"],
    answer: "MODIFY",
    explanation: "MODIFY (atau ALTER COLUMN) digunakan untuk merubah definisi kolom yang sudah ada."
  },
  {
    id: 13,
    modulId: 2,
    question: "Untuk menghapus kolom tertentu dari tabel, perintah yang benar adalah...",
    options: ["ALTER TABLE ... DROP COLUMN", "DELETE COLUMN", "DROP TABLE", "REMOVE COLUMN"],
    answer: "ALTER TABLE ... DROP COLUMN",
    explanation: "Kombinasi ALTER dan DROP COLUMN digunakan untuk membuang satu kolom dari struktur tabel."
  },
  {
    id: 14,
    modulId: 2,
    question: "Tipe data BOOLEAN hanya bisa menampung nilai...",
    options: ["Angka 1-10", "Teks singkat", "TRUE atau FALSE", "Tanggal"],
    answer: "TRUE atau FALSE",
    explanation: "Boolean adalah tipe data logika yang hanya memiliki dua kemungkinan nilai."
  },
  {
    id: 15,
    modulId: 2,
    question: "Apa tujuan utama dari pembuatan INDEX di database?",
    options: ["Mempercantik tabel", "Mempercepat proses pencarian data", "Menghemat ruang penyimpanan", "Menambah jumlah kolom"],
    answer: "Mempercepat proses pencarian data",
    explanation: "Index bekerja seperti daftar isi buku yang mempercepat pencarian data oleh sistem."
  },
  {
    id: 16,
    modulId: 2,
    question: "[HOTS] Mengapa perintah DROP dianggap lebih 'berbahaya' daripada DELETE?",
    options: ["Karena DROP lebih lambat", "Karena DROP menghapus data dan struktur secara permanen tanpa rollback", "Karena DELETE menghapus database", "Karena DROP hanya menghapus satu baris"],
    answer: "Karena DROP menghapus data dan struktur secara permanen tanpa rollback",
    explanation: "DROP adalah perintah DDL yang menghapus wadah datanya sekaligus, sehingga data tidak bisa dipulihkan dengan cara biasa."
  },
  {
    id: 17,
    modulId: 2,
    question: "[HOTS] Apa yang terjadi jika kita melakukan TRUNCATE pada tabel yang memiliki kolom AUTO_INCREMENT?",
    options: ["ID tetap berlanjut dari angka terakhir", "ID akan di-reset kembali ke angka 1", "Tabel akan error", "ID akan menjadi acak"],
    answer: "ID akan di-reset kembali ke angka 1",
    explanation: "Berbeda dengan DELETE, TRUNCATE mereset status tabel termasuk urutan auto-increment."
  },
  {
    id: 18,
    modulId: 2,
    question: "[HOTS] Manakah skenario yang mewajibkan penggunaan constraint NOT NULL?",
    options: ["Kolom hobi pengguna", "Kolom catatan tambahan", "Kolom password akun", "Kolom foto profil"],
    answer: "Kolom password akun",
    explanation: "Data krusial seperti password tidak boleh kosong demi integritas dan keamanan sistem."
  },
  {
    id: 19,
    modulId: 2,
    question: "[HOTS] Jika Anda ingin mengubah nama kolom sekaligus tipe datanya di MySQL, klausa mana yang paling tepat?",
    options: ["MODIFY", "ADD", "CHANGE", "RENAME"],
    answer: "CHANGE",
    explanation: "Klausa CHANGE memungkinkan perubahan nama kolom dan definisinya dalam satu perintah."
  },
  {
    id: 20,
    modulId: 2,
    question: "[HOTS] Apa konsekuensi jika kita menambahkan banyak INDEX pada tabel yang sangat sering di-INSERT data?",
    options: ["Pencarian menjadi lambat", "Proses INSERT menjadi lebih lambat", "Database otomatis terhapus", "Tabel menjadi lebih kecil"],
    answer: "Proses INSERT menjadi lebih lambat",
    explanation: "Setiap ada data baru, database harus memperbarui semua Index yang ada, yang menambah beban kerja server."
  },
  {
    id: 21,
    modulId: 2,
    question: "[HOTS] Mengapa kita tidak bisa menghapus tabel (DROP) yang sedang dirujuk oleh FOREIGN KEY di tabel lain?",
    options: ["Karena tabel sedang digunakan", "Untuk menjaga integritas referensial data", "Karena perintah SQL salah", "Karena ukuran tabel terlalu besar"],
    answer: "Untuk menjaga integritas referensial data",
    explanation: "Database mencegah penghapusan tabel induk jika tabel anak masih memiliki ketergantungan data padanya."
  },
  {
    id: 22,
    modulId: 2,
    question: "[HOTS] Apa perbedaan mendasar antara tipe data CHAR dan VARCHAR?",
    options: ["CHAR lebih lambat", "VARCHAR memiliki panjang tetap, CHAR dinamis", "CHAR memiliki panjang tetap, VARCHAR dinamis", "Tidak ada perbedaan"],
    answer: "CHAR memiliki panjang tetap, VARCHAR dinamis",
    explanation: "CHAR akan selalu memakai ruang sesuai definisi awal, sedangkan VARCHAR hanya memakai ruang sebanyak teks yang diinput."
  },
  {
    id: 23,
    modulId: 2,
    question: "[HOTS] Kapan waktu yang paling tepat menggunakan constraint CHECK?",
    options: ["Saat membuat tabel baru", "Untuk memvalidasi range nilai (misal: umur > 17)", "Untuk menghapus data otomatis", "Untuk mengganti nama database"],
    answer: "Untuk memvalidasi range nilai (misal: umur > 17)",
    explanation: "CHECK digunakan untuk memastikan data yang masuk memenuhi kriteria logika tertentu."
  },
  {
    id: 24,
    modulId: 2,
    question: "[HOTS] Apa yang dimaksud dengan 'Data Integrity' dalam konteks DDL?",
    options: ["Kecepatan akses data", "Keakuratan dan konsistensi data yang dijamin lewat constraint", "Cara menghapus data dengan cepat", "Jumlah total baris dalam tabel"],
    answer: "Keakuratan dan konsistensi data yang dijamin lewat constraint",
    explanation: "DDL melalui constraint (PK, FK, Unique) bertugas menjaga agar data tetap valid dan masuk akal."
  },
  {
    id: 25,
    modulId: 2,
    question: "[HOTS] Manakah urutan perintah yang benar untuk merombak struktur database secara total?",
    options: ["DROP -> CREATE -> ALTER", "CREATE -> DROP -> ALTER", "ALTER -> DROP -> CREATE", "SELECT -> INSERT -> DELETE"],
    answer: "DROP -> CREATE -> ALTER",
    explanation: "Menghapus yang lama, membuat kerangka baru, lalu melakukan penyesuaian detail adalah alur logis restrukturisasi."
  },
  {
    id: 1,
    modulId: 3,
    question: "Apa fungsi utama dari perintah DML (Data Manipulation Language)?",
    options: ["Membuat tabel baru", "Mengelola isi data di dalam tabel", "Menghapus struktur database", "Mengatur hak akses user"],
    answer: "Mengelola isi data di dalam tabel",
    explanation: "DML digunakan untuk memanipulasi data seperti menambah, mengubah, dan menghapus baris data."
  },
  {
    id: 2,
    modulId: 3,
    question: "Perintah SQL mana yang digunakan untuk menambah baris baru ke dalam tabel?",
    options: ["ADD DATA", "INSERT INTO", "UPDATE", "CREATE"],
    answer: "INSERT INTO",
    explanation: "INSERT INTO adalah perintah standar untuk memasukkan data baru ke dalam tabel."
  },
  {
    id: 3,
    modulId: 3,
    question: "Klausa mana yang digunakan untuk menentukan kolom mana saja yang akan diisi pada INSERT?",
    options: ["SET", "VALUES", "FIELDS", "INTO"],
    answer: "VALUES",
    explanation: "Klausa VALUES digunakan untuk mendefinisikan nilai yang akan dimasukkan ke dalam kolom."
  },
  {
    id: 4,
    modulId: 3,
    question: "Perintah apa yang digunakan untuk mengubah data yang sudah ada di tabel?",
    options: ["CHANGE", "MODIFY", "UPDATE", "FIX"],
    answer: "UPDATE",
    explanation: "UPDATE digunakan untuk memperbarui nilai pada baris data yang sudah tersimpan."
  },
  {
    id: 5,
    modulId: 3,
    question: "Klausa wajib yang harus digunakan dalam UPDATE agar tidak mengubah seluruh baris data adalah...",
    options: ["FROM", "WHERE", "GROUP BY", "HAVING"],
    answer: "WHERE",
    explanation: "Tanpa klausa WHERE, perintah UPDATE akan mengubah nilai di seluruh baris tabel tersebut."
  },
  {
    id: 6,
    modulId: 3,
    question: "Perintah SQL untuk menghapus baris data tertentu adalah...",
    options: ["DROP", "REMOVE", "DELETE", "TRUNCATE"],
    answer: "DELETE",
    explanation: "DELETE digunakan untuk menghapus satu atau lebih baris data berdasarkan kondisi tertentu."
  },
  {
    id: 7,
    modulId: 3,
    question: "Apa yang terjadi jika kita menjalankan 'DELETE FROM nama_tabel' tanpa klausa WHERE?",
    options: ["Error", "Hanya baris pertama terhapus", "Seluruh baris data terhapus", "Struktur tabel terhapus"],
    answer: "Seluruh baris data terhapus",
    explanation: "Sama seperti UPDATE, DELETE tanpa WHERE akan mengenai seluruh target baris yang ada di tabel."
  },
  {
    id: 8,
    modulId: 3,
    question: "Dalam penulisan INSERT, nilai string/teks harus diapit oleh...",
    options: ["Tanda kurung ()", "Tanda petik tunggal ' '", "Tanda pagar #", "Tanda persen %"],
    answer: "Tanda petik tunggal ' '",
    explanation: "SQL menggunakan tanda petik tunggal untuk membedakan nilai teks dengan nama kolom atau perintah."
  },
  {
    id: 9,
    modulId: 3,
    question: "Klausa SET digunakan dalam perintah...",
    options: ["INSERT", "UPDATE", "DELETE", "SELECT"],
    answer: "UPDATE",
    explanation: "SET digunakan untuk menentukan kolom mana yang akan diubah nilainya dalam perintah UPDATE."
  },
  {
    id: 10,
    modulId: 3,
    question: "Bagaimana cara memasukkan banyak baris data (multiple rows) dalam satu perintah INSERT?",
    options: ["Memisahkan tiap grup nilai dengan koma", "Menulis INSERT berkali-kali", "Menggunakan perintah ADD MANY", "Tidak bisa dilakukan"],
    answer: "Memisahkan tiap grup nilai dengan koma",
    explanation: "INSERT INTO tabel VALUES (...), (...), (...) memungkinkan pengisian banyak baris sekaligus."
  },
  {
    id: 11,
    modulId: 3,
    question: "Jika kita hanya ingin mengisi beberapa kolom saja pada INSERT, apa yang harus dilakukan?",
    options: ["Mengisi kolom lain dengan spasi", "Menyebutkan nama kolom secara spesifik setelah nama tabel", "Harus mengisi semua kolom", "Menggunakan perintah UPDATE"],
    answer: "Menyebutkan nama kolom secara spesifik setelah nama tabel",
    explanation: "Dengan menuliskan nama kolom tujuan, kita bisa melewati kolom yang memiliki nilai DEFAULT atau NULL."
  },
  {
    id: 12,
    modulId: 3,
    question: "Apa perbedaan utama antara DELETE dan TRUNCATE dalam konteks DML?",
    options: ["Tidak ada", "DELETE bisa pakai WHERE, TRUNCATE tidak", "TRUNCATE bisa pakai WHERE, DELETE tidak", "DELETE menghapus tabel"],
    answer: "DELETE bisa pakai WHERE, TRUNCATE tidak",
    explanation: "DELETE adalah DML yang lebih fleksibel dengan filter, sedangkan TRUNCATE adalah DDL yang menghapus massal."
  },
  {
    id: 13,
    modulId: 3,
    question: "Manakah penulisan UPDATE yang benar?",
    options: ["UPDATE tabel SET kolom=nilai", "UPDATE SET kolom=nilai FROM tabel", "CHANGE tabel SET kolom=nilai", "UPDATE tabel VALUES(nilai)"],
    answer: "UPDATE tabel SET kolom=nilai",
    explanation: "Struktur standar UPDATE diawali nama tabel, diikuti SET, lalu pasangan kolom dan nilainya."
  },
  {
    id: 14,
    modulId: 3,
    question: "Nilai NULL dalam DML berarti...",
    options: ["Angka nol", "Spasi kosong", "Data tidak tersedia/kosong", "Data error"],
    answer: "Data tidak tersedia/kosong",
    explanation: "NULL merepresentasikan ketiadaan nilai, berbeda dengan angka 0 atau string kosong."
  },
  {
    id: 15,
    modulId: 3,
    question: "Perintah INSERT INTO produk (nama, harga) VALUES ('Buku', 5000) akan mengisi kolom id jika id adalah AUTO_INCREMENT?",
    options: ["Ya, diisi manual", "Tidak, diisi otomatis oleh sistem", "Akan error", "ID akan tetap NULL"],
    answer: "Tidak, diisi otomatis oleh sistem",
    explanation: "Kolom Auto Increment akan menangani pengisian nilainya sendiri secara urut."
  },
  {
    id: 16,
    modulId: 3,
    question: "[HOTS] Anda ingin menaikkan harga semua produk kategori 'Elektronik' sebesar 10%. Perintah mana yang paling tepat?",
    options: ["UPDATE produk SET harga = harga * 1.1 WHERE kategori = 'Elektronik'", "UPDATE produk SET harga = 10% WHERE kategori = 'Elektronik'", "SELECT harga * 1.1 FROM produk", "INSERT INTO produk (harga) VALUES (harga * 1.1)"],
    answer: "UPDATE produk SET harga = harga * 1.1 WHERE kategori = 'Elektronik'",
    explanation: "Kita bisa menggunakan operasi matematika langsung pada nilai kolom yang sedang di-update."
  },
  {
    id: 17,
    modulId: 3,
    question: "[HOTS] Apa risiko terbesar menjalankan perintah DELETE tanpa WHERE di lingkungan produksi?",
    options: ["Database menjadi lambat", "Kehilangan seluruh data di tabel tersebut secara permanen", "Koneksi internet terputus", "Tabel akan terkunci selamanya"],
    answer: "Kehilangan seluruh data di tabel tersebut secara permanen",
    explanation: "Tanpa filter, SQL akan mengeksekusi penghapusan pada setiap baris yang ia temukan di tabel."
  },
  {
    id: 18,
    modulId: 3,
    question: "[HOTS] Bagaimana cara meng-update dua kolom sekaligus dalam satu perintah UPDATE?",
    options: ["Menggunakan dua perintah UPDATE", "Memisahkan kolom dengan kata kunci AND", "Memisahkan pasangan kolom=nilai dengan koma", "Menggunakan tanda titik koma"],
    answer: "Memisahkan pasangan kolom=nilai dengan koma",
    explanation: "Sintaksnya: SET kolom1 = nilai1, kolom2 = nilai2."
  },
  {
    id: 19,
    modulId: 3,
    question: "[HOTS] Anda mendapati data duplikat di tabel 'Member'. Perintah apa yang digunakan untuk menghapus salah satu barisnya saja?",
    options: ["DELETE dengan WHERE yang merujuk pada Primary Key unik", "TRUNCATE tabel", "DROP tabel", "DELETE tanpa WHERE"],
    answer: "DELETE dengan WHERE yang merujuk pada Primary Key unik",
    explanation: "Menggunakan ID unik (Primary Key) memastikan hanya satu baris spesifik yang terhapus."
  },
  {
    id: 20,
    modulId: 3,
    question: "[HOTS] Mengapa perintah UPDATE memerlukan ketelitian lebih tinggi dibanding SELECT?",
    options: ["Karena UPDATE lebih sulit ditulis", "Karena SELECT tidak mengubah data, sedangkan UPDATE merubah data secara permanen", "Karena UPDATE memerlukan koneksi admin", "Karena SELECT hanya untuk tabel kecil"],
    answer: "Karena SELECT tidak mengubah data, sedangkan UPDATE merubah data secara permanen",
    explanation: "SELECT bersifat read-only, sedangkan UPDATE mengubah kondisi database (data persistent)."
  },
  {
    id: 21,
    modulId: 3,
    question: "[HOTS] Skenario: Anda ingin memindahkan data dari 'Tabel_Lama' ke 'Tabel_Baru'. Teknik apa yang bisa digunakan?",
    options: ["INSERT INTO ... SELECT", "UPDATE FROM SELECT", "COPY TABLE", "MOVE DATA"],
    answer: "INSERT INTO ... SELECT",
    explanation: "Teknik ini memungkinkan kita memasukkan hasil query SELECT langsung ke dalam tabel tujuan."
  },
  {
    id: 22,
    modulId: 3,
    question: "[HOTS] Apa yang terjadi jika kita mencoba INSERT data ke kolom yang memiliki constraint UNIQUE dengan nilai yang sudah ada?",
    options: ["Data akan ditimpa", "Akan terjadi error Integrity Constraint Violation", "Data akan ditambahkan sebagai duplikat", "Sistem akan otomatis mengubah nilainya"],
    answer: "Akan terjadi error Integrity Constraint Violation",
    explanation: "DML harus mematuhi aturan (constraints) yang sudah ditetapkan pada struktur DDL."
  },
  {
    id: 23,
    modulId: 3,
    question: "[HOTS] Anda ingin menghapus semua pesanan yang statusnya 'Canceled' DAN usianya lebih dari 30 hari. Klausa mana yang digunakan?",
    options: ["WHERE status = 'Canceled' OR tgl < 30", "WHERE status = 'Canceled' AND tgl_pesan < (Current Date - 30)", "DELETE ALL Canceled", "TRUNCATE WHERE status = 'Canceled'"],
    answer: "WHERE status = 'Canceled' AND tgl_pesan < (Current Date - 30)",
    explanation: "Kombinasi operator logika AND digunakan untuk menyaring dua kriteria sekaligus."
  },
  {
    id: 24,
    modulId: 3,
    question: "[HOTS] Bagaimana cara memberikan nilai NULL secara eksplisit pada saat UPDATE?",
    options: ["Mengosongkan tanda petik ('')", "Menuliskan kata kunci NULL tanpa tanda petik", "Menuliskan 'NULL' dengan tanda petik", "Menuliskan angka 0"],
    answer: "Menuliskan kata kunci NULL tanpa tanda petik",
    explanation: "NULL adalah keyword khusus; jika memakai tanda petik, ia akan dianggap sebagai teks bertuliskan 'NULL'."
  },
  {
    id: 25,
    modulId: 3,
    question: "[HOTS] Apa urutan eksekusi yang benar saat menjalankan query: UPDATE tabel SET x=1 WHERE y=2?",
    options: ["Cari baris y=2 dulu, lalu ubah x=1", "Ubah semua x=1 dulu, lalu cari y=2", "Jalankan bersamaan", "Buat tabel baru"],
    answer: "Cari baris y=2 dulu, lalu ubah x=1",
    explanation: "Database harus memfilter data (WHERE) terlebih dahulu untuk menentukan target baris sebelum melakukan perubahan."
  },
  {
    id: 1,
    modulId: 4,
    question: "Apa fungsi utama dari perintah SELECT dalam SQL?",
    options: ["Menghapus data", "Mengambil dan menampilkan data", "Mengubah struktur tabel", "Memasukkan data baru"],
    answer: "Mengambil dan menampilkan data",
    explanation: "SELECT adalah perintah utama dalam DQL yang berfungsi untuk membaca atau mengambil data dari database."
  },
  {
    id: 2,
    modulId: 4,
    question: "Klausa manakah yang digunakan untuk menentukan sumber tabel dalam query SELECT?",
    options: ["WHERE", "FROM", "INTO", "TABLE"],
    answer: "FROM",
    explanation: "Klausa FROM digunakan setelah SELECT untuk memberitahu database dari tabel mana data akan diambil."
  },
  {
    id: 3,
    modulId: 4,
    question: "Simbol apa yang digunakan untuk mengambil semua kolom yang tersedia dalam suatu tabel?",
    options: ["&", "#", "*", "%"],
    answer: "*",
    explanation: "Simbol asterisk (*) digunakan sebagai wildcard untuk merepresentasikan seluruh kolom dalam tabel."
  },
  {
    id: 4,
    modulId: 4,
    question: "Klausa yang digunakan untuk memfilter atau menyaring baris data berdasarkan kriteria tertentu adalah...",
    options: ["ORDER BY", "GROUP BY", "WHERE", "LIMIT"],
    answer: "WHERE",
    explanation: "WHERE digunakan untuk memberikan kondisi spesifik sehingga hanya baris yang memenuhi syarat yang akan ditampilkan."
  },
  {
    id: 5,
    modulId: 4,
    question: "Bagaimana cara menampilkan nilai yang unik (tidak duplikat) dari suatu kolom?",
    options: ["SELECT UNIQUE", "SELECT DISTINCT", "SELECT SINGLE", "SELECT ONLY"],
    answer: "SELECT DISTINCT",
    explanation: "DISTINCT digunakan untuk mengeliminasi baris yang identik sehingga hanya nilai yang berbeda yang muncul."
  },
  {
    id: 6,
    modulId: 4,
    question: "Klausa untuk mengurutkan hasil query adalah...",
    options: ["SORT BY", "ALIGN BY", "ORDER BY", "ARRANGE BY"],
    answer: "ORDER BY",
    explanation: "ORDER BY digunakan untuk mengurutkan hasil berdasarkan satu atau lebih kolom secara naik (ASC) atau turun (DESC)."
  },
  {
    id: 7,
    modulId: 4,
    question: "Secara default, ORDER BY mengurutkan data dari yang terkecil ke terbesar, yang disebut dengan...",
    options: ["ASC", "DESC", "TOP", "DOWN"],
    answer: "ASC",
    explanation: "ASC (Ascending) adalah urutan standar dari nilai terkecil ke terbesar atau A ke Z."
  },
  {
    id: 8,
    modulId: 4,
    question: "Klausa yang digunakan untuk membatasi jumlah baris yang ditampilkan adalah...",
    options: ["STOP", "LIMIT", "TOP", "MAX"],
    answer: "LIMIT",
    explanation: "LIMIT menentukan jumlah maksimal baris yang akan dikembalikan oleh database."
  },
  {
    id: 9,
    modulId: 4,
    question: "Operator mana yang digunakan untuk mencari pola teks tertentu menggunakan wildcard?",
    options: ["IN", "BETWEEN", "LIKE", "MATCH"],
    answer: "LIKE",
    explanation: "LIKE digunakan bersama simbol % atau _ untuk mencari data berdasarkan pola teks tertentu."
  },
  {
    id: 10,
    modulId: 4,
    question: "Apa kegunaan dari kata kunci 'AS' dalam SELECT?",
    options: ["Mengubah nama tabel selamanya", "Memberikan nama alias sementara", "Menghapus kolom", "Menggabungkan dua tabel"],
    answer: "Memberikan nama alias sementara",
    explanation: "AS (Alias) digunakan untuk memberikan nama samaran pada kolom atau tabel agar hasil query lebih mudah dibaca."
  },
  {
    id: 11,
    modulId: 4,
    question: "Operator logika yang mengharuskan semua kondisi bernilai benar adalah...",
    options: ["OR", "NOT", "AND", "XOR"],
    answer: "AND",
    explanation: "AND hanya akan mengembalikan baris jika semua kriteria yang dipisahkan oleh AND terpenuhi."
  },
  {
    id: 12,
    modulId: 4,
    question: "Operator mana yang digunakan untuk memfilter data dalam rentang nilai tertentu (misal: 10 sampai 20)?",
    options: ["IN", "BETWEEN", "RANGE", "THROUGH"],
    answer: "BETWEEN",
    explanation: "BETWEEN menyaring data yang berada di dalam rentang dua nilai, termasuk nilai batasnya."
  },
  {
    id: 13,
    modulId: 4,
    question: "Cara yang benar untuk memeriksa apakah suatu kolom tidak berisi data (kosong) adalah...",
    options: ["WHERE kolom = NULL", "WHERE kolom IS EMPTY", "WHERE kolom IS NULL", "WHERE kolom = ''"],
    answer: "WHERE kolom IS NULL",
    explanation: "Di SQL, nilai NULL tidak bisa dibandingkan dengan operator '=' melainkan harus menggunakan 'IS NULL'."
  },
  {
    id: 14,
    modulId: 4,
    question: "Urutan penulisan query SELECT yang benar adalah...",
    options: ["SELECT - WHERE - FROM", "SELECT - FROM - WHERE", "FROM - SELECT - WHERE", "WHERE - FROM - SELECT"],
    answer: "SELECT - FROM - WHERE",
    explanation: "Struktur standar SQL mewajibkan SELECT (pilih kolom) diikuti FROM (pilih tabel) lalu WHERE (kondisi)."
  },
  {
    id: 15,
    modulId: 4,
    question: "Operator logika OR akan menampilkan data jika...",
    options: ["Semua kondisi benar", "Salah satu atau semua kondisi benar", "Tidak ada kondisi yang benar", "Hanya kondisi pertama yang benar"],
    answer: "Salah satu atau semua kondisi benar",
    explanation: "OR memberikan hasil selama minimal ada satu kriteria yang terpenuhi."
  },
  {
    id: 16,
    modulId: 4,
    question: "[HOTS] Manakah pola LIKE yang digunakan untuk mencari nama yang berakhiran huruf 'a'?",
    options: ["'a%'", "'%a'", "'%a%'", "'_a'"],
    answer: "'%a'",
    explanation: "Simbol % di depan berarti ada karakter apa pun sebelumnya, dan harus diakhiri dengan huruf 'a'."
  },
  {
    id: 17,
    modulId: 4,
    question: "[HOTS] Query 'SELECT * FROM produk ORDER BY harga DESC, nama ASC' berarti...",
    options: ["Harga urut A-Z lalu nama Z-A", "Harga urut tertinggi ke terendah, jika harga sama nama urut A-Z", "Harga dan nama urut tertinggi ke terendah", "Nama urut A-Z baru harga dihitung"],
    answer: "Harga urut tertinggi ke terendah, jika harga sama nama urut A-Z",
    explanation: "SQL mengurutkan berdasarkan kolom pertama dulu; jika ada nilai yang sama, barulah kolom kedua digunakan sebagai penentu urutan."
  },
  {
    id: 18,
    modulId: 4,
    question: "[HOTS] Apa fungsi dari klausa OFFSET dalam SELECT?",
    options: ["Menghitung jumlah baris", "Melewati sejumlah baris tertentu sebelum mulai mengambil data", "Menentukan batas maksimal baris", "Mengurutkan data secara acak"],
    answer: "Melewati sejumlah baris tertentu sebelum mulai mengambil data",
    explanation: "OFFSET sering digunakan bersama LIMIT untuk fitur pagination (halaman) guna melompati data yang sudah tampil di halaman sebelumnya."
  },
  {
    id: 19,
    modulId: 4,
    question: "[HOTS] Manakah penulisan alias kolom yang mengandung spasi yang benar?",
    options: ["SELECT harga AS Harga Baru", "SELECT harga AS 'Harga Baru'", "SELECT harga AS Harga_Baru", "Pilihan B dan C benar"],
    answer: "Pilihan B dan C benar",
    explanation: "Jika alias mengandung spasi, wajib menggunakan tanda petik. Jika menggunakan underscore, tanda petik tidak wajib."
  },
  {
    id: 20,
    modulId: 4,
    question: "[HOTS] Apa hasil dari query: SELECT 10 + 5 AS Hasil?",
    options: ["Error karena tidak ada tabel", "Menampilkan satu baris dengan nilai 15", "Menampilkan seluruh isi database", "Menampilkan teks '10 + 5'"],
    answer: "Menampilkan satu baris dengan nilai 15",
    explanation: "SQL dapat melakukan operasi kalkulasi langsung (scalar) tanpa harus selalu merujuk ke tabel fisik."
  },
  {
    id: 21,
    modulId: 4,
    question: "[HOTS] Mengapa SELECT * tidak disarankan untuk digunakan dalam aplikasi produksi skala besar?",
    options: ["Karena dilarang oleh server", "Karena mengambil semua kolom bisa memperberat beban jaringan dan memori", "Karena hasil query akan error", "Karena SELECT * hanya untuk tabel kecil"],
    answer: "Karena mengambil semua kolom bisa memperberat beban jaringan dan memori",
    explanation: "Mengambil kolom yang tidak diperlukan meningkatkan traffic data dan memperlambat kinerja aplikasi."
  },
  {
    id: 22,
    modulId: 4,
    question: "[HOTS] Bagaimana cara mencari data yang namanya mengandung huruf 'o' di posisi kedua?",
    options: ["LIKE '%o%'", "LIKE '_o%'", "LIKE 'o%'", "LIKE '_o_'"],
    answer: "LIKE '_o%'",
    explanation: "Underscore (_) mewakili tepat satu karakter apa pun, diikuti 'o' di posisi kedua, lalu % untuk sisa karakter lainnya."
  },
  {
    id: 23,
    modulId: 4,
    question: "[HOTS] Manakah operator yang lebih efisien untuk menggantikan rangkaian 'OR' yang banyak pada kolom yang sama (misal id=1 OR id=2 OR id=3)?",
    options: ["BETWEEN", "IN", "LIKE", "MATCH"],
    answer: "IN",
    explanation: "Operator IN memungkinkan kita menentukan daftar nilai dalam tanda kurung, membuat query lebih ringkas dan mudah dibaca."
  },
  {
    id: 24,
    modulId: 4,
    question: "[HOTS] Apa perbedaan antara WHERE dan HAVING secara mendasar?",
    options: ["Tidak ada perbedaan", "WHERE memfilter baris, HAVING memfilter kelompok (agregasi)", "WHERE lebih lambat dari HAVING", "HAVING hanya untuk kolom teks"],
    answer: "WHERE memfilter baris, HAVING memfilter kelompok (agregasi)",
    explanation: "WHERE digunakan untuk memfilter data sebelum dikelompokkan, sedangkan HAVING digunakan setelah data dikelompokkan (GROUP BY)."
  },
  {
    id: 25,
    modulId: 4,
    question: "[HOTS] Jika Anda menjalankan 'SELECT DISTINCT kota, nama FROM pelanggan', apa yang akan dilakukan database?",
    options: ["Hanya menampilkan kota yang unik", "Hanya menampilkan nama yang unik", "Menampilkan kombinasi unik dari pasangan kota dan nama", "Query tersebut error"],
    answer: "Menampilkan kombinasi unik dari pasangan kota dan nama",
    explanation: "DISTINCT berlaku untuk seluruh baris yang dipilih. Jika ada dua baris dengan kota sama tapi nama berbeda, keduanya tetap akan muncul."
  },
  {
    id: 1,
    modulId: 5,
    question: "Klausa mana yang digunakan untuk memfilter baris data berdasarkan kondisi tertentu?",
    options: ["ORDER BY", "WHERE", "GROUP BY", "HAVING"],
    answer: "WHERE",
    explanation: "WHERE digunakan untuk menyaring baris sebelum proses lainnya dilakukan dalam query."
  },
  {
    id: 2,
    modulId: 5,
    question: "Untuk mengurutkan data dari nilai terbesar ke terkecil, kita menggunakan kata kunci...",
    options: ["ASC", "DESC", "MAX", "TOP"],
    answer: "DESC",
    explanation: "DESC (Descending) mengurutkan data dari nilai tertinggi ke terendah (atau Z ke A)."
  },
  {
    id: 3,
    modulId: 5,
    question: "Klausa yang digunakan untuk mengelompokkan baris yang memiliki nilai yang sama ke dalam baris ringkasan adalah...",
    options: ["ORDER BY", "WHERE", "GROUP BY", "LIMIT"],
    answer: "GROUP BY",
    explanation: "GROUP BY sering digunakan bersama fungsi agregat (seperti COUNT, MAX, SUM) untuk mengelompokkan data."
  },
  {
    id: 4,
    modulId: 5,
    question: "Manakah klausa yang digunakan untuk memfilter hasil setelah data dikelompokkan (agregasi)?",
    options: ["WHERE", "GROUP BY", "HAVING", "ORDER BY"],
    answer: "HAVING",
    explanation: "HAVING berfungsi seperti WHERE, tetapi khusus untuk memfilter hasil yang sudah diproses oleh GROUP BY."
  },
  {
    id: 5,
    modulId: 5,
    question: "Urutan penulisan klausa yang benar dalam sebuah query SQL adalah...",
    options: ["SELECT-FROM-WHERE-GROUP BY-HAVING-ORDER BY", "SELECT-FROM-GROUP BY-WHERE-HAVING-ORDER BY", "SELECT-WHERE-FROM-GROUP BY-HAVING", "SELECT-FROM-WHERE-ORDER BY-GROUP BY"],
    answer: "SELECT-FROM-WHERE-GROUP BY-HAVING-ORDER BY",
    explanation: "Ini adalah urutan standar sintaksis SQL agar query dapat dieksekusi oleh mesin database."
  },
  {
    id: 6,
    modulId: 5,
    question: "Klausa ORDER BY biasanya diletakkan di bagian mana dalam query?",
    options: ["Awal query", "Setelah SELECT", "Paling akhir query", "Sebelum WHERE"],
    answer: "Paling akhir query",
    explanation: "ORDER BY adalah langkah terakhir untuk mengatur tampilan hasil akhir kepada pengguna."
  },
  {
    id: 7,
    modulId: 5,
    question: "Jika kita menggunakan GROUP BY tanpa fungsi agregat, hasilnya akan serupa dengan...",
    options: ["ORDER BY", "WHERE", "DISTINCT", "JOIN"],
    answer: "DISTINCT",
    explanation: "Karena GROUP BY menyatukan nilai yang sama, hasilnya akan menampilkan nilai unik seperti DISTINCT."
  },
  {
    id: 8,
    modulId: 5,
    question: "Fungsi agregat COUNT(*) digunakan bersama GROUP BY untuk...",
    options: ["Menghitung jumlah baris dalam setiap kelompok", "Menjumlahkan nilai angka", "Mencari nilai rata-rata", "Mencari nilai tertinggi"],
    answer: "Menghitung jumlah baris dalam setiap kelompok",
    explanation: "COUNT(*) menghitung total record yang masuk ke dalam tiap kategori kelompok."
  },
  {
    id: 9,
    modulId: 5,
    question: "Operator logika apa yang digunakan dalam WHERE untuk mengecek apakah suatu nilai ada dalam daftar tertentu?",
    options: ["LIKE", "BETWEEN", "IN", "IS"],
    answer: "IN",
    explanation: "Operator IN memungkinkan kita menentukan beberapa nilai sekaligus dalam klausa WHERE."
  },
  {
    id: 10,
    modulId: 5,
    question: "Untuk mencari rata-rata nilai dalam suatu kelompok, fungsi agregat yang digunakan adalah...",
    options: ["SUM", "AVG", "MIN", "COUNT"],
    answer: "AVG",
    explanation: "AVG (Average) menghitung nilai rata-rata dari kolom numerik dalam kelompok tersebut."
  },
  {
    id: 11,
    modulId: 5,
    question: "Klausa ORDER BY dapat mengurutkan data berdasarkan lebih dari satu kolom. (Benar/Salah)",
    options: ["Benar", "Salah", "Hanya jika kolomnya angka", "Hanya jika menggunakan ASC"],
    answer: "Benar",
    explanation: "Kita bisa mengurutkan berdasarkan beberapa kolom dengan memisahkannya menggunakan koma."
  },
  {
    id: 12,
    modulId: 5,
    question: "Manakah yang merupakan penggunaan HAVING yang benar?",
    options: ["HAVING harga > 100", "HAVING COUNT(id) > 5", "HAVING nama LIKE 'A%'", "HAVING id = 10"],
    answer: "HAVING COUNT(id) > 5",
    explanation: "HAVING biasanya digunakan untuk kondisi yang melibatkan fungsi agregat (seperti COUNT, SUM, dsb)."
  },
  {
    id: 13,
    modulId: 5,
    question: "Apa fungsi dari klausa WHERE 1=1?",
    options: ["Menghapus semua data", "Menampilkan data jika kondisi benar", "Sebagai placeholder agar mudah menambah kondisi AND berikutnya", "Error"],
    answer: "Sebagai placeholder agar mudah menambah kondisi AND berikutnya",
    explanation: "Ini adalah teknik koding agar penambahan filter dinamis menjadi lebih mudah tanpa merusak struktur SQL."
  },
  {
    id: 14,
    modulId: 5,
    question: "Jika kita ingin mengurutkan nama dari Z ke A, maka klausa yang digunakan adalah...",
    options: ["ORDER BY nama", "ORDER BY nama ASC", "ORDER BY nama DESC", "SORT nama Z-A"],
    answer: "ORDER BY nama DESC",
    explanation: "DESC digunakan untuk urutan menurun (Z-A)."
  },
  {
    id: 15,
    modulId: 5,
    question: "Dapatkah kita menggunakan alias kolom (AS) di dalam klausa WHERE pada kebanyakan database?",
    options: ["Bisa", "Tidak bisa", "Hanya di MySQL", "Hanya jika angka"],
    answer: "Tidak bisa",
    explanation: "Secara standar, WHERE dieksekusi sebelum alias diproses, sehingga kita harus menggunakan nama asli kolom."
  },
  {
    id: 16,
    modulId: 5,
    question: "[HOTS] Mengapa kita tidak boleh menggunakan fungsi agregat seperti SUM() di dalam klausa WHERE?",
    options: ["Karena WHERE terlalu lambat", "Karena WHERE memfilter baris satu per satu sebelum data dikelompokkan", "Karena SUM() hanya untuk SELECT", "Karena database akan otomatis error"],
    answer: "Karena WHERE memfilter baris satu per satu sebelum data dikelompokkan",
    explanation: "WHERE bekerja di level baris individu, sedangkan fungsi agregat bekerja di level kelompok baris. Gunakan HAVING untuk filter agregat."
  },
  {
    id: 17,
    modulId: 5,
    question: "[HOTS] Apa hasil dari query: SELECT kota, COUNT(*) FROM pelanggan GROUP BY kota HAVING COUNT(*) > 10?",
    options: ["Menampilkan semua kota", "Menampilkan kota yang memiliki lebih dari 10 pelanggan", "Menampilkan 10 kota pertama", "Menghapus kota dengan sedikit pelanggan"],
    answer: "Menampilkan kota yang memiliki lebih dari 10 pelanggan",
    explanation: "Query ini mengelompokkan data per kota, menghitung jumlahnya, lalu memfilter hanya kelompok yang totalnya di atas 10."
  },
  {
    id: 18,
    modulId: 5,
    question: "[HOTS] Dalam query yang mengandung WHERE dan HAVING, manakah yang dieksekusi lebih dulu oleh sistem database?",
    options: ["HAVING", "WHERE", "Bersamaan", "Tergantung jumlah data"],
    answer: "WHERE",
    explanation: "Database menyaring baris terlebih dahulu (WHERE), lalu mengelompokkan (GROUP BY), baru menyaring hasil kelompok (HAVING)."
  },
  {
    id: 19,
    modulId: 5,
    question: "[HOTS] Apa risiko jika Anda melakukan GROUP BY pada kolom yang memiliki nilai unik di setiap barisnya (seperti ID)?",
    options: ["Data akan hilang", "Pengelompokkan tidak akan berguna karena setiap baris menjadi satu kelompok sendiri", "Database akan crash", "Hasil query akan otomatis kosong"],
    answer: "Pengelompokkan tidak akan berguna karena setiap baris menjadi satu kelompok sendiri",
    explanation: "GROUP BY bertujuan untuk meringkas data. Jika kolomnya unik, tidak ada data yang bisa diringkas/disatukan."
  },
  {
    id: 20,
    modulId: 5,
    question: "[HOTS] Skenario: Anda ingin mencari total penjualan per kategori produk, tetapi hanya untuk produk yang harganya di atas 50.000. Di mana posisi filter harga > 50.000?",
    options: ["Di dalam klausa WHERE", "Di dalam klausa HAVING", "Di dalam klausa ORDER BY", "Di dalam SELECT"],
    answer: "Di dalam klausa WHERE",
    explanation: "Harga adalah atribut per produk (baris), jadi penyaringan dilakukan di awal (WHERE) sebelum dijumlahkan (SUM) per kategori."
  },
  {
    id: 21,
    modulId: 5,
    question: "[HOTS] Bagaimana cara menampilkan kategori yang memiliki total stok (SUM) paling banyak saja?",
    options: ["Pakai WHERE MAX(stok)", "Pakai GROUP BY kategori ORDER BY SUM(stok) DESC LIMIT 1", "Pakai HAVING stok = MAX", "Pakai ORDER BY kategori ASC"],
    answer: "Pakai GROUP BY kategori ORDER BY SUM(stok) DESC LIMIT 1",
    explanation: "Kita urutkan total stok dari yang terbesar, lalu ambil satu baris teratas menggunakan LIMIT."
  },
  {
    id: 22,
    modulId: 5,
    question: "[HOTS] Apa perbedaan logis antara ORDER BY 1 dan ORDER BY nama (jika nama adalah kolom pertama)?",
    options: ["ORDER BY 1 lebih cepat", "Keduanya sama, angka 1 merujuk pada urutan kolom dalam SELECT", "ORDER BY 1 mengurutkan berdasarkan angka 1", "ORDER BY 1 dilarang dalam SQL"],
    answer: "Keduanya sama, angka 1 merujuk pada urutan kolom dalam SELECT",
    explanation: "Dalam SQL, kita bisa menggunakan nomor urut kolom yang ada di klausa SELECT untuk melakukan pengurutan."
  },
  {
    id: 23,
    modulId: 5,
    question: "[HOTS] Jika sebuah query menggunakan GROUP BY kategori, namun di SELECT ada kolom 'nama_produk' yang tidak masuk fungsi agregat, apa yang terjadi pada kebanyakan database (seperti PostgreSQL/SQL Server)?",
    options: ["Akan menampilkan nama produk pertama", "Akan terjadi error karena kolom SELECT harus ada di GROUP BY atau fungsi agregat", "Akan menampilkan semua nama produk", "Nama produk akan diabaikan"],
    answer: "Akan terjadi error karena kolom SELECT harus ada di GROUP BY atau fungsi agregat",
    explanation: "Aturan integritas SQL mengharuskan semua kolom non-agregat di SELECT didefinisikan dalam GROUP BY."
  },
  {
    id: 24,
    modulId: 5,
    question: "[HOTS] Anda ingin memfilter data penjualan tahun 2023. Jika query sudah memiliki GROUP BY kategori, perlukah Anda menggunakan HAVING untuk filter tahun tersebut?",
    options: ["Ya, wajib", "Tidak, lebih efisien menggunakan WHERE sebelum GROUP BY", "Boleh dua-duanya tanpa perbedaan kinerja", "Tahun hanya bisa di filter di ORDER BY"],
    answer: "Tidak, lebih efisien menggunakan WHERE sebelum GROUP BY",
    explanation: "Menggunakan WHERE mengurangi beban database karena baris yang tidak relevan dibuang sebelum proses pengelompokkan yang berat dilakukan."
  },
  {
    id: 25,
    modulId: 5,
    question: "[HOTS] Manakah query yang benar untuk mendapatkan 3 kategori dengan rata-rata harga tertinggi, tapi hanya untuk kategori yang punya lebih dari 5 produk?",
    options: ["SELECT kategori FROM p WHERE COUNT(*) > 5 GROUP BY kategori ORDER BY AVG(harga) DESC LIMIT 3", "SELECT kategori FROM p GROUP BY kategori HAVING COUNT(*) > 5 ORDER BY AVG(harga) DESC LIMIT 3", "SELECT kategori FROM p HAVING COUNT(*) > 5 ORDER BY harga DESC", "SELECT kategori FROM p GROUP BY kategori WHERE COUNT(*) > 5"],
    answer: "SELECT kategori FROM p GROUP BY kategori HAVING COUNT(*) > 5 ORDER BY AVG(harga) DESC LIMIT 3",
    explanation: "Urutannya: kelompokkan (GROUP BY), saring kelompok (HAVING), urutkan hasil (ORDER BY), lalu batasi (LIMIT)."
  },
  {
    id: 1,
    modulId: 6,
    question: "Apa tujuan utama dari penggunaan perintah JOIN dalam SQL?",
    options: ["Menghapus baris duplikat", "Menggabungkan baris dari dua atau lebih tabel berdasarkan kolom yang terkait", "Membuat tabel baru secara otomatis", "Mengurutkan data dari beberapa database"],
    answer: "Menggabungkan baris dari dua atau lebih tabel berdasarkan kolom yang terkait",
    explanation: "JOIN digunakan untuk menghubungkan data antar tabel yang memiliki relasi, biasanya melalui Primary Key dan Foreign Key."
  },
  {
    id: 2,
    modulId: 6,
    question: "Jenis JOIN mana yang hanya mengembalikan baris jika terdapat kecocokan di kedua tabel?",
    options: ["LEFT JOIN", "RIGHT JOIN", "INNER JOIN", "FULL OUTER JOIN"],
    answer: "INNER JOIN",
    explanation: "INNER JOIN hanya menampilkan data yang memiliki pasangan atau kecocokan di kedua tabel yang dihubungkan."
  },
  {
    id: 3,
    modulId: 6,
    question: "Jika kita ingin mengambil semua data dari tabel kiri dan data yang cocok dari tabel kanan, kita menggunakan...",
    options: ["INNER JOIN", "LEFT JOIN", "RIGHT JOIN", "CROSS JOIN"],
    answer: "LEFT JOIN",
    explanation: "LEFT JOIN (atau LEFT OUTER JOIN) mengambil semua baris dari tabel pertama (kiri) meskipun tidak ada pasangan di tabel kedua."
  },
  {
    id: 4,
    modulId: 6,
    question: "Klausa mana yang digunakan setelah perintah JOIN untuk menentukan kolom penghubung?",
    options: ["WHERE", "ON", "IN", "AS"],
    answer: "ON",
    explanation: "Klausa ON digunakan untuk mendefinisikan kondisi relasi (misal: tabelA.id = tabelB.id_A)."
  },
  {
    id: 5,
    modulId: 6,
    question: "Apa hasil dari RIGHT JOIN jika baris di tabel kanan tidak memiliki pasangan di tabel kiri?",
    options: ["Baris tersebut tidak ditampilkan", "Akan muncul pesan error", "Baris tetap ditampilkan dengan nilai NULL di kolom tabel kiri", "Baris akan dihapus otomatis"],
    answer: "Baris tetap ditampilkan dengan nilai NULL di kolom tabel kiri",
    explanation: "RIGHT JOIN memprioritaskan semua data dari tabel kanan; jika tidak ada pasangan di kiri, maka hasilnya adalah NULL."
  },
  {
    id: 6,
    modulId: 6,
    question: "JOIN yang menghasilkan perkalian kartesian (semua kombinasi baris) antar tabel adalah...",
    options: ["INNER JOIN", "FULL JOIN", "CROSS JOIN", "NATURAL JOIN"],
    answer: "CROSS JOIN",
    explanation: "CROSS JOIN menghubungkan setiap baris dari tabel pertama dengan setiap baris dari tabel kedua tanpa kondisi khusus."
  },
  {
    id: 7,
    modulId: 6,
    question: "Istilah untuk menghubungkan sebuah tabel dengan dirinya sendiri adalah...",
    options: ["AUTO JOIN", "SELF JOIN", "RECURSIVE JOIN", "INNER JOIN"],
    answer: "SELF JOIN",
    explanation: "SELF JOIN adalah proses JOIN biasa di mana tabel yang sama digunakan sebagai tabel kiri dan tabel kanan."
  },
  {
    id: 8,
    modulId: 6,
    question: "Dalam relasi antar tabel, kolom di tabel anak yang merujuk ke Primary Key di tabel induk disebut...",
    options: ["Candidate Key", "Foreign Key", "Unique Key", "Super Key"],
    answer: "Foreign Key",
    explanation: "Foreign Key (Kunci Tamu) adalah kolom yang menciptakan hubungan antara tabel tersebut dengan tabel induk."
  },
  {
    id: 9,
    modulId: 6,
    question: "Apa kegunaan alias tabel (misal: FROM Pelanggan AS P) saat melakukan JOIN?",
    options: ["Mempercepat eksekusi query", "Memperpendek penulisan nama tabel saat merujuk kolom", "Mengubah nama tabel secara permanen", "Menyembunyikan data asli"],
    answer: "Memperpendek penulisan nama tabel saat merujuk kolom",
    explanation: "Alias memudahkan kita menulis query yang kompleks agar tidak perlu mengetik nama tabel yang panjang berulang kali."
  },
  {
    id: 10,
    modulId: 6,
    question: "Manakah dari berikut ini yang merupakan jenis OUTER JOIN?",
    options: ["INNER, LEFT, RIGHT", "LEFT, RIGHT, FULL", "CROSS, NATURAL", "SELF, INNER"],
    answer: "LEFT, RIGHT, FULL",
    explanation: "Outer Join terbagi menjadi tiga: Left Outer Join, Right Outer Join, dan Full Outer Join."
  },
  {
    id: 11,
    modulId: 6,
    question: "Apa yang dimaksud dengan FULL OUTER JOIN?",
    options: ["Hanya mengambil data yang cocok", "Mengambil semua data dari kedua tabel baik yang cocok maupun tidak", "Mengambil semua data dari tabel kiri saja", "Mengambil data secara acak"],
    answer: "Mengambil semua data dari kedua tabel baik yang cocok maupun tidak",
    explanation: "FULL OUTER JOIN menggabungkan hasil dari LEFT JOIN dan RIGHT JOIN."
  },
  {
    id: 12,
    modulId: 6,
    question: "Jika kita melakukan JOIN tanpa klausa ON atau WHERE, apa yang biasanya terjadi pada beberapa sistem database?",
    options: ["Akan terjadi error", "Secara otomatis menjadi INNER JOIN", "Menghasilkan CROSS JOIN", "Database akan berhenti"],
    answer: "Menghasilkan CROSS JOIN",
    explanation: "Tanpa kondisi filter, database akan mencoba memasangkan setiap baris secara membabi buta (Cartesian Product)."
  },
  {
    id: 13,
    modulId: 6,
    question: "Manakah sintaks JOIN yang paling umum digunakan?",
    options: ["SELECT * FROM T1, T2 WHERE T1.id = T2.id", "SELECT * FROM T1 JOIN T2 ON T1.id = T2.id", "Semua benar", "Tidak ada yang benar"],
    answer: "Semua benar",
    explanation: "Opsi pertama adalah sintaks lama (Implicit Join), sedangkan opsi kedua adalah sintaks modern (Explicit Join)."
  },
  {
    id: 14,
    modulId: 6,
    question: "Klausa 'USING' dapat digunakan sebagai pengganti 'ON' jika...",
    options: ["Nama kolom penghubung di kedua tabel sama persis", "Tabel memiliki banyak kolom", "Kita menggunakan CROSS JOIN", "Data tabel sangat besar"],
    answer: "Nama kolom penghubung di kedua tabel sama persis",
    explanation: "USING(id) adalah cara singkat jika kedua tabel memiliki kolom bernama 'id' sebagai penghubung."
  },
  {
    id: 15,
    modulId: 6,
    question: "Secara default, jika kita hanya menuliskan kata 'JOIN', maka yang dimaksud adalah...",
    options: ["LEFT JOIN", "INNER JOIN", "FULL JOIN", "RIGHT JOIN"],
    answer: "INNER JOIN",
    explanation: "Dalam standar SQL, penulisan 'JOIN' tanpa prefiks dianggap sebagai 'INNER JOIN'."
  },
  {
    id: 16,
    modulId: 6,
    question: "[HOTS] Anda ingin mencari daftar pelanggan yang belum pernah melakukan pemesanan sama sekali. Jenis JOIN mana yang paling tepat digunakan?",
    options: ["INNER JOIN", "LEFT JOIN dengan filter WHERE tabel_pesan.id IS NULL", "RIGHT JOIN", "CROSS JOIN"],
    answer: "LEFT JOIN dengan filter WHERE tabel_pesan.id IS NULL",
    explanation: "Dengan LEFT JOIN, pelanggan tanpa pesanan akan memiliki nilai NULL di kolom pesanan. Filter IS NULL akan menangkap mereka."
  },
  {
    id: 17,
    modulId: 6,
    question: "[HOTS] Apa perbedaan utama antara INNER JOIN dan CROSS JOIN?",
    options: ["CROSS JOIN lebih lambat", "INNER JOIN memerlukan kondisi (ON), sedangkan CROSS JOIN tidak", "INNER JOIN menghasilkan lebih banyak data", "Tidak ada perbedaan"],
    answer: "INNER JOIN memerlukan kondisi (ON), sedangkan CROSS JOIN tidak",
    explanation: "INNER JOIN menyaring data berdasarkan kecocokan, sedangkan CROSS JOIN memasangkan semuanya tanpa syarat."
  },
  {
    id: 18,
    modulId: 6,
    question: "[HOTS] Dalam SELF JOIN, mengapa kita wajib menggunakan alias tabel yang berbeda?",
    options: ["Agar database tidak bingung membedakan antara sumber kolom", "Agar query lebih cepat", "Karena dilarang menggunakan nama asli", "Hanya formalitas"],
    answer: "Agar database tidak bingung membedakan antara sumber kolom",
    explanation: "Karena tabelnya sama, alias membantu mesin database membedakan mana yang berperan sebagai tabel 'pertama' dan mana yang 'kedua'."
  },
  {
    id: 19,
    modulId: 6,
    question: "[HOTS] Jika Tabel A memiliki 5 baris dan Tabel B memiliki 4 baris, berapa jumlah baris yang dihasilkan oleh CROSS JOIN?",
    options: ["9 baris", "1 baris", "20 baris", "5 baris"],
    answer: "20 baris",
    explanation: "CROSS JOIN menghasilkan perkalian jumlah baris (5 x 4 = 20)."
  },
  {
    id: 20,
    modulId: 6,
    question: "[HOTS] Skenario: Anda melakukan JOIN pada 3 tabel (A, B, C). Bagaimana urutan eksekusi logisnya?",
    options: ["Ketiganya digabung sekaligus", "Tabel A dan B digabung dulu, hasilnya baru digabung dengan C", "Tabel C diproses pertama kali", "Berdasarkan urutan abjad nama tabel"],
    answer: "Tabel A dan B digabung dulu, hasilnya baru digabung dengan C",
    explanation: "JOIN diproses secara berurutan. Hasil dari join pertama menjadi 'tabel virtual' untuk join berikutnya."
  },
  {
    id: 21,
    modulId: 6,
    question: "[HOTS] Apa yang terjadi jika kita melakukan INNER JOIN pada kolom yang tipenya berbeda (misal: INT dengan VARCHAR)?",
    options: ["Pasti error", "Berhasil jika database melakukan konversi otomatis (implicit casting)", "Selalu menghasilkan data kosong", "Tabel akan rusak"],
    answer: "Berhasil jika database melakukan konversi otomatis (implicit casting)",
    explanation: "Beberapa DBMS bisa mengubah tipe data secara otomatis agar cocok, namun sangat disarankan menggunakan tipe data yang sama demi performa."
  },
  {
    id: 22,
    modulId: 6,
    question: "[HOTS] Manakah yang lebih efisien untuk menggabungkan dua tabel yang sangat besar?",
    options: ["Memilih kolom spesifik daripada SELECT *", "Menggunakan WHERE daripada ON", "Menghapus semua INDEX sebelum JOIN", "Menggunakan CROSS JOIN"],
    answer: "Memilih kolom spesifik daripada SELECT *",
    explanation: "Mengurangi jumlah kolom yang ditarik akan mengurangi beban memori dan mempercepat proses penggabungan data."
  },
  {
    id: 23,
    modulId: 6,
    question: "[HOTS] Mengapa penggunaan JOIN sering kali lebih disukai daripada menggunakan Subquery di klausa SELECT?",
    options: ["JOIN lebih mudah ditulis", "JOIN biasanya memiliki performa lebih baik karena dioptimalkan oleh query optimizer", "Subquery tidak bisa membaca data tabel lain", "JOIN tidak memakan ruang memori"],
    answer: "JOIN biasanya memiliki performa lebih baik karena dioptimalkan oleh query optimizer",
    explanation: "Mesin database modern sangat efisien dalam memproses JOIN dibandingkan mengeksekusi subquery berulang kali untuk setiap baris."
  },
  {
    id: 24,
    modulId: 6,
    question: "[HOTS] Anda melakukan JOIN pada tabel 'Karyawan' untuk mendapatkan nama atasan (yang juga karyawan). Ini adalah contoh kasus...",
    options: ["Outer Join", "Natural Join", "Self Join", "Cross Join"],
    answer: "Self Join",
    explanation: "Karena data atasan dan bawahan berada di tabel yang sama (Karyawan), kita menghubungkan tabel tersebut dengan dirinya sendiri."
  },
  {
    id: 25,
    modulId: 6,
    question: "[HOTS] Apa dampak dari JOIN pada kolom yang tidak memiliki INDEX?",
    options: ["Data akan salah", "Kecepatan query akan menurun drastis pada tabel besar", "Database akan menolak query", "Tidak ada dampak"],
    answer: "Kecepatan query akan menurun drastis pada tabel besar",
    explanation: "Tanpa INDEX, database harus memindai seluruh isi tabel (Full Table Scan) untuk mencari kecocokan, yang sangat memakan waktu."
  },
  {
    id: 1,
    modulId: 8,
    question: "Apa yang dimaksud dengan Subquery dalam SQL?",
    options: ["Query yang dijalankan setelah query utama selesai", "Query yang berada di dalam query lain", "Perintah untuk menghapus database", "Hasil dari perintah JOIN"],
    answer: "Query yang berada di dalam query lain",
    explanation: "Subquery adalah query SELECT yang diletakkan di dalam klausa query utama seperti WHERE, FROM, atau SELECT."
  },
  {
    id: 2,
    modulId: 8,
    question: "Subquery juga sering disebut dengan istilah...",
    options: ["Main Query", "Inner Query", "Outer Query", "Joint Query"],
    answer: "Inner Query",
    explanation: "Subquery disebut Inner Query, sedangkan query yang menampungnya disebut Outer Query."
  },
  {
    id: 3,
    modulId: 8,
    question: "Subquery biasanya dituliskan di dalam tanda...",
    options: ["Kurung siku [ ]", "Kurung kurawal { }", "Tanda petik ' '", "Tanda kurung ( )"],
    answer: "Tanda kurung ( )",
    explanation: "Standar penulisan subquery wajib diawali dan diakhiri dengan tanda kurung."
  },
  {
    id: 4,
    modulId: 8,
    question: "Jenis subquery yang hanya mengembalikan satu baris dan satu kolom disebut...",
    options: ["Scalar Subquery", "Multiple-row Subquery", "Correlated Subquery", "Table Subquery"],
    answer: "Scalar Subquery",
    explanation: "Scalar subquery menghasilkan nilai tunggal, sehingga bisa digunakan dengan operator perbandingan standar seperti = atau >."
  },
  {
    id: 5,
    modulId: 8,
    question: "Operator mana yang sering digunakan untuk Multiple-row Subquery?",
    options: ["=", "IN", ">", "<"],
    answer: "IN",
    explanation: "Operator IN digunakan jika subquery menghasilkan lebih dari satu nilai agar query utama bisa mencocokkan datanya."
  },
  {
    id: 6,
    modulId: 8,
    question: "Subquery yang bergantung pada kolom dari Outer Query disebut...",
    options: ["Scalar Subquery", "Nested Subquery", "Correlated Subquery", "Independent Subquery"],
    answer: "Correlated Subquery",
    explanation: "Correlated subquery dieksekusi berulang kali untuk setiap baris yang diproses oleh query utama."
  },
  {
    id: 7,
    modulId: 8,
    question: "Di mana posisi subquery yang berfungsi sebagai tabel sementara (virtual table)?",
    options: ["Klausa SELECT", "Klausa WHERE", "Klausa FROM", "Klausa ORDER BY"],
    answer: "Klausa FROM",
    explanation: "Subquery di klausa FROM bertindak sebagai tabel sementara, sering disebut sebagai Derived Table."
  },
  {
    id: 8,
    modulId: 8,
    question: "Apa fungsi dari operator EXISTS dalam subquery?",
    options: ["Menjumlahkan data", "Memeriksa apakah subquery menghasilkan baris data atau tidak", "Menghapus data yang ada", "Mengurutkan data keberadaan"],
    answer: "Memeriksa apakah subquery menghasilkan baris data atau tidak",
    explanation: "EXISTS akan bernilai TRUE jika subquery mengembalikan minimal satu baris data."
  },
  {
    id: 9,
    modulId: 8,
    question: "Manakah yang dieksekusi terlebih dahulu pada subquery standar (bukan correlated)?",
    options: ["Query utama", "Subquery", "Keduanya bersamaan", "Tergantung database"],
    answer: "Subquery",
    explanation: "Database mengeksekusi subquery terlebih dahulu untuk mendapatkan nilai yang diperlukan oleh query utama."
  },
  {
    id: 10,
    modulId: 8,
    question: "Berapa tingkat kedalaman maksimal (nesting) subquery yang diizinkan secara umum?",
    options: ["Hanya 1", "Hanya 2", "Tergantung pada batasan DBMS masing-masing", "Tidak terbatas"],
    answer: "Tergantung pada batasan DBMS masing-masing",
    explanation: "Secara teori bisa banyak, namun setiap sistem database (MySQL, PostgreSQL, dll) memiliki limitasi performa dan struktur."
  },
  {
    id: 11,
    modulId: 8,
    question: "Operator ALL dalam subquery digunakan untuk...",
    options: ["Memilih semua kolom", "Membandingkan nilai dengan SEMUA hasil dari subquery", "Menghapus semua data", "Menggabungkan semua tabel"],
    answer: "Membandingkan nilai dengan SEMUA hasil dari subquery",
    explanation: "Kondisi ALL akan bernilai TRUE jika perbandingan benar untuk setiap nilai yang dihasilkan subquery."
  },
  {
    id: 12,
    modulId: 8,
    question: "Operator ANY akan bernilai TRUE jika perbandingan benar untuk...",
    options: ["Seluruh hasil subquery", "Minimal satu hasil dari subquery", "Tidak ada hasil", "Hanya hasil pertama"],
    answer: "Minimal satu hasil dari subquery",
    explanation: "ANY (atau SOME) mengembalikan TRUE jika setidaknya satu nilai dalam subquery memenuhi syarat."
  },
  {
    id: 13,
    modulId: 8,
    question: "Subquery dapat digunakan di dalam perintah DML selain SELECT, yaitu...",
    options: ["Hanya INSERT", "Hanya UPDATE", "INSERT, UPDATE, dan DELETE", "Tidak bisa"],
    answer: "INSERT, UPDATE, dan DELETE",
    explanation: "Subquery sangat fleksibel dan bisa digunakan untuk menentukan data yang akan ditambah, diubah, atau dihapus."
  },
  {
    id: 14,
    modulId: 8,
    question: "Jika subquery di klausa WHERE mengembalikan lebih dari satu baris tetapi menggunakan operator '=', apa yang terjadi?",
    options: ["Database mengambil baris pertama", "Akan terjadi error", "Database menjumlahkan hasilnya", "Query tetap berjalan normal"],
    answer: "Akan terjadi error",
    explanation: "Operator perbandingan scalar (=, <, >) hanya menerima satu nilai (single row). Jika lebih, maka query akan error."
  },
  {
    id: 15,
    modulId: 8,
    question: "Apa kegunaan alias dalam subquery di klausa FROM?",
    options: ["Hanya formalitas", "Wajib ada agar query utama bisa merujuk ke tabel virtual tersebut", "Untuk mempercepat query", "Agar data lebih rahasia"],
    answer: "Wajib ada agar query utama bisa merujuk ke tabel virtual tersebut",
    explanation: "Derived table (subquery di FROM) secara sintaksis wajib memiliki nama alias."
  },
  {
    id: 16,
    modulId: 8,
    question: "[HOTS] Anda ingin mencari produk yang harganya di atas rata-rata harga seluruh produk. Manakah struktur query yang benar?",
    options: ["SELECT * FROM p WHERE harga > AVG(harga)", "SELECT * FROM p WHERE harga > (SELECT AVG(harga) FROM p)", "SELECT AVG(harga) FROM p WHERE harga > p", "SELECT * FROM p HAVING harga > AVG(harga)"],
    answer: "SELECT * FROM p WHERE harga > (SELECT AVG(harga) FROM p)",
    explanation: "Karena AVG() tidak bisa di WHERE, kita gunakan subquery untuk menghitung rata-rata terlebih dahulu baru dibandingkan."
  },
  {
    id: 17,
    modulId: 8,
    question: "[HOTS] Apa perbedaan utama antara JOIN dan Subquery dalam hal performa?",
    options: ["Subquery selalu lebih cepat", "JOIN biasanya lebih efisien karena optimasi engine, sementara subquery tertentu bisa lambat jika dieksekusi berulang", "Keduanya identik", "Subquery tidak menggunakan memori"],
    answer: "JOIN biasanya lebih efisien karena optimasi engine, sementara subquery tertentu bisa lambat jika dieksekusi berulang",
    explanation: "Optimizer database lebih mudah mengoptimalkan JOIN. Subquery (terutama correlated) seringkali membebani server jika data besar."
  },
  {
    id: 18,
    modulId: 8,
    question: "[HOTS] Kapan sebaiknya kita menggunakan EXISTS daripada IN?",
    options: ["Saat mengecek nilai di tabel kecil", "Saat tabel dalam subquery sangat besar, karena EXISTS berhenti memproses setelah menemukan kecocokan pertama", "Saat ingin mengambil data NULL", "Selalu gunakan IN karena lebih mudah"],
    answer: "Saat tabel dalam subquery sangat besar, karena EXISTS berhenti memproses setelah menemukan kecocokan pertama",
    explanation: "EXISTS lebih efisien untuk validasi keberadaan (membership check) pada dataset besar karena mekanisme short-circuit."
  },
  {
    id: 19,
    modulId: 8,
    question: "[HOTS] Dalam Correlated Subquery, apa yang terjadi jika tabel di Outer Query memiliki 1.000 baris?",
    options: ["Subquery dieksekusi 1 kali", "Subquery dieksekusi 1.000 kali", "Subquery dieksekusi 2 kali", "Database akan langsung error"],
    answer: "Subquery dieksekusi 1.000 kali",
    explanation: "Correlated subquery dijalankan satu kali untuk setiap baris di query utama, yang bisa memperlambat performa jika data banyak."
  },
  {
    id: 20,
    modulId: 8,
    question: "[HOTS] Manakah subquery yang akan mengembalikan error jika dijalankan?",
    options: ["WHERE id IN (1, 2)", "WHERE id = (SELECT id FROM user)", "WHERE id EXISTS (SELECT id FROM user)", "WHERE id > (SELECT MIN(id) FROM user)"],
    answer: "WHERE id = (SELECT id FROM user)",
    explanation: "Jika tabel user memiliki lebih dari satu baris, operator '=' akan gagal memproses multiple values."
  },
  {
    id: 21,
    modulId: 8,
    question: "[HOTS] Skenario: Anda ingin menampilkan nama karyawan beserta gaji tertinggi di departemen mereka masing-masing. Teknik subquery mana yang paling tepat?",
    options: ["Scalar Subquery di WHERE", "Correlated Subquery di SELECT", "Simple Subquery di FROM", "Subquery di ORDER BY"],
    answer: "Correlated Subquery di SELECT",
    explanation: "Subquery di SELECT dapat mencari nilai spesifik yang berhubungan dengan baris karyawan tersebut saat ini."
  },
  {
    id: 22,
    modulId: 8,
    question: "[HOTS] Apa hasil dari query: SELECT * FROM t1 WHERE id NOT IN (SELECT id FROM t2) jika ada satu nilai NULL di t2?",
    options: ["Menampilkan data yang tidak ada di t2", "Menampilkan semua data", "Tidak menampilkan data apa pun (kosong)", "Error"],
    answer: "Tidak menampilkan data apa pun (kosong)",
    explanation: "Dalam SQL, perbandingan NOT IN dengan NULL menghasilkan 'Unknown', sehingga seluruh filter akan gagal."
  },
  {
    id: 23,
    modulId: 8,
    question: "[HOTS] Mengapa subquery di klausa FROM terkadang disebut sebagai Inline View?",
    options: ["Karena tampilannya menarik", "Karena berfungsi sebagai tabel logis sementara yang hanya hidup selama query dijalankan", "Karena diletakkan dalam satu baris", "Karena tidak bisa difilter"],
    answer: "Karena berfungsi sebagai tabel logis sementara yang hanya hidup selama query dijalankan",
    explanation: "Inline View/Derived Table menyediakan set data yang bisa di-query layaknya tabel fisik oleh query utama."
  },
  {
    id: 24,
    modulId: 8,
    question: "[HOTS] Apa kegunaan operator perbandingan dengan ANY, contoh: '> ANY (10, 20, 30)'?",
    options: ["Harus lebih besar dari 30", "Harus lebih besar dari 10 (nilai terkecil)", "Harus tepat bernilai 20", "Berarti harus di antara 10 dan 30"],
    answer: "Harus lebih besar dari 10 (nilai terkecil)",
    explanation: "> ANY berarti lebih besar dari nilai mana pun dalam daftar, sehingga secara logis cukup lebih besar dari nilai terkecil."
  },
  {
    id: 25,
    modulId: 8,
    question: "[HOTS] Manakah pernyataan yang paling benar tentang penggunaan Subquery?",
    options: ["Subquery hanya bisa digunakan di perintah SELECT", "Subquery dapat digabungkan dengan fungsi agregat di query utama", "Subquery tidak boleh mengandung klausa GROUP BY", "Subquery selalu diawali dengan perintah JOIN"],
    answer: "Subquery dapat digabungkan dengan fungsi agregat di query utama",
    explanation: "Subquery sangat fleksibel dan sering digunakan untuk menghitung nilai agregat yang kemudian diproses lebih lanjut oleh query utama."
  },
  {
    id: 1,
    modulId: 9,
    question: "Apa fungsi utama dari SQL Constraints?",
    options: ["Mempercepat koneksi database", "Menentukan aturan untuk data di dalam tabel", "Menghapus data secara otomatis", "Mengubah tampilan antarmuka"],
    answer: "Menentukan aturan untuk data di dalam tabel",
    explanation: "Constraint digunakan untuk membatasi jenis data yang masuk ke tabel guna memastikan keakuratan dan keandalan data."
  },
  {
    id: 2,
    modulId: 9,
    question: "Constraint mana yang memastikan bahwa suatu kolom tidak boleh memiliki nilai kosong?",
    options: ["UNIQUE", "NOT NULL", "PRIMARY KEY", "DEFAULT"],
    answer: "NOT NULL",
    explanation: "NOT NULL memaksa kolom untuk selalu memiliki nilai, sehingga kita tidak bisa memasukkan baris baru tanpa mengisi kolom tersebut."
  },
  {
    id: 3,
    modulId: 9,
    question: "Constraint yang memastikan semua nilai dalam satu kolom berbeda satu sama lain adalah...",
    options: ["NOT NULL", "CHECK", "UNIQUE", "FOREIGN KEY"],
    answer: "UNIQUE",
    explanation: "UNIQUE memastikan bahwa tidak ada dua baris yang memiliki nilai yang sama dalam kolom yang ditentukan."
  },
  {
    id: 4,
    modulId: 9,
    question: "Manakah constraint yang merupakan gabungan dari NOT NULL dan UNIQUE?",
    options: ["FOREIGN KEY", "PRIMARY KEY", "DEFAULT", "CHECK"],
    answer: "PRIMARY KEY",
    explanation: "Primary Key secara unik mengidentifikasi setiap baris dalam tabel dan secara otomatis tidak boleh bernilai NULL."
  },
  {
    id: 5,
    modulId: 9,
    question: "Constraint yang digunakan untuk menghubungkan dua tabel berdasarkan kolom tertentu disebut...",
    options: ["PRIMARY KEY", "UNIQUE", "FOREIGN KEY", "DEFAULT"],
    answer: "FOREIGN KEY",
    explanation: "Foreign Key adalah kolom yang merujuk pada Primary Key di tabel lain untuk menciptakan relasi."
  },
  {
    id: 6,
    modulId: 9,
    question: "Constraint mana yang digunakan untuk membatasi rentang nilai yang dapat dimasukkan ke dalam kolom (misal: umur harus > 17)?",
    options: ["CHECK", "DEFAULT", "UNIQUE", "LIMIT"],
    answer: "CHECK",
    explanation: "Constraint CHECK digunakan untuk memastikan bahwa nilai dalam kolom memenuhi kondisi spesifik yang ditentukan."
  },
  {
    id: 7,
    modulId: 9,
    question: "Apa kegunaan dari constraint DEFAULT?",
    options: ["Menghapus data jika kosong", "Memberikan nilai otomatis jika tidak ada nilai yang ditentukan", "Menghubungkan tabel", "Memvalidasi email"],
    answer: "Memberikan nilai otomatis jika tidak ada nilai yang ditentukan",
    explanation: "DEFAULT menyediakan nilai standar untuk kolom ketika perintah INSERT tidak menyertakan nilai untuk kolom tersebut."
  },
  {
    id: 8,
    modulId: 9,
    question: "Berapa jumlah Primary Key maksimal yang boleh ada dalam satu tabel?",
    options: ["Boleh banyak", "Hanya satu", "Tergantung jumlah kolom", "Minimal dua"],
    answer: "Hanya satu",
    explanation: "Satu tabel hanya boleh memiliki satu Primary Key, meskipun Primary Key tersebut bisa terdiri dari beberapa kolom (Composite Key)."
  },
  {
    id: 9,
    modulId: 9,
    question: "Dapatkah sebuah kolom yang didefinisikan sebagai UNIQUE menerima nilai NULL?",
    options: ["Bisa, tetapi biasanya hanya satu nilai NULL", "Tidak bisa sama sekali", "Hanya jika kolom tersebut Primary Key", "Bisa sebanyak mungkin"],
    answer: "Bisa, tetapi biasanya hanya satu nilai NULL",
    explanation: "Secara standar, UNIQUE membolehkan nilai NULL, namun kebanyakan DBMS hanya mengizinkan satu nilai NULL agar integritas keunikan terjaga."
  },
  {
    id: 10,
    modulId: 9,
    question: "Apa yang terjadi jika kita memasukkan data yang melanggar constraint?",
    options: ["Data tetap masuk tetapi ditandai", "Database akan mengabaikan constraint tersebut", "Database akan menolak perintah dan menampilkan error", "Komputer akan restart"],
    answer: "Database akan menolak perintah dan menampilkan error",
    explanation: "Constraint adalah aturan keras; jika dilanggar, transaksi akan digagalkan oleh sistem manajemen database (DBMS)."
  },
  {
    id: 11,
    modulId: 9,
    question: "Constraint dapat didefinisikan pada saat pembuatan tabel (CREATE TABLE) atau setelah tabel dibuat dengan perintah...",
    options: ["UPDATE TABLE", "MODIFY TABLE", "ALTER TABLE", "CHANGE TABLE"],
    answer: "ALTER TABLE",
    explanation: "ALTER TABLE digunakan untuk menambah, menghapus, atau mengubah constraint pada tabel yang sudah ada."
  },
  {
    id: 12,
    modulId: 9,
    question: "Primary Key yang terdiri dari lebih dari satu kolom disebut...",
    options: ["Double Key", "Composite Key", "Mixed Key", "Multiple Key"],
    answer: "Composite Key",
    explanation: "Composite Key adalah kunci unik yang dibentuk dari kombinasi dua atau lebih kolom dalam satu tabel."
  },
  {
    id: 13,
    modulId: 9,
    question: "Apa tujuan utama dari Foreign Key?",
    options: ["Mempercepat pencarian data", "Menjaga integritas referensial antar tabel", "Menyembunyikan data", "Mencegah duplikasi data di satu tabel"],
    answer: "Menjaga integritas referensial antar tabel",
    explanation: "Integritas referensial memastikan hubungan antar data di dua tabel tetap konsisten dan valid."
  },
  {
    id: 14,
    modulId: 9,
    question: "Manakah pernyataan yang benar tentang UNIQUE dan PRIMARY KEY?",
    options: ["Keduanya identik", "Tabel bisa punya banyak UNIQUE tapi hanya satu PRIMARY KEY", "UNIQUE tidak bisa NULL", "PRIMARY KEY boleh duplikat"],
    answer: "Tabel bisa punya banyak UNIQUE tapi hanya satu PRIMARY KEY",
    explanation: "PRIMARY KEY adalah identitas utama tabel, sedangkan UNIQUE digunakan untuk kolom lain yang juga harus unik (seperti email atau NIK)."
  },
  {
    id: 15,
    modulId: 9,
    question: "Constraint CHECK ('L', 'P') pada kolom jenis_kelamin berarti...",
    options: ["Hanya boleh mengisi huruf L atau P", "Boleh mengisi apa saja asal diawali L", "Otomatis mengisi L", "Pesan error jika mengisi L"],
    answer: "Hanya boleh mengisi huruf L atau P",
    explanation: "Klausa CHECK membatasi input hanya pada nilai-nilai yang disebutkan dalam kondisi tersebut."
  },
  {
    id: 16,
    modulId: 9,
    question: "[HOTS] Apa yang dimaksud dengan 'ON DELETE CASCADE' pada Foreign Key?",
    options: ["Mencegah penghapusan data induk", "Jika data induk dihapus, data terkait di tabel anak akan ikut terhapus otomatis", "Menghapus tabel secara permanen", "Mengubah data anak menjadi NULL"],
    answer: "Jika data induk dihapus, data terkait di tabel anak akan ikut terhapus otomatis",
    explanation: "CASCADE memudahkan manajemen data agar tidak ada data 'yatim piatu' (orphaned data) saat referensi induknya hilang."
  },
  {
    id: 17,
    modulId: 9,
    question: "[HOTS] Mengapa kolom yang sering dicari sebaiknya memiliki constraint UNIQUE atau PRIMARY KEY?",
    options: ["Agar data tidak hilang", "Karena sistem otomatis membuat INDEX pada kolom tersebut untuk mempercepat pencarian", "Karena dilarang mencari data yang tidak unik", "Agar database tidak penuh"],
    answer: "Karena sistem otomatis membuat INDEX pada kolom tersebut untuk mempercepat pencarian",
    explanation: "Secara internal, DBMS membuat struktur INDEX untuk kolom kunci guna memastikan pengecekan keunikan dan pencarian berjalan sangat cepat."
  },
  {
    id: 18,
    modulId: 9,
    question: "[HOTS] Skenario: Anda ingin menghapus baris di tabel 'Kategori', tetapi muncul error 'Foreign Key Constraint Violation'. Apa penyebabnya?",
    options: ["Kategori tersebut masih digunakan oleh data di tabel 'Produk'", "Tabel Kategori sedang dikunci", "ID kategori terlalu besar", "Anda tidak punya akses menghapus"],
    answer: "Kategori tersebut masih digunakan oleh data di tabel 'Produk'",
    explanation: "Database menjaga integritas dengan melarang penghapusan induk selama masih ada anak yang merujuk padanya (kecuali diatur CASCADE)."
  },
  {
    id: 19,
    modulId: 9,
    question: "[HOTS] Apa perbedaan antara 'ON DELETE SET NULL' dan 'ON DELETE CASCADE'?",
    options: ["Tidak ada perbedaan", "SET NULL mengubah kolom referensi menjadi kosong, CASCADE menghapus barisnya", "CASCADE lebih aman", "SET NULL hanya untuk Primary Key"],
    answer: "SET NULL mengubah kolom referensi menjadi kosong, CASCADE menghapus barisnya",
    explanation: "SET NULL mempertahankan baris di tabel anak tetapi memutuskan hubungannya dengan induk, sedangkan CASCADE menghapus baris tersebut sepenuhnya."
  },
  {
    id: 20,
    modulId: 9,
    question: "[HOTS] Skenario: Tabel 'Siswa' memiliki kolom 'email' dengan constraint UNIQUE. Jika Anda mencoba meng-update email seorang siswa menjadi email yang sudah digunakan siswa lain, apa yang terjadi?",
    options: ["Update berhasil dan menimpa data lama", "Update gagal karena melanggar aturan keunikan", "Database membuat kolom baru", "Siswa lama akan terhapus"],
    answer: "Update gagal karena melanggar aturan keunikan",
    explanation: "Constraint UNIQUE berlaku tidak hanya saat INSERT (masuk data baru), tapi juga saat UPDATE (ubah data)."
  },
  {
    id: 21,
    modulId: 9,
    question: "[HOTS] Manakah yang paling tepat menggambarkan 'Data Integrity' dalam database?",
    options: ["Data yang selalu dienkripsi", "Konsistensi, akurasi, dan validitas data sepanjang siklus hidupnya", "Kapasitas penyimpanan yang besar", "Kecepatan akses data"],
    answer: "Konsistensi, akurasi, dan validitas data sepanjang siklus hidupnya",
    explanation: "Constraint adalah alat utama untuk menjaga integritas data agar data tetap masuk akal dan benar sesuai aturan bisnis."
  },
  {
    id: 22,
    modulId: 9,
    question: "[HOTS] Apa dampak performa jika sebuah tabel memiliki terlalu banyak constraint (terutama Foreign Key)?",
    options: ["Database menjadi lebih ringan", "Proses INSERT dan UPDATE menjadi sedikit lebih lambat karena sistem harus memvalidasi setiap aturan", "Pencarian data menjadi error", "Tidak ada dampak performa"],
    answer: "Proses INSERT dan UPDATE menjadi sedikit lebih lambat karena sistem harus memvalidasi setiap aturan",
    explanation: "Semakin banyak aturan, semakin banyak pengecekan yang harus dilakukan DBMS sebelum menyimpan data ke disk."
  },
  {
    id: 23,
    modulId: 9,
    question: "[HOTS] Jika Anda mendefinisikan kolom 'stok' dengan CHECK (stok >= 0), apa yang terjadi jika ada transaksi yang mencoba mengurangi stok hingga menjadi -1?",
    options: ["Stok tetap -1", "Stok otomatis menjadi 0", "Transaksi dibatalkan oleh database (Rollback)", "Database akan memberikan peringatan saja"],
    answer: "Transaksi dibatalkan oleh database (Rollback)",
    explanation: "Constraint CHECK memastikan aturan nilai terpenuhi; jika tidak, operasi tersebut dianggap tidak sah dan dibatalkan."
  },
  {
    id: 24,
    modulId: 9,
    question: "[HOTS] Bisakah kita memiliki Foreign Key yang merujuk pada kolom yang ber-constraint UNIQUE di tabel lain, bukan Primary Key?",
    options: ["Bisa, asalkan kolom yang dirujuk memiliki indeks unik", "Tidak bisa, harus Primary Key", "Hanya bisa jika tipe datanya INT", "Hanya bisa jika tabelnya sama"],
    answer: "Bisa, asalkan kolom yang dirujuk memiliki indeks unik",
    explanation: "Secara teknis, Foreign Key bisa merujuk ke kolom mana pun yang dijamin unik (UNIQUE), meskipun praktik terbaiknya adalah merujuk ke Primary Key."
  },
  {
    id: 25,
    modulId: 9,
    question: "[HOTS] Mengapa constraint NOT NULL biasanya diterapkan pada kolom Foreign Key dalam relasi 'Mandatory' (Wajib)?",
    options: ["Agar tabel tidak error", "Untuk memastikan setiap data anak 'wajib' memiliki induk atau keterkaitan", "Agar proses JOIN lebih lambat", "Karena Foreign Key otomatis NOT NULL"],
    answer: "Untuk memastikan setiap data anak 'wajib' memiliki induk atau keterkaitan",
    explanation: "Dalam relasi wajib (misal: Pesanan wajib punya Pelanggan), kolom FK harus NOT NULL agar tidak ada pesanan yang anonim."
  }
];