import * as index_request from './services/request'

export default {
  namespace : 'detail',
  state : {
    content:''
  },
  reducers: {
    update_details(state,{payload:{data}}){
      return {
        ...state,
        content:data
      }
    }
  },
  effects : {
    *get_detail({
      payload: {
        id_str
      }
    }, {call, put}) {
      const xml = yield call(index_request.get_detail, id_str);
      yield put({
        type:'update_details',
        payload:{
          data:xml.data
        }
      })
      
    }
  },
  subscriptions : {
    setup({dispatch, history}) {
      return history.listen(({pathname, query}) => {
        console.log(pathname, query);
        if (pathname === '/details') {
          const id = query.id;
          const id_str = id.slice(0, 3) + '/' + id.slice(-3)
          dispatch({type: 'get_detail', payload: {
              id_str
            }})
        }

      });
    }
  }
};
