# annotator-imgselect
Image selection plugin for Annotator.js

**annotator-imgselect** is developed for
[Annotator 2.x](https://github.com/openannotation/annotator/releases).

Includes annotator.meltdown.css to adjust for annotator/meltdown
style interactions.

##Demo
[View a simple demo of annotator-imgselect.](http://emory-lits-labs.github.io/annotator-imgselect/demo/)


##Dependencies
* jQuery 1.8+
* Annotator.js
* [ImgAreaSelect jQuery plugin](http://odyniec.net/projects/imgareaselect/)


##Using annotator-imgselect
To use this plugin in your Annotator project, include the required
javascript and css, and initialize it as an annotator module with a
configuration of the image elements that can be selected for annotation.


Include imgareaselect CSS (provided here for convenience), imgareaselect
javascript, and the annotator-imgselect javascript.
(Built, minified version includes imgareaselect for convenience).

* http://emory-lits-labs.github.io/annotator-imgselect/src/jquery.imgareaselect-0.9.10/css/imgareaselect-default.css"/>
* http://emory-lits-labs.github.io/annotator-imgselect/build/latest/annotator.imgselect.min.js


```
    var app = new annotator.App();
    app.include(annotatorImageSelect, {
        element: $('.content img'),
    });

```

##Installation

