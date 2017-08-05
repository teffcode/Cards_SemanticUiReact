import React, {Component} from "react";
import { Card, Icon, Image, Container } from "semantic-ui-react";
import "../css/App.css"

class Contacts extends Component{
    render(){

        const {image, name, speciality, description} = this.props;

        return(
            <Card style={{margin: 0}}>
                <Image src = {image} />

                <Card.Content>
                    <Card.Header>
                        {name}
                    </Card.Header>
                    <Card.Meta>
                        <span className='date'>
                            {speciality}
                        </span>
                    </Card.Meta>
                    <Card.Description>
                        {description}
                    </Card.Description>
                </Card.Content>
            </Card>
        );
    }
}

export default Contacts;