
from django.urls import path
from .views import story_list_view, story_detail_view

urlpatterns = [
    path('storys/', story_list_view),
    path('storys/<int:story_id>/', story_detail_view)
]