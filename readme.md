External Tags
=============

This is a [JSDoc's](https://github.com/jsdoc3/jsdoc) plugin to enable linking external libraries in your JS documentation.

Install the js file into your jsdoc/plugins folder and update your conf.json file with
```JSON
"plugins": [
	"plugins/externaltags",
],
```

In your js file add @externals { "name": "jQuery", "url": "http://www.jquery.com" }

In the details template add
====================
```HTML
<?js if (data.externals && data.externals.length) { ?>
	<h2 class="subsection-title">Externals</h2>
	<ul>
	<?js data.externals.forEach(function(r) { ?>
		<li><a href="<?js= r.url ?>"><?js= r.name ?></a></li>
	<?js }); ?>
	</ul>
<?js } ?>
```