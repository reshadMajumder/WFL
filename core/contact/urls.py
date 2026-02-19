from django.urls import path

from .views import BookConsignmentView
urlpatterns = [
    path('book-consignment/', BookConsignmentView.as_view(), name='book-consignment'),

]
