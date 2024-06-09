# Crystal Restaurant

## Overview

Crystal Restaurant adalah Aplikasi pemesanan berbasis web yang akan membantu restaurant restaurant modern agar meminimalisir penggunaan buku menu, konsep dari aplikasi ini adalah user akan menunggu Admin untuk mengenerate session untuk suatu table/ konsumen khusus lalu user bisa mengunjungi link atau men-scan QR-code yang telah tergenerate. Setelah mengunjungi link tersebut konsumen bisa melihat lihat menu dan menambahkannya ke dalam cart. Ketika sudah di order maka orderan akan diproses oleh chef dalam bentuk batch, konsumen dapat memesan lebih dari satu batch dan akan dikalkulasikan pada payment untuk pembayaran total. Lalu, setelah pembayaran dilakukan di kasir admin dapat melakukan verifikasi dengan mendelete session tersebut agar tidak lagi dapat digunakan. Session juga memiliki waktu timeout yaitu 2 jam setelah session dibuat.

## Backend

Bagian backend pada crystal restaurant memiliki 4 controller utama yaitu User, Food, Batch, dan Dine_in(Session) yang masing masing akan menghandle CRUD dari request yang masuk, backend juga mengatur rute request dengan 4 rute request utama yaitu /account, /food, /batch, dan /dine yang akan men-direct request kepada controller yang tepat.
Backend menggunakan NeonDB sebagai cloud Database, dengan Express js sebagai handlernya.

### Program Version
- Node : 20
- Express : 4.19.2
- Cors : 2.8.5
- Nodemon : 8.11
- React : 18.3.1
- Axios : 1.6.8
- Vite : 5.2.0
- Tailwind CSS : 3.4.3

App Version : 1.0.0

- Deployed Web Link : https://deploy-proyekakhir-fe.vercel.app/

- Deployed Backend Server : https://deploy-proyekakhir-wmuk.vercel.app/

## Frontend

### Signin Page

![image](https://github.com/SistemBasisData2024/Crystal-Restaurant/assets/60654087/42076db9-df5b-4638-a4d9-23d3975969ac)
![image](https://github.com/SistemBasisData2024/Crystal-Restaurant/assets/60654087/646e24d1-5796-4165-9573-d809d6b8a579)

### Register Page

![image](https://github.com/SistemBasisData2024/Crystal-Restaurant/assets/60654087/287cede3-6abd-4481-8512-cda6bf7f69e5)

### Profile Page

![image](https://github.com/SistemBasisData2024/Crystal-Restaurant/assets/60654087/b9f8fbb9-61c4-441f-81c9-3fb1845684aa)

### Admin Page

![image](https://github.com/SistemBasisData2024/Crystal-Restaurant/assets/60654087/89b16f9b-3a6e-456d-8ab6-9eba2a3b4d91)
![image](https://github.com/SistemBasisData2024/Crystal-Restaurant/assets/60654087/a9dba8e9-a9ad-4079-8cd2-12ae1c42db5b)
![image](https://github.com/SistemBasisData2024/Crystal-Restaurant/assets/60654087/cf456063-2be4-4236-bef3-2253460df2c1)
![image](https://github.com/SistemBasisData2024/Crystal-Restaurant/assets/60654087/70ebe25a-cac4-4470-a632-cef700805832)

### Session Home Page

![image](https://github.com/SistemBasisData2024/Crystal-Restaurant/assets/60654087/75779a50-db43-4231-9d54-eade6b857a04)

### Menu Page

![image](https://github.com/SistemBasisData2024/Crystal-Restaurant/assets/60654087/1e46f4fb-343b-432f-ad5d-05ef53c48f34)
![image](https://github.com/SistemBasisData2024/Crystal-Restaurant/assets/60654087/65adf445-d6ca-4780-a06c-24fc2c4f3b40)

### Order Page

![image](https://github.com/SistemBasisData2024/Crystal-Restaurant/assets/60654087/a65a2763-20f4-4bfa-b5db-80cf44e6feb1)
![image](https://github.com/SistemBasisData2024/Crystal-Restaurant/assets/60654087/bf43aba8-e635-45b3-9b1a-66c59d713334)

### Payment Page

![image](https://github.com/SistemBasisData2024/Crystal-Restaurant/assets/60654087/b153cf2b-4010-4d2c-aff8-462ea85c8168)
