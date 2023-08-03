import React from 'react';
import { Table } from 'react-bootstrap';

const productsArr = [
  {
    title: 'Colors',
    price: 100,
    imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%201.png',
  },
  {
    title: 'Black and white Colors',
    price: 50,
    imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%202.png',
  },
  {
    title: 'Yellow and Black Colors',
    price: 70,
    imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%203.png',
  },
  {
    title: 'Blue Color',
    price: 100,
    imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%204.png',
  },
];

const UserData = () => {
  return (
    <Table striped bordered hover responsive>
      <thead>
        <tr>
          <th>Title</th>
          <th>Price</th>
          <th>Image</th>
        </tr>
      </thead>
      <tbody>
        {productsArr.map((product, index) => (
          <tr key={index}>
            <td>{product.title}</td>
            <td>{product.price}</td>
            <td>
              <img src={product.imageUrl} alt={product.title} width="100" />
            </td>
          </tr>
        ))}
      </tbody>
    </Table>
  );
};

export default UserData;
