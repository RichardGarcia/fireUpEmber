# fireUpEmber

Ember.js is a highly anticipated framework for writing ambitious client-side web applications. But the initial learning curve can be a bit steep. MVC on the client works differently than it does on a server-based application. Ember can save you from writing a lot of code...but only if you understand how it works and what it expects. This course covers the very latest 1.0.0-pre4 version of Ember in 85 minutes.
- by Geoffrey Grosenbach
- http://www.pluralsight.com/courses/description/fire-up-emberjs

Note(s):
- Complete this and understand... :)
- Try to update using Ember-Cli
- Add "Update order(s)" function, "Delete" order(s)
- Play with Bootstrap CSS/JS
- Play with SASS or LESS
- Play with Font Awesome or Glyphs to replace png images


---
- same output..

        <script type="text/x-handlebars" data-template-name="food">
            <ul id="menu">
        		{{#each controller}}
        			<li>
        				<p>{{name}}</p>
        			</li>
        		{{/each}}
        	</ul>
        </script>
        
        <script type="text/x-handlebars" data-template-name="food">
        	<ul id="menu">
        		{{#each food in controller}}
        			<li>
        				<p>{{food.name}}</p>
        			</li>
        		{{/each}}
        	</ul>
        </script>
---

---
7 tips for debugging..

1. Ember.js Developer Build (use non-min)
2. Refresh the browser (ctrl+f5), restart server??
3. App.Router.router.recognizer.names
4. Debugger;
5. {{controller}} in views
6. Use the model in the console
7. ?

---

Check this..
- bindAttr in using images
