require('dotenv/config');

module.exports = {
  "development": {
    "username": "root",
    "password": "verysecret",
    "database": "db_develoment",
    "host": "localhost",
    "port": 3306,
    "dialect": "mysql"
  },
  "test": {
    "username": "root",
    "password": "verysecret",
    "database": "db_test",
    "host": "localhost",
    "port": 3306,
    "dialect": "mysql"
  },
  "production": {
    "username": "root",
    "password": "verysecret",
    "database": "db_production",
    "host": "localhost",
    "port": 3306,
    "dialect": "mysql"
  }
}
