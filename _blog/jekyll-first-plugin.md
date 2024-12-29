---
title: "Your first Jekyll plugin"
date: 2024-12-23
tag: "programming"
description: "A beginner friendly guide to plugins"
---

You may want to create your own Jekyll plugin, however, there isn't a complete, modern and beginner friendly guide on how to create a Jekyll plugin. This guide is aimed towards people who haven't ever created a Jekyll plugin and don't know Ruby. This isn't just a walkthrough of all the things that you need to create your plugin but also to understand how they work. By understanding the fundamentals, and the why of everything you will save yourself many headaches when debugging.

<!--more-->

**What is a plugin?**
A plugin is an extension of a program's (Jekyll's) core features.

**Why would I want to create one?**
You could create one if you have a necessity that isn't covered by any of the existing plugins or if you just want to learn Ruby.

**What can I expect from this guide?**
This guide will be an explained walkthrough of the creation, maintenance and publishing of a basic plugin. The program itself won't do anything useful, but it will serve as a solid foundation for whichever plugin idea you have. This guide aims to cover the maximum common ground between all plugins, and explain in great detail how they work. 

In the future, however, I will create a more specific guide explaining the creation and how my plugin works.

Depending on your use case you may want to create your plugin as a gem so it can be published on the Ruby Gems repository, or if it's just simpler, creating a ruby file and placing it in `_plugins` directory on your project will automatically run it. 

Now is a good time to explain what a ruby gem is: It's a package of code that adds functionality to a Ruby project. It's a sort of .zip file for a library. That's why Jekyll plugins are shared as gems; because it's the easiest way to share ruby libraries. They are meant to be shared from the Ruby Gems repository, however that's not necessary.

For this tutorial however, I will go through how to create the base for a plugin using Ruby's gems.

**Table of contents**
- [Choosing a name for Your Plugin](#choosing-a-name-for-your-plugin)
- [Creating the Skeleton](#creating-the-skeleton)
- [Creating Your Gem Specification Reference](#creating-your-gem-specification-reference)
- [Configuring the Gemfile](#configuring-the-gemfile)
- [Writing a Dummy Program](#writing-a-dummy-program)
- [Building and Installing Your Gem](#building-and-installing-your-gem)
- [Linking the Gem in Jekyll](#linking-the-gem-in-jekyll)
- [Building the Site with the Gem](#building-the-site-with-the-gem)
- [Reloading the Gem](#reloading-the-gem)
- [Changing Gem Versions](#changing-gem-versions)
  - [The Simple way](#the-simple-way)
  - [The "correct" way](#the-correct-way)
- [Publishing the Gem](#publishing-the-gem)
  - [Publishing it on GitHub](#publishing-it-on-github)
  - [Publishing it on RubyGems.org](#publishing-it-on-rubygemsorg)
- [Continuation](#continuation)
- [Further Reading](#further-reading)

## Choosing a name for Your Plugin

Before you create your plugin, you should think a name for it. From what I've seen the best practice is to have a concise name that describes the general purpose of your plugin. Why no long names? Idk, people are lazy to type. This means that you must select the words carefully.

Additionally, since you are building a Jekyll plugin it's a good idea to prepend it with Jekyll like so:

`jekyll-plugin-name`

Where `plugin-name` is whatever you want your plugin name to be.

**A bit of contradictory background**
In theory, according to the Ruby documentation, dashes (`-`) mean that whatever comes after the dash comes from a module from before the dash. Like here: `jekyll-plugin-name` means that `plugin-name` comes from the module `jekyll`.  Underscores (`_`) on the other hand mean that there are multiple words in your name. So technically your plugin should be like so: `jekyll-plugin_name`. However, that looks very weird, and I haven't seen it on any Jekyll plugins, so it's preferable with just dashes.

Below is a list of some arbitrary list of popular Jekyll plugins from [Awesome Jekyll Plugins [github.com]](https://github.com/planetjekyll/awesome-jekyll-plugins) and their gem names so that you can get a better picture of how they are named:

- jekyll-default-layout
- jekyll-optional-front-matter
- jekyll-polyglot
- jekyll-feed
- jekyll-scholar
- jekyll-archives
- jekyll-tagging
- jekyll-paginate-v2
- jekyll-asciidoc
- jekyll-twitter-plugin

For more information about naming conventions check the official Ruby docs here: [Name your gem [guides.rubygems.org]](https://guides.rubygems.org/name-your-gem/)

## Creating the Skeleton

*From now onwards the name of your plugin will be represented by the placeholder:* `jekyll-plugin-name`

The first thing that you need to do is create a directory anywhere and that will be the one that you will use to store your gem in.

It's helpful if you keep version control in your project so running: `git init` and commiting on every semi-important change might be a good idea.

Jekyll plugins usually have a structure similar to this one, and for best practices you should follow it. The why for this structure and what each file does will be explained later in this guide.

```bash
│   Gemfile
│   jekyll-math-svg.gemspec
│
└───lib
    │   jekyll-plugin-name.rb
    │
    ├───jekyll
    │       plugin-name.rb
    │
    └───jekyll-plugin-name
            version.rb           
```

Once you have recreated the file tree, you can verify it by running:

```bash
tree /f # On windows
tree -d # On Linux (you may need to install it)
```

Keep in mind that it is very important that the name of the `.gemspec` file is exactly the same as name of your plugin.

You can go even further but this is the bare minimum whilst keeping a coherent structure. There is a lot of excellent documentation for creating your ruby gems (specially [guides.rubygems.org](https://guides.rubygems.org))

In the following sections I will explain in greater details what each of those files do.

## Creating Your Gem Specification Reference

The .gemspec file is like the configuration file of your gem. Here, the gem builder will know how to combine the files, but also get a description of the gem. Here's what a basic .gemspec file might look like:

```Ruby
Gem::Specification.new do |s|
    s.name = 'jekyll-plugin-name'
    s.version = '0.0.1'
    s.license = 'MIT'
    s.summary = "Brief description of your plugin"
    s.description = "A lengthier description. Here you can explain in general how it works, what it depends on and what purpose it fulfils in more detail."
    s.authors = ['yourName']
    s.email = 'yourEmail@liamg.com'
    s.homepage = 'https://github.com/username/jekyll-plugin-name'

    s.files = Dir["lib/**/*"]

    s.required_ruby_version = ">= 3.0.0"

    s.add_dependency "jekyll", ">= 3.5.0"
end
```

The gemspec will need at least `authors`, `files`, `name`, `summary` and `version` to be valid. However, since this is a Jekyll plugin, `add_dependency` is necessary interact with Jekyll.

Most of the lines are self-explanatory, like name, summary and author. However, let's take a look at some that might not be as obvious.

The `files` means which files should the program keep when building the gem.  In the example I used `Dir["lib/**/*]` which is a ruby command that will include all the directories inside the `lib` directory. `Dir` is a class that tells ruby that you are specifying a directory, and `lib/**/*` is the regex of sorts. This saves you time and headaches of manually typing in all files that you have inside.

The `required_ruby_version` should be the lowest version of ruby that you are willing to support. As for which minimum version is the best, you will need to test it. But if you run:

```Ruby
ruby -v
```

You will know the current version of Ruby that you are using. If you program works in that version, there is a good chance that it works in the latest major update. In the case of the example, I was running Ruby version 3.3.5, however this program should work from version 3.0.0 onwards.

To create a Jekyll plugin it is necessary to have Jekyll as a dependency. This is why you need the `add_depencency`. In the same fashion as the `required_ruby_version` you also need to include the minimum Jekyll version that you plugin supports, and you can usually go down a couple of versions older that the current one. Although make sure to test it to see if something breaks.

To know the Jekyll version that you are using in your page, you can look into the `Gemfile.lock` file inside of your Jekyll site project root directory (assuming that you have a working Jekyll site). There, you should be able to see the version of Jekyll in a line like so:

```ruby
...
github-pages (232)
	...
	jekyll (= 3.10.0)
	...
```

In this case the Jekyll version used would be `3.10.0`.

I have seen some plugins (like [Jekyll Feed](https://github.com/jekyll/jekyll-feed/blob/master/jekyll-feed.gemspec)) limit the Jekyll version to some very future Jekyll versions like: < 5.0.0 to prevent incompatibilities in the future. That might be a good idea to include in your plugin as well.

There are, however, many more things that you can add to your gem specification file to make it more complete. For more information about .gemspec files take a look at the official documentation: [Specification reference [guides.rubygems.org]](https://guides.rubygems.org/specification-reference/)

## Configuring the Gemfile

You might have seen that there is a file in the file tree without any file extensions called `Gemfile`, this is the way that the gem manages its dependencies.

A typical Gemfile might look like this:

```Ruby
source "https://rubygems.org"

gemspec

gem "jekyll", ENV["JEKYLL_VERSION"] if ENV["JEKYLL_VERSION"]
```

Let's go line by line looking at what this does:

`source "https://rubygems.org"` means that whatever dependencies we specify in this file we will grab them from the Ruby Gems repository. This is where most of the gems are hosted and can easily be installed by appending them into the Gemfile. This line is technically not needed as it will default to that repository, but it helps explain everything else.

`gemspec` pulls the dependencies and their versions from the `.gemspec` file.

`gem "jekyll", ENV["JEKYLL_VERSION"] if ENV["JEKYLL_VERSION"]` Is the way that we add Jekyll as a dependency. Without this the plugin won't work. The version is conditional on being specified, but if it's not, it defaults to the one described in the `.gemspec` file. That's why we needed the previous `gemspec` line before.

## Writing a Dummy Program

The plugin will need a main program which to run. To write the program you will need to learn Ruby, however, the good thing about Ruby is that you don't need to know the language to read it. To start, create a `plugin-name.rb` file inside of your `/lib/jekyll` directory. 

For this example and for this guide, the plugin will be the one described below. All it will do is log that is is being run.

```Ruby
module Jekyll
    class PluginName < Jekyll::Generator
        safe true

        Jekyll.logger.info "plugin-name: ", "Plugin is running!"

        def generate(site)
            # A lot of ways to know if the program is running
            Jekyll.logger.info "plugin-name: ", "Generator is running!"

            # The most obvious way to know if it's running is to willingly crash the program
            # raise "Test Exception: Plugin is being executed!"
        end
    end
end
```

Now let's break it down:

For starters you need to specify what type of plugin you are creating. Depending on the type of plugin that you are building you will need to change the `Generator` here for `Command`, `Hook` or something else. Think it like different use cases require different configurations for Jekyll. If you want to generate stuff you will need to use the Generator type. If you need to execute custom commands, use the Command type.

For more information look into the Jekyll Docs to know exactly what each of the options does: [Your first plugin [jekyllrb.com]](https://jekyllrb.com/docs/plugins/your-first-plugin/).

```Ruby
module Jekyll
    class PluginName < Jekyll::Generator
```

Here we are creating a Generator plugin so Jekyll will run `def generate(site)` inside here, we can place all the functions that we need for the program to run. If you are creating a generator type program, you will need to include this function. You cannot change it's name or remove it's argument. For now, just logging some debug info is enough to know if the plugin is running.

To log the debug info, we run the `Jekyll.logger.info` command. This should log the messages when we build the site with the `--verbose` tag.

However, logging messages requires you to run the `bundle exec jekyll serve --verbose` with the verbose tag. That is perfectly fine but you might miss it. A more obvious way to know if the program is running is to crash it. This will throw an error that will fill most of the terminal so we should be able to see clearly that the plugin is being loaded. Note that this is not what should be used for logging ever, but in this case it's the easiest way to know that the plugin is being run. Remember to delete it later. We crash the program by using:

```Ruby
raise "Any message"
```

Now, to actually run the program we need another file that will just point out to the file that we created before. This is the "correct" structure. As you will see, modularity and structure clarity are very important for gems, and programming in general. For this reason, under `lib/` we will create a folder named `jekyll-plugin-name.rb` where we will just add:

```Ruby
require "jekyll/plugin-name.rb"
```

As you can see all this does is point out to the other file that we created earlier.

This may seem redundant, and it probably is for this example. However, when having multiple files that your program needs to run, having them all in a single file with multiple requires makes everything much easier to visualize.

## Building and Installing Your Gem

The first thing that you will need to do is to convert your program into a single gem. To do that run the `build` command from your gem directory:

```ruby
gem build
```

Note that this program won't run unless you have a `.gemspec` file in your root folder. Also, you need to have some files in the `s.files` that we generated earlier in the [#Creating Your Gem Specification Reference](#Creating Your Gem Specification Reference), otherwise it will just throw an error.

That should have created a `.gem` file in your root folder. It might be a good idea to add it to your `.gitignore`. You can do that easily with:

```bash
echo "*.gem" >> .gitignore
```

Or by typing it manually. However, we all know that commands are cooler.

Next you will need to install that gem into your system, to do so run:

```ruby
gem install ./plugin_name.gem
```

If you are curious where did your gem go you can run:

```bash
gem environment home | cd
cd gems
ls
```

If everything has gone correctly your gem should appear in the `ls` output. As you will see, the gems are placed in a central directory where don't belong to any project there.

## Linking the Gem in Jekyll

I am assuming that you already have a working Jekyll site where you can test this plugin.

 To link your gem with the site there are a couple of things that you must do:
 
 First, you should add it at the end of your `Gemfile` like so:

```ruby
group :jekyll_plugins do
    gem 'jekyll-plugin-name'
end
```

IT'S VERY IMPORTANT that you add the `group :jekyll_plugins do`, if you just add `gem jekyll-plugin-name` it won't work, and you will spend the entire afternoon trying to figure out why… In theory it's only needed for plugins that are of the type `Command` but for some reason it also enables debug information to show. I don't know why.

BUT you also need to add it to your plugins in the `_config.yaml` so just make sure that your plugin is added like so:

```yaml
plugins:
  - jekyll-plugin-name
  - other-plugins-if-needed
```

## Building the Site with the Gem

Once you've successfully linked the gem, run:

```ruby
bundle install
```

That will install all the gems from the Gemfile that are not in the cache. Your gem should be new and therefore shouldn’t be in the cache; therefore, it should install it.

Bundle is the command for managing everything in your Jekyll site, it manages the dependencies, runs the site, etc. You can think of it like a project-specific `gem` command. Whereas `gem` controls the gems system-wide, `bundle` manages the gems inside your project. 

After running that you can make sure that it was installed by running:

```Ruby
bundle info jekyll-plugin-name
```

It should show up, and then you can inspect the contents of it by going to the directory listed as `Path:`, there you should be able to see the version of your gem that has been loaded by Jekyll.

Once you know that everything is in place, you can run:

```Ruby
bundle exec jekyll serve -l
```

This will execute `jekyll serve -l` which builds the site. The `-l` flag is completely optional, but I would recommend it because it enables live-reload. Live reload means that you can make changes in your site, and they will appear on the server without needing to re-run this same command again, it will even reload the website for you.

## Reloading the Gem

When you apply some changes to the gem you will need to update the cache, as Jekyll will still hold the previous version of the file. So, what you need to do is to FIRST uninstall the gem from the system by running:

```Ruby
gem uninstall jekyll-plugin-name
```

Then, you can build and install the gem to the system again as mentioned in the [#Building and Installing Your Gem](#Building and Installing Your Gem).

And then you run from the site root folder:

```Ruby
bundle install
```

This will install all the gems and since the one that you removed from the system is now gone, it will install again the newest version.

However, how do you know if the gem has the latest changes that you wanted it to have and not some other cached changes? Well, we have already discussed a method for doing that in [#Building the site with the gem](#Building the site with the gem), you can run:

```Ruby
bundle info jekyll-plugin-name
```

And from there you go into the path and check the contents to see if there is the newer version.

If that is not the case, then you can delete the folder specified in the path, and now since Jekyll won't have any cached versions, it will be forced to install the newest one.

## Changing Gem Versions

However, if the changes that you made are important and stable, then you might want to consider upgrading the version of your gem. To do so there are two ways:

### The Simple way

We have already done it the simple way in the example from [#Creating Your Gem Specification Reference](#Creating Your Gem Specification Reference). In your `.gemspec` from your gem root folder, you can change the version from `s.version`. Note that the `s` can be whatever you specified as `Gem::Specification::new` in the gemspec.

### The "correct" way

Most popular gems do it this way, and it is for a reason: modularity and safety. Instead of having a line that says:

```Ruby
s.version = 'some.random.version'
```

They instead specify it as a constant from some modules, so they put:

```Ruby
s.version = Jekyll::PluginName::VERSION
```

If you do this, remember that you must add the following line to the start of your .gemspec file:

```Ruby
require_relative "lib/jekyll-plugin-name/version"
```

 This will let the program know where you are storing the version constant.

And then on `./lib/jekyll-plugin-name` they add a `version.rb` file where they declare the constant like so:

```Ruby
module Jekyll
  module PluginName
    VERSION = "some.random.version"
  end
end
```

This is the preferred solution because it keeps the files modular, and it means that when you change the version you just need to change this one constant that you know where it is in a specific file. Or maybe it is because programmers like to have many files to that it appears like they have done more work, idk.

## Publishing the Gem

Once you're done with the gem and you have reached a stable enough release you can publish it. You have two options that are not mutually exclusive.

### Publishing it on GitHub

You can publish your gem on GitHub or other similar sites to publicly keep track of the versions, interact with the community and accept pull requests. Additionally, this serves as a way for people to download it from. By using:

```Ruby
gem 'jekyll-plugin-name', git: 'github repository url'
```

### Publishing it on RubyGems.org

The first thing that you will need to do is to sign up on [rubygems.org](https://rubygems.org).

Now that you have an account from your terminal you can type:

```Ruby
gem push jekyll-plugin-name.gem
```

It will ask you for your credentials, and that it! Now, you and everyone can see and easily download your gem!

For more information: [Publishing your gem [guides.rubygems.org]](https://guides.rubygems.org/publishing/)

## Continuation

I wrote this whilst I was creating my own Jekyll plugin, so this reflects and tries to fix all the issues that I encountered when building mine. As of publishing this, I'm still on the process of creating my plugin, and when I publish it, I will also publish a sort of dev blog / guide on how it works and try to give some tips for creating plugins in general coming from a more advanced and specific example.

If you don't want to miss it, you can subscribe to my RSS feed, and you will get notified when the new post drops out.

Thanks for reading and I hope you found it helpful!

## Further Reading

- [Gems Bible [guides.rubygems.org]](https://guides.rubygems.org/)
- [Your first plugin [jekyllrb.com]](https://jekyllrb.com/docs/plugins/your-first-plugin/)
- [Creating a Jekyll Plugin [dev.io]](https://dev.to/hasidicdevs/creating-a-gemfile-for-a-jekyll-plugin-a-step-by-step-guide-oka)
- [Making a Jekyll Gem [mslinn.com]](https://www.mslinn.com/ruby/6500-making-jekyll-gem.html)
