import React, { Component } from 'react';
import './App.css';

const thisManyElements = 32;

//create a stateless component to represent the boxes that will be rendered
const Box = props => {
  const style = {
    width: '180px',
    height: '180px',
    display: 'inline-block',
    backgroundColor: props.color
  }
  return <div style={style} />
}

class App extends Component {
  constructor(props) {
    super(props);
    // make an array, fill it, and change each element to have a randomColor
    const boxes = Array(thisManyElements).fill().map(this.randomColor, this);
    //set state to be the boxes array
    this.state = {boxes};

    //a random box should change to a random color every 300ms
    setInterval(() => {
      const boxes = this.state.boxes.slice(); //within the setInterval function, "boxes" will refer to a copy of the App's boxes array
      const randIndex = Math.floor(Math.random() * boxes.length); //select a random index
      boxes[randIndex] = this.randomColor(); //change the value at the random index to a new, randomColor
      this.setState({boxes}); //setState of the Component to be our altered copy of the boxes array.
    }, 300);
  }

  // select a random color from props
  randomColor() {
    let myColor = Math.floor(Math.random() * this.props.allColors.length);
    return this.props.allColors[myColor];
  }

  render() {
    //loop over the boxes array and make a JSX element setting each color
    const boxes = this.state.boxes.map((color, index) => ( 
      <Box key={index} color={color} /> // the 'color' property will be set to the value of map's color parameter
    ));
    return (
      <div className="App">
        {boxes}
      </div>
    );
  }
}



App.defaultProps = {
  allColors: ["AliceBlue", "AntiqueWhite", "Aqua", "Aquamarine", "Azure", "Beige", "Bisque", "Black", "BlanchedAlmond",
    "Blue", "BlueViolet", "Brown", "BurlyWood", "CadetBlue", "Chartreuse", "Chocolate",
    "Coral", "CornflowerBlue", "Cornsilk", "Crimson", "Cyan", "DarkBlue", "DarkCyan", "DarkGoldenRod",
    "DarkGray", "DarkGrey", "DarkGreen", "DarkKhaki", "DarkMagenta", "DarkOliveGreen", "Darkorange",
    "DarkOrchid", "DarkRed", "DarkSalmon", "DarkSeaGreen", "DarkSlateBlue", "DarkSlateGray", "DarkSlateGrey",
    "DarkTurquoise", "DarkViolet", "DeepPink", "DeepSkyBlue", "DimGray", "DimGrey", "DodgerBlue",
    "FireBrick", "FloralWhite", "ForestGreen", "Fuchsia", "Gainsboro", "GhostWhite", "Gold", "GoldenRod",
    "Gray", "Grey", "Green", "GreenYellow", "HoneyDew", "HotPink", "IndianRed", "Indigo", "Ivory", "Khaki",
    "Lavender", "LavenderBlush", "LawnGreen", "LemonChiffon", "LightBlue", "LightCoral", "LightCyan",
    "LightGoldenRodYellow", "LightGray", "LightGrey", "LightGreen", "LightPink", "LightSalmon",
    "LightSeaGreen", "LightSkyBlue", "LightSlateGray", "LightSlateGrey", "LightSteelBlue", "LightYellow",
    "Lime", "LimeGreen", "Linen", "Magenta", "Maroon", "MediumAquaMarine", "MediumBlue", "MediumOrchid",
    "MediumPurple", "MediumSeaGreen", "MediumSlateBlue", "MediumSpringGreen", "MediumTurquoise",
    "MediumVioletRed", "MidnightBlue", "MintCream", "MistyRose", "Moccasin", "NavajoWhite", "Navy",
    "OldLace", "Olive", "OliveDrab", "Orange", "OrangeRed", "Orchid", "PaleGoldenRod", "PaleGreen",
    "PaleTurquoise", "PaleVioletRed", "PapayaWhip", "PeachPuff", "Peru", "Pink", "Plum", "PowderBlue",
    "Purple", "Red", "RosyBrown", "RoyalBlue", "SaddleBrown", "Salmon", "SandyBrown", "SeaGreen",
    "SeaShell", "Sienna", "Silver", "SkyBlue", "SlateBlue", "SlateGray", "SlateGrey", "Snow", "SpringGreen",
    "SteelBlue", "Tan", "Teal", "Thistle", "Tomato", "Turquoise", "Violet", "Wheat", "White", "WhiteSmoke",
    "Yellow", "YellowGreen"]
};

export default App;
