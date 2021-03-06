import React, { Component } from 'react';

let topBrand = '';
let topCount = 0;

export default class Titles extends Component {

	constructor(props) {
		super(props)

		this.state = {
		  itemClicked: {},
		  averageData: '',
		  topBrand: '',
		  page: 1

		}

	}

	render() {
		return (
			<div >
		   <div className="brandsInfo">
		     <button className="btn btn-secondary detailsBackBtn" onClick={()=>{this.props.toggle()}}> Back </button>
		     <h4 style={{paddingLeft: "20px"}}>Name: {this.props.itemClicked.name}</h4>
		     <h4 style={{paddingLeft: "20px"}}>Number Sold: {this.props.itemClicked.val}</h4>
		     <h5 style={{paddingLeft: "20px"}}>Sold between: {this.props.itemClicked.endTime}</h5>
		     {this.props.itemClicked.price &&
		       <h5 style={{paddingLeft: "20px"}}>Price Range: ${this.props.itemClicked.price[0]} - ${this.props.itemClicked.price[1]}</h5>
		     }
		     <div>
		      {this.props.averageData}
		     </div>
		   </div>
			</div>
		)
	}
}