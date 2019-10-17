import React from 'react'

class StudentList extends React.Component{
    render(){

        // const list=() =>{
        //     if(this.props.student){
        //         return this.props.student.map((item)=>{
        //             return(
        //                 <div className="alert alert-info" role="alert">
        //                     A simple info alert—check it out!
        //                 </div>
        //             )
        //         })
        //     }
        //     else{
        //         return(
        //             <div class="alert alert-info" role="alert">
        //                     A simple info alert—check it out!
        //             </div>
        //         )
        //     }
        // }




        return(
            <div>
                <h4>{this.props.allStudent}</h4>
                console.log(this.props.allStudent);
                
               
                
                
            </div>
        )
    }
}
export default StudentList;