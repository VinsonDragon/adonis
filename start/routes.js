"use strict";

/*
|--------------------------------------------------------------------------
| Routes
|--------------------------------------------------------------------------
|
| Http routes are entry points to your web application. You can create
| routes for different URL's and bind Controller actions to them.
|
| A complete guide on routing is available here.
| http://adonisjs.com/docs/4.0/routing
|
*/

const Route = use("Route");

Route.on("/").render("welcome");

Route.get("/posts", "PostController.index");

Route.post("/posts", "PostController.store");

Route.get("/posts/:id", "PostController.show");

Route.patch("/posts/:id", "PostController.updated");

Route.delete("/posts/:id", "PostController.destroy");

Route.get("/users", ({ request }) => {
  switch (request.format()) {
    case "json":
      return [{ name: "wanghao" }, { name: "xiaoxue" }];
    default:
      return `--wanghao --xiaoxue`;
  }
}).formats(["json", "html"], true);

Route.group(() => {
  Route.get("/user", () => "manage users");
  Route.get("/posts", () => "manage users");
}).prefix("admin");
