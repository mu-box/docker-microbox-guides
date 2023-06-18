(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{162:function(t,a,s){"use strict";s.r(a);var n=s(0),e=Object(n.a)({},function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",{staticClass:"content"},[t._m(0),s("p",[s("router-link",{attrs:{to:"/"}},[t._v("Home")]),t._v(" asdf")],1),t._m(1),t._m(2),s("p",[t._v("Create a project folder and change into it:")]),t._m(3),t._m(4),t._m(5),t._m(6),t._m(7),t._m(8),t._m(9),t._m(10),t._m(11),t._m(12),t._m(13),t._m(14),t._m(15),s("p",[t._v("Add a convenient way to access your app from the browser:")]),t._m(16),t._m(17),t._m(18),t._m(19),t._m(20),s("p",[t._v("With Microbox, you have everything you need develop and run your Rails app:")]),t._m(21),t._m(22),s("p",[t._v("Whats next? Think about what else your app might need and hopefully the topics below will help you get started with the next steps of your development!")]),t._m(23)])},[function(){var t=this.$createElement,a=this._self._c||t;return a("h1",{attrs:{id:"rails-abc"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#rails-abc","aria-hidden":"true"}},[this._v("#")]),this._v(" Rails ABC")])},function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("pre",{pre:!0,attrs:{class:"language-docker"}},[s("code",[s("span",{attrs:{class:"token keyword"}},[t._v("FROM")]),t._v(" mubox/base\n\n"),s("span",{attrs:{class:"token comment"}},[t._v("# Create directories")]),t._v("\n"),s("span",{attrs:{class:"token keyword"}},[t._v("RUN")]),t._v(" mkdir "),s("span",{attrs:{class:"token punctuation"}},[t._v("-")]),t._v("p \\\n  /var/log/gomicro \\\n  /var/microbox \\\n  /opt/microbox/hooks\n\n"),s("span",{attrs:{class:"token comment"}},[t._v("# Install nfs client")]),t._v("\n"),s("span",{attrs:{class:"token keyword"}},[t._v("RUN")]),t._v(" apt"),s("span",{attrs:{class:"token punctuation"}},[t._v("-")]),t._v("get update "),s("span",{attrs:{class:"token punctuation"}},[t._v("-")]),t._v("qq && \\\n    apt"),s("span",{attrs:{class:"token punctuation"}},[t._v("-")]),t._v("get install "),s("span",{attrs:{class:"token punctuation"}},[t._v("-")]),t._v("y nfs"),s("span",{attrs:{class:"token punctuation"}},[t._v("-")]),t._v("common cron libgfortran3 libgomp1 && \\\n    apt"),s("span",{attrs:{class:"token punctuation"}},[t._v("-")]),t._v("get clean all && \\\n    rm "),s("span",{attrs:{class:"token punctuation"}},[t._v("-")]),t._v("rf /var/lib/apt/lists/*\n\n"),s("span",{attrs:{class:"token comment"}},[t._v("# remove pkgsrc base bootstrap to save space")]),t._v("\n"),s("span",{attrs:{class:"token comment"}},[t._v("# since it's replaced by the build and not used")]),t._v("\n"),s("span",{attrs:{class:"token keyword"}},[t._v("RUN")]),t._v(" rm "),s("span",{attrs:{class:"token punctuation"}},[t._v("-")]),t._v("rf /data && \\\n    mkdir "),s("span",{attrs:{class:"token punctuation"}},[t._v("-")]),t._v("p /data\n\n"),s("span",{attrs:{class:"token keyword"}},[t._v("RUN")]),t._v(" /opt/gomicro/bin/gem install remote_syslog_logger\n\n"),s("span",{attrs:{class:"token comment"}},[t._v("# Install hooks")]),t._v("\n"),s("span",{attrs:{class:"token keyword"}},[t._v("RUN")]),t._v(" curl \\\n      "),s("span",{attrs:{class:"token punctuation"}},[t._v("-")]),t._v("f \\\n      "),s("span",{attrs:{class:"token punctuation"}},[t._v("-")]),t._v("k \\\n      https"),s("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v("//s3.amazonaws.com/tools.microbox.cloud/hooks/code"),s("span",{attrs:{class:"token punctuation"}},[t._v("-")]),t._v("stable.tgz \\\n        "),s("span",{attrs:{class:"token punctuation"}},[t._v("|")]),t._v(" tar "),s("span",{attrs:{class:"token punctuation"}},[t._v("-")]),t._v("xz "),s("span",{attrs:{class:"token punctuation"}},[t._v("-")]),t._v("C /opt/microbox/hooks\n\n"),s("span",{attrs:{class:"token comment"}},[t._v("# Download hooks md5 (used to perform updates)")]),t._v("\n"),s("span",{attrs:{class:"token keyword"}},[t._v("RUN")]),t._v(" curl \\\n      "),s("span",{attrs:{class:"token punctuation"}},[t._v("-")]),t._v("f \\\n      "),s("span",{attrs:{class:"token punctuation"}},[t._v("-")]),t._v("k \\\n      "),s("span",{attrs:{class:"token punctuation"}},[t._v("-")]),t._v("o /var/microbox/hooks.md5 \\\n      https"),s("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v("//s3.amazonaws.com/tools.microbox.cloud/hooks/code"),s("span",{attrs:{class:"token punctuation"}},[t._v("-")]),t._v("stable.md5\n\n"),s("span",{attrs:{class:"token keyword"}},[t._v("WORKDIR")]),t._v(" /app\n\n"),s("span",{attrs:{class:"token comment"}},[t._v("# Run runit automatically")]),t._v("\n"),s("span",{attrs:{class:"token keyword"}},[t._v("CMD")]),t._v(" "),s("span",{attrs:{class:"token punctuation"}},[t._v("[")]),t._v(" "),s("span",{attrs:{class:"token string"}},[t._v('"/opt/gomicro/bin/microinit"')]),t._v(" "),s("span",{attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n")])])},function(){var t=this.$createElement,a=this._self._c||t;return a("h2",{attrs:{id:"create-a-rails-project"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#create-a-rails-project","aria-hidden":"true"}},[this._v("#")]),this._v(" Create a Rails project")])},function(){var t=this.$createElement,a=this._self._c||t;return a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{attrs:{class:"token function"}},[this._v("mkdir")]),this._v(" microbox-rails "),a("span",{attrs:{class:"token operator"}},[this._v("&&")]),this._v(" "),a("span",{attrs:{class:"token function"}},[this._v("cd")]),this._v(" microbox-rails\n")])])},function(){var t=this.$createElement,a=this._self._c||t;return a("p",[a("strong",[this._v("HEADS UP")]),this._v(": All "),a("code",[this._v("microbox")]),this._v(" commands "),a("em",[this._v("must")]),this._v(" be run from within your project folder.")])},function(){var t=this.$createElement,a=this._self._c||t;return a("h3",{attrs:{id:"add-a-boxfile-yml"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#add-a-boxfile-yml","aria-hidden":"true"}},[this._v("#")]),this._v(" Add a boxfile.yml")])},function(){var t=this.$createElement,a=this._self._c||t;return a("p",[this._v("Microbox uses a "),a("a",{attrs:{href:"https://docs.microbox.cloud/boxfile/",target:"\\_blank"}},[this._v("boxfile.yml")]),this._v(" to configure your app's environment.")])},function(){var t=this.$createElement,a=this._self._c||t;return a("p",[this._v("At the root of your project create a "),a("code",[this._v("boxfile.yml")]),this._v(" telling Microbox you want to use the Ruby "),a("a",{attrs:{href:"https://docs.microbox.cloud/engines/",target:"\\_blank"}},[this._v("engine")]),this._v(":")])},function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("pre",{pre:!0,attrs:{class:"language-yaml"}},[s("code",[s("span",{attrs:{class:"token key atrule"}},[t._v("run.config")]),s("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n  "),s("span",{attrs:{class:"token key atrule"}},[t._v("engine")]),s("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" ruby\n\n  "),s("span",{attrs:{class:"token key atrule"}},[t._v("extra_packages")]),s("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n    "),s("span",{attrs:{class:"token punctuation"}},[t._v("-")]),t._v(" nodejs\n")])])},function(){var t=this.$createElement,a=this._self._c||t;return a("h2",{attrs:{id:"generate-a-rails-app"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#generate-a-rails-app","aria-hidden":"true"}},[this._v("#")]),this._v(" Generate a Rails App")])},function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[s("span",{attrs:{class:"token comment"}},[t._v("# drop into a microbox console")]),t._v("\nmicrobox run\n\n"),s("span",{attrs:{class:"token comment"}},[t._v("# install the rails gem so we can use it to generate our app")]),t._v("\ngem "),s("span",{attrs:{class:"token function"}},[t._v("install")]),t._v(" rails\n\n"),s("span",{attrs:{class:"token comment"}},[t._v("# generate our new rails app")]),t._v("\nrails new "),s("span",{attrs:{class:"token keyword"}},[t._v(".")]),t._v("\n\n"),s("span",{attrs:{class:"token comment"}},[t._v("# exit the console")]),t._v("\n"),s("span",{attrs:{class:"token keyword"}},[t._v("exit")]),t._v("\n")])])},function(){var t=this.$createElement,a=this._self._c||t;return a("h2",{attrs:{id:"configure-rails"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#configure-rails","aria-hidden":"true"}},[this._v("#")]),this._v(" Configure Rails")])},function(){var t=this.$createElement,a=this._self._c||t;return a("h3",{attrs:{id:"listen-on-0-0-0-0"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#listen-on-0-0-0-0","aria-hidden":"true"}},[this._v("#")]),this._v(" Listen on 0.0.0.0")])},function(){var t=this.$createElement,a=this._self._c||t;return a("p",[this._v("To allow connections from the host machine into the app's container, you'll need to configure your app to listen on all available IP's (0.0.0.0) by modifying the "),a("code",[this._v("config/boot.rb")]),this._v(":")])},function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("pre",{pre:!0,attrs:{class:"language-ruby"}},[s("code",[s("span",{attrs:{class:"token keyword"}},[t._v("require")]),t._v(" "),s("span",{attrs:{class:"token string"}},[t._v("'rails/commands/server'")]),t._v("\n"),s("span",{attrs:{class:"token keyword"}},[t._v("module")]),t._v(" "),s("span",{attrs:{class:"token constant"}},[t._v("Rails")]),t._v("\n  "),s("span",{attrs:{class:"token keyword"}},[t._v("class")]),t._v(" "),s("span",{attrs:{class:"token class-name"}},[t._v("Server")]),t._v("\n    "),s("span",{attrs:{class:"token keyword"}},[t._v("alias")]),t._v(" "),s("span",{attrs:{class:"token symbol"}},[t._v(":_default_options")]),t._v(" "),s("span",{attrs:{class:"token symbol"}},[t._v(":default_options")]),t._v("\n    "),s("span",{attrs:{class:"token keyword"}},[t._v("def")]),t._v(" default_options\n      _default_options"),s("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("merge"),s("span",{attrs:{class:"token operator"}},[t._v("!")]),s("span",{attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{attrs:{class:"token constant"}},[t._v("Host")]),s("span",{attrs:{class:"token punctuation"}},[t._v(":")]),s("span",{attrs:{class:"token string"}},[t._v("'0.0.0.0'")]),s("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    "),s("span",{attrs:{class:"token keyword"}},[t._v("end")]),t._v("\n  "),s("span",{attrs:{class:"token keyword"}},[t._v("end")]),t._v("\n"),s("span",{attrs:{class:"token keyword"}},[t._v("end")]),t._v("\n")])])},function(){var t=this.$createElement,a=this._self._c||t;return a("h2",{attrs:{id:"add-a-local-dns"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#add-a-local-dns","aria-hidden":"true"}},[this._v("#")]),this._v(" Add a local DNS")])},function(){var t=this.$createElement,a=this._self._c||t;return a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[this._v("microbox dns add local rails.dev\n")])])},function(){var t=this.$createElement,a=this._self._c||t;return a("h2",{attrs:{id:"run-the-app"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#run-the-app","aria-hidden":"true"}},[this._v("#")]),this._v(" Run the app")])},function(){var t=this.$createElement,a=this._self._c||t;return a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[this._v("microbox run rails s\n")])])},function(){var t=this.$createElement,a=this._self._c||t;return a("p",[this._v("Visit your app at "),a("a",{attrs:{href:"http://rails.dev:3000",target:"\\_blank"}},[this._v("rails.dev:3000")])])},function(){var t=this.$createElement,a=this._self._c||t;return a("h2",{attrs:{id:"explore"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#explore","aria-hidden":"true"}},[this._v("#")]),this._v(" Explore")])},function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[s("span",{attrs:{class:"token comment"}},[t._v("# drop into a Microbox console")]),t._v("\nmicrobox run\n\n"),s("span",{attrs:{class:"token comment"}},[t._v("# where ruby is installed,")]),t._v("\nruby -v\n\n"),s("span",{attrs:{class:"token comment"}},[t._v("# your gems are available,")]),t._v("\ngem list\n\n"),s("span",{attrs:{class:"token comment"}},[t._v("# and your code is mounted")]),t._v("\n"),s("span",{attrs:{class:"token function"}},[t._v("ls")]),t._v("\n\n"),s("span",{attrs:{class:"token comment"}},[t._v("# exit the console")]),t._v("\n"),s("span",{attrs:{class:"token keyword"}},[t._v("exit")]),t._v("\n")])])},function(){var t=this.$createElement,a=this._self._c||t;return a("h2",{attrs:{id:"now-what"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#now-what","aria-hidden":"true"}},[this._v("#")]),this._v(" Now what?")])},function(){var t=this.$createElement,a=this._self._c||t;return a("ul",[a("li",[a("a",{attrs:{href:"/ruby/rails/add-a-database"}},[this._v("Add a Database")])]),a("li",[a("a",{attrs:{href:"/ruby/rails/frontend-javascript"}},[this._v("Frontend Javascript")])]),a("li",[a("a",{attrs:{href:"/ruby/rails/local-evars"}},[this._v("Local Environment Variables")])]),a("li",[a("a",{attrs:{href:"/ruby/rails"}},[this._v("Back to Rails overview")])])])}],!1,null,null,null);a.default=e.exports}}]);
