from django.contrib import admin
from unfold.admin import ModelAdmin
from .models import BookConsignment, Emails

@admin.register(BookConsignment)
class BookConsignmentAdmin(ModelAdmin):
    list_display = ('name', 'company_name', 'email', 'phone', 'shipment_type', 'origine_country', 'destination_country', 'weight', 'no_of_pieces', 'date', 'created_at')
    list_filter = ('shipment_type', 'origine_country', 'destination_country', 'date', 'created_at')
    search_fields = ('name', 'company_name', 'email', 'phone', 'shipment_type', 'origine_country', 'destination_country', 'description', 'message')
    readonly_fields = ('created_at',)
    date_hierarchy = 'created_at'
    list_per_page = 25
    
    fieldsets = (
        ('Contact Information', {
            'fields': ('name', 'company_name', 'email', 'phone')
        }),
        ('Shipment Details', {
            'fields': ('shipment_type', 'Cargo_type', 'date', 'weight', 'volume', 'no_of_pieces', 'description')
        }),
        ('Origin Information', {
            'fields': ('origine_country', 'city_or_port_origine', 'pickup_address'),
            'classes': ('collapse',)
        }),
        ('Destination Information', {
            'fields': ('destination_country', 'city_or_port_destination', 'deluvery_address'),
            'classes': ('collapse',)
        }),
        ('Additional Information', {
            'fields': ('message', 'created_at'),
            'classes': ('collapse',)
        }),
    )
    
    def get_queryset(self, request):
        qs = super().get_queryset(request)
        return qs.order_by('-created_at')

@admin.register(Emails)
class EmailsAdmin(ModelAdmin):
    list_display = ('email', 'created_at')
    search_fields = ('email',)
    list_filter = ('created_at',)
    readonly_fields = ('created_at',)
    date_hierarchy = 'created_at'
    list_per_page = 50
