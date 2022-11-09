import React from 'react';
import { connect } from 'dva';

const Dva = ({ dispatch, products }) => {
  function handleDelete(id) {
    dispatch({
      type: 'products/delete',
      payload: id,
    });
  }
  return (
    <div>
      <h2>List of Products</h2>

      {
        products && products.map((item, index) => {
          return (
            <h3 onClick={() => handleDelete(index)}>
              {item.name}
            </h3>
          )
        })
      }
    </div>
  );
};

// export default Products;
export default connect(({ products }) => ({
  products,
}))(Dva);