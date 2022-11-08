import { doGet } from './crud';

export function getNews() {
    return doGet('/news/list');
}