import style from "../styles/container.module.css";
import { useSelector, useDispatch } from "react-redux";
import { fetchProducts } from "../slices/productSlice";
import Cards from "./Cards";
import { useEffect } from "react";
import Loader from "./Loader";
const Container = () => {
  const products = useSelector((state) => state.product.productItems);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchProducts());
  }, []);
  return (
    <div className={style.mainContainer}>
      {products.length !== 0 ? (
        <div className={style.container}>
          {products.map((el, index) => (
            <Cards currentState={el} key={index} />
          ))}
        </div>
      ) : (
        <Loader />
      )}
    </div>
  );
};

export default Container;
