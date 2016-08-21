define(function(require){
	"use strict";
	
	// require('bootstrap');
	// require('jquery');
	require('backbone');



	var usersTemplate		= require('text!../tpl/users.html');
	var	users 				= require('collections/users');
	var	rules 				= require('collections/rules');
	var	coupons 			= require('collections/coupons');
	var	clients 			= require('collections/clients');


	var	Adverts 			= require('views/Adverts');

	var thisView = Backbone.View.extend({
		tagName: 'div',
		className: 'users test',
		template: _.template(usersTemplate),
		collection: {
			users: users,
			rules: rules,
			coupons: coupons,
			clients: clients,
		},
		initialize: function(){
			this.render();
			$('.header-title').html('Submit an Ad');
		},
		render: function(){
			this.$el.append(this.template());


			var that = this;
			setTimeout(function(){
				var user = that.collection.users.get(that.id);
				var client = that.collection.clients.get(user.get('client_id'));
				var user_rules = _.filter(that.collection.rules.toJSON(), function(rule){
						return (client.get('rules_id').indexOf(rule.id) !== -1)? rule: false;
				});

console.log({
	user: user,
	rules: that.collection.rules,
	coupons: that.collection.coupons,
	client: client,
	user_rules: user_rules,
})

				that.generateAdverts();

				$('.insert_name').html(user.get('name'));
			}, 1);




			return this;
		},
		generateAdverts: function(){
			var renderAdverts = new Adverts;
console.log('generateAdverts', renderAdverts, $('.select-ad', this.$el))
			$('.select-ad', this.$el).append(renderAdverts.el);
		},
		events: {
			// 'click .add-advert'		: 'addAdvert',
		},
		addAdvert: function(e){
			e.preventDefault();
			console.log('addAdvert')
		}
	});

	return thisView;
})