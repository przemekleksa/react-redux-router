import React, { Component } from 'react'
import { connect } from 'react-redux'

export class Post extends Component {
    
    render() {
        const post = this.state.post ? ( 
            <div className="post">
                <h4 className="center">
                    {this.state.post.title}
                </h4>
                <p>{this.state.post.body}</p>
            </div>
        ) : (
            <div className="center">
                Loading post...
            </div>
        )

        return (
            <div className="container">
                {post}
            </div>
        )
       
    }
}

export default connect()(Post)
