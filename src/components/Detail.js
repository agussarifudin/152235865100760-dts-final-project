import React from "react";
import { useLocation, Link } from "react-router-dom";
import {
  Button,
  Container,
  Row,
  Col,
  Card,
  CardBody,
  CardTitle,
  CardSubtitle,
  CardText,
} from "reactstrap";
import NavBar from "./Navbar";

const onClick = (url) => {
  window.location = `${url}`;
};
const Detail = () => {
  const location = useLocation();

  return (
    <>
      <NavBar />
      <div style={{ background: "black" }}>
        <Container>
          <Row style={{ paddingTop: 20 }}>
            <Col>
              <Card
                style={{
                  background:
                    "linear-gradient(to bottom, #99ccff 0%, #66ffff 100%)",
                }}
              >
                <Row sm={6} style={{ position: "center", textAlign: "center" }}>
                  <img
                    alt="Card"
                    src={`${location.state.imgUrl}`}
                    style={{
                      height: 400,
                      width: 900,
                      textAlign: "center",
                      paddingLeft: 200,
                      paddingTop: 20,
                    }}
                  />
                </Row>
                <CardBody color="danger" outline>
                  <CardTitle tag="h5">{location.state.title}</CardTitle>
                  <CardSubtitle
                    className="mb-2 text-muted"
                    tag="h6"
                  ></CardSubtitle>
                  <CardText>
                    <Row>
                      <Col sm={2}> News Site </Col>
                      <Col>: {location.state.newsSite}</Col>
                    </Row>
                  </CardText>
                  <CardText>
                    <Row>
                      <Col sm={2}> summary </Col>
                      <Col>: {location.state.summary} </Col>
                    </Row>
                  </CardText>

                  <CardText>
                    <Row>
                      <Col sm={2}> Published At </Col>
                      <Col>: {location.state.publishedAt} </Col>
                    </Row>
                  </CardText>
                  <CardText>
                    <Row>
                      <Col sm={2}> Update At </Col>
                      <Col>: {location.state.updatedAt} </Col>
                    </Row>
                  </CardText>
                  <CardText>
                    <Row>
                      <Col sm={2}> Link News </Col>
                      <Col>
                        :
                        <Button
                          type="submit"
                          fullWidth
                          color="primary"
                          variant="primary"
                          sx={{ mt: 3, mb: 2 }}
                          onClick={() => onClick(location.state.url)}
                        >
                          Go To News Site
                        </Button>{" "}
                      </Col>
                      <Link
                        style={{
                          textDecoration: "none",
                          color: "white",
                          width: 1000,
                          paddingLeft: 1000,
                          paddingTop: 100,
                        }}
                        to={{
                          pathname: `/home`,
                        }}
                      >
                        <Button color="primary"> BACK</Button>
                      </Link>
                    </Row>
                  </CardText>
                </CardBody>
              </Card>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
};

export default Detail;
