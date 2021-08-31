import style from "../styles/card.module.css";
import { setCurrentProduct } from "../slices/productSlice";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { FaHeart } from "react-icons/fa";
import { addItemWishlist, removeItemWishlist } from "../slices/wishListSlice";
const Cards = (currentState) => {
  const dispatch = useDispatch();
  const { id, title, description, image, price } = currentState.currentState;
  const wishList = useSelector((state) => state.wishlist.wishListItems);
  return (
    <Link
      to={`/product/${id}`}
      onClick={() => dispatch(setCurrentProduct(currentState.currentState))}
      className={style.links}
    >
      <div className={style.container}>
        <FaHeart
          className={
            id + "xd" in wishList ? style.heartFilled : style.heartEmpty
          }
          onClick={(e) => {
            e.preventDefault();
            if (!(id + "xd" in wishList))
              dispatch(addItemWishlist({ ...currentState }));
            else dispatch(removeItemWishlist(id + "xd"));
          }}
        ></FaHeart>
        <img src={image} alt={title} />
        <h3 className={style.title}>{title}</h3>
        <div className={style.description}>{description}</div>
        <p className={style.price}>Price ₹{Math.floor(price * 73)}</p>
      </div>
    </Link>
  );
};

export default Cards;
