import mysql from "mysql";

const connection = mysql.createConnection({
  multipleStatements: true,
  host: "localhost",
  user: "root",
  password: "Q2hebq2PO9KvvlaU",
  database: "webwat"
});
export default connection;
