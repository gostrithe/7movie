import { doGet } from './crud';

// 获取热映列表
export async function getPlayings(page) {
    // 基于baseURL: 'http://localhost:9001/api', 即基于/
    const { data: { films } } = await doGet('/movie/playings', { page });
    return films
}

// 获取即将上映列表
export function getComings() {
    return doGet('/movie/comings');
}