'use strict'

const User = use('App/Models/User')
const { validate, validateAll } = use('Validator')

class UserController {
  async index () {
  }

  async create ({ view }) {
    return view.render('user.create')
  }

  async store ({ request, session, response }) {
    const rules = {
      username: 'required|unique:users',
      email: 'required|email|unique:users',
      password: 'required|min:6|max:30'
    }

    const validation = await validateAll(request.all(), rules)

    console.log(validation)

    if (validation.fails()) {
      session
        .withErrors(validation.messages())
        .flashAll()

      return response.redirect('back')
    }

    const newUser = request.only(['username', 'email', 'password'])
    const user = await User.create(newUser)

    return response.redirect(`/users/${ user.id }`)
  }

  async show ({ params, view }) {
    const user = await User.find(params.id)

    await user.loadMany({
      posts: builder => builder.select('id', 'title', 'content'),
      profile: builder => builder.select('github')
    })

    return view.render('user.show', { user: user.toJSON() })

    // const { username, email } = user.toJSON()
    // const profile = await user
    //   .profile()
    //   .select('github')
    //   .fetch()
    //
    // const posts = await user
    //   .posts()
    //   .select('title', 'content')
    //   .fetch()
    //
    // return {
    //   username,
    //   email,
    //   profile,
    //   posts
    // }
  }

  async edit () {
  }

  async update () {
  }

  async destroy () {
  }
}

module.exports = UserController