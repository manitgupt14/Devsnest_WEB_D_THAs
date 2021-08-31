import { useDispatch } from "react-redux";
import { removeItemCart, updateQuantity } from "../slices/cartSlice";
import { BiTrash } from "react-icons/bi";
import style from "../styles/cartCard.module.css";
const CartCards = ({ id, image, title, description, qty }) => {
  const dispatch = useDispatch();
  console.log(qty);
  return (
    <div className={style.cardContainer} key={id}>
      <img src={image} alt={title} />{" "}
      <div className={style.wrapper}>
        <div className={style.titleWrapper}>
        <div className={style.title}>{title} </div>
        <BiTrash
          className={style.trash}
          onClick={() => dispatch(removeItemCart(id))}
        ></BiTrash></div>
        <button
          className={style.buttons}
          onClick={() => {
            if (qty < 100) dispatch(updateQuantity({ id: id, value: qty + 1 }));
          }}
        >
          +
        </button>
        <input type="text" disabled value={qty}></input>
        <button
          className={style.buttons}
          onClick={() => {
            if (qty > 1) dispatch(updateQuantity({ id: id, value: qty - 1 }));
          }}
        >
          -
        </button>
      </div>
    </div>
  );
};

export default CartCards;
