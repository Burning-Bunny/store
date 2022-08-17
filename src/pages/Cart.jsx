import React from "react";
import Table from "react-bootstrap/Table";
import { useDispatch, useSelector } from "react-redux";
import { addCount, minusCount } from "./store";

export default function Cart() {
  let state = useSelector((state) => {
    return state;
  });
  let dispatch = useDispatch();

  return (
    <div>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>#</th>
            <th>상품명</th>
            <th>상품개수</th>
            <th>구매하신 총 가격</th>
          </tr>
        </thead>
        <tbody>
          {state.cart.map((value, i) => {
            return (
              <tr key={i}>
                <td>
                  <img src={state.cart[i].image} alt="" />
                </td>
                <td>{state.cart[i].title}</td>
                <td>
                  <button
                    onClick={() => {
                      dispatch(addCount(state.cart[i].id));
                    }}
                  >
                    +
                  </button>
                  {state.cart[i].count}
                  <button
                    onClick={() => {
                      dispatch(minusCount(state.cart[i].id));
                    }}
                  >
                    -
                  </button>
                </td>
                <td>{state.cart[i].price * state.cart[i].count}</td>
              </tr>
            );
          })}
        </tbody>
      </Table>
    </div>
  );
}
