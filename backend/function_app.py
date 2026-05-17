import azure.functions as func
import json

app = func.FunctionApp()

@app.route(route="ProcessTransactions", auth_level=func.AuthLevel.ANONYMOUS)
def ProcessTransactions(req: func.HttpRequest) -> func.HttpResponse:

    data = {
        "status": "success",
        "message": "Azure Function running correctly",
        "total_transactions": 150,
        "failed_transactions": 5
    }

    return func.HttpResponse(
        json.dumps(data),
        mimetype="application/json",
        status_code=200
    )
