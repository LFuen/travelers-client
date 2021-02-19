import React from 'react'
import ReactDOM from 'react-dom'
import {BrowserRouter} from 'react-router-dom'
import renderer from 'react-test-renderer'
import TravelersContext from '../../context/TravelersContext'
import Heading from './Heading'


describe(`Heading Component`, () => {
    describe(`Snapshot`, () => {
        it(`renders the UI as expected`, () => {
            const heading = renderer.create(<BrowserRouter>
            <Heading /></BrowserRouter>).toJSON()
            expect(heading).toMatchSnapshot()
        })
    })

    describe(`Smoke test`, () => {
        it(`Renders without crashing`, () => {
            const div = document.createElement('div')

            const value = {
                guides: 'string',
                users: 'string',
                addUser: 'string',
                updateUser: 'string',
                deleteUser: 'string',
                addGuide: 'string',
                updateGuide: 'string',
                delteGuide: 'string'
            }

            ReactDOM.render(
                <TravelersContext.Provider value={value}>
                    <Heading />
                </TravelersContext.Provider>,
                div
            )
            ReactDOM.unmountComponentAtNode(div)
        })
    })
})