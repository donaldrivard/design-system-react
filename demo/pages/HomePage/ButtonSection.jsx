/*
Copyright (c) 2015, salesforce.com, inc. All rights reserved.
Redistribution and use in source and binary forms, with or without modification, are permitted provided that the following conditions are met:
Redistributions of source code must retain the above copyright notice, this list of conditions and the following disclaimer.
Redistributions in binary form must reproduce the above copyright notice, this list of conditions and the following disclaimer in the documentation and/or other materials provided with the distribution.
Neither the name of salesforce.com, inc. nor the names of its contributors may be used to endorse or promote products derived from this software without specific prior written permission.
THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS" AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT OWNER OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
*/

'use strict';

import React from 'react';
import SLDSButton from '../../../components/SLDSButton';
import {ButtonIcon, Icon} from "./../../../components/SLDSIcons";
import {default as PrismCode} from "react-prism/lib/PrismCode";





module.exports = React.createClass( {

  getDefaultProps () {
    return {};
  },

  getInitialState () {
    return {};
  },

  handleNeutralClick () {
    alert('Neutral Button Clicked');
  },

  handleBrandClick () {
    alert('Brand Button Clicked');
  },

  handleDisabledClick () {
    alert('Disabled Button Clicked');
  },

  handleIconClick(){
    alert('Icon Button Clicked');
  },

  render() {
    let hintBtnParent = {backgroundColor: '#7fdbff', padding: '10px'};
    let inverseBtnParent = {backgroundColor: '#0074d9', padding: '10px'};
    return (

            <div className='slds-p-around--medium'>
              <h3 className='slds-text-heading--medium slds-truncate'>
                Button
              </h3>

              <PrismCode className='language-markup'>
                {require('raw-loader!../../code-snippets/SLDSButton.txt')}
              </PrismCode>


              <div className='slds-p-vertical--large'>
                <div className='slds-p-vertical--small'>
                1. <SLDSButton
                  label='Neutral'
                  variant='neutral'
                  onClick={this.handleNeutralClick} />
                </div>

                <div className='slds-p-vertical--small'>
                2. <SLDSButton
                  label='Neutral Icon'
                  variant='neutral'
                  iconName='download'
                  iconSize='small'
                  iconPosition='right'
                  onClick={this.handleNeutralClick} />
                </div>

                <div className='slds-p-vertical--small'>
                3. <SLDSButton
                  label='Disabled'
                  variant='neutral'
                  disabled={true}
                  onClick={this.handleDisabledClick} />
                </div>

                <div className='slds-p-vertical--small'>
                4. <SLDSButton
                  label='Brand'
                  variant='brand'
                  onClick={this.handleBrandClick} />
                </div>

                <div className='slds-p-vertical--small'>
                5. <SLDSButton
                  label='Settings'
                  variant='icon'
                  iconName='settings'
                  iconSize='large'
                  onClick={this.handleIconClick} />
                </div>

                <div className='slds-p-vertical--small' style={inverseBtnParent}>
                6. <SLDSButton
                  label='User'
                  variant='icon'
                  inverse={true}
                  iconName='user'
                  iconSize='large'
                  onClick={this.handleIconClick} />
                </div>

                <div className='slds-p-vertical--small slds-hint-parent' style={hintBtnParent}>
                7. <SLDSButton
                  label='Edit'
                  variant='icon'
                  hint={true}
                  iconName='edit'
                  iconSize='large'
                  onClick={this.handleIconClick} />
                </div>

              </div>
            </div>


    );
  }
});