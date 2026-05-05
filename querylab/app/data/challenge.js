const daftarStudiKasus = [
  {
    id: "SC-001",
    tema: "E-Commerce Growth Analytics",
    deskripsi: "SmartStore sedang mengalami lonjakan transaksi. Analisis performa stok dan perilaku belanja pelanggan.",
    tabelTersedia: [
      { 
        nama: "produk", 
        kolom: ["id", "nama_produk", "kategori", "stok", "harga"],
        dataContoh: [
          [1, "Laptop Pro 14", "Elektronik", 10, 15000000],
          [2, "Mouse Wireless", "Elektronik", 50, 250000],
          [3, "Keyboard Mechanical", "Elektronik", 5, 800000],
          [4, "Meja Kerja", "Furniture", 12, 1200000],
          [5, "Kursi Gaming", "Furniture", 8, 2500000],
          [6, "Smartphone X", "Elektronik", 14, 7000000],
          [7, "Kabel HDMI", "Elektronik", 100, 50000],
          [8, "Monitor 24 Inch", "Elektronik", 4, 2100000]
        ]
      },
      { 
        nama: "transaksi", 
        kolom: ["id_trx", "produk_id", "jumlah", "total_bayar", "metode_bayar"],
        dataContoh: [
          ["T01", 1, 1, 15000000, "Transfer Bank"],
          ["T02", 2, 2, 500000, "E-Wallet"],
          ["T03", 6, 1, 7000000, "Transfer Bank"],
          ["T04", 4, 1, 1200000, "COD"],
          ["T05", 8, 1, 2100000, "E-Wallet"],
          ["T06", 2, 4, 1000000, "Transfer Bank"],
          ["T07", 5, 1, 2500000, "E-Wallet"],
          ["T08", 7, 10, 500000, "COD"]
        ]
      }
    ],
    soal: [
      {
        id: 1,
        judul: "Inventaris Kritis",
        instruksi: "Manajemen membutuhkan daftar produk kategori 'Elektronik' yang stoknya di bawah 15 unit. Tampilkan nama produk dan stoknya saja.",
        kisi: "Gunakan SELECT nama_produk, stok ... WHERE kategori = 'Elektronik' AND stok < 15",
        jawabanKey: ["select", "nama_produk", "stok", "from", "produk", "where", "kategori", "elektronik", "and", "stok", "<", "15"]
      },
      {
        id: 2,
        judul: "Analisis Metode Pembayaran",
        instruksi: "Tampilkan seluruh kolom dari tabel transaksi yang menggunakan metode 'Transfer Bank' dengan bayar di atas 1.000.000.",
        kisi: "Gunakan SELECT * ... WHERE metode_bayar = 'Transfer Bank' AND total_bayar > 1000000",
        jawabanKey: ["select", "*", "from", "transaksi", "where", "metode_bayar", "transfer bank", "and", "total_bayar", ">", "1000000"]
      },
      {
        id: 3,
        judul: "Produk Furniture Mewah",
        instruksi: "Tampilkan nama produk kategori 'Furniture' yang harganya di atas 2.000.000.",
        kisi: "Gunakan filter kategori = 'Furniture' dan harga > 2000000.",
        jawabanKey: ["select", "nama_produk", "from", "produk", "where", "kategori", "furniture", "and", "harga", ">", "2000000"]
      },
      {
        id: 4,
        judul: "Borongan Belanja",
        instruksi: "Tampilkan ID Transaksi yang membeli jumlah barang sebanyak 4 unit atau lebih.",
        kisi: "Gunakan SELECT id_trx FROM transaksi WHERE jumlah >= 4",
        jawabanKey: ["select", "id_trx", "from", "transaksi", "where", "jumlah", ">=", "4"]
      },
      {
        id: 5,
        judul: "Urutan Stok Terbanyak",
        instruksi: "Tampilkan semua kolom produk, urutkan berdasarkan stok dari yang paling banyak ke paling sedikit.",
        kisi: "Gunakan ORDER BY stok DESC.",
        jawabanKey: ["select", "*", "from", "produk", "order", "by", "stok", "desc"]
      },
      {
        id: 6,
        judul: "Total Nilai Aset",
        instruksi: "Hitung total nilai uang jika seluruh stok produk terjual habis (stok * harga).",
        kisi: "Gunakan fungsi SUM(stok * harga).",
        jawabanKey: ["select", "sum(stok * harga)", "from", "produk"]
      },
      {
        id: 7,
        judul: "Relasi Nama Produk",
        instruksi: "Tampilkan nama_produk dan total_bayar untuk setiap transaksi yang ada.",
        kisi: "Gunakan INNER JOIN antara produk dan transaksi pada id produk.",
        jawabanKey: ["select", "produk.nama_produk", "transaksi.total_bayar", "from", "produk", "inner", "join", "transaksi", "on", "produk.id", "=", "transaksi.produk_id"]
      },
      {
        id: 8,
        judul: "Filter Join Elektronik",
        instruksi: "Tampilkan ID Transaksi untuk produk yang masuk dalam kategori 'Elektronik' saja.",
        kisi: "Gunakan JOIN dan filter WHERE kategori = 'Elektronik'.",
        jawabanKey: ["select", "transaksi.id_trx", "from", "transaksi", "join", "produk", "on", "transaksi.produk_id", "=", "produk.id", "where", "kategori", "elektronik"]
      }
    ]
  },
  {
    id: "SC-002",
    tema: "Hospital Management System",
    deskripsi: "Analisis data pasien dan efektivitas pelayanan dokter di RS Medika.",
    tabelTersedia: [
      {
        nama: "pasien",
        kolom: ["id_pasien", "nama", "kota", "umur", "jenis_kelamin"],
        dataContoh: [
          [101, "Budi", "Jakarta", 45, "L"],
          [102, "Ani", "Bandung", 12, "P"],
          [103, "Citra", "Surabaya", 28, "P"],
          [104, "Dedi", "Jakarta", 60, "L"],
          [105, "Eka", "Medan", 8, "L"],
          [106, "Fani", "Bandung", 34, "P"],
          [107, "Gani", "Jakarta", 19, "L"],
          [108, "Hana", "Surabaya", 52, "P"]
        ]
      },
      {
        nama: "kunjungan",
        kolom: ["id_kunjungan", "pasien_id", "dokter", "biaya", "status"],
        dataContoh: [
          [1, 101, "Dr. Andi", 500000, "Selesai"],
          [2, 102, "Dr. Siska", 200000, "Selesai"],
          [3, 104, "Dr. Andi", 750000, "Rawat Inap"],
          [4, 103, "Dr. Siska", 300000, "Selesai"],
          [5, 105, "Dr. Budi", 150000, "Selesai"],
          [6, 108, "Dr. Andi", 900000, "Rawat Inap"],
          [7, 106, "Dr. Budi", 250000, "Selesai"],
          [8, 107, "Dr. Siska", 400000, "Selesai"]
        ]
      }
    ],
    soal: [
      {
        id: 1,
        judul: "Pasien Anak",
        instruksi: "Tampilkan nama dan umur pasien yang berusia di bawah 15 tahun.",
        kisi: "SELECT nama, umur FROM pasien WHERE umur < 15",
        jawabanKey: ["select", "nama", "umur", "from", "pasien", "where", "umur", "<", "15"]
      },
      {
        id: 2,
        judul: "Pasien Ibu Kota",
        instruksi: "Tampilkan semua data pasien yang berasal dari kota 'Jakarta'.",
        kisi: "Gunakan filter kota = 'Jakarta'.",
        jawabanKey: ["select", "*", "from", "pasien", "where", "kota", "jakarta"]
      },
      {
        id: 3,
        judul: "Pasien Lansia",
        instruksi: "Tampilkan nama pasien yang berumur 50 tahun ke atas.",
        kisi: "Gunakan WHERE umur >= 50",
        jawabanKey: ["select", "nama", "from", "pasien", "where", "umur", ">=", "50"]
      },
      {
        id: 4,
        judul: "Layanan Dr. Andi",
        instruksi: "Tampilkan data kunjungan yang ditangani oleh 'Dr. Andi'.",
        kisi: "Filter kolom dokter dengan nama 'Dr. Andi'.",
        jawabanKey: ["select", "*", "from", "kunjungan", "where", "dokter", "dr. andi"]
      },
      {
        id: 5,
        judul: "Biaya Tinggi",
        instruksi: "Tampilkan kunjungan dengan biaya lebih dari 400.000, urutkan dari yang termurah.",
        kisi: "Gunakan WHERE biaya > 400000 ORDER BY biaya ASC",
        jawabanKey: ["select", "*", "from", "kunjungan", "where", "biaya", ">", "400000", "order", "by", "biaya", "asc"]
      },
      {
        id: 6,
        judul: "Rata-rata Biaya",
        instruksi: "Hitung rata-rata biaya dari seluruh kunjungan pasien.",
        kisi: "Gunakan fungsi AVG(biaya).",
        jawabanKey: ["select", "avg(biaya)", "from", "kunjungan"]
      },
      {
        id: 7,
        judul: "Data Pasien & Dokter",
        instruksi: "Tampilkan nama pasien dan nama dokter yang menanganinya dalam satu tabel.",
        kisi: "JOIN pasien dan kunjungan pada id pasien.",
        jawabanKey: ["select", "pasien.nama", "kunjungan.dokter", "from", "pasien", "join", "kunjungan", "on", "pasien.id_pasien", "=", "kunjungan.pasien_id"]
      },
      {
        id: 8,
        judul: "Filter Pasien Bandung",
        instruksi: "Tampilkan ID Kunjungan untuk pasien yang berdomisili di 'Bandung'.",
        kisi: "Gunakan JOIN dan filter kota pasien.",
        jawabanKey: ["select", "kunjungan.id_kunjungan", "from", "kunjungan", "join", "pasien", "on", "kunjungan.pasien_id", "=", "pasien.id_pasien", "where", "kota", "bandung"]
      }
    ]
  },
  {
    id: "SC-003",
    tema: "Library Management System",
    deskripsi: "Kelola koleksi buku dan aktivitas peminjaman anggota perpustakaan.",
    tabelTersedia: [
      {
        nama: "buku",
        kolom: ["id_buku", "judul", "penulis", "tahun_terbit", "stok"],
        dataContoh: [
          [1, "Laskar Pelangi", "Andrea Hirata", 2005, 5],
          [2, "Bumi Manusia", "Pramoedya Ananta Toer", 1980, 2],
          [3, "Negeri 5 Menara", "A. Fuadi", 2009, 8],
          [4, "Filosofi Teras", "Henry Manampiring", 2018, 10],
          [5, "Dilan 1990", "Pidi Baiq", 2014, 0],
          [6, "Pulang", "Leila S. Chudori", 2012, 3],
          [7, "Hujan", "Tere Liye", 2016, 12],
          [8, "Cantik Itu Luka", "Eka Kurniawan", 2002, 1]
        ]
      },
      {
        nama: "peminjaman",
        kolom: ["id_pinjam", "buku_id", "nama_anggota", "durasi_hari", "status"],
        dataContoh: [
          [101, 1, "Hizkia", 7, "Kembali"],
          [102, 2, "Budi", 14, "Dipinjam"],
          [103, 5, "Santi", 7, "Dipinjam"],
          [104, 7, "Hizkia", 5, "Kembali"],
          [105, 3, "Andi", 10, "Dipinjam"],
          [106, 8, "Rina", 7, "Kembali"],
          [107, 4, "Budi", 14, "Dipinjam"],
          [108, 1, "Rina", 3, "Kembali"]
        ]
      }
    ],
    soal: [
      {
        id: 1,
        judul: "Buku Klasik",
        instruksi: "Tampilkan judul buku yang diterbitkan sebelum tahun 2000.",
        kisi: "Gunakan SELECT judul FROM buku WHERE tahun_terbit < 2000",
        jawabanKey: ["select", "judul", "from", "buku", "where", "tahun_terbit", "<", "2000"]
      },
      {
        id: 2,
        judul: "Stok Kosong",
        instruksi: "Cari judul buku yang stoknya saat ini adalah 0.",
        kisi: "Filter kolom stok dengan nilai 0.",
        jawabanKey: ["select", "judul", "from", "buku", "where", "stok", "=", "0"]
      },
      {
        id: 3,
        judul: "Karya Andrea Hirata",
        instruksi: "Tampilkan semua kolom dari buku yang ditulis oleh 'Andrea Hirata'.",
        kisi: "Gunakan WHERE penulis = 'Andrea Hirata'",
        jawabanKey: ["select", "*", "from", "buku", "where", "penulis", "andrea hirata"]
      },
      {
        id: 4,
        judul: "Peminjam Loyal",
        instruksi: "Tampilkan data peminjaman yang dilakukan oleh anggota bernama 'Hizkia'.",
        kisi: "Filter nama_anggota = 'Hizkia'.",
        jawabanKey: ["select", "*", "from", "peminjaman", "where", "nama_anggota", "hizkia"]
      },
      {
        id: 5,
        judul: "Pinjaman Lama",
        instruksi: "Tampilkan nama anggota yang meminjam buku lebih dari 7 hari.",
        kisi: "Gunakan durasi_hari > 7.",
        jawabanKey: ["select", "nama_anggota", "from", "peminjaman", "where", "durasi_hari", ">", "7"]
      },
      {
        id: 6,
        judul: "Buku Terpopuler",
        instruksi: "Hitung berapa banyak total peminjaman yang pernah terjadi.",
        kisi: "Gunakan fungsi COUNT(*).",
        jawabanKey: ["select", "count(*)", "from", "peminjaman"]
      },
      {
        id: 7,
        judul: "Detail Buku Dipinjam",
        instruksi: "Tampilkan judul buku dan nama anggota yang meminjamnya.",
        kisi: "Gunakan JOIN buku dan peminjaman.",
        jawabanKey: ["select", "buku.judul", "peminjaman.nama_anggota", "from", "buku", "join", "peminjaman", "on", "buku.id_buku", "=", "peminjaman.buku_id"]
      },
      {
        id: 8,
        judul: "Status Belum Kembali",
        instruksi: "Tampilkan judul buku yang statusnya masih 'Dipinjam'.",
        kisi: "JOIN tabel dan filter status = 'Dipinjam'.",
        jawabanKey: ["select", "buku.judul", "from", "buku", "join", "peminjaman", "on", "buku.id_buku", "=", "peminjaman.buku_id", "where", "status", "dipinjam"]
      }
    ]
  },
  {
    id: "SC-004",
    tema: "Human Resource Information System (HRIS)",
    deskripsi: "Manajemen data karyawan dan departemen untuk analisis struktur organisasi perusahaan.",
    tabelTersedia: [
      {
        nama: "karyawan",
        kolom: ["id_kry", "nama", "dept_id", "gaji", "tgl_masuk"],
        dataContoh: [
          [1, "Andi Perkasa", 10, 8500000, "2020-01-15"],
          [2, "Siti Aminah", 20, 12000000, "2019-03-10"],
          [3, "Budi Santoso", 10, 7000000, "2021-05-20"],
          [4, "Dewi Lestari", 30, 9500000, "2018-11-01"],
          [5, "Rian Hidayat", 20, 11000000, "2020-06-15"],
          [6, "Linda Wijaya", 10, 8000000, "2022-02-10"],
          [7, "Eko Prasetyo", 30, 15000000, "2017-08-25"],
          [8, "Maya Saputri", 20, 10500000, "2021-09-12"]
        ]
      },
      {
        nama: "departemen",
        kolom: ["id_dept", "nama_dept", "manager", "lokasi"],
        dataContoh: [
          [10, "IT Support", "Bapak Heru", "Jakarta"],
          [20, "Finance", "Ibu Rina", "Bandung"],
          [30, "Marketing", "Bapak Joni", "Jakarta"],
          [40, "HRD", "Ibu Sari", "Surabaya"],
          [50, "Operasional", "Bapak Doni", "Medan"],
          [60, "Legal", "Ibu Vera", "Jakarta"],
          [70, "R&D", "Bapak Arif", "Tangerang"],
          [80, "Public Relation", "Ibu Nana", "Bandung"]
        ]
      }
    ],
    soal: [
      {
        id: 1,
        judul: "Gaji di Atas Rata-rata",
        instruksi: "Tampilkan nama dan gaji karyawan yang gajinya di atas 10.000.000.",
        kisi: "Gunakan SELECT nama, gaji ... WHERE gaji > 10000000",
        jawabanKey: ["select", "nama", "gaji", "from", "karyawan", "where", "gaji", ">", "10000000"]
      },
      {
        id: 2,
        judul: "Departemen Jakarta",
        instruksi: "Tampilkan nama_dept yang berlokasi di 'Jakarta'.",
        kisi: "Gunakan filter lokasi = 'Jakarta'.",
        jawabanKey: ["select", "nama_dept", "from", "departemen", "where", "lokasi", "jakarta"]
      },
      {
        id: 3,
        judul: "Pencarian Nama Karyawan",
        instruksi: "Cari data karyawan yang namanya mengandung kata 'Prasetyo'.",
        kisi: "Gunakan LIKE '%prasetyo%'.",
        jawabanKey: ["select", "*", "from", "karyawan", "where", "nama", "like", "%prasetyo%"]
      },
      {
        id: 4,
        judul: "Urutan Gaji Terkecil",
        instruksi: "Tampilkan semua kolom karyawan urut dari gaji paling rendah ke paling tinggi.",
        kisi: "Gunakan ORDER BY gaji ASC.",
        jawabanKey: ["select", "*", "from", "karyawan", "order", "by", "gaji", "asc"]
      },
      {
        id: 5,
        judul: "Karyawan Senior",
        instruksi: "Tampilkan nama karyawan yang masuk sebelum tahun 2020.",
        kisi: "Gunakan tgl_masuk < '2020-01-01'.",
        jawabanKey: ["select", "nama", "from", "karyawan", "where", "tgl_masuk", "<", "2020-01-01"]
      },
      {
        id: 6,
        judul: "Total Pengeluaran Gaji",
        instruksi: "Hitung total biaya gaji yang harus dibayarkan perusahaan setiap bulan.",
        kisi: "Gunakan fungsi SUM(gaji).",
        jawabanKey: ["select", "sum(gaji)", "from", "karyawan"]
      },
      {
        id: 7,
        judul: "Join Karyawan & Dept",
        instruksi: "Tampilkan nama karyawan beserta nama departemen tempat mereka bekerja.",
        kisi: "JOIN karyawan dan departemen berdasarkan ID departemen.",
        jawabanKey: ["select", "karyawan.nama", "departemen.nama_dept", "from", "karyawan", "join", "departemen", "on", "karyawan.dept_id", "=", "departemen.id_dept"]
      },
      {
        id: 8,
        judul: "Manager Marketing",
        instruksi: "Tampilkan nama karyawan yang bekerja di departemen 'Marketing'.",
        kisi: "JOIN dan filter nama_dept = 'Marketing'.",
        jawabanKey: ["select", "karyawan.nama", "from", "karyawan", "join", "departemen", "on", "karyawan.dept_id", "=", "departemen.id_dept", "where", "nama_dept", "marketing"]
      }
    ]
  },
  {
    id: "SC-005",
    tema: "Fintech Transaction Monitor",
    deskripsi: "Pantau arus kas masuk dan keluar untuk mendeteksi transaksi besar nasabah.",
    tabelTersedia: [
      {
        nama: "nasabah",
        kolom: ["id_nasabah", "nama", "kota", "saldo"],
        dataContoh: [
          [1001, "Hizkia", "Medan", 50000000],
          [1002, "Lumban", "Jakarta", 1500000],
          [1003, "Gaol", "Bandung", 25000000],
          [1004, "Andi", "Surabaya", 500000],
          [1005, "Susi", "Medan", 12000000],
          [1006, "Budi", "Jakarta", 8000000],
          [1007, "Ani", "Semarang", 300000],
          [1008, "Joni", "Medan", 45000000]
        ]
      },
      {
        nama: "mutasi",
        kolom: ["id_mutasi", "nasabah_id", "jenis", "nominal", "keterangan"],
        dataContoh: [
          [1, 1001, "Kredit", 10000000, "Gaji"],
          [2, 1002, "Debit", 500000, "Tarik Tunai"],
          [3, 1003, "Kredit", 5000000, "Transfer Masuk"],
          [4, 1001, "Debit", 2000000, "Belanja"],
          [5, 1007, "Debit", 100000, "Pulsa"],
          [6, 1008, "Kredit", 15000000, "Bonus"],
          [7, 1004, "Debit", 400000, "Makan"],
          [8, 1005, "Kredit", 2000000, "Refund"]
        ]
      }
    ],
    soal: [
      {
        id: 1,
        judul: "Nasabah Prioritas",
        instruksi: "Tampilkan nama nasabah yang memiliki saldo di atas 40.000.000.",
        kisi: "SELECT nama FROM nasabah WHERE saldo > 40000000",
        jawabanKey: ["select", "nama", "from", "nasabah", "where", "saldo", ">", "40000000"]
      },
      {
        id: 2,
        judul: "Filter Kota",
        instruksi: "Tampilkan semua data nasabah yang berasal dari kota 'Medan'.",
        kisi: "Gunakan filter kota = 'Medan'.",
        jawabanKey: ["select", "*", "from", "nasabah", "where", "kota", "medan"]
      },
      {
        id: 3,
        judul: "Saldo Kritis",
        instruksi: "Tampilkan nama nasabah yang saldonya di bawah 1.000.000 untuk dikirimi peringatan.",
        kisi: "Gunakan WHERE saldo < 1000000.",
        jawabanKey: ["select", "nama", "from", "nasabah", "where", "saldo", "<", "1000000"]
      },
      {
        id: 4,
        judul: "Mutasi Kredit",
        instruksi: "Tampilkan seluruh transaksi yang berjenis 'Kredit'.",
        kisi: "Filter jenis = 'Kredit'.",
        jawabanKey: ["select", "*", "from", "mutasi", "where", "jenis", "kredit"]
      },
      {
        id: 5,
        judul: "Transaksi Besar",
        instruksi: "Tampilkan mutasi dengan nominal lebih dari atau sama dengan 5.000.000.",
        kisi: "Gunakan nominal >= 5000000.",
        jawabanKey: ["select", "*", "from", "mutasi", "where", "nominal", ">=", "5000000"]
      },
      {
        id: 6,
        judul: "Jumlah Nasabah",
        instruksi: "Hitung berapa banyak total nasabah yang terdaftar.",
        kisi: "Gunakan fungsi COUNT(*).",
        jawabanKey: ["select", "count(*)", "from", "nasabah"]
      },
      {
        id: 7,
        judul: "Detail Transaksi Nasabah",
        instruksi: "Tampilkan nama nasabah dan nominal transaksi yang mereka lakukan.",
        kisi: "JOIN nasabah dan mutasi.",
        jawabanKey: ["select", "nasabah.nama", "mutasi.nominal", "from", "nasabah", "join", "mutasi", "on", "nasabah.id_nasabah", "=", "mutasi.nasabah_id"]
      },
      {
        id: 8,
        judul: "Mutasi Nasabah Medan",
        instruksi: "Tampilkan nominal dan jenis mutasi untuk nasabah yang tinggal di 'Medan'.",
        kisi: "JOIN dan filter kota = 'Medan'.",
        jawabanKey: ["select", "mutasi.nominal", "mutasi.jenis", "from", "mutasi", "join", "nasabah", "on", "mutasi.nasabah_id", "=", "nasabah.id_nasabah", "where", "kota", "medan"]
      }
    ]
  },
  {
    id: "SC-006",
    tema: "Digital School Management",
    deskripsi: "Pantau nilai siswa, absensi, dan data kelas di SMA Negeri 1.",
    tabelTersedia: [
      {
        nama: "siswa",
        kolom: ["id_siswa", "nama", "kelas", "alamat"],
        dataContoh: [
          [1, "Rizky", "10-A", "Jl. Melati"],
          [2, "Fauzan", "10-B", "Jl. Mawar"],
          [3, "Zaskia", "10-A", "Jl. Kenanga"],
          [4, "Adit", "11-C", "Jl. Dahlia"],
          [5, "Nabila", "11-C", "Jl. Anggrek"],
          [6, "Kevin", "12-A", "Jl. Kamboja"],
          [7, "Siska", "12-B", "Jl. Teratai"],
          [8, "Bowo", "10-A", "Jl. Melati"]
        ]
      },
      {
        nama: "nilai",
        kolom: ["id_nilai", "siswa_id", "mapel", "skor"],
        dataContoh: [
          [1, 1, "Matematika", 85],
          [2, 1, "IPA", 90],
          [3, 2, "Matematika", 70],
          [4, 3, "Matematika", 95],
          [5, 4, "Bahasa", 88],
          [6, 6, "IPA", 75],
          [7, 8, "Matematika", 60],
          [8, 5, "Bahasa", 92]
        ]
      }
    ],
    soal: [
      {
        id: 1,
        judul: "Siswa Kelas 10-A",
        instruksi: "Tampilkan semua data siswa yang berada di kelas '10-A'.",
        kisi: "SELECT * FROM siswa WHERE kelas = '10-A'",
        jawabanKey: ["select", "*", "from", "siswa", "where", "kelas", "10-a"]
      },
      {
        id: 2,
        judul: "Skor Tinggi",
        instruksi: "Tampilkan daftar nilai yang memiliki skor di atas 90.",
        kisi: "Filter skor > 90.",
        jawabanKey: ["select", "*", "from", "nilai", "where", "skor", ">", "90"]
      },
      {
        id: 3,
        judul: "Pelajaran Matematika",
        instruksi: "Tampilkan nama siswa dan skor untuk mata pelajaran 'Matematika'.",
        kisi: "Gunakan JOIN siswa dan nilai WHERE mapel = 'Matematika'.",
        jawabanKey: ["select", "siswa.nama", "nilai.skor", "from", "siswa", "join", "nilai", "on", "siswa.id_siswa", "=", "nilai.siswa_id", "where", "mapel", "matematika"]
      },
      {
        id: 4,
        judul: "Siswa Perlu Remedial",
        instruksi: "Cari ID Siswa yang memiliki skor di bawah 75 pada mata pelajaran apapun.",
        kisi: "Gunakan WHERE skor < 75.",
        jawabanKey: ["select", "siswa_id", "from", "nilai", "where", "skor", "<", "75"]
      },
      {
        id: 5,
        judul: "Rata-rata Skor",
        instruksi: "Hitung rata-rata skor dari seluruh data nilai yang ada.",
        kisi: "Gunakan fungsi AVG(skor).",
        jawabanKey: ["select", "avg(skor)", "from", "nilai"]
      },
      {
        id: 6,
        judul: "Urutan Siswa",
        instruksi: "Tampilkan nama siswa urut secara alfabet (A-Z).",
        kisi: "Gunakan ORDER BY nama ASC.",
        jawabanKey: ["select", "nama", "from", "siswa", "order", "by", "nama", "asc"]
      },
      {
        id: 7,
        judul: "Siswa Kelas 11",
        instruksi: "Hitung jumlah siswa yang berada di kelas '11-C'.",
        kisi: "Gunakan COUNT(*) dan filter kelas.",
        jawabanKey: ["select", "count(*)", "from", "siswa", "where", "kelas", "11-c"]
      },
      {
        id: 8,
        judul: "Laporan Nilai Lengkap",
        instruksi: "Tampilkan nama, kelas, mapel, dan skor untuk semua data.",
        kisi: "JOIN tabel siswa dan nilai.",
        jawabanKey: ["select", "siswa.nama", "siswa.kelas", "nilai.mapel", "nilai.skor", "from", "siswa", "join", "nilai", "on", "siswa.id_siswa", "=", "nilai.siswa_id"]
      }
    ]
  },
  {
    id: "SC-007",
    tema: "Inventory Sparepart Bengkel",
    deskripsi: "Kelola stok onderdil dan daftar pemasok untuk kelancaran servis kendaraan.",
    tabelTersedia: [
      {
        nama: "onderdil",
        kolom: ["id_part", "nama_part", "stok", "harga", "id_sup"],
        dataContoh: [
          [1, "Ban Luar", 20, 250000, 101],
          [2, "Oli Mesin", 50, 65000, 102],
          [3, "Busi", 100, 15000, 101],
          [4, "Aki Motor", 5, 350000, 103],
          [5, "Kampas Rem", 30, 45000, 102],
          [6, "Rantai Set", 8, 150000, 101],
          [7, "Lampu LED", 15, 85000, 103],
          [8, "Filter Udara", 12, 35000, 102]
        ]
      },
      {
        nama: "pemasok",
        kolom: ["id_sup", "nama_pt", "kota", "telp"],
        dataContoh: [
          [101, "PT. Astra", "Jakarta", "021-123"],
          [102, "PT. Shell", "Surabaya", "031-456"],
          [103, "PT. GS Battery", "Semarang", "024-789"],
          [104, "CV. Onderdil Jaya", "Medan", "061-000"],
          [105, "PT. IRC Indonesia", "Tangerang", "021-999"],
          [106, "PT. Denso", "Bekasi", "021-888"],
          [107, "PT. Kayaba", "Cikarang", "021-777"],
          [108, "CV. Makmur Motor", "Bandung", "022-666"]
        ]
      }
    ],
    soal: [
      {
        id: 1,
        judul: "Cek Stok Menipis",
        instruksi: "Tampilkan nama_part yang stoknya di bawah 10 unit.",
        kisi: "SELECT nama_part FROM onderdil WHERE stok < 10",
        jawabanKey: ["select", "nama_part", "from", "onderdil", "where", "stok", "<", "10"]
      },
      {
        id: 2,
        judul: "Barang Termahal",
        instruksi: "Tampilkan data onderdil dengan harga di atas 200.000.",
        kisi: "Gunakan filter harga > 200000.",
        jawabanKey: ["select", "*", "from", "onderdil", "where", "harga", ">", "200000"]
      },
      {
        id: 3,
        judul: "Filter Pemasok Kota",
        instruksi: "Tampilkan nama_pt yang berada di kota 'Surabaya'.",
        kisi: "Filter kota = 'Surabaya'.",
        jawabanKey: ["select", "nama_pt", "from", "pemasok", "where", "kota", "surabaya"]
      },
      {
        id: 4,
        judul: "Cari Oli",
        instruksi: "Tampilkan data onderdil yang namanya mengandung kata 'Oli'.",
        kisi: "Gunakan LIKE '%oli%'.",
        jawabanKey: ["select", "*", "from", "onderdil", "where", "nama_part", "like", "%oli%"]
      },
      {
        id: 5,
        judul: "Urut Harga Murah",
        instruksi: "Tampilkan semua onderdil urut dari yang harganya paling murah.",
        kisi: "ORDER BY harga ASC.",
        jawabanKey: ["select", "*", "from", "onderdil", "order", "by", "harga", "asc"]
      },
      {
        id: 6,
        judul: "Total Unit Stok",
        instruksi: "Hitung total seluruh unit onderdil yang ada di gudang.",
        kisi: "Gunakan fungsi SUM(stok).",
        jawabanKey: ["select", "sum(stok)", "from", "onderdil"]
      },
      {
        id: 7,
        judul: "Part & Pemasok",
        instruksi: "Tampilkan nama_part beserta nama_pt pemasoknya.",
        kisi: "JOIN onderdil dan pemasok pada id_sup.",
        jawabanKey: ["select", "onderdil.nama_part", "pemasok.nama_pt", "from", "onderdil", "join", "pemasok", "on", "onderdil.id_sup", "=", "pemasok.id_sup"]
      },
      {
        id: 8,
        judul: "Part dari Astra",
        instruksi: "Tampilkan nama_part yang dipasok oleh 'PT. Astra'.",
        kisi: "JOIN dan filter nama_pt = 'PT. Astra'.",
        jawabanKey: ["select", "onderdil.nama_part", "from", "onderdil", "join", "pemasok", "on", "onderdil.id_sup", "=", "pemasok.id_sup", "where", "nama_pt", "pt. astra"]
      }
    ]
  },
  {
    id: "SC-008",
    tema: "Logistics Tracking System",
    deskripsi: "Pantau status pengiriman paket dan performa kurir lapangan.",
    tabelTersedia: [
      {
        nama: "paket",
        kolom: ["id_resi", "tujuan", "berat", "status", "kurir_id"],
        dataContoh: [
          ["R01", "Jakarta", 2.5, "Transit", 501],
          ["R02", "Medan", 1.0, "Diterima", 502],
          ["R03", "Bandung", 5.0, "Diproses", 501],
          ["R04", "Jakarta", 0.5, "Diterima", 503],
          ["R05", "Surabaya", 10.0, "Transit", 502],
          ["R06", "Medan", 2.0, "Diproses", 503],
          ["R07", "Jakarta", 1.5, "Diterima", 501],
          ["R08", "Bali", 3.2, "Transit", 502]
        ]
      },
      {
        nama: "kurir",
        kolom: ["id_kurir", "nama_kurir", "kendaraan", "area"],
        dataContoh: [
          [501, "Budi", "Motor", "Jakarta Selatan"],
          [502, "Sandi", "Mobil", "Jakarta Utara"],
          [503, "Rian", "Motor", "Jakarta Pusat"],
          [504, "Eka", "Mobil", "Bandung"],
          [505, "Tono", "Motor", "Surabaya"],
          [506, "Didi", "Motor", "Medan"],
          [507, "Vina", "Mobil", "Semarang"],
          [508, "Gani", "Mobil", "Bali"]
        ]
      }
    ],
    soal: [
      {
        id: 1,
        judul: "Paket Belum Sampai",
        instruksi: "Tampilkan semua paket yang statusnya 'Transit'.",
        kisi: "SELECT * FROM paket WHERE status = 'Transit'",
        jawabanKey: ["select", "*", "from", "paket", "where", "status", "transit"]
      },
      {
        id: 2,
        judul: "Paket Berat",
        instruksi: "Tampilkan ID Resi untuk paket yang beratnya di atas 5 kg.",
        kisi: "Filter berat > 5.",
        jawabanKey: ["select", "id_resi", "from", "paket", "where", "berat", ">", "5"]
      },
      {
        id: 3,
        judul: "Tujuan Jakarta",
        instruksi: "Tampilkan ID Resi dan status untuk paket yang tujuannya ke 'Jakarta'.",
        kisi: "Filter tujuan = 'Jakarta'.",
        jawabanKey: ["select", "id_resi", "status", "from", "paket", "where", "tujuan", "jakarta"]
      },
      {
        id: 4,
        judul: "Kurir Motor",
        instruksi: "Tampilkan nama_kurir yang menggunakan kendaraan 'Motor'.",
        kisi: "Filter kendaraan = 'Motor'.",
        jawabanKey: ["select", "nama_kurir", "from", "kurir", "where", "kendaraan", "motor"]
      },
      {
        id: 5,
        judul: "Urut Berat Paket",
        instruksi: "Tampilkan data paket urut dari yang paling ringan.",
        kisi: "ORDER BY berat ASC.",
        jawabanKey: ["select", "*", "from", "paket", "order", "by", "berat", "asc"]
      },
      {
        id: 6,
        judul: "Hitung Paket Terkirim",
        instruksi: "Hitung berapa banyak paket yang statusnya sudah 'Diterima'.",
        kisi: "Gunakan COUNT(*) dan filter status.",
        jawabanKey: ["select", "count(*)", "from", "paket", "where", "status", "diterima"]
      },
      {
        id: 7,
        judul: "Kurir Pembawa Paket",
        instruksi: "Tampilkan ID Resi dan nama_kurir yang membawanya.",
        kisi: "JOIN paket dan kurir.",
        jawabanKey: ["select", "paket.id_resi", "kurir.nama_kurir", "from", "paket", "join", "kurir", "on", "paket.kurir_id", "=", "kurir.id_kurir"]
      },
      {
        id: 8,
        judul: "Paket Kurir Budi",
        instruksi: "Tampilkan semua ID Resi yang dibawa oleh kurir bernama 'Budi'.",
        kisi: "JOIN dan filter nama_kurir = 'Budi'.",
        jawabanKey: ["select", "paket.id_resi", "from", "paket", "join", "kurir", "on", "paket.kurir_id", "=", "kurir.id_kurir", "where", "nama_kurir", "budi"]
      }
    ]
  },
  {
    id: "SC-009",
    tema: "Music Streaming Analytics",
    deskripsi: "Analisis lagu terpopuler dan data artis di platform SpotifAI.",
    tabelTersedia: [
      {
        nama: "lagu",
        kolom: ["id_lagu", "judul", "genre", "artis_id"],
        dataContoh: [
          [1, "Hati-hati di Jalan", "Pop", 201],
          [2, "Gajah", "Pop", 201],
          [3, "Monokrom", "Pop", 201],
          [4, "Evaluasi", "Indie", 202],
          [5, "Secukupnya", "Indie", 202],
          [6, "Seroja", "Dangdut", 203],
          [7, "Lathi", "EDM", 204],
          [8, "Rumah Singgah", "Pop", 205]
        ]
      },
      {
        nama: "stats",
        kolom: ["id_stat", "lagu_id", "jumlah_putar", "likes"],
        dataContoh: [
          [10, 1, 5000000, 120000],
          [11, 2, 2500000, 45000],
          [12, 4, 1200000, 30000],
          [13, 7, 10000000, 500000],
          [14, 5, 800000, 15000],
          [15, 8, 3000000, 80000],
          [16, 6, 400000, 5000],
          [17, 3, 2000000, 60000]
        ]
      }
    ],
    soal: [
      {
        id: 1,
        judul: "Genre Pop",
        instruksi: "Tampilkan judul lagu yang memiliki genre 'Pop'.",
        kisi: "SELECT judul FROM lagu WHERE genre = 'Pop'",
        jawabanKey: ["select", "judul", "from", "lagu", "where", "genre", "pop"]
      },
      {
        id: 2,
        judul: "Lagu Viral",
        instruksi: "Tampilkan ID Lagu yang sudah diputar lebih dari 4.000.000 kali.",
        kisi: "Filter jumlah_putar > 4000000.",
        jawabanKey: ["select", "lagu_id", "from", "stats", "where", "jumlah_putar", ">", "4000000"]
      },
      {
        id: 3,
        judul: "Lagu Banyak Likes",
        instruksi: "Tampilkan data statistik untuk lagu yang memiliki likes di atas 100.000.",
        kisi: "Filter likes > 100000.",
        jawabanKey: ["select", "*", "from", "stats", "where", "likes", ">", "100000"]
      },
      {
        id: 4,
        judul: "Genre Indie",
        instruksi: "Tampilkan semua kolom lagu untuk genre 'Indie'.",
        kisi: "Filter genre = 'Indie'.",
        jawabanKey: ["select", "*", "from", "lagu", "where", "genre", "indie"]
      },
      {
        id: 5,
        judul: "Urutan Terpopuler",
        instruksi: "Tampilkan data statistik urut dari jumlah putar terbanyak.",
        kisi: "ORDER BY jumlah_putar DESC.",
        jawabanKey: ["select", "*", "from", "stats", "order", "by", "jumlah_putar", "desc"]
      },
      {
        id: 6,
        judul: "Total Putar Seluruh Platform",
        instruksi: "Hitung total jumlah putar dari seluruh lagu yang ada.",
        kisi: "Gunakan fungsi SUM(jumlah_putar).",
        jawabanKey: ["select", "sum(jumlah_putar)", "from", "stats"]
      },
      {
        id: 7,
        judul: "Judul & Jumlah Putar",
        instruksi: "Tampilkan judul lagu beserta jumlah putarnya.",
        kisi: "JOIN lagu dan stats.",
        jawabanKey: ["select", "lagu.judul", "stats.jumlah_putar", "from", "lagu", "join", "stats", "on", "lagu.id_lagu", "=", "stats.lagu_id"]
      },
      {
        id: 8,
        judul: "Analisis Likes Pop",
        instruksi: "Tampilkan judul lagu genre 'Pop' yang memiliki likes di atas 50.000.",
        kisi: "JOIN dan filter genre = 'Pop' AND likes > 50000.",
        jawabanKey: ["select", "lagu.judul", "from", "lagu", "join", "stats", "on", "lagu.id_lagu", "=", "stats.lagu_id", "where", "genre", "pop", "and", "likes", ">", "50000"]
      }
    ]
  },
  {
    id: "SC-010",
    tema: "Event & Ticket Management",
    deskripsi: "Kelola penjualan tiket konser dan pendaftaran pengunjung event.",
    tabelTersedia: [
      {
        nama: "tiket",
        kolom: ["id_tiket", "kategori", "harga", "stok"],
        dataContoh: [
          [1, "VIP", 2000000, 50],
          [2, "Festival A", 1000000, 200],
          [3, "Festival B", 750000, 300],
          [4, "Tribune East", 500000, 150],
          [5, "Tribune West", 500000, 150],
          [6, "Early Bird", 400000, 0],
          [7, "VVIP", 5000000, 10],
          [8, "Presale 1", 600000, 100]
        ]
      },
      {
        nama: "pembeli",
        kolom: ["id_pembeli", "nama_user", "tiket_id", "tgl_beli"],
        dataContoh: [
          [101, "Hizkia", 1, "2026-01-01"],
          [102, "Lumban", 2, "2026-01-02"],
          [103, "Gaol", 1, "2026-01-02"],
          [104, "Budi", 3, "2026-01-03"],
          [105, "Susi", 4, "2026-01-04"],
          [106, "Ani", 7, "2026-01-05"],
          [107, "Joni", 2, "2026-01-05"],
          [108, "Dedi", 3, "2026-01-06"]
        ]
      }
    ],
    soal: [
      {
        id: 1,
        judul: "Tiket Termahal",
        instruksi: "Tampilkan kategori tiket yang harganya di atas 1.000.000.",
        kisi: "SELECT kategori FROM tiket WHERE harga > 1000000",
        jawabanKey: ["select", "kategori", "from", "tiket", "where", "harga", ">", "1000000"]
      },
      {
        id: 2,
        judul: "Tiket Habis",
        instruksi: "Cari kategori tiket yang stoknya sudah 0.",
        kisi: "Filter stok = 0.",
        jawabanKey: ["select", "kategori", "from", "tiket", "where", "stok", "=", "0"]
      },
      {
        id: 3,
        judul: "Pembeli VIP",
        instruksi: "Tampilkan nama_user yang membeli tiket dengan ID 1 (VIP).",
        kisi: "Filter tiket_id = 1.",
        jawabanKey: ["select", "nama_user", "from", "pembeli", "where", "tiket_id", "=", "1"]
      },
      {
        id: 4,
        judul: "Tiket Tribune",
        instruksi: "Tampilkan semua tiket yang kategorinya mengandung kata 'Tribune'.",
        kisi: "Gunakan LIKE '%tribune%'.",
        jawabanKey: ["select", "*", "from", "tiket", "where", "kategori", "like", "%tribune%"]
      },
      {
        id: 5,
        judul: "Urutan Harga Tiket",
        instruksi: "Tampilkan data tiket urut dari yang termahal ke termurah.",
        kisi: "ORDER BY harga DESC.",
        jawabanKey: ["select", "*", "from", "tiket", "order", "by", "harga", "desc"]
      },
      {
        id: 6,
        judul: "Rata-rata Harga Tiket",
        instruksi: "Hitung rata-rata harga tiket dari semua kategori yang tersedia.",
        kisi: "Gunakan fungsi AVG(harga).",
        jawabanKey: ["select", "avg(harga)", "from", "tiket"]
      },
      {
        id: 7,
        judul: "Laporan Pembelian",
        instruksi: "Tampilkan nama_user beserta kategori tiket yang mereka beli.",
        kisi: "JOIN pembeli dan tiket.",
        jawabanKey: ["select", "pembeli.nama_user", "tiket.kategori", "from", "pembeli", "join", "tiket", "on", "pembeli.tiket_id", "=", "tiket.id_tiket"]
      },
      {
        id: 8,
        judul: "Pendapatan Kategori VIP",
        instruksi: "Hitung total pendapatan jika seluruh stok tiket 'VIP' terjual habis.",
        kisi: "Gunakan fungsi SUM(harga * stok) dan filter kategori = 'VIP'.",
        jawabanKey: ["select", "sum(harga * stok)", "from", "tiket", "where", "kategori", "vip"]
      }
    ]
  }
  // Data berlanjut sampai SC-010 dengan pola yang sama...
];

export default daftarStudiKasus;