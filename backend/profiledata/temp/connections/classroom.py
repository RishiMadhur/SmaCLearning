import os
from urllib import response

import pymongo
from pymongo import MongoClient
from rest_framework import status
from rest_framework.response import Response

from utils.check_data import check_presence

from utils.mongo_function import connect




class child_details:
    def __init__(self, subject_name,faculty_name,timings):

        self.subject_name=subject_name
        self.faculty_name=faculty_name
        self.timings=timings

    
    def insert_data(self,db): #insertion function
        mylist=[
            {'subject_name':self.subject_name,'faculty_name':self.faculty_name,'timings':self.timings},
        ]
        db.dash_board_details.insert_many(mylist)
   # def login_data(self,db):
    #    l1=[{'user_name' : self.user_name,'password':self.password,}]
     #   db.login_details.insert_many(l1)    
    
    

 
def post_classroom_data(request):
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




    res, message = check_presence(request, ["subject_name","faculty_name","timings"])

    if not res:
        return Response({'status' : False, 'message' : message}, status = 400)
    subject_name = request.data.get('subject_name')
    faculty_name = request.data.get('faculty_name')
    timings= request.data.get('timings')
    
    #
    print(res)
  
    try:
        client = connect()
       
    except:
       
        return Response({'status' : False, 'message' : 'Error in connecting with database'}, 502)

    db = client.classroom # database name  

    new_child = child_details(subject_name,faculty_name,timings)
    new_child.insert_data(db)
    return Response("register success !",status=200)