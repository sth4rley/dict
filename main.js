const { getQuestions, getRandomList, getSelectableAlternatives } = require('./core')
const term = require('terminal-kit').terminal

// GAME SETUP
let listaDeAlternatives = getRandomList(5)
let listadePares = getQuestions(listaDeAlternatives)

term.gridMenu( getSelectableAlternatives(listadePares) , function( error , response ) {
	term( '\n' ).eraseLineAfter.green(
		"#%s selected: %s (%s,%s)\n" ,
		response.selectedIndex ,
		response.selectedText ,
		response.x ,
		response.y
	) ;
	process.exit() ;
} ) ;
