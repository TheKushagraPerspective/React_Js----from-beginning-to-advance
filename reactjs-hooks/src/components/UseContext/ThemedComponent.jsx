import React, { useContext } from 'react';
import { ThemeContext } from '../../App';

const ThemedComponent = () => {
    const { theme, setTheme } = useContext(ThemeContext); // Destructure correctly

    const handleOnThemedBtn = (e) => {
        e.preventDefault();
        setTheme(theme === 'light' ? 'dark' : 'light');
    };

    return (
        <>
            <div
                className="container"
                style={{
                    backgroundColor: theme === 'light' ? 'white' : 'black',
                    color: theme === 'light' ? 'black' : 'white',
                }}
            >
                <h1>Current Theme: {theme}</h1>
                <button onClick={handleOnThemedBtn}>Toggle Theme</button>
            </div>
        </>
    );
};

export default ThemedComponent;
