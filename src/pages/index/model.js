import * as index_request from './services/request'

export default {
  namespace : 'index',
  state : {
    latest_news: [],
    banner_data: []
  },
  reducers : {
    update_news(state, {payload: {
        list,banner
      }}) {
      return {
        ...state,
        latest_news: list,
        banner_data: banner
      }
    }
  },
  effects : {
    *get_lateset({}, {call, put}) {
      const {data} = yield call(index_request.fetch);
      const {data:banner} = yield call(index_request.banner_data)
      const list = data.newslist;
      yield put({type: 'update_news', payload: {
          list,
          banner
        }})
    }
  },
  subscriptions : {
    setup({dispatch, history}) {
      return history.listen(({pathname, query}) => {
        console.log(history);
        dispatch({type: 'get_lateset'});
      });
    }
  }
};
