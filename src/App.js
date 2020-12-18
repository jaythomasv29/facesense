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
      imageUrl: ''
    }
  }

  onInputChange = (event) => {
    this.setState({ input: event.target.value})  // runs this function on each change of the input
  }

  onBtnSubmit = () => {
    this.setState({imageUrl: this.state.input})
    console.log(this.state)
  
    app.models.predict(Clarifai.FACE_DETECT_MODEL, this.state.input).then(
      function(response) {
        // do something with response
        response.outputs[0].data.regions.forEach(ele => console.log(ele.region_info.bounding_box))
        
      },
      function(err) {
        // there was an error
      }
    );
    // console.log('click')
  }

  render() {
    return (
      <div className="App"> 
      <Particles className="background" />

        <Navigation />
        <Logo />
        <Rank />
        <ImageInputForm onInputChange={this.onInputChange} onBtnSubmit={this.onBtnSubmit}/>
        <FaceRecognition imageUrl={this.state.imageUrl}/>
      

      </div>
    )
  }

}
export default App;
