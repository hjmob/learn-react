import * as index_request from './services/request'


export default {
  namespace: 'index',
  state: {
    latest_news:[]
  },
  reducers: {
    update_news(state,{payload:{list}}) {
      return {
        ...state,
        latest_news:list
      }
    }
  },
  effects:{
    *get_lateset({},{call,put}){
      const {data} = yield call(index_request.fetch);
      const list = data.newslist;
      yield put({
        type:'update_news',
        payload:{
          list
        }
      })
    }
  },
  subscriptions: {
    setup({ dispatch, history }) {
      return history.listen(({ pathname, query }) => {
        console.log(history);
        dispatch({ type: 'get_lateset'});
      });
    },
  },
};
