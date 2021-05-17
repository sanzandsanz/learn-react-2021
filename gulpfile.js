var gulp = require('gulp');
var tm = require('bgtm')(gulp);
var scss = require('bgtm-engine-scss');

var config = {
    src: 'src/scss/**/*.scss',
    dest: 'src/dest'
};

tm.add('sass', {
    runOnBuild: true,
    watch: true,
    watchSource: [
        config.src
    ],
    liveReload: true,
    engine: scss,
    engineOptions: {
        'src': config.src,
        'dest': config.dest
    }
});

tm.run();
