import React, {Fragment} from 'react';
import Input from './Input';

function LandingPage() {
   return (
      <Fragment>
      <h2 className="display-1 mt-5">Full Stack Conf</h2>
      <p className="lead mb-5">Coming Soon, a One-day Conference About All Things Javascript!</p>
      <Input />
      </Fragment>
   )
}

export default LandingPage;