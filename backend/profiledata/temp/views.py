from django.shortcuts import render
from django.shortcuts import render
from rest_framework.views import APIView
from temp.connections.registration import post_registration_data
from temp.connections.docs import post_document_data
from temp.connections.dash_board import post_dashboard_data
from temp.connections.classroom import post_classroom_data
from temp.connections.messages import post_messages_data
# Create your views here.
class registration_data(APIView):
    def post(self, request, format=None):
        return post_registration_data(request)
class documents(APIView):
    def post(self, request, format=None):
        return post_document_data(request)        
class dashboard(APIView):
    def post(self, request, format=None):
        return post_dashboard_data(request)
class classroom(APIView):
    def post(self, request, format=None):
        return post_classroom_data(request) 
class messages(APIView):
    def post(self, request, format=None):
        return post_messages_data(request) 