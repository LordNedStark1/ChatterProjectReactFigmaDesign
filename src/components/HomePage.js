
import React, { Component } from 'react'
import Homepage from '../styles/HomePage.css'


export class HomePage extends Component {
    constructor(props) {
        super(props);
        this.state = {

        }
    }
    render() {
        return (
            <div>
                <header>
                    <div className={"chatterLogo"}>CHATTER</div>
                    <ul>
                        <li>Home</li>
                        <li>About Us</li>
                        <li>Contact</li>
                        <li>Blogs</li>
                    </ul>
                    <div className={"topButtonDiv"}>
                        <button className={"loginButton"}> Login</button>
                        <button className={"signUpButton"}> Sign Up</button>
                    </div>
                </header>
                <div className={"topImage"}>

                </div>
                <div className={"aboutChatterOuterContainer"}>
                    <div className={"aboutChatterDiv"}>
                        <h1>About Chatter</h1>
                        <p>
                            Chatter is a multi-functional platform where authors and readers can have access to their own content.
                            It aims to be a traditional bookworm’s heaven and a blog to get access to more text based content.
                            Our vision is to foster an inclusive and vibrant community where diversity is celebrated.
                            We encourage open-mindedness and respect for all individuals,
                            regardless of their backgrounds or beliefs. By promoting dialogue and understanding, we strive
                        </p>
                    </div>
                    <img src={"../images/semicolon_picture3.jpg"}/>
                </div>
            </div>
        )
    }
}