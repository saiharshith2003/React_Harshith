import React from "react";
import UserClass from "./UserClass";

class About extends React.Component {
    constructor(props) {
        super(props);
        console.log("Parent Constructor")
        this.state = {
            count: 1,
        }
    }


    componentDidMount() {
        console.log("Parent component mounted")
    }
    componentWillUnmount() {
        alert("Hi");
    }
    shouldComponentUpdate() {
        console.log("Count about to be increments");
        return true
    }
    componentDidUpdate() {
        alert("Count incremented")
    }
    render() {
        console.log("Parent render")
        return (
            <div>
                <h1>Hello </h1>
                <h2>This is about us page</h2>
                <h1>Count: {this.state.count}</h1>
                <button onClick={() => {
                    this.setState({
                        count: this.state.count + 1,
                    })
                }}>Increment</button>
                {/* <UserClass name={"First"} location={"Vijayawada-4"} />
                <UserClass name={"Second"} location={"Vijayawada-4"} />
                <UserClass name={"Third"} location={"Vijayawada-4"} /> */}
            </div>
        )
    }
}

export default About;