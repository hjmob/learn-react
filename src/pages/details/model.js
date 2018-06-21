import * as index_request from './services/request'

export default {
  namespace : 'detail',
  state : {
    
  },
  reducers : {
    
  },
  effects : {
    *get_detail({payload:{id_str}},{call,put}){
       const xml = yield call(index_request.get_detail,id_str)
    }
  },
  subscriptions : {
    setup({dispatch, history}) {
      return history.listen(({pathname, query}) => {
        console.log(pathname,query);
        const id = query.id;
        const id_str = id.slice(0,3)+'/'+id.slice(-3)
        dispatch({
            type:'get_detail',
            payload:{
                id_str
            }
        })
      });
    }
  }
};
