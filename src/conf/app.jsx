import React from 'react';

import MemberList from './container/member-list';
import Setting from './container/setting';

const ConfApp = () => (
  <React.Fragment>
    <main className="L-Main">
      <div className="L-Screen">Screen</div>
      <MemberList />
    </main>
    <Setting />
    <div className="L-RightSide">右メニュー</div>
  </React.Fragment>
);

export default ConfApp;
