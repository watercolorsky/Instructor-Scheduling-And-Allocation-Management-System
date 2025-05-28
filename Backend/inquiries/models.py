from django.db import models
#Table for Driving Course Inquiry
class DrivingCourseInquiry(models.Model):
    full_name = models.CharField(max_length=100)
    email = models.EmailField()
    contact_number = models.CharField(max_length=20)
    birthdate = models.DateField()
    age = models.IntegerField()
    gender = models.CharField(max_length=10)
    marital_status = models.CharField(max_length=20)
    nationality = models.CharField(max_length=50)
    house_no = models.CharField(max_length=50)
    purok = models.CharField(max_length=50)
    barangay = models.CharField(max_length=50)
    town_municipality = models.CharField(max_length=50)
    province = models.CharField(max_length=50)
    zip_code = models.CharField(max_length=10)
    birthplace = models.CharField(max_length=100)
    lto_client_id = models.CharField(max_length=50)
    preferred_schedule = models.CharField(max_length=100, blank=True)
    course_type = models.CharField(max_length=100)
    signature = models.FileField(upload_to='signatures/')

    def __str__(self):
        return self.full_name
