from django.contrib import admin
from django.urls import path
from . import views
from django.conf import settings
from django.conf.urls.static import static
from . import api

urlpatterns = [
    path("admin/", admin.site.urls),
    path("", views.index, name="index"),
    path("api/get-data/", api.get_data, name="get_data")
] + static(settings.STATIC_URL, document_root=settings.STATIC_ROOT)
