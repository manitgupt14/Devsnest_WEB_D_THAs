import { useSelector, useDispatch } from "react-redux";
import style from "../styles/cart.module.css";
import { toggleVisible } from "../slices/cartSlice";
import CartCards from "./CartCards";
const CartDrawer = () => {
  const cartItems = useSelector((state) => state.cart.cartItems);
  const isVisible = useSelector((state) => state.cart.isVisible);
  const dispatch = useDispatch();
  return (
    <>
      <div className={!isVisible ? style.NotVisible : style.cartContainer}>
        {isVisible ? (
          <>
            <h1
              className={style.cross}
              onClick={() => dispatch(toggleVisible())}
            >
              X
            </h1>
            {Object.keys(cartItems).map((el) => (
              <CartCards
                key={el}
                id={el}
                title={cartItems[el].title}
                description={cartItems[el].description}
                image={cartItems[el].image}
                qty={cartItems[el].quantity}
              />
            ))}
          </>
        ) : (
          <></>
        )}
      </div>
      )
    </>
  );
};

export default CartDrawer;
