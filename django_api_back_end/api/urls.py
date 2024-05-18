from django.urls import path
from api import views

urlpatterns = [
    path('',views.apiOverview, name="api-overview"),
    path('student-details/',views.studentDetails, name="student-details"),
    path('add-student/',views.addStudent, name="add-student"),
    path('student-details/<str:pk>',views.studentDetailsById, name="student-details"),
    path('student-update/<str:pk>',views.studentUpdate, name="student-update"),
    path('student-delete/<str:pk>',views.studentDelete, name="student-delete"),
]
