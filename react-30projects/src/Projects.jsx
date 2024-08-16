import React, { Component } from "react";
import WeatherApp from "./Components/WeatherApp";
import TodoList from "./Components/TodoLIst";
import GeneratePassword from "./Components/GeneratePassword";
import Notepad from "./Components/NotePad";
import QuizApp from "./Components/QuizApp";
import AgeCalculator from "./Components/AgeCalculator";
import QuoteGenerator from "./Components/QuoteGenerator";
import QRCodeGenerator from "./Components/QRCodeGenerator";
import ToastNotification from "./Components/TostNotification";
import MusicPlayer from "./Components/MusicPlayer";
import StopWatch from "./Components/StopWatch";

export default class Projects extends Component {
    constructor(props) {
        super(props);

        this.state = {
            Projects: [

                { name: "Weather App", value: "WeatherApp" },
                { name: "Todo list", value: "TodoList" },
                { name: "Quiz-App", value: "QuizApp" },
                { name: "GeneratePassword", value: "GeneratePassword" },
                { name: "Notepad", value: "Notepad" },
                { name: "Age-Calculator", value: "AgeCalculator" },
                { name: "Quote_Generator", value: "QuoteGenerator" },
                { name: "QRCode_Generator", value: "QRCodeGenerator" },
                { name: "Tost-Notification", value: "TostNotification" },
                { name: "Music_Player", value: "MusicPlayer" },
                { name: "StopWatch", value: "StopWatch" },
                // { name: "Calculator", value: "Calculator" },
                // { name: "PopUp", value: "PopUp" },
                // { name: "Password-Toggle", value: "PasswordToggle" },
                // { name: "WebSiteDarkMode", value: "WebSiteDarkMode" },
                // { name: "Validation", value: "Validation" },
                // { name: "Image Gallery", value: "ImageGallery" },
                // { name: "Email List", value: "EmailList" },
                // { name: "Password Strength", value: "PasswordStrength" },
                // { name: "Text to Voice", value: "TextToVoice" },
                // { name: "Website Coming Soon", value: "WebsiteComingSoon" },
                // { name: "BackGround Change", value: "BackGroundChange" },
                // { name: "Simple Calendar", value: "SimpleCalendar" },
                // { name: "Drop-Down", value: "DropDown" },
                // { name: "CircularProgressBar", value: "CircularProgressBar" },
                // { name: "Product Page Design", value: "ProductPageDesign" },
                // { name: "Crypto Currency", value: "CryptoCurrency" },
                // { name: "Digital Clock", value: "DigitalClock" },
                // { name: "Drag & Drop", value: "DragAndDrop" },
                // { name: "Image search Engine", value: "ImageSearchEngine" }
            ],
            selectedProject: "",
        };
    }
    handleChange = (e) => {
        console.log(e.target.value);
        const newStateObject = { ...this.state };
        newStateObject.selectedProject = e.target.value;
        this.setState(newStateObject);
    };

    showSelectedComponent = () => {
        switch (this.state.selectedProject) {
            case "WeatherApp":
                return <WeatherApp />;
            case "TodoList":
                return <TodoList />;
            case "QuizApp":
                return <QuizApp />;
            case "GeneratePassword":
                return <GeneratePassword />;
            case "Notepad":
                return <Notepad />;
            case "AgeCalculator":
                return <AgeCalculator />;
            case "QuoteGenerator":
                return <QuoteGenerator />;
            case "QRCodeGenerator":
                return <QRCodeGenerator />;
            case "TostNotification":
                return <ToastNotification />;
            case "MusicPlayer":
                return <MusicPlayer />;
            case "StopWatch":
                return <StopWatch />;
            // case "WeatherApp":
            //     return <WeatherApp />;
            // case "WeatherApp":
            //     return <WeatherApp />;
        }

        // if(this.state.selectedProject === "WeatherApp"){
        //     return <WeatherApp/>
        // }
        // if(this.state.selectedProject === "TodoList"){
        //     return <TodoList/>
        // }
        // if(this.state.selectedProject === "QuizApp"){
        //     return <WeatherApp/>
        // }
        // if(this.state.selectedProject === "GeneratePassword"){
        //     return <GeneratePassword/>
        // }
        // if(this.state.selectedProject === "Notepad"){
        //     return <Notepad/>
        // }


    };
    render() {
        return (
            <div className="container">
                <form action="">
                    <select className="form-select" onChange={this.handleChange}>
                        <option selected>Select a Project</option>
                        {this.state.Projects.map((prj) => (<option value={prj.value}>{prj.name}</option>))}

                    </select>
                </form>
                {this.showSelectedComponent()}

            </div>
        );
    }
}