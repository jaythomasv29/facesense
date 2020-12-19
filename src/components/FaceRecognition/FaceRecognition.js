import './FaceRecognition.css'

const FaceRecognition = ({imageUrl, boxes}) => {

  return (
    <div className="centered ma">
    <div className="absolute mt2">
      <img src={imageUrl} id="inputImage" alt="" width="400px" height="auto"/> 
      {boxes.map(box => {
        return <div className="bounding-box" style={{top: box.topRow, right: box.rightCol, bottom: box.bottomRow, left: box.leftCol}}></div>
      })
      }
      <p>Total faces{boxes.length}</p>

    </div>
    </div>
  )
}

export default FaceRecognition