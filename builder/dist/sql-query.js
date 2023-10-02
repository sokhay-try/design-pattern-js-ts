class SqlQueryBuilderImpl {
    sqlQuery;
    constructor() {
        this.sqlQuery = "";
    }
    select(columns) {
        this.sqlQuery += `SELECT ${columns.join(", ")} `;
        return this;
    }
    from(table) {
        this.sqlQuery += `FROM ${table} `;
        return this;
    }
    where(condition) {
        this.sqlQuery += `WHERE ${condition} `;
        return this;
    }
    orderBy(column, order) {
        this.sqlQuery += `ORDER BY ${column} ${order} `;
        return this;
    }
    limit(limit) {
        this.sqlQuery += `LIMIT ${limit} `;
        return this;
    }
    build() {
        return this.sqlQuery;
    }
}
const sqlQueryBuilder = new SqlQueryBuilderImpl();
const sqlQuery = sqlQueryBuilder
    .select(["name", "age"])
    .from("users")
    .where("age > 18")
    .orderBy("name", "asc")
    .limit(10)
    .build();
console.log(sqlQuery); // SELECT name, age FROM users WHERE age > 18 ORDER BY name ASC LIMIT 10
