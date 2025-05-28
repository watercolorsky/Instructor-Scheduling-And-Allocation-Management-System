from django.db import models

class TheoreticalInquiry(models.Model):
    firstname = models.CharField(max_length=100)
    lastname = models.CharField(max_length=100)
    middleinitial = models.CharField(max_length=10)
    birthdate = models.DateField()
    age = models.IntegerField()
    gender = models.CharField(max_length=10)
    maritalstats = models.CharField(max_length=20)
    nationality = models.CharField(max_length=50)
    
    houseno = models.CharField(max_length=50)
    purok = models.CharField(max_length=50)
    barangay = models.CharField(max_length=100)
    townmunicipality = models.CharField(max_length=100)
    province = models.CharField(max_length=100)
    zipcode = models.CharField(max_length=10)
    birthplace = models.CharField(max_length=100)

    elem = models.CharField(max_length=100)
    elem_year = models.CharField(max_length=20)
    highschool = models.CharField(max_length=100)
    highschool_year = models.CharField(max_length=20)
    college = models.CharField(max_length=100)
    college_year = models.CharField(max_length=20)
    course = models.CharField(max_length=100)

    contactno = models.CharField(max_length=20)
    email = models.EmailField()
    ltoid = models.CharField(max_length=100)
    signature = models.FileField(upload_to='signatures/')
    submitted_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return f"{self.firstname} {self.lastname}"
