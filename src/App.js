import { Footer } from "./components/Footer";
import MovieList from "./components/MovieList";
import axios from "axios";
import Swal from "sweetalert2";
import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container } from "@mui/system";
import { Row, Input, Col } from "reactstrap";
import NavBar from "./components/Navbar";
import "./App.css";
import { Button } from "reactstrap";
export default class App extends Component {
  constructor() {
    super();

    this.state = {
      data: [],
      count: 10,
      search: "",
    };
  }
  async loginLocalStorage() {
    await axios
      .create({
        timeout: 20000,
      })

      .get("https://api.spaceflightnewsapi.net/v3/articles?_limit=10")

      .then((res) => {
        const options = Object.values(res.data);

        console.log(res.data);
        this.setState({
          data: options,
        });
      })

      .catch((err) => {
        Swal.fire({
          title: "Something went wrong, please try again later!",

          text: `${err}`,

          icon: "error",

          confirmButtonColor: "#0080BB",
        });
      });
  }

  async search(i) {
    await axios
      .create({
        timeout: 20000,
      })

      .get(
        `https://api.spaceflightnewsapi.net/v3/articles?title_contains=${i.target.value}`
      )

      .then((res) => {
        const options = Object.values(res.data);
        console.log(res);
        this.setState({
          data: options,
        });
      })

      .catch((err) => {
        Swal.fire({
          title: "Something went wrong, please try again later!",

          text: `${err}`,

          icon: "error",

          confirmButtonColor: "#0080BB",
        });
      });
  }
  async filterCount(i) {
    console.log(i.target.value);
    await axios
      .create({
        timeout: 20000,
      })

      .get(
        `https://api.spaceflightnewsapi.net/v3/articles?_limit=${i.target.value}`
      )

      .then((res) => {
        const options = Object.values(res.data);
        console.log(res);
        this.setState({
          data: options,
          search: "",
          count: i.target.value,
        });
      })

      .catch((err) => {
        Swal.fire({
          title: "Something went wrong, please try again later!",

          text: `${err}`,

          icon: "error",

          confirmButtonColor: "#0080BB",
        });
      });
  }

  async filterButton(i) {
    console.log(i);
    await axios
      .create({
        timeout: 20000,
      })

      .get(
        `https://api.spaceflightnewsapi.net/v3/articles?url_contains=${i}&_limit=${this.state.count}`
      )

      .then((res) => {
        const options = Object.values(res.data);
        console.log(res);
        this.setState({
          data: options,
          search: "",
        });
      })

      .catch((err) => {
        Swal.fire({
          title: "Something went wrong, please try again later!",

          text: `${err}`,

          icon: "error",

          confirmButtonColor: "#0080BB",
        });
      });
  }
  componentDidMount() {
    this.loginLocalStorage();
  }
  handleChange(i) {
    this.setState({
      count: i,
    });
  }
  render() {
    console.log(this.state.title, "<<<<<");
    return (
      <>
        <NavBar />

        <div style={{ background: "black" }}>
          {/* <Home /> */}
          <Container style={{ paddingTop: 20 }}>
            <Input
              bsSize="lg"
              placeholder="Search News...."
              onChange={(i) => this.search(i)}
            />
            <Row style={{ paddingTop: 10 }}>
              <Col>
                <h2 style={{ color: "white", textAlign: "center" }}>
                  Filter Count
                </h2>
                <Input
                  id="exampleSelect"
                  name="select"
                  type="select"
                  onChange={(i) => this.filterCount(i)}
                >
                  <option>10</option>
                  <option>20</option>
                  <option>30</option>
                  <option>40</option>
                  <option>50</option>
                </Input>
                <Row style={{ paddingTop: 10 }}>
                  <Col sm={3}>
                    <Button
                      color="primary"
                      onClick={() => this.filterButton("http://www.nasa.gov")}
                    >
                      <img
                        style={{ maxWidth: "100%", height: 200 }}
                        src={
                          "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e5/NASA_logo.svg/2449px-NASA_logo.svg.png"
                        }
                        alt="nasa"
                      />
                    </Button>
                  </Col>
                  <Col sm={3}>
                    <Button
                      color="primary"
                      onClick={() => this.filterButton("https://spacenews.com")}
                    >
                      <img
                        style={{ maxWidth: "100%", height: 200 }}
                        src={
                          "https://spacenews.com/wp-content/uploads/2014/12/sn-social.jpg"
                        }
                        alt="spacenews"
                      />
                    </Button>
                  </Col>
                  <Col sm={3}>
                    <Button
                      color="primary"
                      onClick={() =>
                        this.filterButton("https://www.teslarati.com")
                      }
                    >
                      <img
                        style={{ maxWidth: "100%", height: 200 }}
                        src={
                          "https://images-na.ssl-images-amazon.com/images/I/61wEmjQ1e7L.png"
                        }
                        alt="teslas"
                      />
                    </Button>
                  </Col>
                  <Col sm={3}>
                    <Button
                      color="primary"
                      onClick={() =>
                        this.filterButton("https://www.nasaspaceflight.com/")
                      }
                    >
                      <img
                        style={{ maxWidth: "100%", height: 200 }}
                        src={
                          "https://upload.wikimedia.org/wikipedia/commons/thumb/5/52/NASASpaceFlight.com_Logo.svg/2560px-NASASpaceFlight.com_Logo.svg.png"
                        }
                        alt="nasasspace"
                      />
                    </Button>
                  </Col>
                </Row>
              </Col>
            </Row>
            <Row>
              <MovieList
                data={this.state.data}
                title={this.state.title}
                imgUrl={this.state.imgUrl}
              />
            </Row>
          </Container>
          <Footer />
        </div>
      </>
    );
  }
}
