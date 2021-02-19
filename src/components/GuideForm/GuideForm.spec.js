import React from 'react'
import ReactDOM from 'react-dom'
import {BrowserRouter} from 'react-router-dom'
import renderer from 'react-test-renderer'
import TravelersContext from '../../context/TravelersContext'
import GuideForm from './GuideForm'


describe(`GuideForm Component`, () => {
    describe(`Snapshot`, () => {
        it(`renders the UI as expected`, () => {
            const gform = renderer.create(<BrowserRouter>
            <GuideForm /></BrowserRouter>).toJSON()
            expect(gform).toMatchSnapshot()
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
                <BrowserRouter>
                    <TravelersContext.Provider value={value}>
                        <GuideForm />
                    </TravelersContext.Provider>
                </BrowserRouter>,
                div
            )
            ReactDOM.unmountComponentAtNode(div)
        })
    })
})