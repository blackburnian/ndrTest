/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    WebView
} from 'react-native';

import RNFetchBlob from 'react-native-fetch-blob';

let dirs = RNFetchBlob.fs.dirs;

import PDFView from 'react-native-pdf-view';
import QuickLook from 'react-native-quick-look';

export default class ndrTest extends Component {

    state = {
        url: null
    };

    componentDidMount() {

        // test URLs
        const pdfUrl = 'https://www.ets.org/Media/Tests/TOEFL/pdf/SampleQuestions.pdf';
        const videoUrl = 'https://archive.org/download/Pbtestfilemp4videotestmp4/video_test_512kb.mp4';

        RNFetchBlob
            .config({
                path: dirs.DocumentDir + '/test.pdf'
            })
            .fetch('GET', pdfUrl)
            .then((res) => {
                // open the document directly
                // RNFetchBlob.ios.previewDocument(res.path())
                // or show options
                RNFetchBlob.ios.openDocument(res.path());

                // this.setState({
                //    url: res.path()
                // });
            })
    }

    // tried the two below methods, but WebView does not zoom
    // <WebView source={{ uri: this.state.url }} />
    // and PDFView only displays one page
    // <PDFView src={this.state.url} style={{ flex: 1 }}/>

    render() {

        return (
            <View style={{ flex: 1 }}>

            </View>
        );
    }
}

AppRegistry.registerComponent('ndrTest', () => ndrTest);
