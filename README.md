# Dependencies
You'll need the following installed on your computer:

## Node
Go to the [Node.js site](https://nodejs.org/en/download/) and click on **Windows Installer** or **Mac Installer** depending on what platform you're using.
![Node JS Installer Options](http://ahhacreative.s3.amazonaws.com/U_OF_FL/nodejs-installer.png)

It will download a packaged file to your computer. Once it's finished downloading, click on the file to install it. It will run an installer, to walk you through the process. This is pretty straightforward.

## Bower
Go to [Bower's site](https://bower.io/) and scroll down to the section entitled **Install Bower**. You'll find a command that you'll run within the Terminal that will do all the work for you. It's probably:

```bash
$ npm install -g bower
```

But, it wouldn't hurt to go to the Bower site just to make sure that it hasn't changed since the creation of this file.

**Remember,** when you're copying and pasting lines to run inside the Terminal, _do not_ copy and paste the $.

If you're wondering what Bower does, it's a "package manager." Meaning, instead of going to a bunch of websites, downloading, unzipping, and copying and pasting files into the appropriate folder, bower does all of this for you. While these tasks are not difficult or complicated, they do compile overtime, especially when these 3rd party files and libraries need to be updated.

This project already has a **bower.json** file included that will tell bower what packages we want to include by default.

### Troubleshooting
If you start running these commands within the browser and see errors related to **Permissions**, then run the same command again, except this time, put use `sudo` in front of it. For example, instead of

```bash
$ npm install -g bower
```

Use this:

```bash
$ sudo npm install -g bower
```

`sudo` tells the Terminal you want to run the command as a super user. It will ask for your computer's password in order to execute the command.

In general using `sudo` is not good practice. But, in this case, it gets the job done and prevents error messages (related to permissions) from appearing.

## Gulp
Go to the [Gulp.js site](http://gulpjs.com/). At the very top of the page are the commands you need to install Gulp. It's probably:

```bash
$ npm install gulp-cli -g
$ npm install gulp -D
```

It's still a good idea to go to the website and check to make sure they haven't changed.

The line `touch gulpfile.js` simply creates a file in your project file called gulpfile.js. I've already created this file for you with the information you need.

`gulp --help` simply displays information about using gulp within the Terminal. You don't need to worry about running either of these commands.

As a brief recap, **Gulp** is simply a task manager. Meaning, by itself it does nothing. It only runs the tasks that you tell it to do.

This project has a **package.json** file that tells Node all the plugins and files we want to include in order to run the tasks. As I mentioned earlier, I've also included a **gulpfile.js** that creates all the tasks for your project.

### Troubleshooting

Again, if you're getting permission errors, try running the command with `sudo` in front.

## Yarn
Go to the [Yarn site](https://yarnpkg.com/en/docs/install) and scroll down on the installation page to get the command you need to run in the terminal to install Yarn. For a Mac, it's probably something like this:

```bash
$ brew install yarn --ignore-dependencies
```

_NOTE:_ You want to use the `--ignore-dependencies` option because we installed Node.js in our first step.

### Troubleshooting

**You may or may not already have `brew` installed on your computer.** If you're not sure, run this command in the Terminal:

```bash
$ brew -v
```

If you have `brew` properly installed it will tell you the version number of brew that you have on your computer. Otherwise, it will say something like, "Command not found."

Take a moment to install brew. Go to [Brew's website](https://brew.sh/) and run the command they provide at the top of their site. Probably something like this:

```bash
$ /usr/bin/ruby -e "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/master/install)"
```

With brew installed, you can go back and finish installing Yarn:

```bash
$ brew install yarn --ignore-dependencies
```

---

# QuickStart
Now, that you have all the dependences on your machine, you can actually use this code!

1. **Clone this repository.** -- Or at the very least download the files, unzip it and move the files into your project folder.
2. **Navigate to your project folder within the Terminal and run `yarn install`.** (_See the note about troubleshooting below._) This line looks inside the **package.json** folder and downloads all the plugins and task files you need in order to run gulp. Once it's complete, you'll notice you now have a **node_modules** folder within your project directory.
3. **Run `bower install` from within the Terminal.** This line looks at the **bower.json** file and installs any frontend packages. (Further down, in this file, I have information about what libraries I'm including and how they can be implemented.)
4. **Run `gulp`.** You'll run `gulp` form the command line any time you start developing. If you want to make it stop, simply hit Ctrl + C. Further down, in this file, I have information about what gulp does specifically. As well as areas where you can adjust and customize the gulpfile.js to suit your needs.

### Troubleshooting `yarn install` or `sudo yarn install`
If you're getting error messages when you try to run Yarn, look at what the error message says within the Terminal, near the top. If you're on a Mac, there's a good chance it will say something saying about XCode missing.

XCode is a code editor that's created by Apple that helps developers write mobile applications. Surprisingly enough, you need this installed and running on your computer in order for everything to run. Why? When you install XCode, in addition to the code editor, it also sets up your machine with a suite of developer tools. Yarn relies on those packages in order to work.

Simply, go to the Apple Mac Store and search for XCode. Install it, it's free(!)

_Now,_ with XCode up and running, try running the Yarn command again.

---

# Directory Structure
tk

---

# Bower Components

By default, we're only installing two libraries by default:

* [jQuery](http://jquery.com)
* [FitVids](http://fitvidsjs.com/)

If you want to install more, you can run `$ bower search PACKAGE_NAME` from within the Terminal. For example try:

```bash
$ bower search owlcarousel
```

or

```bash
$ bower search slick.js
```

Both these packages [Owl Carousel](https://owlcarousel2.github.io/OwlCarousel2/) and [Slick](http://kenwheeler.github.io/slick/) are my two favorite JavaScript sliders. Within the result set, you should see the package name followed by the repository URL on GitHub.

Once you've determined the name of the specific package you want to install, within the Terminal run:

```bash
$ bower install PACKAGE_NAME --save-dev
```

If you're not able to find the particular package you want to install, but you know the GitHub repository's URL, you can run:

```bash
$ bower install http://github.com/REPOSITORY_URL --save-dev
```

and it will still download and place the package contents within a **bower_components** folder.

The `--save-dev` flag means that bower will automatically update your **bower.json** file to include the newly installed package information

---

# Gulpfile.js

By default our Gulpfile.js is running serveral tasks:

### Creates an SVG sprite
_Line 27_
Any files that you put within the **assets / src / img / svg** folder will be included within an SVG sprite. The rendered SVG sprite file can be found inside **assets / dist / img / svg.svg**

You can reference it within your HTML with the following snippet:

```html
<svg role="img" class="icon"><use xlink:href="/assets/dist/img/svg.svg#THIS"></use></svg>
```

 Replace "THIS" with ID of your svg icon. By default, this is the file name. For example, facebook.svg would be referenced as

 ```html
 <svg role="img" class="icon"><use xlink:href="/assets/dist/img/svg.svg#facebook"></use></svg>
 ```

### Compiles Sass to CSS
_Line 45_
tk

### Handles JavaScript
_Line 60_
tk

* Concatenates
* Uglifies
* Includes extra JavaScript libraries

### Minifies Images
tk

### Moves fonts
tk

### Clear Cache
tk

### Cleans up the dist folder
tk

### Runs Browser Sync
tk

### Watches for changed files
tk

---

# .gitignore
tk
