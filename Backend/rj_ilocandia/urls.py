from django.contrib import admin
from django.urls import path, include

urlpatterns = [
    path('admin/', admin.site.urls),
    path('api/inquiries/', include('inquiries.urls')),
    path('api/accounts/', include('accounts.urls')),  
]
