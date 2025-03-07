import React, { useCallback, useMemo } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addToCart } from '../../store/cartSlice';

const ProductItem = React.memo(({ product, onAddToCart }) => (
  <div className="product-item">
    <div className="product-info">
      <h3>{product.name}</h3>
      <p className="price">${product.price}</p>
    </div>
    <button onClick={() => onAddToCart(product)} className="add-to-cart-btn">
      Add to Cart
    </button>
  </div>
));

const ProductListApp = () => {
  const dispatch = useDispatch();
  const products = useSelector((state) => state.products.list);
  const loading = useSelector((state) => state.products.loading);
  const error = useSelector((state) => state.products.error);

  const handleAddToCart = useCallback(
    (product) => {
      dispatch(
        addToCart({
          ...product,
          cartId: Date.now()
        })
      );
    },
    [dispatch]
  );

  const productList = useMemo(() => products.map((product) => <ProductItem key={product.id} product={product} onAddToCart={handleAddToCart} />), [products, handleAddToCart]);

  if (loading) {
    return <div className="loading">Loading products...</div>;
  }

  if (error) {
    return <div className="error">Error: {error}</div>;
  }

  return (
    <div className="product-list">
      <h2>Available Products</h2>
      <div className="products-container">{products.length === 0 ? <p>No products available</p> : productList}</div>
    </div>
  );
};

export default React.memo(ProductListApp);
