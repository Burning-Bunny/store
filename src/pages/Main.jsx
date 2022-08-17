/* eslint-disable */
import React from "react";
import data from "../components/data";
import { addItem } from "./store";
import { useDispatch } from "react-redux";

export default function Main() {
  let dispatch = useDispatch();

  return (
    <>
      <div className="visual-main">
        <img src="../images/visual_main_01.jpg" alt="" />
      </div>
      {/* <Container>
<Row>
<Col>1 of 3</Col>
<Col xs={6}>2 of 3 (wider)</Col>
<Col>3 of 3</Col>
</Row>
<Row>
<Col>1 of 3</Col>
<Col xs={5}>2 of 3 (wider)</Col>
<Col>3 of 3</Col>
</Row>
</Container> */}
      <div className="container">
        {data.map((value, i) => {
          return (
            <div className="col-md-3" key={value.id}>
              <img src={`../images/best_0${i + 1}.png`} width="280px" alt="" />
              <h3>{value.title}</h3>
              <p>{value.price}</p>
              <button
                onClick={() => {
                  dispatch(
                    addItem({
                      id: value.id,
                      title: value.title,
                      price: value.price,
                      count: 1,
                      image: value.image,
                    })
                  );
                }}
              >
                장바구니
              </button>
            </div>
          );
        })}
      </div>
    </>
  );
}
