from django.conf import settings
from django.core.mail import EmailMultiAlternatives
from django.template.loader import render_to_string

from ..models import Emails

def send_contact_message_email(contact_message):
    recipients = list(
        Emails.objects.values_list("email", flat=True)
    )

    if not recipients:
        return

    subject = f"📩 New Contact Message: {contact_message.subject}"

    context = {
        "contact_message": contact_message
    }

    html_content = render_to_string(
        "emails/contact_message.html",
        context
    )

    email = EmailMultiAlternatives(
        subject=subject,
        body="New contact message received.",  # fallback text
        from_email=settings.DEFAULT_FROM_EMAIL,
        to=recipients,
    )

    email.attach_alternative(html_content, "text/html")
    email.send(fail_silently=False)