import React, { Component } from 'react';

const lightTheme = {
    backgroundColor: '#ffffff',
    color: '#000000',
    buttonBackground: '#000000',
    buttonColor: '#ffffff'
};

const darkTheme = {
    backgroundColor: '#000000',
    color: '#ffffff',
    buttonBackground: '#ffffff',
    buttonColor: '#000000'
};

const styles = (theme) => ({
    container: {
        backgroundColor: theme.backgroundColor,
        color: theme.color,
        height: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        transition: 'background-color 0.3s ease, color 0.3s ease'
    },
    button: {
        padding: '10px 20px',
        fontSize: '16px',
        border: 'none',
        cursor: 'pointer',
        backgroundColor: theme.buttonBackground,
        color: theme.buttonColor,
        borderRadius: '5px',
        transition: 'background-color 0.3s ease, color 0.3s ease'
    }
});

export default class WebSiteDarkMode extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isDarkMode: false,
        };
    }

    toggleTheme = () => {
        this.setState(prevState => ({
            isDarkMode: !prevState.isDarkMode,
        }));
    };

    render() {
        const { isDarkMode } = this.state;
        const theme = isDarkMode ? darkTheme : lightTheme;
        const currentStyles = styles(theme);

        return (
            <div style={currentStyles.container}>
                <button style={currentStyles.button} onClick={this.toggleTheme}>
                    Toggle to {isDarkMode ? 'Light' : 'Dark'} Mode
                </button>
            </div>
        );
    }
}
