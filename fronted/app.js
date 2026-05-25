async function loadData() {

    const response = await fetch(
        "https://jerson-dashboard-api.azurewebsites.net/api/ProcessTransactions"
    );

    const data = await response.json();

    let rows = "";

    data.forEach(transaction => {

        rows += `
            <tr>
                <td>${transaction.status}</td>
                <td>${transaction.amount}</td>
            </tr>
        `;

    });

    document.getElementById("result").innerHTML = rows;
}