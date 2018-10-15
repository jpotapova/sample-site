To view fully working sample site, please visit: https://jpotapova.github.io/sample-site/

Supported browsers are: Google Chrome, Firefox, IE11, Opera

Repository has 3 branches:

* dev - development environment branch, any changes should be performed on this branch first

* preprod - staging environment branch, where all final assets are generated and testing is pre-production testing performed

* gh-public - live environment branch

### Technology choices

#### Worflow automation

Grunt was chosen for workflow automation, as it is a very simple static website.
To speed up development process grunt was configured to open the browser, serve static website and perform live reload on src file changes.
Grunt was also used to do all the file pre-processing, such as compiling scss code, bundling javascript etc.
For production mode grunt is used to perfom bundling and minification.

#### CSS
Sass with scss syntax was used to write css. BEM was chosen as a convention. CSS was written with a mobile-first approach. Sass linting was configured with grunt.

#### JS
It was decided to write javascript code in vanilla javascript and not to use any frameworks, because there is very little javascript functionality needed and there weren’t any major issues with cross-browser compatibility. Javascript was linted with jshint grunt plugin.

### Instructions

To run development version locally:

1. preprequisites: Ruby, Sass, Grunt CLI
3. please clone the repositoty
4. Cd into project directory and `run npm install`
5. Run `grunt`

To view production version locally:
1. Clone the repository
2. Change to gh-pages branch
3. Open index.html in the browser
