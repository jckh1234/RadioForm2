import React from 'react';
import {render} from 'react-dom';

import PropTypes from 'prop-types';

const EmptySpaceStyle={
  padding:10
}

const FooterListStyle={
  marginLeft:0, 
  listStyleType:'none', 
  fontStyle:'italic', 
  fontSize:'11px', 
  paddingLeft:0
}

class TableFooterReminder extends React.Component {

  constructor (){
    super();
  }


  render() {
    if(this.props.hidden){
      return (
        <div style={EmptySpaceStyle}/>
      )
    }else
    {


      switch(this.props.type){

        case 'CME_PRO':
          return (

              <ul style={FooterListStyle}>
                <li>(1) To apply the non-professional data rates, subscribers must submit Non-Professional Self Certification Form.</li>
                <li>(2) Non-Professional subscribers may select either option on a per-market basis or , as a bundled package.</li>
                <li>(3) If Non-Professional or Professional subscribers terminate market data subscription, selected market will not provide market data.</li>      
              </ul>

          );        

        case 'CME_NONPRO':
          return (

              <ul style={FooterListStyle}>
                <li>(1) To apply the non-professional data rates, subscribers must submit Non-Professional Self Certification Form.</li>
                <li>(2) Non-Professional subscribers may select either option on a per-market basis or , as a bundled package.</li>
                <li>(3) If Non-Professional or Professional subscribers terminate market data subscription, selected market will not provide market data.</li>      
              </ul>

          );

        case 'ICE_NONPRO':
          return (

              <ul style={FooterListStyle}>
                <li>(1) To apply the real-time market data, subscribers must submit the "ICE Data Pricing Form"</li>
                <li>(2) If ICE subscribers terminate market data subscription, selected market will not provide market data.</li>     
              </ul>

          );

        case 'EUREX_NONPRO':
          return (

              <ul style={FooterListStyle}>
                <li>(1) To apply the real-time market data, subscribers must submit the "EUREX Data Pricing Form"</li>
                <li>(2) If EUREX subscribers terminate market data subscription, selected market will not provide market data.</li>    
              </ul>
              
          );

        default: return <ul style={FooterListStyle}></ul>;

      }
    }
  }
}

TableFooterReminder.propTypes = {
  hidden:PropTypes.bool.isRequired,
  type:PropTypes.oneOf(['CME_PRO', 'CME_NONPRO', 'ICE_NONPRO', 'EUREX_NONPRO'])
}

export default TableFooterReminder;