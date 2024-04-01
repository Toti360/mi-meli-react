import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { Link } from "react-router-dom";

export const Item = ({ product }) => {
  return (
    <Card style={{ width: "50rem", margin: "1.5px" }}>
      <Card.Img variant="top" src={product.pictureUrl} />
      <Card.Body>
        <Card.Title>{product.title}</Card.Title>
        <Card.Text>{product.description}</Card.Text>
        <Card.Text>${product.price}</Card.Text>
        <Card.Text>{product.category}</Card.Text>
        <Link to={"/item/${product.id}"}>
          <Button variant="primary">Más Info</Button>
        </Link>
      </Card.Body>
    </Card>
  );
};
