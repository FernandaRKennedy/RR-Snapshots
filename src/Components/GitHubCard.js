import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function GitHubCard() {
  return (
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src="https://github.com/Fhttps://avatars.githubusercontent.com/u/97136600?s=400&u=fda5322c56799759866a6e48a3b3ef84e73776d9&v=4" alt="Fernanda Reis Kennedy GitHub Profile Picture"/>
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

export default GitHubCard;