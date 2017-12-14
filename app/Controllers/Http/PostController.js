'use strict'

class PostController {
	async index({ view }) {
		return view.render('posts.index', {
			title: 'latest posts'
		})
	}
}

module.exports = PostController
