/**
@module plugins/externalsTag
@author Pete McVicar
**/

exports.handlers = {
/**
Support @externals tag. Expected value like:{ "name": "jQuery", "url": "http://www.jquery.com" }
**/
    newDoclet: function(e) {
        var tags = e.doclet.tags,
            tag = [],
			value;

        if (typeof tags !== 'undefined') {
            tags = tags.filter(function($) {
                return $.title === 'externals';
            });

            if (tags.length) {

				for (var tagValue in tags){
					try {
						value = JSON.parse(tags[tagValue].value);
					}
					catch(e) {
						throw new Error('@externals tag expects a valid JSON value, like { "name": "jQuery", "url": "http://www.jquery.com" }.');
					}

					tag.push(value);
				}

                !e.doclet.externals && (e.doclet.externals = {});
                e.doclet.externals = tag;
            }
        }
    }
};