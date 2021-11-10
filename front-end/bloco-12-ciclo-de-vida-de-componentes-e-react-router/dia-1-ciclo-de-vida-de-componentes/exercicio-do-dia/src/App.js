import React from "react";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: ""
    };
    this.fetchDog = this.fetchDog.bind(this);
  }  

  async fetchDog() {
    const request = await fetch("https://dog.ceo/api/breeds/image/random")
    const requestObj = await request.json()
    this.setState({
      data: requestObj
    })
  }  

  componentDidMount() {
    this.fetchDog();
  }  

  render() {
    const { data } = this.state;
    const textLoading = 'loading...';
    if (data === '') return textLoading;
    return (      
      <div>
        <button onClick={this.fetchDog}>Novo doguinho!</button>
        <div>
          <img src={data.message} alt="Random dog"/>
        </div>
      </div>
    );
  }
}

export default App;