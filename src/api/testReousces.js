import request from './core/axios';

export function get() {
    return request({
        url: `/api/get`,
        method: 'get'
    })
}
