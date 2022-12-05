import Card from 'react-bootstrap/Card';
import Link from 'next/link';


export default function CarItem() {
  return (
    <Card className="m-1">
      <Link href="/BuyCar">
        <Card.Img variant="top"
                  src="https://revistacarro.com.br/wp-content/uploads/2022/06/Icona_5.jpg" />
      </Link>
      <Card.Body>
        <Card.Title>Car Title</Card.Title>
        <Card.Subtitle className="mb-2 text-muted">Card Subtitle</Card.Subtitle>
        <Card.Text>
          <Card.Title className="text-primary">$5000</Card.Title>
          <Card.Subtitle className="mb-2 text-muted text-decoration-line-through">$6000</Card.Subtitle>
        </Card.Text>
      </Card.Body>
    </Card>
  );
}
