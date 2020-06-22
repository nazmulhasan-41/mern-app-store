import {connect} from 'react-redux';
import {addItem} from '../actions/itemAction';



import React, { Component } from 'react';

class ItemModel extends Component {
    state={
        modal:false,
        name:''
    }
    
    onChange=(e)=>{
        this.setState({[e.target.name]:e.target.value});

    }
    onSubmit=(e)=>{
      e.preventDefault();
     

      const newItem={
        
        name: this.state.name

      }
      this.props.addItem(newItem);
    }
    render() {
        return (
            <div>



<div class="container py-3">

<button type="button" class="btn btn-primary" data-toggle="modal" data-target="#exampleModal" data-whatever="@mdo">Add Item</button>

</div>

<div class="modal fade" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="exampleModalLabel">New message</h5>
        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div class="modal-body">
        <form onSubmit={this.onSubmit}>
          <div class="form-group">
            <label for="recipient-name" class="col-form-label">name</label>
            <input type="text" name="name" onChange={this.onChange} class="form-control" id="recipient-name"/>
          </div>
          <div class="form-group">
            <label for="message-text" class="col-form-label">Message:</label>
            <textarea class="form-control" id="message-text"></textarea>
          </div>
        </form>
      </div>
      <div class="modal-footer">
        <button type="button" onClick={this.onSubmit} class="btn btn-secondary" data-dismiss="modal">ADD</button>
        <button type="button" onClick={this.onSubmit} class="btn btn-primary">Send message</button>
      </div>
    </div>
  </div>
</div>





                
            </div>
        );
    }
}



const mapStateToProps=(state)=>({
  item:state.item
});


export default connect (mapStateToProps, {addItem} )(ItemModel);
