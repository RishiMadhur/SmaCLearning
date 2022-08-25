from django.contrib import admin
from django.urls import path,include
from django.views.decorators.csrf import csrf_exempt


from temp.views import documents, registration_data,dashboard,classroom,messages
urlpatterns = [
    
     
     path('registration_data/',csrf_exempt(registration_data.as_view())),
     path('documents/',csrf_exempt(documents.as_view())),
     path('dashboard/',csrf_exempt(dashboard.as_view())),
     path('classroom/',csrf_exempt(classroom.as_view())),
     path('messages/',csrf_exempt(messages.as_view())),
     
]