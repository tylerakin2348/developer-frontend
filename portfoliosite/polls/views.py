from django.shortcuts import render

from rest_framework import viewsets          # add this
from .serializers import TodoSerializer, IndexFieldsSerializer     # add this
from .models import Todo, IndexFields                    # add this

# Create your views here.
from django.http import HttpResponse

def index(request):
    title = "test title"
    cal = "test cal"
    # return HttpResponse("<h1>%s</h1><p>%s</p>" % (title, cal))
    return render(request, 'polls/index.html', {'title': title, 'cal': cal})


class IndexView(viewsets.ModelViewSet):       # add this
    serializer_class = IndexFieldsSerializer          # add this
    queryset = IndexFields.objects.all()              # add this

class TodoView(viewsets.ModelViewSet):       # add this
    serializer_class = TodoSerializer          # add this
    queryset = Todo.objects.all()              # add this
