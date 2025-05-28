from rest_framework.generics import CreateAPIView, ListAPIView
from .models import DrivingCourseInquiry
from .serializers import DrivingCourseInquirySerializer

# For submitting inquiries (POST)
class DrivingCourseInquiryCreateView(CreateAPIView):
    queryset = DrivingCourseInquiry.objects.all()
    serializer_class = DrivingCourseInquirySerializer

# For listing inquiries (GET)
class DrivingCourseInquiryListView(ListAPIView):
    queryset = DrivingCourseInquiry.objects.all()
    serializer_class = DrivingCourseInquirySerializer


