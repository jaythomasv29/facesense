import React from 'react'

const ImageInputForm = ({ onInputChange, onBtnSubmit}) => {
  return (
    <div>
      <div className="shadow-5 pa4  w-70" style={{marginRight: "auto", marginLeft: "auto"}}>
        <p className="f3 white">
          {"Facesense detects faces in your pictures. Feel free to try!"}
        </p>
        <p className="i white">Copy and paste this image into the form to make it easier: <br/>
        https://bit.ly/2Kzax6h
         </p>

        <div className="centered">
          <div className="pa-4 br3 centered shadow-5">
            <input onChange={onInputChange} 
              className="f4 pa2 w-70 centered" 
              type="search"
              placeholder="image url here"

            />
            <button 
            onClick={onBtnSubmit}
            className="grow f4 link ph3 pv2 dib white bg-light-purple">Detect</button>
          </div>
        </div>
      </div>
    </div>
  )
}


export default ImageInputForm