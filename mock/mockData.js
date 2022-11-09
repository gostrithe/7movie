/* 导入并暴露数据 mock/mockData.js */
// commentJS
const mockData = require('./data/mockData.json');
const nowPlaying = require('./data/nowPlaying.json');
// console.log(mockData);
module.exports = () => {
    return {
        mockData,
        nowPlaying
    };
};



