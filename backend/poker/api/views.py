from django.shortcuts import render
from rest_framework.decorators import api_view
from rest_framework.response import Response
from poker.models import Story
from .serializers import StorySerializer

# Create your views here.
@api_view(['GET'])
def story_list_view(request, *args, **kwargs):
    qs = Story.objects.all()
    print(request.user)
    serializer = StorySerializer(qs, many=True)
    # print(serializer.data)
    return Response(serializer.data)

@api_view(['GET'])
def story_detail_view(request, story_id, *args, **kwargs):
    print(request.user)
    qs = Story.objects.filter(id=story_id)
    if not qs.exists():
        return Response({'error': 'Such an object doesnt exist'}, status=404)
    serializer = StorySerializer(qs.first())
    return Response(serializer.data)

@api_view(['POST'])
def story_create_view(request, *args, **kwargs):
    serializer = StorySerializer(data=request.data)
    if serializer.is_valid(raise_exception=True):
        serializer.save()
        return Response(serializer.data, status=201)
    return Response({'error': 'Cannot create a story'}, status=400)

@api_view(['POST', 'DELETE'])
def story_delete_view(request, story_id, *args, **kwargs):
    qs = Story.objects.filter(id=story_id)
    if not qs.exists():
        return Response({}, status=404)
    obj = qs.first()    
    obj.delete()
    return Response({"message":"Story has been deleted"}, status=200)