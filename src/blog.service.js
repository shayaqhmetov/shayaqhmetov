export class BlogService {
  async getPosts() {
    let response = [];
    if (process.env.NODE_ENV === "development") {
      response = await fetch("fixtures/posts.json");
    } else {
      response = await fetch("blog/posts.json");
    }
    if (!response.ok) throw new Error("Ошибка загрузки постов");
    return response.json();
  }

  async getPostById(id) {
    const posts = await this.getPosts();
    return posts.find((post) => post.id === id);
  }
}
