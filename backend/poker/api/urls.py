from django.urls import path
from .views import story_list_view, story_detail_view, story_create_view, story_delete_view

urlpatterns = [
    path('stories/', story_list_view),
    path('stories/<int:story_id>/', story_detail_view),
    path('stories/<int:story_id>/delete/', story_delete_view),
    path('stories/create/', story_create_view)
]