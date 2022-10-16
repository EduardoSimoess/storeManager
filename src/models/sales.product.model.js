const connection = require('./connection');

const findAll = async () => {
    const [result] = await connection.execute(
      `SELECT sp.sale_id AS saleId, s.date, sp.product_id AS productId, sp.quantity 
      FROM StoreManager.sales_products AS sp
      INNER JOIN StoreManager.sales AS s
      ON sp.sale_id  = s.id`,
    );
    // console.log(result);
    return result;
};

const findById = async (id) => {
    const [result] = await connection.execute(
    `SELECT s.date, sp.product_id AS productId, sp.quantity 
      FROM StoreManager.sales_products AS sp
      INNER JOIN StoreManager.sales AS s
      ON sp.sale_id  = s.id WHERE sale_id=?`,
      [id],
    );

    return result;
};
// const insert = async (sale) => {
//     const columns = Object.keys(sale).map((key) => `${key}`).join(', ');
//     const placeholders = Object.keys(sale).map((_key) => '?').join(', ');

//     await connection.execute(
//       `INSERT INTO StoreManager.sales_products (${columns}) VALUE (${placeholders})`,
//       [...Object.values(sale)],
//     );
// };

module.exports = {
  // insert,
  findAll,
  findById,
};