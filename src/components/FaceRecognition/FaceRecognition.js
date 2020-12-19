import './FaceRecognition.css'

const FaceRecognition = ({imageUrl, boxes}) => {

  return (
    <div className="centered">
    
    <div className="absolute mt2">
    {boxes.length > 0  &&
       <p className="white">Total Faces: {boxes.length}</p>
      }
      
      <img src={imageUrl} id="inputImage" alt="" width="400px" height="auto"/> 
      {boxes.map(box => {
        return <div className="bounding-box" style={{top: box.topRow, right: box.rightCol, bottom: box.bottomRow, left: box.leftCol}}></div>
      })
      }
     

    </div>
    </div>
  )
}

export default FaceRecognition