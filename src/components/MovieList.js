import React from "react";
import {
  Card,
  CardBody,
  CardTitle,
  CardSubtitle,
  CardText,
  Col,
} from "reactstrap";
import { Link } from "react-router-dom";

const MovieList = ({ data }) => {
  return data.map((item, index) => (
    <Col sm={3} style={{ paddingTop: 30 }} key={index}>
      <Link
        to={`/home/detail/${item.title}`}
        style={{
          textDecoration: "none",
        }}
        state={{
          title: item.title,
          imgUrl: item.imageUrl,
          newsSite: item.newsSite,
          summary: item.summary,
          publishedAt: item.publishedAt,
          updatedAt: item.updatedAt,
          url: item.url,
        }}
      >
        <Card
          style={{
            width: "18rem",
            height: "25rem",
            paddingTop: 10,
            paddingRight: 10,
            paddingLeft: 10,
            paddingBottom: 10,
            borderRadius: 10,
            gridGab: 100,
            background: "linear-gradient(to bottom, #99ccff 0%, #66ffff 100%)",
          }}
          key={index}
        >
          <img
            alt="e"
            src={`${item.imageUrl}`}
            style={{ maxWidth: "100%", height: 200 }}
          />
          <CardBody
            style={{
              background:
                "linear-gradient(180deg, rgba(2,0,36,1) 0%, rgba(6,186,213,1) 0%, rgba(0,239,255,1) 100%)",
            }}
          >
            <CardTitle tag="h5">{item.title}</CardTitle>
            <CardSubtitle className="mb-2 text-muted" tag="h6"></CardSubtitle>
            <CardText>{item.plot}</CardText>
          </CardBody>
          <h3>{item.newsSite}</h3>
        </Card>
      </Link>
    </Col>
  ));
};

export default MovieList;
