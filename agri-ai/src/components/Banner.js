import { Button } from '@material-ui/core'
import React from 'react'
import { useHistory } from 'react-router'
import "../styles/Banner.css"

function Banner() {

    let history = useHistory()

    const cropRedirect = () => {
        history.push("/crop")
    }

    const fertRedirect = () => {
        history.push("/fertilizer")
    }
    
    return (
        <div className="banner">
            <div className="banner__title">
                <div className="banner__title_head">
                    Agri<font>AI</font>
                </div>
                <div className="banner__title_tail">
                    <div className="typing">A Machine Learning based Web Application for Crop Recommendation</div>
                    <div className="banner__buttons">
                        <Button onClick={cropRedirect} className="banner__button cropButton">Crop Recommender</Button>
                       /* <Button onClick={fertRedirect} className="banner__button fertilizerButton">Fertilizer Recommender</Button>*/
                    </div>

                </div>
            </div>
        </div>
    )
}

export default Banner