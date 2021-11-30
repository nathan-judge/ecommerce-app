import React, { useState, useEffect } from "react";
import styled from "styled-components";
import _ from 'lodash';
import {useTheme} from '../../theme/useTheme';
import { getFromLS } from '../../utils/storage';
import { Link } from "react-router-dom";
import "./theme.scss"

const ThemedButton = styled.button`
    border: 0;
    display: inline-block;
    padding: 12px 24px;
    font-size: 15px;
    border-radius: 4px;
    margin-top: 50px;
    width: 100%;
    cursor: pointer;
    z-index: 5000
`;



const Container = styled.ul`
    display: grid;
    gap: 1rem;
    grid-template-columns: repeat(5, 1fr);
    margin-top: 2rem;
    padding: 10px;
`;



export default (props) => {
    const themesFromStore = getFromLS('all-themes');
    const [data, setData] = useState(themesFromStore.data);
    const [themes, setThemes] = useState([]);
    const {setMode} = useTheme();

    const themeSwitcher = selectedTheme => {
        console.log(selectedTheme);
        setMode(selectedTheme);
        props.setter(selectedTheme);
    };

    useEffect(() => {
        setThemes(_.keys(data));
    }, [data]);

    useEffect(() => {
        props.newTheme &&
            updateThemeCard(props.newTheme);
    }, [props.newTheme])

    const updateThemeCard = theme => {
        const key = _.keys(theme)[0];
        const updated = {...data, [key]:theme[key]};
        setData(updated);
    }

    const ThemeCard = props => {
        return(
            
                <ThemedButton onClick={ (theme) => themeSwitcher(props.theme) }>
                {props.theme.name}
                </ThemedButton>
            
      
        )
    }

    return (
        <div>
            <div>
            <Link to="/admin">
            <h1 className="admintitle">Admin Dashboard</h1>
      </Link>
            </div>
            <Container>
            {
                themes.length > 0 && 
                    themes.map(theme =>(
                        <ThemeCard theme={data[theme]} key={data[theme].id} />
                        
                    ))
                    
            }
            </Container>
            <div className="preview">
            <img src="https://www.macmillandictionary.com/external/slideshow/full/White_full.png"/>
            <img src="https://wallpapercave.com/wp/uSr9bZA.jpg"/>
            <img src="https://livestartpage.com/gallery/themes/c1e217cdc8846e4cf68861d2e3f6c915/poster.png"/>
            <img src="https://cdn.pixabay.com/photo/2020/09/23/19/58/halloween-5596921__340.jpg"/>
            <img src="https://media.istockphoto.com/vectors/canadian-maple-leaf-symbol-seamless-pattern-illustration-vector-id947975882?k=20&m=947975882&s=612x612&w=0&h=YcP-3-aDpeSEjXJRhhuKzjf1Trj53mqG3jqTw8z7S5Q="/>
           
            </div>

        </div>
    )
}