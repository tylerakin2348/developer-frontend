from django.contrib import admin
from django.urls import path, include                 # add this
from rest_framework import routers                    # add this
from polls import views                            # add this

router = routers.DefaultRouter()                      # add this
router.register(r'polls', views.TodoView, 'poll')     # add this
router.register(r'index', views.IndexView, 'index')     # add this

urlpatterns = [
    path('', views.index),
    path('admin/', admin.site.urls),
    path('api/', include(router.urls))                # add this
]
