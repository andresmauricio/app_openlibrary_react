import React from "react";

class TableRows extends React.Component {
  render() {
    return (
      <React.Fragment>
        {this.props.data.map((value, i) => {
          return (
            <tr key={i}>
              <td>{value.when}</td>
              <td>{value.who}</td>
              <td>{value.description}</td>
            </tr>
          );
        })}
      </React.Fragment>
    );
  }
}

class App extends React.Component {
  constructor() {
    super();
    this.state = { data: [] };
    this.mappingData = this.mappingData.bind(this);
  }

  componentDidMount() {
    this.getData();
  }

  async getData() {
    const url = "https://openlibrary.org/recentchanges.json?limit=10";
    const response = await fetch(url);
    const data = await response.json();
    const mappingData = this.mappingData(data);
    this.setState({ data: mappingData });
  }

  getDataWithThens() {
    const url = "https://openlibrary.org/recentchanges.json?limit=10";
    fetch(url).then(response => {
      response.json().then(data => {
        const resutado = this.mappingData(data);
        this.setState({ data: resutado });
      });
    });
  }

  mappingData(data) {
    return data.map((value, i) => {
      return {
        who: value.author.key,
        description: value.comment,
        when: value.timestamp
      };
    });
  }

  render() {
    return (
      <div className="container p-4">
        <h1>{this.props.title}</h1>
        <table className="table">
          <thead>
            <tr>
              {this.props.headings.map((heading, i) => {
                return <th key={i}>{heading}</th>;
              })}
            </tr>
          </thead>
          <tbody>
            <TableRows data={this.state.data} />
          </tbody>
        </table>
      </div>
    );
  }
}

export default App;
