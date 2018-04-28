"use strict";

/*
|--------------------------------------------------------------------------
| UserSeeder
|--------------------------------------------------------------------------
|
| Make use of the Factory instance to seed database with dummy data or
| make use of Lucid models directly.
|
*/

const Factory = use("Factory");
const User = use("App/Models/User");

class UserSeeder {
  async run() {
    const users = [
      { username: "Kevin", email: "Kevin@gmail.com", password: "pasword" },
      { username: "Mike", email: "Mike@gmail.com", password: "pasword" }
    ];
    User.createMany(users);
  }
}

module.exports = UserSeeder;
