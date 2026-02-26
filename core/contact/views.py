from rest_framework.views import APIView
from rest_framework.response import Response

from .serializers import BookConsignmentSerializer, ContactMessageSerializer
from .emails.contact_message_email import send_contact_message_email
from .emails.book_consignment_email import send_book_consignment_email
import logging
logger = logging.getLogger(__name__)



class BookConsignmentView(APIView):
    def post(self, request):
        serializer = BookConsignmentSerializer(data=request.data)

        if serializer.is_valid():
            consignment = serializer.save()

            # send email (clean separation)
            for attempt in range(2):
                try:
                    send_book_consignment_email(consignment)
                    break
                except Exception as e:
                    logger.warning("Email attempt %s failed: %s", attempt + 1, e)

            return Response(
                {
                    "message": "Book consignment submitted successfully",
                    "data": serializer.data,
                },
                status=201,
            )

        return Response(serializer.errors, status=400)



class ContactMessageView(APIView):
    def post(self, request):
        serializer = ContactMessageSerializer(data=request.data)

        if serializer.is_valid():
            contact_message = serializer.save()

            # send email (clean separation)
            for attempt in range(2):
                try:
                    send_contact_message_email(contact_message)
                    break
                except Exception as e:
                    logger.warning("Email attempt %s failed: %s", attempt + 1, e)

            return Response(
                {
                    "message": "Contact message submitted successfully",
                    "data": serializer.data,
                },
                status=201,
            )

        return Response(serializer.errors, status=400)