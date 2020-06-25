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
  Tooltip,
} from "reactstrap";

import "../assets/style/style.css";

const Home = () => {
  const [data, setData] = useState([]);
  const [tooltipOpen, setTooltipOpen] = useState(false);

  const toggle = () => setTooltipOpen(!tooltipOpen);

  useEffect(() => {
    const url = `${process.env.REACT_APP_API_URL}`;
    //const localUrl = process.env.REACT_APP_LOCALHOST_URL;
    Axios.get(url).then((response) => {
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
      <Col key={index} lg={6} md={6} sm={12}>
        <Card className="mt-5 mr-4 ml-4 mb-5">
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
                  className="rounded-circle mr-3 profileImg"
                />
                <span className="text-dark" id="author">
                  {item.author.name}
                </span>
                <Tooltip
                  placement="right"
                  isOpen={tooltipOpen}
                  target="author"
                  toggle={toggle}
                >
                  Check there profile !!
                </Tooltip>
              </a>
            </CardTitle>
          </CardBody>
          <a href={alternate.href} target="_blank" rel="noopener noreferrer">
            {" "}
            <img
              width="100%"
              src={enclosure.href}
              alt={enclosure.title}
              className="imageBody"
            />
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
      <Row>{showData}</Row>
    </Container>
  );
};
export default Home;
