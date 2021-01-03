
import Tilt from 'react-tilt'
import './Logo.css'
import face from './facesenselogo.png'

const Logo = () => {
    return (
        <div className="mt0">

            <Tilt className="Tilt br2 shadow-2" options={{ max: 40 }} style={{ height: 100, width: 100 }} >
                <div className="Tilt-inner pa3">
                    <img style={{paddingTop: '5px'}} src={face} alt="logo"/>
                </div>
            </Tilt>
        </div>
    )
}

export default Logo