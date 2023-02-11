import React from "react";
import '../stylesheets/components/header.sass';
import { ReactComponent as LogoSvg } from '../../assets/Logotipo.svg';

export default () => {
    return(
        <div id='logo-area'>
            <LogoSvg />
        </div>
    );
}