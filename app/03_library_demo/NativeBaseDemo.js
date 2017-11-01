import React, {Component} from 'react';
import {Container, Button, Text} from 'native-base';

// noinspection JSAnnotator
export default class NativeBaseDemo extends Component<{}> {

    render() {
        return (
            <Container>
                <Button>
                    <Text>
                        Button
                    </Text>
                </Button>
            </Container>
        );
    };
}
