from django.contrib.auth import authenticate
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from rest_framework.permissions import AllowAny
from rest_framework.generics import CreateAPIView
from rest_framework.generics import ListAPIView
from .models import TheoreticalInquiry
from .serializers import TheoreticalInquirySerializer


class LoginView(APIView):
    permission_classes = [AllowAny]  

    def post(self, request):
        username = request.data.get("username")
        password = request.data.get("password")

        if username == 'admin' and password == 'password2025':
            return Response({'success': True})
        else:
            return Response({'success': False, 'error': 'Invalid credentials'}, status=status.HTTP_401_UNAUTHORIZED)


class TheoreticalInquiryCreateView(CreateAPIView):
    queryset = TheoreticalInquiry.objects.all()
    serializer_class = TheoreticalInquirySerializer
    permission_classes = [AllowAny]

class TheoreticalInquiryListView(ListAPIView):
    queryset = TheoreticalInquiry.objects.all()
    serializer_class = TheoreticalInquirySerializer
    permission_classes = [AllowAny]