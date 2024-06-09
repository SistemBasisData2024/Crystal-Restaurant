# Crystal Restaurant

Crystal Restaurant adalah Aplikasi pemesanan berbasis web yang akan membantu restaurant restaurant modern agar meminimalisir penggunaan buku menu, konsep dari aplikasi ini adalah user akan menunggu Admin untuk mengenerate session untuk suatu table/ konsumen khusus lalu user bisa mengunjungi link atau men-scan QR-code yang telah tergenerate. Setelah mengunjungi link tersebut konsumen bisa melihat lihat menu dan menambahkannya ke dalam cart. Ketika sudah di order maka orderan akan diproses oleh chef dalam bentuk batch, konsumen dapat memesan lebih dari satu batch dan akan dikalkulasikan pada payment untuk pembayaran total. Lalu, setelah pembayaran dilakukan di kasir admin dapat melakukan verifikasi dengan mendelete session tersebut agar tidak lagi dapat digunakan. Session juga memiliki waktu timeout yaitu 2 jam setelah session dibuat.

# Penjelasan Backend
Bagian backend pada crystal restaurant memiliki 4 controller utama yaitu User, Food, Batch, dan Dine_in(Session) yang masing masing akan menghandle CRUD dari request yang masuk, backend juga mengatur rute request dengan 4 rute request utama yaitu /account, /food, /batch, dan /dine yang akan men-direct request kepada controller yang tepat.
Backend menggunakan NeonDB sebagai cloud Database, dengan Express js sebagai handlernya.

