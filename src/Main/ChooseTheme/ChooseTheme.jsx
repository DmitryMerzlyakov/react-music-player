import { useTheme, THEME_DARK, THEME_LIGHT } from '../../provaider/Theme'
import { useState } from 'react'
import light from './img/light.png'
import dark from './img/dark.png'

const ButtonForChoose = ({onClick, img}) => {

    return (
        <img src={img} onClick={onClick}/>
    )
}
 

const Choose = () => {

    const isTheme = useTheme();
    const [visibleDark, setVisibleDark] = useState();
    const [visibleLight, setVisibleLight] = useState(true);


    const handleDarkChange = () => {
        setVisibleLight(true)
        isTheme.change(THEME_DARK)
        setVisibleDark()
    }

    const handleLightChange = () => {
        setVisibleDark(true)
        isTheme.change(THEME_LIGHT)
        setVisibleLight()
    }

    return (
        <>  
            {visibleDark && <ButtonForChoose
            onClick={handleDarkChange}
            img={dark}
            />}
            {visibleLight && <ButtonForChoose
            onClick={handleLightChange}
            img={light}
            />}
        </>
    );
}

export default Choose;