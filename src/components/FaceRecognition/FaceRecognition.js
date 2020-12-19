import './FaceRecognition.css'

const FaceRecognition = ({imageUrl, boxes}) => {
console.log(boxes)
  return (
    <div className="centered">
    
    <div className="absolute mt0">
      
      <img src={imageUrl} id="inputImage" alt="" width="400px" height="auto"/> 
      {boxes.map((box, idx) => {
        return <div className="bounding-box" style={{top: box.topRow, right: box.rightCol, bottom: box.bottomRow, left: box.leftCol}}>
        <span className="white b">{idx + 1}</span></div>
      })
      }

    </div>
 
    </div>
  )
}

export default FaceRecognition