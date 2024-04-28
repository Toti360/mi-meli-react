import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { Link } from "react-router-dom";

export const Item = ({ item }) => {
  return (
    <Card
      style={{
        width: "50rem",
        margin: "1.5px",
        backgroundColor: "#f8f9fa",
        textAlign: "center",
      }}
    >
      <Card.Img variant="top" src={item.image} />
      <Card.Body>
        <Card.Title>{item.title}</Card.Title>
        <Card.Text>{item.description}</Card.Text>
        <Card.Text>${item.price}</Card.Text>
        <Card.Text>{item.categoryId}</Card.Text>
        <Card.Text>Stock {item.stock}</Card.Text>
        <Link to={`/item/${item.id}`}>
          <Button variant="primary">Más Info</Button>
        </Link>
      </Card.Body>
    </Card>
  );
};
