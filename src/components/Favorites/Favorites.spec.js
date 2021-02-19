import React from 'react'
import ReactDOM from 'react-dom'
import {BrowserRouter} from 'react-router-dom'
import renderer from 'react-test-renderer'
import TravelersContext from '../../context/TravelersContext'
import Favorites from './Favorites'


describe(`Favorites Component`, () => {
    describe(`Snapshot`, () => {
        it(`renders the UI as expected`, () => {
            const fave = renderer.create(<BrowserRouter>
            <Favorites /></BrowserRouter>).toJSON()
            expect(fave).toMatchSnapshot()
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
                    <Favorites />
                </TravelersContext.Provider>,
                div
            )
            ReactDOM.unmountComponentAtNode(div)
        })
    })
})