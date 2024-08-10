import request from '@/utils/request'

export default {
    testApi(){
        return request({
            url:'/api/test/test',
            method:'get'
        });
    }
}
