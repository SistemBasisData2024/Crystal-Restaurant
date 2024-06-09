export default function InputSessionPage() {
  return (
    <div className="font-sans">
      <section className="bg-gradient-to-r from-blue-900 to-blue-800 text-white h-screen flex items-center">
        <div className="container mx-auto text-center px-6">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">Welcome to Crystal Restaurant</h1>
          <p className="text-lg md:text-2xl mb-8">Digitalized your menu.</p>
          <button
            className="bg-orange-500 hover:bg-orange-600 text-white font-bold py-2 px-6 rounded-full"
          >
            Get Started
          </button>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 bg-blue-100">
        <div className="container mx-auto text-center px-6">
          <h2 className="text-3xl font-bold mb-12 text-blue-900">Our Features</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h3 className="text-2xl font-bold mb-4 text-blue-900">Fast Order</h3>
              <p className="text-gray-700">In one click your order directly sent to chef.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h3 className="text-2xl font-bold mb-4 text-blue-900">Flexibel Menu</h3>
              <p className="text-gray-700">All of our menu is in your palm of your hand.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h3 className="text-2xl font-bold mb-4 text-blue-900">Browse anytime</h3>
              <p className="text-gray-700">You can still browse our menu while eating.</p>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-white">
        <div className="container mx-auto text-center px-6">
          <h2 className="text-3xl font-bold mb-12 text-blue-900">About Us</h2>
          <p className="text-gray-700">Crystal Restaurant adalah Aplikasi pemesanan berbasis web yang akan membantu restaurant restaurant modern agar meminimalisir penggunaan buku menu, konsep dari aplikasi ini adalah user akan menunggu Admin untuk mengenerate session untuk suatu table/ konsumen khusus lalu user bisa mengunjungi link atau men-scan QR-code yang telah tergenerate. Setelah mengunjungi link tersebut konsumen bisa melihat lihat menu dan menambahkannya ke dalam cart. Ketika sudah di order maka orderan akan diproses oleh chef dalam bentuk batch, konsumen dapat memesan lebih dari satu batch dan akan dikalkulasikan pada payment untuk pembayaran total. Lalu, setelah pembayaran dilakukan di kasir admin dapat melakukan verifikasi dengan mendelete session tersebut agar tidak lagi dapat digunakan. Session juga memiliki waktu timeout yaitu 2 jam setelah session dibuat..</p>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-blue-100">
        <div className="container mx-auto text-center px-6">
          <h2 className="text-3xl font-bold mb-12 text-blue-900">Contact Us</h2>
          <p className="text-gray-700">Contact our Waiter for details.</p>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-blue-900 text-white py-6">
        <div className="container mx-auto text-center px-6">
          <p>&copy; 2024 CrystalRestaurant. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
