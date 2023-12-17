import json
import boto3
import psycopg2

conn = psycopg2.connect(
    database="finance",
    user="postgres",
    password="adminpostgres",
    host="proxy-1702785524109-finance-db.proxy-coolhiu6ujmg.us-east-2.rds.amazonaws.com",
    port='5432'
)

def lambda_handler(event, context):
    query = """
        SELECT sd.symbol, sd.exchange, sd.name, sd.description, sq.open, sq.previous_close, sq.high, sq.low, sq.volume, sq.date
        from security_detail sd
        JOIN security_quote sq
            ON sq.security_id = sd.security_id
        WHERE sd.symbol = %s
    """
    try:
        cur = conn.cursor()
        cur.execute(query, (event['queryStringParameters']['symbol'],))
        rows = cur.fetchall()
        print("The number of parts: ", cur.rowcount)
        for row in rows:
            print(row)
        cur.close()
        conn.commit()
        response = {
            "statusCode": 200,
            "headers": {},
            "body": json.dumps(rows, default=str)
        }
        return response
    except Exception as e:
        print("Database failed due to {}".format(e))