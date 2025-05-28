from django.urls import path
from .views import DrivingCourseInquiryCreateView, DrivingCourseInquiryListView

urlpatterns = [
    path('driving-course/', DrivingCourseInquiryCreateView.as_view(), name='driving-course-inquiry'),
    path('driving-course/list/', DrivingCourseInquiryListView.as_view(), name='driving-course-inquiry-list'),
]
