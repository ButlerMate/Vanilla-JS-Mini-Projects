const range = document.getElementById('range');
const label = document.getElementById('label');
const root = document.documentElement;
const thumbW = getComputedStyle(root).getPropertyValue('--thumb-width');
const thumbWidth = +thumbW.substring(0, thumbW.length - 2);

const rangeW = getComputedStyle(range).getPropertyValue('width');
const rangeWidth = rangeW.substring(0, rangeW.length -2)
const labelW = getComputedStyle(label).getPropertyValue('width');
const labelWidth = labelW.substring(0, labelW.length -2)

console.log(rangeWidth, labelWidth, thumbWidth)
range.addEventListener('input', (e) => {
	const value = +e.target.value;
	const label = e.target.nextElementSibling;

    const max = +e.target.max
    const min = +e.target.min
    

    
    const left = value * ((rangeWidth - thumbWidth) / max) - (labelWidth - thumbWidth) / 2

    label.style.left = `${left}px`

	label.innerHTML = value;
});
