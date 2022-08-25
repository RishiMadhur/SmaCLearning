import os
from urllib import response
#from django_mongodb_engine.storage import GridFSStorage
import pymongo
from pymongo import MongoClient
from rest_framework import status
from rest_framework.response import Response

from utils.check_data import check_presence

from utils.mongo_function import connect




class child_details:
    def __init__(self,docs):
        self.docs=docs
       
    
    def insert_data(self,db): #insertion function
       # mylist=[
        #    {'first_name':self.first_name,'mother_name':self.mother_name,'father_name':self.father_name,'phone_number':self.phone_number, 'email' : self.email, 'date_of_birth':self.date_of_birth, 'address':self.address},
        #]
        db.registration_details.insert_one({'docs':self.docs})
   # def login_data(self,db):
    #    l1=[{'user_name' : self.user_name,'password':self.password,}]
     #   db.login_details.insert_many(l1)    
    
    

 
def post_document_data(request):
    """
    Updating the major information of a particular child and update the stage to student_full_details/guardian_information depending on the guardian details presence

    Request.body need to have :
    parent_id
    student_id
    class_no
    section
    date_of_birth
    blood_group
    emergency_contact_no
    student_aadhar
    student_school_id
    student_profile

    Return
    status        : True/False depending on the successful execution of the request
    message       : Informative message, describing the response
    student_id    : ID against which the data has been updated
    upload_status : List containing the upload status of all the media files
    """




    res, message = check_presence(request, [])

    if not res:
        return Response({'status' : False, 'message' : message}, status = 400)
    docs = request.FILES.get('docs')
    #mother_name = request.data.get('mother_name')
    #father_name = request.data.get('father_name')
    #phone_number = request.data.get('phone_number')
    #email=request.data.get('email')
    #date_of_birth = request.data.get('date_of_birth')
    #address = request.data.get('address')
    
    #
    print(res)
  
    try:
        client = connect()
       
    except:
       
        return Response({'status' : False, 'message' : 'Error in connecting with database'}, 502)

    db = client.documents  # database name  
    docs1=docs.read()
    new_child = child_details(docs1)
    new_child.insert_data(db)
    return Response("document  success !",status=200)