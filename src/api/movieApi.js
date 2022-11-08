import { doGet } from './crud';

// 获取热映列表
export function getPlayings(page) {
    // 基于baseURL: 'http://localhost:9001/api', 即基于/
    return doGet('/movie/playings', { page });
}

// 获取即将上映列表
export function getComings() {
    return doGet('/movie/comings');
}