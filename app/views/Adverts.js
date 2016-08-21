define(function(require){
	"use strict";
	
	// require('bootstrap');
	// require('jquery');
	require('backbone');



	var advertsTemplate		= require('text!../tpl/adverts.html');
	var	adverts 			= require('collections/adverts');

	var thisView = Backbone.View.extend({
		tagName: 'div',
		className: 'col-xs-12 col-md-4 col-lg-4 advert',
		template: _.template(advertsTemplate),
		collection: {
			adverts: adverts,
		},
		initialize: function(){
			this.render();
			// $('.header-title').html('Submit an Ad');
		},
		render: function(){




			var that = this;
			setTimeout(function(){
				var get_tamplate = that.template(that.collection.adverts);
console.log(get_tamplate, that.collection.adverts)
				that.$el.append(get_tamplate);

			}, 100);




			return this;
		},
		events: {
			'click .add-advert'		: 'addAdvert',
		},
		addAdvert: function(e){
			e.preventDefault();
			console.log('addAdvert')
		}
	});

	return thisView;
})