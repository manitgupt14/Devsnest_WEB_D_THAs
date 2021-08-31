import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { fetchProduct } from "../slices/productSlice";
import { useState } from "react";
import style from "../styles/details.module.css";
import Loader from "./Loader";
import { addItemCart } from "../slices/cartSlice";
const Details = () => {
  const { isLoading, currentProduct } = useSelector((state) => state.product);
  const [slider, setSlider] = useState(1);
  const params = useParams();
  const dispatch = useDispatch();

  useEffect(() => {
    if (!currentProduct || params["id"] !== currentProduct.id) {
      dispatch(fetchProduct(params["id"]));
    }
  }, []);

  return (
    <>
      {!isLoading ? (
        <div className={style.container}>
          <img
            className={style.image}
            src={currentProduct.image}
            alt={currentProduct.title}
          />
          <div className={style.content}>
            <h1 className={style.title}>{currentProduct.title}</h1>
            <div className={style.description}>
              {currentProduct.description}
            </div>
            <div className={style.slider}>
              <button
                className={style.buttons}
                onClick={() => {
                  if (slider < 100) setSlider(slider + 1);
                }}
              >
                +
              </button>
              <input type="number" disabled value={slider}></input>
              <button
                className={style.buttons}
                onClick={() => {
                  if (slider >= 1) setSlider(slider - 1);
                }}
              >
                -
              </button>
            </div>
            <button
              className={style.addtoCart}
              onClick={() => {
                if (slider >= 1)
                  dispatch(
                    addItemCart({ ...currentProduct, quantity: slider })
                  );
              }}
            >
              Add to Cart
            </button>
          </div>
        </div>
      ) : (
        <Loader />
      )}
    </>
  );
};

export default Details;
