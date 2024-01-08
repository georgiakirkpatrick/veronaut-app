import React from 'react'
import ReactDOM from 'react-dom'
import renderer from 'react-test-renderer'
import { BrowserRouter as Router } from 'react-router-dom'
import Login from './Login'
import { handleLoginSubmit } from './Login'

describe ('Login', () => {
    it ('renders without crashing', () => {
        const div = document.createElement('div')
        ReactDOM.render(<Router><Login /></Router>, div)
        ReactDOM.unmountComponentAtNode(div)
    })

    it('renders the UI as expected', () => {
        const tree = renderer
            .create(<Router><Login /></Router>)
            .toJSON()
        expect(tree).toMatchSnapshot()    
    })

    // it('checks that all required fields are supplied', () => {
    //     const loginEmail = 'test@email.com'
    //     const loginPassword = 'testpassword'

    //     handleLoginSubmit()
    // })
})