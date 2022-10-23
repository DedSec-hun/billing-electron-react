HOW TO START:

cd billing-electron-react
yarn install
yarn electron:serve
yarn electron:build


HOW TO USE mysql DB:
CREATE DB:
DB name: mydb
TABLE name: mytable
CREATE ONE FIELD: id (INT)


IF authentication problem occurs with newr verison of mysql then run this in mysql workbench:
ALTER USER 'root'@'localhost' IDENTIFIED WITH mysql_native_password BY 'your_db_password_for_user_root';
flush privileges;



DEBUG:
if you want to debug just simply uncomment the 'electron:serve' command in package.json and run it in browser