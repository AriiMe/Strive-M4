import React from 'react';
import  { Container, Row, Card, Button, Carousel, Dropdown, ButtonGroup, Jumbotron} from "react-bootstrap";
import fantasyBooks from '../data/fantasy.json'
import historyBooks from '../data/history.json'
import horrorBooks from '../data/horror.json'
import romanceBooks from '../data/romance.json'
import scifiBooks from '../data/scifi.json'
import FooterPage from './FooterPage';


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
                default: break
        }
    }


    render(){

        let tempBooks = [];
        for(let i=0; i<5; i++){
          tempBooks.push(this.state.selectedBooks[Math.floor(Math.random() * this.state.selectedBooks.length) + 1])
        };

        return <>
       <Jumbotron>
  <h1 className="mt-5">Hello, world!</h1>
  <p>
    This is a simple hero unit, a simple jumbotron-style component for calling
    extra attention to featured content or information.
  </p>
  <p>
    <Button variant="primary">Learn more</Button>
  </p>
</Jumbotron>

      <Container>
     
      </Container>
        
        <Container fluid className="px-0 mt-5">
            <h1 id="deals">Latest Release</h1>
                <Carousel>

                {
                    tempBooks.slice(0,6).map(book =><Carousel.Item>
                            <img
                                className="d-block w-100"
                                src={book.img}
                                alt="First slide"
                                style={{
                                    maxHeight: "50vh",
                                    objectFit: "cover"
                                }}
                            />
                            <Carousel.Caption>
                            <h3 className="mb-5">{book.title}</h3>
                            <Button variant="danger" className="mt-2 mb-2">Buy Now</Button>
                            </Carousel.Caption>
                    </Carousel.Item>
                    )
                }
                    
                </Carousel>
            </Container>

    
       
        <Container>
            <div className="mt-5 d-flex justify-content-center">
            <label  for="styledSelect1"> 
        <select className="custom-select" id="styledSelect1" name="books" id="" onChange={this.handleBookSelection}>
            <option>
      Genre
            </option>
            <option value="Fantasy">Fantasy</option>
            <option value="History">History</option>
            <option value="Horror">Horror</option>
            <option value="Romance">Romance</option>
            <option value="SciFi">SciFi</option>
        </select>
        </label>
        </div>




<Row>
            
                {


this.state.selectedBooks.map((book, index) =>

 <div key={index} className="col col-sm-12 col-md-6 col-xl-4">
      <div className="row mr-4 mb-5 mt-5">
           <Card style={{ width: '18rem', height: '49vh' }}>
             <Card.Img id="Card-img" variant="top" src={`${book.img}`} />
                <Card.Body>
                    <Card.Title className="h6 text-muted">
                        {book.category}
                    </Card.Title>
                    <div class="dropdown-divider"></div>
                    <div className="mb-3 text-center mt-4">
                      <Card.Text>
                        {book.title}
                      </Card.Text>
                    </div>
                    <div class="col text-center">
                      <Button id="cardBuy" variant="success">Buy</Button>
                    </div>

                </Card.Body>
    <Card.Footer>
      <small className="text-muted">${book.price}</small>
    </Card.Footer>
            </Card>
        </div>

    </div>
)}
</Row>
        </Container>
        <footer>
            <FooterPage />
        </footer>
        </>
    }
}