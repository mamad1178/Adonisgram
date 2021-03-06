

import Route from '@ioc:Adonis/Core/Route'

Route.get('/','HomeController.index')
Route.on('/signup').render('auth/signup').middleware('guest')
Route.on('/login').render('auth/login').middleware('guest')


Route.post('/verify-email','EmailVerifiesController.index').middleware('auth')
Route.get('/confirm-email','EmailVerifiesController.store').middleware('auth')
Route.post('/logout','AuthController.logout')
Route.post('/signup','AuthController.signup') 
Route.post('/login','AuthController.login') 



Route.post('/follow/:userid','FollowsController.store').middleware('auth')
Route.delete('/follow/:userid','FollowsController.destroy').middleware('auth')
Route.get('/posts/create','PostsController.create').middleware('auth')
Route.post('/posts/create','PostsController.store').middleware('auth')
Route.post('/accounts/edit','ProfilesController.Update').middleware('auth')
Route.get('/accounts/edit','ProfilesController.edit').middleware('auth')
Route.get('/:username','ProfilesController.index').middleware('auth')