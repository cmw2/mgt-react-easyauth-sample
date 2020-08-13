import React, { Component } from 'react';
import { PeoplePicker } from 'mgt-react';
import { Providers, SimpleProvider, ProviderState } from '@microsoft/mgt';

export class Home extends Component {
  static displayName = Home.name;

  constructor (props) {
    super(props);

    this.state = {
        loading: true,
        userInfo: {},
        headers: {}
    };
  }

  componentDidMount() {
      this.populateUserInfo();
  }

  render () {
    let contents = this.state.loading
        ? <span>Loading...</span>
        : <dl><dt>IDToken</dt><dd>{this.state.userInfo.idToken}</dd><dt>AccessToken</dt><dd>{this.state.userInfo.accessToken}</dd></dl>;

    let headersContents = this.state.loading
        ? <span>Loading...</span>
        : <span>{JSON.stringify(this.state.headers)}</span>;

    let peoplePickerContents = this.state.loading
        ? <span>Loading...</span>
        : <mgt-people-picker></mgt-people-picker>;

    return (
      <div>
        <h1>Hello, world!</h1>
        <p>Welcome to your new single-page application, built with:</p>
        <ul>
          <li><a href='https://get.asp.net/'>ASP.NET Core</a> and <a href='https://msdn.microsoft.com/en-us/library/67ef8sbd.aspx'>C#</a> for cross-platform server-side code</li>
          <li><a href='https://facebook.github.io/react/'>React</a> for client-side code</li>
          <li><a href='http://getbootstrap.com/'>Bootstrap</a> for layout and styling</li>
        </ul>
        <p>To help you get started, we have also set up:</p>
        <ul>
          <li><strong>Client-side navigation</strong>. For example, click <em>Counter</em> then <em>Back</em> to return here.</li>
          <li><strong>Development server integration</strong>. In development mode, the development server from <code>create-react-app</code> runs in the background automatically, so your client-side resources are dynamically built on demand and the page refreshes when you modify any file.</li>
          <li><strong>Efficient production builds</strong>. In production mode, development-time features are disabled, and your <code>dotnet publish</code> configuration produces minified, efficiently bundled JavaScript files.</li>
        </ul>
        <p>The <code>ClientApp</code> subdirectory is a standard React application based on the <code>create-react-app</code> template. If you open a command prompt in that directory, you can run <code>npm</code> commands such as <code>npm test</code> or <code>npm install</code>.</p>
        < hr/>
        <h3>User Info</h3>
        <div>{contents}</div>
        <h3>Headers</h3>
        <div>{headersContents}</div>
        <hr />
        <h3>People Picker</h3>
        <div>{peoplePickerContents}</div>
      </div>
    );
  }

  async populateUserInfo() {
    const response = await fetch('user');
    const userInfo = await response.json();    
    const headersResponse = await fetch('user/headers');
    const headers = await headersResponse.json();    
    
    let myProvider = new SimpleProvider(this.getAccessToken);
    Providers.globalProvider = myProvider;
    myProvider.setState(ProviderState.SignedIn);
    this.setState({ collapsed: this.state.collapsed, loading:false, userInfo: userInfo, headers: headers});
  }

  async getAccessToken(scopes) {
    const response = await fetch('user/accesstoken');    
    return response.text();
  }
}
