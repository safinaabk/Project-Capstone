let cafes = [
  {
    id: 'cafe-1',
    title: 'Mélanger Les Space ',
    location: 'Jl. H. Wasyid No.5',
    description: 'Salah satu cafe di Bandung yang aesthetic dan instagramable. Selain itu, tersedia makanan yang rasanya dijamin worth it sesuai dengan harganya',
    foodprice: '23.0 - 38.0',
  },
  {
    id: 'cafe-2',
    title: 'Delapan Padi',
    location: 'Jl. Dipati Ukur No. 8',
    description: 'Cafe yang bergaya seperti resto. Cocok menjadi tempat berkumpul bersama teman ataupun keluarga',
    foodprice: '23.0 - 38.0',
  },
  {
    id: 'cafe-3',
    title: 'Hanami Cafe & Sky Lounge ',
    location: 'Jl. Cihampelas No. 254',
    description: 'Dalam konteks pemrograman JavaScript, modularization merupakan teknik dalam memecah atau menggunakan kode dalam berkas JavaScript secara terpisah berdasarkan tanggung jawabnya masing-masing.',
    foodprice: '23.0 - 38.0',
  },
  {
    id: 'cafe-4',
    title: 'Nomadic',
    location: 'Jl. Jurang No. 49',
    description: 'Dalam konteks React component, lifecycle merupakan kumpulan method yang menjadi siklus hidup mulai dari component dibuat (constructor), dicetak (render), pasca-cetak (componentDidMount), dan sebagainya. ',
    foodprice: '23.0 - 38.0',
  },
  {
    id: 'cafe-5',
    title: 'Brewspace Coffee & Creative Space ',
    location: 'Jl. Prabu Dimuntur No. 22',
    description: 'ESM (ECMAScript Module) merupakan format modularisasi standar JavaScript.',
    foodprice: '23.0 - 38.0',
  },
  {
    id: 'cafe-6',
    title: 'Simpang Wangi Coffee & Eatery ',
    location: 'Jl. Hayam Wuruk No. 24',
    description: 'Dalam konteks pemrograman JavaScript, module bundler merupakan tools yang digunakan untuk menggabungkan seluruh modul JavaScript yang digunakan oleh aplikasi menjadi satu berkas.',
    foodprice: '23.0 - 38.0',
  },
  {
    id: 'cafe-7',
    title: 'Upnormal Coffee Roasters  ',
    location: 'Jl. L.L.R.E. Martadinata No. 158',
    description: 'Dalam konteks pemrograman JavaScript, module bundler merupakan tools yang digunakan untuk menggabungkan seluruh modul JavaScript yang digunakan oleh aplikasi menjadi satu berkas.',
    foodprice: '23.0 - 38.0',
  },
  {
    id: 'cafe-8',
    title: 'Rockmen and Coffee  ',
    location: 'Jl. Ciliwung No. 17',
    description: 'Dalam konteks pemrograman JavaScript, module bundler merupakan tools yang digunakan untuk menggabungkan seluruh modul JavaScript yang digunakan oleh aplikasi menjadi satu berkas.',
    foodprice: '23.0 - 38.0',
  },
  {
    id: 'cafe-9',
    title: 'Cozy Cube Coffee ',
    location: 'Jl. Taman Cibeunying Utara No. 4',
    description: 'Dalam konteks pemrograman JavaScript, module bundler merupakan tools yang digunakan untuk menggabungkan seluruh modul JavaScript yang digunakan oleh aplikasi menjadi satu berkas.',
    foodprice: '23.0 - 38.0',
  },
  {
    id: 'cafe-10',
    title: 'Serantau Coffee & Space   ',
    location: 'Jl. Nanas No. 13',
    description: 'Dalam konteks pemrograman JavaScript, module bundler merupakan tools yang digunakan untuk menggabungkan seluruh modul JavaScript yang digunakan oleh aplikasi menjadi satu berkas.',
    foodprice: '23.0 - 38.0',
  },
];

function getAllCafes() {
  return cafes;
}

function getCafe(id) {
  const foundedCafe = cafes.find((cafe) => cafe.id === id);
  return foundedCafe;
}

export { getAllCafes, getCafe };
