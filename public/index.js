const init = (selector, selectorType = 'querySelectorAll') => {
	//if the first character in selector variable is '#', then chose querySelector
	if (selector.charAt(0) === '#') return document.querySelector(selector)
	// if nothing is passed as an argument, querySelectorAll is chosen
	return document[selectorType](selector)
};
const faqAnswers = init('.faqs--answers');
const faqQuestionsDiv = init('.faqs--questions-div');
const footerSubTemplatesName = init('.footer-sub-templates--name');
const footerSubTemplatesDropdown = init('.footer-sub-templates--dropdown');
const menuBox = init('#menu-box');
const openMenu = init('#open-menu');
const closeMenu = init('#close-menu');
const nav = init('#nav-bar');
const planDuration = init('.plan--duration');
const toggleMonthly = init('.toggle-div--monthly');
const toggleYearly = init('.toggle-div--yearly');
const checkBox = init('#checkbox');

const getStyleValue = (element, property) => parseInt(getComputedStyle(element, undefined).getPropertyValue(property));
const nodeListArray = Array.from(footerSubTemplatesDropdown); //Array.from() converts the nodelist into an array
let initialHeight = nodeListArray.map(data =>{
	return getStyleValue(data, 'height')
})

faqQuestionsDiv.forEach((element, index) =>{
	faqQuestionsDiv[index].onclick = () =>{
		faqAnswers[index].style.height = !getStyleValue(faqAnswers[index], 'height') ? 'auto' : '0px';
	}
})

footerSubTemplatesName.forEach((element, index) =>{
	nodeListArray[index].style.height = '0'
	footerSubTemplatesName[index].onclick = () =>{
		footerSubTemplatesDropdown[index].style.height = !getStyleValue(footerSubTemplatesDropdown[index], 'height') ? `${initialHeight[index]}px` : '0';
	}
});

menuBox.onclick = () =>{
	openMenu.style.opacity = !getStyleValue(openMenu, 'opacity') ? 1 : 0
	closeMenu.style.opacity = !getStyleValue(closeMenu, 'opacity') ? 1 : 0
	nav.style.marginLeft = !getStyleValue(nav, 'margin-left') ? '100vw' : '0vw';
}

// checkBox.onclick = () =>{
// 	checkBox.checked ? (toggleMonthly.classList.toggle('selected'), toggleYearly.classList.toggle('selected')) : (toggleMonthly.classList.toggle('selected'), toggleYearly.classList.toggle('selected'))
// }