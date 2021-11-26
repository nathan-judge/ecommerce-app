import React, { useState, useEffect } from "react";
import styled from "styled-components";
import _ from 'lodash';
import {useTheme} from '../../theme/useTheme';
import { getFromLS } from '../../utils/storage';

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
    margin-top: 3rem;
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
            
            <Container>
            {
                themes.length > 0 && 
                    themes.map(theme =>(
                        <ThemeCard theme={data[theme]} key={data[theme].id} />
                    ))
            }
            </Container>
        </div>
    )
}