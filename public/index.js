'use strict'
const init = (selector, selectorType = 'querySelectorAll') => {
	//if the first character in selector variable is '#', then chose querySelector
	if (selector.charAt(0) === '#') return document.querySelector(selector)
	// if nothing is passed as an argument, querySelectorAll is chosen
	return document[selectorType](selector)
};
const container = init('#container');
const header = init('#header')
const faqAnswers = init('.faqs--answers');
const faqQuestionsDiv = init('.faqs--questions-div');
const footerSubTemplatesName = init('.footer-sub-templates--name');
const footerSubTemplatesDropdown = init('.footer-sub-templates--dropdown');
const menuBox = init('#menu-box');
const openMenu = init('#open-menu');
const closeMenu = init('#close-menu');
const nav = init('#nav-bar');
const planDuration = init('.plan--duration');
const toggleMonthly = init('#toggle-div--monthly');
const toggleYearly = init('#toggle-div--yearly');
const normalAmount = init('#normal--amount');
const plusAmount = init('#plus--amount');
const plusPopular = init('#plus--popular');
const normalPopular = init('#normal--popular');
const addonsSectionDiv = init('#addons-section--div');
const addonsPrice = init('.price')
const addonsFeatures = init('.addons-will-change');
const checkBox = init('#checkbox');
const navBarOptionsProduct = init('#first-nav-bar--options');
const navBarProducts = init('#nav-bar-products');
const navBarBonsaiWorkflow = init('#nav-bar--bonsai-workflow');
const productsDivBonsaiWorkflow = init('#products--div--bonsai-workflow');
const navBarOptionsTemplates = init('#nav-bar-options--templates');
const navBarTemplates = init('#nav-bar--templates');
const navBarTemplatesExamples = init('.nav-bar-templates-examples');

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
	nav.style.backgroundColor = 'hsl(0 0% 100%)';
	navBarProducts.classList.add('hidden');
	navBarBonsaiWorkflow.classList.add('hidden')
	navBarTemplates.classList.add('hidden')
}

navBarOptionsProduct.onclick = () =>{
	nav.style.backgroundColor = 'hsl(0 0% 95%)';
	navBarProducts.classList.toggle('hidden');
}

productsDivBonsaiWorkflow.onclick = () => navBarBonsaiWorkflow.classList.toggle('hidden');

navBarOptionsTemplates.onclick = () => {
	nav.style.backgroundColor = 'hsl(0 0% 95%)';
	navBarTemplates.classList.toggle('hidden');
}

checkBox.onclick = () =>{
	checkBox.checked ? (toggleMonthly.classList.toggle('selected'), toggleYearly.classList.toggle('selected'), planDuration.forEach((element, index)=> planDuration[index].textContent = '/YEAR'), normalAmount.textContent = '192', plusAmount.textContent = '288', normalPopular.classList.toggle('popular'), plusPopular.classList.toggle('popular'), addonsSectionDiv.classList.toggle('change-addons-section'), addonsPrice[2].textContent = '$100',  addonsPrice[1].textContent = '$90', addonsFeatures[0].textContent = 'Accounting & Tax Assistant', addonsFeatures[1].textContent = 'Manage your freelance finances and always be ready for tax season with easy-to-use accounting and tax tools.') 
	: (toggleMonthly.classList.toggle('selected'), toggleYearly.classList.toggle('selected'), planDuration.forEach((element, index)=> planDuration[index].textContent = '/MONTH'), normalAmount.textContent = '19', plusAmount.textContent = '29', normalPopular.classList.toggle('popular'), plusPopular.classList.toggle('popular'), addonsSectionDiv.classList.toggle('change-addons-section'), addonsPrice[2].textContent = '$10',  addonsPrice[1].textContent = '$9', addonsFeatures[0].textContent = 'Bonsai Tax', addonsFeatures[1].textContent = 'Track expenses, identify write-offs, and estimate quarterly taxes easily.')
}

window.onscroll = () => header.style.backgroundColor =  document.documentElement.scrollTop > 10 &&  document.documentElement.scrollTop < 70 ? "rgb(255 255 255 / 50%)" : document.documentElement.scrollTop > 70 ? "rgb(255 255 255 / 100%)" : "transparent"