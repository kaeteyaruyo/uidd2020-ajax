# UIDD2020 Midterm

## 前置作業

* 開一個新資料夾然後用 VSCode 打開他
* 在終端機（Terminal）輸入 `npm init` 生成一個package.json，以儲存等等要使用的套件（懶得填資料的話可以一直按 enter 就好）
* 在終端機輸入 `npm install express`，因為我們需要一個簡易的後端

## 寫後端（詳見 `app.js` 內註解）

1. 新增一個檔案叫作 `app.js`
2. 引入 express 並執行他，得到一個 `app`
3. 引入 path 套件，因為我們需要做一些跟檔案路徑有關的操作
4. 使用 `process.cwd()` 取得這個檔案執行時的當前路徑
5. 定義一個 get 的 route，用來回傳 html 檔
6. 讓 app 去聽一個喜歡的 port

## 寫前端（詳見 `index.html` 內註解）

1. 新增一個檔案叫作 `index.html`
2. 定義一個 `<div>`，並給他一個 id，等等用來顯示 ajax 取得的資料（可以先放一些文字在內確定他存在）
3. 定義三個 `<button>`，表示等等按不同按鈕會回傳不同的資料（你喜歡有更多個也沒關係，但在後端要有對應數量的資料）
4. 回到 `app.js` 定義一個名叫 `data` 的 array，裏面有三個字串代表不同的資料
5. 定義 `<script>` 區塊，我們會在裏面撰寫跟 ajax 有關的關鍵程式碼
    * 定義一個函數叫作 `getData`，吃一個參數來判別現在是要要求哪一筆資料，裏面使用 `fetch` 來動態取得資料
    * 取得資料後，更新 `<div>` 內的內容
6. 使用 `onclick` attribute，把剛剛定義的 `getData` 掛到 `<button>` 上
7. 回到 `app.js` 定義另一個 get 的 route，用來回傳 ajax 要求的資料

## 執行

* 在終端機輸入 `node app.js` 執行 web server（後端程式碼）
* 在瀏覽器網址列輸入 `127.0.0.1:[port]`，如果上述步驟都有正確執行，應當能看到你寫的頁面（有一段文字跟三個按鈕）
* 按下對應的按鈕，上方文字應當改變為該按鈕對應的資料

## 參考文件

* [Express 4.x - API Reference](https://expressjs.com/en/4x/api.html)
* [Using Fetch - Web APIs | MDN](https://developer.mozilla.org/zh-TW/docs/Web/API/Fetch_API/Using_Fetch)
* [Using Promise - JavaScript | MDN](https://developer.mozilla.org/zh-TW/docs/Web/JavaScript/Guide/Using_promises)
* [Query string - Wikipedia](https://en.wikipedia.org/wiki/Query_string)
* [HTML DOM getElementById() Method - W3School](https://www.w3schools.com/jsref/met_document_getelementbyid.asp)