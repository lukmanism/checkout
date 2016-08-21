define(function(require){
	"use strict";
	
	require('backbone');

	var loginFormTemplate		= require('text!../tpl/loginForm.html');

	var thisView = Backbone.View.extend({
		el: '.page-container',
		tagName: 'div',
		className: 'form-middle center',
		template: _.template(loginFormTemplate),
		initialize: function(){
			this.render();
			$('.header-title h3').html('MVM4 Login');
		},
		render: function(){
			this.$el.append(this.template());
			return this;
		},
		events: {
			'click .button'		: 'login',
			'blur .username'	: 'checkUsername',
		},
		login: function(){
			console.log('login')
		},
		checkUsername: function(){
			console.log('checkUsername')
		}

	});

	return thisView;
})