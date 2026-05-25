import azure.functions as func
import json
import os

from azure.data.tables import TableServiceClient

app = func.FunctionApp()

@app.route(route="ProcessTransactions", auth_level=func.AuthLevel.ANONYMOUS)
def ProcessTransactions(req: func.HttpRequest) -> func.HttpResponse:

    try:

        connection_string = os.getenv("AzureWebJobsStorage")

        table_service = TableServiceClient.from_connection_string(
            conn_str=connection_string
        )

        table_client = table_service.get_table_client(
            table_name="transactions"
        )

        entities = table_client.list_entities()

        results = []

        for entity in entities:

            results.append({
                "status": entity.get("status"),
                "amount": entity.get("amount")
            })

        return func.HttpResponse(
            json.dumps(results),
            mimetype="application/json",
            status_code=200
        )

    except Exception as e:

        return func.HttpResponse(
            str(e),
            status_code=500
        )