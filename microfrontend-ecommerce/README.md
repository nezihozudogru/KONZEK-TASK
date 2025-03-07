# Micro Frontend E-Commerce Application

Bu proje, React ve Redux Toolkit kullanılarak geliştirilmiş bir mikro frontend e-ticaret uygulamasıdır. Uygulama, ürün listesi ve alışveriş sepeti olmak üzere iki ana bileşenden oluşmaktadır.

## Özellikler

- Ürün listesi görüntüleme
- Sepete ürün ekleme
- Sepetten tek tek ürün silme
- Sepeti tamamen temizleme
- Toplam fiyat hesaplama
- Gerçek zamanlı sepet güncellemesi

## Teknolojiler

- React 18
- Redux Toolkit
- React-Redux
- CSS3

## Proje Yapısı

src/
│
├── components/
│ ├── ProductListApp/
│ │ └── ProductListApp.js
│ └── CartApp/
│ └── CartApp.js
│
├── store/
│ ├── index.js
│ ├── cartSlice.js
│ └── productSlice.js
│
├── App.js
├── index.js
└── index.css

## Bileşenler

### ProductListApp

- Mevcut ürünleri listeler
- Her ürün için "Add to Cart" butonu içerir
- Redux store ile entegre çalışır

### CartApp

- Sepete eklenen ürünleri gösterir
- Her ürün için "Remove" butonu içerir
- Toplam fiyatı hesaplar
- "Clear Cart" butonu ile tüm sepeti temizler

## Redux Store Yapısı

### cartSlice

javascript
{
items: [], // Sepetteki ürünler
totalItems: 0 // Toplam ürün sayısı
}

### productSlice

javascript
{
list: [
{ id: 1, name: "Laptop", price: 999 },
{ id: 2, name: "Phone", price: 699 }
],
loading: false,
error: null
}

## Kurulum

1. Projeyi klonlayın
   bash git clone [repo-url]

2. Proje dizinine gidin
   bash cd [proje-adı]

3. Gerekli paketleri yükleyin
   bash npm install

4. Uygulamayı başlatın
   bash npm start

## Kullanım

1. Ana sayfada ürün listesi görüntülenir
2. "Add to Cart" butonu ile ürünler sepete eklenir
3. Sağ tarafta sepet içeriği görüntülenir
4. Sepetteki ürünler "Remove" butonu ile tek tek silinebilir
5. "Clear Cart" butonu ile tüm sepet temizlenebilir

## Önemli Notlar

- Her ürün sepete eklendiğinde benzersiz bir `cartId` alır
- Aynı üründen birden fazla eklenebilir
- Her ürün bağımsız olarak silinebilir
- Toplam fiyat otomatik olarak güncellenir

## Performans Optimizasyonları

**Component Optimizasyonları:**

- React.memo kullanımı ile gereksiz render'ların önlenmesi
- Alt bileşenlere ayırma (CartItem, CartSummary gibi)
- useCallback ile event handler'ların memoization'ı
- useMemo ile hesaplamaların ve listelerin memoization'ı

2. **State Yönetimi:**

   - Redux Toolkit ile verimli state yönetimi
   - İmmutable state güncellemeleri
   - Optimize edilmiş store yapısı

3. **Render Optimizasyonları:**

   - Benzersiz key kullanımı ile DOM güncellemelerinin optimizasyonu
   - Koşullu render kullanımı (empty states, loading states)
   - Gereksiz re-render'ların önlenmesi

4. **Veri İşleme:**

   - Sepet toplamı gibi hesaplamaların memoization'ı
   - Verimli liste işlemleri
   - Optimize edilmiş veri filtreleme

5. **Kullanıcı Deneyimi:**
   - Yükleme durumları (loading states)
   - Hata yönetimi (error states)
   - Boş durum gösterimi (empty states)
   - İşlem onayları (confirmation dialogs)
