import React from 'react'
import { Router, Route, Link } from 'react-router-dom'

import { StreamCreate, StreamDelete, StreamEdit, StreamList, StreamShow } from './streams'

import { Header } from './common'

import history from '../utils/history'

const App: React.FC = () => {    

    return (
        <div>
            <Router history={history}>
                <Header />
                <div>
                    <Route path='/' exact component={StreamList} />
                    <Route path='/streams/new' component={StreamCreate} />
                    <Route path='/streams/edit/:id' component={StreamEdit} />
                    <Route path='/streams/delete/:id' component={StreamDelete} />
                    <Route path='/streams/show' component={StreamShow} />
                </div>
            </Router>
        </div>
    )
}

export default App
