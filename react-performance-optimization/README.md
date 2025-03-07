# React Performance Optimization Project

Bu proje, React uygulamalarında performans optimizasyonunun nasıl yapılacağını gösteren basit bir örnektir. Kullanıcı listesi görüntüleme ve sayaç işlevselliği üzerinden optimizasyon teknikleri uygulanmıştır.

## 🚀 Özellikler

- Kullanıcı listesi görüntüleme
- Performans optimizasyonlu bileşenler
- Loading ve error state yönetimi
- Sayaç fonksiyonalitesi
- Modern ve responsive tasarım

## 🛠️ Kullanılan Teknolojiler

- React 18
- Create React App
- CSS3
- JSONPlaceholder API

## 📦 Kurulum

1. Projeyi klonlayın:
   bash git clone https://github.com/your-username/react-performance-optimization.git

2. Proje dizinine gidin:
   bash cd react-performance-optimization

3. Bağımlılıkları yükleyin:
   bash npm install

4. Uygulamayı başlatın:
   bash npm start

## 📁 Proje Yapısı

react-performance-optimization/
│
├── src/
│ ├── components/
│ │ └── UserList.js
│ │
│ ├── styles/
│ │ └── index.css
│ │
│ ├── App.js
│ └── index.js
│
├── public/
│ ├── index.html
│ └── favicon.ico
│
├── package.json
└── README.md

## ⚡ Performans Optimizasyonları

1. **React.memo Kullanımı**

   - UserList bileşeni gereksiz render'ları önlemek için React.memo ile sarmalandı
   - Props değişmedikçe bileşen yeniden render edilmez

2. **State Yönetimi**

   - Loading state ile yükleme durumu kontrolü
   - Error state ile hata yönetimi
   - Optimize edilmiş state güncellemeleri

3. **Async/Await**

   - API çağrıları için modern async/await syntax kullanımı
   - Daha temiz ve okunabilir kod yapısı

4. **Koşullu Render**
   - Loading ve error durumları için koşullu render
   - Gereksiz DOM güncellemelerinin önlenmesi

## 🎯 Kullanım

1. Uygulama başlatıldığında kullanıcı listesi otomatik olarak yüklenir
2. Yükleme sırasında loading indicator görüntülenir
3. Hata durumunda kullanıcıya hata mesajı gösterilir
4. "Increment" butonu ile sayaç artırılabilir
5. Sayaç artırıldığında kullanıcı listesi gereksiz yere yeniden render edilmez

## 🔍 Önemli Noktalar

- `React.memo` kullanımı
- Async veri fetching
- Error handling
- Loading states
- Optimize edilmiş state güncellemeleri
- Responsive tasarım
