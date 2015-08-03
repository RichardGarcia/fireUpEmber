var App = Ember.Application.create();

// Router
// '/#/tables'
// 'tables/table_id'
App.Router.map(function() {
	this.resource('tables', function() {
		this.resource('table', {path: ':table_id'});
	}); 
});

App.TablesRoute = Ember.Route.extend({
	model: function() {
		return App.Table.find();
	}
});

// Controller
// Check more controller option....
App.TablesController = Ember.ArrayController.extend();


// Models
App.Store = DS.Store.extend({
	revision: 11,
	adapter: 'DS.FixtureAdapter'
});

App.Table = DS.Model.extend();

// Sample data
App.Table.FIXTURES = [{
	id: 1
}, {
	id: 2
}, {
	id: 3
}, {
	id: 4
}, {
	id: 5
}, {
	id: 6
}];
