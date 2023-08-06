import React from "react";
import { Text, View } from "react-native";

class ClassView extends React.Component {

    constructor(props) {
        super(props);
        // chapter 6.5
        // console.log("constructor ...");

        // chapter 6.5
        // const { name, age, level, sex } = props;
        // console.log(`name=${name}, age=${age}, level=${level}, sex=${sex}`);
        this.state = {
            address: "江苏省南京市",
        }
    }
    
    componentDidMount() {
        // chapter 6.5
        // console.log("componentDidMount ...");
        setTimeout(() => {
            this.setState({
                address: "浙江省杭州市",
            });
        }, 2000);
    }

    componentWillUnmount() {
        // chapter 6.5
        // console.log("componentWillUnmount ...");
    }

    render() {
        // chapter 6.5
        // console.log("render ...");
        const { name, age, level, sex } = this.props;
        const { address } = this.state;
        return (
            <View style={{ width: "100%", height: 200, backgroundColor: "#00bcd4"}} >
                <Text style={{ fontSize: 20, color: "white"}}>
                    {`name=${name}, age=${age}, level=${level}, sex=${sex}`}
                </Text>
                <Text style={{ fontSize: 20, color: "black"}}>
                    {address}
                </Text>
            </View>
        );
    }
}

export default ClassView;