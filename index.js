#! node


var fs = require('fs');
var path = require('path');

var config = {};
process.argv.slice(2).forEach( function (item) {
  switch (item) {
    case "-im":
      config.Immutable = true;
      break;
  }
});

function copyTemplate (from, to) {
  from = path.join(__dirname, 'templates', from);
  write(to, fs.readFileSync(from, 'utf-8'))
}
function write (path, str, mode) {
  fs.writeFileSync(path, str)
}
function mkdir (path, fn) {
  fs.mkdir(path, function (err) {
    fn && fn()
  })
}
var PATH = ".";
if(process.argv.length) {
  copyTemplate("index.html", PATH + '/index.html');
}
/*
  生成目录
  1.配置文件
  2.build webpack打包配置
  3.src
*/
copyTemplate(".babelrc", PATH + '/.babelrc');
copyTemplate(".eslintignore", PATH + '/.eslintignore');
copyTemplate(".eslintrc.js", PATH + '/.eslintrc.js');
copyTemplate(".gitignore", PATH + '/.gitignore');
copyTemplate(".gitignore", PATH + '/.gitignore');
copyTemplate(".postcssrc.js", PATH + '/.postcssrc.js');
copyTemplate("eslint.md", PATH + '/eslint.md');
copyTemplate("kos-config.js", PATH + '/kos-config.js');
copyTemplate("package.json", PATH + '/package.json');


mkdir(PATH + '/build',function () {
  copyTemplate("build/build.js",PATH + '/build/build.js');
  copyTemplate("build/config.js",PATH + '/build/config.js');
  copyTemplate("build/utils.js",PATH + '/build/utils.js');
  copyTemplate("build/webpack.base.conf.js",PATH + '/build/webpack.base.conf.js');
  copyTemplate("build/webpack.dev.conf.js",PATH + '/build/webpack.dev.conf.js');
  copyTemplate("build/webpack.pro.conf.js",PATH + '/build/webpack.pro.conf.js');
});


mkdir(PATH + '/src', function () {
  copyTemplate("src/main.js",PATH + '/src/main.js');
  copyTemplate("src/router.js",PATH + '/src/router.js');
  mkdir(PATH + '/src/App',function () {
    copyTemplate("/src/App/index.js",PATH + '/src/App/index.js');
    copyTemplate("/src/App/index.less",PATH + '/src/App/index.less');
    copyTemplate("/src/App/model.js",PATH + '/src/App/model.js');
    mkdir(PATH + '/src/App/layout',function () {
      copyTemplate("/src/App/layout/Header.js",PATH + '/src/App/layout/Header.js');
      copyTemplate("/src/App/layout/header.less",PATH + '/src/App/layout/header.less');
      copyTemplate("/src/App/layout/Menu.js",PATH + '/src/App/layout/Menu.js');
      copyTemplate("/src/App/layout/Sider.js",PATH + '/src/App/layout/Sider.js');
      copyTemplate("/src/App/layout/sider.less",PATH + '/src/App/layout/sider.less')
    });
  });
  mkdir(PATH + '/src/components',function () {
    mkdir(PATH + '/src/components/AutoWrapper',function () {
      copyTemplate("/src/components/AutoWrapper/index.js",PATH + '/src/components/AutoWrapper/index.js');
    });
  });
  mkdir(PATH + '/src/image',function () {
    mkdir(PATH + '/src/image',function () {
      copyTemplate("/src/image/logo.jpg",PATH + '/src/image/logo.jpg');
    });
  });
  mkdir(PATH + '/src/pages',function () {
    copyTemplate("/src/pages/index.js",PATH + '/src/pages/index.js');
    copyTemplate("/src/pages/router.js",PATH + '/src/pages/router.js');
    mkdir(PATH + '/src/pages/demo',function () {
      copyTemplate("/src/pages/demo/index.js",PATH + '/src/pages/demo/index.js');
      copyTemplate("/src/pages/demo/model.js",PATH + '/src/pages/demo/model.js');
      copyTemplate("/src/pages/demo/router.js",PATH + '/src/pages/demo/router.js');
      mkdir(PATH + '/src/pages/demo/demoChild',function () {
        copyTemplate("/src/pages/demo/demoChild/index.js",PATH + '/src/pages/demo/demoChild/index.js');
        copyTemplate("/src/pages/demo/demoChild/model.js",PATH + '/src/pages/demo/demoChild/model.js');
      });
    });
  });
  mkdir(PATH + '/src/themes',function () {
    mkdir(PATH + '/src/themes',function () {
      copyTemplate("/src/themes/default.less",PATH + '/src/themes/default.less');
      copyTemplate("/src/themes/index.less",PATH + '/src/themes/index.less');
      copyTemplate("/src/themes/mixin.less",PATH + '/src/themes/mixin.less');
      copyTemplate("/src/themes/vars.less",PATH + '/src/themes/vars.less');
    });
  });
});

console.log("build complete.");
console.log("KOS-Cli 天下无敌");
