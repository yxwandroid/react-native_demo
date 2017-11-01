import React, {Component} from 'react'
import {
    AppRegistry,
    Text,
    View,
    StyleSheet
} from 'react-native';

class Blink extends Component {

    constructor(props) {
        super(props);
        this.state = {showText: true};

        setInterval(() => {
            this.setState(previousState => {
                return {
                    showText: !previousState.showText
                };
            });
        })
    }

    render() {

        let display = this.state.showText ? this.props.text : '';
        return (
            <Text>{display}</Text>
        );
    };

}


// noinspection JSAnnotator
export default class BlinkApp extends Component<{}> {
    render() {
        return (
            <View>


                <View style={{width: 50, height: 50, backgroundColor: 'powderblue'}} />
                <View style={{width: 100, height: 100, backgroundColor: 'skyblue'}} />
                <View style={{width: 150, height: 150, backgroundColor: 'steelblue'}} />


                <Text style={styles.bigblue}>wilson1</Text>
                <Text style={styles.red}> wilson2</Text>
                <Text style={[styles.bigblue, styles.red]}>wilson3</Text>
                <Text style={[styles.red, styles.bigblue]}>wilson4</Text>

                <Blink style={styles.bigblue} text='I love to blink'/>
                <Blink style={styles.red} text='Yes blinking is so great'/>
                <Blink style={[styles.bigblue, styles.red]} text='Why did they ever take this out of HTML'/>
                <Blink style={[styles.red, styles.bigblue]} text='Look at me look at me look at me'/>

            </View>
        );
    }
}


const styles = StyleSheet.create({
    bigblue: {
        color: 'blue',
        fontWeight: 'bold',
        fontSize: 30,
    },
    red: {

        color: 'red',

    },

});
// AppRegistry.registerComponent('rnMydemo', () => BlinkApp);
//

