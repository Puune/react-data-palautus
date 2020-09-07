import React, {Component} from 'react'
import {hot} from 'react-hot-loader'

//style
import styles from 'Styles/App.css'

//Components
import Switcher from 'Components/switcher'
import Example from 'Components/ass1_3/htmlin'
import Header from 'Components/filler/header'
import BikesViewer from './components/ass4/bikesViewer'

//Bootstrap
import MyContainer from 'Bootstrap/container'


class App extends Component {
    render(){
        return(
            <MyContainer style={bottomStyle}>
                <div className='styles' style={divStyle}>
                    <Header style={header} title="Palautusprojekti" subtitle="Panu Lindqvist"/>
                    <Switcher style={subBox}>
                        <BikesViewer />                      
                        <Example />
                    </Switcher>
                </div>
            </MyContainer>
        )
    }
}
export default hot(module)(App)

const bottomStyle = {
    margin: '0',
    padding: '0',
    'backgroundColor': "#49525C",
    minWidth: '100%'
}

const header = {
    margin: '50px 0 50px 0',
    alignContent: 'center',
    alignTtems: 'center',
    justifyContent: 'center',
    textAlign: 'center',
}

const divStyle = {
    margin: '10px 10% 10px 10%',
    padding: '0',
    'backgroundColor': '#545E69',
    'color': "white",    
    'minHeight': '100vh'
}

const subBox = {
    'backgroundColor': "#49525C",
    border: '4px solid #3B424A',
    borderRadius: '4px',
    margin: '5 0 0 0 ',
    'minHeight': '100vh',
    minWight: '100%',
    button: {
        marginRight: '8px',
        minWidth: '100px'
    }
}