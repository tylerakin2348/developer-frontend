from django.contrib import admin
from .models import Todo, IndexFields # add this

class TodoAdmin(admin.ModelAdmin):  # add this
  list_display = ('title', 'description', 'completed') # add this
admin.site.register(Todo, TodoAdmin) # add this


class IndexAdmin(admin.ModelAdmin):  # add this
  list_display = ('title', 'cal') # add this
# Register your models here.
admin.site.register(IndexFields, IndexAdmin) # add this
