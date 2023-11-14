import React, { Component } from 'react';
import { Oval } from 'react-loader-spinner';

export class Loader extends Component {
  render() {
    return (
      <div className="Loader">
        <Oval
          height={100}
          width={100}
          color="#4fa94d"
          visible={true}
          ariaLabel="oval-loading"
          secondaryColor="#4fa94d"
          strokeWidth={2}
          strokeWidthSecondary={2}
        />
      </div>
    );
  }
}
