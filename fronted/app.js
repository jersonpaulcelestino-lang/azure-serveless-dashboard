async function loadData() {

    const response = await fetch(
        "https://jerson-dashboard-api.azurewebsites.net/api/ProcessTransactions"
    );

    const data = await response.json();

    document.getElementById("result").innerHTML =
        JSON.stringify(data, null, 2);
}