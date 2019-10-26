import React from 'react'
import 'bootstrap/dist/css/bootstrap.css';

class TraineerList extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
          error: null,
          products: [{"id":"1","product_name":"migara","sku":"test","price":"3443"},{"id":"2","product_name":"sakuni","sku":"test","price":"3443"}]
        }
      }
      componentDidMount() {
        // const apiUrl = 'http://localhost/dev/tcxapp/reactapi/products';
    
        // fetch(apiUrl)
        //   .then(res => res.json())
        //   .then(
        //     (result) => {
        //       this.setState({
        //         products: result
        //       });
        //     },
        //     (error) => {
        //       this.setState({ error });
        //     }
        //   )
        //
      
      }


      render() {
        const { error, products} = this.state;
    
        if(error) {
          return (
            <div>Error: {error.message}</div>
          )
        } else {
          return(
            <div className=" p-4 center">
              
              <table className="table  p-4 m-4">
                <thead>
                  <tr>
                    <th scope="col">#ID</th>
                    <th scope="col">Student  Name</th>
                    <th scope="col">Student Age</th>
                    <th scope="col">Price</th>
                  </tr>
                </thead>
                <tbody>
                  {products.map(product => (
                    <tr key={product.id}>
                      <td scope="row">{product.id}</td>
                      <td>{product.product_name}</td>
                      <td>{product.sku}</td>
                      <td>{product.price}</td>
                      <td>
                        <div className="progress">
                          <div className="progress-bar progress-bar-striped" role="progressbar" style={{width:'10%'}} aria-valuenow="10" aria-valuemin="0" aria-valuemax="100"></div>
                        </div>
                      </td>
                      <td><div className="btn btn-primary"> View Profile</div></td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )
        }
      }
    }

export default TraineerList;