from django.db import models

# Create your models here.


class BookConsignment(models.Model):
    shipment_type = models.CharField(max_length=255)
    Cargo_type = models.EmailField()
    weight = models.FloatField()
    volume = models.FloatField()
    no_of_pieces = models.IntegerField()
    description = models.TextField()
    origine_country = models.CharField(max_length=255)
    city_or_port_origine = models.CharField(max_length=255)
    pickup_address = models.TextField()
    destination_country = models.CharField(max_length=255)
    city_or_port_destination = models.CharField(max_length=255)
    deluvery_address = models.TextField()
    date=models.DateField()
    name=models.CharField(max_length=255)
    company_name=models.CharField(max_length=255)
    email=models.EmailField()
    phone=models.CharField(max_length=20)
    message=models.TextField()
    created_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return f"{self.name} - {self.shipment_type} - {self.destination_country}"
    


class Emails(models.Model):
    email = models.EmailField(unique=True)
    created_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return self.email