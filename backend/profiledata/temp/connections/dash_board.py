import os
from urllib import response

import pymongo
from pymongo import MongoClient
from rest_framework import status
from rest_framework.response import Response

from utils.check_data import check_presence

from utils.mongo_function import connect




class child_details:
    def __init__(self, total_no_of_classes,total_times_disabled,no_of_assignments):

        self.total_no_of_classes=total_no_of_classes
        self.total_times_disabled=total_times_disabled
        self.no_of_assignments=no_of_assignments

    
    def insert_data(self,db): #insertion function
        mylist=[
            {'total_no_of_classes':self.total_no_of_classes,'total_times_disabled':self.total_times_disabled,'no_of_assignments':self.no_of_assignments},
        ]
        db.dash_board_details.insert_many(mylist)
   # def login_data(self,db):
    #    l1=[{'user_name' : self.user_name,'password':self.password,}]
     #   db.login_details.insert_many(l1)    
    
    

 
def post_dashboard_data(request):
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




    res, message = check_presence(request, ["total_no_of_classes","total_times_disabled","no_of_assignments"])

    if not res:
        return Response({'status' : False, 'message' : message}, status = 400)
    total_no_of_classes = request.data.get('total_no_of_classes')
    total_times_disabled = request.data.get('total_times_disabled')
    no_of_assignments = request.data.get('no_of_assignments')
    
    #
    print(res)
  
    try:
        client = connect()
       
    except:
       
        return Response({'status' : False, 'message' : 'Error in connecting with database'}, 502)

    db = client.dashboard  # database name  

    new_child = child_details(total_no_of_classes,total_times_disabled,no_of_assignments)
    new_child.insert_data(db)
    return Response("register success !",status=200)