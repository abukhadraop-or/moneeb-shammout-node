const { Model } = require('sequelize');

/**
 * Over riding model class to add custom methods.
 */
class BaseModel extends Model {
  /**
   * Get one page records from the database.
   *
   * @param {Array.<string>} order List of order by columns.
   * @param {number} pageNumber
   * @param {number} limit Max records per page.
   *
   * @return {object.<string>} JSON response.
   */
  static async getOnePage(order, pageNumber = 1, limit = 20) {
    const response = await this.findAll({
      offset: (pageNumber - 1) * limit,
      limit,
      order,
      raw: true,
    });
    return response;
  }

  /**
   * Create a single record in the database.
   *
   * @param {object} data Record Data.
   *
   * @return {object.<string>} JSON response.
   */
  static async createOne(data) {
    const response = await this.create(data);
    return JSON.stringify(response, null, 2);
  }
}

module.exports = BaseModel;
