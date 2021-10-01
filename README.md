# Dayeayeayea-backend

## 已安裝套件
* #### bcrypt
  將使用者密碼雜湊之後存進資料庫。
* #### dotenv
  設定與取存環境變數。
* #### sequelize
  實作資料庫的 ORM 操作。
* #### jsonwebtoken
  簽署 token 實作使用者身分驗證。
  
  
## 如何開始專案
### 安裝套件
`npm install` 

## 建立 config/config.json
格式如下：
```
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

## 開發用本地資料庫
請於本地資料庫創建指定名稱 db 

## 執行 Sequelize migration
在 MySQL 資料庫中建立 database 及 table
`npm run migrate`

## 執行 Sequelize seeder
在 MySQL 資料庫中建立初始 demo 資料
`npm run get-test-data`
