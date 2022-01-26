import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import FormControl from 'react-bootstrap/FormControl';
import InputGroup from 'react-bootstrap/InputGroup';
import LoadingImage from './images/loading.jpeg';

const Posts = () => {
  return(
    <Container className="pt-5">
      <Card className="px-2 mt-3">
        <Card.Title>Card Title</Card.Title>
        <Card.Img style={{height: "30rem"}} src={LoadingImage} />
        <Card.Text><strong>2349 likes</strong></Card.Text>
        <Card.Text>
          <span style={{"font-weight": "bold"}}>Username</span> Post content asdfkjasdfljsdflkjflasdjfdasklfsalkfjasdlfjasfdklasjdflsadkjflkasdjfkas asdlf sadjflk sjfkl asfjla sflaj sdfklas jdfa s
        </Card.Text>
        <InputGroup className="mb-3">
          <InputGroup.Text id="basic-addon1">💬</InputGroup.Text>
          <FormControl
            placeholder="Add a comment..."
            aria-label="Add a comment..."
            aria-describedby="basic-addon1"
          />
        </InputGroup>
      </Card>
    </Container>
    
  )
}

export default Posts;