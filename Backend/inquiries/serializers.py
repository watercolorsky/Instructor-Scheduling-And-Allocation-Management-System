from rest_framework import serializers
from .models import DrivingCourseInquiry

class DrivingCourseInquirySerializer(serializers.ModelSerializer):
    class Meta:
        model = DrivingCourseInquiry
        fields = '__all__'
