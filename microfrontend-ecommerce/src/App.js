import React, { Suspense } from 'react';

const ProductListApp = React.lazy(() => import('./components/ProductListApp/ProductListApp'));
const CartApp = React.lazy(() => import('./components/CartApp/CartApp'));

const LoadingFallback = () => <div>Loading...</div>;

function App() {
  return (
    <div className="app">
      <header className="app-header">
        <h1>Micro Frontend E-Commerce</h1>
      </header>
      <main className="app-container">
        <Suspense fallback={<LoadingFallback />}>
          <div className="product-section">
            <ProductListApp />
          </div>
          <div className="cart-section">
            <CartApp />
          </div>
        </Suspense>
      </main>
    </div>
  );
}

export default App;
