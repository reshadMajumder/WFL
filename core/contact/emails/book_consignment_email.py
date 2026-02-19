from django.conf import settings
from django.core.mail import EmailMultiAlternatives
from django.template.loader import render_to_string

from ..models import Emails


def send_book_consignment_email(consignment):
    recipients = list(
        Emails.objects.values_list("email", flat=True)
    )

    if not recipients:
        return

    subject = "📦 New Book Consignment Submitted"

    context = {
        "consignment": consignment
    }

    html_content = render_to_string(
        "emails/book_consignment.html",
        context
    )

    email = EmailMultiAlternatives(
        subject=subject,
        body="New book consignment submitted.",  # fallback text
        from_email=settings.DEFAULT_FROM_EMAIL,
        to=recipients,
    )

    email.attach_alternative(html_content, "text/html")
    email.send(fail_silently=False)
