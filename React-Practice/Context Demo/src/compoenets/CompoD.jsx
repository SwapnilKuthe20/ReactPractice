import React, { useContext } from 'react';
import { SettingsContext } from '../Context/settingsContext';

const CompoD = () => {


    const { theme, language } = useContext(SettingsContext)

    return (
        <div>
            <h1> Compo D </h1>

            <p> Theme : {theme} </p>
            <p> Language : {language} </p>
        </div>
    );
}

export default CompoD;
