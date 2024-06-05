import frappe
from datetime import datetime, timedelta,time


@frappe.whitelist(allow_guest=True)
def save_time():
    now = datetime.now()
    today_date = now.date()
    current_time = now.strftime("%H:%M:%S")
    return current_time