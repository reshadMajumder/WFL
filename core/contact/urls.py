from django.urls import path

from .views import BookConsignmentView, ContactMessageView
urlpatterns = [
    path('book-consignment/', BookConsignmentView.as_view(), name='book-consignment'),
    path('contact-message/', ContactMessageView.as_view(), name='contact-message'),

]
