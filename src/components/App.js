import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import RenderStaticList from './RenderStaticList';
import { getPosts, getTodos } from '../actions';
import { connect } from 'react-redux';

class App extends Component {

    state = { show: null }

    callPosts = () => {
        this.props.getPosts();
        this.setState({show : 'POSTS'})
    }
    callTodos = () => {
        this.props.getTodos();
        this.setState({show : 'TODOS'})
    }
    renderPList(){
        return this.props.posts.map((lst)=>{
            return <div key = {lst.id} className = "list-group-item">
                {/* {console.log("lst ",lst.title)} */}
                <div>{lst.title}</div>
            </div> 
        })
    }
    renderTList(){
        return this.props.todos.map((lst)=>{
            return <div key = {lst.id} className = "list-group-item">
                {/* {console.log("lst ",lst.title)} */}
                <div>{lst.title}</div>
            </div> 
        })
    }
    renderShowList(){
        if(this.state.show === 'POSTS'){
            return <div className = "list-group">
                {this.renderPList()}
                {/* {console.log("final log",this.props.posts)} */}
            </div>
        }
        if(this.state.show === 'TODOS'){
            return <div>
                {this.renderTList()}
                {/* {console.log("final log",this.props.todos)} */}
            </div>
        }
        return null;
    }
    render() {
        return <div>
            <RenderStaticList list={this.state.show} callPosts={this.callPosts} callTodos={this.callTodos} />
            <div>{this.renderShowList()}</div>
        </div>
    }
}
const mapStateToProps = (state) => {
    // console.log("state", state);
    return state;
}

export default connect(mapStateToProps, { getPosts, getTodos })(App);