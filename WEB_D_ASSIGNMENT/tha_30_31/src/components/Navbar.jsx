import style from "../styles/navbar.module.css";
import { FaShoppingCart } from "react-icons/fa";
import { FaHeart } from "react-icons/fa";
import { FaAmazon } from "react-icons/fa";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { toggleVisible } from "../slices/cartSlice";
const Navbar = () => {
  const dispatch = useDispatch();
  return (
    <nav>
      <div className={style.navbarMain}>
        <div className={style.navbarWrapper}>
          <Link to="/">
            {" "}
            <FaAmazon className={style.amazonLogo} />
          </Link>

          <div className={style.rightIcons}>
            <Link to="/wishlist">
              <FaHeart className={style.wishlistHeart} />
            </Link>
            <FaShoppingCart
              className={style.shoppingCart}
              onClick={() => dispatch(toggleVisible())}
            />
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
