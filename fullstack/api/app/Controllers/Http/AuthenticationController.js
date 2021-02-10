'use strict'
const User = use('App/Models/User')

class AuthenticationController {
  async index({ response }) {
    const users = await User.all()
    return response.json({
      users,
    })
  }

  async user({ auth, response }) {
    const user = await auth.getUser()
    return response.json({
      data: user,
    })
  }

  async register({ request, auth, response }) {
    const user = await User.create(request.all())

    const token = await auth.generate(user)

    Object.assign(user, token)

    return response.json(user)
  }

  async login({ request, auth, response }) {
    const { email, password } = request.all()

    try {
      if (await auth.attempt(email, password)) {
        const user = await User.findBy('email', email)
        const token = await auth.generate(user)
        return response.json({
          data: token,
          message: 'Login successfull',
        })
      }
    } catch (e) {
      console.log(e)
      return response.status(400).json({
        status: 'error',
        message: 'Email/Senha inválidos.',
      })
    }
  }

  async update({ request, response, auth }) {
    const user = auth.current.user

    const verifyPassword = await Hash.verify(
      request.input('currentPassword'),
      user.password
    )

    if (!verifyPassword) {
      return response.status(400).json({
        status: 'error',
        message:
          'Não foi possível verificar a senha atual! Por favor, tente novamente',
      })
    }

    user.merge(request.only(['name', 'username', 'email']))

    const newPassword = request.input('newPassword')
    if (newPassword) {
      user.password = newPassword
    }

    await user.save()

    return response.status(200).json({
      message: 'atualizado com sucesso',
    })
  }
}

module.exports = AuthenticationController
