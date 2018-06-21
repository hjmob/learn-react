import request from '../../../utils/request';


export function fetch() {
    return request(`/api/json/newslist/news?r=0`);
  }

export function banner_data(){
  return request('/banner')
}