interface ISqlQueryBuilder {
    select(columns: string[]): this;
    from(table: string): this;
    where(condition: string): this;
    orderBy(column: string, order: "asc" | "desc"): this;
    limit(limit: number): this;
    build(): string;
}

class SqlQueryBuilderImpl implements ISqlQueryBuilder {
    private sqlQuery: string;
  
    constructor() {
      this.sqlQuery = "";
    }
  
    select(columns: string[]): this {
      this.sqlQuery += `SELECT ${columns.join(", ")} `;
      return this;
    }
  
    from(table: string): this {
      this.sqlQuery += `FROM ${table} `;
      return this;
    }
  
    where(condition: string): this {
      this.sqlQuery += `WHERE ${condition} `;
      return this;
    }
  
    orderBy(column: string, order: "asc" | "desc"): this {
      this.sqlQuery += `ORDER BY ${column} ${order} `;
      return this;
    }
  
    limit(limit: number): this {
      this.sqlQuery += `LIMIT ${limit} `;
      return this;
    }
  
    build(): string {
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
   