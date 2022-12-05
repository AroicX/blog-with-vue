import requests from "../index";

export default class blogService {
  /**
   * @constructor
   */
  http;
  constructor() {
    this.http = requests;
  }

  getBlogPost(data) {
    const { countPerPage, currentPage } = data;
    return this.http.get(`posts?per_page=${countPerPage}&page=${currentPage}`);
  }
  getSinglePost(data) {
    const { id } = data;
    return this.http.get(`posts/${id}`);
  }
}
