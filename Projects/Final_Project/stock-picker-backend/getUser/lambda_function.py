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
    try:
        cursor = conn.cursor()
        query = "SELECT user_account_id, first_name, last_name, email from user_account"
        cursor.execute(query)
        column_names = [x[0] for x in cursor.description]
        result = cursor.fetchall()
        print(result)
        data = []
        for row in result:
            print(row)
            row_data = {}
            for name, value in zip(column_names, row):
              if isinstance(value, int):
                row_data[name] = json.dumps(value)
              else:
                row_data[name] = value
            data.append(row_data)
        
        cursor.close()
        conn.commit()
        response = {
            "statusCode": 200,
            "headers": {},
            "body": json.dumps(data)
        }
        return response        
    except Exception as e:
        print("Database failed due to {}".format(e))