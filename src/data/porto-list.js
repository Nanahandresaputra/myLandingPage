import { bannerGoe, bannerRadioStream, compProAssets, fquizAssets, gameBaseAssets, goeApiAssets, goeAppAssets, goeCmsAssets, netmoviesAssets, nnNextAiAssets, radioStreamAssets } from "../assets";

export const portoListData = [
  {
    category: "Mobile",
    isMobile: true,
    banner: bannerGoe,
    images: goeAppAssets,
    title: "GoEventID App",
    stack: ["Dart", "Flutter"],
    link: "https://drive.google.com/file/d/1xalu5zUlQC4hngINYARhvvvI-rLg0oxV/view?usp=sharing",
    github: "https://github.com/Nanahandresaputra/goEventId-app.git",
    descriptionId:
      "GoEventID adalah proyek aplikasi mobile yang dikembangkan untuk menyediakan platform pemesanan tiket event yang komprehensif, mencakup segala sesuatu mulai dari konser skala besar hingga pertunjukan teater. Aplikasi ini mengintegrasikan alur otentikasi pengguna yang aman (Login/Registrasi) dan menampilkan daftar event yang dinamis, dapat disaring berdasarkan kategori, dan dilengkapi dengan detail event yang lengkap, termasuk deskripsi, lokasi, dan visualisasi tata letak tempat duduk. Secara teknis, proyek ini menonjol melalui integrasi payment gateway pihak ketiga (seperti Midtrans) yang robust, memungkinkan transaksi mulus dan real-time dengan dukungan berbagai metode pembayaran (Virtual Account, E-Wallet, Kartu Kredit). Setelah pembelian, aplikasi menyimpan dan menampilkan semua transaksi dalam modul Riwayat Pemesanan yang terstruktur. Aplikasi ini juga menyertakan fungsionalitas Layanan Pelanggan untuk dukungan 24/7 dan Manajemen Akun yang sederhana, memastikan pengalaman pengguna yang efisien, andal, dan end-to-end.",
    descriptionEn:
      "GoEventID is a mobile application project developed to provide a comprehensive event ticket booking platform, covering everything from large-scale concerts to theater performances. The application integrates a secure user authentication flow (Login/Registration) and displays a dynamic list of events that can be filtered by category and equipped with complete event details, including descriptions, locations, and seat layout visualizations. Technically, this project stands out through its robust integration of third-party payment gateways (such as Midtrans), enabling seamless, real-time transactions with support for various payment methods (Virtual Account, E-Wallet, Credit Card). After purchase, the application stores and displays all transactions in a structured Order History module. The application also includes Customer Service functionality for 24/7 support and simple Account Management, ensuring an efficient, reliable, and end-to-end user experience.",
  },
  {
    category: "Mobile",
    isMobile: true,
    banner: bannerRadioStream,
    images: radioStreamAssets,
    title: "On Radio Stream",
    stack: ["Dart", "Flutter"],
    link: "https://play.google.com/store/apps/details?id=com.nanadev.onradiostream",
    github: "https://github.com/Nanahandresaputra/radioStreamApp.git",
    descriptionId:
      "OnRadio Stream adalah aplikasi streaming radio yang mengubah ponsel Anda menjadi penerima radio global. Aplikasi ini memungkinkan Anda untuk mendengarkan ribuan stasiun radio web dari seluruh dunia, mencakup berbagai genre mulai dari Pop, Rock, Jazz, hingga berita dan acara olahraga, semua disajikan dengan kualitas audio yang jernih. Dengan antarmuka yang bersih dan intuitif, Anda dapat dengan mudah mencari stasiun berdasarkan nama, genre, atau lokasi, serta menyimpan saluran favorit Anda ke dalam daftar khusus agar mudah diakses kembali. Baik Anda mencari musik pengantar tidur, update berita terbaru, atau talk show dari negara lain, OnRadio Stream adalah solusi gratis dan praktis untuk pengalaman mendengarkan radio tanpa batas, kapan pun dan di mana pun Anda berada.",
    descriptionEn: `OnRadio Stream is a radio streaming app that turns your phone into a global radio receiver. This app allows you to listen to thousands of web radio stations from around the world, covering a wide range of genres from Pop, Rock, Jazz, to news and sports programs, all delivered with crystal-clear audio quality. With a clean and intuitive interface, you can easily search for stations by name, genre, or location, and save your favorite channels to a special list for easy access later. Whether you're looking for lullaby music, the latest news updates, or talk shows from other countries, OnRadio Stream is a free and practical solution for unlimited radio listening, anytime and anywhere you are.`,
  },
  {
    category: "Frontend",
    banner: fquizAssets[0],
    images: fquizAssets,
    title: "Fun Quiz",
    stack: ["Typescript", "Next.js", "Tailwindcss"],
    link: "https://quizapp-nndev.vercel.app/",
    github: "https://github.com/Nanahandresaputra/quizApp-nextjs-ts.git",
    descriptionId:
      "FUN QUIZ adalah proyek aplikasi web dinamis yang dikembangkan untuk menyediakan platform kuis interaktif yang menghibur dan mendidik. Aplikasi ini dirancang dengan antarmuka yang bersih dan berpusat pada pengguna, memungkinkan pengguna untuk menyesuaikan pengalaman kuis mereka dengan memilih kategori pertanyaan dan tingkat kesulitan sebelum memulai sesi. Aplikasi mengimplementasikan logic front-end yang kuat untuk mengambil dan menampilkan pertanyaan secara berurutan serta mengelola state jawaban pengguna secara real-time. Setelah kuis selesai, pengguna akan disajikan halaman hasil yang komprehensif yang menampilkan skor total, rincian jumlah jawaban yang benar, dan jawaban yang salah. Keseluruhan proyek ini menjadi demonstrasi yang efektif tentang kemampuan dalam membangun single-page application (SPA) dengan alur pengguna yang terdefinisi jelas dan mekanisme perhitungan skor yang efisien untuk memberikan feedback instan.",
    descriptionEn:
      "FUN QUIZ is a dynamic web application project developed to provide an entertaining and educational interactive quiz platform. The application is designed with a clean, user-centered interface, allowing users to customize their quiz experience by selecting question categories and difficulty levels before starting a session. The application implements powerful front-end logic to retrieve and display questions sequentially and manage user answer states in real time. After the quiz is completed, users are presented with a comprehensive results page displaying their total score, the number of correct answers, and incorrect answers. The entire project serves as an effective demonstration of the ability to build a single-page application (SPA) with a clearly defined user flow and efficient scoring mechanism to provide instant feedback.",
  },
  {
    category: "Frontend",
    banner: netmoviesAssets[0],
    images: netmoviesAssets,
    title: "NETMOVIES",
    link: "https://net-movies.netlify.app/",
    github: "https://github.com/Nanahandresaputra/net-movies.git",
    stack: ["Javascript", "React.js"],
    descriptionId:
      "NETMOVIES adalah proyek aplikasi web yang berfungsi sebagai direktori dan katalog film serta acara TV, menampilkan desain antarmuka yang modern dengan tema gelap menyerupai layanan streaming populer. Aplikasi ini menonjolkan kemampuan pengembangan front-end untuk membangun halaman utama yang menarik dengan banner besar dan bilah pencarian intuitif, serta halaman List Movies yang menampilkan daftar poster film dalam tata letak grid yang responsif. Secara teknis, proyek ini mengimplementasikan pengambilan data dinamis melalui integrasi dengan API film (seperti TMDB), yang memungkinkan aplikasi menyajikan detail lengkap untuk setiap judul, termasuk sinopsis (Overview) seperti yang terlihat pada halaman detail film. Aplikasi ini secara efektif mendemonstrasikan keahlian dalam menangani dan menyajikan data eksternal, menciptakan pengalaman navigasi yang mulus, dan membangun desain visual yang imersif yang berfokus pada konten media.",
    descriptionEn:
      "NETMOVIES is a web application project that functions as a directory and catalog of movies and TV shows, featuring a modern interface design with a dark theme resembling popular streaming services. The application highlights front-end development capabilities to build an attractive home page with a large banner and intuitive search bar, as well as a List Movies page that displays a list of movie posters in a responsive grid layout. Technically, this project implements dynamic data retrieval through integration with movie APIs (such as TMDB), enabling the application to present complete details for each title, including synopses (Overview) as seen on the movie detail page. This application effectively demonstrates expertise in handling and presenting external data, creating a seamless navigation experience, and building an immersive visual design focused on media content.",
  },
  {
    category: "Frontend",
    banner: compProAssets[0],
    images: compProAssets,
    title: "Company Profile",
    link: "https://profile-company-nana.netlify.app/",
    github: "https://github.com/Nanahandresaputra/profile-company.git",
    stack: ["Javascript", "React.js"],
    descriptionId:
      'Website ini adalah proyek landing page profesional yang dirancang untuk sebuah perusahaan (Lorem Ipsum Company) dengan fokus utama menyediakan solusi untuk meningkatkan income dan memperluas jaringan bisnis. Antarmuka dibangun dengan desain yang bersih dan responsive, didominasi oleh skema warna biru korporat, yang mengarahkan perhatian pada headline utama dan ilustrasi isometrik yang menggambarkan teknologi dan kolaborasi tim. Secara teknis, website ini berfungsi sebagai representasi digital perusahaan, menampilkan navigasi yang jelas (Beranda, Tentang Kami, Produk) dan menyajikan informasi detail tentang perusahaan dan produknya di bagian bawah halaman. Implementasi ini menunjukkan keahlian dalam membangun struktur website statis atau dinamis yang efektif untuk tujuan pemasaran dan branding, dengan call-to-action yang jelas ("Join Sekarang" dan "Play video") untuk mendorong interaksi pengguna.',
    descriptionEn: `This website is a professional landing page project designed for a company (Lorem Ipsum Company) with a primary focus on providing solutions to increase income and expand business networks. The interface is built with a clean and responsive design, dominated by a corporate blue color scheme, which directs attention to the main headline and isometric illustrations depicting technology and team collaboration. Technically, this website serves as a digital representation of the company, featuring clear navigation (Home, About Us, Products) and presenting detailed information about the company and its products at the bottom of the page. This implementation demonstrates expertise in building effective static or dynamic website structures for marketing and branding purposes, with clear calls-to-action (“Join Now” and “Play video”) to encourage user interaction.`,
  },
  {
    category: "Frontend",
    banner: goeCmsAssets[0],
    images: goeCmsAssets,
    title: "GoEventID CMS",
    stack: ["Javascript", "React.js", "Ant Design", "Tailwindcss"],
    link: "https://go-event-id-cms.vercel.app/",
    github: "https://github.com/Nanahandresaputra/goEventId-cms.git",
    descriptionId:
      "GoEventID CMS adalah Sistem Manajemen Konten (CMS) terpadu yang berfungsi sebagai pusat kendali bagi Administrator untuk mengelola seluruh siklus hidup acara. Aplikasi ini memungkinkan pengguna untuk mengatur dan mempublikasikan detail acara secara lengkap, mengelola database para penyelenggara (event organizer), dan mengurus manajemen pengguna sistem dengan penetapan peran yang jelas. Fitur intinya terletak pada modul Pelaporan Penjualan yang menyediakan ringkasan total pendapatan dan rincian penjualan tiket per kategori secara real-time, sehingga Administrator dapat memantau performa penjualan, ketersediaan kuota, dan status keuangan setiap acara secara efisien dan terpusat.",
    descriptionEn: `GoEventID CMS is an integrated Content Management System (CMS) that serves as a control center for Administrators to manage the entire event lifecycle. This application allows users to organize and publish complete event details, manage the event organizer database, and manage system users with clearly defined roles. Its core feature lies in the Sales Reporting module, which provides real-time summaries of total revenue and ticket sales details by category, allowing Administrators to efficiently and centrally monitor sales performance, quota availability, and the financial status of each event.`,
  },
  {
    category: "Frontend",
    banner: nnNextAiAssets[0],
    images: nnNextAiAssets,
    title: "Nn Next-Ai",
    stack: ["Typescript", "Next.js", "Tailwindcss"],
    link: "https://www.bertanya.online/",
    github: "https://github.com/Nanahandresaputra/next-ai-gemini.git",
    descriptionId:
      "Nn-Next AI adalah proyek aplikasi web yang berfungsi sebagai antarmuka percakapan (chatbot) bertenaga kecerdasan buatan, dirancang untuk memberikan informasi yang mendalam dan terstruktur mengenai berbagai topik, seperti yang dicontohkan pada topik UNESCO World Heritage Sites. Aplikasi ini menampilkan desain dark mode yang modern dan minimalis, menciptakan pengalaman yang imersif. Secara teknis, proyek ini menunjukkan keahlian dalam integrasi backend AI (kemungkinan melalui API model bahasa besar) untuk memproses input pengguna dan menghasilkan respons yang relevan. Aplikasi ini mengimplementasikan antarmuka chat yang responsif dengan bilah input pertanyaan yang jelas dan area tampilan respons yang dapat menyajikan jawaban dengan format daftar dan teks yang terorganisir, sekaligus menunjukkan kemampuan untuk memicu alur percakapan yang terstruktur dengan memberikan opsi topik awal kepada pengguna.",
    descriptionEn: `Nn-Next AI is a web application project that functions as an artificial intelligence-powered conversational interface (chatbot), designed to provide in-depth and structured information on various topics, such as UNESCO World Heritage Sites. The application features a modern and minimalist dark mode design, creating an immersive experience. Technically, this project demonstrates expertise in AI backend integration (possibly through a large language model API) to process user input and generate relevant responses. The application implements a responsive chat interface with a clear question input bar and a response display area that can present answers in a list format and organized text, while also demonstrating the ability to trigger structured conversation flows by providing users with initial topic options.`,
  },
  {
    category: "Frontend",
    banner: gameBaseAssets[0],
    images: gameBaseAssets,
    title: "GameBase",
    link: "https://next-gamebase.vercel.app/homepage",
    github: "https://github.com/Nanahandresaputra/Next-Gamebase.git",
    stack: ["Typescript", "Next.js", "Tailwindcss"],
    descriptionId: `GameBase adalah proyek aplikasi web yang berfungsi sebagai portal informasi dan ulasan komprehensif di dunia gaming, menampilkan desain dark mode yang premium dan profesional. Aplikasi ini dibangun untuk menyajikan tiga fungsi utama: Katalog Game, Berita dan Ulasan, dan Informasi Perusahaan. Secara teknis, website ini menunjukkan kemampuan dalam menangani dan memvisualisasikan data game yang ekstensif, menampilkan daftar game yang dapat difilter berdasarkan berbagai kategori (Action, RPG, Strategy, dll.) serta halaman detail game yang kaya media, mencakup sinopsis, rating, genre, platform rilis, dan trailer video. Selain itu, proyek ini memiliki modul berita dan ulasan yang terpisah, memungkinkan pengguna untuk tetap up-to-date dengan artikel dan review game terbaru yang terstruktur, lengkap dengan halaman artikel individual yang menampilkan teks, gambar, dan konten video yang relevan. Aplikasi ini secara efektif mendemonstrasikan keahlian dalam integrasi API data eksternal, implementasi fitur pencarian dan pemfilteran, dan pembuatan content management system (CMS) front-end yang elegan dan informatif.`,
    descriptionEn: `GameBase is a web application project that serves as a comprehensive information and review portal in the gaming world, featuring a premium and professional dark mode design. This application was built to provide three main functions: Game Catalog, News and Reviews, and Company Information. Technically, the website demonstrates its ability to handle and visualize extensive game data, displaying a list of games that can be filtered by various categories (Action, RPG, Strategy, etc.) as well as rich media game detail pages, including synopses, ratings, genres, release platforms, and video trailers. Additionally, this project has a separate news and review module, allowing users to stay up-to-date with the latest structured game articles and reviews, complete with individual article pages featuring relevant text, images, and video content. This application effectively demonstrates expertise in external data API integration, search and filtering feature implementation, and the creation of an elegant and informative front-end content management system (CMS).`,
  },
  {
    category: "Backend",
    banner: goeApiAssets[0],
    images: goeApiAssets,
    title: "GoEventID API",
    link: "https://documenter.getpostman.com/view/24737393/2sB3WtrxzK",
    github: "https://github.com/Nanahandresaputra/goEventId-api.git",
    stack: ["Typescript", "Nest.js", "Postgresql"],
    descriptionId: `API layanan backend GoEventID, sistem pemesanan tiket acara berbasis web dan mobile. API menyediakan berbagai endpoint untuk autentikasi pengguna, manajemen event, pemesanan tiket, pembayaran melalui Midtrans, serta check-in menggunakan QR Code. Setiap endpoint menggunakan format RESTful dengan autentikasi JWT dan pertukaran data dalam format JSON. API ini dirancang agar dapat digunakan oleh aplikasi mobile Flutter dan dashboard admin Next.js untuk mendukung seluruh proses manajemen dan transaksi tiket acara.`,
    descriptionEn: `GoEventID backend service API, a web and mobile-based event ticket booking system. The API provides various endpoints for user authentication, event management, ticket booking, payment via Midtrans, and check-in using QR codes. Each endpoint uses a RESTful format with JWT authentication and data exchange in JSON format. This API is designed to be used by Flutter mobile applications and Next.js admin dashboards to support the entire event ticket management and transaction process.`,
  },
];
