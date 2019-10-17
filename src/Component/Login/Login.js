import React from "react";
import Modal from 'react-awesome-modal';
import {Link} from 'react-router-dom'

//boostrap
import 'bootstrap/dist/css/bootstrap.css';

class Login extends React.Component{

    constructor(props) {
        super(props);
        this.state = {
            visible : false
        }
    }
 
    openModal() {
        this.setState({
            visible : true
        });
    }
 
    closeModal() {
        this.setState({
            visible : false
        });
    }
    render(){
        return(
            <section>
            <Link to="/login" value="Open" className="btn btn-light" onClick={() => this.openModal()} >Login</Link>
            <Modal visible={this.state.visible} width="350" height="400" effect="fadeInUp" onClickAway={() => this.closeModal()}>
                <div className="container"  >
                    <div className="col-12 my-4">
                        <h2 className="text-center">Login</h2>
                    </div>
                    <div className="col-12 my-4 ">
                    
                        <form >
                            <div className="form-group my-4">
                               
                                <input type="text" className="form-control" id="username"  placeholder="UserName"></input>
                            </div>
                            <div className="form-group">
                                
                                <input type="password" className="form-control" id="password"  placeholder="Password"></input>
                            </div>
                            <button type="submit" className="btn btn-primary btn-lg btn-block mt-4">Login</button>
                            <Link to="/" className="btn btn-outline-danger btn-lg btn-block" onClick={() => this.closeModal()}>Close</Link>
                        </form>
                    </div>
                    
                

                </div>
            </Modal>
        </section>
        )
    }

}

export default Login;