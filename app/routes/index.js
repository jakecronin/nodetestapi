console.log('top of index')
const noteRoutes = require('./note_routes');

console.log('in index.js')
module.exports = function(app, db){
	console.log('in index.js exports, calling notesRoutes')
	noteRoutes(app, db);
	console.log('back in index.js after notes routes')
	//other routes if needed
}