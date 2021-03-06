import React from 'react';
import ReactDOM from 'react-dom';
import { Link, Redirect } from 'react-router-dom'
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import dressesImage from '../../images/dresses.jpeg'
import tshirts from '../../images/tshirts.jpeg'
import topsAndBlouses from '../../images/topsAndBlouses.jpeg'
import flats from '../../images/womensFlats.jpeg'
import sweaters from '../../images/sweater.jpeg'
import jeans from '../../images/jeans.jpeg'
import { getBrands } from '../actions/womensFashion/getWomensBrands.js';

class Main extends React.Component {

	handleClick(category) {
		console.log('category picked', category)
		this.props.getBrands(category)
	}

	render () {
		return (
			<div>
			{!this.props.mobile ?
				<div>
				  <div className="headerMainTop">Are you an eBay reseller? Then this site's for you!</div>
				  <div className="headerMain">"Finding top selling pre-owned brands on eBay is tough. <br/>The Bair Data makes it easy."</div>
				</div>
				:
				<div>
				  <div className="headerMainTop">Are you an eBay reseller? Then this site's for you!</div>
				  <div className="headerMain">"Finding top selling pre-owned brands on eBay is tough. <br/>The Bair Data makes it easy."</div>
				</div>
			}
        <div className="container-fluid">
          <div className="row">
		          <div id="mainScreen">
		          	<span className="span-homegal">
		              <Link to="/womensFashion/dresses" onClick={this.handleClick.bind(this, 'dresses')}>
		                  <div className="polaroid">
		                      <img className="mainImage" src={dressesImage}/>
		                      <h2><span>Dresses</span></h2>
		                  </div>
		              </Link>
		            </span>
			        </div>
			        <div id="mainScreen">
					   	  <span className="span-homegal">
					        <Link to="/womensFashion/tshirts" onClick={this.handleClick.bind(this, 'tshirts')}>
				            <div className="polaroid">
			                <img className="mainImage" src={tshirts}/>
			                <h2><span>T-Shirts</span></h2>
				            </div>
					        </Link>
					      </span>	
						  </div>
						  <div id="mainScreen">
	    		   	  <span className="span-homegal">
	    		        <Link to="/womensFashion/topsAndBlouses" onClick={this.handleClick.bind(this, 'topsAndBlouses')}>
	    	            <div className="polaroid">
	                    <img className="mainImage" src={topsAndBlouses}/>
	                    <h2><span>Tops & Blouses</span></h2>
	    	            </div>
	    		        </Link>
	    		      </span>
		    		  </div>
	    		  </div>
	    		  <div className="row">
						  <div id="mainScreen">
	    		   	  <span className="span-homegal">
	    		        <Link to="/womensFashion/flats" onClick={this.handleClick.bind(this, 'flats')}>
	    	            <div className="polaroid">
	                    <img className="mainImage" src={flats}/>
	                    <h2><span>Flats</span></h2>
	    	            </div>
	    		        </Link>
	    		      </span>
		    		  </div>
						  <div id="mainScreen">
	    		   	  <span className="span-homegal">
	    		        <Link to="/womensFashion/sweaters" onClick={this.handleClick.bind(this, 'sweaters')}>
	    	            <div className="polaroid">
	                    <img className="mainImage" src={sweaters}/>
	                    <h2><span>Sweaters</span></h2>
	    	            </div>
	    		        </Link>
	    		      </span>
		    		  </div>
						  <div id="mainScreen">
	    		   	  <span className="span-homegal">
	    		        <Link to="/womensFashion/jeans" onClick={this.handleClick.bind(this, 'jeans')}>
	    	            <div className="polaroid">
	                    <img className="mainImage" src={jeans}/>
	                    <h2><span>Jeans</span></h2>
	    	            </div>
	    		        </Link>
	    		      </span>
		    		  </div>
  			  </div>
  			</div>
			</div>
		)
	}
}

function mapStateToProps(state) {
  return {
    isMobile: state.isMobile
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({getBrands}, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(Main)


