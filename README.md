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

See [installation instructions](http://emory-lits-labs.github.io/annotator-imgselect/#install) for more details.

<!--- TODO: probably worth documenting briefly how image coordinates are stored -->

## Developer Notes

This project uses [git-flow](https://github.com/nvie/gitflow) branching conventions.

To view the jekyll site for development, you should do the following:
- make sure you are on the **develop** branch
- make sure you have [jekyll installed](http://jekyllrb.com/docs/installation/)
- run the site via jekyll: ```jekyll serve```

Released versions are published through GitHub site pages, which are served out from
the gh-pages branch.  Following git-flow conventions, this should be an exact
replica of the master branch.  As a convenience, to update the gh-pages branch
from master and push it to github, you may want to configure the following alias
in your ``.git/config`` for this project:

    [alias]
        publish-pages = "!git checkout gh-pages && git merge master && git push origin gh-pages && git checkout -"

Whenever you tag a new release you want to be available as a version that
can be included from the github pages url, you should also do the following:
- update the version number in package.json
- checkout gh-pages branch and run ```grunt```
- add the build version of annotator.imgselect.min.js to gh-pages branch

