import { doGet } from './crud';

// 获取城市列表
export function getCities() {
    return doGet('/location/cities');
}

// 获取影院列表
export function getCinemas() {
    return doGet('/location/cinemas');
}