import React, { Component } from 'react'; 

import {connect}  from 'react-redux';
import { getItems,deleteItem } from '../actions/itemAction';

import PropTypes from 'prop-types';




class ShoppingList extends Component {

    componentDidMount(){
        this.props.getItems();
    }

    onDeleteClick=(_id)=>{
        this.props.deleteItem(_id);
    }
    


    render() {
        const {items}=this.props.item;

        return (
            <div>

 
<div class="container">



<ul class="list-group">

    {items.map((it)=>(



          <li class="list-group-item">



              
<button type="button" class="btn btn-secondary btn-sm" key={it._id}
    onClick={this.onDeleteClick.bind(this,it._id)}
>Delete</button> 


              
              {it.name}
              

              </li>

    ))}

  
</ul>


<div class="card mb-4">
  <div class="card-body">
    <div class="row">
      <div class="col-lg-6">
        
      </div>
      <div class="col-lg-6">
        
      
      </div>
    </div>
  </div>
  <div class="card-footer text-muted">
    Posted on January 1, 2017 by
    <a href="#">Start Bootstrap</a>
  </div>
</div>




</div>
                
            </div>
        );
    }
}

ShoppingList.propTypes={
    getItems:PropTypes.func.isRequired,
    item: PropTypes.object.isRequired
}

const mapStateToProps=(state)=>({
    item:state.item
});

export default connect (mapStateToProps, {getItems,deleteItem} )(ShoppingList);