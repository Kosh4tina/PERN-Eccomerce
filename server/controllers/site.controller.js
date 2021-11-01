const { ErrorHandler } = require("../helpers/error");
const siteService = require("../services/site.service");


const createSite = async (req, res) => {
    const userId = req.user.id;
    const cartId = req.user.cart_id;

    console.log("Controller: ", cartId)

    const newSite = await siteService.createSite({
      cartId,
      userId,
    });
  
    res.status(201).json(newSite);
}

const getAllSites = async (req, res) => {
    const { page = 1 } = req.query;
    const userId = req.user.id;

    const sites = await siteService.getAllSites(userId, page);
    res.json(sites);
}

const getSite = async (req, res) => {
    const { id } = req.params;
    const userId = req.user.id;
  
    const site = await siteService.getSiteById({ id, userId });
    res.json(site);
}

const updateSite = async (req, res) => {
    const { username, email, title, short_title, description, redirict, password} = req.body;
        try {
        const results = await siteService.updateSite({
            username, 
            email, 
            title, 
            short_title, 
            description, 
            redirict,
            password,
            id: req.params.id
        });
        return res.status(201).json(results);
        } catch (error) {
        throw new ErrorHandler(error.statusCode, error.message);
        }
  };

module.exports = {
    createSite,
    getAllSites,
    getSite,
    updateSite
  };