import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

export default function CarItem() {
  return (
    <Card>
      <Card.Img variant="top"
                src="https://revistacarro.com.br/wp-content/uploads/2022/06/Icona_5.jpg" />
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>
  );
}
