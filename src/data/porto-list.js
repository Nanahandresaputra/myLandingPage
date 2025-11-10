import {
  bannerGoe,
  bannerRadioStream,
  compProAssets,
  fquizAssets,
  gameBaseAssets,
  goeAppAssets,
  netmoviesAssets,
  nnNextAiAssets,
  radioStreamAssets,
} from "../assets";

export const portoListData = [
  {
    isMobile: true,
    banner: bannerGoe,
    images: goeAppAssets,
    title: "GoEventID App",
    stack: ["Dart", "Flutter"],
    description:
      "GoEventID adalah proyek aplikasi mobile yang dikembangkan untuk menyediakan platform pemesanan tiket event yang komprehensif, mencakup segala sesuatu mulai dari konser skala besar hingga pertunjukan teater. Aplikasi ini mengintegrasikan alur otentikasi pengguna yang aman (Login/Registrasi) dan menampilkan daftar event yang dinamis, dapat disaring berdasarkan kategori, dan dilengkapi dengan detail event yang lengkap, termasuk deskripsi, lokasi, dan visualisasi tata letak tempat duduk. Secara teknis, proyek ini menonjol melalui integrasi payment gateway pihak ketiga (seperti Midtrans) yang robust, memungkinkan transaksi mulus dan real-time dengan dukungan berbagai metode pembayaran (Virtual Account, E-Wallet, Kartu Kredit). Setelah pembelian, aplikasi menyimpan dan menampilkan semua transaksi dalam modul Riwayat Pemesanan yang terstruktur. Aplikasi ini juga menyertakan fungsionalitas Layanan Pelanggan untuk dukungan 24/7 dan Manajemen Akun yang sederhana, memastikan pengalaman pengguna yang efisien, andal, dan end-to-end.",
  },
  {
    isMobile: true,
    banner: bannerRadioStream,
    images: radioStreamAssets,
    title: "On Radio Stream",
    stack: ["Dart", "Flutter"],
    description:
      "OnRadio Stream adalah aplikasi streaming radio yang mengubah ponsel Anda menjadi penerima radio global. Aplikasi ini memungkinkan Anda untuk mendengarkan ribuan stasiun radio web dari seluruh dunia, mencakup berbagai genre mulai dari Pop, Rock, Jazz, hingga berita dan acara olahraga, semua disajikan dengan kualitas audio yang jernih. Dengan antarmuka yang bersih dan intuitif, Anda dapat dengan mudah mencari stasiun berdasarkan nama, genre, atau lokasi, serta menyimpan saluran favorit Anda ke dalam daftar khusus agar mudah diakses kembali. Baik Anda mencari musik pengantar tidur, update berita terbaru, atau talk show dari negara lain, OnRadio Stream adalah solusi gratis dan praktis untuk pengalaman mendengarkan radio tanpa batas, kapan pun dan di mana pun Anda berada.",
  },
  {
    banner: fquizAssets[0],
    images: fquizAssets,
    title: "Fun Quiz",
    stack: ["Typescript", "Next.js", "Tailwindcss"],
    description:
      "FUN QUIZ adalah proyek aplikasi web dinamis yang dikembangkan untuk menyediakan platform kuis interaktif yang menghibur dan mendidik. Aplikasi ini dirancang dengan antarmuka yang bersih dan berpusat pada pengguna, memungkinkan pengguna untuk menyesuaikan pengalaman kuis mereka dengan memilih kategori pertanyaan dan tingkat kesulitan sebelum memulai sesi. Aplikasi mengimplementasikan logic front-end yang kuat untuk mengambil dan menampilkan pertanyaan secara berurutan serta mengelola state jawaban pengguna secara real-time. Setelah kuis selesai, pengguna akan disajikan halaman hasil yang komprehensif yang menampilkan skor total, rincian jumlah jawaban yang benar, dan jawaban yang salah. Keseluruhan proyek ini menjadi demonstrasi yang efektif tentang kemampuan dalam membangun single-page application (SPA) dengan alur pengguna yang terdefinisi jelas dan mekanisme perhitungan skor yang efisien untuk memberikan feedback instan.",
  },
  {
    banner: netmoviesAssets[0],
    images: netmoviesAssets,
    title: "NETMOVIES",
    stack: ["Javascript", "React.js"],
    description:
      "NETMOVIES adalah proyek aplikasi web yang berfungsi sebagai direktori dan katalog film serta acara TV, menampilkan desain antarmuka yang modern dengan tema gelap menyerupai layanan streaming populer. Aplikasi ini menonjolkan kemampuan pengembangan front-end untuk membangun halaman utama yang menarik dengan banner besar dan bilah pencarian intuitif, serta halaman List Movies yang menampilkan daftar poster film dalam tata letak grid yang responsif. Secara teknis, proyek ini mengimplementasikan pengambilan data dinamis melalui integrasi dengan API film (seperti TMDB), yang memungkinkan aplikasi menyajikan detail lengkap untuk setiap judul, termasuk sinopsis (Overview) seperti yang terlihat pada halaman detail film. Aplikasi ini secara efektif mendemonstrasikan keahlian dalam menangani dan menyajikan data eksternal, menciptakan pengalaman navigasi yang mulus, dan membangun desain visual yang imersif yang berfokus pada konten media.",
  },
  {
    banner: compProAssets[0],
    images: compProAssets,
    title: "Company Profile",
    stack: ["Javascript", "React.js"],
    description:
      'Website ini adalah proyek landing page profesional yang dirancang untuk sebuah perusahaan (Lorem Ipsum Company) dengan fokus utama menyediakan solusi untuk meningkatkan income dan memperluas jaringan bisnis. Antarmuka dibangun dengan desain yang bersih dan responsive, didominasi oleh skema warna biru korporat, yang mengarahkan perhatian pada headline utama dan ilustrasi isometrik yang menggambarkan teknologi dan kolaborasi tim. Secara teknis, website ini berfungsi sebagai representasi digital perusahaan, menampilkan navigasi yang jelas (Beranda, Tentang Kami, Produk) dan menyajikan informasi detail tentang perusahaan dan produknya di bagian bawah halaman. Implementasi ini menunjukkan keahlian dalam membangun struktur website statis atau dinamis yang efektif untuk tujuan pemasaran dan branding, dengan call-to-action yang jelas ("Join Sekarang" dan "Play video") untuk mendorong interaksi pengguna.',
  },
  {
    banner: nnNextAiAssets[0],
    images: nnNextAiAssets,
    title: "Nn Next-Ai",
    stack: ["Typescript", "Next.js", "Tailwindcss"],
    description:
      "Nn-Next AI adalah proyek aplikasi web yang berfungsi sebagai antarmuka percakapan (chatbot) bertenaga kecerdasan buatan, dirancang untuk memberikan informasi yang mendalam dan terstruktur mengenai berbagai topik, seperti yang dicontohkan pada topik UNESCO World Heritage Sites. Aplikasi ini menampilkan desain dark mode yang modern dan minimalis, menciptakan pengalaman yang imersif. Secara teknis, proyek ini menunjukkan keahlian dalam integrasi backend AI (kemungkinan melalui API model bahasa besar) untuk memproses input pengguna dan menghasilkan respons yang relevan. Aplikasi ini mengimplementasikan antarmuka chat yang responsif dengan bilah input pertanyaan yang jelas dan area tampilan respons yang dapat menyajikan jawaban dengan format daftar dan teks yang terorganisir, sekaligus menunjukkan kemampuan untuk memicu alur percakapan yang terstruktur dengan memberikan opsi topik awal kepada pengguna.",
  },
  {
    banner: gameBaseAssets[0],
    images: gameBaseAssets,
    title: "GameBase",
    stack: ["Typescript", "Next.js", "Tailwindcss"],
    description: `GameBase adalah proyek aplikasi web yang berfungsi sebagai portal informasi dan ulasan komprehensif di dunia gaming, menampilkan desain dark mode yang premium dan profesional. Aplikasi ini dibangun untuk menyajikan tiga fungsi utama: Katalog Game, Berita dan Ulasan, dan Informasi Perusahaan. Secara teknis, website ini menunjukkan kemampuan dalam menangani dan memvisualisasikan data game yang ekstensif, menampilkan daftar game yang dapat difilter berdasarkan berbagai kategori (Action, RPG, Strategy, dll.) serta halaman detail game yang kaya media, mencakup sinopsis, rating, genre, platform rilis, dan trailer video. Selain itu, proyek ini memiliki modul berita dan ulasan yang terpisah, memungkinkan pengguna untuk tetap up-to-date dengan artikel dan review game terbaru yang terstruktur, lengkap dengan halaman artikel individual yang menampilkan teks, gambar, dan konten video yang relevan. Aplikasi ini secara efektif mendemonstrasikan keahlian dalam integrasi API data eksternal, implementasi fitur pencarian dan pemfilteran, dan pembuatan content management system (CMS) front-end yang elegan dan informatif.`,
  },
];
