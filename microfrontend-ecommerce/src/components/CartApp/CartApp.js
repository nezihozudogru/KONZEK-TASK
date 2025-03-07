import React, { useCallback, useMemo } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { removeFromCart, clearCart } from '../../store/cartSlice';

const CartItem = React.memo(({ product, onRemove }) => (
  <li className="cart-item">
    <div className="item-info">
      <h3>{product.name}</h3>
      <p className="price">${product.price}</p>
    </div>
    <button onClick={() => onRemove(product)} className="remove-btn" aria-label={`Remove ${product.name} from cart`}>
      Remove
    </button>
  </li>
));

const CartSummary = React.memo(({ total, onClear }) => (
  <div className="cart-summary">
    <div className="summary-details">
      <p className="total-amount">Total: ${total}</p>
      <button onClick={onClear} className="clear-cart-btn">
        Clear Cart
      </button>
    </div>
  </div>
));

const CartApp = () => {
  const dispatch = useDispatch();
  const items = useSelector((state) => state.cart.items);
  const totalItems = useSelector((state) => state.cart.totalItems);

  const handleRemoveItem = useCallback(
    (product) => {
      dispatch(removeFromCart(product));
    },
    [dispatch]
  );

  const handleClearCart = useCallback(() => {
    if (window.confirm('Are you sure you want to clear the cart?')) {
      dispatch(clearCart());
    }
  }, [dispatch]);

  const total = useMemo(() => {
    return items.reduce((sum, item) => sum + item.price, 0);
  }, [items]);

  const cartItems = useMemo(() => items.map((product) => <CartItem key={product.cartId} product={product} onRemove={handleRemoveItem} />), [items, handleRemoveItem]);

  return (
    <div className="cart">
      <header className="cart-header">
        <h2>Shopping Cart</h2>
        <span className="item-count">({totalItems} items)</span>
      </header>

      {items.length === 0 ? (
        <div className="empty-cart">
          <p>Your cart is empty</p>
          <small>Add some products to your cart</small>
        </div>
      ) : (
        <>
          <ul className="cart-items">{cartItems}</ul>
          <CartSummary total={total} onClear={handleClearCart} />
        </>
      )}
    </div>
  );
};

export default React.memo(CartApp);
