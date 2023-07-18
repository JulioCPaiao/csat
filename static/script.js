function calculatePositiveResolved(event) {
    event.preventDefault();
    
    var totalCsat = parseInt(document.getElementById('total-csat').value);
    var totalResolved = parseInt(document.getElementById('total-resolved').value);
    
    if (totalCsat < 0 || totalResolved < 0) {
        alert('Please enter positive values.');
        return;
    }
    
    var xhr = new XMLHttpRequest();
    xhr.open('POST', '/calculate-positive-resolved', true);
    xhr.setRequestHeader('Content-Type', 'application/json');
    xhr.onreadystatechange = function () {
        if (xhr.readyState === 4 && xhr.status === 200) {
            var result = JSON.parse(xhr.responseText);
            document.getElementById('positive-resolved-result').textContent = 'Total Positive Resolved: ' + result.toFixed(2) + '%';
        }
    };
    xhr.send(JSON.stringify({ 'totalCsat': totalCsat, 'totalResolved': totalResolved }));
}

function calculatePositiveExperience(event) {
    event.preventDefault();
    
    var totalCsat = parseInt(document.getElementById('total-csat-2').value);
    var total5 = parseInt(document.getElementById('total-5').value);
    var total4 = parseInt(document.getElementById('total-4').value);
    
    if (totalCsat < 0 || total5 < 0 || total4 < 0) {
        alert('Please enter positive values.');
        return;
    }
    
    var xhr = new XMLHttpRequest();
    xhr.open('POST', '/calculate-positive-experience', true);
    xhr.setRequestHeader('Content-Type', 'application/json');
    xhr.onreadystatechange = function () {
        if (xhr.readyState === 4 && xhr.status === 200) {
            var result = JSON.parse(xhr.responseText);
            document.getElementById('positive-experience-result').textContent = 'Total Positive Experience: ' + result.toFixed(2) + '%';
        }
    };
    xhr.send(JSON.stringify({ 'totalCsat': totalCsat, 'total5': total5, 'total4': total4 }));
}
