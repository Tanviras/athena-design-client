import React from 'react';
import { Card, CardDeck } from 'react-bootstrap';
import './Price.css';

const Price = () => {
    return (
       <div className="price">
            <div className="container">
                <h2 style={{textAlign:"center"}}>Choose Your Dedicated Team</h2>
                <CardDeck >
        <Card className="table">
          

          <Card.Body className="tr">
            <Card.Title><h3 style={{textAlign:"center"}}>$499</h3><p style={{textAlign:"center"}}>For Basic</p></Card.Title>
            <Card.Text>
             <ul>Homepage</ul>
             <ul>No Inner Page</ul>
             <ul>Asset Page</ul>
             <ul>Free Photos</ul>
             <ul>10 Days Support</ul>
             <ul>24/7 Support</ul>
             <ul><button className="btnHire">Contact</button></ul>
            </Card.Text>
          </Card.Body>
        </Card>
        <Card className="table">
          <Card.Body className="tr">
            <Card.Title><h3 style={{textAlign:"center"}}>$299</h3><p style={{textAlign:"center"}}>For Preferred</p></Card.Title>
            <Card.Text>
            <ul>Homepage</ul>
             <ul>5o Inner Page</ul>
             <ul>Asset Page</ul>
             <ul>Free Photos</ul>
             <ul>20 Days Support</ul>
             <ul>24/7 Support</ul>
             <ul><button className="btnHire">Contact</button></ul>
            </Card.Text>
          </Card.Body>
        </Card>
        <Card className="table">
          <Card.Body className="tr">
            <Card.Title><h3 style={{textAlign:"center"}}>$399</h3><p style={{textAlign:"center"}}>For Elite</p></Card.Title>
            <Card.Text>
            <ul>Homepage</ul>
             <ul>8 Inner Page</ul>
             <ul>Asset Page</ul>
             <ul>Free Photos</ul>
             <ul>30 Days Support</ul>
             <ul>24/7 Support</ul>
             <ul><button className="btnHire">Contact</button></ul>
            </Card.Text>
          </Card.Body>
        </Card>
      </CardDeck>
        </div>

       </div>
    );
};

export default Price;