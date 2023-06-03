const textElement = document.getElementById('typed-text');
const video = document.getElementById('video');
const text = "Muhammad Rafli Nugrahasyach. Nama yang sekarang menjadi favoritku. Dan tepat hari ini, pemilik nama itu berulang tahun. Saat ini pasti pemilik nama itu sedang menyaksikan tulisan ini berjalan. Ya, kamu sendiri. Aku mungkin ga bisa bikin kata-kata yang bagus. Tapi aku mau bilang ke kamu. Aku bersyukur banget bisa bareng sama kamu. Kamu yang selalu bikin aku seneng, selalu ngehibur kalo aku sedih. Aku gatau lagi harus nulis apa buat deskripsiin kamu. Karena aku gabisa ngutarain semua lewat tulisan apa yang aku rasain ke kamu. Makasih buat semua momen indah yang kamu kasih buat kita. Hari ini adalah hari spesialmu. Semoga hari ulang tahunmu penuh dengan cinta, tawa, dan kebahagiaan. Kamu adalah orang yang sangat istimewa bagiku. Setiap momen yang kita lewati bersama selalu membawa kebahagiaan dan kenangan yang tak terlupakan, dan aku berharap yang terbaik untukmu di setiap langkahmu. Teruslah menjadi pribadi yang luar biasa, dan jangan pernah berhenti bermimpi. Aku percaya kalo kamu memiliki potensi yang luar biasa untuk mencapai apa pun yang kamu inginkan. Aku di sini untuk mendukungmu dalam segala hal. Semoga tahun ini dan setiap tahun yang akan datang penuh dengan kebahagiaan, kesehatan yang baik, dan semua impian yang menjadi kenyataan. Aku bersyukur karena bisa sama kamu di hari istimewa ini. Makasih udah sabar sama semua sifatku. Semoga kamu sayang aku terus. I Love You So Much <3";
let index = 0;

function typeText() {
  if (index < text.length) {
    textElement.innerHTML += text.charAt(index);
    index++;
    setTimeout(typeText, 100); // Mengatur kecepatan pengetikan, bisa diubah sesuai kebutuhan
  }
}

typeText();
