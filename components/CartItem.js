import Link from "next/link";
import { useEffect, useState } from "react";
import { fillQuantity, increase, decrease } from "../redux/CartSlice";

const CartItem = ({ item, dispatch, cart }) => {
  
  const [quantity, setQuantity] = useState(item.quantity);
  
  // useEffect(() => {
  //   setQuantity(quantityInitial);
  // }, [quantityInitial])

  const handleChangeQuantity = (e) => {

    if(e.type === "change") {
      if(e.target.value <= 1) {
        return setQuantity(1);
      } else if(e.target.value > item.inStock) {
        return setQuantity(item.inStock);
      }
      
      return setQuantity(e.target.value);
    }

    if(e.target.getAttribute("value") === '+') {
      setQuantity(state => {
        if(state > item.inStock) {
          return state === item.inStock;
        }

        return state += 1;
      });
      dispatch(increase({ _id: item._id }))
    } else {
      setQuantity(state => {
        if(state <= 1) {
          return state = 1;
        }
        return state -= 1
      });
      dispatch(decrease({ _id: item._id }))
    }

  }

  return (
    <tr>
      <td style={{ width: "100px", overflow: "hidden" }}>
        <img
          src={item && item.images && item.images[0].url}
          alt="cart image"
          style={{ minWidth: "80px", height: "80px" }}
        />
      </td>
      <td style={{ minWidth: "100px" }} className="w-50 align-middle">
        <h5 className="text-capitalize text-secondary">
          <Link href={`/product/${item._id}`}>
            <a>{item.title}</a>
          </Link>
        </h5>

        <h6>
          {item.inStock > 0 ? (
            <p className="mb-1 text-danger">In Stock: {item.inStock}</p>
          ) : (
            <p className="mb-1 text-danger">Out Stock</p>
          )}
        </h6>
      </td>
      <td className="align-middle" style={{ minWidth: "150px" }}>
        <div className="d-flex align-items-center">
          <button
            className="btn btn-outline-secondary"
            value="-"
            // onClick={() => dispatch(decrease({ _id: item._id }))}
            onClick={handleChangeQuantity}
          >
            -
          </button>
          <div className="ml-1" style={{width: '50px'}}>
            <input 
              name="quantity" 
              className="w-100 border-0 text-center"
              style={{ outline: 'none' }}
              value={quantity}
              onChange={handleChangeQuantity}
            />
          </div>
          <button
            className="btn btn-outline-secondary"
            value="+"
            // onClick={() => dispatch(increase({ _id: item._id }))}
            onClick={handleChangeQuantity}
          >
            +
          </button>
        </div>
      </td>

      <td
        className="align-middle"
        style={{ minWidth: "50px", cursor: "pointer" }}
      >
        <i className="fa-solid fa-trash" aria-hidden="true"></i>
      </td>
    </tr>
  );
};

export default CartItem;
