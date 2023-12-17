CREATE TABLE IF NOT EXISTS user_account (
    user_account_id SERIAL PRIMARY KEY,
    first_name varchar(100),
    last_name varchar(100),
    email varchar(100),
    date timestamp(6) default CURRENT_TIMESTAMP
);

CREATE TABLE IF NOT EXISTS security (
    security_id SERIAL PRIMARY KEY,
    symbol varchar(100),
    date timestamp(6) default CURRENT_TIMESTAMP
);

CREATE TABLE IF NOT EXISTS security_detail (
    security_detail_id SERIAL PRIMARY KEY,
    security_id integer REFERENCES security (security_id),
    symbol varchar(100),
    exchange varchar(100),
    name varchar(256),
    description text,
    date timestamp(6) default CURRENT_TIMESTAMP
);

CREATE TABLE IF NOT EXISTS  security_quote (
    security_quote_id SERIAL PRIMARY KEY,
    security_id integer REFERENCES security (security_id),
    previous_close integer,
    open integer,
    high integer,
    low integer,
    volume integer,
    fifty_two_week_high integer,
    fifty_two_week_low integer,
    date timestamp(6) default CURRENT_TIMESTAMP
);