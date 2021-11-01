const pool = require("../config");

const createSiteDb = async ({
    cartId,
    userId
  }) => {
    //create a site
    const { rows: site } = await pool.query(
      "INSERT INTO site(user_id, status, product_id) VALUES($1, 'Not active', (SELECT product_id from cart_item where cart_id = $2) ) returning *",
      [userId, cartId]
    );

    return site;
  };

const getAllSitesDb = async ({ userId, limit, offset }) => {
    const { rowCount } = await pool.query(
      "SELECT * from site WHERE site.user_id = $1",
      [userId]
    );
    const sites = await pool.query(
      `SELECT site_id, user_id, title, status 
        from site WHERE site.user_id = $1 order by site_id desc limit $2 offset $3`,
      [userId, limit, offset]
    );
    return { items: sites.rows, total: rowCount };
  };


const getSiteDb = async ({ id, userId }) => {
    const { rows: site } = await pool.query(
      `SELECT products.*, site.*
      from site
      join products 
      on products.product_id = site.product_id 
      where site.site_id = $1 AND site.user_id = $2`,
      [id, userId]
    );
    return site;
  };

  const updateSiteDb = async ({
    username,
    email,
    title,
    short_title,
    description,
    redirict,
    password,
    id
  }) => {
    const { rows: site } = await pool.query(
      `UPDATE site set username = $1, email = $2, title = $3, short_title = $4, description = $5, redirict = $6 , password = $7
        where site_id = $8 returning username, email, title, short_title, description, redirict, password, site_id`,
      [username, email, title, short_title, description, redirict, password, id]
    );
    return site[0];
  };

module.exports = {
  createSiteDb,
  getAllSitesDb,
  getSiteDb,
  updateSiteDb
};