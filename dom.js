document.getElementById('triangle-calculate-btn').addEventListener('click', function () {
    const cardTitle = document.getElementById('triangle-title').innerText;
    const base = getInputValue('triangle-b');
    const height = getInputValue('triangle-h');
    //validation
    if (isNaN(base) || isNaN(height) || base <= 0 || height <= 0) {
        return alert('Please provide valid number.')
    }
   
    const result = parseFloat((0.5 * base * height).toFixed(2));
    displayResult('ordered-list', cardTitle, result)
})


document.getElementById('rectangle-calculate-btn').addEventListener('click', function () {
    const cardTitle = document.getElementById('rectangle-title').innerText;
    const width = getInputValue('rectangle-w');
    const length = getInputValue('rectangle-l');
    //validation
    if (isNaN(width) || isNaN(length) || width <= 0 || length <= 0) {
        return alert('Please provide valid number.')
    }
   
    const result = parseFloat((width * length).toFixed(2));
    displayResult('ordered-list', cardTitle, result)
})


document.getElementById('perallelogram-calculate-btn').addEventListener('click', function () {
    const cardTitle = document.getElementById('perallelogram-title').innerText;
    const base = getInputValue('perallelogram-b');
    const height = getInputValue('perallelogram-h');
    //validation
    if (isNaN(base) || isNaN(height) || base <= 0 || height <= 0) {
        return alert('Please provide valid number.')
    }

    const result = parseFloat((base * height).toFixed(2));
    displayResult('ordered-list', cardTitle, result)
})

document.getElementById('rhombus-calculate-btn').addEventListener('click', function () {
    const cardTitle = document.getElementById('rhombus-title').innerText;
    const diagonal1 = getInputValue('rhombus-d1');
    const diagonal2 = getInputValue('rhombus-d2');
    //validation
    if (isNaN(diagonal1) || isNaN(diagonal2) || diagonal1 <= 0 || diagonal2 <= 0) {
        return alert('Please provide valid number.')
    }
    
    const result = parseFloat((0.5 * diagonal1 * diagonal2).toFixed(2));
    displayResult('ordered-list', cardTitle, result)
})


document.getElementById('pentagon-calculate-btn').addEventListener('click', function () {
    const cardTitle = document.getElementById('pentagon-title').innerText;
    const p = getInputValue('pentagon-p');
    const b = getInputValue('pentagon-b');
   //validation
    if (isNaN(p) || isNaN(b) || p <= 0 || b <= 0) {
        return alert('Please provide valid number.')
    }
    
    const result = parseFloat((0.5 * p * b).toFixed(2));
    displayResult('ordered-list', cardTitle, result)
})


document.getElementById('ellipse-calculate-btn').addEventListener('click', function () {
    const cardTitle = document.getElementById('ellipse-title').innerText;
    const a = getInputValue('ellipse-a');
    const b = getInputValue('ellipse-b');
   //validation
    if (isNaN(a) || isNaN(b) || a <= 0 || b <= 0) {
        return alert('Please provide valid number.')
    }
   
    const result = parseFloat((Math.PI * a * b).toFixed(2));
    displayResult('ordered-list', cardTitle, result)
})





// -------------hover area-------------

document.getElementById('card-id').addEventListener('mouseenter', function () {
    const randomColor = Math.floor(Math.random()*16777215).toString(16);
    document.getElementById('card-id').style.background = "#" + randomColor;
})
    document.getElementById('card-id-2').addEventListener('mouseenter', function () {
    const randomColor = Math.floor(Math.random()*16777215).toString(16);
    document.getElementById('card-id-2').style.background = "#" + randomColor;
})
    document.getElementById('card-id-3').addEventListener('mouseenter', function () {
    const randomColor = Math.floor(Math.random()*16777215).toString(16);
    document.getElementById('card-id-3').style.background = "#" + randomColor;
})
    document.getElementById('card-id-4').addEventListener('mouseenter', function () {
    const randomColor = Math.floor(Math.random()*16777215).toString(16);
    document.getElementById('card-id-4').style.background = "#" + randomColor;
})
    document.getElementById('card-id-5').addEventListener('mouseenter', function () {
    const randomColor = Math.floor(Math.random()*16777215).toString(16);
    document.getElementById('card-id-5').style.background = "#" + randomColor;
})
    document.getElementById('card-id-6').addEventListener('mouseenter', function () {
    const randomColor = Math.floor(Math.random()*16777215).toString(16);
    document.getElementById('card-id-6').style.background = "#" + randomColor;
})


// --------------blog page location-----------

document.getElementById('blog-btn').addEventListener('click', function(){
    window.location = 'blog.html';
})