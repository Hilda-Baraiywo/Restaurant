// Copyright (c) 2024, Hilda Chepkirui and contributors
// For license information, please see license.txt

frappe.ui.form.on("Order", {
	// refresh(frm) {

	// },
    validate: function (frm) {
        frappe.call({
            method: 'restaurant.Services.rest.save_time',
            args: {
                // 'full_name':full_name,
                // 'email':email,
                // 'contact':contact,
                // 'membership_type':membership_type
            },
            callback: function (r) {
                if (r.message) {
                    frm.set_value('order_datetime', r.message);
                } else {
                
                }
            },
        });
    },
});
