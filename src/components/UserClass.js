import React from "react";

class UserClass extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            count: 0,
        }
        console.log(this.props.name + "Child Constructor")
    }
    componentDidMount() {
        console.log(this.props.name + "Child component mounted")
    }
    render() {
        console.log(this.props.name + "Child render")
        const { count } = this.state;
        return (
            <div>
                <h1>Name: {this.props.name}</h1>
                <h2>Location: {this.props.location}</h2>
                <h3>Count: {count}</h3>
                <button onClick={() => {
                    this.setState({
                        count: count + 1,
                    })
                }}>Click</button>
            </div>
        )
    }
}

export default UserClass;