Code Cumbria
============

[Code Cumbria](http://codecumbria.org) is an inclusive group for anyone
involved or interested in technology, software development, and digital
creativity in Cumbria, North-West England and South-West Scotland.

This is the [Jekyll](http://jekyllrb.com/)-powered site for Code Cumbria. In
addition [Bower](http://bower.io/) is used to manage the dependencies -
currently [Bootstrap](http://getbootstrap.com/) and
[jQuery](http://jquery.com/) - while [Grunt](http://gruntjs.com/) is used to
automate the build process. In turn, both of these are managed using
[npm](https://npmjs.org/).

The website is hosted using [GitHub Pages](http://pages.github.com/).

Setting up development environment
----------------------------------

### Prerequisites

Before you begin, ensure you system has:

- [Ruby v1.9.3](https://www.ruby-lang.org/) (or newer)
- [Node.js](http://nodejs.org/)

### Bower and Grunt (via npm)

Ensure you have `bower` and `grunt-cli` installed globally, or be prepared to
mess around with paths!

    $ npm install -g bower grunt-cli

Use `npm` to install required Node.js packages:

    $ npm install

Use `bower` to install dependencies:

    $ bower install

### Jekyll (via Bundler and RubyGems)

Use `gem` to install [Bundler](http://bundler.io/):

    $ gem install bundler

Use `bundle` to install required RubyGems (including Jekyll) as used by
GitHub Pages:

    $ bundle install

Modifying the site (content)
----------------------------

Edit/add files as necessary. Since we're leveraging the power of Github pages
and Jekyll, don't forget you can edit files directly through Github for
instant satisfaction.

Modifying the site (style)
--------------------------

Although you can modify this site just like any other Jekyll site, there are a
few Grunt tasks to make life easier.

 * `grunt` - the default task will clean out the `assets` folder, and re-populate it from the dependencies installed by Bower (this need to be committed alongside the rest of the project)
 * `grunt development` - compiles the CSS (using less) and compiles the site (using Jekyll)
 * `grunt production` - compiles and minifies the CSS, and compiles the site (use before committing)
 * `grunt serve` - runs the development task, a webserver and watches for any changes (use for development/testing)

 Make sure you've run `clean` and `production` before committing style changes.

License
-------

[Creative Commons Attribution-ShareAlike 2.0 UK: England & Wales License](http://creativecommons.org/licenses/by-sa/2.0/uk/deed.en_GB)
