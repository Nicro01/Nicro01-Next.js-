import DB from "./DB";

export default class ArticleController {
  constructor() {
    this.db = new DB();
  }

  async getAllArticles() {
    return this.db.getAllItems("blogs");
  }

  async getArticle(slug) {
    return this.db.getItem("blogs", slug);
  }

  async createArticle(data) {
    return this.db.createItem("blogs", data);
  }

  async updateArticle(id, data) {
    return this.db.updateItem("blogs", id, data);
  }

  async deleteArticle(id) {
    return this.db.deleteItem("blogs", id);
  }
}
