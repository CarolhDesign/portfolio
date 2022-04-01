/**
* @param {string} selector
* @returns {string} 
*/

export function getDom(selector){
	return document.querySelector('selector')
}

/**
* @param {string} selector
* @param {string} html
*/

export function displayHtml (selector, html){
	getDom(selector).innerHTML = html
}

/**
 * Retourne le displayHTML, le getDOM
 * @param {string} selector 
 * @param {string} html 
 * @param {string} classe 
 */

export function displayHtmlandClass(selector, html, classe){
	displayHtml(selector, html)
	getDom(selector)
	getDom(selector).classList.add(classe)
}