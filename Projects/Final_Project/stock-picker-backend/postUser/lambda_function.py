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
        UPDATE user_account
            SET first_name = %s,
            last_name = %s,
            email = %s
        WHERE user_account_id = %s
    """
    updated_rows = 0
    try:
        cur = conn.cursor()
        cur.execute(query, (event['first_name'],event['last_name'],event['email'],event['user_account_id']))
        # get the number of updated rows
        updated_rows = cur.rowcount
        # Commit the changes to the database
        conn.commit()
        # Close communication with the PostgreSQL database
        cur.close()
    except (Exception, psycopg2.DatabaseError) as error:
        print(error)

    return updated_rows