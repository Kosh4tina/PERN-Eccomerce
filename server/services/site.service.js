const {
    createSiteDb,
    getAllSitesDb,
    getSiteDb,
    updateSiteDb,
    updateSitePassDb
  } = require("../db/site.db");

const { ErrorHandler } = require("../helpers/error");

const mail = require("./mail.service");

class SiteService{
  createSite = async (data) => {
    try {
      return await createSiteDb(data);
    } catch (error) {
      throw new ErrorHandler(error.statusCode, error.message);
    }
  };

  getAllSites = async (userId, page) => {
    const limit = 5;
    const offset = (page - 1) * limit;
    try {
      return await getAllSitesDb({ userId, limit, offset });
    } catch (error) {
      throw new ErrorHandler(error.statusCode, error.message);
    }
  };

  getSiteById = async (data) => {
    try {
      const site = await getSiteDb(data);
      if (!site) {
        throw new ErrorHandler(404, "Site does not exist");
      }
      return site;
    } catch (error) {
      throw new ErrorHandler(error.statusCode, error.message);
    }
  };

  updateSite = async (data) => {
    const errors = {};
    try {
      if (Object.keys(errors).length > 0) {
        throw new ErrorHandler(403, errors);
      }
      return await updateSiteDb(data);
    } catch (error) {
      throw new ErrorHandler(error.statusCode, error.message);
    }
  };

  updateSitePass = async (data) => {
    try{
      return await updateSitePassDb(data);
    }catch(error){
      throw new ErrorHandler(error.statusCode, error.message);
    }
  }

}

module.exports = new SiteService();