import { useSelector } from "react-redux";
import style from "../styles/wishlist.module.css";
import { GiBrokenHeart } from "react-icons/gi";
import { useDispatch } from "react-redux";
import { removeItemWishlist } from "../slices/wishListSlice";

const Wishlist = () => {
  const wishlist = useSelector((state) => state.wishlist.wishListItems);
  const dispatch = useDispatch();
  return (
    <div className={style.container}>
      {Object.keys(wishlist).map((el) => (
        <div
          className={style.wishlistCard}
          key={el}
          onClick={(e) => {
            window.location.href = `product/${wishlist[el].id}`;
          }}
        >
          <img src={wishlist[el].image} alt={wishlist[el].title} />
          <h2 className={style.title}>{wishlist[el].title}</h2>
          <p className={style.description}>{wishlist[el].description}</p>
          <div
            className={style.brokenHeart}
            onClick={(e) => {
              e.stopPropagation();
              dispatch(removeItemWishlist(el));
            }}
          >
            <GiBrokenHeart />
          </div>
        </div>
      ))}
    </div>
  );
};

export default Wishlist;
