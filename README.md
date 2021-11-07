# DAYEAYEAYEA-Backend

![dayeayeayea](C:\Users\mumu892101\Desktop\dayeayeayea.png)

此專案為 [程式導師實驗計畫第五期](https://github.com/Lidemy/mentor-program-5th) 的 Final project - DAYEAYEAYEA 購物網站的後端專案，團隊使用 React / Express & Sequelize 進行前後端分離開發。

專案 DAYEAYEAYEA 是一個居家選物品牌的電商購物網站，從後疫情時代的生活需求為發想，提供質感用品給對居家品質和休閒生活有其藍圖的顧客，透過我們簡潔而順暢的網站頁面讓顧客能按照主題快速找到並購買自己喜歡的商品。網站提供給使用者的功能有使用者註冊、會員登入、查看商品、加入購物車及結帳。

在網站管理後台上，我們開發了「會員管理」、「商品管理」及「訂單管理」三大介面，並按照管理員權限等級開放不同程度的功能，完整功能包括管理員登入、會員資料檢視與會員等級調整、訂單進度控制與封存、商品新增刪除與編輯管理。



## 目錄

\- [使用套件](#使用套件)

\- [專案建置](#專案建置)

\- [專案資料架構](#專案資料架構)

\- [資料庫關連](#資料庫關連)

\- [API 文件](#API-文件)



## 使用套件

* #### bcrypt
  用於處理密碼雜湊。
  
* #### dotenv
  設定與存取環境變數。
  
* #### sequelize
  實作資料庫的 ORM 操作。
  
* #### jsonwebtoken

  簽署 token 實作使用者身分驗證。

* #### http-errors

  用於創建 http error code 。

* #### mysql2

  使用 mysql2 連線資料庫。

* #### cors

  解決跨來源資源共用。

* #### morgan

  HTTP request logger 存取連線紀錄。

* #### nodemon

  自動化重啟 Node.js application。

* #### file-stream-rotator

* #### swagger-jsdoc

  自動化生成 API 文件工具。

* #### swagger-ui-express

  自動化生成 API 文件工具。

* #### yamljs

  用以讀取 yaml 檔案。






## 專案建置

#### 安裝套件

```bash
npm install
```



#### 建立 config/config.json

```json
{
  "development": {
    "username": "",
    "password": "",
    "database": "",
    "host": "localhost",
    "dialect": "mysql"
  },
  "test": {
    "username": "",
    "password": "",
    "database": "",
    "host": "127.0.0.1",
    "dialect": "mysql"
  },
  "production": {
    "username": "",
    "password": "",
    "database": "",
    "host": "127.0.0.1",
    "dialect": "mysql"
  }
}
```



#### 建立 .env 設定環境變數

```bash
SESSION_SECRET=''
```



#### 執行 Sequelize migration 

在 MySQL 資料庫中建立 database 及 table

```bash
npm run migrate
```



#### 執行 Sequelize seeder

在 MySQL 資料庫中建立初始 demo 資料

```bash
npm run get-test-data
```



#### 開發

```bash
npm run start
```



#### 部屬

使用 PM2 部屬於 Linode 伺服器。





## 專案資料架構

```javascript
├── app.js
├── config
|  └── config.json       // sequelize 設定檔
├── controller           // 處理 API 邏輯
|  ├── admins.js
|  ├── articles.js
|  ├── faq.js
|  ├── members.js
|  ├── orders.js
|  └── products.js
├── middlewares          // 自訂 middlewares
|  ├── authHandler.js
|  ├── corsHandler.js
|  ├── errorHandler.js
|  └── logger.js
├── migrations           // Sequelize migrations
├── models               // 透過 Sequelize 和資料庫溝通
|  ├── admin.js
|  ├── article.js
|  ├── faq.js
|  ├── index.js
|  ├── member.js
|  ├── message.js
|  ├── order.js
|  ├── order_item.js
|  ├── product.js
|  └── product_img.js
├── node_modules
├── package-lock.json
├── package.json
├── README.md
├── routes               // 區分不同功能的 API 路由
|  ├── admin.js
|  ├── articles.js
|  ├── members.js
|  ├── orders.js
|  └── products.js
├── seeders              // Sequelize seeders
└── utils
   ├── auth.js
   └── helper.js

```



## 資料庫關聯







## API 測試文件

> 測試連結：[Swagger UI (coolizz.tw)](https://api.coolizz.tw/api-docs/)

![swaggerAPI](C:\Users\mumu892101\Desktop\swaggerAPI.gif)



## License

[MIT](https://choosealicense.com/licenses/mit/)



## 聲明

本網站僅作為個人練習，註冊時請勿使用真實資料。另本網站包含之圖片與內容僅作練習使用，不作任何商業用途。
