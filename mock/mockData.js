/* 导入并暴露数据 mock/mockData.js */
// commentJS
const mockData = require('./data/mockData.json');
// console.log(mockData);
module.exports = () => {
    return {
        mockData
    };
};



