import React from "react";
import UserClass from "./UserClass";

class About extends React.Component {
    constructor(props) {
        super(props);
        console.log("Parent Constructor")
    }
    componentDidMount() {
        console.log("Parent component mounted")
    }
    render() {
        console.log("Parent render")
        return (
            <div>
                <h1>Hello </h1>
                <h2>This is about us page</h2>
                <UserClass name={"First"} location={"Vijayawada-4"} />
                <UserClass name={"Second"} location={"Vijayawada-4"} />
                <UserClass name={"Third"} location={"Vijayawada-4"} />
            </div>
        )
    }
}

export default About;