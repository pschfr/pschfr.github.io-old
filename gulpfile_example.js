var gulp  = require('gulp'),
	gutil = require('gulp-util'),
	ftp   = require('vinyl-ftp');
gulp.task('deploy', function() {
	var conn = ftp.create({
		host: 'paulmakesthe.net',
		user: 'username',
		pass: 'password',
		parallel: 8,
		log: gutil.log
	}),
	globs = '_site/**';

	return gulp.src(globs, { buffer: false })
		  .pipe(conn.newer('/public_html'))
		  .pipe(conn.dest('/public_html'));
});
