import React from 'react'
import { BrowserRouter, Route, Link } from 'react-router-dom'

import { StreamCreate, StreamDelete, StreamEdit, StreamList, StreamShow } from './streams'

import { Header } from './common'
import { useSelector } from 'react-redux'

const App: React.FC = () => {

    console.log(useSelector(state => state));
    

    return (
        <div>
            <BrowserRouter>
                <Header />
                <div>
                    <Route path='/' exact component={StreamList} />
                    <Route path='/streams/new' component={StreamCreate} />
                    <Route path='/streams/edit' component={StreamEdit} />
                    <Route path='/streams/delete' component={StreamDelete} />
                    <Route path='/streams/show' component={StreamShow} />
                </div>
            </BrowserRouter>
        </div>
    )
}

export default App
