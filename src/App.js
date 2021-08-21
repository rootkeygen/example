import React from "react";
import Image from "./Image";

class App extends React.Component {
  state = {
    img: "http://via.placeholder.com/1920x1200"
  };
  componentDidMount() {
    // eslint-disable-next-line
    this.setState({
      img: "https://res.cloudinary.com/luxuryp/image/upload/work-24_1_tu4ujr"
    });
  }
  render() {
    return <Image img={this.state.img} position="left" preserveRatio={false} />;
  }
}

export default App;
