document.getElementById('addButton').addEventListener('click', function() {
    var plateNumber = document.getElementById('plateNumber').value;
    var oldCaseNumber = document.getElementById('oldCaseNumber').value;
    var customerID = document.getElementById('customerID').value;
    var customerName = document.getElementById('customerName').value;

    if (plateNumber && oldCaseNumber && customerID && customerName) {
        var listItem = document.createElement('li');
        listItem.textContent = "舊案案號: " + oldCaseNumber + ", 車牌號碼: " + plateNumber + ", 客戶ID: " + customerID + ", 客戶姓名: " + customerName;

        // Create the Query Result button
        var queryButton = document.createElement('button');
        queryButton.textContent = '查詢結果';
        queryButton.classList.add('query-result-button');

        // Add event listener for the button
        queryButton.addEventListener('click', function() {
            // Here you can implement the logic to open a new page and pass data
            window.open('queryResults.html', '_blank');
        });

        listItem.appendChild(queryButton);
        document.getElementById('queryList').appendChild(listItem);

        // Clear the input fields
        document.getElementById('plateNumber').value = '';
        document.getElementById('oldCaseNumber').value = '';
        document.getElementById('customerID').value = '';
        document.getElementById('customerName').value = '';
    } else {
        alert('所有欄位都必須填寫。');
    }
});
