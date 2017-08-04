import React, { Component } from "react";
import { Segment, Divider  } from "semantic-ui-react";
import Contacts from "./Contacts.js";
import "../css/App.css";

class App extends Component{


    render(){

        const list = [
            {
                image: "https://react.semantic-ui.com/assets/images/avatar/large/matthew.png", 
                name: "Pepe",
                speciality: "Software Development",
                description: "The new technologies are my pasion !"
            },
            {
                image: "https://react.semantic-ui.com/assets/images/avatar/large/molly.png",
                name: "Bibi",
                speciality: "Telecomunications",
                description: "Inlove of electronics world :)"
            },
            {
                image: "https://react.semantic-ui.com/assets/images/avatar/large/elliot.jpg",
                name: "Dany",
                speciality: "Architect",
                description: "I love doing things well !"
            }
        ]

        return(
            <div>
            
            <Segment inverted>
                <Divider inverted />
                <Divider horizontal inverted>There're my Friends</Divider>
            </Segment>

            {
                list.map( item => (
                    <Contacts 
                        image = {item.image}
                        name = { item.name } 
                        speciality = { item.speciality }
                        description = { item.description} 
                    />
                ))
            }

            </div>
        );
    }
}

export default App;