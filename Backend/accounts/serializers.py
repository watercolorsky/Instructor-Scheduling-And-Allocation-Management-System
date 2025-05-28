from rest_framework import serializers
from .models import TheoreticalInquiry

class TheoreticalInquirySerializer(serializers.ModelSerializer):
    class Meta:
        model = TheoreticalInquiry
        fields = '__all__'
