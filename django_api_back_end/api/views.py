from django.shortcuts import render
from django.http import JsonResponse

from rest_framework.decorators import api_view
from rest_framework.response import Response
from .serializers import StudentSerializer

from .models import StudentModel

@api_view(['GET'])
def apiOverview(request):
    api_urls = {
        'List':'/student-details/',
        'Create':'/add-student/',
        'Detail View':'/student-details/<str:pk>/',
        'Update':'/student-update/<str:pk>',
        'Delete':'/student-delete/<str:pk>'
    }

    return Response(api_urls)

@api_view(['GET'])
def studentDetails(request):
    data = StudentModel.objects.all()
    serializer = StudentSerializer(data, many=True)
    return Response(serializer.data)

@api_view(['POST'])
def addStudent(request):
    serializer = StudentSerializer(data=request.data)

    if serializer.is_valid():
        serializer.save()

    return Response(serializer.data)

@api_view(['GET'])
def studentDetailsById(request, pk):
    data = StudentModel.objects.get(id=pk)
    serializer = StudentSerializer(data, many=False)
    return Response(serializer.data)


@api_view(['POST'])
def studentUpdate(request, pk):
    task = StudentModel.objects.get(id=pk)
    serializer = StudentSerializer(instance=task, data=request.data)

    if serializer.is_valid():
        serializer.save()

    return Response(serializer.data)

@api_view(['DELETE'])
def studentDelete(request, pk):
    task = StudentModel.objects.get(id=pk)
    task.delete()
    return Response("Item Successfully Deleted !")