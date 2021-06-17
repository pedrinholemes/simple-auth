import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

export default class UsersController {
  public async login({ auth, request, response }: HttpContextContract) {
    if (auth.isLoggedIn) {
      return response.redirect('/success', true, 200)
    }
    const email = request.input('email')
    const password = request.input('password')
    const rememberMe = request.input('rememberMe', false)

    try {
      await auth.use('web').attempt(email, password, rememberMe)
      response.redirect('/success', true, 200)
    } catch {
      return response.badRequest('Invalid credentials')
    }
  }

  public async logout({ auth, response }: HttpContextContract) {
    try {
      await auth.use('web').logout()
      response.redirect('/dashboard')
    } catch {
      return response.badRequest('Invalid credentials')
    }
  }
}
