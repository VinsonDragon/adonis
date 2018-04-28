"use strict";

/*
|--------------------------------------------------------------------------
| ProfileSeeder
|--------------------------------------------------------------------------
|
| Make use of the Factory instance to seed database with dummy data or
| make use of Lucid models directly.
|
*/

const Factory = use("Factory");
const Profile = use("App/Models/Profile");

class ProfileSeeder {
  async run() {
    const profile = [
      { github: "vinsondragon8080", user_id: 1 },
      { github: "jasonmark8080", user_id: 1 }
    ];
    await Profile.createMany(profile);
  }
}

module.exports = ProfileSeeder;
