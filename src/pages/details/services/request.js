import request from '../../../utils/request';


export function get_detail(id) {
    return request(`/api/xml/newscontent/${id}.xml`,{
      headers:{
        'content-type': 'text/xml'
      }
    });
  }
