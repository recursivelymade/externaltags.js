External Tags
=============

This is a [JSDoc's](https://github.com/jsdoc3/jsdoc) plugin to enable linking external libraries in your JS documentation.

Install the js file into your jsdoc/plugins folder.

In your js file add @externals { "name": "jQuery", "url": "http://www.jquery.com" }

In your template add
====================
```HTML
<?js if (doc.externals && doc.externals.length) { ?>
	<h2 class="subsection-title">Externals</h2>
	<ul>
	<?js doc.externals.forEach(function(r) { ?>
		<li><a href="<?js= r.url ?>"><?js= r.name ?></a></li>
	<?js }); ?>
	</ul>
<?js } ?>
```

