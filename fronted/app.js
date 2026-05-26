async function loadData() {

    const response = await fetch(
        "https://jerson-dashboard-api.azurewebsites.net/api/ProcessTransactions"
    );

    const data = await response.json();

    let rows = "";
    let successCount = 0;
    let failedCount = 0;

    data.forEach(transaction => {

        rows += `
            <tr>
                <td>${transaction.status}</td>
                <td>${transaction.amount}</td>
            </tr>
        `;
        if (transaction.status === "success") {
            successCount++;
        }
        
        if (transaction.status === "failed") {
            failedCount++;
        }

    });

    document.getElementById("result").innerHTML = rows;
    document.getElementById("totalTransactions").innerText = data.length;
    document.getElementById("successTransactions").innerText = successCount;
    document.getElementById("failedTransactions").innerText = failedCount;
    
}

async function createTransaction() {

    const status = document.getElementById("status").value;

    const amount = parseInt(
        document.getElementById("amount").value
    );

    const response = await fetch(
        "https://jerson-dashboard-api.azurewebsites.net/api/CreateTransaction",
        {
            method: "POST",

            headers: {
                "Content-Type": "application/json"
            },

            body: JSON.stringify({
                status: status,
                amount: amount
            })
        }
    );

    const data = await response.json();

    alert(data.message);

    loadData();
}