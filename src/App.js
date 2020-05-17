//DEPENDENCIES
import React from "react";
import Container from "./components/container";
import Col from "./components/col";
import API from "./utils/API";
import "./App.css";

//APP
class App extends React.Component {
  state = { employees: [], search: "" };

  // grab employee data from API.js
  componentDidMount() {
    API.search().then((res) => {
      console.log(res);
      this.setState({
        employees: res.data.results.map((employee, i) => ({
          firstName: employee.name.first,
          lastName: employee.name.last,
          picture: employee.picture.large,
          phone: employee.phone,
          email: employee.email,
          city: employee.location.city,
          key: i,
        })),
      });
    })
    .catch((err) => console.log(err));
  };

  // PREVENT PAGE RELOAD
  refreshPage() {
    window.location.reload(false);
  }

  //EVENT HANDLERS


  //RENDER
  render() {
    return (
      <Container>
        <div className = "container">
          <div className = "row">
            <Col size = "md-3">
              <h2>Employee Directory</h2>
            </Col>
          </div>

          <div className = "row">
            <Col size = "md-12">
              <table className = "table">
                <thead>
                  <tr>
                    <th></th>
                    <th></th>
                    <th></th>
                    <th></th>
                    <th></th>
                    <th></th>
                  </tr>
                </thead>
              </table>
            </Col>
          </div>   
        </div>
    </Container>
    );
  };
};

export default App;
