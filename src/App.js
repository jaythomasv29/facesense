import React, {Component} from 'react'
import Particles from 'react-particles-js'
import './App.css';
import Navigation from './components/Navigation/Navigation'
import Logo from './components/Logo/Logo'
import ImageInputForm from './components/ImageInputForm/ImageInputForm'
import Rank from './components/Rank/Rank'
import FaceRecognition from './components/FaceRecognition/FaceRecognition'
import Clarifai from 'clarifai'

const app = new Clarifai.App({
  apiKey: 'e565fc75ab9f4e1fa80c551dec437ff4'
 });

class App extends Component {
  constructor(){
    super()
    // initialize state
    this.state = {
      input: '',
      imageUrl: '',
      boxes: [],
    }
  }

  generateFaceLocation = (data) => {
    console.log(data)
    const clarifaiFaces = data.outputs[0].data.regions.map(ele => {
      return (this.calculateFaceBox(ele.region_info.bounding_box))
      
    })
    return clarifaiFaces
  } 

  calculateFaceBox = (box) => {
    const image = document.getElementById('inputImage')
    const width = Number(image.width)
    const height = Number(image.height)
      return {
        leftCol: box.left_col * width,
        topRow: box.top_row * height,
        rightCol: width - (box.right_col * width),
        bottomRow: height - (box.bottom_row * height)
      }
  }

  displayFaceBoxes = (boxes) => {
    this.setState({boxes: boxes}) //set state with one or more boxes
    console.log(this.state)
  }

  onInputChange = (event) => {
    this.setState({ input: event.target.value})  // runs this function on each change of the input
  }

  onBtnSubmit = () => {
    this.setState({imageUrl: this.state.input})
    // console.log(this.state)
  
    app.models.predict(Clarifai.FACE_DETECT_MODEL, this.state.input)
      .then(response => this.displayFaceBoxes(this.generateFaceLocation(response))
      .catch(err => console.log(err))
    );
    
  }

  render() {
    return (
      <div className="App"> 
      <Particles className="background" />

        <Navigation />
        <Logo />
        <Rank />
        <ImageInputForm onInputChange={this.onInputChange} onBtnSubmit={this.onBtnSubmit}/>
        <FaceRecognition boxes={this.state.boxes} imageUrl={this.state.imageUrl}/>
      

      </div>
    )
  }

}
export default App;
