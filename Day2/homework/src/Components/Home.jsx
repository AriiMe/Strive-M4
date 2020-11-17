import React from 'react';
import  { Container, Row, Card, Button} from "react-bootstrap";
import fantasyBooks from '../data/fantasy.json'
import historyBooks from '../data/history.json'
import horrorBooks from '../data/horror.json'
import romanceBooks from '../data/romance.json'
import scifiBooks from '../data/scifi.json'


export default class Home extends React.Component{

    state = {
        selectedBooks: fantasyBooks
    }

    handleBookSelection = (e) => {

        switch(e.target.value) {
            case "Fantasy": 
                this.setState({selectedBooks: fantasyBooks})
                break
            case "History":
                this.setState({selectedBooks: historyBooks})
                break
            case "Horror":
                this.setState({selectedBooks: horrorBooks})
                break
            case "Romance":
                this.setState({selectedBooks: romanceBooks})
                break
            case "SciFi":
                this.setState({selectedBooks: scifiBooks})
                break
        }
    }


    render(){
        return <>
        <select name="books" id="" onChange={this.handleBookSelection}>
            <option value="Fantasy">Fantasy</option>
            <option value="History">History</option>
            <option value="Horror">Horror</option>
            <option value="Romance">Romance</option>
            <option value="SciFi">SciFi</option>
        </select>
        
        <Container>
            <Row>
                {
                    this.state.selectedBooks.map((book, index) => <div key={index} className="row mr-4 mb-5 mt-5"> <Card style={{ width: '18rem' }}>
                    <Card.Img variant="top" src="{book.img}" />
                    <Card.Body>
                <Card.Title>{book.category}</Card.Title>
                      <Card.Text>
                        {book.title}
                      </Card.Text>
                      <Button variant="primary">Buy</Button>
                    </Card.Body>
                    <Card.Footer>
      <small className="text-muted">${book.price}</small>
    </Card.Footer>
                  </Card>
                        </div>)
                }
            </Row>
        </Container>
        </>
    }
}