import React, { Component } from 'react'

export default class CoursesPage extends Component {
    constructor(props) {
        super(props)
        this.state = {
            course: {
                title: ""
            }
        }
    }
    render() {
        return (
            <div>
                <h3>Courses page</h3>
            </div>
        )
    }
}
