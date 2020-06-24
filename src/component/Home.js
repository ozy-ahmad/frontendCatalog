import React, { useState, useEffect } from "react";
import Axios from "axios";
import {
  Row,
  Col,
  Card,
  CardTitle,
  CardBody,
  CardText,
  Container,
} from "reactstrap";

const Home = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    //const URL = "https://";
    const localUrl = "http://localhost:8080/";
    Axios.get(localUrl).then((response) => {
      //console.log(response);
      setData(response.data.feed.entry);
    });
  }, []);
  const showData = data.map((item, index) => {
    console.log(item);

    const alternate = item.link.find((item) => {
      return item.rel === "alternate";
    });
    const enclosure = item.link.find((item) => {
      return item.rel === "enclosure";
    });

    return (
      <Col key={index}>
        <Card className="mt-5">
          <CardBody>
            <CardTitle>
              <a
                href={item.author.uri}
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src={item.author["flickr:buddyicon"]}
                  alt={item.author.name}
                />
                {item.author.name}
              </a>
            </CardTitle>
          </CardBody>
          <a href={alternate.href} target="_blank" rel="noopener noreferrer">
            {" "}
            <img width="100%" src={enclosure.href} alt={enclosure.title} />
          </a>
          <CardBody>
            <CardText> {item.title}</CardText>
          </CardBody>
        </Card>
      </Col>
    );
  });
  return (
    <Container>
      {" "}
      <Row xs="2">{showData}</Row>
    </Container>
  );
};
export default Home;
