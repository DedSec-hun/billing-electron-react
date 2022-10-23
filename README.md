HOW TO START:

cd billing-electron-react
yarn install
yarn electron:serve
yarn electron:build


HOW TO USE mysql DB:
CREATE DB:
DB name: mydb
TABLE name: mytable
FIELD: id (INT)


IF authentication problem occurs then run this in mysql:
ALTER USER 'root'@'localhost' IDENTIFIED WITH mysql_native_password BY 'your_db_password_for_user_root';
flush privileges;