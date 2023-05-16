import { useTheme, THEME_DARK, THEME_LIGHT } from '../../provaider/Theme'
import { useState } from 'react'
import light from './img/light.png'
import dark from './img/dark.png'
import s from './css/chooseTheme.module.css'

const ButtonForChoose = ({onClick, img}) => {

    return (
        <button className={s.button} onClick={onClick}>
            <img src={img} className={s.img} />
        </button>
    )
}
 

const Choose = () => {

    const isTheme = useTheme();
    const [visibleDark, setVisibleDark] = useState(true);
    const [visibleLight, setVisibleLight] = useState();


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
            img={light}
            />}
            {visibleLight && <ButtonForChoose
            onClick={handleLightChange}
            img={dark}
            />}
        </>
    );
}

export default Choose;