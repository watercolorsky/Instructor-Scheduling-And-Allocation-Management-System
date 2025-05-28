from django.urls import path
from .views import LoginView, TheoreticalInquiryCreateView, TheoreticalInquiryListView

urlpatterns = [
    path('login/', LoginView.as_view(), name='login'),
    path('theoretical-inquiry/', TheoreticalInquiryCreateView.as_view(), name='theoretical-inquiry'),
    path('theoretical-inquiry-list/', TheoreticalInquiryListView.as_view(), name='theoretical-inquiry-list'),  # This must be here
]
