import React,{Component} from 'react';

class RenderStaticList extends Component{
    render(){
        return(
            <div className="pt-4">
                <div className="container">
                    <div className="row">
                        <div className="col-sm">
                            <button className="btn btn-primary" onClick={() => this.props.callPosts()} >Posts</button>
                        </div>
                        <div className="col-sm">
                            <button className="btn btn-primary" onClick={() => this.props.callTodos()}>Todos</button>
                        </div>
                        <div className="col-sm">

                        </div>
                        <div className="col-sm">

                        </div>
                    </div>
                </div>
                {/* {console.log(this.props)} */}
            </div>
        );
    }
}

export default RenderStaticList;