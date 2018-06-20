import request from '../../../utils/request';


export function fetch() {
    return request(`/api/json/newslist/news?r=0`);
  }