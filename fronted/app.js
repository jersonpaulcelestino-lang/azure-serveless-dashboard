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