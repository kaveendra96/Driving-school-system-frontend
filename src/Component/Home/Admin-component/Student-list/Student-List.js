import React from 'react'

class StudentList extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
          error: null,
          products: [{"id":"1","product_name":"nipun","sku":"test","price":"3443"}]
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
            <div>
              <h2>Product List</h2>
              <table>
                <thead>
                  <tr>
                    <th>#ID</th>
                    <th>Product Name</th>
                    <th>SKU</th>
                    <th>Price</th>
                  </tr>
                </thead>
                <tbody>
                  {products.map(product => (
                    <tr key={product.id}>
                      <td>{product.id}</td>
                      <td>{product.product_name}</td>
                      <td>{product.sku}</td>
                      <td>{product.price}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )
        }
      }
    }

export default StudentList;