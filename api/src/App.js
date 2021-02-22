import React,{Component} from 'react';
import axios from 'axios';
import './App.css';
import {Input, FormGroup,Label, Modal, ModalHeader, ModalBody, ModalFooter, Table, Button   } from 'reactstrap';



class App extends Component{
  state = {
    mobiles :[],
    newMobileData : {
      mobileName : '',
      modelName : '',
      rating : ''
    },
    editMobileData: {
      id: '',
      mobileName: '',
      rating: ''
    },
    newMobileModal: false,
    editMobileModal: false
  }
  componentWillMount(){
    this.refreshMobiles();
  }
  toggleNewMobileModal(){
    this.setState({
      newMobileModal: ! this.state.newMobileModal
    });
  }
  toggleEditMobileModal(){
    this.setState({
      editMobileModal: ! this.state.editMobileModal
    });
  }
  addMobile(){
    axios.post('https://5f0c985a11b7f600160560d7.mockapi.io/mobiles/mobiles/', this.state.newMobileData).then((response)=>{
      let {mobiles} = this.state;

       mobiles.push(response.data);

       this.setState({ mobiles, newMobileModal: false, newMobileData: {
         mobileName: '',
         modelName: '',
         rating: ''
       }});
    });
  }
  updateMobile=()=>{
    let{mobileName, rating}= this.state.editMobileData;
    let id = this.state.editMobileData.id;
    console.log(id);
let url = `https://5f0c985a11b7f600160560d7.mockapi.io/mobiles/mobiles/${id}`
    axios.put(url,{
      mobileName, rating
    }).then((response)=>{
      console.log(response.data);
  
      this.refreshMobiles();

      this.setState({
        editMobileModal: false, editMobileData: {id: '', mobileName:'', rating:''}

      })
    });
  }
  editMobile(id,mobileName, rating){
   // console.log("in edit ")
    this.setState({
      editMobileData: {id,mobileName, rating}, editMobileModal: !this.state.editMobileModal

    });
    setTimeout(()=>{console.log(this.state.editMobileData);console.log(this.state.editMobileModal)},0);
  }
  deleteMobile(id){
    axios.delete('https://5f0c985a11b7f600160560d7.mockapi.io/mobiles/mobiles/'+id).then((response)=>{
      this.refreshMobiles();
    });
  }
  refreshMobiles(){
    axios.get('https://5f0c985a11b7f600160560d7.mockapi.io/mobiles/mobiles/').then((response)=>{
      this.setState({
        mobiles: response.data
      })
    })
  }



render(){
  let mobiles = this.state.mobiles.map((mobile)=>{
    return(
      <tr key={mobile.id}>
        <td>{mobile.id}</td>
        <td>{mobile.mobileName}</td>
        <td>{mobile.modelName}</td>
        <td>{mobile.rating}</td>
        <td>
          <Button color="success" size="sm" className="mr-2" onClick = {this.editMobile.bind(this, mobile.id, mobile.mobileName, mobile.rating)}>Edit</Button>
          <Button color="danger" size="sm" onClick = {this.deleteMobile.bind(this, mobile.id)}>Delete</Button>
        </td>
      </tr>
    ) 
  });
  return(
    <div className="app container">

      <h1>Mobile reviews App</h1>

      <Button className="my-3" color="primary" onClick={this.toggleNewMobileModal.bind(this)}>Add Mobile Review</Button>

       <Modal isOpen ={this.state.newMobileModal} toggle={this.toggleNewMobileModal.bind(this)}>
         <ModalHeader toggle={this.toggleNewMobileModal.bind(this)}>Add a new Mobilereview</ModalHeader>
         <ModalBody>
           <FormGroup>
             <Label for="mobileName">mobileName</Label>
             <Input id="mobileName" value={this.state.newMobileData.mobileName} onChange={(e)=>{
               let {newMobileData} = this.state;

               newMobileData.mobileName = e.target.value;

               this.setState({newMobileData});
             }} />
           </FormGroup>
           <FormGroup>
             <Label for="modelName">modelName</Label>
             <Input id="modelName" value={this.state.newMobileData.modelName} onChange={(e)=>{
               let {newMobileData} = this.state;

               newMobileData.modelName = e.target.value;

               this.setState({newMobileData});
             }} />
           </FormGroup>

           <FormGroup>
             <Label for="rating">Rating</Label>
             <Input id="rating" value={this.state.newMobileData.rating} onChange={(e)=>{
               let {newMobileData} = this.state;

               newMobileData.rating = e.target.value;

               this.setState({newMobileData});
             }} />
           </FormGroup>
         </ModalBody>
         <ModalFooter>
           <Button  color="primary" onClick= {this.addMobile.bind(this)}>Add Mobile</Button>
           <Button color="secondary" onClick={this.toggleNewMobileModal.bind(this)}>Cancel</Button>  
         </ModalFooter>
       </Modal>

       <Modal isOpen={this.state.editMobileModal} toggle={this.toggleEditMobileModal.bind(this)}>
         <ModalHeader toggle={this.toggleEditMobileModal.bind(this)}>Edit Mobilereview</ModalHeader>

         <ModalBody>
    
         <FormGroup>
             <Label for="mobileName">mobileName</Label>
             <Input id="mobileName" value={this.state.editMobileData.mobileName} onChange={(e)=>{
               let {editMobileData} = this.state;

               editMobileData.mobileName = e.target.value;

               this.setState({editMobileData});
             }} />
           </FormGroup>

           <FormGroup>
             <Label for="rating">Rating</Label>
             <Input id="rating" value={this.state.editMobileData.rating} onChange={(e)=>{
               let {editMobileData} = this.state;

               editMobileData.rating = e.target.value;

               this.setState({editMobileData});
             }} />
           </FormGroup>
         </ModalBody>

         <ModalFooter>
           <Button color="primary" onClick= {this.updateMobile.bind(this)}>update Mobile</Button>
           <Button color="secondary" onClick={this.toggleEditMobileModal.bind(this)}>Cancel</Button>  
         </ModalFooter>
       </Modal>


       <Table>
         <thead>
           <tr>
             <th>id</th>
             <th>mobileName</th>
             <th>modelName</th>
             <th>Rating</th>
             <th>Actions</th>
           </tr>
         </thead>

         <tbody>
           {mobiles}
         </tbody>
       </Table>
    </div>
  );
  
}
}

export default App;
