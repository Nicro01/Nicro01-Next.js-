import { db } from "./Firebase";

import bcrypt from "bcryptjs-react";

export default class DB {
  constructor() {
    this.db = db;
  }

  async getAllItems(collection) {
    const items = await this.db.collection(collection).get();

    return items.docs.map((doc) => ({
      id: doc.id,
      ...doc.data(),
    }));
  }

  async getItem(collection, slug) {
    const item = await this.db
      .collection(collection)
      .where("slug", "==", slug)
      .get();

    return item.docs[0].data();
  }

  async createItem(collection, data) {
    const item = await this.db.collection(collection).add(data);

    return item.id;
  }

  async updateItem(collection, id, data) {
    const item = await this.db.collection(collection).doc(id).update(data);

    return item.id;
  }

  async deleteItem(collection, id) {
    const item = await this.db.collection(collection).doc(id).delete();

    return item.id;
  }

  async getUserByEmail(email) {
    const user = await this.db
      .collection("users")
      .where("username", "==", email)
      .get();

    return user.docs[0].data();
  }

  async createUser(data) {
    // console.log(data);

    data.password = bcrypt.hash(data.password, 10);

    const user = await this.db.collection("users").add(data);
    return user.id;
  }
}
