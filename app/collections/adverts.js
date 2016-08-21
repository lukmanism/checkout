define(function (require){
	var	ad = require('models/advert');

	var Ads = Backbone.Collection.extend({
		model: ad
	});

	var thisCollections = new Ads;
	thisCollections.set([
		{
			id: 1,
			alias: 'classic',
			name: 'Classic Ad',
			description: 'Etiam porta sem malesuada magna mollis euismod.',
			price: 269.99,
			created: '05/22/2015 03:54:38 PM'
		},
		{
			id: 2,
			alias: 'standout',
			name: 'Standout Ad',
			description: 'Etiam porta sem malesuada magna mollis euismod.',
			price: 322.99,
			created: '05/22/2015 03:54:38 PM'
		},
		{
			id: 3,
			alias: 'premium',
			name: 'Premium Ad',
			description: 'Etiam porta sem malesuada magna mollis euismod.',
			price: 394.99,
			created: '05/22/2015 03:54:38 PM'
		}
	]);

	return thisCollections;
});