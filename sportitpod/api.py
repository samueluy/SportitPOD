from rest_framework.decorators import api_view
from rest_framework.response import Response
from .post_scraper import get_title, get_comments
from django.http import JsonResponse


@api_view(["GET"])
def get_data(request):
    result = get_comments()
    return JsonResponse(result, safe=False)
