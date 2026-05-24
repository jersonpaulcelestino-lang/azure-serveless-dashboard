async function loadData() {

    const response = await fetch(
        "https://function-app-amin.azurewebsites.net/api/ProcessTransactions"
    );

    const data = await response.json();

    document.getElementById("result").innerHTML = `
        <h4>Status: ${data.status}</h4>
        <p>Total Transactions: ${data.total_transactions}</p>
        <p>Failed Transactions: ${data.failed_transactions}</p>
    `;
}