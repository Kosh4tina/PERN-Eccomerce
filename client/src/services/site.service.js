import API from "api/axios.config";

class SiteService {
  createSite() {
    return API.post("/site/create");
  }
  getAllSites(page) {
    return API.get(`/site/?page=${page}`);
  }
  getSite(id) {
    return API.get(`/site/${id}`);
  }
}

export default new SiteService();
