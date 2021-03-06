"use strict";

const Hash = use("Hash");
const Model = use("Model");

class User extends Model {
  profile() {
    return this.hasOne("App/Models/Profile");
  }
  posts() {
    return this.hasMany("App/Models/Post");
  }
  static boot() {
    super.boot();

    /**
     * A hook to hash the user password before saving
     * it to the database.
     */

    this.addHook("beforeCreate", "User.hashPassword");
  }

  /**
   * A relationship on tokens is required for auth to
   * work. Since features like `refreshTokens` or
   * `rememberToken` will be saved inside the
   * tokens table.
   *
   * @method tokens
   *
   * @return {Object}
   */
  tokens() {
    return this.hasMany("App/Models/Token");
  }
}

module.exports = User;
