import Link from "next/link";
import { decreaseCart, increaseCart } from "../redux/Actions";
import { increase, decrease } from "../redux/CartSlice";

const CartItem = ({ item, dispatch, cart }) => {
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
        <button
          className="btn btn-outline-secondary"
          onClick={() => dispatch(decrease({ _id: item._id }))}
        >
          -
        </button>
        <span className="px-3">{item.quantity}</span>
        <button
          className="btn btn-outline-secondary"
          onClick={() => dispatch(increase({ _id: item._id }))}
        >
          +
        </button>
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
