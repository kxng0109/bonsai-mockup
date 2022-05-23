const faqAnswers = document.querySelectorAll('.faqs--answers');
const faqQuestionsDiv = document.querySelectorAll('.faqs--questions-div');
const footerSubTemplatesName = document.querySelectorAll('.footer-sub-templates--name');
const footerSubTemplatesDropdown = document.querySelectorAll('.footer-sub-templates--dropdown');
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
	console.log(`${initialHeight[index]}px`)
	footerSubTemplatesName[index].onclick = () =>{
		footerSubTemplatesDropdown[index].style.height = !getStyleValue(footerSubTemplatesDropdown[index], 'height') ? `${initialHeight[index]}px` : '0';
	}
})