import React, { Component } from 'react'
import {
  View,
  Text,
  Image,
  StyleSheet,
  Linking
} from 'react-native'
import { connect } from 'react-redux'

import { AndroidWhiteBar, TaskSuccessButton, TextButton } from 'components/index'
import { TaskImg } from 'images/index'

export default class Success extends Component{
  linking () {
    Linking.openURL('https://h5.youzan.com/v2/showcase/homepage?alias=i58fd2xq')
  }

  render () {
    return (
      <View style={ styles.container }>
        <AndroidWhiteBar />
        <View style={ styles.main }>
          <View style={ styles.imageBox }>
            <Image
              source={ TaskImg.Success }
              resizeMode="cover"
            />
            <Text style={ styles.success }>绑定成功</Text>
            <Text style={ styles.title }>唾液采集器编号</Text>
            <Text style={ styles.scode }>{ this.props.text }</Text>
            <Text style={ styles.title }>已增加{ this.props.power }算力</Text>
          </View>
          <TextButton
            textStyle={ styles.baseInfoTextButton }
            location="center"
            triggerClick={ () => this.linking() }
          >
            想要更多？
            上基因商城看看-->
          </TextButton>
        </View>
        <TaskSuccessButton />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F9FAFC',
    paddingLeft: 20,
    paddingRight: 20,
    paddingTop: 15
  },
  main: {
    backgroundColor: '#FFF',
    borderRadius: 16,
    padding: 30
  },
  imageBox: {
    alignItems: 'center',
    paddingTop: 25,
    paddingBottom: 20
  },
  buttonsBox: {
    paddingTop: 40,
    paddingBottom: 40,
    alignItems: 'center'
  },
  disableButton: {
    borderColor: '#2AC8D9',
    borderWidth: .3,
    borderRadius: 44,
    width: 300,
    height: 44,
    justifyContent: 'center',
    alignItems: 'center'
  },
  disableText: {
    fontSize: 15,
    color: '#40B1FF'
  },
  success: {
    fontSize: 26,
    color: '#40B1FF',
    marginBottom: 50,
    marginTop: 14
  },
  scode: {
    fontSize: 20,
    color: '#40B1FF',
    marginBottom: 20
  },
  title: {
    fontSize: 16,
    color: '#474B5C',
    marginBottom: 10
  },
  conbter:{
    fontSize: 16,
    color:'#40B1FF',
    marginTop: 30
  },
  baseInfoTextButton: {
    fontSize: 16,
    color:'#40B1FF',
    borderWidth: .3,
    borderColor: '#4A90E2',
    borderRadius: 10,
    paddingTop: 5,
    paddingRight: 20,
    paddingBottom: 5,
    paddingLeft: 20
  }
})
