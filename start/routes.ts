import Route from '@ioc:Adonis/Core/Route'

Route.get('/', (ctx) => ctx.response.redirect('/login', true))

Route.get('/login', async (ctx) => {
  return ctx.view.render('login')
})
Route.post('/login', 'UserController.login')
Route.post('/logout', 'UserController.logout')
