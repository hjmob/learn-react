import { Component } from 'react';
import dva from 'dva';
import createLoading from 'dva-loading';

let app = dva({
  history: window.g_history,
  ...((require('E:/umi/with-dva/src/dva.js').config || (() => ({})))()),
});

window.g_app = app;
app.use(createLoading());

app.model({ namespace: 'global', ...(require('E:/umi/with-dva/src/models/global.js').default) });
app.model({ namespace: 'model', ...(require('E:/umi/with-dva/src/pages/index/model.js').default) });
app.model({ namespace: 'a', ...(require('E:/umi/with-dva/src/pages/list/models/a.js').default) });
app.model({ namespace: 'b', ...(require('E:/umi/with-dva/src/pages/list/models/b.js').default) });
app.model({ namespace: 'model', ...(require('E:/umi/with-dva/src/pages/list/search/model.js').default) });

class DvaContainer extends Component {
  render() {
    app.router(() => this.props.children);
    return app.start()();
  }
}

export default DvaContainer;
