import React, { Component } from 'react';
import { PeoplePicker } from 'mgt-react';
import { Providers, SimpleProvider, ProviderState } from '@microsoft/mgt';

export class Home extends Component {
  static displayName = Home.name;

  constructor (props) {
    super(props);

    this.state = {
        loading: true
    };
  }

  componentDidMount() {
      this.hookupMgtProvider();
  }

  render () {
    return (
      <div>
        <h1>Hello, world!</h1>
        <h3>People Picker - Wrapper</h3>
        <div><PeoplePicker showMax="4" selection-mode="single" ></PeoplePicker></div>
        <h3>People Picker - Vanilla</h3>
        <div><mgt-people-picker showMax="4" selection-mode="single" ></mgt-people-picker></div>
      </div>
    );
  }

  async hookupMgtProvider() {    
    let myProvider = new SimpleProvider(this.getAccessToken);
    Providers.globalProvider = myProvider;
    myProvider.setState(ProviderState.SignedIn);
  }

  async getAccessToken(scopes) {
    const response = await fetch('user/accesstoken');    
    return response.text();
  }
}
