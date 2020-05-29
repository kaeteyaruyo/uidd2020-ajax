// Backend 1. 新增這個檔案

// Backend 2. 引入 express 並執行他，得到一個 app
const express = require('express');
const app = express();

// Backend 3. 引入 path 套件，因為我們需要做一些跟檔案路徑有關的操作
const path = require('path');

// Backend 4. 使用 `process.cwd()` 取得這個檔案執行時的當前絕對路徑
const root = process.cwd();

// Frontend 4. 定義一個名叫 `data` 的 array，裏面有三個字串代表不同的資料
const data = [
    'This is data 1.',
    'This is data 2.',
    'This is data 3.',
];

// Backend 5. 定義一個 get 的 route，用來回傳 html 檔
/**
 * app.get(route, callback) 可以用來聲明一個處理 get 請求的方法。他吃兩個參數：
 * @param {string} route - 第一個參數是一個 string, 代表要處理來自哪個路徑的請求。
 *                         此處的路徑指的是 host:port 後方的文字，舉例來說 abc.com/index 的路徑就是 '/index'。
 *                         如果 host:port 後面什麼字也沒有，那就代表這是網站的根路徑，我們以 '/' 表示。
 * @param {function} callback - 第二個參數是一個 function，代表針對抵達這個 route 的請求，我們應該如何處置。
 *                              這個 function 至少要吃兩個參數： req (short for request) 和 res (short for response)。
 *                              req 裡的欄位代表了該請求所攜帶的各種資訊，而 res 裡的方法定義了各種回應的方式。
 *                              在此範例中，我們只要知道有請求到來就會回傳 html 檔，因此不會用到 req 參數做任何判斷，
 *                              但是會用到 res 參數中的 sendFile() 方法來回傳 html 檔。
 */
app.get('/', function (req, res){
    // 由於 sendFile 只認得絕對路徑，所以需要用 path.join() 的方式把當前絕對路徑和 index.html 的路徑結合起來
    res.sendFile(path.join(root, 'index.html'));
});

// Frontend 7. 定義另一個 get 的 route，用來回傳 ajax 要求的資料
/**
 * 在此我們定義了另一個名字為 '/data' 的 route，用來處理資料相關的請求。
 * 上面有提到 req 裡頭裝著該請求附帶的資訊，其中 req.qeury 這個欄位裡頭帶有此請求的 query string。
 * 可以直接使用 req.query.fieldName 的方式，取得在 query string 當中 fieldName 這個欄位的值。
 * 以此範例來說，req.query.index 會取得 query string 當中 index 這個欄位的值，
 * 根據前端的程式碼來看，這個值會是 0, 1, 2 其中一個數字，代表想要取得 data 這個 array 裡的第幾筆資料，
 * 因此我們可以直接把這個值當作 data 這個 array 的 index，回傳對應的字串回去。
 * 想要只回傳字串作為回應，可以使用 res.send() 這個方法。
 */
app.get('/data', function(req, res){
    res.send(data[req.query.index]);
});

// Backend 6. 讓 app 去聽一個喜歡的 port
/**
 * app.listen(port[, callback]) 是讓這個 web server 真的下去聽請求的一個動作。他可以吃兩個參數：
 * @param {number} port - 第一個參數是一個數字，代表這個 web server 要聽在哪個 port 上面。
 *                        由於電腦的前 1024 個 port 是保留給一些常見的服務或通訊協定用的（如：21 是給 ftp 用的，80是 http 用的）
 *                        因此在設定 port 的時候，往往會選用較大的四位或五位數字。最常用的是 8080 或 8888，
 *                        但你也可以選用自己喜歡的數字，只要確定不會跟現有的其它服務衝突即可。
 * @param {function} callback - 第二個參數是可選參數（不寫也沒關係），是一個 function，代表成功掛到這個 port 上之後，
 *                              要做什麼事情。最常見的用法是輸出一串訊息，告知開發者現在 server 已經正常啟動。
 */
app.listen(8080, () => {
    console.log('Listen on 8080')
});