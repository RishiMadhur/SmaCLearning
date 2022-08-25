
from pymongo import MongoClient
def connect():
    """Connect to the mongo db

    Returns:
        [MongoClient]: Mongo db connection instance, should use .close() after the uses to properly close the connection.
    """
    return MongoClient('localhost', 27017)