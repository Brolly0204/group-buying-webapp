
// 本地存储
export default {
    getStorage(key) {
        let val = localStorage.getItem(key) || '';
        if(val.startsWith('{') || val.startsWith('[')) {
            return JSON.parse(val);
        }
        return val;
    },
    setStorage(key, val) {
        if(typeof val === 'object') {
            val = JSON.stringify(val);
        }
        localStorage.setItem(key, val);
    }
}
